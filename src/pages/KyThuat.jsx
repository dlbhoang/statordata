import { Link } from 'react-router-dom';
import Subnav from '../components/Subnav';
import QuickCheckTabs from '../components/QuickCheckTabs';
import styles from './KyThuat.module.css';

const INFO_CARDS = [
  {
    title: 'Thiết kế dây quấn stator',
    label: 'Thuộc tính nhanh',
    text: 'Xác định bước cực, số rãnh và phân bố cuộn dây để đảm bảo động cơ hoạt động ổn định và hiệu suất cao.',
  },
  {
    title: 'Tính toán mật độ từ thông',
    label: 'Công suất',
    text: 'Tối ưu hóa mật độ từ thông và thông số điện từ để giảm tổn hao và tăng hiệu suất cho động cơ cảm ứng.',
  },
  {
    title: 'Phân loại QA / QB',
    label: 'Phân bố',
    text: 'Kiểm tra điều kiện QA = QB, QA = 2QB, QA = 3QB và xác định phương án dây quấn phù hợp.',
  },
];

const TOPIC_CARDS = [
  {
    title: 'Trang tính toán 1 pha',
    subtitle: 'Hoàn thiện dữ liệu và bước cực cho động cơ 1 pha.',
  },
  {
    title: 'Trang tính toán 3 pha',
    subtitle: 'Phân loại động cơ 3 pha 1 tốc độ và 2 tốc độ.',
  },
  {
    title: 'Trang hướng dẫn kỹ thuật',
    subtitle: 'Tài liệu chi tiết tối ưu hóa quấn dây và chọn thông số.',
  },
];

export default function KyThuat() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 36 }}>
        <div className={styles.heroSection}>
          <div>
            <span className="sec-label">Kỹ thuật – Công nghệ</span>
            <h2 className="sec-title">Kỹ thuật vòng dây <span className="accent">stator</span></h2>
            <p className={styles.heroText}>
              Khám phá các giải pháp thiết kế dây quấn stator, phân loại QA / QB và tần số vận hành cho động cơ 1 pha và 3 pha.
            </p>
          </div>
          <div className={styles.heroCard}>
            <p className={styles.heroCardTag}>Nguồn cảm hứng</p>
            <h3>Nikola Tesla</h3>
            <p>Ông là người mở đường cho động cơ cảm ứng xoay chiều và các công nghệ quấn dây stator hiện đại.</p>
          </div>
        </div>

        <section className={styles.infoSection}>
          <div className={styles.sectionHeader}>
            <h3>Thuộc tính nhanh</h3>
            <p>Những thông số quan trọng giúp bạn hiểu nhanh cấu trúc dây quấn và thuộc tính động cơ.</p>
          </div>
          <div className={styles.infoGrid}>
            {INFO_CARDS.map((card) => (
              <article key={card.title} className={styles.infoCard}>
                <div className={styles.infoLabel}>{card.label}</div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.topicSection}>
          <div className={styles.sectionHeader}>
            <h3>Trang tính toán hoàn chỉnh</h3>
            <p>Mỗi chức năng được hoàn thiện thành trang riêng, đầy đủ nội dung và hướng dẫn.</p>
          </div>
          <div className={styles.topicGrid}>
            {TOPIC_CARDS.map((item) => (
              <div key={item.title} className={styles.topicCard}>
                <div className={styles.topicLabel}>Trang</div>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.checkSection}>
          <div className={styles.sectionHeader}>
            <h3>Kiểm tra nhanh</h3>
            <p>Xem nhanh phân loại động cơ và bước cực ngay trong trang này.</p>
          </div>
          <QuickCheckTabs />
        </section>

        {/* Lịch sử được hiển thị tại footer trang chủ. */}
      </div>
    </>
  );
}
