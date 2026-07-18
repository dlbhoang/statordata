import WidgetCard from './WidgetCard';
import styles from '../pages/Home.module.css';

export default function FluxDensityWidget({ fluxDensityImage, appGif }) {
  return (
    <section className="section">
      <div className="page-wrap">
      <WidgetCard title="Phân bố mật độ từ thông trong mạch từ" tag={{ label: 'Mạch từ', variant: 'blue' }}>
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
      </WidgetCard>
      </div>
    </section>
  );
}
