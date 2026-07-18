import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickCheckTabs.module.css';

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

  // ==================== TAB 03: KIỂM TRA & PHÂN LOẠI 1 PHA ====================
  const [p3z, setP3z] = useState(36);
  const [p3_2p, setP3_2p] = useState(4);
  const [p3f, setP3f] = useState(50);

  const p3zNum = toNum(p3z, 0);
  const p3_2pNum = toNum(p3_2p, 0);
  const p3fNum = toNum(p3f, 0);

  const p3_ntd = p3_2pNum > 0 ? Math.round((120 * p3fNum) / p3_2pNum) : 0;

  // τ (bước cực từ) = Z / 2p — KHÔNG được làm tròn âm thầm, vì phần lẻ
  // (Z không chia hết cho 2p) là thông tin quan trọng để phân loại đúng.
  const p3_tauRaw = p3_2pNum > 0 ? p3zNum / p3_2pNum : 0;
  const p3_tauIsInteger = Number.isInteger(p3_tauRaw);
  // Hiển thị: số nguyên nếu chia hết, ngược lại giữ tối đa 2 chữ số thập phân
  const p3_tau = p3_tauIsInteger ? p3_tauRaw : Math.round(p3_tauRaw * 100) / 100;

  // Phân loại dây quấn — ưu tiên loại đặc hiệu nhất trước (loại trừ lẫn nhau,
  // vì chia hết cho 4 thì chắc chắn cũng chia hết cho 2, không được liệt kê cả hai).
  let p3_classification;
  if (!p3_tauIsInteger) {
    p3_classification = 'Z không chia hết cho 2p (τ lẻ) — cần kiểm tra lại thông số đầu vào';
  } else if (p3_tauRaw % 4 === 0) {
    p3_classification = 'Dây quấn loại 3 (τ chia hết cho 4)';
  } else if (p3_tauRaw % 3 === 0) {
    p3_classification = 'Dây quấn loại 2 (τ chia hết cho 3)';
  } else if (p3_tauRaw % 2 === 0) {
    p3_classification = 'Dây quấn loại 1 (τ chia hết cho 2)';
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
      <section className="section">
        <div className="page-wrap">
          <div className={styles.banner}>
            <div>
              <h2>Dành cho bạn: <em>Kiểm tra nhanh</em> thiết kế động cơ</h2>
              <p>Nhập thông số định danh để kiểm tra nhanh phân loại và cấu hình dây quấn</p>
            </div>
            <Link to="/tinh-toan/3pha-1tocdo" className={styles.bannerCta}>🚀 Dùng thử ngay</Link>
          </div>

          <div className={styles.panel}>
        <div className={styles.tabbar}>
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.tabNum}>{t.num}</span>
              <span className={styles.tabTitle}>{t.title}</span>
            </button>
          ))}
        </div>

        {/* ==================== TAB 01 ==================== */}
        {activeTab === 0 && (
          <div>
            <div className={styles.subtitle}>
              <span className={styles.subtitleNum}>01</span>
              <span>Kiểm tra nhanh số cực (2p) từ tốc độ và tần số</span>
            </div>
            <div className={styles.layout}>
              {/* ---- Card 01: Nhập thông số ---- */}
              <div className={styles.bigCard}>
                <div className={styles.bigCardHeader}>
                  <span className={styles.bigCardHeaderNum}>01</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>NHẬP THÔNG SỐ ĐẦU VÀO</div>
                    <div className={styles.bigCardHeaderDesc}>Kiểm tra số cực 2p (Poles)</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>N<span className={styles.subscript}>db</span></span>
                      <span className={styles.fieldLabel}>Tốc độ từ trường</span>
                      <span className={styles.unit}>(RPM)</span>
                    </div>
                    <div className={styles.fieldRow}>
                      <button className={styles.fieldBtn} onClick={() => setP1ndb(Math.max(100, toNum(p1ndb, 100) - 100))}>−</button>
                      <input
                        className={styles.inp}
                        type="number"
                        step="any"
                        value={p1ndb}
                        onChange={(e) => setP1ndb(e.target.value)}
                        onBlur={() => { if (p1ndb === '') setP1ndb(100); }}
                      />
                      <button className={styles.fieldBtn} onClick={() => setP1ndb(toNum(p1ndb, 100) + 100)}>+</button>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>F</span>
                      <span className={styles.fieldLabel}>Tần số</span>
                      <span className={styles.unit}>(Hz)</span>
                    </div>
                    <div className={styles.fieldRow}>
                      <button className={styles.fieldBtn} onClick={() => setP1f(Math.max(1, toNum(p1f, 1) - 10))}>−</button>
                      <input
                        className={styles.inp}
                        type="number"
                        step="any"
                        value={p1f}
                        onChange={(e) => setP1f(e.target.value)}
                        onBlur={() => { if (p1f === '') setP1f(1); }}
                      />
                      <button className={styles.fieldBtn} onClick={() => setP1f(toNum(p1f, 1) + 10)}>+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---- Card 02: Kết quả ---- */}
              <div className={`${styles.bigCard} ${styles.bigCardResult}`}>
                <div className={`${styles.bigCardHeader} ${styles.bigCardHeaderResult}`}>
                  <span className={styles.bigCardHeaderNum}>02</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>KẾT QUẢ</div>
                    <div className={styles.bigCardHeaderDesc}>Số cực động cơ</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>2p</span>
                      <span className={styles.resFieldLabel}>Số cực động cơ</span>
                      <span className={styles.resFieldUnit}>(Poles)</span>
                    </div>
                    <div className={styles.resFieldValueBox}>
                      <strong style={{ color: '#d92531', fontSize: 20 }}>{p1_2p_corrected}</strong>
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
            <div className={styles.subtitle}>
              <span className={styles.subtitleNum}>02</span>
              <span>Kiểm tra & phân loại động cơ 3 pha 1 tốc độ</span>
            </div>
            <div className={styles.layout}>
              <div className={styles.bigCard}>
                <div className={styles.bigCardHeader}>
                  <span className={styles.bigCardHeaderNum}>01</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>NỘI DUNG THUỘC TÍNH NHANH</div>
                    <div className={styles.bigCardHeaderDesc}>Các mục tính toán nhanh trong thiết kế stator</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 12, color: '#2a3550', lineHeight: 1.5 }}>
                    <li><strong>01.</strong> Đổi đường kính dây đồng</li>
                    <li><strong>02.</strong> Tính toán máy biến áp</li>
                    <li><strong>03.</strong> Xác định bước bối dây động cơ 2 pha</li>
                    <li><strong>04.</strong> Xác định thông số kích thước hình học</li>
                  </ul>
                </div>
              </div>

              <div className={`${styles.bigCard} ${styles.bigCardResult}`}>
                <div className={`${styles.bigCardHeader} ${styles.bigCardHeaderResult}`}>
                  <span className={styles.bigCardHeaderNum}>02</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>GHI CHÚ</div>
                    <div className={styles.bigCardHeaderDesc}>Nhấn vào tab khác để tiếp tục kiểm tra nhanh</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <p style={{ margin: '0 0 12px', color: '#2a3550', lineHeight: 1.6 }}>
                    Nội dung này được giữ ở tab thứ hai để người dùng có thể tiếp cận nhanh các tính toán thuộc tính hệ thống trước khi vào các công cụ phân loại chi tiết.
                  </p>
                  <p style={{ margin: 0, color: '#5b6b85', lineHeight: 1.6 }}>
                    Các mục còn lại trong phần khoa học kỹ thuật được giữ nguyên như hiện tại.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 03 ==================== */}
        {activeTab === 2 && (
          <div>
            <div className={styles.subtitle}>
              <span className={styles.subtitleNum}>03</span>
              <span>Kiểm tra & phân loại động cơ 1 pha</span>
            </div>
            <div className={styles.layout}>
              {/* ---- Card 01: Nhập thông số đầu vào ---- */}
              <div className={styles.bigCard}>
                <div className={styles.bigCardHeader}>
                  <span className={styles.bigCardHeaderNum}>01</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>NHẬP THÔNG SỐ ĐẦU VÀO</div>
                    <div className={styles.bigCardHeaderDesc}>Động cơ 1 pha</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>Z</span>
                      <span className={styles.fieldLabel}>Số rãnh stator</span>
                      <span className={styles.unit}>(rãnh)</span>
                    </div>
                    <div className={styles.fieldRow}>
                      <button className={styles.fieldBtn} onClick={() => setP3z(Math.max(1, toNum(p3z, 1) - 1))}>−</button>
                      <input
                        className={styles.inp}
                        type="number"
                        step="1"
                        value={p3z}
                        onChange={(e) => setP3z(e.target.value)}
                        onBlur={() => { if (p3z === '') setP3z(1); }}
                      />
                      <button className={styles.fieldBtn} onClick={() => setP3z(toNum(p3z, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>2p</span>
                      <span className={styles.fieldLabel}>Số cực</span>
                      <span className={styles.unit}>(cực)</span>
                    </div>
                    <div className={styles.fieldRow}>
                      <button className={styles.fieldBtn} onClick={() => setP3_2p(Math.max(1, toNum(p3_2p, 1) - 1))}>−</button>
                      <input
                        className={styles.inp}
                        type="number"
                        step="1"
                        value={p3_2p}
                        onChange={(e) => setP3_2p(e.target.value)}
                        onBlur={() => { if (p3_2p === '') setP3_2p(1); }}
                      />
                      <button className={styles.fieldBtn} onClick={() => setP3_2p(toNum(p3_2p, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>F</span>
                      <span className={styles.fieldLabel}>Tần số</span>
                      <span className={styles.unit}>(Hz)</span>
                    </div>
                    <div className={styles.fieldRow}>
                      <button className={styles.fieldBtn} onClick={() => setP3f(Math.max(1, toNum(p3f, 1) - 1))}>−</button>
                      <input
                        className={styles.inp}
                        type="number"
                        step="any"
                        value={p3f}
                        onChange={(e) => setP3f(e.target.value)}
                        onBlur={() => { if (p3f === '') setP3f(1); }}
                      />
                      <button className={styles.fieldBtn} onClick={() => setP3f(toNum(p3f, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <button className={styles.btnCheck}>
                    ✓ KIỂM TRA NGAY
                  </button>
                </div>
              </div>

              {/* ---- Card 02: Kết quả ---- */}
              <div className={`${styles.bigCard} ${styles.bigCardResult}`}>
                <div className={`${styles.bigCardHeader} ${styles.bigCardHeaderResult}`}>
                  <span className={styles.bigCardHeaderNum}>02</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>KẾT QUẢ</div>
                    <div className={styles.bigCardHeaderDesc}>Thông số tính toán</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>N<span className={styles.subscript}>td</span></span>
                      <span className={styles.resFieldLabel}>Tốc độ đồng bộ</span>
                      <span className={styles.resFieldUnit}>(RPM)</span>
                    </div>
                    <div className={styles.resFieldValueBox}>{p3_ntd}</div>
                  </div>

                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>τ</span>
                      <span className={styles.resFieldLabel}>Bước cực từ</span>
                      <span className={styles.resFieldUnit}>(rãnh/cực)</span>
                    </div>
                    <div className={styles.resFieldValueBox}>{p3_tau}</div>
                  </div>

                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>PL</span>
                      <span className={styles.resFieldLabel}>Phân loại dây quấn</span>
                    </div>
                    <div className={`${styles.resFieldValueBox} ${styles.resFieldValueText}`}>{p3_classification}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
          </div>
        </div>
      </section>
    </>
  );
}