import Subnav from '../components/Subnav';
import styles from './SoDo.module.css';

const DIAGRAMS = [
  { title:'Mạch nhánh song song A=1', poles:2, slots:24, phases:3, desc:'Toàn bộ các bối dây của một pha mắc nối tiếp thành một nhánh song song. Phù hợp với động cơ nhỏ, điện áp thấp.' },
  { title:'Mạch nhánh song song A=2', poles:4, slots:36, phases:3, desc:'Mỗi pha chia làm 2 nhánh song song. Điện trở mỗi nhánh tăng gấp đôi so với A=1, dòng điện mỗi nhánh giảm một nửa.' },
  { title:'Mạch nhánh song song A=4', poles:4, slots:48, phases:3, desc:'Mỗi pha chia làm 4 nhánh song song. Dùng cho động cơ công suất lớn, điện áp cao để giảm số vòng dây mỗi nhánh.' },
  { title:'Sơ đồ khai triển 1 lớp', poles:4, slots:36, phases:3, desc:'Dây quấn một lớp: mỗi rãnh chỉ chứa một cạnh tác dụng của một pha. Đơn giản, dễ chế tạo, phù hợp động cơ nhỏ.' },
  { title:'Sơ đồ khai triển 2 lớp', poles:4, slots:36, phases:3, desc:'Dây quấn hai lớp: mỗi rãnh chứa hai cạnh tác dụng của hai pha khác nhau. Bước ngắn, sóng hài thấp hơn, hiệu suất cao hơn.' },
  { title:'Sơ đồ dây quấn sin', poles:2, slots:24, phases:1, desc:'Dây quấn sin phân bổ số vòng theo hàm sin, giảm thiểu sóng hài, cải thiện dạng sóng sức điện động.' },
];

function DiagramSVG({ slots = 36, phases = 3 }) {
  const W = 340, H = 80, rw = W / slots;
  const colors = ['#1a5cd8','#e53935','#2e7d32'];
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{display:'block',borderRadius:6,background:'#f8f9fc'}}>
      {Array.from({length:slots}).map((_, i) => {
        const phase = phases === 1 ? 0 : i % (phases * 2) < phases ? i % phases : phases - 1 - (i % phases);
        const fill = colors[Math.min(phase, colors.length-1)];
        const isTop = Math.floor(i / (slots / 4)) % 2 === 0;
        return (
          <g key={i}>
            <rect x={i*rw+1} y={8} width={rw-2} height={H-16} rx={2} fill="#e8edf5" />
            <rect x={i*rw+2} y={isTop?10:H/2} width={rw-4} height={H/2-8} rx={1} fill={fill} opacity={.8} />
            {i % Math.max(1,Math.floor(slots/8)) === 0 && (
              <text x={i*rw+rw/2} y={H-1} textAnchor="middle" fontSize="7" fill="#8da0c0">{i+1}</text>
            )}
          </g>
        );
      })}
      <text x={4} y={6} fontSize="8" fill="#1249a0" fontWeight="bold">Z={slots}</text>
    </svg>
  );
}

export default function SoDo() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Sơ đồ mạch nhánh</span>
        <h2 className="sec-title">Các sơ đồ <span className="accent">mạch nhánh song song</span><br />trong dây quấn stator</h2>
        <p className="sec-desc">Thư viện sơ đồ khai triển và mạch nhánh song song dây quấn stator động cơ điện. Mỗi sơ đồ được minh họa trực quan và mô tả ứng dụng thực tế.</p>

        <div className={styles.grid}>
          {DIAGRAMS.map(d => (
            <div className="card" key={d.id}>
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                <h4>{d.title}</h4>
              </div>
              <div className="card-body">
                <DiagramSVG slots={d.slots} phases={d.phases} />
                <div style={{marginTop:10,display:'flex',gap:6,flexWrap:'wrap'}}>
                  <span className="tag blue">{d.poles}P</span>
                  <span className="tag cyan">Z={d.slots}</span>
                  <span className="tag green">{d.phases} pha</span>
                </div>
                <p style={{marginTop:8,fontSize:12,color:'var(--text2)',lineHeight:1.65}}>{d.desc}</p>
                <button className="btn btn-outline" style={{marginTop:10,fontSize:12,padding:'6px 14px'}}>Xem chi tiết</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
