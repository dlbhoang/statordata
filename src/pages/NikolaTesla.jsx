import { Link } from 'react-router-dom';
import Subnav from '../components/Subnav';
import styles from './NikolaTesla.module.css';

// ---- Dữ liệu bảng thông tin (infobox), lấy đúng nội dung & thứ tự từ tài liệu gốc ----
const INFOBOX_FACTS = [
  { label: 'Sinh', value: '13 tháng 9 năm 1856 — Smiljan, Đế quốc Áo (ngày nay là Croatia)' },
  { label: 'Mất', value: '7 tháng 1 năm 1943 (86 tuổi) — Thành phố New York, New York, Hoa Kỳ' },
  { label: 'Nguyên nhân mất', value: 'Huyết khối động mạch vành' },
  { label: 'Nơi an nghỉ', value: 'Belgrade, Serbia' },
  { label: 'Tư cách công dân', value: 'Áo (1856–1891) · Mỹ (1891–qua đời)' },
  { label: 'Học vị', value: 'Đại học công nghệ Graz (đã bỏ học)' },
];

const ENGINEER_FACTS = [
  { label: 'Ngành kỹ sư', value: 'Kỹ sư điện, Kỹ sư cơ khí' },
  { label: 'Các dự án nổi bật', value: 'Dòng điện xoay chiều, Điện cao thế, Thí nghiệm về điện tần số cao' },
  { label: 'Thiết kế nổi bật', value: 'Động cơ cảm ứng, Từ trường quay, Cuộn dây Tesla, Radio, Xe điều khiển từ xa, Ngư lôi' },
];

// ---- Dòng thời gian phát triển động cơ cảm ứng trên thế giới ----
const TIMELINE = [
  {
    period: 'Năm 1888',
    text: 'Nikola Tesla (gốc Serbia, làm việc tại Mỹ) phát minh động cơ cảm ứng xoay chiều (AC induction motor).',
  },
  {
    period: 'Khoảng từ năm 1890–1914',
    text: 'Đức: Siemens, AEG bắt đầu sản xuất motor điện và máy phát xoay chiều. Anh, Pháp, Ý, Thụy Điển: hàng loạt nhà máy điện, xưởng chế tạo motor ra đời.',
  },
  {
    period: 'Giai đoạn công nghiệp hóa mạnh (1918 – 1939)',
    text: 'Các hãng Siemens (Đức), AEG, Brown Boveri (Thụy Sĩ), ASEA (Thụy Điển) phát triển hàng loạt mẫu motor công suất lớn.',
  },
  {
    period: 'Thời kỳ vàng của công nghiệp điện cơ (1945 – 1970) — cho tới ngày nay',
    text: 'Cải tiến các dòng motor hiệu suất cao, motor 3 pha công nghiệp chuẩn IEC. Các nước mạnh nhất: Đức, Thụy Điển, Ý, Pháp, Anh… Motor tiết kiệm năng lượng (IE2, IE3, IE4). Các tập đoàn lớn: Siemens, ABB, WEG (châu Âu – Brazil), Leroy Somer (Pháp).',
  },
  {
    period: 'Liên Xô (Nga) — phát triển sớm nhất và mạnh nhất trong khối xã hội chủ nghĩa',
    text: 'Bắt đầu khoảng năm 1920–1930. Sau Cách mạng Tháng Mười (1917), Liên Xô bắt đầu chương trình điện khí hóa toàn quốc — cột mốc chính thức cho sự phát triển động cơ điện, máy phát điện, máy biến áp và thiết bị cơ điện. Liên Xô tự thiết kế, sản xuất đầy đủ các loại động cơ điện 1 pha, 3 pha, cảm ứng, đồng bộ tại các nhà máy Elektrosila (Leningrad), Ural Electroapparat, Kharkov Electromotor Plant, Novocherkassk Electric Machine Plant… Động cơ điện kiểu A, AO, AO2, 4A, 4AM của Liên Xô trở thành chuẩn mực, được xuất khẩu sang các nước XHCN (Việt Nam, Trung Quốc, Cuba, Triều Tiên…).',
  },
  {
    period: 'Trung Quốc — bắt đầu khoảng năm 1953',
    text: 'Sau khi thành lập nước CHND Trung Hoa (1949), Trung Quốc nhận viện trợ kỹ thuật từ Liên Xô. Giai đoạn 1953–1957 xây dựng hàng loạt nhà máy cơ điện như Harbin Electric Machine Factory, Shanghai Motor Factory, Beijing Electric Machinery Works. Đến thập niên 1960, Trung Quốc đã tự thiết kế được motor 3 pha kiểu Y, Y2, dựa trên mẫu AO2 của Liên Xô.',
  },
  {
    period: 'Việt Nam — tiếp nhận từ 1958, phát triển sau 1975',
    text: 'Giai đoạn 1958–1975: nhận viện trợ từ Liên Xô và Trung Quốc, chủ yếu thực hiện lắp ráp, sửa chữa và cải tiến động cơ. Giai đoạn 1975–1986: Việt Nam bắt đầu tự tính toán, nội địa hóa và sản xuất hàng loạt tại các nhà máy trong nước.',
  },
];

export default function NikolaTesla() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 48 }}>
        <div className={styles.breadcrumb}>
          <Link to="/ky-thuat">Kỹ thuật – Công nghệ</Link>
          <span>/</span>
          <span>Nikola Tesla</span>
        </div>

        {/* ===== Bài viết chính. Infobox được float sang phải, chữ tự bao quanh, ===== */}
        {/* ===== hết chiều cao infobox thì chữ tự full-width — không còn khoảng trống. ===== */}
        <article className={styles.article}>
          <div className={styles.introLabel}>
            <h2 className="sec-title">Nikola <span className="accent">Tesla</span></h2>
          </div>

          <h3 className={styles.articleTitle}>
            Những phát minh đi trước thời đại của Nikola Tesla
          </h3>

          <aside className={styles.infobox}>
            <img
              className={styles.infoboxPhoto}
              src="/images/tesla-portrait.jpg"
              alt="Chân dung Nikola Tesla"
            />
            <p className={styles.infoboxCaption}>Nikola Tesla</p>

            <dl className={styles.infoboxList}>
              {INFOBOX_FACTS.map((fact) => (
                <div key={fact.label} className={styles.infoboxRow}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <p className={styles.infoboxSubhead}>Nghề nghiệp kỹ sư</p>

            <dl className={styles.infoboxList}>
              {ENGINEER_FACTS.map((fact) => (
                <div key={fact.label} className={styles.infoboxRow}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <p>
            Trong suốt cuộc đời mình, nhà phát minh thiên tài Nikola Tesla đã tạo ra hàng trăm thiết bị
            và quy trình làm thay đổi thế giới.
          </p>
          <p>
            Nikola Tesla (10/7/1856 – 7/1/1943) là một nhà phát minh, kỹ sư điện và kỹ sư cơ khí người
            Mỹ gốc Serbia. Tất cả các thiết kế của ông — khoảng 300 trong số đó được cấp bằng sáng chế —
            đều hướng tới tương lai và đó là lý do mọi người gọi ông là "nhà phát minh ra thế kỷ 20".
          </p>

          <h4 className={styles.sectionHeading}>1.1.0: Cuộn dây Tesla</h4>
          <p>
            Trong những phát minh nổi tiếng nhất của Nikola Tesla, cuộn dây Tesla là nền tảng cho
            phần lớn công việc của ông sau này. Tesla bị hấp dẫn bởi điện tần số cao và muốn khai thác nó.
          </p>
          <p>
            Vấn đề là tần số càng cao, thiết bị càng không ổn định. Tesla đã thử chế tạo máy phát điện
            quay có thể chạy ở tốc độ cao, nhưng chúng bị hỏng ở tốc độ 20.000 vòng/giây.
          </p>
          <p>
            Từ đó, cuộn Tesla đã ra đời. Về cơ bản, nó là một máy biến áp cộng hưởng bao gồm hai
            cuộn dây phản xạ năng lượng qua lại, tạo ra dòng điện xoay chiều có tần số và điện áp cực
            cao. Vào thời điểm đó, Tesla đã sử dụng cuộn dây để tiến hành thí nghiệm tiên tiến trong điện
            chiếu sáng, điện xung trị liệu và truyền tải điện năng không dây.
          </p>

          <figure className={styles.figure}>
            <img src="/images/tesla-coil.jpg" alt="Cuộn dây Tesla" />
            <figcaption>Hình 1: Cuộn dây Tesla.</figcaption>
          </figure>

          <h4 className={styles.sectionHeading}>1.1.2: Động cơ cảm ứng</h4>
          <p>
            Năm 1887, Tesla đã phát triển động cơ cảm ứng, còn được gọi là động cơ không đồng bộ,
            chạy bằng dòng điện xoay chiều. Nó sử dụng điện đa pha, tạo ra từ trường để làm quay động
            cơ. Phát minh này đã được cấp bằng sáng chế vào tháng 5/1888.
          </p>
          <p>
            Tesla đã phát triển một động cơ cảm ứng thực tế khi Westinghouse ra mắt mảng kinh doanh
            truyền tải điện xoay chiều (khoảng năm 1887). Ông đã trình diễn hoạt động thực tế của một
            động cơ quy mô lớn tại Triển lãm Thế giới năm 1893 tổ chức tại Chicago.
          </p>
          <p>
            Trong giai đoạn phát triển tại Westinghouse, dòng điện xoay chiều 133 Hz đã được sử dụng
            để vận hành động cơ. Dòng điện được giảm xuống còn 60 Hz do tốc độ động cơ quá nhanh.
            Đây là lý do tại sao tần số 60 Hz được sử dụng ở Hoa Kỳ và miền Tây Nhật Bản ngày nay.
          </p>
          <p>
            George Westinghouse đã mua lại bằng sáng chế AC của Tesla vào tháng 7 năm 1888. Một
            năm sau, Công ty Westinghouse bắt đầu bán thiết bị điện nhỏ đầu tiên trên thế giới, một chiếc
            quạt chạy bằng động cơ AC 125 watt. Bằng sáng chế đầu tiên của Tesla là cho động cơ hai
            pha; các hộ gia đình hiện đại ngày nay sử dụng nhiều động cơ điện một pha nhỏ. Các động cơ
            3 pha lớn hơn, hiệu suất cao hơn rất phổ biến trong các ứng dụng công nghiệp.
          </p>
          <p>
            <strong>Mikhail Osipovich Dolivo-Dobrovolsky</strong>, một kỹ sư người Nga làm thợ điện chính
            cho công ty AEG của Đức, đã chế tạo động cơ không đồng bộ ba pha đầu tiên vào năm 1889.
          </p>

          <figure className={styles.figure}>
            <img src="/images/tesla-induction-motor.jpg" alt="Mô hình động cơ không đồng bộ của Tesla" />
            <figcaption>
              Hình 2: Mô hình động cơ không đồng bộ với roto mạch ngắn của Tesla – Bảo tàng Nikola Tesla,
              Belgrade, Serbia.
            </figcaption>
          </figure>

          {/* ===== Dòng thời gian phát triển động cơ cảm ứng ===== */}
          <h4 className={styles.sectionHeading}>Thời gian phát triển động cơ cảm ứng</h4>

          <ol className={styles.timeline}>
            {TIMELINE.map((item) => (
              <li key={item.period} className={styles.timelineItem}>
                <p className={styles.timelinePeriod}>{item.period}</p>
                <p className={styles.timelineText}>{item.text}</p>
              </li>
            ))}
          </ol>
        </article>

        <div className={styles.footerNav}>
          <Link to="/ky-thuat" className="btn">← Quay lại trang Kỹ thuật – Công nghệ</Link>
        </div>
      </div>
    </>
  );
}