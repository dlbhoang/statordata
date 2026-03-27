import { useState } from 'react';
import Subnav from '../components/Subnav';
import styles from './TinhToan.module.css';

const INIT = { nu:1450, f:50, z:24, p:4, u:220, eta:0.75, cosphi:0.92 };

export default function TinhToan1Pha() {
  const [d, setD] = useState(INIT);
  const [calc, setCalc] = useState(false);
  const upd = (k, v) => setD(prev => ({...prev,[k]:+v}));
  const q  = d.z / (2 * d.p);
  const tau = d.z / d.p;
  const n1 = Math.round((d.u / (4.44 * d.f * 0.92)) * 12);
  const I  = Math.round(((1 * 750) / (d.u * d.eta * d.cosphi)) * 10) / 10;
  const dcu = Math.round(Math.sqrt(I / (4 * Math.PI / 4)) * 100) / 100;

  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Tính toán</span>
        <h2 className="sec-title"><span className="accent">Tính toán dữ liệu</span><br />Dây quấn 1 pha</h2>
        <p className="sec-desc">Tính toán số liệu dây quấn stator động cơ điện 1 pha cảm ứng bao gồm dây quấn chính và dây quấn phụ.</p>
        <div className={styles.layout}>
          <div>
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                <h4>Thông số đầu vào</h4>
                <span className="tag blue" style={{marginLeft:'auto'}}>1 Pha</span>
              </div>
              <div className="card-body">
                {[['nu','Tốc độ Nu','RPM'],['f','Tần số f','Hz'],['z','Số rãnh Z',''],['p','Số cực 2P',''],['u','Điện áp U','V'],['eta','Hiệu suất η',''],['cosphi','cosφ','']].map(([key,label,unit])=>(
                  <div key={key} className={styles.field}>
                    <label>{label}{unit&&<span className={styles.unit}>{unit}</span>}</label>
                    <input className="inp" type="number" step="any" value={d[key]} onChange={e=>upd(key,e.target.value)} style={{width:110,textAlign:'right'}} />
                  </div>
                ))}
                <button className="btn btn-primary" style={{width:'100%',marginTop:12,justifyContent:'center'}} onClick={()=>setCalc(true)}>⚡ Tính toán</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--green)'}}/>
                <h4>Kết quả — Dây quấn 1 pha</h4>
                {calc && <span className="tag green" style={{marginLeft:'auto'}}>✓ Hoàn thành</span>}
              </div>
              <div className="card-body">
                {!calc ? (
                  <div className={styles.emptyState}><div style={{fontSize:40}}>🔌</div><p>Nhập thông số và nhấn <strong>Tính toán</strong></p></div>
                ) : (
                  <>
                    <div style={{marginBottom:14}}>
                      <div style={{fontSize:12,fontWeight:700,color:'var(--navy)',marginBottom:8,textTransform:'uppercase',letterSpacing:'.5px'}}>Dây quấn chính (Main)</div>
                      <div className={styles.results}>
                        {[['Số rãnh/cực q',`${Math.round(q*10)/10} rãnh`,'blue'],['Bước cực τ',`${tau} rãnh`,'blue'],['Số vòng dây N1',`${n1} vòng`,'green'],['Dòng điện I',`${I} A`,'cyan'],['Đường kính dây',`${dcu} mm`,'gold']].map(([l,v,c])=>(
                          <div key={l} className={styles.resRow}><span className={styles.resLabel}>{l}</span><span className={`tag ${c}`}>{v}</span></div>
                        ))}
                      </div>
                    </div>
                    <hr style={{border:'none',borderTop:'1px solid var(--border)',margin:'14px 0'}}/>
                    <div>
                      <div style={{fontSize:12,fontWeight:700,color:'var(--navy)',marginBottom:8,textTransform:'uppercase',letterSpacing:'.5px'}}>Dây quấn phụ (Aux)</div>
                      <div className={styles.results}>
                        {[['Số vòng dây N2',`${Math.round(n1*1.3)} vòng`,'gold'],['Đường kính dây phụ',`${Math.round(dcu*0.7*100)/100} mm`,'gold'],['Tụ điện khởi động',`${Math.round(I*2*10)/10} µF`,'red']].map(([l,v,c])=>(
                          <div key={l} className={styles.resRow}><span className={styles.resLabel}>{l}</span><span className={`tag ${c}`}>{v}</span></div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
