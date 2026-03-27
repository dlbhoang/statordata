import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [q, setQ] = useState('');
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <div className={styles.mark}>
          <span>⚙</span>
          <small>STATOR</small>
        </div>
        <div className={styles.name}>Stator<em>data</em>.com</div>
      </Link>

      <div className={styles.center}>
        <Link to="/lien-he" className="btn btn-primary" style={{fontSize:12,padding:'6px 16px'}}>Liên hệ</Link>
        <Link to="/group" className={styles.group}>
          <span className={styles.dot} />
          Group Statordata.com
        </Link>
        <div className={styles.search}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm kiếm tài liệu..." className={styles.sinput} />
          <button className={styles.sbtn}>🔍</button>
        </div>
      </div>

      <div className={styles.right}>
        <Link to="/dang-nhap" className={styles.loginBtn}>⚙ Đăng nhập</Link>
      </div>
    </header>
  );
}
