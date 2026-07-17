import { Link } from 'react-router-dom';
import WidgetCard from './WidgetCard';
import styles from '../pages/Home.module.css';

const LINKS = [
  { to: '/tinh-toan/3pha-1tocdo', icon: '⚡', title: '3 pha, 1 tốc độ', desc: 'Tính toán động cơ 3 pha tốc độ đơn' },
  { to: '/tinh-toan/3pha-2tocdo', icon: '🔄', title: '3 pha, 2 tốc độ (1/2)', desc: 'Tính toán động cơ 3 pha tốc độ kép' },
  { to: '/tinh-toan/1pha', icon: '🔌', title: '1 pha - 2 pha', desc: 'Tính toán động cơ 1 pha-2 pha' },
  { to: '/huong-dan', icon: '📚', title: 'Đổi tần số và điện áp', desc: 'Hướng dẫn sử dụng và tài liệu kỹ thuật' },
];

export default function CalculationLinksWidget() {
  return (
    <section className={styles.calcSection}>
      <div className="page-wrap">
        <WidgetCard title="Công cụ bắt đầu tính toán" tag={{ label: 'Bắt đầu', variant: 'green' }}>
          <div className={styles.calcIntro}>
            <h3 className={styles.calcIntroTitle}>Chọn mục cần sử dụng</h3>
            <p className={styles.calcIntroText}>Truy cập nhanh các công cụ tính toán kỹ thuật cho động cơ điện.</p>
          </div>
          <div className={styles.calcGrid}>
            {LINKS.map(link => (
              <Link key={link.to} to={link.to} className={styles.calcItem}>
                <div className={styles.calcIcon}>{link.icon}</div>
                <h4>{link.title}</h4>
                <p>{link.desc}</p>
              </Link>
            ))}
          </div>
        </WidgetCard>
      </div>
    </section>
  );
}
