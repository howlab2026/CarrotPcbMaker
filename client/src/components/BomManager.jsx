import React, { useState, useEffect } from 'react';
import { FileSpreadsheet, Plus, Trash2, Search, DollarSign, Download, Save, RefreshCw, X, Package, ArrowUpDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function BomManager() {
  const { currentUser } = useAuth();
  const [bomList, setBomList] = useState([]);
  const [selectedBom, setSelectedBom] = useState(null);
  const [editItems, setEditItems] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1350);
  const [showNewForm, setShowNewForm] = useState(false);
  const [newBomTitle, setNewBomTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => { fetchBomList(); }, [currentUser]);

  const fetchBomList = async () => {
    if (!currentUser) return;
    try {
      const res = await fetch(`/api/bom?userId=${currentUser.id}`);
      if (res.ok) {
        const data = await res.json();
        setBomList(data);
        if (data.length > 0 && !selectedBom) {
          setSelectedBom(data[0]);
          setEditItems(data[0].items || []);
          setExchangeRate(data[0].exchangeRate || 1350);
        }
      }
    } catch (e) { console.error(e); }
  };

  const handleCreateBom = async () => {
    if (!newBomTitle.trim() || !currentUser) return;
    try {
      const res = await fetch('/api/bom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: currentUser.id, title: newBomTitle, items: [], exchangeRate: 1350 })
      });
      if (res.ok) {
        setShowNewForm(false);
        setNewBomTitle('');
        fetchBomList();
      }
    } catch (e) { console.error(e); }
  };

  const handleSave = async () => {
    if (!selectedBom) return;
    try {
      await fetch(`/api/bom/${selectedBom.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: editItems, exchangeRate })
      });
      fetchBomList();
    } catch (e) { console.error(e); }
  };

  const handleSearchParts = async () => {
    if (!searchQuery.trim()) return;
    try {
      const res = await fetch(`/api/parts/search?q=${encodeURIComponent(searchQuery)}`);
      if (res.ok) setSearchResults(await res.json());
    } catch (e) { console.error(e); }
  };

  const addPartFromSearch = (part) => {
    const newItem = {
      partNumber: part.partNumber, name: part.name, quantity: 1,
      unitPrice: part.prices.LCSC || 0, currency: 'USD', supplier: 'LCSC', footprint: ''
    };
    setEditItems(prev => [...prev, newItem]);
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const addEmptyRow = () => {
    setEditItems(prev => [...prev, { partNumber: '', name: '', quantity: 1, unitPrice: 0, currency: 'USD', supplier: 'LCSC', footprint: '' }]);
  };

  const updateItem = (idx, field, value) => {
    setEditItems(prev => prev.map((item, i) => i === idx ? { ...item, [field]: field === 'quantity' || field === 'unitPrice' ? Number(value) : value } : item));
  };

  const removeItem = (idx) => {
    setEditItems(prev => prev.filter((_, i) => i !== idx));
  };

  const totalUSD = editItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  const totalKRW = totalUSD * exchangeRate;

  const selectBom = (bom) => {
    setSelectedBom(bom);
    setEditItems(bom.items || []);
    setExchangeRate(bom.exchangeRate || 1350);
  };

  return (
    <div className="bom-manager fade-in">
      <div className="bom-header-section">
        <div className="bom-title-box">
          <FileSpreadsheet size={28} style={{ color: '#10B981' }} />
          <div>
            <h2>📦 BOM 관리기</h2>
            <p>프로젝트별 BOM 작성, 부품 검색 및 원가 계산</p>
          </div>
        </div>
      </div>

      <div className="bom-layout">
        {/* 왼쪽: BOM 목록 */}
        <div className="bom-sidebar">
          <div className="bom-sidebar-header">
            <h4>내 BOM 목록</h4>
            <button className="bom-add-btn" onClick={() => setShowNewForm(true)}><Plus size={16} /></button>
          </div>
          {showNewForm && (
            <div className="bom-new-form">
              <input className="form-input" value={newBomTitle} onChange={e => setNewBomTitle(e.target.value)} placeholder="BOM 이름 (예: LED 매트릭스 BOM)" onKeyDown={e => e.key === 'Enter' && handleCreateBom()} />
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <button className="btn-primary" style={{ flex: 1, padding: '0.4rem' }} onClick={handleCreateBom}>생성</button>
                <button className="btn-secondary" style={{ flex: 1, padding: '0.4rem' }} onClick={() => setShowNewForm(false)}>취소</button>
              </div>
            </div>
          )}
          {bomList.map(bom => (
            <div key={bom.id} className={`bom-list-item ${selectedBom?.id === bom.id ? 'active' : ''}`} onClick={() => selectBom(bom)}>
              <FileSpreadsheet size={16} />
              <div>
                <div className="bom-item-title">{bom.title}</div>
                <div className="bom-item-meta">{(bom.items || []).length}종 부품</div>
              </div>
            </div>
          ))}
          {bomList.length === 0 && !showNewForm && (
            <div className="bom-empty">BOM이 없습니다. 새로 만들어보세요!</div>
          )}
        </div>

        {/* 오른쪽: BOM 편집기 */}
        <div className="bom-editor">
          {selectedBom ? (
            <>
              <div className="bom-editor-toolbar">
                <h3>{selectedBom.title}</h3>
                <div className="bom-toolbar-actions">
                  <button className="bom-tool-btn" onClick={() => setShowSearch(true)}><Search size={15} /> 부품 검색</button>
                  <button className="bom-tool-btn" onClick={addEmptyRow}><Plus size={15} /> 행 추가</button>
                  <button className="bom-save-btn" onClick={handleSave}><Save size={15} /> 저장</button>
                </div>
              </div>

              {/* 부품 검색 패널 */}
              {showSearch && (
                <div className="parts-search-panel">
                  <div className="parts-search-bar">
                    <Search size={16} />
                    <input className="form-input" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="부품번호 또는 이름 검색 (예: RP2040, LDO)" onKeyDown={e => e.key === 'Enter' && handleSearchParts()} />
                    <button className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }} onClick={handleSearchParts}>검색</button>
                    <button onClick={() => { setShowSearch(false); setSearchResults([]); }}><X size={18} /></button>
                  </div>
                  {searchResults.length > 0 && (
                    <div className="parts-results">
                      {searchResults.map(part => (
                        <div key={part.partNumber} className="parts-result-item" onClick={() => addPartFromSearch(part)}>
                          <div className="parts-result-name">
                            <strong>{part.partNumber}</strong>
                            <span>{part.name}</span>
                          </div>
                          <div className="parts-result-prices">
                            {Object.entries(part.prices).map(([sup, price]) => (
                              <span key={sup} className="price-tag">{sup}: ${price.toFixed(3)}</span>
                            ))}
                          </div>
                          <button className="parts-add-btn"><Plus size={14} /> 추가</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* BOM 테이블 */}
              <div className="bom-table-wrap">
                <table className="bom-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>부품번호</th>
                      <th>부품명</th>
                      <th>수량</th>
                      <th>단가(USD)</th>
                      <th>소계(USD)</th>
                      <th>유통사</th>
                      <th>풋프린트</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {editItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="row-num">{idx + 1}</td>
                        <td><input value={item.partNumber} onChange={e => updateItem(idx, 'partNumber', e.target.value)} /></td>
                        <td><input value={item.name} onChange={e => updateItem(idx, 'name', e.target.value)} /></td>
                        <td><input type="number" value={item.quantity} onChange={e => updateItem(idx, 'quantity', e.target.value)} min={1} /></td>
                        <td><input type="number" value={item.unitPrice} onChange={e => updateItem(idx, 'unitPrice', e.target.value)} step={0.001} min={0} /></td>
                        <td className="subtotal">${(item.quantity * item.unitPrice).toFixed(3)}</td>
                        <td>
                          <select value={item.supplier} onChange={e => updateItem(idx, 'supplier', e.target.value)}>
                            <option value="LCSC">LCSC</option>
                            <option value="DigiKey">DigiKey</option>
                            <option value="Mouser">Mouser</option>
                            <option value="기타">기타</option>
                          </select>
                        </td>
                        <td><input value={item.footprint} onChange={e => updateItem(idx, 'footprint', e.target.value)} placeholder="0603" /></td>
                        <td><button className="row-delete-btn" onClick={() => removeItem(idx)}><Trash2 size={14} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 합계 */}
              <div className="bom-summary">
                <div className="bom-summary-item">
                  <span>총 부품 종수</span>
                  <strong>{editItems.length}종</strong>
                </div>
                <div className="bom-summary-item">
                  <span>총 부품 수</span>
                  <strong>{editItems.reduce((s, i) => s + i.quantity, 0)}개</strong>
                </div>
                <div className="bom-exchange">
                  <span>환율 (USD→KRW)</span>
                  <input type="number" value={exchangeRate} onChange={e => setExchangeRate(Number(e.target.value))} />
                </div>
                <div className="bom-summary-total">
                  <div className="total-usd"><DollarSign size={16} /> ${totalUSD.toFixed(2)} USD</div>
                  <div className="total-krw">≈ ₩{Math.round(totalKRW).toLocaleString()} KRW</div>
                </div>
              </div>
            </>
          ) : (
            <div className="bom-empty-editor">
              <FileSpreadsheet size={48} strokeWidth={1.2} />
              <h3>BOM을 선택하거나 새로 만들어주세요</h3>
              <p>부품 관리, 가격 비교, 원가 계산이 가능합니다.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .bom-manager { max-width: 1200px; margin: 0 auto; }
        .bom-header-section { margin-bottom: 1.5rem; }
        .bom-title-box { display: flex; align-items: flex-start; gap: 1rem; }
        .bom-title-box h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-main, #0F172A); margin: 0; }
        .bom-title-box p { font-size: 0.9rem; color: var(--text-muted, #64748B); margin-top: 0.25rem; }
        .bom-layout { display: grid; grid-template-columns: 260px 1fr; gap: 1.25rem; min-height: 600px; }
        .bom-sidebar { background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 14px; padding: 1rem; }
        .bom-sidebar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .bom-sidebar-header h4 { font-size: 0.92rem; font-weight: 700; }
        .bom-add-btn { width: 30px; height: 30px; border-radius: 8px; background: var(--primary-light, #FFF2E8); color: var(--primary); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,111,15,0.2); }
        .bom-add-btn:hover { background: var(--primary); color: white; }
        .bom-new-form { padding: 0.75rem; background: var(--bg-subtle, #F8FAFC); border-radius: 10px; margin-bottom: 0.75rem; }
        .bom-list-item { display: flex; align-items: center; gap: 0.65rem; padding: 0.65rem 0.75rem; border-radius: 10px; cursor: pointer; color: var(--text-muted, #64748B); transition: all 0.15s; margin-bottom: 0.25rem; }
        .bom-list-item:hover { background: var(--bg-subtle, #F1F5F9); }
        .bom-list-item.active { background: var(--primary-light, #FFF2E8); color: var(--primary); }
        .bom-item-title { font-size: 0.85rem; font-weight: 600; color: var(--text-main, #0F172A); }
        .bom-list-item.active .bom-item-title { color: var(--primary); }
        .bom-item-meta { font-size: 0.75rem; color: var(--text-sub, #94A3B8); }
        .bom-empty { text-align: center; padding: 2rem 1rem; font-size: 0.85rem; color: var(--text-sub, #94A3B8); }
        .bom-editor { background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 14px; padding: 1.25rem; overflow: hidden; }
        .bom-editor-toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem; }
        .bom-editor-toolbar h3 { font-size: 1.1rem; font-weight: 700; }
        .bom-toolbar-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .bom-tool-btn { display: flex; align-items: center; gap: 0.35rem; padding: 0.4rem 0.75rem; border-radius: 8px; font-size: 0.8rem; font-weight: 600; background: var(--bg-subtle, #F1F5F9); color: var(--text-muted, #64748B); border: 1px solid var(--border); }
        .bom-tool-btn:hover { border-color: var(--primary); color: var(--primary); }
        .bom-save-btn { display: flex; align-items: center; gap: 0.35rem; padding: 0.4rem 0.85rem; border-radius: 8px; font-size: 0.8rem; font-weight: 700; background: #10B981; color: white; border: none; }
        .bom-save-btn:hover { background: #059669; }
        .parts-search-panel { background: var(--bg-subtle, #F8FAFC); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; margin-bottom: 1rem; }
        .parts-search-bar { display: flex; align-items: center; gap: 0.5rem; }
        .parts-search-bar .form-input { flex: 1; }
        .parts-results { margin-top: 0.75rem; max-height: 200px; overflow-y: auto; }
        .parts-result-item { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.75rem; border-radius: 8px; cursor: pointer; gap: 0.75rem; }
        .parts-result-item:hover { background: var(--bg-card, #FFFFFF); }
        .parts-result-name { display: flex; flex-direction: column; }
        .parts-result-name strong { font-size: 0.85rem; color: var(--text-main, #0F172A); }
        .parts-result-name span { font-size: 0.78rem; color: var(--text-muted, #64748B); }
        .parts-result-prices { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .price-tag { font-size: 0.72rem; padding: 0.15rem 0.45rem; background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 4px; font-weight: 600; color: var(--text-muted, #64748B); }
        .parts-add-btn { display: flex; align-items: center; gap: 0.25rem; font-size: 0.78rem; font-weight: 600; color: var(--primary); flex-shrink: 0; }
        .bom-table-wrap { overflow-x: auto; margin-bottom: 1rem; }
        .bom-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
        .bom-table th { background: var(--bg-subtle, #F1F5F9); padding: 0.6rem 0.5rem; text-align: left; font-weight: 700; color: var(--text-muted, #64748B); font-size: 0.78rem; border-bottom: 2px solid var(--border); white-space: nowrap; }
        .bom-table td { padding: 0.4rem 0.3rem; border-bottom: 1px solid var(--border); }
        .bom-table input, .bom-table select { width: 100%; border: 1px solid transparent; padding: 0.35rem 0.4rem; border-radius: 6px; font-size: 0.82rem; background: transparent; color: var(--text-main, #0F172A); }
        .bom-table input:focus, .bom-table select:focus { border-color: var(--primary); outline: none; background: var(--bg-card, #FFFFFF); }
        .bom-table input[type="number"] { width: 70px; }
        .row-num { font-size: 0.75rem; color: var(--text-sub, #94A3B8); font-weight: 600; text-align: center; width: 30px; }
        .subtotal { font-weight: 700; color: var(--text-main, #0F172A); white-space: nowrap; padding-left: 0.5rem !important; }
        .row-delete-btn { color: #EF4444; padding: 0.25rem; border-radius: 6px; }
        .row-delete-btn:hover { background: #FEF2F2; }
        .bom-summary { display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; padding: 1rem; background: var(--bg-subtle, #F8FAFC); border-radius: 12px; border: 1px solid var(--border); }
        .bom-summary-item { display: flex; flex-direction: column; }
        .bom-summary-item span { font-size: 0.75rem; color: var(--text-sub, #94A3B8); }
        .bom-summary-item strong { font-size: 1rem; font-weight: 800; color: var(--text-main, #0F172A); }
        .bom-exchange { display: flex; flex-direction: column; }
        .bom-exchange span { font-size: 0.75rem; color: var(--text-sub, #94A3B8); }
        .bom-exchange input { width: 90px; padding: 0.3rem 0.5rem; border: 1px solid var(--border); border-radius: 6px; font-size: 0.85rem; font-weight: 600; }
        .bom-summary-total { margin-left: auto; text-align: right; }
        .total-usd { font-size: 1.15rem; font-weight: 800; color: #10B981; display: flex; align-items: center; gap: 0.3rem; }
        .total-krw { font-size: 0.9rem; font-weight: 600; color: var(--text-muted, #64748B); }
        .bom-empty-editor { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 4rem; color: var(--text-sub, #94A3B8); text-align: center; gap: 0.75rem; }
        .bom-empty-editor h3 { color: var(--text-muted, #64748B); font-size: 1.1rem; }
        .bom-empty-editor p { font-size: 0.9rem; }
        @media (max-width: 768px) {
          .bom-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
