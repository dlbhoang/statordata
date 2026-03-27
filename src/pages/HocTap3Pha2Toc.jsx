import Subnav from '../components/Subnav';

export default function HocTap3Pha2Toc() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Học tập</span>
        <h2 className="sec-title"><span className="accent">Hướng dẫn</span> Dây quấn<br />3 pha, 2 tốc độ (Dahlander)</h2>
        <p className="sec-desc">Phương pháp Dahlander cho phép thay đổi tốc độ động cơ 1:2 bằng cách đổi cách đấu nối cuộn dây stator.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
          {[
            { title:'Nguyên lý Dahlander', icon:'🔄',
              items:['Một bộ cuộn dây stator dùng cho cả hai tốc độ.','Tốc độ thấp: đấu tam giác (Δ) — số cực 2P₂.','Tốc độ cao: đấu sao kép (YY) — số cực P₁ = P₂/2.','Tỉ lệ tốc độ: n₁/n₂ = P₂/P₁ = 1:2.'] },
            { title:'Cách đấu dây', icon:'🔗',
              items:['Tốc độ thấp (Δ): đấu 3 đầu U1-V1-W1 vào lưới, để hở U2-V2-W2.','Tốc độ cao (YY): đấu U2-V2-W2 vào lưới, nối chập U1-V1-W1.','Không chuyển tốc khi động cơ đang quay — phải dừng trước.','Dùng contactor chuyển mạch có khóa liên động.'] },
            { title:'Thông số so sánh', icon:'📊',
              items:['Công suất tốc độ cao ≈ 2 × công suất tốc độ thấp.','Mômen tốc độ thấp ≈ mômen tốc độ cao (không đổi mômen).','Hiệu suất tốc độ cao thường cao hơn tốc độ thấp.','Ứng dụng: máy bơm, quạt công nghiệp, máy nén khí.'] },
            { title:'Sơ đồ khai triển', icon:'📐',
              items:['Bước dây quấn y₁ = τ (bước đủ) hoặc y₁ < τ (bước ngắn).','Với Dahlander: thường chọn y₁ = 2τ/3 để giảm sóng hài.','Số bối dây mỗi cực: nb = q (số rãnh/pha/cực).','Kiểm tra cực tính các bối dây khi đổi cách đấu.'] },
          ].map(c => (
            <div className="card" key={c.title}>
              <div className="card-header">
                <span style={{fontSize:22}}>{c.icon}</span>
                <h4>{c.title}</h4>
              </div>
              <div className="card-body">
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
                  {c.items.map(item => (
                    <li key={item} style={{fontSize:12.5,color:'var(--text2)',paddingLeft:16,position:'relative',lineHeight:1.6}}>
                      <span style={{position:'absolute',left:0,color:'var(--blue2)',fontWeight:700}}>›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
