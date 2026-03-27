import Subnav from '../components/Subnav';
import styles from './HuongDan.module.css';

const STEPS = [
  { num:'01', title:'Xác định thông số định danh', icon:'📋',
    items:['Đo hoặc tra cứu tốc độ đồng bộ Nu (RPM)', 'Xác định tần số nguồn f = 50Hz (Việt Nam)', 'Đếm số rãnh stator Z và số cực 2P', 'Đo điện áp nguồn (220V/380V)'] },
  { num:'02', title:'Tính số cực và kiểm tra', icon:'🔢',
    items:['Tính 2P = (120 × f) / Nu', 'Kiểm tra q = Z / (3 × 2P) — phải là số hợp lý', 'Xác định bước cực τ = Z / 2P', 'Kiểm tra loại dây quấn (số nguyên/phân số)'] },
  { num:'03', title:'Tính hệ số dây quấn', icon:'⚡',
    items:['Hệ số phân bố: kd = sin(π/6) / (q × sin(π/6q))', 'Hệ số bước ngắn: kp = sin(β × π/2)', 'Hệ số dây quấn: kw = kd × kp', 'Kiểm tra kw ≥ 0.9 để đảm bảo hiệu quả'] },
  { num:'04', title:'Tính số vòng dây', icon:'🔄',
    items:['Chọn mật độ từ cảm khe hở Bδ = 0.7–0.85T', 'Tính từ thông: Φm = Bδ × τ × L', 'Tính số vòng: N1 = U / (4.44 × f × Φm × kw)', 'Làm tròn N1 về số nguyên phù hợp'] },
  { num:'05', title:'Tính đường kính dây đồng', icon:'🔩',
    items:['Tính dòng điện định mức: I = P / (√3 × U × η × cosφ)', 'Chọn mật độ dòng: J = 4–6 A/mm² (tùy làm mát)', 'Tiết diện: S = I / J (mm²)', 'Đường kính: d = √(4S/π) — chọn theo bảng tiêu chuẩn'] },
  { num:'06', title:'Kiểm tra và hoàn thiện', icon:'✅',
    items:['Kiểm tra hệ số lấp đầy rãnh: kf = 0.3–0.45', 'Kiểm tra mật độ từ cảm răng và gông stator', 'Tính lại điện trở và điện kháng dây quấn', 'Xuất file PDF kết quả tính toán'] },
];

export default function HuongDan() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Hướng dẫn kỹ thuật</span>
        <h2 className="sec-title">Quy trình tính toán<br /><span className="accent">dây quấn stator</span> từng bước</h2>
        <p className="sec-desc">Hướng dẫn chi tiết từng bước quy trình tính toán và thiết kế dây quấn stator động cơ cảm ứng, từ thông số đầu vào đến kết quả hoàn chỉnh.</p>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{step.num}</div>
                {i < STEPS.length - 1 && <div className={styles.stepLine}/>}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                  <h3>{step.title}</h3>
                </div>
                <div className={styles.stepBody}>
                  <ul>
                    {step.items.map(item => (
                      <li key={item}>
                        <span className={styles.bullet}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick ref */}
        <div style={{marginTop:36}}>
          <span className="sec-label">Tham khảo nhanh</span>
          <h2 className="sec-title">Bảng thông số<br /><span className="accent">tiêu chuẩn thiết kế</span></h2>
          <div className={styles.tables}>
            <div className="card">
              <div className="card-header"><h4>Mật độ từ cảm tiêu chuẩn (T)</h4></div>
              <div className="card-body">
                <table className={styles.table}>
                  <thead><tr><th>Vị trí</th><th>Min</th><th>Max</th><th>Tiêu biểu</th></tr></thead>
                  <tbody>
                    {[['Khe hở δ','0.60','0.95','0.75'],['Răng stator Bz','1.40','1.80','1.60'],['Gông stator Ba','1.00','1.40','1.20'],['Răng rotor','1.40','1.80','1.65'],['Gông rotor','1.00','1.40','1.15']].map(r=>(
                      <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td><strong>{r[3]}</strong></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-header"><h4>Mật độ dòng điện J (A/mm²)</h4></div>
              <div className="card-body">
                <table className={styles.table}>
                  <thead><tr><th>Cách làm mát</th><th>Dây quấn</th><th>J (A/mm²)</th></tr></thead>
                  <tbody>
                    {[['Làm mát tự nhiên','Đồng tròn','3.5–5.0'],['Quạt gió ngoài','Đồng tròn','5.0–7.0'],['Làm mát cưỡng bức','Đồng dẹt','6.0–9.0'],['Ngâm dầu','Đồng tròn','4.0–6.0']].map(r=>(
                      <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td><strong>{r[2]}</strong></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
