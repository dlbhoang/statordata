import { Link } from 'react-router-dom';
import Subnav from '../components/Subnav';
import styles from './LichSu.module.css';

const TIMELINE = [
  {
    year: '1888',
    title: 'Phát minh của Nikola Tesla',
    description: 'Động cơ cảm ứng xoay chiều được phát minh bởi Nikola Tesla. Công nghệ này cách mạng hoá ngành công nghiệp toàn cầu từ cuối thế kỷ XIX.',
  },
  {
    year: '1986',
    title: 'Chương trình thiết kế và tính toán',
    description: 'Chương trình thiết kế và tính toán được biên soạn bởi KS. Nguyễn Thế Kiệt – Giảng viên ĐH Bách Khoa TP.HCM. Ứng dụng rộng rãi trong đào tạo và thực tiễn đến ngày nay.',
  },
  {
    year: 'NOW',
    title: 'Website DATA STATOR',
    description: 'Website DATA STATOR do KS. Võ Nguyễn Bá Liễu – Khoa Cơ Điện, ĐH Lạc Hồng xây dựng, hỗ trợ kỹ sư và sinh viên tính toán chính xác, nhanh chóng.',
  },
];

export default function LichSu() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 36 }}>
        <div className={styles.header}>
          <span className={styles.badge}>Về chúng tôi</span>
          <h2 className={styles.title}>Lịch sử hình thành</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.timeline}>
            {TIMELINE.map((item) => (
              <article key={item.year} className={styles.event}>
                <div className={styles.eventDate}>{item.year}</div>
                <h3 className={styles.eventTitle}>{item.title}</h3>
                <p className={styles.eventDesc}>{item.description}</p>
              </article>
            ))}
          </div>

          <aside className={styles.sideCard}>
            <div className={styles.sideInner}>
              <div className={styles.avatar}>👤</div>
              <p className={styles.sideTitle}>Nikola Tesla</p>
              <p className={styles.sideSubtitle}>1856 – 1943</p>
              <p className={styles.sideText}>Nhà phát minh động cơ cảm ứng. Ông là người đặt nền móng cho máy điện AC và nhiều công nghệ điện tử hiện đại.</p>
            </div>
          </aside>
        </div>

        <div style={{ marginTop: 30, display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/ky-thuat" className="btn btn-outline">← Quay về Kỹ thuật</Link>
        </div>
      </div>
    </>
  );
}
