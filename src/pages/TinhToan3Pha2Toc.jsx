import Subnav from '../components/Subnav';

export default function TinhToan3Pha2Toc() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Tính toán</span>
        <h2 className="sec-title"><span className="accent">Tính toán dữ liệu</span><br />Dây quấn 3 pha, 2 tốc độ</h2>
        <p className="sec-desc">Thiết kế dây quấn động cơ 2 tốc độ theo phương pháp Dahlander — tỉ lệ tốc độ 1:2.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
          {['Tốc độ thấp (p = 4)', 'Tốc độ cao (p = 2)'].map((title, i) => (
            <div className="card" key={i}>
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:i===0?'var(--blue2)':'var(--red)'}}/>
                <h4>{title}</h4>
                <span className={`tag ${i===0?'blue':'red'}`} style={{marginLeft:'auto'}}>{i===0?'1500 RPM':'3000 RPM'}</span>
              </div>
              <div className="card-body">
                {[['Tốc độ đồng bộ',i===0?'1500 RPM':'3000 RPM'],['Số cực 2P',i===0?'4P':'2P'],['Đấu dây',i===0?'Tam giác Δ':'Sao kép YY'],['Công suất',i===0?'P1':'2×P1'],].map(([l,v])=>(
                  <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'7px 0',borderBottom:'1px solid #f0f4fb',fontSize:12.5}}>
                    <span style={{color:'var(--text2)'}}>{l}</span>
                    <strong style={{color:'var(--navy)'}}>{v}</strong>
                  </div>
                ))}
                <div style={{marginTop:12,padding:10,background:'#f8f9fc',borderRadius:8,fontSize:12,color:'var(--text2)'}}>
                  Phương pháp Dahlander cho phép chuyển đổi tốc độ bằng cách thay đổi cách đấu dây quấn stator, không cần cuộn dây riêng biệt.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
