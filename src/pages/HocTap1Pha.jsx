import Subnav from '../components/Subnav';

export default function HocTap1Pha() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Học tập</span>
        <h2 className="sec-title"><span className="accent">Hướng dẫn</span> Dây quấn<br />Động cơ 1 pha cảm ứng</h2>
        <p className="sec-desc">Nguyên lý và thiết kế dây quấn động cơ 1 pha: dây quấn chính, dây quấn phụ, và tụ điện khởi động.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20}}>
          {[
            { title:'Dây quấn chính (Main Winding)', icon:'🔵',color:'var(--blue2)',
              items:['Chiếm 2/3 số rãnh stator.','Đặt trong rãnh theo trục chính.','Số vòng dây N1 tính theo điện áp định mức.','Đường kính dây chọn theo mật độ J = 3.5÷4.5 A/mm².'] },
            { title:'Dây quấn phụ (Aux Winding)', icon:'🔴',color:'var(--red)',
              items:['Chiếm 1/3 số rãnh còn lại.','Lệch 90° điện so với dây quấn chính.','Số vòng N2 ≈ 1.3 × N1 để tạo từ trường quay.','Dây nhỏ hơn vì chỉ dùng khi khởi động.'] },
            { title:'Tụ điện khởi động', icon:'⚡',color:'var(--gold)',
              items:['Tụ điện tạo góc lệch pha giữa dây chính và phụ.','Tụ khởi động: 100÷300 µF (dùng ngắn hạn).','Tụ vận hành: 10÷50 µF (chạy liên tục).','Chọn tụ theo: C = I₂ / (2πf × U₂).'] },
            { title:'Sơ đồ đấu dây', icon:'🔗',color:'var(--green)',
              items:['Dây quấn chính đấu trực tiếp vào lưới 220V.','Dây quấn phụ nối tiếp với tụ điện, đấu song song với dây chính.','Sau khởi động, tụ khởi động được cắt ra bởi công tắc ly tâm.','Tụ vận hành (nếu có) giữ để cải thiện hệ số công suất.'] },
          ].map(c => (
            <div className="card" key={c.title}>
              <div className="card-header">
                <span style={{fontSize:22}}>{c.icon}</span>
                <h4 style={{color:c.color}}>{c.title}</h4>
              </div>
              <div className="card-body">
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
                  {c.items.map(item => (
                    <li key={item} style={{fontSize:12.5,color:'var(--text2)',paddingLeft:16,position:'relative',lineHeight:1.6}}>
                      <span style={{position:'absolute',left:0,color:c.color,fontWeight:700}}>›</span>{item}
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
