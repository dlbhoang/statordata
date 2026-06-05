import Subnav from '../components/Subnav';
import styles from './KyThuat.module.css';

export default function KyThuat() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Kỹ thuật – Công nghệ</span>
        <h2 className="sec-title">Nikola <span className="accent">Tesla</span></h2>
        
        {/* Thông tin Tesla */}
        <div style={{marginBottom:48,padding:24,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,alignItems:'center'}}>
            <div>
              <h3 style={{fontSize:18,fontWeight:700,marginBottom:16}}>Nhà phát minh vĩ đại</h3>
              <div style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
                <p><strong>Nikola Tesla</strong> (10/7/1856 - 7/1/1943) là một nhà phát minh, kỹ sư điện và kỹ sư cơ khí người Mỹ gốc Serbia.</p>
                <p style={{marginTop:12}}>Tất cả các thiết kế của ông - khoảng 300 trong số đó được cấp bằng sáng chế - đều hướng tới tương lai và đó là lý do mọi người gọi ông là <strong>"nhà phát minh ra thế kỷ 20"</strong>.</p>
              </div>
            </div>
            <div style={{background:'#f0f4fb',padding:20,borderRadius:'var(--radius)'}}>
              <table style={{fontSize:12,width:'100%'}}>
                <tbody>
                  <tr style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'8px 0',fontWeight:600,color:'var(--navy)'}}>Sinh</td>
                    <td style={{padding:'8px 0',textAlign:'right'}}>13/9/1856, Smiljan (Croatia)</td>
                  </tr>
                  <tr style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'8px 0',fontWeight:600,color:'var(--navy)'}}>Mất</td>
                    <td style={{padding:'8px 0',textAlign:'right'}}>7/1/1943 (86 tuổi), New York</td>
                  </tr>
                  <tr style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'8px 0',fontWeight:600,color:'var(--navy)'}}>Quốc tịch</td>
                    <td style={{padding:'8px 0',textAlign:'right'}}>Áo, Mỹ</td>
                  </tr>
                  <tr>
                    <td style={{padding:'8px 0',fontWeight:600,color:'var(--navy)'}}>Lĩnh vực</td>
                    <td style={{padding:'8px 0',textAlign:'right'}}>Điện, Cơ khí</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Phát minh nổi bật */}
        <h3 style={{fontSize:18,fontWeight:700,marginBottom:20}}>Những phát minh nổi bật</h3>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginBottom:48}}>
          <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)'}}>
            <h4 style={{color:'var(--blue2)',fontWeight:700,marginBottom:12}}>1. Cuộn dây Tesla</h4>
            <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
              Máy biến áp cộng hưởng bao gồm hai cuộn dây phản xạ năng lượng qua lại, tạo ra dòng điện xoay chiều có tần số và điện áp cực cao. Được sử dụng cho thí nghiệm điện chiếu sáng, điện xung trị liệu và truyền tải điện năng không dây.
            </p>
          </div>
          <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)'}}>
            <h4 style={{color:'var(--blue2)',fontWeight:700,marginBottom:12}}>2. Động cơ cảm ứng (AC)</h4>
            <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
              Phát triển năm 1887, chạy bằng dòng điện xoay chiều. Sử dụng điện đa pha, tạo ra từ trường để làm quay động cơ. Được cấp bằng sáng chế vào tháng 5/1888.
            </p>
          </div>
        </div>

        {/* Lịch sử phát triển */}
        <h3 style={{fontSize:18,fontWeight:700,marginBottom:20}}>Lịch sử phát triển động cơ cảm ứng</h3>
        <div style={{marginBottom:48}}>
          <div style={{marginBottom:16,padding:16,background:'#fff9f0',borderLeft:'4px solid #ff8c42',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1888: Phát minh của Nikola Tesla</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>Nikola Tesla (gốc Serbia, làm việc tại Mỹ) phát minh động cơ cảm ứng xoay chiều (AC induction motor).</p>
          </div>
          
          <div style={{marginBottom:16,padding:16,background:'#f0f4fb',borderLeft:'4px solid var(--blue2)',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1889: Động cơ 3 pha đầu tiên</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>Mikhail Osipovich Dolivo-Dobrovolsky (kỹ sư Nga, AEG Đức) chế tạo động cơ không đồng bộ ba pha đầu tiên.</p>
          </div>

          <div style={{marginBottom:16,padding:16,background:'#f0f4fb',borderLeft:'4px solid var(--blue2)',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1890–1914: Phát triển ở Châu Âu</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>Siemens, AEG (Đức), các hãng ở Anh, Pháp, Ý, Thụy Điển bắt đầu sản xuất motor điện và máy phát xoay chiều hàng loạt.</p>
          </div>

          <div style={{marginBottom:16,padding:16,background:'#f0f4fb',borderLeft:'4px solid var(--blue2)',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1918–1939: Công nghiệp hóa mạnh</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>Siemens (Đức), AEG, Brown Boveri (Thụy Sĩ), ASEA (Thụy Điển) phát triển hàng loạt mẫu motor công suất lớn.</p>
          </div>

          <div style={{marginBottom:16,padding:16,background:'#e8f5e9',borderLeft:'4px solid #4caf50',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1945–1970: Thời kỳ vàng</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>Cải tiến các dòng motor hiệu suất cao, motor 3 pha công nghiệp chuẩn IEC. Các nước mạnh nhất: Đức, Thụy Điển, Ý, Pháp, Anh.</p>
          </div>

          <div style={{marginBottom:16,padding:16,background:'#e8f5e9',borderLeft:'4px solid #4caf50',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1970–Hiện nay: Tiết kiệm năng lượng</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>Motor tiết kiệm năng lượng (IE2, IE3, IE4). Các tập đoàn lớn: Siemens, ABB, WEG (Châu Âu–Brazil), Leroy Somer (Pháp).</p>
          </div>

          <div style={{marginBottom:16,padding:16,background:'#fce4ec',borderLeft:'4px solid #e91e63',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1920–1930: Liên Xô – Phát triển sớm nhất</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>Sau Cách mạng Tháng Mười (1917), Liên Xô bắt đầu chương trình điện khí hóa toàn quốc. Các nhà máy: Elektrosila (Leningrad), Ural Electroapparat, Kharkov Electromotor Plant. Motor kiểu A, AO, AO2, 4A, 4AM trở thành chuẩn mực được xuất khẩu.</p>
          </div>

          <div style={{marginBottom:16,padding:16,background:'#fff3e0',borderLeft:'4px solid #ff9800',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1953–1960: Trung Quốc – Tiếp nhận từ Liên Xô</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>Sau thành lập CHND Trung Hoa (1949), Trung Quốc nhận viện trợ kỹ thuật. 1953–1957 xây dựng nhà máy như Harbin, Shanghai, Beijing. Đến 1960 tự thiết kế được motor kiểu Y, Y2.</p>
          </div>

          <div style={{padding:16,background:'#d4e7f5',borderLeft:'4px solid #1976d2',borderRadius:4}}>
            <h4 style={{fontWeight:700,marginBottom:8}}>1958–1986: Việt Nam – Phát triển mạnh sau 1975</h4>
            <p style={{fontSize:13,color:'var(--text2)'}}>
              • <strong>1958–1975:</strong> Nhận viện trợ Liên Xô và Trung Quốc, chủ yếu lắp ráp, sửa chữa.<br/>
              • <strong>1975–1986:</strong> Bắt đầu tự tính toán, nội địa hóa và sản xuất hàng loạt tại các nhà máy.
            </p>
          </div>
        </div>

        <h3 style={{fontSize:18,fontWeight:700,marginBottom:20}}>Tần số chuẩn</h3>
        <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)'}}>
          <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
            Trong giai đoạn phát triển tại Westinghouse, dòng điện xoay chiều 133 Hz được sử dụng để vận hành động cơ. Dòng điện được giảm xuống còn <strong>60 Hz</strong> do tốc độ động cơ quá nhanh. Đây là lý do tại sao <strong>tần số 60 Hz được sử dụng ở Hoa Kỳ và miền Tây Nhật Bản</strong> ngày nay, trong khi <strong>50 Hz là chuẩn tại Châu Âu, Ấn Độ, Trung Quốc, Việt Nam</strong>.
          </p>
        </div>
      </div>
    </>
  );
}
