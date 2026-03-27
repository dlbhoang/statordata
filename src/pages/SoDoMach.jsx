import Subnav from '../components/Subnav';
import styles from './SoDoMach.module.css';

const DIAGRAMS = [
  { id:1, title:'Mạch nhánh song song A=1', poles:'2P', slots:'36', phase:'3 pha', branches:1, desc:'Một nhánh song song, toàn bộ dây quấn nối tiếp nhau.' },
  { id:2, title:'Mạch nhánh song song A=2', poles:'4P', slots:'36', phase:'3 pha', branches:2, desc:'Hai nhánh song song, dây quấn chia làm 2 nhóm đối xứng.' },
  { id:3, title:'Mạch nhánh song song A=4', poles:'4P', slots:'48', phase:'3 pha', branches:4, desc:'Bốn nhánh song song, phù hợp cho động cơ công suất lớn.' },
  { id:4, title:'Mạch nhánh A=1 (1 pha)', poles:'2P', slots:'24', phase:'1 pha', branches:1, desc:'Dây quấn chính 1 pha, một nhánh, dây quấn đồng tâm.' },
];

function MachSVG({ branches, slots = 36 }) {
  const cx = 100, cy = 100, r = 70, rInner = 40;
  const slotCount = slots;
  const points = Array.from({ length: slotCount }, (_, i) => {
    const a = (i / slotCount) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), a };
  });
  const colors = ['#1a5cd8', '#e53935', '#00b37a', '#f0a500'];
  const groups = Math.round(slotCount / (3 * branches));
  return (
    <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: 200 }}>
      <circle cx={cx} cy={cy} r={r + 8} fill="#f0f4fb" stroke="#dde4f0" strokeWidth="1"/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#b0c4f0" strokeWidth="1" strokeDasharray="3 2"/>
      <circle cx={cx} cy={cy} r={rInner} fill="#e8f0fe" stroke="#1a5cd8" strokeWidth="1.5"/>
      <circle cx={cx} cy={cy} r={8} fill="#0a1628"/>
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="7" fill="white" fontFamily="Montserrat,sans-serif" fontWeight="700">ROTOR</text>
      {points.map((p, i) => {
        const phase = Math.floor(i / (slotCount / 3)) % 3;
        const br = Math.floor(i / groups) % branches;
        const clr = branches === 1 ? colors[phase] : colors[phase * branches + br] || colors[phase];
        const ax = cx + (rInner + 2) * Math.cos(p.a), ay = cy + (rInner + 2) * Math.sin(p.a);
        const bx = cx + (r - 2) * Math.cos(p.a), by = cy + (r - 2) * Math.sin(p.a);
        return <line key={i} x1={ax} y1={ay} x2={bx} y2={by} stroke={clr} strokeWidth="2.5" strokeLinecap="round" opacity="0.85"/>;
      })}
      <text x={cx} y={cy - rInner - 6} textAnchor="middle" fontSize="7" fill="#1249a0" fontFamily="Montserrat,sans-serif">STATOR</text>
    </svg>
  );
}

export default function SoDoMach() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 36 }}>
        <span className="sec-label">Sơ đồ mạch</span>
        <h2 className="sec-title"><span className="accent">Sơ đồ mạch nhánh</span><br />song song (A)</h2>
        <p className="sec-desc">Các sơ đồ mạch nhánh song song trong dây quấn stator động cơ. Số nhánh song song A ảnh hưởng trực tiếp đến dòng điện trong từng nhánh và cấu trúc kết nối dây quấn.</p>

        <div className={styles.grid}>
          {DIAGRAMS.map(d => (
            <div key={d.id} className={styles.diagCard}>
              <div className={styles.diagHead}>
                <h4>{d.title}</h4>
                <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
                  <span className="tag blue">{d.phase}</span>
                  <span className="tag cyan">{d.poles}</span>
                  <span className="tag gold">Z={d.slots}</span>
                </div>
              </div>
              <div className={styles.diagViz}>
                <MachSVG branches={d.branches} slots={+d.slots} />
              </div>
              <div className={styles.diagFoot}>
                <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>{d.desc}</div>
                <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
                  <button className="btn btn-primary" style={{ fontSize: 11.5, padding: '5px 14px' }}>Xem chi tiết</button>
                  <button className="btn btn-outline" style={{ fontSize: 11.5, padding: '5px 14px' }}>📥 PDF</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LEGEND */}
        <div className={styles.legend}>
          <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>Chú thích màu sắc trong sơ đồ</h4>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[['#1a5cd8','Pha A (U)'],['#e53935','Pha B (V)'],['#00b37a','Pha C (W)'],['#f0a500','Dây quấn phụ (1 pha)']].map(([color, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 14, height: 14, borderRadius: 3, background: color }} />
                <span style={{ fontSize: 12.5, color: 'var(--text2)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
