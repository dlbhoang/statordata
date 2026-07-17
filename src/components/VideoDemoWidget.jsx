import WidgetCard from './WidgetCard';
import styles from './VideoDemoWidget.module.css';

export default function VideoDemoWidget({ src, alt }) {
  return (
    <WidgetCard title="Demo ứng dụng" tag={{ label: 'Trực quan', variant: 'blue' }}>
      <div className={styles.videoWrap}>
        <img src={src} alt={alt} className={styles.videoGif} />
      </div>
    </WidgetCard>
  );
}
