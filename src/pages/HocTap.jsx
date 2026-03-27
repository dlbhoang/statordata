import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Subnav from '../components/Subnav';
import styles from './HocTap.module.css';

const COURSES = {
  '3pha-1tocdo': {
    title: 'Dây quấn 3 pha, 1 tốc độ',
    badge: '3 Pha · 1 Tốc độ',
    color: 'blue',
    lessons: [
      { id:1, title:'Giới thiệu động cơ cảm ứng 3 pha', duration:'15 phút', done:true,
        content:'Động cơ điện không đồng bộ (cảm ứng) 3 pha là loại động cơ điện xoay chiều được sử dụng phổ biến nhất trong công nghiệp. Nguyên lý hoạt động dựa trên hiện tượng cảm ứng điện từ: từ trường quay của stator tạo ra sức điện động cảm ứng trong cuộn dây rotor, làm xuất hiện dòng điện và lực quay.' },
      { id:2, title:'Cấu tạo và vật liệu lõi thép stator', duration:'20 phút', done:true,
        content:'Stator gồm hai phần chính: lõi thép và dây quấn. Lõi thép được ghép từ các lá thép kỹ thuật điện dày 0.35–0.5mm để giảm tổn hao dòng xoáy. Trên lõi thép có các rãnh để đặt dây quấn. Số rãnh Z thường là 24, 36, 48, 72...' },
      { id:3, title:'Phân bố rãnh và bước cực', duration:'25 phút', done:false,
        content:'Bước cực τ = Z/p là số rãnh trong một bước cực. Số rãnh mỗi pha mỗi cực q = Z/(3p). Khi q là số nguyên → dây quấn số nguyên; khi q là phân số → dây quấn phân số. Dây quấn số nguyên phổ biến hơn, dễ thiết kế và sản xuất.' },
      { id:4, title:'Hệ số dây quấn kw', duration:'30 phút', done:false,
        content:'Hệ số dây quấn kw = kp × kd, trong đó kp là hệ số bước ngắn và kd là hệ số phân bố. Hệ số dây quấn luôn ≤ 1, phản ánh hiệu quả sử dụng từ thông. Dây quấn bước đủ có kp = 1; dây quấn bước ngắn β = 5/6 thường cho kp ≈ 0.966.' },
      { id:5, title:'Sơ đồ khai triển dây quấn 1 lớp', duration:'35 phút', done:false,
        content:'Sơ đồ khai triển biểu diễn các cạnh tác dụng của dây quấn trải ra trên một đường thẳng. Các bước xây dựng: (1) Vẽ Z rãnh; (2) Xác định bước dây quấn y; (3) Phân phối các cạnh vào pha; (4) Kết nối các bối dây; (5) Xác định chiều quấn và đầu ra.' },
      { id:6, title:'Tính toán số vòng dây và đường kính dây', duration:'40 phút', done:false,
        content:'Số vòng mỗi pha: N1 = U/(4.44·f·Φm·kw). Chọn mật độ từ cảm Bδ → Φm = Bδ·τ·l. Mật độ dòng điện J = 3–6 A/mm² tùy cách làm mát. Đường kính dây: d = √(4I/(π·J)).' },
    ]
  },
  '3pha-2tocdo': {
    title: 'Dây quấn 3 pha, 2 tốc độ',
    badge: '3 Pha · 2 Tốc độ',
    color: 'red',
    lessons: [
      { id:1, title:'Nguyên lý động cơ 2 tốc độ Dahlander', duration:'20 phút', done:false, content:'Phương pháp Dahlander thay đổi số cực bằng cách đổi cách đấu dây: Δ/YY hoặc Y/YY cho tỉ số tốc độ 1:2. Khi đấu sao kép (YY), số cực giảm một nửa → tốc độ tăng gấp đôi.' },
      { id:2, title:'Sơ đồ đấu dây Dahlander', duration:'25 phút', done:false, content:'Mỗi pha có 2 nửa cuộn được nối theo cách khác nhau ở hai chế độ tốc độ. Ở tốc độ thấp: Δ (tam giác); ở tốc độ cao: YY (sao kép). Công suất ở tốc độ cao ≈ 1.3–1.6 lần tốc độ thấp.' },
    ]
  },
  '1pha': {
    title: 'Dây quấn 1 pha',
    badge: '1 Pha',
    color: 'gold',
    lessons: [
      { id:1, title:'Động cơ 1 pha — Nguyên lý và phân loại', duration:'20 phút', done:false, content:'Động cơ 1 pha không có mômen khởi động; cần dây quấn phụ hoặc vòng ngắn mạch. Phân loại: tụ khởi động, tụ thường trực, tụ kép, vòng ngắn mạch (Shaded Pole).' },
      { id:2, title:'Thiết kế dây quấn chính và phụ', duration:'30 phút', done:false, content:'Dây quấn phụ chiếm 1/3 số rãnh, đặt lệch 90° điện so với dây quấn chính. Số vòng N2 ≈ 1.3–1.5 × N1. Đường kính dây phụ nhỏ hơn dây chính vì dây quấn phụ chỉ hoạt động trong giai đoạn khởi động.' },
    ]
  }
};

export default function HocTap() {
  const { loai } = useParams();
  const course = COURSES[loai] || COURSES['3pha-1tocdo'];
  const [active, setActive] = useState(course.lessons[0].id);
  const lesson = course.lessons.find(l => l.id === active);
  const done = course.lessons.filter(l => l.done).length;

  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{paddingTop:28,paddingBottom:36}}>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20}}>
          <span className="sec-label" style={{margin:0}}>Trung tâm học tập</span>
          <span className={`tag ${course.color}`}>{course.badge}</span>
        </div>
        <h2 className="sec-title" style={{marginBottom:20}}>{course.title}</h2>

        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{width:`${(done/course.lessons.length)*100}%`}}/>
          </div>
          <span className={styles.progressLabel}>{done}/{course.lessons.length} bài học hoàn thành</span>
        </div>

        <div className={styles.layout}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className="card">
              <div className="card-header"><h4>Danh sách bài học</h4></div>
              <div style={{padding:'8px 0'}}>
                {course.lessons.map(l => (
                  <div key={l.id} className={`${styles.lessonItem} ${active===l.id?styles.lessonActive:''}`} onClick={()=>setActive(l.id)}>
                    <div className={`${styles.lessonDot} ${l.done?styles.lessonDone:''}`}>
                      {l.done ? '✓' : l.id}
                    </div>
                    <div className={styles.lessonInfo}>
                      <div className={styles.lessonTitle}>{l.title}</div>
                      <div className={styles.lessonDur}>🕐 {l.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="card">
              <div className="card-header">
                <div className={`${styles.lessonDot} ${lesson.done?styles.lessonDone:''}`} style={{flexShrink:0}}>
                  {lesson.done ? '✓' : lesson.id}
                </div>
                <h4>{lesson.title}</h4>
                <span className="tag blue" style={{marginLeft:'auto'}}>🕐 {lesson.duration}</span>
              </div>
              <div className="card-body">
                <div className="video-block" style={{marginBottom:18}}>
                  <div className="video-play">▶</div>
                  <p>Video bài học: {lesson.title}</p>
                </div>
                <div className={styles.lessonContent}>
                  <h5>Nội dung bài học</h5>
                  <p>{lesson.content}</p>
                </div>
                <div style={{display:'flex',gap:10,marginTop:18}}>
                  <button className="btn btn-outline" disabled={lesson.id===1} onClick={()=>setActive(lesson.id-1)}>← Bài trước</button>
                  <button className="btn btn-primary" disabled={lesson.id===course.lessons.length} onClick={()=>setActive(lesson.id+1)} style={{marginLeft:'auto'}}>Bài tiếp theo →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
