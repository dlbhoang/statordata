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
  const isInt3 = Number.isInteger(q3);

  /* ── Tab 04: 1 pha ── */
  const [p4z, setP4z] = useState(36);
  const [p4p, setP4p] = useState(4);
  const [p4f, setP4f] = useState(50);
  const ndb4   = Math.round((120 * p4f) / p4p);
  const tau4   = Math.round(p4z / p4p);
  const qo4    = Math.round((tau4 * 2) / 3);
  const qp4    = tau4 - qo4;

  /* ── Tab 01: quy đổi dây dẫn ── */
  const [p1s, setP1s] = useState('1.500');
  const [p1d, setP1d] = useState('1.38');
  const handleS = (v) => {
    setP1s(v);
    const s = parseFloat(v) || 0;
    setP1d(Math.sqrt((4 * s) / Math.PI).toFixed(2));
  };
  const handleD = (v) => {
    setP1d(v);
    const d = parseFloat(v) || 0;
    setP1s(((Math.PI * d * d) / 4).toFixed(3));
  };

  /* ── Active tab ── */
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { num: '01', title: 'Quy đổi đường tròn dây dẫn tiết diện tròn, dẹt' },
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
            <div className={styles.heroActions} />
            <div className={styles.heroNote}>→ Thuộc tính bảo vệ nội dung. Gửi file PDF qua email để nhận hỗ trợ kỹ thuật.</div>
          </div>
        </div>
      </section>
      <Subnav />

      {/* ── CALCULATION LINKS ── */}
      <section className={styles.calcSection}>
        <div className="page-wrap">
          <div className={styles.calcGrid}>
            <Link to="/" className={styles.calcItem}>
              <div className={styles.calcIcon}>🚀</div>
              <h4>Bắt đầu tính toán</h4>
              <p>Khởi động công cụ tính toán chuyên nghiệp</p>
            </Link>
            <Link to="#" className={styles.calcItem}>
              <div className={styles.calcIcon}>⚡</div>
              <h4>3 pha, 1 tốc độ</h4>
              <p>Tính toán động cơ 3 pha tốc độ đơn</p>
            </Link>
            <Link to="#" className={styles.calcItem}>
              <div className={styles.calcIcon}>🔄</div>
              <h4>3 pha, 2 tốc độ (1/2)</h4>
              <p>Tính toán động cơ 3 pha tốc độ kép</p>
            </Link>
            <Link to="#" className={styles.calcItem}>
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
                <div className="video-block">
                  <img src={appGif} alt="Video demo ứng dụng" className={styles.videoGif} />
                </div>
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
            <p>Nhập thông số định danh để kiểm tra nhanh phân loại và cấu hình dây quấn</p>
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
            <div className={styles.checkPanelGrid}>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>01</span>
                  <h5>Quy đổi đường kính dây dẫn</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Tiết diện dây dẫn <strong>S (mm²)</strong></span>
                    <input className={styles.inp} type="number" step="0.01" value={p1s} onChange={e => handleS(e.target.value)} />
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.inpGroup}>
                    <span className={styles.inpLabel}>Đường kính dây <strong>d (mm)</strong></span>
                    <input className={styles.inp} type="number" step="0.01" value={p1d} onChange={e => handleD(e.target.value)} />
                  </div>
                  <div className={styles.resultBox}>
                    <span className={styles.resultLabel}>✓ Kết quả</span>
                    <span className={styles.resultVal}>d = {parseFloat(p1d).toFixed(2)} mm &nbsp;|&nbsp; S = {parseFloat(p1s).toFixed(3)} mm²</span>
                  </div>
                </div>
              </div>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>01</span>
                  <h5>Hướng dẫn</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox}>Nhập <strong>tiết diện S</strong> để tính đường kính dây dẫn tương đương, hoặc nhập <strong>đường kính d</strong> để tính tiết diện.</div>
                  <div className={styles.infoBox} style={{marginTop:8}}>Áp dụng cho dây dẫn tiết diện tròn. Với dây dẹt, sử dụng tiết diện thực của dây.</div>
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
                  <h5>Kiểm tra số cực: 2p (Poles)</h5>
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
                    <span className={styles.resultVal}>Số cực: {poles2}P</span>
                  </div>
                </div>
              </div>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>02</span>
                  <h5>Hướng dẫn</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox}>Tốc độ đồng bộ <strong>N<sub>db</sub></strong> là tốc độ của từ trường quay trong stator, phụ thuộc vào tần số nguồn điện và số cực của động cơ.</div>
                  <div className={styles.infoBox} style={{marginTop:8}}>Kết quả <strong>2P</strong> phải là số chẵn. Nếu kết quả lẻ, kiểm tra lại thông số đầu vào.</div>
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
                  <h5>Phân loại động cơ 3 pha 1 tốc độ</h5>
                </div>
                <div className={styles.checkBody}>
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
                    <span className={styles.resultVal}>{tauDen3 === 1 ? tauNum3 : `${tauNum3}/${tauDen3}`} rãnh/pha/cực</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>Số rãnh/pha/cực q</span>
                    <span className={styles.resultVal}>{qDen3 === 1 ? qNum3 : `${qNum3}/${qDen3}`} rãnh/pha/cực</span>
                  </div>
                  <div className={isInt3 ? styles.classifyInteger : styles.classifyFraction}>
                    ✓ Phân loại: {isInt3 ? 'Số Nguyên' : 'Phân số tối giản'}
                  </div>
                </div>
              </div>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>03</span>
                  <h5>Phân bố dây quấn</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox} style={{marginBottom:10}}>
                    Xét giá trị τ chia hết cho cái nào thì thuộc loại dây quấn đó.{' '}
                    <strong style={{color:'#c0392b'}}>Có 3 giá trị là: 2, 3 và 4.</strong>
                  </div>
                  <div className={styles.distList}>
                    <div className={tauInt3 % 2 === 0 ? styles.distActive : styles.distInactive}>
                      Phân bố Q<sub>A</sub> = Q<sub>B</sub> được sử dụng khi bước cực từ là bội số của <strong>2</strong>
                    </div>
                    <div className={tauInt3 % 3 === 0 ? styles.distActive : styles.distInactive}>
                      Phân bố Q<sub>A</sub> = 2.Q<sub>B</sub> được sử dụng khi bước cực từ là bội số của <strong>3</strong>
                    </div>
                    <div className={tauInt3 % 4 === 0 ? styles.distActive : styles.distInactive}>
                      Phân bố Q<sub>A</sub> = 3.Q<sub>B</sub> được sử dụng khi bước cực từ là bội số của <strong>4</strong>
                    </div>
                  </div>
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
                  <h5>Kiểm tra phân loại động cơ 1 pha</h5>
                </div>
                <div className={styles.checkBody}>
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
                    <span className={styles.resultVal}>{tau4} rãnh/cực</span>
                  </div>
                  <div className={styles.resultBox} style={{marginTop:6}}>
                    <span className={styles.resultLabel}>✓ Phân bổ dây quấn</span>
                    <span className={styles.resultVal}>Q<sub>o</sub> = 2·Q<sub>p</sub></span>
                  </div>
                </div>
              </div>
              <div className={styles.checkCard}>
                <div className={styles.checkHead}>
                  <span className={styles.checkNum}>04</span>
                  <h5>Loại phân bổ dây quấn</h5>
                </div>
                <div className={styles.checkBody}>
                  <div className={styles.infoBox}>
                    Động cơ 1 pha có cuộn <strong>chính (main)</strong> và cuộn <strong>phụ (auxiliary)</strong>. Tỉ lệ phân bổ rãnh được xác định theo bước cực từ τ.
                  </div>
                  <div className={styles.infoBox} style={{marginTop:8}}>
                    <strong>Bước cực từ τ = {tau4}</strong><br />
                    → Q<sub>o</sub> (cuộn chính) ≈ {qo4} rãnh<br />
                    → Q<sub>p</sub> (cuộn phụ) ≈ {qp4} rãnh<br />
                    → Tổng: {qo4} + {qp4} = {qo4 + qp4}{qo4 + qp4 === tau4 ? ' = τ ✓' : ' (kiểm tra lại)'}
                  </div>
                  <div className={styles.tagRow} style={{marginTop:10}}>
                    <span className={styles.tagBlue}>1 pha tụ khởi động</span>
                    <span className={styles.tagBlue}>1 pha tụ thường trực</span>
                    <span className={styles.tagGreen}>Điện trở phụ</span>
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