import styles from './WidgetCard.module.css';

export default function WidgetCard({ title, tag, children, className }) {
  return (
    <div className={`${styles.widgetCard} ${className ?? ''}`.trim()}>
      {title && (
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <h4 className={styles.title}>{title}</h4>
            {tag?.label && (
              <span className={`${styles.tag} ${styles[tag.variant || 'blue']}`}>
                {tag.label}
              </span>
            )}
          </div>
          <div className={styles.headerDivider} />
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
}