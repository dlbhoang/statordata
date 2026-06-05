import { useState } from 'react';
import { Link } from 'react-router-dom';
import MotorSVG from '../components/MotorSVG';
import EfficiencyChart from '../components/EfficiencyChart';
import Subnav from '../components/Subnav';
import fluxImage from '../assets/LYTHUYETMACHTUTRONGMAYDIEN.png';
import statorPhoto from '../assets/HINHTHONGSODINHMUC.jpg';
import appGif from '../assets/app.gif';
import fluxDensityImage from '../assets/PHANBOMATDOTUTHONG.jpg';
import dienAphinhy from '../assets/DIENAPHINHY.jpg';
import dienAptamgiac from '../assets/DIENAPTAMGIAC.jpg';
import dienApday2tcodo from '../assets/DIENAPDAY2TCODO.jpg';
import dienAp1pha from '../assets/DIENAP1PHA.jpg';
import { HERO_FEATURES, ANALYSIS_RESULTS, WHY_ITEMS } from '../data/content';
import styles from './Home.module.css';
import MapModal from '../components/MapModal';

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
  const isIntegerQ = qDen3 === 1;
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

  /* ── Tab 01 mục 02: dt lớn nhất → tách nhiều d nhỏ ── */
  const [dt02, setDt02] = useState('2.5739');
  const [wireSet02, setWireSet02] = useState([
    { d: '1.15', n: '2' },
    { d: '1.35', n: '1' },
    { d: '0', n: '0' },
    { d: '0', n: '0' },
    { d: '0', n: '0' },
    { d: '0', n: '0' },
    { d: '0', n: '0' },
  ]);
  const updateWire02 = (idx, key, value) => {
    setWireSet02((prev) => prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item)));
  };
  const dt02val = parseFloat(dt02) || 0;
  const sumKnown02 = wireSet02.reduce((sum, item) => {
    const d = parseFloat(item.d) || 0;
    const n = parseFloat(item.n) || 0;
    return sum + d * d * n;
  }, 0);
  const dRemain02 = dt02val * dt02val - sumKnown02 > 0
    ? Math.sqrt(dt02val * dt02val - sumKnown02)
    : 0;

  /* ── Tab 01 mục 03: dây dẹt (chữ nhật) → đường kính tròn ── */
  const [flatA, setFlatA] = useState('3');
  const [flatB, setFlatB] = useState('2');
  const dtFlat = 1.128 * Math.sqrt((parseFloat(flatA) || 0) * (parseFloat(flatB) || 0));

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

      {/* ── QUICK SYSTEM ATTRIBUTES ── */}
      <section className={styles.quickSystemSection}>
        <div className="page-wrap">
          <div className={styles.quickSystemHeader}>
            <span className={styles.quickSystemBadge}>Tham khảo nhanh</span>
            <h2>Thuộc tính nhanh hệ thống</h2>
            <p>Xác định điện áp pha và điện áp dây theo kiểu liên kết cuộn dây stator động cơ. Nhấn vào để tính toán chi tiết.</p>
          </div>

          <div className={styles.qsGrid}>

            <Link to="/tinh-toan/3pha-1tocdo" className={styles.qsCard}>
              <div className={styles.qsCardImgWrap}>
                <img src={dienAphinhy} alt="Liên kết hình sao Y" className={styles.qsImage} />
              </div>
              <div className={styles.qsCardContent}>
                <div className={styles.qsCardTop}>
                  <span className={styles.qsNum}>01</span>
                  <span className={styles.qsTag}>3 pha · 1 tốc độ</span>
                </div>
                <h5 className={styles.qsTitle}>Liên kết hình sao (Y)</h5>
                <p className={styles.qsDesc}>Xác định điện áp pha V<sub>pha</sub> khi dây quấn stator liên kết hình sao.</p>
                <span className={styles.qsLink}>Tính toán →</span>
              </div>
            </Link>

            <Link to="/tinh-toan/3pha-1tocdo" className={styles.qsCard}>
              <div className={styles.qsCardImgWrap}>
                <img src={dienAptamgiac} alt="Liên kết hình tam giác" className={styles.qsImage} />
              </div>
              <div className={styles.qsCardContent}>
                <div className={styles.qsCardTop}>
                  <span className={styles.qsNum}>02</span>
                  <span className={styles.qsTag}>3 pha · 1 tốc độ</span>
                </div>
                <h5 className={styles.qsTitle}>Liên kết hình tam giác (∆)</h5>
                <p className={styles.qsDesc}>Xác định điện áp pha V<sub>pha</sub> khi dây quấn stator liên kết hình tam giác.</p>
                <span className={styles.qsLink}>Tính toán →</span>
              </div>
            </Link>

            <Link to="/tinh-toan/3pha-2tocdo" className={styles.qsCard}>
              <div className={styles.qsCardImgWrap}>
                <img src={dienApday2tcodo} alt="Dahlander 2 tốc độ" className={styles.qsImage} />
              </div>
              <div className={styles.qsCardContent}>
                <div className={styles.qsCardTop}>
                  <span className={styles.qsNum}>03</span>
                  <span className={styles.qsTag}>3 pha · 2 tốc độ</span>
                </div>
                <h5 className={styles.qsTitle}>Dahlander — 2 tốc độ</h5>
                <p className={styles.qsDesc}>Xác định điện áp dây V<sub>dây</sub> theo sơ đồ Robert Dahlander.</p>
                <span className={styles.qsLink}>Tính toán →</span>
              </div>
            </Link>

            <Link to="/tinh-toan/1pha" className={styles.qsCard}>
              <div className={styles.qsCardImgWrap}>
                <img src={dienAp1pha} alt="Nguồn áp 1 pha" className={styles.qsImage} />
              </div>
              <div className={styles.qsCardContent}>
                <div className={styles.qsCardTop}>
                  <span className={styles.qsNum}>04</span>
                  <span className={styles.qsTag}>1 pha / 2 pha</span>
                </div>
                <h5 className={styles.qsTitle}>Liên kết nguồn áp 1 pha</h5>
                <p className={styles.qsDesc}>Xác định điện áp pha V<sub>pha</sub> khi liên kết với nguồn áp 1 pha hoặc 2 pha.</p>
                <span className={styles.qsLink}>Tính toán →</span>
              </div>
            </Link>

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

          {/* TAB 01 — Quy doi day dan */}
          {activeTab === 0 && (
            <div className={styles.wireTabWrap}>

              {/* MUC 01 */}
              <div className={styles.wireSubTitle}>
                <span className={styles.wireSubNum}>01</span>
                <span>Tổng đường kính tương đương — Gộp nhiều sợi chập</span>
              </div>
              <div className={styles.layout}>
                <div className={styles.inputPanel}>
                  <div className="card">
                    <div className="card-header">
                      <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                      <h4>Nhập đường kính dây &amp; số sợi chập</h4>
                      <span className="tag blue" style={{marginLeft:'auto'}}>Mục 01</span>
                    </div>
                    <div className="card-body">
                      <p style={{fontSize:12,color:'var(--text2)',marginBottom:12}}>
                        Nhập đường kính dây tròn d<sub>i</sub> (mm) và số sợi chập N<sub>i</sub> cho từng nhóm dây.
                      </p>
                      <div className={styles.wire01Table}>
                        <div className={styles.wire01TableHead}>
                          <span>Sợi</span>
                          <span>Đường kính dᵢ (mm)</span>
                          <span>Số sợi chập Nᵢ</span>
                          <span>Kết quả (mm)</span>
                        </div>
                        {wireSet.map((item, idx) => {
                          const d = parseFloat(item.d) || 0;
                          const n = parseFloat(item.n) || 0;
                          const eq = d * Math.sqrt(n);
                          const active = d > 0 && n > 0;
                          return (
                            <div key={`wire01-row-${idx}`} className={`${styles.wire01TableRow} ${active ? styles.wire01RowActive : ''}`}>
                              <span className={styles.wire01RowIdx}>{idx + 1}</span>
                              <input className={styles.wire01Input} type="number" step="0.01" value={item.d} onChange={(e) => updateWire(idx, 'd', e.target.value)} />
                              <input className={styles.wire01Input} type="number" step="1" value={item.n} onChange={(e) => updateWire(idx, 'n', e.target.value)} />
                              <span className={`${styles.wire01EqVal} ${active ? styles.wire01EqValActive : ''}`}>{active ? eq.toFixed(4) : '—'}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                      <h4>Kết quả &amp; Hướng dẫn</h4>
                      <span className="tag green" style={{marginLeft:'auto'}}>✓ Tự động</span>
                    </div>
                    <div className="card-body">
                      <p style={{fontSize:12,color:'var(--text2)',marginBottom:10}}>Các dòng có d = 0 hoặc N = 0 sẽ bị bỏ qua.</p>
                      <div className={styles.results}>
                        {equivalentDs.map((val, idx) => {
                          const d = parseFloat(wireSet[idx].d) || 0;
                          const n = parseFloat(wireSet[idx].n) || 0;
                          if (d === 0 || n === 0) return null;
                          return (
                            <div key={`eq-${idx}`} className={styles.resRow}>
                              <span className={styles.resLabel}>Sợi {idx+1} — tương đương</span>
                              <span className="tag blue">{val.toFixed(4)} mm</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className={styles.wire01TotalResult} style={{marginTop:14}}>
                        <div className={styles.wire01TotalLabel}>✓ Tổng đường kính tương đương</div>
                        <div className={styles.wire01TotalVal}>d<sub>t</sub> = <strong>{dt.toFixed(4)}</strong> mm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MUC 02 */}
              <div className={styles.wireSubTitle} style={{marginTop:28}}>
                <span className={styles.wireSubNum}>02</span>
                <span>Chia nhỏ dây đồng tròn — Tìm dây còn thiếu</span>
              </div>
              <div className={styles.layout}>
                <div className={styles.inputPanel}>
                  <div className="card">
                    <div className="card-header">
                      <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                      <h4>Nhập đường kính dt cần đạt &amp; các dây đã biết</h4>
                      <span className="tag blue" style={{marginLeft:'auto'}}>Mục 02</span>
                    </div>
                    <div className="card-body">
                      <p style={{fontSize:12,color:'var(--text2)',marginBottom:12}}>
                        Nhập d<sub>t</sub> mục tiêu và các sợi dây đã chọn. Hệ thống tính ngược ra đường kính sợi còn lại.
                      </p>
                      <div className={styles.field}>
                        <label>Đường kính mục tiêu d<sub>t</sub> <span className={styles.unit}>mm</span></label>
                        <input className="inp" type="number" step="0.0001" value={dt02} onChange={e => setDt02(e.target.value)} style={{width:120,textAlign:'right'}} />
                      </div>
                      <div className={styles.wire01Table} style={{marginTop:12}}>
                        <div className={styles.wire01TableHead}>
                          <span>Sợi</span>
                          <span>Đường kính dᵢ (mm)</span>
                          <span>Số sợi Nᵢ</span>
                          <span>Đóng góp</span>
                        </div>
                        {wireSet02.map((item, idx) => {
                          const d = parseFloat(item.d) || 0;
                          const n = parseFloat(item.n) || 0;
                          const contrib = d * d * n;
                          const active = d > 0 && n > 0;
                          return (
                            <div key={`w02-row-${idx}`} className={`${styles.wire01TableRow} ${active ? styles.wire01RowActive : ''}`}>
                              <span className={styles.wire01RowIdx}>{idx + 1}</span>
                              <input className={styles.wire01Input} type="number" step="0.01" value={item.d} onChange={e => updateWire02(idx, 'd', e.target.value)} />
                              <input className={styles.wire01Input} type="number" step="1" value={item.n} onChange={e => updateWire02(idx, 'n', e.target.value)} />
                              <span className={`${styles.wire01EqVal} ${active ? styles.wire01EqValActive : ''}`}>{active ? contrib.toFixed(4) : '—'}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                      <h4>Kết quả &amp; Hướng dẫn</h4>
                      <span className="tag green" style={{marginLeft:'auto'}}>✓ Tự động</span>
                    </div>
                    <div className="card-body">
                      <p style={{fontSize:12,color:'var(--text2)',marginBottom:10}}>Nhập d<sub>t</sub> mục tiêu và từng sợi dây đã biết.</p>
                      <div className={styles.results}>
                        <div className={styles.resRow}>
                          <span className={styles.resLabel}>Tổng đã biết</span>
                          <span className="tag blue">{sumKnown02.toFixed(4)}</span>
                        </div>
                        <div className={styles.resRow}>
                          <span className={styles.resLabel}>d<sub>t</sub> mục tiêu bình phương</span>
                          <span className="tag blue">{(dt02val * dt02val).toFixed(4)}</span>
                        </div>
                        <div className={styles.resRow}>
                          <span className={styles.resLabel}>Phần còn lại</span>
                          <span className="tag" style={{background: dt02val*dt02val-sumKnown02>=0?'#e6f1fb':'#fdecea',color:dt02val*dt02val-sumKnown02>=0?'var(--blue2)':'#c0392b',border:'1px solid currentColor'}}>
                            {(dt02val * dt02val - sumKnown02).toFixed(4)}
                          </span>
                        </div>
                      </div>
                      <div className={styles.wire01TotalResult} style={{marginTop:14}}>
                        <div className={styles.wire01TotalLabel}>✓ Đường kính sợi còn lại</div>
                        <div className={styles.wire01TotalVal}>d<sub>còn lại</sub> = <strong style={{color: dRemain02>0?'#d92531':'#9aa3b0'}}>{dRemain02.toFixed(4)}</strong> mm</div>
                      </div>
                      {dRemain02 === 0 && dt02val > 0 && (
                        <div className={styles.classifyFraction} style={{marginTop:8}}>⚠ Tổng diện tích đã vượt quá d<sub>t</sub> mục tiêu!</div>
                      )}
                      {dRemain02 > 0 && (
                        <div className={styles.classifyInteger} style={{marginTop:8}}>✓ Hợp lệ — Ghép thêm 1 sợi d = {dRemain02.toFixed(4)} mm</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* MUC 03 */}
              <div className={styles.wireSubTitle} style={{marginTop:28}}>
                <span className={styles.wireSubNum}>03</span>
                <span>Dây đồng dẹt (chữ nhật) - Đường kính dây tròn tương đương</span>
              </div>
              <div className={styles.layout}>
                <div className={styles.inputPanel}>
                  <div className="card">
                    <div className="card-header">
                      <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                      <h4>Nhập kích thước dây đồng chữ nhật (dây dẹt)</h4>
                      <span className="tag blue" style={{marginLeft:'auto'}}>Mục 03</span>
                    </div>
                    <div className="card-body">
                      <p style={{fontSize:12,color:'var(--text2)',marginBottom:12}}>Nhập chiều rộng b và chiều dày a của dây đồng chữ nhật.</p>
                      <div className={styles.field}>
                        <label>Chiều rộng <strong>b</strong> <span className={styles.unit}>mm</span></label>
                        <input className="inp" type="number" step="0.01" value={flatB} onChange={e => setFlatB(e.target.value)} style={{width:120,textAlign:'right'}} />
                      </div>
                      <div className={styles.field}>
                        <label>Chiều dày <strong>a</strong> <span className={styles.unit}>mm</span></label>
                        <input className="inp" type="number" step="0.01" value={flatA} onChange={e => setFlatA(e.target.value)} style={{width:120,textAlign:'right'}} />
                      </div>
                      <div className={styles.resRow} style={{marginTop:14,background:'linear-gradient(135deg,#e8f4fd,#f0f8ff)',border:'1px solid #b8d4ef',borderRadius:7,padding:'9px 12px'}}>
                        <span style={{fontSize:11,fontWeight:700,color:'#0f6e56'}}>Tiết diện dây dẹt S</span>
                        <span className="tag blue">{((parseFloat(flatA)||0)*(parseFloat(flatB)||0)).toFixed(4)} mm²</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                      <h4>Kết quả &amp; Hướng dẫn</h4>
                      <span className="tag green" style={{marginLeft:'auto'}}>✓ Tự động</span>
                    </div>
                    <div className="card-body">
                      <p style={{fontSize:12,color:'var(--text2)',marginBottom:10}}>Nhập chiều rộng b (mm) và chiều dày a (mm) của dây đồng dẹt.</p>
                      <div className={styles.wire01TotalResult} style={{marginTop:12}}>
                        <div className={styles.wire01TotalLabel}>✓ Đường kính dây tròn tương đương</div>
                        <div className={styles.wire01TotalVal}>d<sub>t</sub> = <strong style={{color:'#d92531'}}>{dtFlat.toFixed(4)}</strong> mm</div>
                      </div>
                      <div className={styles.classifyInteger} style={{marginTop:8}}>✓ Dây tròn tương đương: Ø {dtFlat.toFixed(3)} mm</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 02 — So cuc */}
          {activeTab === 1 && (
            <div className={styles.layout}>
              <div className={styles.inputPanel}>
                <div className="card">
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                    <h4>Thông số đầu vào</h4>
                    <span className="tag blue" style={{marginLeft:'auto'}}>Số cực</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.field}>
                      <label>Tốc độ đồng bộ N<sub>db</sub> <span className={styles.unit}>RPM</span></label>
                      <input className="inp" type="number" step="any" value={p2n} onChange={e => setP2n(+e.target.value)} style={{width:120,textAlign:'right'}} />
                    </div>
                    <div className={styles.field}>
                      <label>Tần số vận hành f <span className={styles.unit}>Hz</span></label>
                      <input className="inp" type="number" step="any" value={p2f} onChange={e => setP2f(+e.target.value)} style={{width:120,textAlign:'right'}} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{marginBottom:16}}>
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                    <h4>Kết quả tính toán</h4>
                    <span className="tag green" style={{marginLeft:'auto'}}>✓ Tự động</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.results}>
                      <div className={styles.resRow}>
                        <span className={styles.resLabel}>Số cực tính toán 2P</span>
                        <span className="tag blue">{poles2} cực</span>
                      </div>
                    </div>
                    <div className={styles.tagRow} style={{marginTop:14}}>
                      <span className={styles.tagBlue}>2P = 2 — 3000 RPM</span>
                      <span className={styles.tagBlue}>2P = 4 — 1500 RPM</span>
                      <span className={styles.tagBlue}>2P = 6 — 1000 RPM</span>
                      <span className={styles.tagBlue}>2P = 8 — 750 RPM</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--gold)'}}/>
                    <h4>Ghi chú kỹ thuật</h4>
                  </div>
                  <div className="card-body">
                    <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:6}}>
                      {['Nhập tốc độ đồng bộ Ndb (RPM) và tần số vận hành f (Hz).','Kết quả 2P được làm tròn lên số chẵn gần nhất.','Kiểm tra lại với nameplate của động cơ thực tế.']
                      .map(t => (
                        <li key={t} style={{fontSize:12,color:'var(--text2)',paddingLeft:16,position:'relative'}}>
                          <span style={{position:'absolute',left:0,color:'var(--gold)'}}>›</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03 — 3 pha 1 toc do */}
          {activeTab === 2 && (
            <div className={styles.layout}>
              <div className={styles.inputPanel}>
                <div className="card">
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                    <h4>Thông số đầu vào</h4>
                    <span className="tag blue" style={{marginLeft:'auto'}}>3 Pha · 1 Tốc độ</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.field}>
                      <label>Số rãnh Stator <strong>Z</strong></label>
                      <input className="inp" type="number" step="any" value={p3z} onChange={e => setP3z(+e.target.value)} style={{width:120,textAlign:'right'}} />
                    </div>
                    <div className={styles.field}>
                      <label>Số cực <strong>2P (Poles)</strong></label>
                      <input className="inp" type="number" step="any" value={p3p} onChange={e => setP3p(+e.target.value)} style={{width:120,textAlign:'right'}} />
                    </div>
                    <div className={styles.field}>
                      <label>Tần số <strong>F</strong> <span className={styles.unit}>Hz</span></label>
                      <input className="inp" type="number" step="any" value={p3f} onChange={e => setP3f(+e.target.value)} style={{width:120,textAlign:'right'}} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{marginBottom:16}}>
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                    <h4>Kết quả tính toán</h4>
                    <span className="tag green" style={{marginLeft:'auto'}}>✓ Tự động</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.results}>
                      {[
                        ['Tốc độ đồng bộ',   `${ndb3} RPM`,                                                   'blue'],
                        ['Bước cực từ τ',     `${tauDen3===1?tauNum3:`${tauNum3}/${tauDen3}`} rãnh/cực`,      'blue'],
                        ['Số rãnh/pha/cực q', `${qDen3===1?qNum3:`${qNum3}/${qDen3}`} rãnh/pha/cực`,         'blue'],
                        ['Bước dây d₁',       `${d1_3} rãnh`,                                                 'gold'],
                        ['Bước dây d₂',       `${d2_3} rãnh`,                                                 'gold'],
                        ['Bước dây d₃',       `${d3_3} rãnh`,                                                 'gold'],
                      ].map(([label, value, color]) => (
                        <div key={label} className={styles.resRow}>
                          <span className={styles.resLabel}>{label}</span>
                          <span className={`tag ${color}`}>{value}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{marginTop:14,padding:12,background:isIntegerQ?'linear-gradient(135deg,#e8f5e9,#f1fff5)':'linear-gradient(135deg,#fff8e1,#fffde7)',borderRadius:8,border:`1.5px solid ${isIntegerQ?'#81c784':'#ffd54f'}`}}>
                      <div style={{fontSize:11,color:isIntegerQ?'#388e3c':'#f57f17',fontWeight:600,marginBottom:4}}>
                        {isIntegerQ ? '✓ Dây quấn số nguyên' : '◎ Dây quấn phân số tối giản'}
                      </div>
                      <div style={{fontSize:12,color:'var(--text2)'}}>
                        Phân loại: <strong>{isIntegerQ ? `Số nguyên — q = ${qNum3}` : `Phân số tối giản — q = ${qNum3}/${qDen3}`}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--gold)'}}/>
                    <h4>Ghi chú kỹ thuật</h4>
                  </div>
                  <div className="card-body">
                    <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:6}}>
                      {['Nhập số rãnh Z, số cực 2P và tần số F để xác định phân loại dây quấn.','Nếu q là số nguyên: dây quấn số nguyên.','Nếu q là phân số tối giản: dây quấn phân số tối giản.']
                      .map(t => (
                        <li key={t} style={{fontSize:12,color:'var(--text2)',paddingLeft:16,position:'relative'}}>
                          <span style={{position:'absolute',left:0,color:'var(--gold)'}}>›</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 04 — 1 pha */}
          {activeTab === 3 && (
            <div className={styles.layout}>
              <div className={styles.inputPanel}>
                <div className="card">
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                    <h4>Thông số đầu vào</h4>
                    <span className="tag blue" style={{marginLeft:'auto'}}>1 Pha</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.field}>
                      <label>Số rãnh Stator <strong>Z</strong></label>
                      <input className="inp" type="number" step="any" value={p4z} onChange={e => setP4z(+e.target.value)} style={{width:120,textAlign:'right'}} />
                    </div>
                    <div className={styles.field}>
                      <label>Số cực <strong>2P (Poles)</strong></label>
                      <input className="inp" type="number" step="any" value={p4p} onChange={e => setP4p(+e.target.value)} style={{width:120,textAlign:'right'}} />
                    </div>
                    <div className={styles.field}>
                      <label>Tần số <strong>F</strong> <span className={styles.unit}>Hz</span></label>
                      <input className="inp" type="number" step="any" value={p4f} onChange={e => setP4f(+e.target.value)} style={{width:120,textAlign:'right'}} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{marginBottom:16}}>
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                    <h4>Kết quả tính toán</h4>
                    <span className="tag green" style={{marginLeft:'auto'}}>✓ Tự động</span>
                  </div>
                  <div className="card-body">
                    <div className={styles.results}>
                      {[
                        ['Tốc độ đồng bộ', `${ndb4} RPM`,       'blue'],
                        ['Bước cực từ τ',   `${tau4} rãnh/cực`, 'blue'],
                        ['Bước dây d₁',     `${d1_4} rãnh`,     'gold'],
                        ['Bước dây d₂',     `${d2_4} rãnh`,     'gold'],
                      ].map(([label, value, color]) => (
                        <div key={label} className={styles.resRow}>
                          <span className={styles.resLabel}>{label}</span>
                          <span className={`tag ${color}`}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card" style={{marginBottom:16}}>
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--cyan)'}}/>
                    <h4>Kết luận phân bố QA và QB</h4>
                  </div>
                  <div className="card-body">
                    <p style={{fontSize:12,color:'var(--text2)',marginBottom:10}}>
                      Xét giá trị τ chia hết cho cái nào thì thuộc loại dây quấn đó. <strong style={{color:'#c0392b'}}>Có 3 giá trị: 2, 3 và 4.</strong>
                    </p>
                    <div className={styles.distList}>
                      <div className={tau4 % 2 === 0 ? styles.distActive : styles.distInactive}>
                        Phân bố QA = QB — bước cực từ τ là bội số của <strong>2</strong>
                      </div>
                      <div className={tau4 % 3 === 0 ? styles.distActive : styles.distInactive}>
                        Phân bố QA = 2.QB — bước cực từ τ là bội số của <strong>3</strong>
                      </div>
                      <div className={tau4 % 4 === 0 ? styles.distActive : styles.distInactive}>
                        Phân bố QA = 3.QB — bước cực từ τ là bội số của <strong>4</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div style={{width:10,height:10,borderRadius:'50%',background:'var(--gold)'}}/>
                    <h4>Ghi chú kỹ thuật</h4>
                  </div>
                  <div className="card-body">
                    <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:6}}>
                      {['Nhập số rãnh Z, số cực 2P và tần số F để xác định phân bố dây quấn 1 pha.','Bước cực từ τ = Z / 2P (làm tròn về số nguyên).','Kiểm tra τ chia hết cho 2, 3 hoặc 4 để xác định loại phân bố QA/QB.']
                      .map(t => (
                        <li key={t} style={{fontSize:12,color:'var(--text2)',paddingLeft:16,position:'relative'}}>
                          <span style={{position:'absolute',left:0,color:'var(--gold)'}}>›</span>{t}
                        </li>
                      ))}
                    </ul>
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