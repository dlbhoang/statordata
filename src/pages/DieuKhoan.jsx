export default function DieuKhoan() {
  const sections = [
    { title:'1. Điều khoản sử dụng dịch vụ', content:'Bằng cách truy cập và sử dụng website Statordata.com, bạn đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều kiện sử dụng này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép sử dụng dịch vụ.' },
    { title:'2. Quyền sở hữu trí tuệ', content:'Toàn bộ nội dung trên Statordata.com bao gồm văn bản, hình ảnh, phần mềm tính toán, công thức, sơ đồ và tài liệu kỹ thuật đều thuộc quyền sở hữu của Statordata.com. Nghiêm cấm sao chép, phân phối hoặc sử dụng thương mại mà không có sự cho phép bằng văn bản.' },
    { title:'3. Giới hạn trách nhiệm', content:'Các kết quả tính toán từ phần mềm Statordata.com mang tính tham khảo kỹ thuật. Người dùng chịu trách nhiệm kiểm tra và xác nhận kết quả trước khi áp dụng vào thực tế. Statordata.com không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ.' },
    { title:'4. Chính sách bảo mật', content:'Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng. Thông tin thu thập chỉ được sử dụng để cải thiện dịch vụ và liên lạc hỗ trợ kỹ thuật. Chúng tôi không chia sẻ thông tin cá nhân với bên thứ ba mà không có sự đồng ý của người dùng.' },
    { title:'5. Thay đổi điều khoản', content:'Statordata.com có quyền cập nhật các điều khoản này bất kỳ lúc nào. Chúng tôi sẽ thông báo cho người dùng về những thay đổi quan trọng qua email hoặc thông báo trên website. Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.' },
  ];
  return (
    <div className="page-wrap" style={{paddingTop:28,paddingBottom:36,maxWidth:800}}>
      <span className="sec-label">Pháp lý</span>
      <h2 className="sec-title"><span className="accent">Điều khoản</span><br />dịch vụ Statordata.com</h2>
      <p style={{fontSize:12,color:'var(--text2)',marginBottom:24}}>Cập nhật lần cuối: 01/01/2024</p>
      {sections.map(s => (
        <div key={s.title} style={{marginBottom:24,padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)',boxShadow:'var(--shadow)'}}>
          <h3 style={{fontFamily:'Montserrat,sans-serif',fontSize:16,fontWeight:700,color:'var(--navy)',marginBottom:10}}>{s.title}</h3>
          <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>{s.content}</p>
        </div>
      ))}
    </div>
  );
}
