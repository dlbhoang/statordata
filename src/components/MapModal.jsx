import { useState, useEffect, useCallback } from 'react';
import styles from './MapModal.module.css';

/**
 * MapModal - bam vao dia chi -> mo modal map chi duong
 *
 * Props:
 *   address  {string}  - ten dia chi hien thi (VD: "123 Nguyen Van A, Hoc Mon, TP.HCM")
 *   query    {string}  - tu khoa tim kiem tren Google Maps (mac dinh = address)
 *   label    {string}  - text link hien thi (mac dinh = address)
 *
 * Su dung:
 *   <MapModal address="Statordata, Hoc Mon, Ho Chi Minh" />
 *   <MapModal address="123 Le Van Khuong, Hoc Mon" label="Xem tren ban do" />
 */
export default function MapModal({ address, query, label }) {
  const [open, setOpen] = useState(false);
  const searchQuery = query || address;
  const displayLabel = label || address;

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, handleKeyDown]);

  const encodedQuery = encodeURIComponent(searchQuery);
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodedQuery}&output=embed&hl=vi&z=16`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedQuery}`;

  return (
    <>
      {/* Trigger - dong dia chi co the click */}
      <button
        type="button"
        className={styles.addressTrigger}
        onClick={() => setOpen(true)}
        title="Bam de xem ban do va chi duong"
      >
        <svg className={styles.pinIcon} viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span>{displayLabel}</span>
        <svg className={styles.externalIcon} viewBox="0 0 16 16" fill="currentColor" width="11" height="11">
          <path d="M2 2h5v1.5H3.5v9h9V9H14v5H2V2zm7 0h5v5h-1.5V4.56L7.28 9.78 6.22 8.72l5.22-5.22H9V2z" />
        </svg>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className={styles.overlay}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className={styles.modal}>

            {/* Header */}
            <div className={styles.modalHead}>
              <div className={styles.modalHeadLeft}>
                <div className={styles.modalPinBadge}>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className={styles.modalLabel}>Dia chi</div>
                  <div className={styles.modalAddress}>{address}</div>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
                aria-label="Dong"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Map iframe */}
            <div className={styles.mapWrap}>
              <iframe
                title="Ban do dia chi"
                src={mapsEmbedUrl}
                className={styles.mapFrame}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Footer actions */}
            <div className={styles.modalFoot}>
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnDirections}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path fillRule="evenodd" d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Chi duong (Google Maps)
              </a>
              <button
                className={styles.btnClose}
                onClick={() => setOpen(false)}
              >
                Dong
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}