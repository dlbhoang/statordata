import { NavLink } from 'react-router-dom';
import { SUBNAV_ITEMS } from '../data/content';
import styles from './Subnav.module.css';

export default function Subnav() {
  return (
    <div className={styles.subnav}>
      <div className="page-wrap" style={{display:'flex',padding:0}}>
        {SUBNAV_ITEMS.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
          >
            <span className={styles.dot} />
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
