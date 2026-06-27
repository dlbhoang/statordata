import { Link } from 'react-router-dom';
import Subnav from '../components/Subnav';

export default function LichSu() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 36 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          <div>
            <span className="sec-label">Kỹ thuật – Lịch sử</span>
            <h2 className="sec-title">Lịch sử phát triển động cơ cảm ứng</h2>
          </div>
          <Link to="/ky-thuat" className="btn btn-outline">← Quay về Kỹ thuật</Link>
        </div>

        <div style={{ marginBottom: 32, padding: 20, background: 'var(--card)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            Đây là trang chuyên về diễn biến phát triển của động cơ cảm ứng từ những bước đầu tiên đến thời kỳ hiện đại.
            Nội dung được tách riêng để bạn dễ theo dõi từng giai đoạn và từng quốc gia đóng góp vào sự phát triển của công nghệ này.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ marginBottom: 0, padding: 16, background: '#fff9f0', borderLeft: '4px solid #ff8c42', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1888: Phát minh của Nikola Tesla</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>Nikola Tesla (gốc Serbia, làm việc tại Mỹ) phát minh động cơ cảm ứng xoay chiều (AC induction motor).</p>
          </div>

          <div style={{ padding: 16, background: '#f0f4fb', borderLeft: '4px solid var(--blue2)', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1889: Động cơ 3 pha đầu tiên</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>Mikhail Osipovich Dolivo-Dobrovolsky (kỹ sư Nga, AEG Đức) chế tạo động cơ không đồng bộ ba pha đầu tiên.</p>
          </div>

          <div style={{ padding: 16, background: '#f0f4fb', borderLeft: '4px solid var(--blue2)', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1890–1914: Phát triển ở Châu Âu</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>Siemens, AEG (Đức), các hãng ở Anh, Pháp, Ý, Thụy Điển bắt đầu sản xuất motor điện và máy phát xoay chiều hàng loạt.</p>
          </div>

          <div style={{ padding: 16, background: '#f0f4fb', borderLeft: '4px solid var(--blue2)', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1918–1939: Công nghiệp hóa mạnh</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>Siemens (Đức), AEG, Brown Boveri (Thụy Sĩ), ASEA (Thụy Điển) phát triển hàng loạt mẫu motor công suất lớn.</p>
          </div>

          <div style={{ padding: 16, background: '#e8f5e9', borderLeft: '4px solid #4caf50', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1945–1970: Thời kỳ vàng</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>Cải tiến các dòng motor hiệu suất cao, motor 3 pha công nghiệp chuẩn IEC. Các nước mạnh nhất: Đức, Thụy Điển, Ý, Pháp, Anh.</p>
          </div>

          <div style={{ padding: 16, background: '#e8f5e9', borderLeft: '4px solid #4caf50', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1970–Hiện nay: Tiết kiệm năng lượng</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>Motor tiết kiệm năng lượng (IE2, IE3, IE4). Các tập đoàn lớn: Siemens, ABB, WEG (Châu Âu–Brazil), Leroy Somer (Pháp).</p>
          </div>

          <div style={{ padding: 16, background: '#fce4ec', borderLeft: '4px solid #e91e63', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1920–1930: Liên Xô – Phát triển sớm nhất</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>Sau Cách mạng Tháng Mười (1917), Liên Xô bắt đầu chương trình điện khí hóa toàn quốc. Các nhà máy: Elektrosila (Leningrad), Ural Electroapparat, Kharkov Electromotor Plant. Motor kiểu A, AO, AO2, 4A, 4AM trở thành chuẩn mực được xuất khẩu.</p>
          </div>

          <div style={{ padding: 16, background: '#fff3e0', borderLeft: '4px solid #ff9800', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1953–1960: Trung Quốc – Tiếp nhận từ Liên Xô</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>Sau thành lập CHND Trung Hoa (1949), Trung Quốc nhận viện trợ kỹ thuật. 1953–1957 xây dựng nhà máy như Harbin, Shanghai, Beijing. Đến 1960 tự thiết kế được motor kiểu Y, Y2.</p>
          </div>

          <div style={{ padding: 16, background: '#d4e7f5', borderLeft: '4px solid #1976d2', borderRadius: 4 }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>1958–1986: Việt Nam – Phát triển mạnh sau 1975</h4>
            <p style={{ fontSize: 13, color: 'var(--text2)', margin: 0 }}>
              • <strong>1958–1975:</strong> Nhận viện trợ Liên Xô và Trung Quốc, chủ yếu lắp ráp, sửa chữa.<br />
              • <strong>1975–1986:</strong> Bắt đầu tự tính toán, nội địa hóa và sản xuất hàng loạt tại các nhà máy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
