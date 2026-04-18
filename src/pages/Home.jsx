import { useState } from 'react';
import { Link } from 'react-router-dom';
import MotorSVG from '../components/MotorSVG';
import EfficiencyChart from '../components/EfficiencyChart';
import Subnav from '../components/Subnav';
import fluxImage from '../assets/LYTHUYETMACHTUTRONGMAYDIEN.png';
import statorPhoto from '../assets/HINHTHONGSODINHMUC.jpg';
import appGif from '../assets/app.gif';
import fluxDensityImage from '../assets/PHANBOMATDOTUTHONG.jpg';
import { HERO_FEATURES, ANALYSIS_RESULTS, WHY_ITEMS } from '../data/content';
import styles from './Home.module.css';

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

export default function Home() {
  /* ── Tab 02: số cực ── */
  const [p2n, setP2n] = useState(1800);
  const [p2f, setP2f] = useState(150);
  const raw2P = Math.round((120 * p2f) / p2n);
  const poles2 = raw2P % 2 !== 0 ? raw2P + 1 : raw2P;

  /* ── Tab 03: 3 pha 1 tốc độ ── */
  const [p3z, setP3z] = useState(36);
  const [p3p, setP3p] = useState(4);
  const [p3f, setP3f] = useState(50);
  const ndb3   = Math.round((120 * p3f) / p3p);
  const tau3   = p3z / p3p;
  const tauInt3 = Math.round(tau3);
  const q3     = tau3 / 3;
  const g3tau  = gcd(p3z, p3p);
  const tauNum3 = p3z / g3tau, tauDen3 = p3p / g3tau;
  const g3q    = gcd(p3z, p3p * 3);
  const qNum3  = p3z / g3q, qDen3 = (p3p * 3) / g3q;
  const qInt3 = Math.round(q3);
  const isEvenQ = qInt3 % 2 === 0;
  const d1_3 = tauInt3;
  const d2_3 = tauInt3 - Math.round(q3);
  const d3_3 = tauInt3 - 2 * Math.round(q3);

  /* ── Tab 04: 1 pha ── */
  const [p4z, setP4z] = useState(36);
  const [p4p, setP4p] = useState(4);
  const [p4f, setP4f] = useState(50);
  const ndb4   = Math.round((120 * p4f) / p4p);
  const tau4   = Math.round(p4z / p4p);
  const d1_4 = tau4;
  const d2_4 = Math.round(tau4 / 2);

  /* ── Tab 01: quy đổi dây dẫn theo PDF ── */
  const [wireSet, setWireSet] = useState([
    { d: '1', n: '1' },
    { d: '1.05', n: '2' },
    { d: '1.1', n: '2' },
    { d: '0', n: '0' },
    { d: '0', n: '0' },
    { d: '0', n: '0' },
    { d: '0', n: '0' },
  ]);
  const dt = Math.sqrt(
    wireSet.reduce((sum, item) => {
      const d = parseFloat(item.d) || 0;
      const n = parseFloat(item.n) || 0;
      return sum + (d * d * n);
    }, 0),
  );

  const equivalentDs = wireSet.map((item) => {
    const d = parseFloat(item.d) || 0;
    const n = parseFloat(item.n) || 0;
    return d * Math.sqrt(n);
  });

  const updateWire = (idx, key, value) => {
    setWireSet((prev) => prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item)));
  };

  /* ── Active tab ── */
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { num: '01', title: 'Qui đổi đường kính dây đồng tiết diện tròn: dₙ (mm).' },
    { num: '02', title: 'Kiểm tra nhanh số cực: 2p (Poles)' },
    { num: '03', title: 'Kiểm tra phân loại động cơ 3 pha 1 tốc độ' },
    { num: '04', title: 'Kiểm tra phân loại động cơ 1 pha' },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={`page-wrap ${styles.heroInner}`}>
          <div className={`${styles.heroCard} fade-up`}>
            <div className={styles.heroCardImg}>
              <MotorSVG size={90} spin />
            </div>
            <div className={styles.heroCardBody}>
              <span className={styles.appBadge}>⚡ App Statordata</span>
              <h3>Phần mềm thiết kế<br />dây quấn động cơ điện</h3>
              <p>Tính toán & thiết kế chuyên nghiệp<br />cho kỹ sư điện Việt Nam</p>
            </div>
          </div>
          <div className={`${styles.heroContent} fade-up-1`}>
            <div className={styles.heroBadge}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0l1.5 4.5H12L8.5 7l1.5 4.5L6 9 2 11.5 3.5 7 0 4.5h4.5z"/></svg>
              Phần mềm thiết kế máy điện
            </div>
            <h1 className={styles.heroH1}>
              Thiết kế & Tính toán <em>dây quấn Stator</em> động cơ cảm ứng
            </h1>
            <ul className={styles.heroList}>
              {HERO_FEATURES.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <div className={styles.heroActions} />          </div>
        </div>
      </section>
      <Subnav />

      {/* ── CHECK BANNER ── */}
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

      {/* ── CALCULATION LINKS ── */}
      <section className={styles.calcSection}>
        <div className="page-wrap">
          <div className={styles.calcGrid}>
            <Link to="/" className={styles.calcItem}>
              <div className={styles.calcIcon}>🚀</div>
              <h4>Bắt đầu tính toán</h4>
              <p>Khởi động công cụ tính toán chuyên nghiệp</p>
            </Link>
            <Link to="/tinh-toan/3pha-1tocdo" className={styles.calcItem}>
              <div className={styles.calcIcon}>⚡</div>
              <h4>3 pha, 1 tốc độ</h4>
              <p>Tính toán động cơ 3 pha tốc độ đơn</p>
            </Link>
            <Link to="/tinh-toan/3pha-2tocdo" className={styles.calcItem}>
              <div className={styles.calcIcon}>🔄</div>
              <h4>3 pha, 2 tốc độ (1/2)</h4>
              <p>Tính toán động cơ 3 pha tốc độ kép</p>
            </Link>
            <Link to="/tinh-toan/1pha" className={styles.calcItem}>
              <div className={styles.calcIcon}>🔌</div>
              <h4>1 pha</h4>
              <p>Tính toán động cơ 1 pha</p>
            </Link>
            <Link to="/huong-dan" className={styles.calcItem}>
              <div className={styles.calcIcon}>📚</div>
              <h4>Hướng dẫn kỹ thuật</h4>
              <p>Hướng dẫn sử dụng và tài liệu kỹ thuật</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="page-wrap">

        {/* ── ANALYSIS ── */}
        <section className="section">
          <div className={styles.featGrid}>
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                <h4 className={styles.analysisLabel}>Phương pháp xử lý dữ liệu</h4>
              </div>
              <div className="card-body">
                <div className={styles.analysisHeader}>
                  <h3 className={styles.analysisMain}>XỬ LÝ DỮ LIỆU ĐẦU VÀO VÀ XUẤT KẾT QUẢ.</h3>
                  <span className="tag blue">8 Mục</span>
                </div>
                <ul className="feature-list">
                  {ANALYSIS_RESULTS.map((line, i) => <li key={i}>{line}</li>)}
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                <h4>Video demo quá trình xử lý</h4>
                <span className="tag green" style={{marginLeft:'auto'}}>HD</span>
              </div>
              <div className="card-body">
                <div className="video-block" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAGNETIC ── */}
        <section className={styles.magSection}>
          <div className={styles.magTitle}>Mạch từ & Thông số vận hành trong máy điện</div>
          <div className={styles.magGrid}>
            <div className={styles.magCard}>
              <Link to="/ky-thuat" className={styles.magTitleLink}>
                <h4>LÝ THUYẾT MẠCH TỪ TRONG MÁY ĐIỆN.</h4>
              </Link>
              <p>Nắm bắt những hiểu biết giá trị về thiết kế và hoạt động của động cơ cảm ứng, thông qua phân tích chi tiết mạch từ. Xác định quan hệ Từ cảm cực đại tại gông stator so với từ cảm cực đại tại khe hở không khí trên mỗi cực từ hay xác định quan hệ Từ cảm cực đại tại răng stator so với từ cảm cực đại tại khe hở không khí trên mỗi cực từ, cùng như nắm rõ từ thông cực đại trên mỗi cực từ động cơ cảm ứng khi vận hành khi mang tải định mức.</p>
              <Link to="/ky-thuat" className={styles.magImageRow}>
                <img src={fluxImage} alt="Lý thuyết mạch từ" className={styles.magImage} />
              </Link>
            </div>
            <div className={styles.magCard}>
              <Link to="/ky-thuat" className={styles.magTitleLink}>
                <h4>THÔNG SỐ ĐỊNH MỨC ĐỘNG CƠ ĐIỆN.</h4>
              </Link>
              <p>Thông số định mức là các đại lượng đặc trưng cho chế độ làm việc tiêu chuẩn của động cơ điện, bao gồm công suất, điện áp, dòng điện, tốc độ, hệ số công suất (Power Factor), hiệu suất (efficiency (%)), cấp cách điện và chế độ làm việc S1...S8. Các thông số này là cơ sở để đánh giá khả năng vận hành và phục vụ cho quá trình thiết kế và tính toán dữ liệu.</p>
              <Link to="/ky-thuat" className={styles.magFigure}>
                <img src={statorPhoto} alt="Thông số định mức động cơ điện" className={styles.magFigureImg} />
                <div className={styles.magFigureCaption}>Hình: ảnh cho phần LÝ THUYẾT MẠCH TỪ TRONG MÁY ĐIỆN.</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="section">
          <h2 className="sec-title">Vì sao các kỹ sư lựa chọn<br /><span className="accent">nền tảng Statordata.com?</span></h2>
          <div className={styles.whyItemsGrid}>
            <div className={styles.whyLeft}>
              {WHY_ITEMS.filter((_, i) => i < 3).map(item => (
                <div key={item.num} className={styles.whyItem}>
                  <div className={styles.whyNum}>{item.num}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.whyLeft}>
              {WHY_ITEMS.filter((_, i) => i >= 3).map(item => (
                <div key={item.num} className={styles.whyItem}>
                  <div className={styles.whyNum}>{item.num}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.whyBottomGrid}>
            <div className={styles.chartCard}>
              <h4>Biểu đồ Efficiency — Induction Motor</h4>
              <EfficiencyChart height={220} />
              <div style={{textAlign:'center',fontSize:10.5,color:'var(--text2)',marginTop:6}}>P(kW) — Efficiency of Induction Motor</div>
            </div>
            <div className={styles.statorNote}>
              <p><strong>STATORDATA.COM</strong> là nền tảng kỹ thuật chuyên sâu dành cho kỹ sư thiết kế và sửa chữa động cơ cảm ứng.</p>
              <ul className={styles.statorBullets}>
                <li>➤ Hệ thống cho phép nhập các thông số định danh như: Điện áp, tần số, số rãnh, số cực, số mạch nhánh song song. Dựa trên các dữ liệu này, hệ thống nhanh chóng xuất kết quả như: Thông số xây dựng sơ đồ khai triển dây quấn, vị trí đặt hai đầu dây pha liên tiếp trong không gian stator hoặc rotor.</li>
                <li>➤ Hệ thống cho phép nhập các thông số kích thước kỹ thuật: Thông số kích thước stator hoặc rotor, thông số kích thước rãnh stator hoặc rotor, Thông số từ thông cực đại. Dựa trên các dữ liệu này, hệ thống nhanh chóng xuất kết quả như: Xác định từ cảm cực đại tại khe hở với từ thông cực đại trên mỗi cực từ, số vòng dây quấn mỗi pha dây quấn, số vòng mỗi bối dây...vv</li>
                <li>➤ Hệ thống cho phép nhập các thông số định mức đầu vào như: Mật độ dòng điện, hệ số công suất (Power Factor) và hiệu suất (Efficiency). Dựa trên các dữ liệu này các thông số định mức của động cơ như công suất định mức, dòng điện định mức cũng được xác định, đảm bảo sự tương thích giữa thiết kế điện từ và đặc tính từ hóa của mạch từ.</li>
              </ul>
              <p><strong>STATORDATA.COM</strong> không chỉ là công cụ thiết kế - tính toán dữ liệu động cơ cảm ứng mà còn là hệ thống hỗ trợ học tập và nghiên cứu, giúp người dùng hiểu sâu hơn về bản chất thiết kế máy điện.</p>
            </div>
          </div>
        </section>

        {/* ── FLUX DENSITY ── */}
        <section className={styles.fluxSection}>
          <h2 className={styles.fluxTitle}>PHÂN BỐ MẬT ĐỘ TỪ THÔNG TRONG MẠCH TỪ.</h2>
          <div className={styles.fluxGrid}>
            <div className={styles.fluxImgCol}>
              <img src={fluxDensityImage} alt="Phân bố mật độ từ thông trong mạch từ" className={styles.fluxImg} />
              <div className={styles.fluxDesc}>
                <p><strong>01:</strong> Mô hình 2D. Mật độ từ thông phân bố trong mạch từ, động cơ 2p = 8 cực, tần số vận hành f = 80 hz. Tốc độ 1200 (RPM). khi động cơ hoạt động không tải.</p>
                <p><strong>03:</strong> Video Mật độ từ thông phân bố trong mạch từ, động cơ 2p = 8 cực, tần số vận hành f = 80 hz. Tốc độ 1200 (RPM). khi động cơ hoạt động với tải. Phân tích có tải cho thấy sự tương tác phức tạp giữa từ trường, dòng điện cuộn dây.</p>
              </div>
            </div>
            <div className={styles.fluxInfoCol}>
              <img src={appGif} alt="Video mạch từ" className={styles.fluxGif} />
            </div>
          </div>
        </section>

        {/* ── CHECK BANNER ── */}
        <div className={styles.checkBanner}>
          <div>
            <h2>Dành cho bạn: <em>Kiểm tra nhanh</em> thiết kế động cơ</h2>
            <p>Trong quá trình làm tên và đơn vị viết đúng theo như trên: không thay đổi hay chế chào gì thêm.</p>
          </div>
          <Link to="/tinh-toan/3pha-1tocdo" className="btn btn-gold">🚀 Dùng thử ngay</Link>
        </div>

        {/* ── CHECK TABS ── */}
        <div className={styles.checkTabWrap}>
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

          {/* TAB 01 — Quy đổi dây dẫn */}
          {activeTab === 0 && (
            <div className={styles.quickWireCard}>
              <h4 className={styles.quickWireHeading}>
                01: QUI ĐỔI NHIỀU ĐƯỜNG KÍNH DÂY ĐỒNG TIẾT DIỆN TRÒN, VỀ TỔNG ĐƯỜNG KÍNH DÂY ĐỒNG CÓ TIẾT DIỆN LỚN NHẤT (KHÔNG TÍNH LỚP MEN CÁCH ĐIỆN).
              </h4>
              <div className={styles.quickWireGrid}>
                <div>
                  <p className={styles.quickWireSub}>Nhập: Đường kính dây đồng tiết diện tròn thành phần tương đương.</p>
                  {wireSet.map((item, idx) => (
                    <div key={`wire-d-${idx}`} className={styles.quickWireRow}>
                      <label>Đường kính dây đồng tròn: d{idx + 1} (mm)</label>
                      <input
                        className={styles.quickWireInput}
                        type="number"
                        step="0.01"
                        value={item.d}
                        onChange={(e) => updateWire(idx, 'd', e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <p className={styles.quickWireSub}>Nhập: Số sợi chập có tiết diện bằng nhau</p>
                  {wireSet.map((item, idx) => (
                    <div key={`wire-n-${idx}`} className={styles.quickWireRow}>
                      <label>Số sợi chập tương đương nhau: N{idx + 1}</label>
                      <input
                        className={styles.quickWireInput}
                        type="number"
                        step="1"
                        value={item.n}
                        onChange={(e) => updateWire(idx, 'n', e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <p className={styles.quickWireSub}>Kết quả: Một dây đồng lớn có tiết diện tương đương.</p>
                  {equivalentDs.map((val, idx) => (
                    <div key={`wire-r-${idx}`} className={styles.quickWireRow}>
                      <label>Một đường kính dây đồng tròn: d{idx + 1}</label>
                      <div className={styles.quickWireResultWrap}>
                        <input className={styles.quickWireInput} type="text" readOnly value={val.toFixed(4)} />
                        <span>(mm)</span>
                      </div>
                    </div>
                  ))}
                  <div className={styles.quickWireTotal}>
                    <strong>Kết quả:</strong> Tổng đường kính dây đồng lớn nhất có tiết diện tương đương: d = <em>{dt.toFixed(4)}</em> (mm)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02 — Số cực */}
          {activeTab === 1 && (
            <div className={styles.checkPanelGrid}>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>02</span>
                  <h5>Kiểm tra nhanh số cực: 2p (Poles)</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Tốc độ đồng bộ <strong>N<sub>db</sub> (RPM)</strong></span>
                    <input className={styles.inp} type="number" value={p2n} onChange={e => setP2n(+e.target.value)} />
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Tần số vận hành <strong>f (Hz)</strong></span>
                    <input className={styles.inp} type="number" value={p2f} onChange={e => setP2f(+e.target.value)} />
                  </div>
                  <div className={styles.resultBox}>
                    <span className={styles.resultLabel}>✓ Kết quả</span>
                    <span className={styles.resultVal}>Tính toán số cực: 2P = {poles2} (cực)</span>
                  </div>
                  <div className={styles.infoBox} style={{marginTop:8}}>Kết quả:</div>
                </div>
              </div>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>02</span>
                  <h5>Hướng dẫn</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox}>Nhập thông định danh: Tốc độ đồng bộ Ndb và Tần số vận hành f (Hz).</div>
                  <div className={styles.infoBox} style={{marginTop:8}}>Công thức tính như sau: 2P = (120.f) / Ndb.</div>
                  <div className={styles.infoBox} style={{marginTop:8}}>Tính toán Số cực: 2p (Poles).</div>
                  <div className={styles.tagRow}>
                    <span className={styles.tagBlue}>2P = 2 → 3000 RPM</span>
                    <span className={styles.tagBlue}>2P = 4 → 1500 RPM</span>
                    <span className={styles.tagBlue}>2P = 6 → 1000 RPM</span>
                    <span className={styles.tagBlue}>2P = 8 → 750 RPM</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03 — 3 pha 1 tốc độ */}
          {activeTab === 2 && (
            <div className={styles.checkPanelGrid}>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>03</span>
                  <h5>Kiểm tra phân loại động cơ 3 pha 1 tốc độ</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox} style={{marginBottom:8}}>
                    Nhập thông định danh: Số rãnh stator Z, Số cực 2p (Poles), Tần số vận hành F (Hz).
                  </div>
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Số rãnh Stator <strong>Z</strong></span>
                    <input className={styles.inp} type="number" value={p3z} onChange={e => setP3z(+e.target.value)} />
                  </div>
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Số cực <strong>2P (Poles)</strong></span>
                    <input className={styles.inp} type="number" value={p3p} onChange={e => setP3p(+e.target.value)} />
                  </div>
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Tần số <strong>F (Hz)</strong></span>
                    <input className={styles.inp} type="number" value={p3f} onChange={e => setP3f(+e.target.value)} />
                  </div>
                  <div className={styles.resultBox}>
                    <span className={styles.resultLabel}>Tốc độ đồng bộ</span>
                    <span className={styles.resultVal}>{ndb3} RPM</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Bước cực từ τ</span>
                    <span className={styles.resultVal}>{tauDen3 === 1 ? tauNum3 : `${tauNum3}/${tauDen3}`} (rãnh/1 pha/cực)</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Số rãnh/pha/cực q</span>
                    <span className={styles.resultVal}>{qDen3 === 1 ? qNum3 : `${qNum3}/${qDen3}`} (rãnh/pha/cực)</span>
                  </div>
                  <div className={isEvenQ ? styles.classifyInteger : styles.classifyFraction}>
                    Vậy kết luận như sau: {isEvenQ ? 'Thuộc loại dây quấn (số nguyên).' : 'Thuộc loại dây quấn (phân số tối giản).'}
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Bước dây d₁</span>
                    <span className={styles.resultVal}>{d1_3} rãnh</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Bước dây d₂</span>
                    <span className={styles.resultVal}>{d2_3} rãnh</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Bước dây d₃</span>
                    <span className={styles.resultVal}>{d3_3} rãnh</span>
                  </div>
                </div>
              </div>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>03</span>
                  <h5>Kết luận</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox}>Kết quả:</div>
                  <div className={styles.infoBox}>Công thức tính như sau: (tính toán ẩn hết công thức).</div>
                  <div className={styles.infoBox}>Nếu giá trị q là số chẵn thì thuộc loại dây quấn (số nguyên).</div>
                  <div className={styles.infoBox} style={{marginTop:8}}>Nếu giá trị q là số lẻ thì thuộc loại dây quấn (phân số tối giản).</div>
                  <div className={styles.infoBox} style={{marginTop:8}}>Thuộc loại nào thì hiện tên loại đó lên là được.</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 04 — 1 pha */}
          {activeTab === 3 && (
            <div className={styles.checkPanelGrid}>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>04</span>
                  <h5>Kiểm tra phân loại động cơ 1 pha.</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox} style={{marginBottom:8}}>
                    Nhập thông định danh: Số rãnh stator Z, Số cực 2p (Poles), Tần số vận hành F (Hz).
                  </div>
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Số rãnh Stator <strong>Z</strong></span>
                    <input className={styles.inp} type="number" value={p4z} onChange={e => setP4z(+e.target.value)} />
                  </div>
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Số cực <strong>2P (Poles)</strong></span>
                    <input className={styles.inp} type="number" value={p4p} onChange={e => setP4p(+e.target.value)} />
                  </div>
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Tần số <strong>F (Hz)</strong></span>
                    <input className={styles.inp} type="number" value={p4f} onChange={e => setP4f(+e.target.value)} />
                  </div>
                  <div className={styles.resultBox}>
                    <span className={styles.resultLabel}>Tốc độ đồng bộ</span>
                    <span className={styles.resultVal}>{ndb4} RPM</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Bước cực từ τ</span>
                    <span className={styles.resultVal}>{tau4} (rãnh/1 pha/cực)</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>✓ Quy tắc phân bố</span>
                    <span className={styles.resultVal}>Xét giá trị τ chia hết cho 2, 3 hoặc 4</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Bước dây d₁</span>
                    <span className={styles.resultVal}>{d1_4} rãnh</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Bước dây d₂</span>
                    <span className={styles.resultVal}>{d2_4} rãnh</span>
                  </div>
                </div>
              </div>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>04</span>
                  <h5>Kết luận phân bố QA và QB</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox} style={{marginBottom:8}}>
                    Khi tính song giá trị τ. Xét giá trị τ chia hết cho cái nào thì thuộc loại dây quấn loại đó.
                  </div>
                  <div className={styles.infoBox} style={{marginBottom:10}}>
                    Xét giá trị τ chia hết cho cái nào thì thuộc loại dây quấn đó.{' '}
                    <strong style={{color:'#c0392b'}}>Có 3 giá trị là: 2, 3 và 4.</strong>
                  </div>
                  <div className={styles.distList}>
                    <div className={tau4 % 2 === 0 ? styles.distActive : styles.distInactive}>
                      Phân bố QA = QB được sử dụng khi bước cực từ τ là bội số của <strong>2</strong>
                    </div>
                    <div className={tau4 % 3 === 0 ? styles.distActive : styles.distInactive}>
                      Phân bố QA = 2.QB được sử dụng khi bước cực từ τ là bội số của <strong>3</strong>
                    </div>
                    <div className={tau4 % 4 === 0 ? styles.distActive : styles.distInactive}>
                      Phân bố QA = 3.QB được sử dụng khi bước cực từ τ là bội số của <strong>4</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
}