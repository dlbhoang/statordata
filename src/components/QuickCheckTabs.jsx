import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/Home.module.css';

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export default function QuickCheckTabs() {
  const [activeTab, setActiveTab] = useState(0);

  // ==================== TAB 01: KIỂM TRA NHANH SỐ CỰC ====================
  const [p1ndb, setP1ndb] = useState(1800);
  const [p1f, setP1f] = useState(150);
  const p1_2p = Math.round((120 * p1f) / p1ndb);
  const p1_2p_corrected = p1_2p % 2 !== 0 ? p1_2p + 1 : p1_2p;

  // ==================== TAB 02: KIỂM TRA & PHÂN LOẠI 3 PHA ====================
  const [p2z, setP2z] = useState(36);
  const [p2_2p, setP2_2p] = useState(4);
  const [p2f, setP2f] = useState(50);

  const p2_ntd = Math.round((120 * p2f) / p2_2p);
  const p2_tau = p2z / p2_2p;
  const p2_q = p2z / (p2_2p * 3);

  // Check if q is integer
  const p2_q_isInteger = Number.isInteger(p2_q);
  const p2_classification_3ph = p2_q_isInteger ? 'Dây quấn số nguyên' : 'Dây quấn phân số tối giản';

  // Calculate q as fraction
  const p2_gcd_q = gcd(p2z, p2_2p * 3);
  const p2_qNum = p2z / p2_gcd_q;
  const p2_qDen = (p2_2p * 3) / p2_gcd_q;

  // ==================== TAB 03: KIỂM TRA & PHÂN LOẠI 1 PHA ====================
  const [p3z, setP3z] = useState(36);
  const [p3_2p, setP3_2p] = useState(4);
  const [p3f, setP3f] = useState(50);

  const p3_ntd = Math.round((120 * p3f) / p3_2p);
  const p3_tau = Math.round(p3z / p3_2p);

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

  // Distribution ratios based on tau
  let p3_qa = 0,
    p3_qb = 0;
  if (p3_tau % 2 === 0) {
    // QA = QB
    p3_qa = p3_tau / 2;
    p3_qb = p3_tau / 2;
  } else if (p3_tau % 3 === 0) {
    // QA = 2.QB
    p3_qb = p3_tau / 3;
    p3_qa = (2 * p3_tau) / 3;
  } else if (p3_tau % 4 === 0) {
    // QA = 3.QB
    p3_qb = p3_tau / 4;
    p3_qa = (3 * p3_tau) / 4;
  }

  const tabs = [
    { num: '01', title: 'Kiểm tra nhanh số cực: 2p (Poles)' },
    { num: '02', title: 'Kiểm tra & phân loại động cơ 3 pha 1 tốc độ' },
    { num: '03', title: 'Kiểm tra & phân loại động cơ 1 pha' },
  ];

  return (
    <>
      <section className={styles.checkBannerSection}>
        <div className="page-wrap">
          <div className={styles.checkBanner}>
            <div>
              <h2>Dành cho bạn: <em>Kiểm tra nhanh</em> thiết kế động cơ</h2>
              <p>Nhập thông số định danh để kiểm tra nhanh phân loại và cấu hình dây quấn</p>
            </div>
            <Link to="/tinh-toan/3pha-1tocdo" className="btn btn-gold">🚀 Dùng thử ngay</Link>
          </div>
        </div>
      </section>

      <div className={styles.checkTabWrap}>
        <div className={styles.checkTabHeader}>
          <span className={styles.checkTabBadge}>Công cụ nhanh</span>
          <h2>Kiểm tra &amp; quy đổi thông số</h2>
          <p>3 công cụ tính toán nhanh — chọn tab bên dưới để bắt đầu</p>
        </div>
        <div className={styles.checkTabBar}>
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`${styles.checkTab} ${activeTab === i ? styles.checkTabActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.checkTabNum}>{t.num}</span>
              <span className={styles.checkTabTitle}>{t.title}</span>
            </button>
          ))}
        </div>

        {/* ==================== TAB 01 ==================== */}
        {activeTab === 0 && (
          <div className={styles.wireTabWrap}>
            <div className={styles.wireSubTitle}>
              <span className={styles.wireSubNum}>01</span>
              <span>Kiểm tra nhanh số cực (2p) từ tốc độ và tần số</span>
            </div>
            <div className={styles.layout}>
              <div className={styles.inputPanel}>
                <div className="card">
                  <div className="card-header">
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--blue2)' }} />
                    <h4>Nhập: Thông số định danh</h4>
                    <span className="tag blue" style={{ marginLeft: 'auto' }}>Mục 01</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.field}>
                      <label>Tốc độ từ trường <strong>N<sub>db</sub></strong> <span className={styles.unit}>(RPM)</span></label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <button className={styles.fieldBtn} onClick={() => setP1ndb(Math.max(100, p1ndb - 100))}>−</button>
                        <input
                          className="inp"
                          type="number"
                          step="any"
                          value={p1ndb}
                          onChange={(e) => setP1ndb(+e.target.value)}
                          style={{ flex: 1, textAlign: 'center' }}
                        />
                        <button className={styles.fieldBtn} onClick={() => setP1ndb(p1ndb + 100)}>+</button>
                      </div>
                    </div>
                    <div className={styles.field} style={{ marginTop: 16 }}>
                      <label>Tần số <strong>f</strong> <span className={styles.unit}>(Hz)</span></label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <button className={styles.fieldBtn} onClick={() => setP1f(Math.max(1, p1f - 10))}>−</button>
                        <input
                          className="inp"
                          type="number"
                          step="any"
                          value={p1f}
                          onChange={(e) => setP1f(+e.target.value)}
                          style={{ flex: 1, textAlign: 'center' }}
                        />
                        <button className={styles.fieldBtn} onClick={() => setP1f(p1f + 10)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-header">
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green)' }} />
                    <h4>Kết quả: Số cực động cơ</h4>
                    <span className="tag green" style={{ marginLeft: 'auto' }}>✓ Tự động</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.wire01TotalResult}>
                      <div className={styles.wire01TotalLabel}>Số cực: 2p (Poles)</div>
                      <div className={styles.wire01TotalVal}>
                        <strong style={{ color: '#d92531' }}>{p1_2p_corrected}</strong>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 02 ==================== */}
        {activeTab === 1 && (
          <div className={styles.wireTabWrap}>
            <div className={styles.wireSubTitle}>
              <span className={styles.wireSubNum}>02</span>
              <span>Kiểm tra & phân loại động cơ 3 pha 1 tốc độ</span>
            </div>
            <div className={styles.layout}>
              <div className={styles.inputPanel}>
                <div className="card">
                  <div className="card-header">
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--blue2)' }} />
                    <h4>Nhập: Thông số định danh</h4>
                    <span className="tag blue" style={{ marginLeft: 'auto' }}>Mục 02</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.field}>
                      <label>Số rãnh stator <strong>Z</strong> <span className={styles.unit}>(rãnh)</span></label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <button className={styles.fieldBtn} onClick={() => setP2z(Math.max(1, p2z - 1))}>−</button>
                        <input
                          className="inp"
                          type="number"
                          step="1"
                          value={p2z}
                          onChange={(e) => setP2z(+e.target.value)}
                          style={{ flex: 1, textAlign: 'center' }}
                        />
                        <button className={styles.fieldBtn} onClick={() => setP2z(p2z + 1)}>+</button>
                      </div>
                    </div>
                    <div className={styles.field} style={{ marginTop: 12 }}>
                      <label>Số cực <strong>2p</strong> <span className={styles.unit}>(Poles)</span></label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <button className={styles.fieldBtn} onClick={() => setP2_2p(Math.max(1, p2_2p - 1))}>−</button>
                        <input
                          className="inp"
                          type="number"
                          step="1"
                          value={p2_2p}
                          onChange={(e) => setP2_2p(+e.target.value)}
                          style={{ flex: 1, textAlign: 'center' }}
                        />
                        <button className={styles.fieldBtn} onClick={() => setP2_2p(p2_2p + 1)}>+</button>
                      </div>
                    </div>
                    <div className={styles.field} style={{ marginTop: 12 }}>
                      <label>Tần số <strong>F</strong> <span className={styles.unit}>(Hz)</span></label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <button className={styles.fieldBtn} onClick={() => setP2f(Math.max(1, p2f - 1))}>−</button>
                        <input
                          className="inp"
                          type="number"
                          step="any"
                          value={p2f}
                          onChange={(e) => setP2f(+e.target.value)}
                          style={{ flex: 1, textAlign: 'center' }}
                        />
                        <button className={styles.fieldBtn} onClick={() => setP2f(p2f + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{ marginBottom: 16 }}>
                  <div className="card-header">
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green)' }} />
                    <h4>Kết quả: Kiểm tra động cơ</h4>
                    <span className="tag green" style={{ marginLeft: 'auto' }}>✓ Tự động</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.results}>
                      <div className={styles.resRow}>
                        <span className={styles.resLabel}>Tốc độ đồng từ trường N<sub>td</sub></span>
                        <span className="tag blue">{p2_ntd} RPM</span>
                      </div>
                      <div className={styles.resRow}>
                        <span className={styles.resLabel}>Bước cực từ τ</span>
                        <span className="tag blue">{p2_tau.toFixed(2)} (rãnh/cực)</span>
                      </div>
                      <div className={styles.resRow}>
                        <span className={styles.resLabel}>Số rãnh phân bố q</span>
                        <span className="tag blue">
                          {p2_q_isInteger ? p2_q : `${p2_qNum}/${p2_qDen}`} (rãnh/pha/cực)
                        </span>
                      </div>
                      <div className={styles.resRow}>
                        <span className={styles.resLabel}>Phân loại dây quấn</span>
                        <span className="tag blue">{p2_classification_3ph}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 03 ==================== */}
        {activeTab === 2 && (
          <div className={styles.wireTabWrap}>
            <div className={styles.wireSubTitle}>
              <span className={styles.wireSubNum}>03</span>
              <span>Kiểm tra & phân loại động cơ 1 pha</span>
            </div>
            <div className={styles.layout}>
              <div className={styles.inputPanel}>
                <div className="card">
                  <div className="card-header">
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--blue2)' }} />
                    <h4>Nhập: Thông số định danh</h4>
                    <span className="tag blue" style={{ marginLeft: 'auto' }}>Mục 03</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.field}>
                      <label>Số rãnh stator <strong>Z</strong> <span className={styles.unit}>(rãnh)</span></label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <button className={styles.fieldBtn} onClick={() => setP3z(Math.max(1, p3z - 1))}>−</button>
                        <input
                          className="inp"
                          type="number"
                          step="1"
                          value={p3z}
                          onChange={(e) => setP3z(+e.target.value)}
                          style={{ flex: 1, textAlign: 'center' }}
                        />
                        <button className={styles.fieldBtn} onClick={() => setP3z(p3z + 1)}>+</button>
                      </div>
                    </div>
                    <div className={styles.field} style={{ marginTop: 12 }}>
                      <label>Số cực <strong>2p</strong> <span className={styles.unit}>(Poles)</span></label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <button className={styles.fieldBtn} onClick={() => setP3_2p(Math.max(1, p3_2p - 1))}>−</button>
                        <input
                          className="inp"
                          type="number"
                          step="1"
                          value={p3_2p}
                          onChange={(e) => setP3_2p(+e.target.value)}
                          style={{ flex: 1, textAlign: 'center' }}
                        />
                        <button className={styles.fieldBtn} onClick={() => setP3_2p(p3_2p + 1)}>+</button>
                      </div>
                    </div>
                    <div className={styles.field} style={{ marginTop: 12 }}>
                      <label>Tần số <strong>F</strong> <span className={styles.unit}>(Hz)</span></label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <button className={styles.fieldBtn} onClick={() => setP3f(Math.max(1, p3f - 1))}>−</button>
                        <input
                          className="inp"
                          type="number"
                          step="any"
                          value={p3f}
                          onChange={(e) => setP3f(+e.target.value)}
                          style={{ flex: 1, textAlign: 'center' }}
                        />
                        <button className={styles.fieldBtn} onClick={() => setP3f(p3f + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{ marginBottom: 16 }}>
                  <div className="card-header">
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green)' }} />
                    <h4>Kết quả: Kiểm tra động cơ</h4>
                    <span className="tag green" style={{ marginLeft: 'auto' }}>✓ Tự động</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.results}>
                      <div className={styles.resRow}>
                        <span className={styles.resLabel}>Tốc độ đồng từ trường N<sub>td</sub></span>
                        <span className="tag blue">{p3_ntd} RPM</span>
                      </div>
                      <div className={styles.resRow}>
                        <span className={styles.resLabel}>Bước cực từ τ</span>
                        <span className="tag blue">{p3_tau} (rãnh/cực)</span>
                      </div>
                      <div className={styles.resRow}>
                        <span className={styles.resLabel}>Phân loại dây quấn</span>
                        <span className="tag blue">{p3_classification}</span>
                      </div>
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