import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../data/content';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
        >
          <span className={styles.dot} />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
