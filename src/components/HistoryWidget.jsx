import styles from '../pages/Home.module.css';

const HISTORY = [
  { year: '1888', title: 'Động cơ cảm ứng xoay chiều', desc: 'Động cơ cảm ứng xoay chiều được phát minh bởi Nikola Tesla. Công nghệ này cách mạng hoá ngành công nghiệp toàn cầu từ cuối thế kỷ XIX.' },
  { year: '1958', title: 'Động cơ tại Việt Nam', desc: 'Tại Việt Nam, ngành động cơ điện bắt đầu được tiếp nhận. Đến sau năm 1975, Việt Nam tự thiết kế và nội địa hoá sản xuất động cơ không đồng bộ.' },
  { year: '1986', title: 'Chương trình thiết kế và tính toán', desc: 'Chương trình thiết kế và tính toán được biên soạn bởi KS. Nguyễn Thế Kiệt – Giảng viên ĐH Bách Khoa TP.HCM. Ứng dụng rộng rãi trong đào tạo và thực tiễn đến ngày nay.' },
  { year: 'NOW', title: 'Website STATORDATA', desc: 'Website STATORDATA do KS. Võ Nguyễn Bá Liêu – Khoa Cơ Điện, ĐH Lạc Hồng xây dựng, hỗ trợ kỹ sư và sinh viên tính toán chính xác, nhanh chóng.' },
];

export default function HistoryWidget() {
  return (
    <section className={styles.historyMainSection}>
      <div className="page-wrap">
        <div className={styles.historyHeader}>
          <div>
            <p className={styles.historyLabel}>Lịch sử hình thành</p>
            <h2 className={styles.historyTitle}>Hành trình phát triển STATORDATA.COM</h2>
          </div>
          <span className="tag blue">STATORDATA.COM</span>
        </div>

        <div className={styles.historyContentGrid}>
          <div className={styles.historyTimeline}>
            {HISTORY.map((item) => (
              <article
                key={item.year}
                className={`${styles.historyTile} ${item.year === 'NOW' ? styles.historyTileNow : ''}`}
              >
                <div className={styles.historyTileMarker} aria-hidden="true">
                  <span className={styles.historyTileDot} />
                </div>
                <div className={styles.historyTileYear}>{item.year}</div>
                <div className={styles.historyTileContent}>
                  <h3 className={styles.historyTileTitle}>{item.title}</h3>
                  <p className={styles.historyTileDesc}>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.historySideImage}>
            <img
              src="/images/assets/Tesla.png"
              alt="Nikola Tesla, người phát minh động cơ cảm ứng xoay chiều"
            />
          </div>
        </div>
      </div>
    </section>
  );
}