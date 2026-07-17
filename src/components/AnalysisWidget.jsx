import WidgetCard from './WidgetCard';
import homeStyles from '../pages/Home.module.css';

export default function AnalysisWidget({ results }) {
  return (
    <WidgetCard title="Phương pháp xử lý dữ liệu" tag={{ label: '8 mục', variant: 'blue' }}>
      <div className={homeStyles.analysisHeader}>
        <h3 className={homeStyles.analysisMain}>XỬ LÝ DỮ LIỆU ĐẦU VÀO VÀ XUẤT KẾT QUẢ.</h3>
      </div>
      <ul className={homeStyles.featureList}>
        {results.map((line, i) => (
          <li key={i} className={homeStyles.featureListItem}>
            <span className={homeStyles.featureListItemNumber}>{i + 1}</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
