import styles from '../pages/Home.module.css';

const STATS = [
  { value: '18+', label: 'Rãnh Stator hỗ trợ' },
  { value: '3 PHA', label: '1 & 2 tốc độ' },
  { value: '70%', label: 'Tiết kiệm thời gian' },
  { value: '1986', label: 'Nền tảng lý thuyết' },
];

export default function StatsBannerWidget() {
  return (
    <section className="section">
      <div className="page-wrap">
        <div className={styles.statsBannerCard}>
          <div className={styles.statsBannerInner}>
            {STATS.map(stat => (
              <div key={stat.value} className={styles.statsItem}>
                <strong className={styles.statsNum}>{stat.value}</strong>
                <span className={styles.statsLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
