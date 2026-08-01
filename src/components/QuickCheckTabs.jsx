import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickCheckTabs.module.css';

// Coerce a possibly-empty/invalid input value to a safe number for calculations.
function toNum(v, fallback = 0) {
  if (v === '' || v === null || v === undefined) return fallback;
  const n = Number(v);
  return Number.isNaN(n) ? fallback : n;
}

// Icon trang trí ở góc header (card "Nhập thông số")
function IconSliders({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3M1 14H7M9 8H15M17 16H23" />
    </svg>
  );
}

// Icon trang trí ở góc header (card "Kết quả")
function IconCheckCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

// (Icon tia sáng cũ đã được thay bằng ký hiệu "‖" trực tiếp trong ô kết quả)

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

  // ==================== TAB 02: KIỂM TRA & PHÂN LOẠI 3 PHA 1 TỐC ĐỘ ====================
  const [p2z, setP2z] = useState(36);
  const [p2_2p, setP2_2p] = useState(4);
  const [p2f, setP2f] = useState(50);

  const p2zNum = toNum(p2z, 0);
  const p2_2pNum = toNum(p2_2p, 0);
  const p2fNum = toNum(p2f, 0);

  const p2_ntd = p2_2pNum > 0 ? Math.round((120 * p2fNum) / p2_2pNum) : 0;

  // τ (bước cực từ) = Z / 2p — giữ nguyên phần lẻ để phân loại đúng
  const p2_tauRaw = p2_2pNum > 0 ? p2zNum / p2_2pNum : 0;
  const p2_tauIsInteger = Number.isInteger(p2_tauRaw);
  const p2_tau = p2_tauIsInteger ? p2_tauRaw : Math.round(p2_tauRaw * 100) / 100;

  // q (số rãnh phân bố mỗi pha trên mỗi cực) = τ / 3
  const p2_qRaw = p2_tauRaw / 3;
  const p2_qIsInteger = Number.isInteger(p2_qRaw);
  const p2_q = p2_qIsInteger ? p2_qRaw : Math.round(p2_qRaw * 100) / 100;


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

  // Phân loại dây quấn — τ có thể thỏa nhiều điều kiện cùng lúc (VD τ=12 chia hết
  // cho cả 2, 3, 4 thì phải hiện đủ CẢ 3 loại, không loại trừ lẫn nhau).
  const p3_div2 = p3_tauIsInteger && p3_tauRaw % 2 === 0;
  const p3_div3 = p3_tauIsInteger && p3_tauRaw % 3 === 0;
  const p3_div4 = p3_tauIsInteger && p3_tauRaw % 4 === 0;
  const p3_noneMatch = p3_tauIsInteger && !p3_div2 && !p3_div3 && !p3_div4;
  

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
                <div className={styles.bannerDivider} />

              <p>Nhập thông số định danh để kiểm tra nhanh phân loại và cấu hình dây quấn</p>
            </div>
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
                  <IconSliders className={styles.bigCardHeaderIcon} />
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
                      <span className={styles.unit}>RPM</span>
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
                      <span className={styles.unit}>Hz</span>
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

                  <button className={styles.btnCheck}>
                    ✓ KIỂM TRA NGAY
                  </button>
                </div>
              </div>

              {/* ---- Card 02: Kết quả ---- */}
              <div className={`${styles.bigCard} ${styles.bigCardResult}`}>
                <div className={`${styles.bigCardHeader} ${styles.bigCardHeaderResult}`}>
                  <IconCheckCircle className={styles.bigCardHeaderIcon} />
                  <span className={styles.bigCardHeaderNum}>02</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>KẾT QUẢ</div>
                    <div className={styles.bigCardHeaderDesc}>Số cực động cơ</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>2P</span>
                      <span className={styles.resFieldLabel}>Số cực</span>
                      <span className={styles.resFieldUnit}>Cực</span>
                    </div>
                    <div className={styles.resFieldRow}>
                      <span className={styles.resFieldBtn}>K</span>
                      <div className={styles.resFieldValueBox}>
                        <strong style={{ color: '#b3461a', fontSize: 20 }}>{p1_2p_corrected}</strong>
                      </div>
                      <span className={styles.resFieldDoubleBar}>‖</span>
                      <span className={styles.resFieldBtn}>Q</span>
                    </div>
                  </div>

                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>Chú ý</span>
                      <span className={styles.resFieldLabel}></span>
                      <span className={styles.resFieldUnit}>Poles</span>
                    </div>
                  </div>
                  <div className={styles.noteBox}>
                    1: Số cực trong phần mềm được ký hiệu <span className={styles.noteRed}>2P</span>.<br />
                    2: Trong một số tài liệu có thể ký hiêu số cực <span className={styles.noteRed}>P</span>, viết tắt từ tiếng anh là <span className={styles.noteBlue}>(Poles)</span>.
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
              {/* ---- Card 01: Nhập thông số đầu vào ---- */}
              <div className={styles.bigCard}>
                <div className={styles.bigCardHeader}>
                  <IconSliders className={styles.bigCardHeaderIcon} />
                  <span className={styles.bigCardHeaderNum}>01</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>NHẬP THÔNG SỐ ĐẦU VÀO</div>
                    <div className={styles.bigCardHeaderDesc}>Động cơ 3 pha 1 tốc độ</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>Z</span>
                      <span className={styles.fieldLabel}>Số rãnh stator</span>
                      <span className={styles.unit}>Rãnh</span>
                    </div>
                    <div className={styles.fieldRow}>
                      <button className={styles.fieldBtn} onClick={() => setP2z(Math.max(1, toNum(p2z, 1) - 1))}>−</button>
                      <input
                        className={styles.inp}
                        type="number"
                        step="1"
                        value={p2z}
                        onChange={(e) => setP2z(e.target.value)}
                        onBlur={() => { if (p2z === '') setP2z(1); }}
                      />
                      <button className={styles.fieldBtn} onClick={() => setP2z(toNum(p2z, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>2p</span>
                      <span className={styles.fieldLabel}>Số cực</span>
                      <span className={styles.unit}>Cực</span>
                    </div>
                    <div className={styles.fieldRow}>
                      <button className={styles.fieldBtn} onClick={() => setP2_2p(Math.max(1, toNum(p2_2p, 1) - 1))}>−</button>
                      <input
                        className={styles.inp}
                        type="number"
                        step="1"
                        value={p2_2p}
                        onChange={(e) => setP2_2p(e.target.value)}
                        onBlur={() => { if (p2_2p === '') setP2_2p(1); }}
                      />
                      <button className={styles.fieldBtn} onClick={() => setP2_2p(toNum(p2_2p, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>F</span>
                      <span className={styles.fieldLabel}>Tần số</span>
                      <span className={styles.unit}>Hz</span>
                    </div>
                    <div className={styles.fieldRow}>
                      <button className={styles.fieldBtn} onClick={() => setP2f(Math.max(1, toNum(p2f, 1) - 1))}>−</button>
                      <input
                        className={styles.inp}
                        type="number"
                        step="any"
                        value={p2f}
                        onChange={(e) => setP2f(e.target.value)}
                        onBlur={() => { if (p2f === '') setP2f(1); }}
                      />
                      <button className={styles.fieldBtn} onClick={() => setP2f(toNum(p2f, 1) + 1)}>+</button>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <div className={styles.fieldTop}>
                      <span className={styles.fieldBadge}>Chú ý</span>
                      <span className={styles.fieldLabel}></span>
                      <span className={styles.unit}>{p2_qIsInteger ? '-' : 'Số bối/pha'}</span>
                    </div>
                  </div>
                  {p2_qIsInteger ? (
                    <div className={styles.noteBox}>
                      Các thông số trên dùng cho xây dựng sơ đồ khai triển dây quấn động cơ 3 pha 1 tốc độ, Xem kết quả.
                    </div>
                  ) : (
                    <div className={styles.noteBox}>
                      Các thông số trên dùng xác định số bối dây pha làm việc so với pha khởi động.<br />
                      <span className={styles.noteBlue}>Loại 1:</span> Pha làm việc bằng pha khởi động.<br />
                      <span className={styles.noteRed}>Loại 2:</span> Pha làm việc bằng 2 lần pha khởi động.<br />
                      <span className={styles.noteBlue}>Loại 3:</span> Pha làm việc bằng 3 lần pha khởi động.
                    </div>
                  )}

                  <button className={styles.btnCheck}>
                    ✓ KIỂM TRA NGAY
                  </button>
                </div>
              </div>

              {/* ---- Card 02: Kết quả ---- */}
              <div className={`${styles.bigCard} ${styles.bigCardResult}`}>
                <div className={`${styles.bigCardHeader} ${styles.bigCardHeaderResult}`}>
                  <IconCheckCircle className={styles.bigCardHeaderIcon} />
                  <span className={styles.bigCardHeaderNum}>02</span>
                  <div className={styles.bigCardHeaderText}>
                    <div className={styles.bigCardHeaderTitle}>KẾT QUẢ</div>
                    <div className={styles.bigCardHeaderDesc}>Kiểm tra động cơ</div>
                  </div>
                </div>
                <div className={styles.bigCardBody}>
                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>N<span className={styles.subscript}>db</span></span>
                      <span className={styles.resFieldLabel}>Tốc độ từ trường</span>
                      <span className={styles.resFieldUnit}>RPM</span>
                    </div>
                    <div className={styles.resFieldRow}>
                      <span className={styles.resFieldBtn}>K</span>
                      <div className={styles.resFieldValueBox}>{p2_ntd}</div>
                      <span className={styles.resFieldDoubleBar}>‖</span>
                      <span className={styles.resFieldBtn}>Q</span>
                    </div>
                  </div>

                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>τ</span>
                      <span className={styles.resFieldLabel}>Bước cực từ</span>
                      <span className={styles.resFieldUnit}>Rãnh/Cực</span>
                    </div>
                    <div className={styles.resFieldRow}>
                      <span className={styles.resFieldBtn}>K</span>
                      <div className={styles.resFieldValueBox}>{p2_tau}</div>
                      <span className={styles.resFieldDoubleBar}>‖</span>
                      <span className={styles.resFieldBtn}>Q</span>
                    </div>
                  </div>

                  {p2_qIsInteger ? (
                    <>
                      <div className={styles.resField}>
                        <div className={styles.resFieldTop}>
                          <span className={styles.resFieldBadge}>q</span>
                          <span className={styles.resFieldLabel}>Số rãnh phân bố</span>
                          <span className={styles.resFieldUnit}>Rãnh/pha/cực</span>
                        </div>
                        <div className={styles.resFieldRow}>
                          <span className={styles.resFieldBtn}>K</span>
                          <div className={styles.resFieldValueBox}>{p2_q}</div>
                          <span className={styles.resFieldDoubleBar}>‖</span>
                          <span className={styles.resFieldBtn}>Q</span>
                        </div>
                      </div>

                      <div className={styles.resField}>
                        <div className={styles.resFieldTop}>
                          <span className={styles.resFieldBadge}>PL</span>
                          <span className={styles.resFieldLabel}>Phân loại dây dây quấn</span>
                          <span className={styles.resFieldUnit}>SN</span>
                        </div>
                        <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                          <span className={styles.resFieldBtn}>K</span>
                          <div className={`${styles.resFieldValueBox} ${styles.resFieldValuePL}`}>Số Nguyên</div>
                          <span className={styles.resFieldDoubleBar}>‖</span>
                          <span className={styles.resFieldBtn}>Q</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.resField}>
                        <div className={styles.resFieldTop}>
                          <span className={styles.resFieldBadge}>PL</span>
                          <span className={styles.resFieldLabel}>Số rãnh phân bố/ cực</span>
                          <span className={styles.resFieldUnit}>Loại 1</span>
                        </div>
                        <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                          <span className={styles.resFieldBtn}>K</span>
                          <div className={`${styles.resFieldValueBox} ${styles.resFieldValuePL}`}>Q<sub>A</sub> = Q<sub>B</sub></div>
                          <span className={styles.resFieldDoubleBar}>‖</span>
                          <span className={styles.resFieldBtn}>Q</span>
                        </div>
                      </div>

                      <div className={styles.resField}>
                        <div className={styles.resFieldTop}>
                          <span className={styles.resFieldBadge}>PL</span>
                          <span className={styles.resFieldLabel}>Số rãnh phân bố/ cực</span>
                          <span className={styles.resFieldUnit}>Loại 2</span>
                        </div>
                        <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                          <span className={styles.resFieldBtn}>K</span>
                          <div className={`${styles.resFieldValueBox} ${styles.resFieldValuePL}`}>Q<sub>A</sub> = 2.Q<sub>B</sub></div>
                          <span className={styles.resFieldDoubleBar}>‖</span>
                          <span className={styles.resFieldBtn}>Q</span>
                        </div>
                      </div>

                      <div className={styles.resField}>
                        <div className={styles.resFieldTop}>
                          <span className={styles.resFieldBadge}>PL</span>
                          <span className={styles.resFieldLabel}>Số rãnh phân bố/ cực</span>
                          <span className={styles.resFieldUnit}>Loại 3</span>
                        </div>
                        <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                          <span className={styles.resFieldBtn}>K</span>
                          <div className={`${styles.resFieldValueBox} ${styles.resFieldValuePL}`}>Q<sub>A</sub> = 3.Q<sub>B</sub></div>
                          <span className={styles.resFieldDoubleBar}>‖</span>
                          <span className={styles.resFieldBtn}>Q</span>
                        </div>
                      </div>
                    </>
                  )}
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
                  <IconSliders className={styles.bigCardHeaderIcon} />
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
                  <IconCheckCircle className={styles.bigCardHeaderIcon} />
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
                    <div className={styles.resFieldRow}>
                      <span className={styles.resFieldBtn}>K</span>
                      <div className={styles.resFieldValueBox}>{p3_ntd}</div>
                      <span className={styles.resFieldDoubleBar}>‖</span>
                      <span className={styles.resFieldBtn}>Q</span>
                    </div>
                  </div>

                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>τ</span>
                      <span className={styles.resFieldLabel}>Bước cực từ</span>
                      <span className={styles.resFieldUnit}>(rãnh/cực)</span>
                    </div>
                    <div className={styles.resFieldRow}>
                      <span className={styles.resFieldBtn}>K</span>
                      <div className={styles.resFieldValueBox}>{p3_tau}</div>
                      <span className={styles.resFieldDoubleBar}>‖</span>
                      <span className={styles.resFieldBtn}>Q</span>
                    </div>
                  </div>

                  <div className={styles.resField}>
                    <div className={styles.resFieldTop}>
                      <span className={styles.resFieldBadge}>PL</span>
                      <span className={styles.resFieldLabel}>Phân loại dây quấn</span>
                    </div>

                    {!p3_tauIsInteger && (
                      <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                        <span className={styles.resFieldBtn}>K</span>
                        <div className={`${styles.resFieldValueBox} ${styles.resFieldValueText} ${styles.resFieldValuePL}`}>
                          Z không chia hết cho 2p (τ lẻ) — cần kiểm tra lại thông số đầu vào
                        </div>
                        <span className={styles.resFieldDoubleBar}>‖</span>
                        <span className={styles.resFieldBtn}>Q</span>
                      </div>
                    )}

                    {p3_div2 && (
                      <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                        <span className={styles.resFieldBtn}>K</span>
                        <div className={`${styles.resFieldValueBox} ${styles.resFieldValueText} ${styles.resFieldValuePL}`}>
                          Phân bố QA = QB (τ là bội số của 2)
                        </div>
                        <span className={styles.resFieldDoubleBar}>‖</span>
                        <span className={styles.resFieldBtn}>Q</span>
                      </div>
                    )}

                    {p3_div3 && (
                      <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                        <span className={styles.resFieldBtn}>K</span>
                        <div className={`${styles.resFieldValueBox} ${styles.resFieldValueText} ${styles.resFieldValuePL}`}>
                          Phân bố QA = 2.QB (τ là bội số của 3)
                        </div>
                        <span className={styles.resFieldDoubleBar}>‖</span>
                        <span className={styles.resFieldBtn}>Q</span>
                      </div>
                    )}

                    {p3_div4 && (
                      <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                        <span className={styles.resFieldBtn}>K</span>
                        <div className={`${styles.resFieldValueBox} ${styles.resFieldValueText} ${styles.resFieldValuePL}`}>
                          Phân bố QA = 3.QB (τ là bội số của 4)
                        </div>
                        <span className={styles.resFieldDoubleBar}>‖</span>
                        <span className={styles.resFieldBtn}>Q</span>
                      </div>
                    )}

                    {p3_noneMatch && (
                      <div className={`${styles.resFieldRow} ${styles.resFieldRowYellow}`}>
                        <span className={styles.resFieldBtn}>K</span>
                        <div className={`${styles.resFieldValueBox} ${styles.resFieldValueText} ${styles.resFieldValuePL}`}>
                          Không thuộc loại nào được định nghĩa
                        </div>
                        <span className={styles.resFieldDoubleBar}>‖</span>
                        <span className={styles.resFieldBtn}>Q</span>
                      </div>
                    )}
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