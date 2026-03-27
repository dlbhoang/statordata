import { useState } from 'react';
import { Link } from 'react-router-dom';
import MotorSVG from '../components/MotorSVG';
import EfficiencyChart from '../components/EfficiencyChart';
import Subnav from '../components/Subnav';
import { HERO_FEATURES, ANALYSIS_RESULTS, WHY_ITEMS } from '../data/content';
import styles from './Home.module.css';

export default function Home() {
  const [nu, setNu] = useState(1800);
  const [freq, setFreq] = useState(50);
  const poles = Math.round((freq * 120) / nu) % 2 === 0
    ? Math.round((freq * 120) / nu)
    : Math.round((freq * 120) / nu) + 1;

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
              Thiết kế & Tính toán<br />
              <em>Dây quấn Stator</em><br />
              Động cơ Cảm ứng
            </h1>
            <div className={styles.heroSub}>
              PHẦN MỀM THIẾT KẾ – TÍNH TOÁN DỮ LIỆU ĐỘNG CƠ CẢM ỨNG CHUYÊN NGHIỆP
            </div>
            <ul className={styles.heroList}>
              {HERO_FEATURES.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <div className={styles.heroActions}>
              <Link to="/tinh-toan/3pha-1tocdo" className="btn btn-primary">⚡ Tính toán 3 pha</Link>
              <Link to="/tinh-toan/1pha"        className="btn btn-gold">📐 Tính toán 1 pha</Link>
              <Link to="/hoc-tap/3pha-1tocdo"   className="btn btn-ghost">📚 Học tập</Link>
            </div>
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
          <span className="sec-label">Phương pháp xử lý</span>
          <h2 className="sec-title"><span className="accent">Xử lý dữ liệu đầu vào</span><br />và xuất kết quả phân tích</h2>
          <p className="sec-desc">Video demo quá trình sử lý và tính toán dữ liệu dây quấn stator động cơ cảm ứng 3 pha 1 tốc độ trên phần mềm STATORDATA.COM — Kết quả phân tích được xuất trực tiếp từ phần mềm.</p>

          <div className={styles.featGrid}>
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                <h4>Danh sách kết quả phân tích từ phần mềm</h4>
                <span className="tag blue" style={{marginLeft:'auto'}}>8 Mục</span>
              </div>
              <div className="card-body">
                <ul className="feature-list">
                  {ANALYSIS_RESULTS.map((r, i) => (
                    <li key={i}><strong>{r.title}</strong>{r.desc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                <h4>Video demo kết quả tính toán</h4>
                <span className="tag green" style={{marginLeft:'auto'}}>HD</span>
              </div>
              <div className="card-body">
                <div className="video-block">
                  <div className="video-play">▶</div>
                  <p>Video demo sau khi hoàn thiện<br />tính toán quay vô bảo đầy</p>
                </div>
                <div style={{marginTop:12,padding:10,background:'#f8f9fc',borderRadius:8}}>
                  <div style={{fontSize:11.5,color:'var(--text2)',lineHeight:1.7}}>
                    📊 Kết quả gồm: dữ liệu 3 lớp của tính toán dây quấn.<br />
                    🎯 Chính xác theo tiêu chuẩn IEC 60034 cho động cơ điện xoay chiều.
                  </div>
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
              <h4>Lý thuyết mạch từ trong máy điện</h4>
              <p>Nắm bắt những hiểu biết cơ bản về lý thuyết từ trở và hoạt động của động cơ cảm ứng, thông qua việc tìm hiểu những nét nổi bật bản chất và những điều kiện vận hành, để từ đó làm cho quá trình thiết kế dây quấn stator được hiệu quả hơn.</p>
              <br/>
              <p>Các nguyên lý từ thông cực đại trên mỗi cực từ với từ cảm cực đại tại khe hở không khí đóng vai trò quan trọng trong việc xác định hiệu suất của động cơ.</p>
            </div>
            <div className={styles.magCard}>
              <h4>Thông số định mức động cơ điện</h4>
              <p>Thông số động cơ phản ánh các thông số kỹ thuật chuẩn của động cơ điện, bao gồm: <strong style={{color:'var(--cyan2)'}}>Công suất, Điện áp, Dòng điện, Tốc độ, Hệ số công suất (Power Factor), Hiệu suất Efficiency (%)</strong>.</p>
              <br/>
              <p>Các thông số này là cơ sở để đánh giá khả năng vận hành và phục vụ quá trình thiết kế và tính toán số liệu theo IEC 60034.</p>
            </div>
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="section">
          <span className="sec-label">Lý do lựa chọn</span>
          <h2 className="sec-title">Vì sao các kỹ sư lựa chọn<br /><span className="accent">nền tảng Statordata.com?</span></h2>
          <div className={styles.whyGrid}>
            <div>
              {WHY_ITEMS.map(item => (
                <div key={item.num} className={styles.whyItem}>
                  <div className={styles.whyNum}>{item.num}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className={styles.chartCard}>
                <h4>Biểu đồ Efficiency — Induction Motor</h4>
                <EfficiencyChart height={200} />
                <div style={{textAlign:'center',fontSize:10.5,color:'var(--text2)',marginTop:6}}>P(%) — Công suất đầu ra</div>
              </div>
              <div className={styles.statorNote}>
                <h5>STATORDATA.COM là nền tảng</h5>
                <p>Nền tảng kỹ thuật chuyên sâu cho kỹ sư thiết kế và sửa chữa động cơ điện. Dựa trên các số liệu thông số kỹ thuật, thiết kế và tính toán số đầu vào, thông qua phần mềm cho ra biểu đồ kết quả phân tích chính xác và đáng tin cậy.</p>
              </div>
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

        {/* ── CHECK CARDS ── */}
        <div className={styles.checkGrid}>
          {/* Card 1 */}
          <div className={styles.checkCard}>
            <div className={styles.checkHead}>
              <span className={styles.checkNum}>01</span>
              <h5>Kiểm tra số cực: 2p (Poles)</h5>
            </div>
            <div className={styles.checkBody}>
              <label className={styles.inpRow}>
                <span>Tốc độ đồng bộ <b>Nu (RPM)</b></span>
                <input className="inp" type="number" value={nu} onChange={e=>setNu(+e.target.value)} style={{width:90}} />
              </label>
              <hr className={styles.hr}/>
              <label className={styles.inpRow}>
                <span>Tần số vận hành <b>F (Hz)</b></span>
                <input className="inp" type="number" value={freq} onChange={e=>setFreq(+e.target.value)} style={{width:90}} />
              </label>
              <div className="result-box">
                <span className="result-label">✓ Kết quả</span>
                <span className="result-val">Số cực: {poles}P</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.checkCard}>
            <div className={styles.checkHead}>
              <span className={styles.checkNum}>02</span>
              <h5>Phân loại động cơ 3 pha</h5>
            </div>
            <div className={styles.checkBody}>
              {[['Tốc độ đồng bộ Nu','1500 RPM'],['Số rãnh Stator Z','36'],['Số cực 2P(Poles)','4'],['Số rãnh/pha/cực','3 Rãnh'],['Tần số F (Hz)','50']].map(([l,v])=>(
                <div key={l} className={styles.inpRow}><span>{l}</span><span className="val-badge">{v}</span></div>
              ))}
              <div className="result-box"><span className="result-label">✓ Phân loại</span><span className="result-val">Số Nguyên</span></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.checkCard}>
            <div className={styles.checkHead}>
              <span className={styles.checkNum}>03</span>
              <h5>Phân loại động cơ 1 pha</h5>
            </div>
            <div className={styles.checkBody}>
              {[['Tốc độ đồng bộ Nu','1500 RPM'],['Số rãnh Stator Z','36'],['Bước cực từ','9 Rãnh/Cực'],['Số cực 2P(Poles)','4'],['Tần số F (Hz)','50']].map(([l,v])=>(
                <div key={l} className={styles.inpRow}><span>{l}</span><span className="val-badge">{v}</span></div>
              ))}
              <div className="result-box"><span className="result-label">✓ Phân bổ dây quấn</span><span className="result-val">Qo = 2.Qp</span></div>
            </div>
          </div>
        </div>

        {/* ── DENSITY ── */}
        <section className="section">
          <span className="sec-label">Phân tích từ trường</span>
          <h2 className="sec-title">Phân bổ mật độ từ thông<br /><span className="accent">trong mạch từ</span></h2>
          <div className={styles.densityCard}>
            <div className={styles.motorVisual}>
              <div className={styles.motorRing}>
                <div className={styles.motorCore}>
                  <span>STATOR</span>
                  <small>MOTOR</small>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{fontFamily:'Montserrat,sans-serif',fontSize:16,fontWeight:700,color:'var(--navy)',marginBottom:10}}>Phân bổ mật độ từ thông – 2D Analysis</h3>
              <p style={{fontSize:12.5,color:'var(--text2)',lineHeight:1.7,marginBottom:8}}><strong>Ảnh 2D:</strong> Mật độ từ thông phân bổ trong mạch từ, động cơ 2p = 8 cực, số vận hành f = 80 Hz, Tốc độ 1200 (RPM), động cơ hoạt động vận tải toàn tải.</p>
              <p style={{fontSize:12.5,color:'var(--text2)',lineHeight:1.7,marginBottom:12}}><strong>Video mô phỏng:</strong> Trình từ thông phân bổ trong mạch từ, động cơ 2p = 8 cực, tần số f = 80 Hz, Tốc độ 1200 (RPM). Phân tích tải cho thấy sự tương tác phù hợp giữa từ thông và đường sức điện từ.</p>
              <div className="video-block" style={{height:90}}>
                <div className="video-play" style={{width:36,height:36,fontSize:14}}>▶</div>
                <p>Video mô phỏng mạch từ</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
