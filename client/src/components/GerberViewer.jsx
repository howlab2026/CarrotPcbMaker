import React, { useState, useEffect, useRef } from 'react';
import { 
  Eye, 
  EyeOff, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  RotateCcw, 
  Upload, 
  FileCode, 
  Sparkles, 
  Palette, 
  Cpu, 
  Sliders, 
  Check, 
  HelpCircle,
  Download,
  Share2
} from 'lucide-react';

// Demo PCB Board Datasets with geometric vector commands for realistic Gerber rendering
const DEMO_BOARDS = {
  carrot_keypad: {
    id: 'carrot_keypad',
    name: '🥕 당근 매크로 키패드 (RP2040 4층 보드)',
    dimensions: { width: 52, height: 98 }, // mm
    layersCount: 4,
    description: '당근 실루엣 외형의 4키 핫스왑 기계식 키패드와 RP2040 MCU, Type-C, RGB LED 회로입니다.',
    stats: { pads: 142, vias: 68, drills: 24 },
    defaultColor: 'orange'
  },
  hifi_amp: {
    id: 'hifi_amp',
    name: '🎧 초저노이즈 하이파이 헤드폰 앰프 (2층 보드)',
    dimensions: { width: 85, height: 60 }, // mm
    layersCount: 2,
    description: 'OPA1612 + TPA6120A2 기반 왜곡률 <0.0001%의 스타 그라운드 2층 오디오 기판입니다.',
    stats: { pads: 96, vias: 42, drills: 18 },
    defaultColor: 'green'
  },
  esp32_sensor: {
    id: 'esp32_sensor',
    name: '🌱 베란다 스마트 IoT 센서 보드 (ESP32-C3)',
    dimensions: { width: 38, height: 82 }, // mm
    layersCount: 2,
    description: '토양 수분 정전용량 센서 패턴과 SHT40 온습도, TP4056 배터리 충전 회로가 집적된 보드입니다.',
    stats: { pads: 88, vias: 36, drills: 12 },
    defaultColor: 'purple'
  }
};

const MASK_COLORS = {
  orange: { name: '당근 오렌지', base: '#E65100', mask: '#F57C00', copper: '#FFB74D', silk: '#FFFFFF' },
  green: { name: '클래식 그린', base: '#004D20', mask: '#0F763E', copper: '#81C784', silk: '#FFFFFF' },
  black: { name: '매트 블랙', base: '#1A1A1A', mask: '#262626', copper: '#B0BEC5', silk: '#E0E0E0' },
  blue: { name: '로열 블루', base: '#0D47A1', mask: '#1976D2', copper: '#90CAF9', silk: '#FFFFFF' },
  purple: { name: '매직 퍼플', base: '#4A148C', mask: '#7B1FA2', copper: '#CE93D8', silk: '#FFFFFF' }
};

export default function GerberViewer() {
  const [selectedBoardId, setSelectedBoardId] = useState('carrot_keypad');
  const [maskColorKey, setMaskColorKey] = useState('orange');
  const [zoom, setZoom] = useState(1.0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Layer Visibility states
  const [layers, setLayers] = useState({
    f_silk: { id: 'f_silk', name: 'Top 실크스크린 (F.SilkS)', color: '#FFFFFF', visible: true },
    f_mask: { id: 'f_mask', name: 'Top 솔더마스크 (F.Mask)', color: '#FFB74D', visible: true },
    f_cu: { id: 'f_cu', name: 'Top 동박/패턴 (F.Cu)', color: '#F59E0B', visible: true },
    in1_cu: { id: 'in1_cu', name: 'Inner 1 GND 평면 (In1.Cu)', color: '#10B981', visible: false },
    in2_cu: { id: 'in2_cu', name: 'Inner 2 전원 평면 (In2.Cu)', color: '#3B82F6', visible: false },
    b_cu: { id: 'b_cu', name: 'Bottom 동박/패턴 (B.Cu)', color: '#0D9488', visible: false },
    b_silk: { id: 'b_silk', name: 'Bottom 실크스크린 (B.SilkS)', color: '#E2E8F0', visible: false },
    edge: { id: 'edge', name: '외곽선 및 홀 (Edge.Cuts & Holes)', color: '#EF4444', visible: true }
  });

  const canvasRef = useRef(null);
  const activeBoard = DEMO_BOARDS[selectedBoardId];
  const activePalette = MASK_COLORS[maskColorKey];

  // Reset view on board change
  useEffect(() => {
    setMaskColorKey(activeBoard.defaultColor);
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
  }, [selectedBoardId]);

  // Canvas Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.clearRect(0, 0, width, height);

    // Dark grid background
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    // Grid pattern
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 1;
    const gridSize = 25 * zoom;
    const offsetX = (pan.x + width / 2) % gridSize;
    const offsetY = (pan.y + height / 2) % gridSize;
    ctx.beginPath();
    for (let x = offsetX; x < width; x += gridSize) {
      ctx.moveTo(x, 0); ctx.lineTo(x, height);
    }
    for (let y = offsetY; y < height; y += gridSize) {
      ctx.moveTo(0, y); ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Transform coordinate system to center
    ctx.translate(width / 2 + pan.x, height / 2 + pan.y);
    ctx.scale(zoom, zoom);

    // Scale mm to pixels (1mm = 6px)
    const scale = 5.5;
    const bw = activeBoard.dimensions.width * scale;
    const bh = activeBoard.dimensions.height * scale;
    const bx = -bw / 2;
    const by = -bh / 2;

    // 1. Draw Substrate & Solder Mask Body (Edge.Cuts)
    if (layers.edge.visible) {
      ctx.fillStyle = activePalette.base;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 20;

      // Carrot Shape Outline or Rounded Rect
      if (selectedBoardId === 'carrot_keypad') {
        ctx.beginPath();
        // Custom curved carrot silhouette
        ctx.moveTo(bx + 15, by);
        ctx.lineTo(bx + bw - 15, by);
        ctx.quadraticCurveTo(bx + bw, by + 10, bx + bw, by + 25);
        ctx.bezierCurveTo(bx + bw, by + bh * 0.6, bx + bw * 0.75, by + bh * 0.85, bx + bw / 2, by + bh);
        ctx.bezierCurveTo(bx + bw * 0.25, by + bh * 0.85, bx, by + bh * 0.6, bx, by + 25);
        ctx.quadraticCurveTo(bx, by + 10, bx + 15, by);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.strokeStyle = '#FFD8BE';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      } else {
        // Rounded Rect for standard boards
        ctx.beginPath();
        ctx.roundRect(bx, by, bw, bh, 14);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.strokeStyle = activePalette.mask;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    // 2. Draw Copper Fills / Ground Planes (In1.Cu or F.Cu)
    if (layers.in1_cu.visible) {
      ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
      ctx.fillRect(bx + 10, by + 10, bw - 20, bh - 20);
    }
    if (layers.in2_cu.visible) {
      ctx.fillStyle = 'rgba(59, 130, 246, 0.35)';
      ctx.fillRect(bx + 15, by + 15, bw - 30, bh - 30);
    }

    // 3. Draw Copper Traces (F.Cu)
    if (layers.f_cu.visible) {
      ctx.strokeStyle = activePalette.copper;
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Draw algorithmic circuit traces based on board type
      ctx.beginPath();
      if (selectedBoardId === 'carrot_keypad') {
        // MCU Bus Traces
        for (let i = 0; i < 4; i++) {
          const ky = by + 70 + i * 85;
          ctx.moveTo(bx + 35, ky);
          ctx.lineTo(bx + bw / 2 - 20, ky);
          ctx.lineTo(bx + bw / 2, by + 45 + i * 8);

          // LED Data Chain
          ctx.moveTo(bx + bw - 35, ky);
          ctx.lineTo(bx + bw / 2 + 20, ky);
          ctx.lineTo(bx + bw / 2 + 10, by + 45 + i * 8);
        }
        // USB D+/D- Differential Pair
        ctx.moveTo(bx + bw / 2 - 4, by + 15);
        ctx.lineTo(bx + bw / 2 - 4, by + 35);
        ctx.moveTo(bx + bw / 2 + 4, by + 15);
        ctx.lineTo(bx + bw / 2 + 4, by + 35);
      } else {
        // Grid pattern traces for amplifier / sensor
        for (let i = 0; i < 8; i++) {
          ctx.moveTo(bx + 20, by + 30 + i * 35);
          ctx.lineTo(bx + 60, by + 30 + i * 35);
          ctx.lineTo(bx + 100 + i * 20, by + 60);
          ctx.lineTo(bx + bw - 30, by + 60 + i * 25);
        }
      }
      ctx.stroke();

      // SMD Pads & Lands
      ctx.fillStyle = '#FBBF24';
      if (selectedBoardId === 'carrot_keypad') {
        // 4 Mechanical Switches
        for (let i = 0; i < 4; i++) {
          const ky = by + 75 + i * 90;
          // Switch Pin 1 & 2 pads
          ctx.fillRect(bx + bw / 2 - 45, ky - 8, 16, 12);
          ctx.fillRect(bx + bw / 2 + 30, ky - 8, 16, 12);
          // RGB LED Pads (4-pin)
          ctx.fillRect(bx + bw / 2 - 12, ky + 25, 8, 8);
          ctx.fillRect(bx + bw / 2 + 4, ky + 25, 8, 8);
        }
        // RP2040 QFN Pads
        for (let p = 0; p < 14; p++) {
          ctx.fillRect(bx + bw / 2 - 25, by + 40 + p * 3, 6, 2);
          ctx.fillRect(bx + bw / 2 + 20, by + 40 + p * 3, 6, 2);
        }
      } else {
        // IC Footprints for Amp
        for (let p = 0; p < 8; p++) {
          ctx.fillRect(bx + bw / 2 - 30, by + 40 + p * 8, 12, 5);
          ctx.fillRect(bx + bw / 2 + 18, by + 40 + p * 8, 12, 5);
        }
      }
    }

    // 4. Draw Bottom Copper (B.Cu)
    if (layers.b_cu.visible) {
      ctx.strokeStyle = '#0D9488';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.moveTo(bx + 40, by + bh - 40 - i * 40);
        ctx.lineTo(bx + bw - 40, by + bh - 60 - i * 40);
      }
      ctx.stroke();
    }

    // 5. Draw Silkscreen (F.SilkS)
    if (layers.f_silk.visible) {
      ctx.strokeStyle = activePalette.silk;
      ctx.fillStyle = activePalette.silk;
      ctx.lineWidth = 1.2;

      // Board Title Silkscreen
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      if (selectedBoardId === 'carrot_keypad') {
        ctx.fillText('CARROT 4K KEYPAD', 0, by + 28);
        ctx.font = '10px monospace';
        ctx.fillText('RP2040 • REV 1.2', 0, by + 38);

        // Key outlines
        for (let i = 0; i < 4; i++) {
          const ky = by + 75 + i * 90;
          ctx.strokeRect(bx + bw / 2 - 50, ky - 35, 100, 70);
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(`SW ${i + 1}`, 0, ky - 18);
        }
      } else {
        ctx.fillText(activeBoard.name.split(' ')[1] || 'PCB DESIGN', 0, by + 24);
        ctx.strokeRect(bx + 15, by + 15, bw - 30, bh - 30);
      }
    }

    // 6. Draw Holes & Vias (Edge.Cuts & Drills)
    if (layers.edge.visible) {
      // Vias
      ctx.fillStyle = '#0F172A';
      ctx.strokeStyle = '#FBBF24';
      ctx.lineWidth = 1.5;

      const drawHole = (hx, hy, r) => {
        ctx.beginPath();
        ctx.arc(hx, hy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      };

      if (selectedBoardId === 'carrot_keypad') {
        // 4 Switch Center Holes
        for (let i = 0; i < 4; i++) {
          const ky = by + 75 + i * 90;
          drawHole(0, ky, 8); // center mechanical hole
          drawHole(-25, ky, 3);
          drawHole(25, ky, 3);
        }
        // Mounting corner holes
        drawHole(bx + 15, by + 15, 4);
        drawHole(bx + bw - 15, by + 15, 4);
      } else {
        drawHole(bx + 15, by + 15, 4.5);
        drawHole(bx + bw - 15, by + 15, 4.5);
        drawHole(bx + 15, by + bh - 15, 4.5);
        drawHole(bx + bw - 15, by + bh - 15, 4.5);
      }
    }

    ctx.restore();
  }, [selectedBoardId, maskColorKey, layers, zoom, pan]);

  // Handle Drag / Panning
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Handle Wheel Zoom
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(prev => Math.min(3.5, Math.max(0.4, prev + zoomDelta)));
  };

  const toggleLayer = (layerId) => {
    setLayers(prev => ({
      ...prev,
      [layerId]: { ...prev[layerId], visible: !prev[layerId].visible }
    }));
  };

  const toggleAllLayers = (show) => {
    setLayers(prev => {
      const updated = {};
      Object.keys(prev).forEach(k => {
        updated[k] = { ...prev[k], visible: show };
      });
      return updated;
    });
  };

  return (
    <div className="gerber-viewer-page fade-in">
      {/* Top Banner */}
      <div className="gerber-header-banner">
        <div className="gerber-title-col">
          <span className="gerber-badge">
            <Layers size={14} />
            <span>웹 기반 실시간 거버 뷰어</span>
          </span>
          <h1 className="gerber-main-title">🔍 실시간 인터랙티브 PCB 거버 뷰어</h1>
          <p className="gerber-subtitle">
            별도 캐드 프로그램(KiCad, Altium) 설치 없이 웹 브라우저에서 회로 레이어(F.Cu, B.Cu, 실크스크린, 홀)를 켜고 끄며 회로를 검토할 수 있습니다.
          </p>
        </div>

        {/* Board Switcher Buttons */}
        <div className="demo-board-selector">
          {Object.values(DEMO_BOARDS).map(board => (
            <button
              key={board.id}
              className={`board-select-btn ${selectedBoardId === board.id ? 'active' : ''}`}
              onClick={() => setSelectedBoardId(board.id)}
            >
              <Cpu size={16} />
              <span>{board.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace Grid: Canvas + Sidebar Tools */}
      <div className="gerber-workspace-grid">
        {/* Left / Center: Interactive Canvas */}
        <div className="canvas-wrapper-box">
          {/* Canvas Floating Top Toolbar */}
          <div className="canvas-toolbar">
            <div className="board-info-pill">
              <span className="board-name-badge">{activeBoard.name}</span>
              <span className="dimension-badge">{activeBoard.dimensions.width}mm × {activeBoard.dimensions.height}mm ({activeBoard.layersCount}층)</span>
            </div>

            <div className="toolbar-actions">
              <button className="tool-btn" onClick={() => setZoom(prev => Math.min(3.5, prev + 0.2))} title="확대">
                <ZoomIn size={18} />
              </button>
              <button className="tool-btn" onClick={() => setZoom(prev => Math.max(0.4, prev - 0.2))} title="축소">
                <ZoomOut size={18} />
              </button>
              <button className="tool-btn" onClick={() => { setZoom(1.0); setPan({ x: 0, y: 0 }); }} title="화면 맞춤 (Reset)">
                <RotateCcw size={18} />
              </button>
              <span className="zoom-indicator">{(zoom * 100).toFixed(0)}%</span>
            </div>
          </div>

          {/* HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            width={900}
            height={640}
            className="gerber-canvas"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          />

          {/* Canvas Bottom Hint */}
          <div className="canvas-footer-hint">
            <span>🖱️ 마우스 드래그: 기판 이동(Pan) | 마우스 휠: 확대/축소(Zoom)</span>
          </div>
        </div>

        {/* Right Sidebar: Layer Controls & Colors */}
        <div className="gerber-control-sidebar">
          {/* Color Themes */}
          <div className="control-section">
            <div className="section-header">
              <Palette size={16} className="text-orange" />
              <h3>솔더마스크 색상 테마</h3>
            </div>
            <div className="color-swatches-grid">
              {Object.entries(MASK_COLORS).map(([key, item]) => (
                <button
                  key={key}
                  className={`color-swatch-item ${maskColorKey === key ? 'active' : ''}`}
                  onClick={() => setMaskColorKey(key)}
                >
                  <span className="swatch-circle" style={{ backgroundColor: item.mask }} />
                  <span className="swatch-name">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Layer Visibility Toggles */}
          <div className="control-section">
            <div className="section-header" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Layers size={16} className="text-orange" />
                <h3>레이어별 표시 (ON / OFF)</h3>
              </div>
              <div className="layer-bulk-actions">
                <button type="button" onClick={() => toggleAllLayers(true)} className="mini-link-btn">전체 켜기</button>
                <button type="button" onClick={() => toggleAllLayers(false)} className="mini-link-btn">끄기</button>
              </div>
            </div>

            <div className="layers-list">
              {Object.values(layers).map(layer => (
                <div 
                  key={layer.id} 
                  className={`layer-toggle-row ${layer.visible ? 'active' : ''}`}
                  onClick={() => toggleLayer(layer.id)}
                >
                  <div className="layer-info-left">
                    <span className="layer-color-dot" style={{ backgroundColor: layer.color }} />
                    <span className="layer-name-text">{layer.name}</span>
                  </div>
                  <button className="layer-eye-btn" type="button">
                    {layer.visible ? <Eye size={16} className="text-orange" /> : <EyeOff size={16} className="text-muted" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Board DFM & Inspection Metrics */}
          <div className="control-section">
            <div className="section-header">
              <Sliders size={16} className="text-orange" />
              <h3>기판 제조 스펙 검토</h3>
            </div>
            <div className="board-specs-table">
              <div className="spec-row">
                <span className="spec-name">기판 외형 규격</span>
                <span className="spec-val">{activeBoard.dimensions.width} × {activeBoard.dimensions.height} mm</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">레이어 적층 (Stackup)</span>
                <span className="spec-val">{activeBoard.layersCount} Layers</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">SMD 패드 수</span>
                <span className="spec-val">{activeBoard.stats.pads} 개</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">비아 홀 (Via Stitching)</span>
                <span className="spec-val">{activeBoard.stats.vias} 개</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">스루홀 드릴 (PTH/NPTH)</span>
                <span className="spec-val">{activeBoard.stats.drills} 개</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gerber-viewer-page {
          max-width: 1280px;
          margin: 0 auto;
        }
        .gerber-header-banner {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2.25rem 1.25rem;
          color: white;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25);
          position: relative;
          overflow: hidden;
        }
        .gerber-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          background: rgba(255, 111, 15, 0.2);
          border: 1px solid rgba(255, 111, 15, 0.4);
          color: #FF8A3D;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .gerber-main-title {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        .gerber-subtitle {
          color: #94A3B8;
          font-size: 0.95rem;
          max-width: 760px;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .demo-board-selector {
          display: flex;
          gap: 0.6rem;
          overflow-x: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
        }
        .board-select-btn {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.7rem 1.2rem;
          border-radius: 12px;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.05);
          font-size: 0.9rem;
          font-weight: 700;
          transition: all 0.2s;
          white-space: nowrap;
          border: 1px solid transparent;
        }
        .board-select-btn:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
        .board-select-btn.active {
          background: var(--primary);
          color: white;
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 14px rgba(255, 111, 15, 0.4);
        }
        .gerber-workspace-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 1.5rem;
        }
        @media (max-width: 960px) {
          .gerber-workspace-grid {
            grid-template-columns: 1fr;
          }
        }
        /* Canvas Box */
        .canvas-wrapper-box {
          background: #0F172A;
          border-radius: var(--radius-xl);
          border: 1px solid #334155;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
        }
        .canvas-toolbar {
          padding: 0.85rem 1.25rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #334155;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
        }
        .board-info-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .board-name-badge {
          color: white;
          font-size: 0.9rem;
          font-weight: 800;
        }
        .dimension-badge {
          font-size: 0.75rem;
          background: #334155;
          color: #94A3B8;
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 6px;
        }
        .toolbar-actions {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .tool-btn {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: #1E293B;
          color: #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }
        .tool-btn:hover {
          background: #334155;
          color: var(--primary);
        }
        .zoom-indicator {
          font-size: 0.8rem;
          font-weight: 800;
          color: #94A3B8;
          padding: 0 0.4rem;
        }
        .gerber-canvas {
          width: 100%;
          height: 600px;
          display: block;
          cursor: grab;
        }
        .gerber-canvas:active {
          cursor: grabbing;
        }
        .canvas-footer-hint {
          padding: 0.6rem 1.25rem;
          background: #0B1120;
          border-top: 1px solid #1E293B;
          font-size: 0.78rem;
          color: #64748B;
          text-align: center;
        }
        /* Right Controls Sidebar */
        .gerber-control-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .control-section {
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }
        .section-header h3 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #1E293B;
        }
        .color-swatches-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        .color-swatch-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.65rem;
          border-radius: 8px;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
          transition: all 0.15s;
        }
        .color-swatch-item:hover {
          background: #EEF2F6;
        }
        .color-swatch-item.active {
          border-color: var(--primary);
          background: #FFF2E8;
          color: var(--primary-dark);
        }
        .swatch-circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }
        .layer-bulk-actions {
          display: flex;
          gap: 0.5rem;
        }
        .mini-link-btn {
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--primary);
          background: none;
          padding: 0.1rem 0.3rem;
        }
        .layers-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .layer-toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0.75rem;
          border-radius: 8px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          cursor: pointer;
          transition: all 0.15s;
        }
        .layer-toggle-row:hover {
          background: #EEF2F6;
        }
        .layer-toggle-row.active {
          background: white;
          border-color: #CBD5E1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .layer-info-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .layer-color-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .layer-name-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
        }
        .board-specs-table {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .spec-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 0.5rem;
          border-bottom: 1px solid #F1F5F9;
        }
        .spec-row:last-child {
          border-bottom: none;
        }
        .spec-name {
          font-size: 0.8rem;
          color: #64748B;
          font-weight: 600;
        }
        .spec-val {
          font-size: 0.85rem;
          color: #0F172A;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
}
