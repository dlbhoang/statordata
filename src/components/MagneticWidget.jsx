import { Link } from 'react-router-dom';
import styles from '../pages/Home.module.css';

export default function MagneticWidget({ fluxImage, statorPhoto }) {
  return (
    <section className="section">
      <div className="page-wrap">
        <div className={styles.magSection}>
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
              <div className={styles.magMoreWrap}>
                <Link to="/ky-thuat" className={styles.magMoreLink}>
                  Xem thêm
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styles.magCard}>
              <Link to="/ky-thuat" className={styles.magTitleLink}>
                <h4>THÔNG SỐ ĐỊNH MỨC ĐỘNG CƠ ĐIỆN.</h4>
              </Link>
              <p>Thông số định mức là các đại lượng đặc trưng cho chế độ làm việc tiêu chuẩn của động cơ điện, bao gồm công suất, điện áp, dòng điện, tốc độ, hệ số công suất (Power Factor), hiệu suất (efficiency (%)), cấp cách điện và chế độ làm việc S1...S8. Các thông số này là cơ sở để đánh giá khả năng vận hành và phục vụ cho quá trình thiết kế và tính toán dữ liệu.</p>
              <Link to="/ky-thuat" className={styles.magFigure}>
                <img src={statorPhoto} alt="Thông số định mức động cơ điện" className={styles.magFigureImg} />
              </Link>
              <div className={styles.magMoreWrap}>
                <Link to="/ky-thuat" className={styles.magMoreLink}>
                  Xem thêm
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}