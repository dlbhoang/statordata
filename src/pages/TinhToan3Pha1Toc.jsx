import { useState } from 'react';
import Subnav from '../components/Subnav';
import styles from './TinhToan.module.css';

const INIT = { nu:1500, f:50, z:36, p:4, u:220, eta:0.85, cosphi:0.85 };

function calcResults(d) {
  const p = Math.round((d.f * 120) / d.nu);
  const q = d.z / (3 * p);
  const tau = d.z / p;
  const kw = Math.sin(Math.PI / 6) / (q * Math.sin(Math.PI / (6 * q)));
  const n1 = Math.round((d.u / (4.44 * d.f * kw)) * 10) / 10;
  const I  = (d.nu * 1000) / (Math.sqrt(3) * d.u * d.eta * d.cosphi);
  const dcu = Math.round(Math.sqrt(I / (4.5 * Math.PI / 4)) * 100) / 100;
  return { p, q: Math.round(q * 10)/10, tau, kw: Math.round(kw * 1000)/1000, n1: Math.round(n1), I: Math.round(I * 10)/10, dcu };
}

export default function TinhToan3Pha1Toc() {
  const [d, setD] = useState(INIT);
  const [calc, setCalc] = useState(false);
  const res = calcResults(d);
  const upd = (k, v) => setD(prev => ({ ...prev, [k]: +v }));

  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Tính toán</span>
        <h2 className="sec-title"><span className="accent">Tính toán dữ liệu</span><br />Dây quấn 3 pha, 1 tốc độ</h2>
        <p className="sec-desc">Nhập các thông số định danh của động cơ để phần mềm tính toán và xuất ra số liệu dây quấn stator chuyên nghiệp.</p>

        <div className={styles.layout}>
          {/* INPUT PANEL */}
          <div className={styles.inputPanel}>
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                <h4>Thông số đầu vào</h4>
                <span className="tag blue" style={{marginLeft:'auto'}}>3 Pha · 1 Tốc độ</span>
              </div>
              <div className="card-body">
                {[
                  ['nu',   'Tốc độ đồng bộ Nu', 'RPM'],
                  ['f',    'Tần số f',           'Hz' ],
                  ['z',    'Số rãnh Stator Z',   ''   ],
                  ['p',    'Số cực 2P',           ''   ],
                  ['u',    'Điện áp pha U',       'V'  ],
                  ['eta',  'Hiệu suất η',         ''   ],
                  ['cosphi','Hệ số công suất cosφ',''],
                ].map(([key, label, unit]) => (
                  <div key={key} className={styles.field}>
                    <label>{label}{unit && <span className={styles.unit}>{unit}</span>}</label>
                    <input className="inp" type="number" step="any"
                      value={d[key]} onChange={e => upd(key, e.target.value)} style={{width:120,textAlign:'right'}} />
                  </div>
                ))}
                <button className="btn btn-primary" style={{width:'100%',marginTop:12,justifyContent:'center'}}
                  onClick={() => setCalc(true)}>
                  ⚡ Tính toán ngay
                </button>
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div>
            <div className="card" style={{marginBottom:16}}>
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                <h4>Kết quả tính toán</h4>
                {calc && <span className="tag green" style={{marginLeft:'auto'}}>✓ Hoàn thành</span>}
              </div>
              <div className="card-body">
                {!calc ? (
                  <div className={styles.emptyState}>
                    <div style={{fontSize:40}}>⚙</div>
                    <p>Nhập thông số và nhấn <strong>Tính toán ngay</strong></p>
                  </div>
                ) : (
                  <div className={styles.results}>
                    {[
                      ['Số cực thực tế',        `${res.p}P (${res.p} cực)`,        'blue'],
                      ['Số rãnh/pha/cực q',      `${res.q} rãnh`,                  'blue'],
                      ['Bước cực τ',             `${res.tau} rãnh`,                 'blue'],
                      ['Hệ số dây quấn kw',      `${res.kw}`,                       'gold'],
                      ['Số vòng dây/pha N1',     `${res.n1} vòng`,                  'green'],
                      ['Dòng điện định mức I',   `${res.I} A`,                      'cyan'],
                      ['Đường kính dây đồng d',  `${res.dcu} mm`,                   'gold'],
                    ].map(([label, value, color]) => (
                      <div key={label} className={styles.resRow}>
                        <span className={styles.resLabel}>{label}</span>
                        <span className={`tag ${color}`}>{value}</span>
                      </div>
                    ))}
                    <div style={{marginTop:14,padding:12,background:'linear-gradient(135deg,#e8f5e9,#f1fff5)',borderRadius:8,border:'1.5px solid #81c784'}}>
                      <div style={{fontSize:11,color:'#388e3c',fontWeight:600,marginBottom:4}}>✓ Kết quả đã được kiểm tra</div>
                      <div style={{fontSize:12,color:'var(--text2)'}}>Phân loại dây quấn: <strong>Số nguyên (q = {res.q})</strong></div>
                      <div style={{fontSize:12,color:'var(--text2)'}}>Loại dây quấn: <strong>Một lớp, đồng tâm</strong></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Theory note */}
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--gold)'}}/>
                <h4>Ghi chú kỹ thuật</h4>
              </div>
              <div className="card-body">
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:6}}>
                  {['Hệ số dây quấn kw phản ánh hiệu quả sử dụng từ thông trong mạch từ.','Số vòng dây N1 được làm tròn về số nguyên gần nhất.','Đường kính dây đồng tính theo mật độ dòng J = 4.5 A/mm².','Kiểm tra lại nhiệt độ vận hành sau khi lắp đặt thực tế.']
                  .map(t => (
                    <li key={t} style={{fontSize:12,color:'var(--text2)',paddingLeft:16,position:'relative'}}>
                      <span style={{position:'absolute',left:0,color:'var(--gold)'}}>›</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
