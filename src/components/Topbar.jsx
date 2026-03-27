import styles from './Topbar.module.css';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <select>
          <option>🇻🇳 Tiếng Việt</option>
          <option>🇬🇧 English</option>
        </select>
        <span className={styles.badge}>CHUYÊN NGHIỆP</span>
        <span className={styles.sep}>|</span>
        <span className={styles.text}>Chia sẻ kiến thức dây quấn động cơ điện cảm ứng</span>
      </div>
      <div className={styles.right}>
        <a href="#" className={`${styles.icon} ${styles.msg}`} title="Messenger">💬</a>
        <a href="#" className={`${styles.icon} ${styles.fb}`}  title="Facebook">f</a>
        <a href="#" className={`${styles.icon} ${styles.yt}`}  title="YouTube">▶</a>
      </div>
    </div>
  );
}
