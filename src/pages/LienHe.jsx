import { useState } from 'react';
import styles from './LienHe.module.css';

export default function LienHe() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const upd = (k,v) => setForm(p=>({...p,[k]:v}));

  return (
    <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
      <span className="sec-label">Liên hệ</span>
      <h2 className="sec-title">Liên hệ với<br /><span className="accent">Statordata.com</span></h2>
      <p className="sec-desc">Mọi thắc mắc về kỹ thuật, hỗ trợ phần mềm hoặc hợp tác chuyên môn, vui lòng liên hệ với chúng tôi qua các kênh dưới đây.</p>

      <div className={styles.layout}>
        <div className={styles.info}>
          {[
            { icon:'📍', title:'Địa chỉ', lines:['Số nhà 319 – Đường DT 9','Thôn 1, Tân Tiến, Đắk Lắk'] },
            { icon:'📞', title:'Điện thoại', lines:['0366 332 181'] },
            { icon:'✉️', title:'Email', lines:['Statordata@gmail.com'] },
            { icon:'🕐', title:'Giờ hỗ trợ', lines:['Thứ 2 – Thứ 6: 7:30 – 17:00','Thứ 7: 8:00 – 12:00'] },
          ].map(item => (
            <div key={item.title} className={styles.infoCard}>
              <div className={styles.infoIcon}>{item.icon}</div>
              <div>
                <div className={styles.infoTitle}>{item.title}</div>
                {item.lines.map(l => <div key={l} className={styles.infoLine}>{l}</div>)}
              </div>
            </div>
          ))}

          <div className={styles.socialRow}>
            <a href="#" className={styles.socialBtn} style={{background:'#1877f2'}}>Facebook</a>
            <a href="#" className={styles.socialBtn} style={{background:'#ff0000'}}>YouTube</a>
            <a href="#" className={styles.socialBtn} style={{background:'linear-gradient(135deg,#00c6ff,#0072ff)'}}>Messenger</a>
          </div>
        </div>

        <div>
          {sent ? (
            <div className={styles.successBox}>
              <div style={{fontSize:48,marginBottom:12}}>✅</div>
              <h3>Gửi thành công!</h3>
              <p>Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng 24 giờ làm việc.</p>
              <button className="btn btn-primary" style={{marginTop:16}} onClick={()=>setSent(false)}>Gửi tin nhắn khác</button>
            </div>
          ) : (
            <div className="card">
              <div className="card-header">
                <div style={{width:10,height:10,borderRadius:'50%',background:'var(--blue2)'}}/>
                <h4>Gửi tin nhắn cho chúng tôi</h4>
              </div>
              <div className="card-body">
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>Họ và tên <span style={{color:'var(--red)'}}>*</span></label>
                    <input className="inp" placeholder="Nguyễn Văn A" value={form.name} onChange={e=>upd('name',e.target.value)} />
                  </div>
                  <div className={styles.field}>
                    <label>Số điện thoại</label>
                    <input className="inp" placeholder="09xx xxx xxx" value={form.phone} onChange={e=>upd('phone',e.target.value)} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Email <span style={{color:'var(--red)'}}>*</span></label>
                  <input className="inp" type="email" placeholder="email@example.com" value={form.email} onChange={e=>upd('email',e.target.value)} />
                </div>
                <div className={styles.field}>
                  <label>Chủ đề</label>
                  <select className="inp" value={form.subject} onChange={e=>upd('subject',e.target.value)}>
                    <option value="">Chọn chủ đề...</option>
                    <option>Hỗ trợ kỹ thuật tính toán</option>
                    <option>Hỏi về phần mềm</option>
                    <option>Hợp tác chuyên môn</option>
                    <option>Góp ý / phản hồi</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Nội dung <span style={{color:'var(--red)'}}>*</span></label>
                  <textarea className="inp" rows={5} placeholder="Mô tả chi tiết vấn đề hoặc câu hỏi của bạn..." value={form.message} onChange={e=>upd('message',e.target.value)} style={{resize:'vertical'}} />
                </div>
                <button className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:4}}
                  onClick={()=>{ if(form.name&&form.email&&form.message) setSent(true); }}>
                  📨 Gửi tin nhắn
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
