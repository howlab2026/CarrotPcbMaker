import React, { useState } from 'react';
import { 
  Calculator, 
  Zap, 
  Radio, 
  Cpu, 
  Thermometer, 
  Layers, 
  Info, 
  CheckCircle2, 
  AlertTriangle, 
  Flame, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function PcbCalculator() {
  const [activeTab, setActiveTab] = useState('trace'); // 'trace' | 'impedance' | 'smd' | 'thermal'

  /* =========================================================================
     1. 패턴 폭 & 허용 전류 (IPC-2152 / IPC-2221)
     ========================================================================= */
  const [current, setCurrent] = useState(2.0); // A
  const [copperOz, setCopperOz] = useState(1.0); // oz/ft2
  const [tempRise, setTempRise] = useState(10.0); // deg C
  const [isInternal, setIsInternal] = useState(false);
  const [traceLength, setTraceLength] = useState(50); // mm

  // Copper thickness in mils and mm: 1 oz = 1.378 mil = 0.035 mm
  const copperThicknessMil = copperOz * 1.378;
  const copperThicknessMm = copperOz * 0.035;

  // IPC-2221 formula: I = k * (deltaT^0.44) * (Area^0.725)
  // Area = (I / (k * deltaT^0.44))^(1 / 0.725) in sq mils
  const k = isInternal ? 0.024 : 0.048;
  const areaSqMil = Math.pow(current / (k * Math.pow(tempRise, 0.44)), 1 / 0.725);
  const traceWidthMil = areaSqMil / copperThicknessMil;
  const traceWidthMm = traceWidthMil * 0.0254;

  // Resistance: R = rho * (L / A)
  // Resistivity of copper at 25C = 1.724e-8 ohm*m = 0.01724 ohm*mm2/m
  const areaSqMm = traceWidthMm * copperThicknessMm;
  const resistanceOhm = (0.01724 * (traceLength / 1000)) / (areaSqMm || 0.001);
  const voltageDropV = current * resistanceOhm;
  const powerLossW = Math.pow(current, 2) * resistanceOhm;

  /* =========================================================================
     2. 고속 신호 & 임피던스 계산기 (Microstrip & Differential Pair)
     ========================================================================= */
  const [impType, setImpType] = useState('diff'); // 'single' | 'diff'
  const [er, setEr] = useState(4.4); // FR-4
  const [subHeight, setSubHeight] = useState(1.6); // H (mm)
  const [stripWidth, setStripWidth] = useState(0.3); // W (mm)
  const [stripSpacing, setStripSpacing] = useState(0.2); // S (mm)
  const [stripCopperOz, setStripCopperOz] = useState(1.0); // 1oz = 0.035mm

  // Single-ended microstrip IPC-2141 formula:
  // Z0 = (87 / sqrt(er + 1.41)) * ln( (5.98 * H) / (0.8 * W + T) )
  const T_mm = stripCopperOz * 0.035;
  const z0 = (87 / Math.sqrt(er + 1.41)) * Math.log((5.98 * subHeight) / (0.8 * stripWidth + T_mm));
  
  // Differential pair microstrip formula:
  // Zdiff = 2 * Z0 * (1 - 0.48 * exp(-0.96 * S / H))
  const zDiff = 2 * z0 * (1 - 0.48 * Math.exp(-0.96 * (stripSpacing / subHeight)));

  /* =========================================================================
     3. SMD 코드 판독기 & LED 전류제한 저항
     ========================================================================= */
  const [smdCode, setSmdCode] = useState('103');
  const [capCode, setCapCode] = useState('104');
  
  // LED Resistor
  const [vSupply, setVSupply] = useState(5.0);
  const [vLed, setVLed] = useState(2.0); // 2.0V red, 3.2V blue/white
  const [iLed, setILed] = useState(20); // mA

  // Decode SMD Resistor code
  const decodeSmd = (code) => {
    const c = code.trim().toUpperCase();
    if (!c) return { val: 0, text: '값을 입력하세요' };
    
    // Check for R as decimal e.g. 4R7 = 4.7 ohm, R10 = 0.1 ohm
    if (c.includes('R')) {
      const num = parseFloat(c.replace('R', '.'));
      if (!isNaN(num)) return { val: num, text: `${num} Ω` };
    }

    // 3-digit: e.g. 103 -> 10 * 10^3 = 10,000 = 10k
    if (/^\d{3}$/.test(c)) {
      const sig = parseInt(c.slice(0, 2), 10);
      const exp = parseInt(c[2], 10);
      const val = sig * Math.pow(10, exp);
      return formatOhm(val);
    }

    // 4-digit: e.g. 1002 -> 100 * 10^2 = 10k
    if (/^\d{4}$/.test(c)) {
      const sig = parseInt(c.slice(0, 3), 10);
      const exp = parseInt(c[3], 10);
      const val = sig * Math.pow(10, exp);
      return formatOhm(val);
    }

    // EIA-96 (2 digits + 1 letter, e.g. 01C)
    const EIA96_CODES = {
      '01': 100, '02': 102, '03': 105, '04': 107, '05': 110, '06': 113, '07': 115, '08': 118, '09': 121,
      '10': 124, '11': 127, '12': 130, '13': 133, '14': 137, '15': 140, '16': 143, '17': 147, '18': 150,
      '19': 154, '20': 158, '21': 162, '22': 165, '23': 169, '24': 174, '25': 178, '26': 182, '27': 187,
      '28': 191, '29': 196, '30': 200, '31': 205, '32': 210, '33': 215, '34': 221, '35': 226, '36': 232,
      '37': 237, '38': 243, '39': 249, '40': 255, '41': 261, '42': 267, '43': 274, '44': 280, '45': 287,
      '46': 294, '47': 301, '48': 309, '49': 316, '50': 324, '51': 332, '52': 340, '53': 348, '54': 357,
      '55': 365, '56': 374, '57': 383, '58': 392, '59': 402, '60': 412, '61': 422, '62': 432, '63': 442,
      '64': 453, '65': 464, '66': 475, '67': 487, '68': 499, '69': 511, '70': 523, '71': 536, '72': 549,
      '73': 562, '74': 576, '75': 590, '76': 604, '77': 619, '78': 634, '79': 649, '80': 665, '81': 681,
      '82': 698, '83': 715, '84': 732, '85': 750, '86': 768, '87': 787, '88': 806, '89': 825, '90': 845,
      '91': 866, '92': 887, '93': 909, '94': 931, '95': 953, '96': 976
    };
    const EIA96_MULT = {
      'Z': 0.001, 'Y': 0.01, 'R': 0.01, 'X': 0.1, 'S': 0.1, 'A': 1, 'B': 10, 'C': 100, 'D': 1000, 'E': 10000, 'F': 100000
    };
    if (c.length === 3 && EIA96_CODES[c.slice(0, 2)] && EIA96_MULT[c[2]]) {
      const base = EIA96_CODES[c.slice(0, 2)];
      const mult = EIA96_MULT[c[2]];
      const val = base * mult;
      return { val, text: `${formatOhm(val).text} (EIA-96 1% 정밀저항)` };
    }

    return { val: 0, text: '해석할 수 없는 코드입니다' };
  };

  const formatOhm = (val) => {
    if (val >= 1000000) return { val, text: `${(val / 1000000).toFixed(2)} MΩ` };
    if (val >= 1000) return { val, text: `${(val / 1000).toFixed(2)} kΩ` };
    return { val, text: `${val.toFixed(1)} Ω` };
  };

  // Capacitor Code
  const decodeCap = (code) => {
    const c = code.trim();
    if (/^\d{3}$/.test(c)) {
      const sig = parseInt(c.slice(0, 2), 10);
      const exp = parseInt(c[2], 10);
      const pf = sig * Math.pow(10, exp);
      const nf = pf / 1000;
      const uf = pf / 1000000;
      return { pf, nf, uf };
    }
    return null;
  };

  // LED Resistor
  const vDrop = Math.max(0, vSupply - vLed);
  const ledROhm = iLed > 0 ? (vDrop / (iLed / 1000)) : 0;
  const ledPowerW = Math.pow(iLed / 1000, 2) * ledROhm;

  /* =========================================================================
     4. LDO 레귤레이터 & 열 저항 계산기
     ========================================================================= */
  const [vin, setVin] = useState(12.0); // V
  const [vout, setVout] = useState(3.3); // V
  const [iLoad, setILoad] = useState(500); // mA
  const [ambientTemp, setAmbientTemp] = useState(25); // deg C
  const [pkgThetaJA, setPkgThetaJA] = useState(62); // SOT-223 (62 deg C/W)

  const pLoss = Math.max(0, (vin - vout) * (iLoad / 1000));
  const junctionTemp = ambientTemp + (pLoss * pkgThetaJA);

  return (
    <div className="pcb-calculator-page fade-in">
      {/* Header Banner */}
      <div className="calc-header-banner">
        <div className="calc-header-content">
          <div className="calc-title-box">
            <span className="calc-badge">
              <Sparkles size={14} />
              <span>하드웨어 엔지니어링 툴킷</span>
            </span>
            <h1 className="calc-main-title">🥕 당근 PCB 설계 계산기</h1>
            <p className="calc-subtitle">
              KiCad, Altium 실무 설계에 필요한 IPC-2152 패턴 폭, 고속 신호 임피던스, 부품 코드 및 발열 진단을 웹에서 즉시 계산하세요.
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="calc-tab-nav">
          <button 
            className={`calc-nav-item ${activeTab === 'trace' ? 'active' : ''}`}
            onClick={() => setActiveTab('trace')}
          >
            <Zap size={18} />
            <span>패턴 폭 & 허용 전류</span>
          </button>
          <button 
            className={`calc-nav-item ${activeTab === 'impedance' ? 'active' : ''}`}
            onClick={() => setActiveTab('impedance')}
          >
            <Radio size={18} />
            <span>고속 신호 & 임피던스</span>
          </button>
          <button 
            className={`calc-nav-item ${activeTab === 'smd' ? 'active' : ''}`}
            onClick={() => setActiveTab('smd')}
          >
            <Cpu size={18} />
            <span>SMD 코드 & LED 저항</span>
          </button>
          <button 
            className={`calc-nav-item ${activeTab === 'thermal' ? 'active' : ''}`}
            onClick={() => setActiveTab('thermal')}
          >
            <Thermometer size={18} />
            <span>LDO 발열 & 방열 진단</span>
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="calc-body-card">
        {/* =========================================================================
            TAB 1: TRACE WIDTH & CURRENT
           ========================================================================= */}
        {activeTab === 'trace' && (
          <div className="calc-pane fade-in">
            <div className="pane-intro">
              <div className="pane-intro-title">
                <Zap size={22} className="text-orange" />
                <h2>패턴 폭 (Trace Width) & 허용 전류 계산기 (IPC-2152)</h2>
              </div>
              <p>동박 두께(oz)와 허용 온도 상승치($ΔT$)를 기준으로 안전하게 전류를 통전할 수 있는 최소 배선 폭과 전압 강하를 산출합니다.</p>
            </div>

            <div className="calc-grid-2col">
              {/* Inputs */}
              <div className="calc-input-panel">
                <h3 className="panel-title">설계 파라미터 입력</h3>
                
                <div className="form-group">
                  <label>통전 전류 (Current)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      min="0.1" 
                      max="30" 
                      step="0.1" 
                      value={current} 
                      onChange={e => setCurrent(Math.max(0.01, parseFloat(e.target.value) || 0))} 
                    />
                    <span className="unit-label">A (암페어)</span>
                  </div>
                  <div className="preset-buttons">
                    {[0.5, 1.0, 2.0, 3.0, 5.0].map(v => (
                      <button key={v} type="button" className={`preset-pill ${current === v ? 'active' : ''}`} onClick={() => setCurrent(v)}>
                        {v}A
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>동박 두께 (Copper Weight)</label>
                  <div className="select-wrapper">
                    <select value={copperOz} onChange={e => setCopperOz(parseFloat(e.target.value))}>
                      <option value="0.5">0.5 oz (17.5 µm - 미세 신호선)</option>
                      <option value="1.0">1.0 oz (35 µm - 표준 기판 기본값)</option>
                      <option value="2.0">2.0 oz (70 µm - 전원 보드 / 대전류)</option>
                      <option value="3.0">3.0 oz (105 µm - 고전력 특수 기판)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>허용 온도 상승 ($ΔT$)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      min="1" 
                      max="100" 
                      step="1" 
                      value={tempRise} 
                      onChange={e => setTempRise(Math.max(1, parseFloat(e.target.value) || 1))} 
                    />
                    <span className="unit-label">°C 상승</span>
                  </div>
                  <span className="field-hint">일반적으로 10°C (보수적 안전) 또는 20°C를 적용합니다.</span>
                </div>

                <div className="form-group">
                  <label>레이어 위치 (Layer Placement)</label>
                  <div className="toggle-group">
                    <button 
                      type="button" 
                      className={`toggle-option ${!isInternal ? 'selected' : ''}`}
                      onClick={() => setIsInternal(false)}
                    >
                      외층 (Top / Bottom Layer)
                    </button>
                    <button 
                      type="button" 
                      className={`toggle-option ${isInternal ? 'selected' : ''}`}
                      onClick={() => setIsInternal(true)}
                    >
                      내층 (Inner 1 / Inner 2)
                    </button>
                  </div>
                  <span className="field-hint">내층은 공기 냉각이 어려워 동일 전류 시 약 2배 더 넓은 선폭이 필요합니다.</span>
                </div>

                <div className="form-group">
                  <label>배선 길이 (Trace Length)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      min="1" 
                      max="1000" 
                      step="5" 
                      value={traceLength} 
                      onChange={e => setTraceLength(Math.max(1, parseFloat(e.target.value) || 1))} 
                    />
                    <span className="unit-label">mm</span>
                  </div>
                </div>
              </div>

              {/* Outputs */}
              <div className="calc-result-panel">
                <h3 className="panel-title">계산 결과 요약</h3>
                
                {/* Big Result Card */}
                <div className="highlight-metric-box">
                  <span className="metric-caption">최소 권장 패턴 폭 (Minimum Trace Width)</span>
                  <div className="metric-primary-val">
                    {traceWidthMm.toFixed(3)} <span className="metric-unit">mm</span>
                  </div>
                  <div className="metric-sub-val">
                    약 <strong>{traceWidthMil.toFixed(1)} mil</strong> (0.001 인치)
                  </div>
                </div>

                {/* Sub Metrics List */}
                <div className="result-stats-grid">
                  <div className="stat-card">
                    <span className="stat-label">패턴 저항 (Resistance)</span>
                    <span className="stat-value">{(resistanceOhm * 1000).toFixed(2)} mΩ</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">전압 강하 (Voltage Drop)</span>
                    <span className="stat-value">{(voltageDropV * 1000).toFixed(2)} mV</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">발열 손실 (Power Dissipation)</span>
                    <span className="stat-value">{(powerLossW * 1000).toFixed(2)} mW</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">패턴 단면적 (Cross Section)</span>
                    <span className="stat-value">{(areaSqMm * 1000).toFixed(1)} µm²</span>
                  </div>
                </div>

                <div className="guideline-card">
                  <div className="guideline-head">
                    <Info size={16} />
                    <span>메이커 실무 팁 (PCB Routing Tips)</span>
                  </div>
                  <ul>
                    <li>JLCPCB / PCBWay 일반 공정의 최소 선폭은 <strong>0.127mm (5 mil)</strong>입니다.</li>
                    <li>모터, 솔레노이드 등 순간 서지 전류가 흐르는 라인은 계산값의 <strong>1.5배~2배</strong> 여유 폭을 권장합니다.</li>
                    <li>공간이 부족할 경우 상/하 양면을 비아(Via)로 묶어 병렬 배선하면 폭을 절반으로 줄일 수 있습니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: HIGH SPEED IMPEDANCE
           ========================================================================= */ }
        {activeTab === 'impedance' && (
          <div className="calc-pane fade-in">
            <div className="pane-intro">
              <div className="pane-intro-title">
                <Radio size={22} className="text-orange" />
                <h2>고속 신호 & 마이크로스트립 임피던스 계산기</h2>
              </div>
              <p>USB 2.0 D+/D- (90Ω 차동), RF 안테나 (50Ω 단일), Ethernet (100Ω) 배선 시 신호 반사를 방지하기 위한 기하학적 형상을 산출합니다.</p>
            </div>

            <div className="calc-grid-2col">
              <div className="calc-input-panel">
                <h3 className="panel-title">신호 규격 및 기판 스택업</h3>

                <div className="form-group">
                  <label>배선 모드 선택</label>
                  <div className="toggle-group">
                    <button 
                      type="button" 
                      className={`toggle-option ${impType === 'diff' ? 'selected' : ''}`}
                      onClick={() => setImpType('diff')}
                    >
                      차동 배선 (USB 90Ω / Ethernet 100Ω)
                    </button>
                    <button 
                      type="button" 
                      className={`toggle-option ${impType === 'single' ? 'selected' : ''}`}
                      onClick={() => setImpType('single')}
                    >
                      단일 신호선 (RF 50Ω / SPI / I2S)
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>유전체 비유전율 ($εr$)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="0.05" 
                      value={er} 
                      onChange={e => setEr(parseFloat(e.target.value) || 1)} 
                    />
                    <span className="unit-label">$εr$</span>
                  </div>
                  <div className="preset-buttons">
                    <button type="button" className={`preset-pill ${er === 4.4 ? 'active' : ''}`} onClick={() => setEr(4.4)}>
                      FR-4 (4.4)
                    </button>
                    <button type="button" className={`preset-pill ${er === 3.66 ? 'active' : ''}`} onClick={() => setEr(3.66)}>
                      Rogers RO4350 (3.66)
                    </button>
                    <button type="button" className={`preset-pill ${er === 4.2 ? 'active' : ''}`} onClick={() => setEr(4.2)}>
                      High-Tg (4.2)
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>유전체 두께 / GND 평면까지 높이 ($H$)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="0.05" 
                      value={subHeight} 
                      onChange={e => setSubHeight(Math.max(0.05, parseFloat(e.target.value) || 0.1))} 
                    />
                    <span className="unit-label">mm</span>
                  </div>
                  <span className="field-hint">4층 기판 외층 기준(L1-L2)은 보통 0.1mm~0.2mm 프리프레그입니다.</span>
                </div>

                <div className="form-group">
                  <label>신호 패턴 폭 ($W$)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="0.05" 
                      value={stripWidth} 
                      onChange={e => setStripWidth(Math.max(0.05, parseFloat(e.target.value) || 0.1))} 
                    />
                    <span className="unit-label">mm</span>
                  </div>
                </div>

                {impType === 'diff' && (
                  <div className="form-group">
                    <label>차동 배선 간격 ($S$)</label>
                    <div className="input-with-unit">
                      <input 
                        type="number" 
                        step="0.05" 
                        value={stripSpacing} 
                        onChange={e => setStripSpacing(Math.max(0.05, parseFloat(e.target.value) || 0.1))} 
                      />
                      <span className="unit-label">mm</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="calc-result-panel">
                <h3 className="panel-title">임피던스 계산 결과</h3>

                {impType === 'diff' ? (
                  <div className="highlight-metric-box">
                    <span className="metric-caption">차동 임피던스 (Zdiff)</span>
                    <div className="metric-primary-val">
                      {isFinite(zDiff) && zDiff > 0 ? zDiff.toFixed(1) : '--'} <span className="metric-unit">Ω</span>
                    </div>
                    <div className="metric-sub-val">
                      단일 신호 임피던스: <strong>{z0.toFixed(1)} Ω</strong>
                    </div>
                  </div>
                ) : (
                  <div className="highlight-metric-box">
                    <span className="metric-caption">특성 임피던스 ($Z_0$)</span>
                    <div className="metric-primary-val">
                      {isFinite(z0) && z0 > 0 ? z0.toFixed(1) : '--'} <span className="metric-unit">Ω</span>
                    </div>
                    <div className="metric-sub-val">
                      단일선 마이크로스트립 모델
                    </div>
                  </div>
                )}

                {/* Target Comparison Badge */}
                <div className="match-status-card">
                  {impType === 'diff' ? (
                    Math.abs(zDiff - 90) <= 5 ? (
                      <div className="match-pill success">
                        <CheckCircle2 size={18} />
                        <span>USB 2.0 (90Ω ±10%) 규격에 완벽히 부합합니다! ✨</span>
                      </div>
                    ) : (
                      <div className="match-pill warning">
                        <AlertTriangle size={18} />
                        <span>USB 기준(90Ω)과 {Math.abs(zDiff - 90).toFixed(1)}Ω 차이가 납니다. 선폭($W$) 또는 간격($S$)을 조절하세요.</span>
                      </div>
                    )
                  ) : (
                    Math.abs(z0 - 50) <= 3 ? (
                      <div className="match-pill success">
                        <CheckCircle2 size={18} />
                        <span>RF 안테나 / 50Ω 매칭에 최적입니다! ✨</span>
                      </div>
                    ) : (
                      <div className="match-pill warning">
                        <AlertTriangle size={18} />
                        <span>50Ω 기준과 {Math.abs(z0 - 50).toFixed(1)}Ω 차이가 납니다. 선폭($W$)을 조절하세요.</span>
                      </div>
                    )
                  )}
                </div>

                <div className="guideline-card">
                  <div className="guideline-head">
                    <Info size={16} />
                    <span>고속 차동 배선 주의사항</span>
                  </div>
                  <ul>
                    <li>USB D+/D- 두 신호선은 <strong>길이 편차(Skew)가 1.25mm(50 mil) 이내</strong>가 되도록 등길이 배선(Length Matching)해야 합니다.</li>
                    <li>차동 신호선 하부에는 절대 슬릿(GND 단절)이 없어야 하며, 완전한 연속 GND 평면이 유지되어야 합니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: SMD CODES & LED RESISTORS
           ========================================================================= */}
        {activeTab === 'smd' && (
          <div className="calc-pane fade-in">
            <div className="pane-intro">
              <div className="pane-intro-title">
                <Cpu size={22} className="text-orange" />
                <h2>SMD 부품 코드 판독기 & LED 전류제한 저항</h2>
              </div>
              <p>기판 위 미세 부품에 인쇄된 3자리/4자리 및 EIA-96 정밀 저항/커패시터 코드를 해석하고, LED용 저항을 즉시 계산합니다.</p>
            </div>

            <div className="calc-grid-2col">
              {/* Left: SMD Resistor & Cap */}
              <div className="calc-input-panel">
                <h3 className="panel-title">1. SMD 저항 코드 디코더</h3>
                <div className="form-group">
                  <label>저항 표면 마킹 코드 입력</label>
                  <input 
                    type="text" 
                    className="big-code-input" 
                    value={smdCode} 
                    onChange={e => setSmdCode(e.target.value.toUpperCase())}
                    placeholder="예: 103, 4701, 4R7, 01C"
                  />
                  <div className="preset-buttons">
                    {['103', '472', '1002', '4R7', '01C', '68X'].map(c => (
                      <button key={c} type="button" className={`preset-pill ${smdCode === c ? 'active' : ''}`} onClick={() => setSmdCode(c)}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="decoded-result-box">
                  <span className="decoded-label">해석된 저항값</span>
                  <div className="decoded-value">{decodeSmd(smdCode).text}</div>
                </div>

                <hr style={{ margin: '1.5rem 0', borderColor: '#F1F5F9' }} />

                <h3 className="panel-title">2. 적층 세라믹 커패시터(MLCC) 코드</h3>
                <div className="form-group">
                  <label>3자리 커패시터 코드 입력</label>
                  <input 
                    type="text" 
                    className="big-code-input" 
                    value={capCode} 
                    onChange={e => setCapCode(e.target.value)}
                    placeholder="예: 104, 225, 471"
                  />
                  <div className="preset-buttons">
                    {['101', '104', '225', '473', '105'].map(c => (
                      <button key={c} type="button" className={`preset-pill ${capCode === c ? 'active' : ''}`} onClick={() => setCapCode(c)}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {decodeCap(capCode) ? (
                  <div className="cap-stats-grid">
                    <div className="stat-card">
                      <span className="stat-label">pF 단위</span>
                      <span className="stat-value">{decodeCap(capCode).pf.toLocaleString()} pF</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-label">nF 단위</span>
                      <span className="stat-value">{decodeCap(capCode).nf} nF</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-label">µF 단위</span>
                      <span className="stat-value">{decodeCap(capCode).uf} µF</span>
                    </div>
                  </div>
                ) : (
                  <div className="decoded-result-box">
                    <span className="decoded-label">3자리 숫자를 입력하세요 (예: 104 = 100nF)</span>
                  </div>
                )}
              </div>

              {/* Right: LED Current Limiting Resistor */}
              <div className="calc-result-panel">
                <h3 className="panel-title">3. LED 전류 제한 저항 계산기</h3>
                
                <div className="form-group">
                  <label>전원 전압 (Vcc)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="0.1" 
                      value={vSupply} 
                      onChange={e => setVSupply(parseFloat(e.target.value) || 0)} 
                    />
                    <span className="unit-label">V</span>
                  </div>
                  <div className="preset-buttons">
                    {[3.3, 5.0, 9.0, 12.0].map(v => (
                      <button key={v} type="button" className={`preset-pill ${vSupply === v ? 'active' : ''}`} onClick={() => setVSupply(v)}>
                        {v}V
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>LED 순방향 전압 (Vf)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="0.1" 
                      value={vLed} 
                      onChange={e => setVLed(parseFloat(e.target.value) || 0)} 
                    />
                    <span className="unit-label">V</span>
                  </div>
                  <div className="preset-buttons">
                    <button type="button" className={`preset-pill ${vLed === 2.0 ? 'active' : ''}`} onClick={() => setVLed(2.0)}>
                      🔴 적/황/오렌지 (2.0V)
                    </button>
                    <button type="button" className={`preset-pill ${vLed === 3.0 ? 'active' : ''}`} onClick={() => setVLed(3.0)}>
                      🟢 녹색 (3.0V)
                    </button>
                    <button type="button" className={`preset-pill ${vLed === 3.2 ? 'active' : ''}`} onClick={() => setVLed(3.2)}>
                      🔵 청/백색 (3.2V)
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>목표 LED 전류 (If)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="1" 
                      value={iLed} 
                      onChange={e => setILed(parseFloat(e.target.value) || 0)} 
                    />
                    <span className="unit-label">mA</span>
                  </div>
                  <span className="field-hint">인디케이터용 LED는 보통 5mA ~ 15mA가 적절합니다.</span>
                </div>

                <div className="highlight-metric-box">
                  <span className="metric-caption">권장 저항값 (Required Resistance)</span>
                  <div className="metric-primary-val">
                    {ledROhm > 0 ? ledROhm.toFixed(0) : '0'} <span className="metric-unit">Ω</span>
                  </div>
                  <div className="metric-sub-val">
                    저항 소비 전력: <strong>{(ledPowerW * 1000).toFixed(1)} mW</strong> 
                    ({ledPowerW < 0.1 ? '일반 0603 1/10W 저항 적합' : '0805 또는 1206 규격 권장'})
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: LDO THERMAL & HEATSINK
           ========================================================================= */}
        {activeTab === 'thermal' && (
          <div className="calc-pane fade-in">
            <div className="pane-intro">
              <div className="pane-intro-title">
                <Thermometer size={22} className="text-orange" />
                <h2>LDO 레귤레이터 발열 & 방열판 진단기</h2>
              </div>
              <p>선형 레귤레이터(AMS1117, LM7805 등)의 전압 강하량(Vin - Vout)에 따른 전력 손실과 정션 온도(Tj)를 계산하여 화재 및 과열 차단을 방지합니다.</p>
            </div>

            <div className="calc-grid-2col">
              <div className="calc-input-panel">
                <h3 className="panel-title">전원 및 패키지 사양</h3>

                <div className="form-group">
                  <label>입력 전압 (Vin)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="0.5" 
                      value={vin} 
                      onChange={e => setVin(parseFloat(e.target.value) || 0)} 
                    />
                    <span className="unit-label">V</span>
                  </div>
                  <div className="preset-buttons">
                    {[5.0, 9.0, 12.0, 24.0].map(v => (
                      <button key={v} type="button" className={`preset-pill ${vin === v ? 'active' : ''}`} onClick={() => setVin(v)}>
                        {v}V
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>출력 전압 (Vout)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="0.1" 
                      value={vout} 
                      onChange={e => setVout(parseFloat(e.target.value) || 0)} 
                    />
                    <span className="unit-label">V</span>
                  </div>
                  <div className="preset-buttons">
                    {[1.8, 3.3, 5.0].map(v => (
                      <button key={v} type="button" className={`preset-pill ${vout === v ? 'active' : ''}`} onClick={() => setVout(v)}>
                        {v}V
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>부하 전류 (Iload)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      step="50" 
                      value={iLoad} 
                      onChange={e => setILoad(parseFloat(e.target.value) || 0)} 
                    />
                    <span className="unit-label">mA</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>IC 패키지 형태 (열저항 θJA)</label>
                  <div className="select-wrapper">
                    <select value={pkgThetaJA} onChange={e => setPkgThetaJA(parseFloat(e.target.value))}>
                      <option value="62">SOT-223 (AMS1117 기본 패키지 - 62 °C/W)</option>
                      <option value="45">TO-252 / DPAK (45 °C/W)</option>
                      <option value="29">TO-220 (방열판 미장착 시 - 29 °C/W)</option>
                      <option value="250">SOT-23 / SOT-89 (소형 - 250 °C/W)</option>
                      <option value="105">SOIC-8 (105 °C/W)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>주변 환경 온도 ($T_A$)</label>
                  <div className="input-with-unit">
                    <input 
                      type="number" 
                      value={ambientTemp} 
                      onChange={e => setAmbientTemp(parseFloat(e.target.value) || 0)} 
                    />
                    <span className="unit-label">°C (기본 상온 25°C)</span>
                  </div>
                </div>
              </div>

              <div className="calc-result-panel">
                <h3 className="panel-title">발열 진단 결과</h3>

                <div className="highlight-metric-box">
                  <span className="metric-caption">IC 소비 발열량 (Power Loss)</span>
                  <div className="metric-primary-val">
                    {pLoss.toFixed(2)} <span className="metric-unit">W</span>
                  </div>
                  <div className="metric-sub-val">
                    예상 내부 정션 온도: <strong>{junctionTemp.toFixed(1)} °C</strong>
                  </div>
                </div>

                {/* Thermal Status Warning Badge */}
                <div className="thermal-status-card">
                  {junctionTemp < 70 ? (
                    <div className="match-pill success">
                      <CheckCircle2 size={20} />
                      <div>
                        <strong>안전 상태 (정상 동작)</strong>
                        <p>발열이 거의 없으며 추가 방열판 없이 안정적으로 동작합니다.</p>
                      </div>
                    </div>
                  ) : junctionTemp <= 110 ? (
                    <div className="match-pill warning">
                      <AlertTriangle size={20} />
                      <div>
                        <strong>주의: 발열이 꽤 뜨겁습니다! ({junctionTemp.toFixed(0)}°C)</strong>
                        <p>손을 대면 화상을 입을 수 있습니다. PCB에 넓은 구리 솔더패드를 깔거나 작은 방열판 부착을 권장합니다.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="match-pill danger">
                      <Flame size={22} />
                      <div>
                        <strong>위험: 열 차단(Thermal Shutdown) 및 소손 위험!</strong>
                        <p>정션 온도가 허용 한계(125°C)를 초과합니다! DC-DC 벅 컨버터로 교체하거나 대형 방열판을 필히 장착하세요.</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="guideline-card">
                  <div className="guideline-head">
                    <Info size={16} />
                    <span>LDO 발열 절감 솔루션</span>
                  </div>
                  <ul>
                    <li>12V $→$ 3.3V 전압 강하처럼 입력-출력 차이가 클 때 LDO는 <strong>효율이 27% 이하</strong>로 떨어져 거의 모든 에너지가 열로 버려집니다.</li>
                    <li>이 경우 핀 호환되는 <strong>DC-DC 벅 모듈 (예: MP2307, TPS54302 등)</strong>을 적용하면 발열 없이 90% 이상 효율을 얻을 수 있습니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .pcb-calculator-page {
          max-width: 1200px;
          margin: 0 auto;
        }
        .calc-header-banner {
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2.25rem 1rem;
          color: white;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25);
          position: relative;
          overflow: hidden;
        }
        .calc-header-banner::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(255, 111, 15, 0.25) 0%, rgba(255, 111, 15, 0) 70%);
          pointer-events: none;
        }
        .calc-badge {
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
        .calc-main-title {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .calc-subtitle {
          color: #94A3B8;
          font-size: 0.95rem;
          max-width: 720px;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .calc-tab-nav {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
        }
        .calc-nav-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.05);
          font-size: 0.92rem;
          font-weight: 700;
          transition: all 0.2s;
          white-space: nowrap;
          border: 1px solid transparent;
        }
        .calc-nav-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
        .calc-nav-item.active {
          background: var(--primary);
          color: white;
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 14px rgba(255, 111, 15, 0.4);
        }
        .calc-body-card {
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          padding: 2rem;
        }
        .pane-intro {
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #F1F5F9;
        }
        .pane-intro-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.4rem;
        }
        .pane-intro-title h2 {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
        }
        .pane-intro p {
          color: #64748B;
          font-size: 0.92rem;
        }
        .text-orange {
          color: var(--primary);
        }
        .calc-grid-2col {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 2.25rem;
        }
        @media (max-width: 900px) {
          .calc-grid-2col {
            grid-template-columns: 1fr;
          }
        }
        .calc-input-panel {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .panel-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #1E293B;
          margin-bottom: 0.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #334155;
        }
        .input-with-unit {
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.15s;
        }
        .input-with-unit:focus-within {
          border-color: var(--primary);
          background: white;
        }
        .input-with-unit input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 0.65rem 0.9rem;
          font-weight: 700;
          font-size: 1rem;
          color: #0F172A;
          outline: none;
        }
        .unit-label {
          padding: 0.65rem 0.85rem;
          background: #EEF2F6;
          color: #64748B;
          font-size: 0.82rem;
          font-weight: 700;
          border-left: 1px solid #E2E8F0;
        }
        .select-wrapper select {
          width: 100%;
          padding: 0.75rem 0.9rem;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          background: #F8FAFC;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0F172A;
          outline: none;
        }
        .select-wrapper select:focus {
          border-color: var(--primary);
          background: white;
        }
        .preset-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.35rem;
        }
        .preset-pill {
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: #F1F5F9;
          color: #475569;
          font-size: 0.78rem;
          font-weight: 700;
          border: 1px solid #E2E8F0;
          transition: all 0.15s;
        }
        .preset-pill:hover {
          background: #E2E8F0;
          color: #0F172A;
        }
        .preset-pill.active {
          background: #FFF2E8;
          color: var(--primary-dark);
          border-color: #FFD8BE;
        }
        .field-hint {
          font-size: 0.74rem;
          color: #94A3B8;
          line-height: 1.4;
        }
        .toggle-group {
          display: flex;
          gap: 0.5rem;
        }
        .toggle-option {
          flex: 1;
          padding: 0.65rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          background: #F1F5F9;
          color: #475569;
          border: 1.5px solid transparent;
          text-align: center;
        }
        .toggle-option.selected {
          background: #FFF2E8;
          color: var(--primary-dark);
          border-color: var(--primary);
        }
        .big-code-input {
          padding: 0.85rem 1rem;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          background: #F8FAFC;
          color: #0F172A;
          outline: none;
          text-transform: uppercase;
        }
        .big-code-input:focus {
          border-color: var(--primary);
          background: white;
        }
        /* Results Panel */
        .calc-result-panel {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .highlight-metric-box {
          background: linear-gradient(135deg, #FFF9F5 0%, #FFF2E8 100%);
          border: 2px solid #FFD8BE;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(255, 111, 15, 0.08);
        }
        .metric-caption {
          font-size: 0.82rem;
          font-weight: 800;
          color: #C94B00;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.5rem;
        }
        .metric-primary-val {
          font-size: 2.5rem;
          font-weight: 900;
          color: #EA580C;
          line-height: 1.1;
        }
        .metric-unit {
          font-size: 1.3rem;
          font-weight: 700;
          color: #9A3412;
        }
        .metric-sub-val {
          margin-top: 0.6rem;
          font-size: 0.95rem;
          color: #64748B;
        }
        .result-stats-grid, .cap-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .stat-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .stat-label {
          font-size: 0.74rem;
          font-weight: 700;
          color: #64748B;
        }
        .stat-value {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
        }
        .decoded-result-box {
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 12px;
          padding: 1.25rem;
          text-align: center;
        }
        .decoded-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748B;
          display: block;
          margin-bottom: 0.35rem;
        }
        .decoded-value {
          font-size: 1.85rem;
          font-weight: 900;
          color: var(--primary);
        }
        .match-pill {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          font-size: 0.88rem;
          line-height: 1.5;
        }
        .match-pill.success {
          background: #ECFDF5;
          color: #065F46;
          border: 1px solid #A7F3D0;
        }
        .match-pill.warning {
          background: #FFFBEB;
          color: #92400E;
          border: 1px solid #FDE68A;
        }
        .match-pill.danger {
          background: #FEF2F2;
          color: #991B1B;
          border: 1px solid #FECACA;
        }
        .guideline-card {
          background: #F8FAFC;
          border-radius: 12px;
          padding: 1.2rem;
          border: 1px solid #E2E8F0;
        }
        .guideline-head {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 800;
          font-size: 0.85rem;
          color: #334155;
          margin-bottom: 0.6rem;
        }
        .guideline-card ul {
          padding-left: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .guideline-card li {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
