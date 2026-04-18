import { NavLink } from 'react-router-dom';
import { SUBNAV_ITEMS } from '../data/content';
import styles from './Subnav.module.css';

function RenderMenu(items, level = 1) {
  return items.map((item) => {
    const key = `${item.path || 'no-path'}-${item.label}`;
    const isTop = level === 1;

    return (
      <div
        key={key}
        className={isTop ? styles.group : styles.childGroup}
      >
        {/* LINK */}
        {item.path ? (
          <NavLink
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `${isTop ? styles.item : styles.childItem} ${
                isActive ? styles.active : ''
              }`
            }
          >
            {isTop && <span className={styles.dot} />}
            {item.label}
          </NavLink>
        ) : (
          <span className={isTop ? styles.item : styles.childItem}>
            {isTop && <span className={styles.dot} />}
            {item.label}
          </span>
        )}

        {/* CHILDREN */}
        {Array.isArray(item.children) && item.children.length > 0 && (
          <div
            className={
              level === 1
                ? styles.childrenMenu
                : styles.subChildrenMenu
            }
          >
            {RenderMenu(item.children, level + 1)}
          </div>
        )}
      </div>
    );
  });
}

export default function Subnav() {
  return (
    <div className={styles.subnav}>
      <div className="page-wrap" style={{ display: 'flex', padding: 0 }}>
        {RenderMenu(SUBNAV_ITEMS)}
      </div>
    </div>
  );
}