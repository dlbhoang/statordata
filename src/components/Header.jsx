import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import AuthModal from './AuthModal';
import styles from './Header.module.css';

export default function Header() {
  const [q, setQ] = useState('');
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="StatorData logo" className={styles.logoImg} />
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
        <button type="button" className={styles.loginBtn} onClick={() => setAuthOpen(true)}>
          ⚙ Đăng nhập
        </button>
      </div>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </header>
  );
}
