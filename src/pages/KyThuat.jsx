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
        <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 0 }}>Lịch sử phát triển động cơ cảm ứng</h3>
          <a href="/ky-thuat/lich-su" className="btn btn-outline">Xem toàn bộ lịch sử</a>
        </div>
        <div style={{ marginBottom: 48, padding: 20, background: 'var(--card)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            Các giai đoạn phát triển của động cơ cảm ứng từ thế kỷ 19 đến hiện nay đã được tách riêng thành một trang riêng để dễ theo dõi và chia sẻ.
          </p>
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
