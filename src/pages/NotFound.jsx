import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div style={{textAlign:'center',padding:'80px 24px'}}>
      <div style={{fontSize:80,marginBottom:16}}>⚙</div>
      <h1 style={{fontFamily:'Montserrat,sans-serif',fontSize:48,fontWeight:700,color:'var(--navy)',marginBottom:8}}>404</h1>
      <p style={{fontSize:16,color:'var(--text2)',marginBottom:24}}>Trang bạn tìm không tồn tại hoặc đã được di chuyển.</p>
      <Link to="/" className="btn btn-primary">← Về trang chủ</Link>
    </div>
  );
}
