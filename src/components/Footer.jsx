import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import MapModal from './MapModal';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`page-wrap ${styles.inner}`}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <div className={styles.mark}><span>⚙</span><small>STATOR</small></div>
            <div className={styles.name}>Stator<em>data</em>.com</div>
          </div>
          <p className={styles.desc}>
            Động cơ cảm ứng xoay chiều được phát minh năm 1888 bởi Nikola Tesla. Website STATORDATA.COM được xây dựng
            dựa trên nền tảng lý thuyết và kinh nghiệm thực tiễn, do kỹ sư Nguyễn Bá Siêu — Khoa Cơ Điện, Trường Đại
            Học Lạc Hồng phát triển, nhằm hỗ trợ kỹ sư và sinh viên trong việc tính toán, thiết kế và phân tích số
            liệu dây quấn động cơ điện.
          </p>
          <h4 className={styles.h}>Thông tin liên hệ</h4>
          <ul className={styles.contacts}>
            <li>
              <span>📍</span>
              <MapModal
                address="Số nhà 319 – Đường DT 9 – Thôn 1, Tân Tiến, Đắk Lắk"
                query="Tan Tien, Dak Lak, Vietnam"
                label="Số nhà 319 – Đường DT 9 – Thôn 1, Tân Tiến, Đắk Lắk"
              />
            </li>
            <li><span>📞</span> 0366 332 181</li>
            <li><span>✉️</span> Statordata@gmail.com</li>
          </ul>

          <div className={styles.links}>
            <Link to="/ky-thuat">Kỹ thuật</Link>
            <Link to="/dieu-khoan">Điều khoản</Link>
            <Link to="/hoc-tap/3pha-1tocdo">Học tập</Link>
            <Link to="/so-do-mach">Sơ đồ mạch</Link>
            <Link to="/lien-he">Liên hệ</Link>
          </div>
        </div>

        <div className={styles.person}>
          <div className={styles.photo}>👤</div>
          <div className={styles.pname}>Nikola Tesla</div>
          <div className={styles.pyear}>1856 – 1943</div>
          <div className={styles.psub}>Cha đẻ của<br />động cơ cảm ứng<br />xoay chiều</div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="page-wrap" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'8px'}}>
          <span>© 2024 Statordata.com — Bảo lưu mọi quyền</span>
          <span style={{display:'flex',gap:'16px'}}>
            <Link to="/dieu-khoan" style={{color:'var(--cyan)',opacity:.7}}>Điều khoản</Link>
            <Link to="/chinh-sach" style={{color:'var(--cyan)',opacity:.7}}>Chính sách</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}