import { useState } from 'react';
import { Link } from 'react-router-dom';

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Coerce a possibly-empty/invalid input value to a safe number for calculations.
function toNum(v, fallback = 0) {
  if (v === '' || v === null || v === undefined) return fallback;
  const n = Number(v);
  return Number.isNaN(n) ? fallback : n;
}

export default function QuickCheckTabs() {
  const [activeTab, setActiveTab] = useState(0);

  // ==================== TAB 01: KIỂM TRA NHANH SỐ CỰC ====================
  const [p1ndb, setP1ndb] = useState(1800);
  const [p1f, setP1f] = useState(150);
  const p1ndbNum = toNum(p1ndb, 0);
  const p1fNum = toNum(p1f, 0);
  const p1_2p = p1ndbNum > 0 ? Math.round((120 * p1fNum) / p1ndbNum) : 0;
  const p1_2p_corrected = p1_2p % 2 !== 0 ? p1_2p + 1 : p1_2p;

  // ==================== TAB 02: KIỂM TRA & PHÂN LOẠI 3 PHA ====================
  const [p2z, setP2z] = useState(36);
  const [p2_2p, setP2_2p] = useState(4);
  const [p2f, setP2f] = useState(50);

  const p2zNum = toNum(p2z, 0);
  const p2_2pNum = toNum(p2_2p, 0);
  const p2fNum = toNum(p2f, 0);

  const p2_ntd = p2_2pNum > 0 ? Math.round((120 * p2fNum) / p2_2pNum) : 0;
  const p2_tau = p2_2pNum > 0 ? p2zNum / p2_2pNum : 0;
  const p2_q = p2_2pNum > 0 ? p2zNum / (p2_2pNum * 3) : 0;

  // Check if q is integer
  const p2_q_isInteger = Number.isInteger(p2_q);
  const p2_classification_3ph = p2_q_isInteger ? 'Dây quấn số nguyên' : 'Dây quấn phân số tối giản';

  // Calculate q as fraction
  const p2_gcd_q = p2_2pNum > 0 ? gcd(p2zNum, p2_2pNum * 3) || 1 : 1;
  const p2_qNum = p2zNum / p2_gcd_q;
  const p2_qDen = (p2_2pNum * 3) / p2_gcd_q;

  // ==================== TAB 03: KIỂM TRA & PHÂN LOẠI 1 PHA ====================
  const [p3z, setP3z] = useState(36);
  const [p3_2p, setP3_2p] = useState(4);
  const [p3f, setP3f] = useState(50);

  const p3zNum = toNum(p3z, 0);
  const p3_2pNum = toNum(p3_2p, 0);
  const p3fNum = toNum(p3f, 0);

  const p3_ntd = p3_2pNum > 0 ? Math.round((120 * p3fNum) / p3_2pNum) : 0;
  const p3_tau = p3_2pNum > 0 ? Math.round(p3zNum / p3_2pNum) : 0;

  // Determine classification based on divisibility
  let p3_classification = '';
  if (p3_tau % 2 === 0) {
    p3_classification = 'Dây quấn loại 1 (Chia hết cho 2)';
  } else if (p3_tau % 3 === 0) {
    p3_classification = 'Dây quấn loại 2 (Chia hết cho 3)';
  } else if (p3_tau % 4 === 0) {
    p3_classification = 'Dây quấn loại 3 (Chia hết cho 4)';
  } else {
    p3_classification = 'Không thuộc loại nào được định nghĩa';
  }

  const tabs = [
    { num: '01', title: 'Kiểm tra nhanh số cực: 2p (Poles)' },
    { num: '02', title: 'Kiểm tra & phân loại động cơ 3 pha 1 tốc độ' },
    { num: '03', title: 'Kiểm tra & phân loại động cơ 1 pha' },
  ];

  return (
    <>
      <style>{`
        .qct-banner-section {
          padding: 28px 0;
        }
        .qct-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .qct-banner h2 {
          margin: 0 0 6px;
          font-size: 22px;
          font-weight: 700;
          color: #102a56;
        }
        .qct-banner h2 em {
          color: #1450c4;
          font-style: normal;
        }
        .qct-banner p {
          margin: 0;
          color: #5b6b85;
          font-size: 14px;
        }
        .qct-banner-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f5b942, #e89b1f);
          color: #1a1a1a;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }
        @media (max-width: 600px) {
          .qct-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .qct-banner-cta {
            align-self: stretch;
            justify-content: center;
          }
        }

        .qct-wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px 48px;
        }
        .qct-head {
          text-align: center;
          margin-bottom: 24px;
        }
        .qct-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 999px;
          background: #e8f0ff;
          color: #1450c4;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .qct-head h2 {
          margin: 0 0 6px;
          font-size: 26px;
          font-weight: 800;
          color: #102a56;
        }
        .qct-head p {
          margin: 0;
          color: #5b6b85;
          font-size: 14px;
        }

        .qct-tabbar {
          display: flex;
          gap: 0;
          background: #1450c4;
          border-radius: 14px;
          padding: 6px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .qct-tab {
          flex: 1;
          min-width: 160px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border: none;
          background: transparent;
          color: #cfe0ff;
          border-radius: 10px;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .qct-tab:hover {
          background: rgba(255,255,255,0.08);
        }
        .qct-tab-active {
          background: #ffffff !important;
          color: #102a56 !important;
        }
        .qct-tab-num {
          font-weight: 800;
          font-size: 13px;
          opacity: 0.6;
        }
        .qct-tab-active .qct-tab-num {
          color: #1450c4;
          opacity: 1;
        }
        .qct-tab-title {
          font-size: 13px;
          font-weight: 600;
          line-height: 1.3;
        }

        .qct-subtitle {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .qct-subtitle-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: #fff4da;
          color: #e89b1f;
          font-weight: 800;
          font-size: 13px;
        }
        .qct-subtitle span:last-child {
          font-weight: 700;
          color: #102a56;
          font-size: 15px;
        }

        .qct-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .qct-layout {
            grid-template-columns: 1fr;
          }
        }

        .qct-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(20, 60, 140, 0.08);
          border: 1px solid #e7ecf6;
          transition: box-shadow 0.2s ease;
        }
        .qct-card-result {
          box-shadow: 0 4px 18px rgba(91, 111, 31, 0.1);
          border-color: #e9edd8;
        }
        .qct-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 22px;
          background: linear-gradient(135deg, #1450c4, #0d3aa0);
        }
        .qct-card-header-num {
          font-size: 26px;
          font-weight: 800;
          color: rgba(255,255,255,0.35);
          line-height: 1;
        }
        .qct-card-header-title {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.03em;
          color: #ffffff;
          text-transform: uppercase;
        }
        .qct-card-header-desc {
          font-size: 12px;
          color: #cfe0ff;
          margin-top: 2px;
        }

        /* Header riêng cho card "Kết quả" — gradient xanh-vàng olive như ảnh mẫu */
        .qct-card-header-result {
          background: linear-gradient(135deg, #5b6f1f, #8a9c2e);
        }
        .qct-card-header-result .qct-card-header-num {
          color: rgba(255,255,255,0.45);
        }
        .qct-card-header-result .qct-card-header-title {
          color: #d92531;
        }
        .qct-card-header-result .qct-card-header-desc {
          color: #f3f0d9;
        }
        .qct-card-body {
          padding: 24px 22px 28px;
        }

        .qct-field {
          margin-bottom: 18px;
        }
        .qct-field-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .qct-field-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          height: 28px;
          padding: 0 8px;
          border-radius: 8px;
          background: #eaf1ff;
          color: #1450c4;
          font-weight: 800;
          font-size: 13px;
          line-height: 1;
          white-space: nowrap;
        }
        .qct-subscript {
          display: inline-block;
          font-size: 0.62em;
          font-weight: 800;
          line-height: 1;
          transform: translateY(0.45em);
        }
        .qct-field-label {
          font-size: 14px;
          font-weight: 600;
          color: #2a3550;
          flex: 1;
        }
        .qct-field-unit {
          font-size: 12px;
          color: #93a0b8;
          font-weight: 500;
        }
        .qct-field-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .qct-step-btn {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border-radius: 10px;
          border: 1px solid #d8e2f3;
          background: #f5f8ff;
          color: #1450c4;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          transition: background 0.15s ease;
        }
        .qct-step-btn:hover {
          background: #e8f0ff;
          border-color: #1450c4;
        }
        .qct-step-btn:active {
          background: #dce6fb;
          transform: scale(0.96);
        }
        .qct-field-input {
          flex: 1;
          height: 38px;
          border-radius: 10px;
          border: 1px solid #d8e2f3;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          color: #102a56;
          font-family: inherit;
        }
        .qct-field-input:focus {
          outline: none;
          border-color: #1450c4;
        }

        .qct-btn-check {
          width: 100%;
          margin-top: 6px;
          padding: 14px 0;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #1450c4, #0d3aa0);
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.03em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .qct-btn-check:hover {
          background: linear-gradient(135deg, #0d3aa0, #0a2e80);
        }

        .qct-empty {
          min-height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 14px;
          padding: 40px 20px;
        }
        .qct-empty-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #eef3ff;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .qct-empty-icon::before {
          content: '';
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 2px solid #cddcff;
        }
        .qct-empty-icon::after {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #1450c4;
        }
        .qct-empty p {
          margin: 0;
          color: #93a0b8;
          font-size: 14px;
        }
        .qct-empty strong {
          color: #1450c4;
          font-size: 15px;
          font-weight: 800;
        }

        .qct-results {
          padding: 22px;
        }
        .qct-res-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px dashed #e7ecf6;
        }
        .qct-res-row:last-child {
          border-bottom: none;
        }
        .qct-res-label {
          font-size: 13px;
          color: #5b6b85;
          font-weight: 600;
          line-height: 1.4;
        }
        .qct-subscript-sm {
          display: inline-block;
          font-size: 0.7em;
          font-weight: 700;
          line-height: 1;
          transform: translateY(0.3em);
        }
        .qct-tag-blue {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: 8px;
          background: #eaf1ff;
          color: #1450c4;
          font-weight: 700;
          font-size: 13px;
          white-space: nowrap;
        }
        .qct-card-result .qct-tag-blue {
          background: #f0f4de;
          color: #5b6f1f;
        }

        .qct-total-result {
          padding: 30px 22px;
          text-align: center;
        }
        .qct-total-label {
          font-size: 13px;
          color: #5b6b85;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .qct-total-val {
          font-size: 38px;
          font-weight: 800;
          color: #1450c4;
        }
      `}</style>

      <section className="qct-banner-section">
        <div className="page-wrap">
          <div className="qct-banner">
            <div>
              <h2>Dành cho bạn: <em>Kiểm tra nhanh</em> thiết kế động cơ</h2>
              <p>Nhập thông số định danh để kiểm tra nhanh phân loại và cấu hình dây quấn</p>
            </div>
            <Link to="/tinh-toan/3pha-1tocdo" className="qct-banner-cta">🚀 Dùng thử ngay</Link>
          </div>
        </div>
      </section>

      <div className="qct-wrap">
        <div className="qct-head">
          <span className="qct-badge">Công cụ nhanh</span>
          <h2>Kiểm tra &amp; quy đổi thông số</h2>
          <p>3 công cụ tính toán nhanh — chọn tab bên dưới để bắt đầu</p>
        </div>

        <div className="qct-tabbar">
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`qct-tab ${activeTab === i ? 'qct-tab-active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="qct-tab-num">{t.num}</span>
              <span className="qct-tab-title">{t.title}</span>
            </button>
          ))}
        </div>

        {/* ==================== TAB 01 ==================== */}
        {activeTab === 0 && (
          <div>
            <div className="qct-subtitle">
              <span className="qct-subtitle-num">01</span>
              <span>Kiểm tra nhanh số cực (2p) từ tốc độ và tần số</span>
            </div>
            <div className="qct-layout">
              {/* ---- Card 01: Nhập thông số ---- */}
              <div className="qct-card">
                <div className="qct-card-header">
                  <span className="qct-card-header-num">01</span>
                  <div>
                    <div className="qct-card-header-title">NHẬP THÔNG SỐ ĐẦU VÀO</div>
                    <div className="qct-card-header-desc">Kiểm tra số cực 2p (Poles)</div>
                  </div>
                </div>
                <div className="qct-card-body">
                  <div className="qct-field">
                    <div className="qct-field-top">
                      <span className="qct-field-tag">N<span className="qct-subscript">db</span></span>
                      <span className="qct-field-label">Tốc độ từ trường</span>
                      <span className="qct-field-unit">(RPM)</span>
                    </div>
                    <div className="qct-field-row">
                      <button className="qct-step-btn" onClick={() => setP1ndb(Math.max(100, toNum(p1ndb, 100) - 100))}>−</button>
                      <input
                        className="qct-field-input"
                        type="number"
                        step="any"
                        value={p1ndb}
                        onChange={(e) => setP1ndb(e.target.value)}
                        onBlur={() => { if (p1ndb === '') setP1ndb(100); }}
                      />
                      <button className="qct-step-btn" onClick={() => setP1ndb(toNum(p1ndb, 100) + 100)}>+</button>
                    </div>
                  </div>

                  <div className="qct-field">
                    <div className="qct-field-top">
                      <span className="qct-field-tag">F</span>
                      <span className="qct-field-label">Tần số</span>
                      <span className="qct-field-unit">(Hz)</span>
                    </div>
                    <div className="qct-field-row">
                      <button className="qct-step-btn" onClick={() => setP1f(Math.max(1, toNum(p1f, 1) - 10))}>−</button>
                      <input
                        className="qct-field-input"
                        type="number"
                        step="any"
                        value={p1f}
                        onChange={(e) => setP1f(e.target.value)}
                        onBlur={() => { if (p1f === '') setP1f(1); }}
                      />
                      <button className="qct-step-btn" onClick={() => setP1f(toNum(p1f, 1) + 10)}>+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---- Card 02: Kết quả ---- */}
              <div className="qct-card qct-card-result">
                <div className="qct-card-header qct-card-header-result">
                  <span className="qct-card-header-num">02</span>
                  <div>
                    <div className="qct-card-header-title">KẾT QUẢ</div>
                    <div className="qct-card-header-desc">Số cực động cơ</div>
                  </div>
                </div>
                <div className="qct-card-body">
                  <div className="qct-total-result">
                    <div className="qct-total-label">Số cực: 2p (Poles)</div>
                    <div className="qct-total-val">
                      <strong style={{ color: '#d92531' }}>{p1_2p_corrected}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 02 ==================== */}
        {activeTab === 1 && (
          <div>
            <div className="qct-subtitle">
              <span className="qct-subtitle-num">02</span>
              <span>Kiểm tra & phân loại động cơ 3 pha 1 tốc độ</span>
            </div>
            <div className="qct-layout">
              {/* ---- Card 01: Nhập thông số đầu vào ---- */}
              <div className="qct-card">
                <div className="qct-card-header">
                  <span className="qct-card-header-num">01</span>
                  <div>
                    <div className="qct-card-header-title">NHẬP THÔNG SỐ ĐẦU VÀO</div>
                    <div className="qct-card-header-desc">Động cơ 3 pha – 1 tốc độ</div>
                  </div>
                </div>
                <div className="qct-card-body">
                  <div className="qct-field">
                    <div className="qct-field-top">
                      <span className="qct-field-tag">Z</span>
                      <span className="qct-field-label">Số rãnh stator</span>
                      <span className="qct-field-unit">(rãnh)</span>
                    </div>
                    <div className="qct-field-row">
                      <button className="qct-step-btn" onClick={() => setP2z(Math.max(1, toNum(p2z, 1) - 1))}>−</button>
                      <input
                        className="qct-field-input"
                        type="number"
                        step="1"
                        value={p2z}
                        onChange={(e) => setP2z(e.target.value)}
                        onBlur={() => { if (p2z === '') setP2z(1); }}
                      />
                      <button className="qct-step-btn" onClick={() => setP2z(toNum(p2z, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className="qct-field">
                    <div className="qct-field-top">
                      <span className="qct-field-tag">2p</span>
                      <span className="qct-field-label">Số cực</span>
                      <span className="qct-field-unit">(cực)</span>
                    </div>
                    <div className="qct-field-row">
                      <button className="qct-step-btn" onClick={() => setP2_2p(Math.max(1, toNum(p2_2p, 1) - 1))}>−</button>
                      <input
                        className="qct-field-input"
                        type="number"
                        step="1"
                        value={p2_2p}
                        onChange={(e) => setP2_2p(e.target.value)}
                        onBlur={() => { if (p2_2p === '') setP2_2p(1); }}
                      />
                      <button className="qct-step-btn" onClick={() => setP2_2p(toNum(p2_2p, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className="qct-field">
                    <div className="qct-field-top">
                      <span className="qct-field-tag">F</span>
                      <span className="qct-field-label">Tần số</span>
                      <span className="qct-field-unit">(Hz)</span>
                    </div>
                    <div className="qct-field-row">
                      <button className="qct-step-btn" onClick={() => setP2f(Math.max(1, toNum(p2f, 1) - 1))}>−</button>
                      <input
                        className="qct-field-input"
                        type="number"
                        step="any"
                        value={p2f}
                        onChange={(e) => setP2f(e.target.value)}
                        onBlur={() => { if (p2f === '') setP2f(1); }}
                      />
                      <button className="qct-step-btn" onClick={() => setP2f(toNum(p2f, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <button className="qct-btn-check">
                    ✓ KIỂM TRA NGAY
                  </button>
                </div>
              </div>

              {/* ---- Card 02: Kết quả ---- */}
              <div className="qct-card qct-card-result">
                <div className="qct-card-header qct-card-header-result">
                  <span className="qct-card-header-num">02</span>
                  <div>
                    <div className="qct-card-header-title">KẾT QUẢ</div>
                    <div className="qct-card-header-desc">Thông số tính toán</div>
                  </div>
                </div>
                <div className="qct-card-body" style={{ padding: 0 }}>
                  <div className="qct-results">
                    <div className="qct-res-row">
                      <span className="qct-res-label">Tốc độ đồng từ trường N<span className="qct-subscript-sm">td</span></span>
                      <span className="qct-tag-blue">{p2_ntd} RPM</span>
                    </div>
                    <div className="qct-res-row">
                      <span className="qct-res-label">Bước cực từ τ</span>
                      <span className="qct-tag-blue">{p2_tau.toFixed(2)} (rãnh/cực)</span>
                    </div>
                    <div className="qct-res-row">
                      <span className="qct-res-label">Số rãnh phân bố q</span>
                      <span className="qct-tag-blue">
                        {p2_q_isInteger ? p2_q : `${p2_qNum}/${p2_qDen}`} (rãnh/pha/cực)
                      </span>
                    </div>
                    <div className="qct-res-row">
                      <span className="qct-res-label">Phân loại dây quấn</span>
                      <span className="qct-tag-blue">{p2_classification_3ph}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 03 ==================== */}
        {activeTab === 2 && (
          <div>
            <div className="qct-subtitle">
              <span className="qct-subtitle-num">03</span>
              <span>Kiểm tra & phân loại động cơ 1 pha</span>
            </div>
            <div className="qct-layout">
              {/* ---- Card 01: Nhập thông số đầu vào ---- */}
              <div className="qct-card">
                <div className="qct-card-header">
                  <span className="qct-card-header-num">01</span>
                  <div>
                    <div className="qct-card-header-title">NHẬP THÔNG SỐ ĐẦU VÀO</div>
                    <div className="qct-card-header-desc">Động cơ 1 pha</div>
                  </div>
                </div>
                <div className="qct-card-body">
                  <div className="qct-field">
                    <div className="qct-field-top">
                      <span className="qct-field-tag">Z</span>
                      <span className="qct-field-label">Số rãnh stator</span>
                      <span className="qct-field-unit">(rãnh)</span>
                    </div>
                    <div className="qct-field-row">
                      <button className="qct-step-btn" onClick={() => setP3z(Math.max(1, toNum(p3z, 1) - 1))}>−</button>
                      <input
                        className="qct-field-input"
                        type="number"
                        step="1"
                        value={p3z}
                        onChange={(e) => setP3z(e.target.value)}
                        onBlur={() => { if (p3z === '') setP3z(1); }}
                      />
                      <button className="qct-step-btn" onClick={() => setP3z(toNum(p3z, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className="qct-field">
                    <div className="qct-field-top">
                      <span className="qct-field-tag">2p</span>
                      <span className="qct-field-label">Số cực</span>
                      <span className="qct-field-unit">(cực)</span>
                    </div>
                    <div className="qct-field-row">
                      <button className="qct-step-btn" onClick={() => setP3_2p(Math.max(1, toNum(p3_2p, 1) - 1))}>−</button>
                      <input
                        className="qct-field-input"
                        type="number"
                        step="1"
                        value={p3_2p}
                        onChange={(e) => setP3_2p(e.target.value)}
                        onBlur={() => { if (p3_2p === '') setP3_2p(1); }}
                      />
                      <button className="qct-step-btn" onClick={() => setP3_2p(toNum(p3_2p, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className="qct-field">
                    <div className="qct-field-top">
                      <span className="qct-field-tag">F</span>
                      <span className="qct-field-label">Tần số</span>
                      <span className="qct-field-unit">(Hz)</span>
                    </div>
                    <div className="qct-field-row">
                      <button className="qct-step-btn" onClick={() => setP3f(Math.max(1, toNum(p3f, 1) - 1))}>−</button>
                      <input
                        className="qct-field-input"
                        type="number"
                        step="any"
                        value={p3f}
                        onChange={(e) => setP3f(e.target.value)}
                        onBlur={() => { if (p3f === '') setP3f(1); }}
                      />
                      <button className="qct-step-btn" onClick={() => setP3f(toNum(p3f, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <button className="qct-btn-check">
                    ✓ KIỂM TRA NGAY
                  </button>
                </div>
              </div>

              {/* ---- Card 02: Kết quả ---- */}
              <div className="qct-card qct-card-result">
                <div className="qct-card-header qct-card-header-result">
                  <span className="qct-card-header-num">02</span>
                  <div>
                    <div className="qct-card-header-title">KẾT QUẢ</div>
                    <div className="qct-card-header-desc">Thông số tính toán</div>
                  </div>
                </div>
                <div className="qct-card-body" style={{ padding: 0 }}>
                  <div className="qct-results">
                    <div className="qct-res-row">
                      <span className="qct-res-label">Tốc độ đồng từ trường N<span className="qct-subscript-sm">td</span></span>
                      <span className="qct-tag-blue">{p3_ntd} RPM</span>
                    </div>
                    <div className="qct-res-row">
                      <span className="qct-res-label">Bước cực từ τ</span>
                      <span className="qct-tag-blue">{p3_tau} (rãnh/cực)</span>
                    </div>
                    <div className="qct-res-row">
                      <span className="qct-res-label">Phân loại dây quấn</span>
                      <span className="qct-tag-blue">{p3_classification}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}