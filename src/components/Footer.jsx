import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import MapModal from './MapModal';

const TIMELINE = [
  {
    year: '1986',
    title: 'Chương trình thiết kế và tính toán',
    description: 'Chương trình thiết kế và tính toán được biên soạn bởi KS. Nguyễn Thế Kiệt – Giảng viên ĐH Bách Khoa TP.HCM. Ứng dụng rộng rãi trong đào tạo và thực tiễn đến ngày nay.',
  },
  {
    year: 'NOW',
    title: 'Website STATORDATA',
    description: 'Website STATORDATA do KS. Võ Nguyễn Bá Liêu – Khoa Cơ Điện, ĐH Lạc Hồng xây dựng, hỗ trợ kỹ sư và sinh viên tính toán chính xác, nhanh chóng.',
  },
];

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={`page-wrap ${styles.inner}`}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <div className={styles.mark}><span>⚙</span><small>STATOR</small></div>
            <div className={styles.name}>Stator<em>data</em>.com</div>
          </div>
          {/* footer description removed as requested */}
        
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

        {/* right-side profile removed as requested */}
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