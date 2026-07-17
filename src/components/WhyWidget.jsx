import WidgetCard from './WidgetCard';
import styles from '../pages/Home.module.css';

export default function WhyWidget({ items }) {
  return (
    <section className="section">
      <WidgetCard title="Vì sao các kỹ sư lựa chọn nền tảng Statordata.com?" tag={{ label: 'Tính năng', variant: 'green' }}>
        <div className={styles.whyItemsGrid}>
          {items.map((item) => (
            <div key={item.num} className={styles.whyItem}>
              <div className={styles.whyNum}>{item.num}</div>
              <div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.whyBottomGrid}>
          <div className={styles.chartCard}>
            <h4>Biểu đồ Efficiency — Induction Motor</h4>
            <p className={styles.chartCaption}>P(kW) — Efficiency of Induction Motor</p>
          </div>
          <div className={styles.statorNote}>
            <p><strong>STATORDATA.COM</strong> là nền tảng kỹ thuật chuyên sâu dành cho kỹ sư thiết kế và sửa chữa động cơ cảm ứng.</p>
            <ul className={styles.statorBullets}>
              <li>➤ Hệ thống cho phép nhập các thông số định danh như: Điện áp, tần số, số rãnh, số cực, số mạch nhánh song song. Dựa trên các dữ liệu này, hệ thống nhanh chóng xuất kết quả như: Thông số xây dựng sơ đồ khai triển dây quấn, vị trí đặt hai đầu dây pha liên tiếp trong không gian stator hoặc rotor.</li>
              <li>➤ Hệ thống cho phép nhập các thông số kích thước kỹ thuật: Thông số kích thước stator hoặc rotor, thông số kích thước rãnh stator hoặc rotor, Thông số từ thông cực đại. Dựa trên các dữ liệu này, hệ thống nhanh chóng xuất kết quả như: Xác định từ cảm cực đại tại khe hở với từ thông cực đại trên mỗi cực từ, số vòng dây quấn mỗi pha dây quấn, số vòng mỗi bối dây...vv</li>
              <li>➤ Hệ thống cho phép nhập các thông số định mức đầu vào như: Mật độ dòng điện, hệ số công suất (Power Factor) và hiệu suất (Efficiency). Dựa trên các dữ liệu này các thông số định mức của động cơ như công suất định mức, dòng điện định mức cũng được xác định, đảm bảo sự tương thích giữa thiết kế điện từ và đặc tính từ hóa của mạch từ.</li>
            </ul>
            <p><strong>STATORDATA.COM</strong> không chỉ là công cụ thiết kế - tính toán dữ liệu động cơ cảm ứng mà còn là hệ thống hỗ trợ học tập và nghiên cứu, giúp người dùng hiểu sâu hơn về bản chất thiết kế máy điện.</p>
          </div>
        </div>
      </WidgetCard>
    </section>
  );
}