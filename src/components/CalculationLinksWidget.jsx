import { Link } from 'react-router-dom';
import styles from '../pages/Home.module.css';

const ICONS = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  gauge: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 15 16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.3" fill="currentColor" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12h3l2-6 4 12 2-6h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

const LINKS = [
  { to: '/tinh-toan/3pha-1tocdo', index: '01', icon: 'bolt', line1: '3 Pha', line2: '1 tốc độ' },
  { to: '/tinh-toan/3pha-2tocdo', index: '02', icon: 'gauge', line1: '3 Pha', line2: '2 tốc độ' },
  { to: '/tinh-toan/1pha', index: '03', icon: 'plug', line1: '1 Pha', line2: '2 pha' },
  { to: '/huong-dan', index: '04', icon: 'wave', line1: 'Đổi tần số', line2: '& điện áp' },
];

export default function CalculationLinksWidget() {
  return (
    <section className="section">
      <div className="page-wrap">
        <div className={styles.calcCard}>
          <div className={styles.calcTop}>
            <span className={styles.calcEyebrow}>Công cụ tính toán</span>
            <h3 className={styles.calcHeading}>Chọn mục cần sử dụng</h3>
            <p className={styles.calcSub}>Truy cập nhanh các công cụ tính toán kỹ thuật cho động cơ điện.</p>
          </div>
          <div className={styles.calcGrid}>
            {LINKS.map(link => (
              <Link key={link.to} to={link.to} className={styles.calcItem}>
                <span className={styles.calcItemIndex}>{link.index}</span>
                <span className={styles.calcItemIcon}>{ICONS[link.icon]}</span>
                <span className={styles.calcItemText}>
                  <span>{link.line1}</span>
                  <span>{link.line2}</span>
                </span>
                <span className={styles.calcItemUnderline} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}