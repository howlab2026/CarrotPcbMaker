import React, { useState, useRef, useEffect } from 'react';
import { 
  PenTool, 
  Eraser, 
  Square, 
  Circle, 
  Minus, 
  RotateCcw, 
  RotateCw, 
  Trash2, 
  Download, 
  Grid, 
  Share2, 
  Zap, 
  Layers, 
  Sparkles,
  Info
} from 'lucide-react';

// 전자 회로 기본 기호 스탬프 목록
const STAMPS = [
  { id: 'resistor', label: '저항 (R)', symbol: '─/\\/\\/\\─' },
  { id: 'capacitor', label: '커패시터 (C)', symbol: '─┤├─' },
  { id: 'inductor', label: '인덕터 (L)', symbol: '─ᴖᴖᴖ─' },
  { id: 'diode', label: '다이오드 (D)', symbol: '─▷|─' },
  { id: 'led', label: 'LED 💡', symbol: '─▷|─↝' },
  { id: 'gnd', label: 'GND ⏚', symbol: '⏚ GND' },
  { id: 'vcc', label: 'VCC ⚡', symbol: '▲ VCC' },
  { id: 'transistor', label: 'NPN 트랜지스터', symbol: '─|◀─' },
  { id: 'ic_chip', label: 'IC 8-Pin', symbol: '[ IC ]' },
  { id: 'switch', label: '스위치 (SW)', symbol: '─/ ─' },
  { id: 'battery', label: '배터리 (+/-)', symbol: '─┤ ├──' },
  { id: 'crystal', label: '크리스탈 (XTAL)', symbol: '─[■]─' }
];

const COLORS = [
  { name: '기판 블랙', value: '#1E293B' },
  { name: '당근 오렌지', value: '#FF6F0F' },
  { name: 'PCB 에메랄드', value: '#10B981' },
  { name: '신호 블루', value: '#2563EB' },
  { name: '전원 레드', value: '#DC2626' },
  { name: '주의 옐로우', value: '#D97706' },
  { name: '퍼플', value: '#7C3AED' },
  { name: '화이트', value: '#FFFFFF' }
];

export default function SchematicNotepad() {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState('pen'); // pen, eraser, line, rect, circle, stamp
  const [activeStamp, setActiveStamp] = useState(STAMPS[0]);
  const [color, setColor] = useState('#1E293B');
  const [lineWidth, setLineWidth] = useState(3);
  const [showGrid, setShowGrid] = useState(true);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [history, setHistory] = useState([]);
  const [historyStep, setHistoryStep] = useState(-1);
  const [statusMsg, setStatusMsg] = useState('');

  // 캔버스 초기화
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // 고해상도 지원
    canvas.width = 960;
    canvas.height = 600;

    // 흰 배경
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    saveSnapshot();
  }, []);

  const saveSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL();
    setHistory(prev => {
      const nextHistory = prev.slice(0, historyStep + 1);
      return [...nextHistory, dataUrl];
    });
    setHistoryStep(prev => prev + 1);
  };

  const restoreSnapshot = (step) => {
    const canvas = canvasRef.current;
    if (!canvas || step < 0 || step >= history.length) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = history[step];
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      setHistoryStep(step);
    };
  };

  const handleUndo = () => {
    if (historyStep > 0) {
      restoreSnapshot(historyStep - 1);
    }
  };

  const handleRedo = () => {
    if (historyStep < history.length - 1) {
      restoreSnapshot(historyStep + 1);
    }
  };

  const handleClear = () => {
    if (!window.confirm('스케치를 모두 지우시겠습니까?')) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveSnapshot();
    showToast('캔버스가 초기화되었습니다.');
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `carrot_schematic_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('회로 스케치가 PNG 파일로 저장되었습니다!');
  };

  const showToast = (msg) => {
    setStatusMsg(msg);
    setTimeout(() => setStatusMsg(''), 3000);
  };

  // 좌표 계산
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  // 마우스 이벤트
  const startDrawing = (e) => {
    const pos = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (tool === 'stamp') {
      drawStamp(pos.x, pos.y, activeStamp);
      saveSnapshot();
      return;
    }

    setIsDrawing(true);
    setStartPos(pos);

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color;
    ctx.lineWidth = tool === 'eraser' ? lineWidth * 4 : lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const pos = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (tool === 'pen' || tool === 'eraser') {
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    } else if (tool === 'line' || tool === 'rect' || tool === 'circle') {
      // 실시간 미리보기를 위해 이전 스냅샷 복구 후 그리기
      if (historyStep >= 0 && history[historyStep]) {
        const img = new Image();
        img.src = history[historyStep];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';

        if (tool === 'line') {
          ctx.moveTo(startPos.x, startPos.y);
          ctx.lineTo(pos.x, pos.y);
          ctx.stroke();
        } else if (tool === 'rect') {
          const w = pos.x - startPos.x;
          const h = pos.y - startPos.y;
          ctx.strokeRect(startPos.x, startPos.y, w, h);
        } else if (tool === 'circle') {
          const radius = Math.sqrt(Math.pow(pos.x - startPos.x, 2) + Math.pow(pos.y - startPos.y, 2));
          ctx.arc(startPos.x, startPos.y, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    saveSnapshot();
  };

  // 스탬프 그리기
  const drawStamp = (x, y, stamp) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.font = 'bold 15px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    switch (stamp.id) {
      case 'resistor': // 저항 지그재그
        ctx.beginPath();
        ctx.moveTo(x - 40, y);
        ctx.lineTo(x - 25, y);
        ctx.lineTo(x - 20, y - 10);
        ctx.lineTo(x - 10, y + 10);
        ctx.lineTo(x, y - 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.lineTo(x + 20, y - 10);
        ctx.lineTo(x + 25, y);
        ctx.lineTo(x + 40, y);
        ctx.stroke();
        ctx.fillText('R', x, y - 18);
        break;

      case 'capacitor': // 커패시터 평행판
        ctx.beginPath();
        ctx.moveTo(x - 30, y);
        ctx.lineTo(x - 8, y);
        ctx.moveTo(x - 8, y - 16);
        ctx.lineTo(x - 8, y + 16);
        ctx.moveTo(x + 8, y - 16);
        ctx.lineTo(x + 8, y + 16);
        ctx.moveTo(x + 8, y);
        ctx.lineTo(x + 30, y);
        ctx.stroke();
        ctx.fillText('C', x, y - 22);
        break;

      case 'inductor': // 인덕터 루프
        ctx.beginPath();
        ctx.moveTo(x - 35, y);
        ctx.lineTo(x - 24, y);
        ctx.arc(x - 16, y, 8, Math.PI, 0, false);
        ctx.arc(x, y, 8, Math.PI, 0, false);
        ctx.arc(x + 16, y, 8, Math.PI, 0, false);
        ctx.lineTo(x + 35, y);
        ctx.stroke();
        ctx.fillText('L', x, y - 18);
        break;

      case 'diode': // 다이오드 삼각형
        ctx.beginPath();
        ctx.moveTo(x - 30, y);
        ctx.lineTo(x - 10, y);
        ctx.moveTo(x - 10, y - 12);
        ctx.lineTo(x - 10, y + 12);
        ctx.lineTo(x + 10, y);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + 10, y - 12);
        ctx.lineTo(x + 10, y + 12);
        ctx.moveTo(x + 10, y);
        ctx.lineTo(x + 30, y);
        ctx.stroke();
        ctx.fillText('D', x, y - 20);
        break;

      case 'gnd': // GND 접지 기호
        ctx.beginPath();
        ctx.moveTo(x, y - 25);
        ctx.lineTo(x, y);
        ctx.moveTo(x - 20, y);
        ctx.lineTo(x + 20, y);
        ctx.moveTo(x - 12, y + 6);
        ctx.lineTo(x + 12, y + 6);
        ctx.moveTo(x - 5, y + 12);
        ctx.lineTo(x + 5, y + 12);
        ctx.stroke();
        ctx.fillText('GND', x, y + 25);
        break;

      case 'vcc': // VCC 전원 기호
        ctx.beginPath();
        ctx.moveTo(x, y + 20);
        ctx.lineTo(x, y - 5);
        ctx.lineTo(x - 10, y + 5);
        ctx.moveTo(x, y - 5);
        ctx.lineTo(x + 10, y + 5);
        ctx.stroke();
        ctx.fillText('VCC (3.3V)', x, y - 18);
        break;

      case 'ic_chip': // IC 칩 사각형 + 핀
        ctx.strokeRect(x - 35, y - 25, 70, 50);
        // notch
        ctx.beginPath();
        ctx.arc(x - 35, y, 6, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
        // pins
        for (let i = -18; i <= 18; i += 12) {
          ctx.beginPath();
          ctx.moveTo(x - 45, y + i);
          ctx.lineTo(x - 35, y + i);
          ctx.moveTo(x + 35, y + i);
          ctx.lineTo(x + 45, y + i);
          ctx.stroke();
        }
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('MCU/IC', x, y);
        break;

      default:
        // 일반 텍스트 스탬프
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText(stamp.symbol, x, y);
        break;
    }

    ctx.restore();
  };

  return (
    <div className="schematic-notepad-view">
      <div className="notepad-header">
        <div>
          <h2 className="page-title">
            <span className="title-emoji">📐</span> 회로 스케치 메모장
          </h2>
          <p className="page-desc">
            복잡한 EDA 툴 없이도 브라우저에서 회로 아이디어나 핀맵을 손쉽게 스케치하고 이미지로 저장하세요.
          </p>
        </div>

        <div className="header-actions-group">
          {statusMsg && <span className="status-toast">{statusMsg}</span>}
          <button className="btn-secondary" onClick={handleUndo} disabled={historyStep <= 0} title="되돌리기 (Ctrl+Z)">
            <RotateCcw size={16} /> 되돌리기
          </button>
          <button className="btn-secondary" onClick={handleRedo} disabled={historyStep >= history.length - 1} title="다시하기">
            <RotateCw size={16} /> 다시실행
          </button>
          <button className="btn-secondary danger" onClick={handleClear} title="캔버스 전체 지우기">
            <Trash2 size={16} /> 전체 지우기
          </button>
          <button className="btn-primary" onClick={handleDownload} title="PNG 이미지로 다운로드">
            <Download size={16} /> PNG 저장
          </button>
        </div>
      </div>

      <div className="notepad-layout">
        {/* Left Toolbar */}
        <aside className="toolbar-panel">
          <div className="tool-section">
            <span className="section-label">도구</span>
            <div className="tools-grid">
              <button className={`tool-btn ${tool === 'pen' ? 'active' : ''}`} onClick={() => setTool('pen')} title="펜">
                <PenTool size={18} />
                <span>펜</span>
              </button>
              <button className={`tool-btn ${tool === 'eraser' ? 'active' : ''}`} onClick={() => setTool('eraser')} title="지우개">
                <Eraser size={18} />
                <span>지우개</span>
              </button>
              <button className={`tool-btn ${tool === 'line' ? 'active' : ''}`} onClick={() => setTool('line')} title="직선/와이어">
                <Minus size={18} />
                <span>직선</span>
              </button>
              <button className={`tool-btn ${tool === 'rect' ? 'active' : ''}`} onClick={() => setTool('rect')} title="직사각형/IC">
                <Square size={18} />
                <span>사각형</span>
              </button>
              <button className={`tool-btn ${tool === 'circle' ? 'active' : ''}`} onClick={() => setTool('circle')} title="원/패드">
                <Circle size={18} />
                <span>원형</span>
              </button>
              <button className={`tool-btn ${tool === 'stamp' ? 'active' : ''}`} onClick={() => setTool('stamp')} title="회로 기호 스탬프">
                <Sparkles size={18} />
                <span>스탬프</span>
              </button>
            </div>
          </div>

          {/* 선 굵기 */}
          <div className="tool-section">
            <span className="section-label">선 굵기: {lineWidth}px</span>
            <div className="width-selectors">
              {[1, 2, 4, 8].map(w => (
                <button 
                  key={w} 
                  className={`width-btn ${lineWidth === w ? 'active' : ''}`}
                  onClick={() => setLineWidth(w)}
                >
                  <span className="line-preview" style={{ height: `${w}px` }}></span>
                </button>
              ))}
            </div>
          </div>

          {/* 색상 팔레트 */}
          <div className="tool-section">
            <span className="section-label">선 색상</span>
            <div className="color-palette">
              {COLORS.map(c => (
                <button
                  key={c.value}
                  className={`color-dot ${color === c.value ? 'selected' : ''}`}
                  style={{ backgroundColor: c.value, border: c.value === '#FFFFFF' ? '1px solid #CBD5E1' : 'none' }}
                  onClick={() => setColor(c.value)}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* 모눈 그리드 토글 */}
          <div className="tool-section">
            <button 
              className={`grid-toggle-btn ${showGrid ? 'active' : ''}`}
              onClick={() => setShowGrid(!showGrid)}
            >
              <Grid size={16} />
              <span>모눈 그리드 {showGrid ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          {/* 스탬프 팔레트 (tool === 'stamp' 일 때) */}
          <div className="tool-section stamps-section">
            <span className="section-label">회로 기호 스탬프 선택</span>
            <div className="stamps-list">
              {STAMPS.map(s => (
                <button
                  key={s.id}
                  className={`stamp-item ${tool === 'stamp' && activeStamp.id === s.id ? 'active' : ''}`}
                  onClick={() => {
                    setTool('stamp');
                    setActiveStamp(s);
                  }}
                >
                  <span className="stamp-icon">{s.symbol}</span>
                  <span className="stamp-name">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Canvas Area */}
        <div className="canvas-wrapper">
          <div className={`canvas-container ${showGrid ? 'with-grid' : ''}`}>
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className="drawing-canvas"
            />
          </div>
          <div className="canvas-footer-hint">
            <Info size={14} />
            <span>
              {tool === 'stamp' 
                ? `스탬프 모드: 캔버스 원하는 위치를 클릭하면 [${activeStamp.label}] 기호가 배치됩니다.` 
                : '마우스 드래그로 선이나 기호를 스케치하세요. 완성을 마친 후 [PNG 저장]을 눌러 다운로드할 수 있습니다.'}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .schematic-notepad-view {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .notepad-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .page-desc {
          color: var(--text-muted, #64748B);
          font-size: 0.95rem;
        }

        .header-actions-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-toast {
          background: #ECFDF5;
          color: #059669;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          border: 1px solid #A7F3D0;
          animation: fadeIn 0.3s ease;
        }

        .notepad-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 1.5rem;
          align-items: start;
        }

        .toolbar-panel {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .section-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted, #64748B);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: block;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
        }

        .tool-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0.6rem 0.4rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 8px;
          color: var(--text-main, #334155);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .tool-btn:hover {
          background: var(--primary-light, #FFF2E8);
          color: var(--primary, #FF6F0F);
          border-color: var(--primary, #FF6F0F);
        }

        .tool-btn.active {
          background: var(--primary, #FF6F0F);
          color: #FFFFFF;
          border-color: var(--primary, #FF6F0F);
        }

        .width-selectors {
          display: flex;
          gap: 0.5rem;
        }

        .width-btn {
          flex: 1;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 6px;
          cursor: pointer;
        }

        .width-btn.active {
          border-color: var(--primary, #FF6F0F);
          background: var(--primary-light, #FFF2E8);
        }

        .line-preview {
          width: 80%;
          background: var(--text-main, #334155);
          border-radius: 2px;
        }

        .color-palette {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }

        .color-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.15s ease;
          position: relative;
        }

        .color-dot:hover {
          transform: scale(1.15);
        }

        .color-dot.selected::after {
          content: '✓';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
          font-size: 14px;
          font-weight: bold;
          text-shadow: 0 0 2px rgba(0,0,0,0.8);
        }

        .grid-toggle-btn {
          width: 100%;
          padding: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
        }

        .grid-toggle-btn.active {
          background: #ECFDF5;
          color: #059669;
          border-color: #10B981;
        }

        .stamps-list {
          max-height: 240px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .stamp-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0.75rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.8rem;
          color: var(--text-main, #334155);
          transition: all 0.15s ease;
          text-align: left;
        }

        .stamp-item:hover {
          background: var(--primary-light, #FFF2E8);
          border-color: var(--primary, #FF6F0F);
        }

        .stamp-item.active {
          background: #EFF6FF;
          border-color: #3B82F6;
          color: #1D4ED8;
          font-weight: 700;
        }

        .stamp-icon {
          font-family: monospace;
          background: #FFFFFF;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border, #CBD5E1);
          font-size: 0.75rem;
          min-width: 60px;
          text-align: center;
        }

        .canvas-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .canvas-container {
          background: #FFFFFF;
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .canvas-container.with-grid {
          background-image: 
            linear-gradient(to right, #F1F5F9 1px, transparent 1px),
            linear-gradient(to bottom, #F1F5F9 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .drawing-canvas {
          cursor: crosshair;
          display: block;
          max-width: 100%;
          height: auto;
        }

        .canvas-footer-hint {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted, #64748B);
          font-size: 0.85rem;
          padding: 0 0.5rem;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border: none;
          padding: 0.55rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-card, #FFFFFF);
          color: var(--text-main, #334155);
          border: 1px solid var(--border, #E2E8F0);
          padding: 0.55rem 0.9rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-secondary:hover:not(:disabled) {
          background: var(--bg-sub, #F8FAFC);
        }

        .btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-secondary.danger:hover {
          background: #FEF2F2;
          color: #DC2626;
          border-color: #F87171;
        }

        @media (max-width: 1024px) {
          .notepad-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
