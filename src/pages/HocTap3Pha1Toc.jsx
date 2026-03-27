import { useState } from 'react';
import Subnav from '../components/Subnav';
import styles from './HocTap.module.css';

const STEPS = [
  {
    step:'01', title:'Xác định số cực 2P',
    content:`Số cực của động cơ được xác định theo tốc độ đồng bộ và tần số lưới điện:\n\n2P = (120 × f) / n₁\n\nVí dụ: f = 50 Hz, n₁ = 1500 RPM → 2P = (120 × 50) / 1500 = 4 cực`,
    formula:'2P = (120 × f) / n₁',
  },
  {
    step:'02', title:'Tính số rãnh/pha/cực (q)',
    content:`q = Z / (m × 2P)\n\nTrong đó:\n- Z: tổng số rãnh stator\n- m: số pha (m=3 cho động cơ 3 pha)\n- 2P: số cực\n\nVí dụ: Z=36, m=3, 2P=4 → q = 36/(3×4) = 3`,
    formula:'q = Z / (m × 2P)',
  },
  {
    step:'03', title:'Tính bước cực τ',
    content:`Bước cực τ là khoảng cách giữa hai cực liên tiếp tính bằng số rãnh:\n\nτ = Z / (2P)\n\nVí dụ: Z=36, 2P=4 → τ = 36/4 = 9 rãnh`,
    formula:'τ = Z / 2P',
  },
  {
    step:'04', title:'Hệ số dây quấn kw',
    content:`kw = kp × kd\n\nHệ số phân bố: kd = sin(π/6) / [q × sin(π/6q)]\nHệ số bước ngắn: kp = sin(y₁/τ × π/2)\n\nVới dây quấn bước đủ: kp = 1`,
    formula:'kw = kp × kd',
  },
  {
    step:'05', title:'Số vòng dây mỗi pha',
    content:`N1 = U / (4.44 × f × Φmax × kw)\n\nTrong đó Φmax được tính từ mật độ từ cảm khe hở không khí Bδ và tiết diện cực từ.\n\nSố vòng mỗi bối: Nb = N1 / (p × q)`,
    formula:'N1 = U / (4.44 × f × Φmax × kw)',
  },
  {
    step:'06', title:'Đường kính dây đồng',
    content:`d = √(4I / π × J)\n\nVới mật độ dòng điện thường chọn:\n- J = 3.5 ÷ 4.5 A/mm² cho dây quấn liên tục\n- J = 4.5 ÷ 6.5 A/mm² cho dây quấn ngắn hạn\n\nSau khi tính d, tra bảng tiêu chuẩn để chọn cỡ dây gần nhất.`,
    formula:'d = √(4I / π×J)',
  },
];

export default function HocTap3Pha1Toc() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Học tập</span>
        <h2 className="sec-title"><span className="accent">Hướng dẫn</span> từng bước<br />Dây quấn 3 pha, 1 tốc độ</h2>
        <p className="sec-desc">Học cách tính toán và thiết kế dây quấn stator động cơ 3 pha 1 tốc độ theo trình tự chuyên nghiệp.</p>

        <div className={styles.layout}>
          {/* Sidebar steps */}
          <div className={styles.sidebar}>
            {STEPS.map((s, i) => (
              <button key={i}
                className={`${styles.stepBtn} ${i === active ? styles.stepActive : ''}`}
                onClick={() => setActive(i)}>
                <span className={styles.stepNum}>{s.step}</span>
                <span className={styles.stepTitle}>{s.title}</span>
                {i === active && <span style={{marginLeft:'auto',color:'var(--cyan)',fontSize:16}}>›</span>}
              </button>
            ))}
          </div>

          {/* Content */}
          <div>
            <div className="card">
              <div className="card-header">
                <span className={styles.stepNumBig}>{step.step}</span>
                <h4 style={{fontSize:16}}>{step.title}</h4>
                <span className="tag blue" style={{marginLeft:'auto'}}>Bước {active+1}/{STEPS.length}</span>
              </div>
              <div className="card-body">
                <div className={styles.formulaBox}>
                  <span style={{fontSize:11,fontWeight:700,color:'var(--blue2)',textTransform:'uppercase',letterSpacing:'.8px'}}>Công thức</span>
                  <div className={styles.formula}>{step.formula}</div>
                </div>
                <div className={styles.content}>
                  {step.content.split('\n').map((line, i) =>
                    line.trim() === '' ? <br key={i}/> :
                    line.startsWith('-') ? <li key={i} style={{marginLeft:18,color:'var(--text2)',fontSize:13}}>{line.slice(1).trim()}</li> :
                    <p key={i} style={{fontSize:13,color:'var(--text2)',lineHeight:1.75}}>{line}</p>
                  )}
                </div>
              </div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:14,gap:10}}>
              <button className="btn btn-outline" style={{opacity:active===0?.4:1}} disabled={active===0} onClick={()=>setActive(a=>a-1)}>← Bước trước</button>
              <div style={{fontSize:12,color:'var(--text2)',alignSelf:'center'}}>{active+1} / {STEPS.length}</div>
              <button className="btn btn-primary" style={{opacity:active===STEPS.length-1?.4:1}} disabled={active===STEPS.length-1} onClick={()=>setActive(a=>a+1)}>Bước tiếp →</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
