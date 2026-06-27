import { Link } from 'react-router-dom';
import MotorSVG from '../components/MotorSVG';
import EfficiencyChart from '../components/EfficiencyChart';
import Subnav from '../components/Subnav';
import QuickCheckTabs from '../components/QuickCheckTabs';
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

export default function Home() {
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
              {HERO_FEATURES.slice(0, 4).map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <div className={styles.heroActions}>
              <Link to="/tinh-toan/3pha-1tocdo" className="btn btn-gold">Bắt đầu tính toán</Link>
              <Link to="/huong-dan" className="btn btn-ghost">Hướng dẫn kỹ thuật</Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <strong>3 pha · 1 pha</strong>
                <span>Đa dạng loại động cơ</span>
              </div>
              <div className={styles.heroStat}>
                <strong>8 mục</strong>
                <span>Kết quả phân tích</span>
              </div>
              <div className={styles.heroStat}>
                <strong>100%</strong>
                <span>Tính toán tự động</span>
              </div>
            </div>
          </div>
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
          <div className={styles.calcHeader}>
            <h2>Truy cập nhanh công cụ</h2>
            <p>Chọn loại động cơ hoặc tài liệu kỹ thuật để bắt đầu</p>
          </div>
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
                <img src={appGif} alt="Demo quá trình xử lý dữ liệu Statordata" className={styles.videoGif} />
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

        <QuickCheckTabs />

      </div>
    </>
  );
}
