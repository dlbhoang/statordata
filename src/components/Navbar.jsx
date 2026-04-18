import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../data/content';
import styles from './Navbar.module.css';

export default function Navbar() {
  const DRAG_THRESHOLD = 8;
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navRef = useRef(null);
  const navInnerRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    hasDragged: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startOffset: 0,
  });
  const suppressClickRef = useRef(false);
  const [navOffset, setNavOffset] = useState(0);

  const clampOffset = (value) => {
    const navWidth = navRef.current?.offsetWidth ?? 0;
    const contentWidth = navInnerRef.current?.scrollWidth ?? 0;
    const minOffset = Math.min(0, navWidth - contentWidth);
    return Math.max(minOffset, Math.min(0, value));
  };

  const canDragHorizontally = () => {
    const navWidth = navRef.current?.offsetWidth ?? 0;
    const contentWidth = navInnerRef.current?.scrollWidth ?? 0;
    return contentWidth > navWidth;
  };

  useEffect(() => {
    const updateBounds = () => {
      const navWidth = navRef.current?.offsetWidth ?? 0;
      const contentWidth = navInnerRef.current?.scrollWidth ?? 0;
      const minOffset = Math.min(0, navWidth - contentWidth);
      setNavOffset(prev => Math.max(minOffset, Math.min(0, prev)));
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return undefined;

    const onNativeWheel = (event) => {
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      const dominantDelta = absX > absY ? event.deltaX : event.deltaY;
      if (!dominantDelta) return;

      const navWidth = navRef.current?.offsetWidth ?? 0;
      const contentWidth = navInnerRef.current?.scrollWidth ?? 0;
      if (contentWidth <= navWidth) return;

      event.preventDefault();
      setNavOffset(prev => clampOffset(prev - dominantDelta));
    };

    navElement.addEventListener('wheel', onNativeWheel, { passive: false });
    return () => navElement.removeEventListener('wheel', onNativeWheel);
  }, []);

  const onPointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    const targetElement = event.target;
    if (targetElement instanceof Element && targetElement.closest('a, button')) {
      return;
    }
    suppressClickRef.current = false;
    dragState.current = {
      isDragging: true,
      hasDragged: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOffset: navOffset,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!dragState.current.isDragging) return;
    if (!canDragHorizontally()) return;

    const deltaX = event.clientX - dragState.current.startX;
    const deltaY = event.clientY - dragState.current.startY;
    if (Math.abs(deltaX) > DRAG_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
      dragState.current.hasDragged = true;
    }

    if (dragState.current.hasDragged) {
      setNavOffset(clampOffset(dragState.current.startOffset + deltaX));
    }
  };

  const onPointerUp = (event) => {
    if (dragState.current.pointerId !== event.pointerId) return;
    suppressClickRef.current = dragState.current.hasDragged;
    dragState.current.isDragging = false;
    dragState.current.hasDragged = false;
    dragState.current.pointerId = null;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onClickCapture = (event) => {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  return (
    <nav
      ref={navRef}
      className={styles.nav}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClickCapture={onClickCapture}
    >
      <div
        ref={navInnerRef}
        className={styles.navInner}
        style={{ transform: `translateX(${navOffset}px)` }}
      >
        {NAV_ITEMS.map((item, itemIndex) => {
          const isParentActive = item.children && location.pathname.startsWith('/hoc-tap');
          const isOpen = openMenu === item.path;

          return (
            <div
              key={`${item.path ?? item.label ?? 'item'}-${itemIndex}`}
              className={styles.itemWrap}
              onMouseEnter={() => item.children && setOpenMenu(item.path)}
              onMouseLeave={() => {
                item.children && setOpenMenu(null);
                setOpenSubmenu(null);
              }}
            >
              <NavLink
                to={item.path || '#'}
                end={item.path === '/'}
                className={({ isActive }) => `${styles.item} ${((isActive || isParentActive) ? styles.active : '')}`}
                onClick={(event) => {
                  if (!item.path) event.preventDefault();
                }}
              >
                <span className={styles.dot} />
                {item.label}
              </NavLink>

              {item.children && (
                <div className={`${styles.submenu} ${isOpen ? styles.submenuOpen : ''}`}>
                  {item.children.map((sub, subIndex) => (
                    <div
                      key={`${sub.path ?? sub.label ?? 'sub'}-${itemIndex}-${subIndex}`}
                      className={styles.submenuItem}
                      onMouseEnter={() => sub.children && setOpenSubmenu(sub.path)}
                      onMouseLeave={() => sub.children && setOpenSubmenu(null)}
                    >
                      {sub.path ? (
                        <NavLink
                          to={sub.path}
                          end
                          className={styles.dropdownItem}
                        >
                          {sub.label}
                        </NavLink>
                      ) : (
                        <span className={styles.dropdownItem}>{sub.label}</span>
                      )}

                      {sub.children && (
                        <div className={`${styles.submenu2} ${openSubmenu === sub.path ? styles.submenu2Open : ''}`}>
                          {sub.children.map((subsub, subsubIndex) => (
                            subsub.path ? (
                              <NavLink
                                key={`${subsub.path ?? subsub.label ?? 'subsub'}-${itemIndex}-${subIndex}-${subsubIndex}`}
                                to={subsub.path}
                                end
                                className={styles.dropdownItem2}
                              >
                                {subsub.label}
                              </NavLink>
                            ) : (
                              <span
                                key={`${subsub.path ?? subsub.label ?? 'subsub'}-${itemIndex}-${subIndex}-${subsubIndex}`}
                                className={styles.dropdownItem2}
                              >
                                {subsub.label}
                              </span>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}