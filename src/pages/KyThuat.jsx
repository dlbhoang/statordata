import Subnav from '../components/Subnav';
import { THEORY_CARDS } from '../data/content';
import styles from './KyThuat.module.css';

export default function KyThuat() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <span className="sec-label">Kỹ thuật & Công nghệ</span>
        <h2 className="sec-title"><span className="accent">Lý thuyết</span> & Tài liệu<br />kỹ thuật chuyên ngành</h2>
        <p className="sec-desc">Tổng hợp lý thuyết máy điện, mạch từ, dây quấn stator và các tài liệu kỹ thuật chuyên sâu dành cho kỹ sư và sinh viên ngành điện.</p>

        <div className={styles.grid}>
          {THEORY_CARDS.map(card => (
            <div className={`card ${styles.card}`} key={card.id}>
              <div className={styles.cardTop}>
                <div className={styles.icon}>{card.icon}</div>
                <div className={styles.tags}>
                  {card.tags.map(t => <span key={t} className="tag blue">{t}</span>)}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <button className={`btn btn-outline ${styles.readBtn}`}>Xem chi tiết →</button>
            </div>
          ))}
        </div>

        {/* Theory detail sample */}
        <div style={{marginTop:36}}>
          <span className="sec-label">Lý thuyết nổi bật</span>
          <h2 className="sec-title">Mạch từ trong<br /><span className="accent">động cơ cảm ứng</span></h2>
          <div className={styles.theoryLayout}>
            <div className={styles.theoryText}>
              <h4>1. Khái niệm mạch từ</h4>
              <p>Mạch từ là đường khép kín của từ thông trong máy điện. Trong động cơ cảm ứng, mạch từ bao gồm lõi thép stator, khe hở không khí và lõi thép rotor. Vật liệu chế tạo lõi thép là thép kỹ thuật điện có tổn hao từ thấp.</p>
              <h4>2. Định luật Hopkinson</h4>
              <p>Tương tự định luật Kirchhoff trong mạch điện, định luật Hopkinson phát biểu rằng tổng sức từ động (STĐ) trong một vòng khép kín bằng tổng từ áp rơi trên các đoạn mạch từ: Σ(H·l) = Σ(N·I)</p>
              <h4>3. Từ thông và từ cảm</h4>
              <p>Từ cảm B (Tesla) và cường độ từ trường H (A/m) liên hệ qua hệ số từ thẩm: B = μ₀·μᵣ·H. Trong khe hở không khí μᵣ = 1; trong lõi thép μᵣ có thể đạt 1000–5000.</p>
              <h4>4. Ứng dụng trong thiết kế</h4>
              <p>Khi thiết kế dây quấn stator, cần kiểm tra mật độ từ cảm tại các điểm: răng stator (Bz ≤ 1.6T), gông stator (Ba ≤ 1.2T), khe hở không khí (Bδ ≈ 0.7–0.85T).</p>
            </div>
            <div className={styles.theoryFormulas}>
              <div className={styles.formulaCard}>
                <div className={styles.fTitle}>Công thức cơ bản</div>
                {[
                  ['Sức điện động', 'E = 4.44·f·N·Φm·kw'],
                  ['Từ thông cực đại', 'Φm = E / (4.44·f·N·kw)'],
                  ['Số vòng dây pha', 'N1 = U / (4.44·f·Φm·kw)'],
                  ['Hệ số dây quấn', 'kw = kp · kd'],
                  ['Bước rút ngắn', 'kp = sin(β·π/2)'],
                  ['Hệ số phân bố', 'kd = sin(π/6) / (q·sin(π/6q))'],
                ].map(([name, formula]) => (
                  <div key={name} className={styles.formula}>
                    <span className={styles.fName}>{name}</span>
                    <code className={styles.fCode}>{formula}</code>
                  </div>
                ))}
              </div>
              <div className={styles.noteBox}>
                <div className={styles.noteTitle}>⚠ Lưu ý thiết kế</div>
                <ul style={{paddingLeft:16,fontSize:12,color:'var(--text2)',lineHeight:1.8}}>
                  <li>Từ cảm khe hở Bδ ảnh hưởng trực tiếp đến dòng từ hóa</li>
                  <li>Tăng kw → giảm số vòng dây → giảm điện trở → tăng hiệu suất</li>
                  <li>Kiểm tra bão hòa lõi thép trước khi hoàn thiện thiết kế</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
