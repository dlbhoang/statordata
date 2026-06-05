export default function DieuKhoan() {
  return (
    <div className="page-wrap" style={{paddingTop:28,paddingBottom:36,maxWidth:900}}>
      <span className="sec-label">Điều khoản & Dịch vụ</span>
      <h2 className="sec-title"><span className="accent">Điều khoản</span> sử dụng<br />& Gói dịch vụ</h2>
      <p style={{fontSize:12,color:'var(--text2)',marginBottom:32}}>Cập nhật lần cuối: 01/06/2026</p>

      {/* Phần 1: Điều khoản sử dụng */}
      <h3 style={{fontSize:18,fontWeight:700,marginBottom:20,marginTop:40}}>1. Điều khoản sử dụng phần mềm</h3>
      <div style={{padding:20,background:'#fff3cd',borderRadius:'var(--radius)',border:'1px solid #ffc107',marginBottom:24}}>
        <p style={{fontSize:13,color:'#856404',lineHeight:1.8}}>
          Mặc dù <strong>Phần mềm Thiết Kế, Tính Toán Dữ Liệu Động Cơ Cảm Ứng</strong> được lấy từ các nguồn "Thiết Kế Máy Điện Toàn Cầu" đáng tin cậy, chúng tôi không đảm bảo và không chịu trách nhiệm đối với bất kỳ rủi ro do cá nhân, tổ chức hoặc bất kỳ tai nạn hoặc tổn thất nào phát sinh do việc sử dụng thông tin của chúng tôi.
        </p>
      </div>

      <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)',marginBottom:24}}>
        <h4 style={{fontWeight:700,marginBottom:12}}>📋 Đối tượng sử dụng</h4>
        <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
          Bất kỳ thông tin nào do chúng tôi cung cấp chỉ nên được sử dụng bởi các <strong>kỹ sư điện chuyên nghiệp</strong> có trình độ đầy đủ, dựa trên phán đoán chuyên môn. Việc sử dụng dữ liệu hoàn toàn là rủi ro của riêng bạn.
        </p>
      </div>

      <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)',marginBottom:24}}>
        <h4 style={{fontWeight:700,marginBottom:12}}>⚙️ Điều kiện tính toán</h4>
        <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
          Các tính toán áp dụng cho <strong>động cơ ứng làm mát bằng không khí</strong>, hoạt động liên tục theo chu kỳ S1 hoặc chu kỳ khác (S2, S3...), hiệu suất tiêu chuẩn, 50 hoặc 60 Hz, kiểu cuộn dây chồng hoặc đồng tâm, 1 lớp hoặc 2 lớp.
        </p>
      </div>

      <div style={{padding:20,background:'#f8d7da',borderRadius:'var(--radius)',border:'1px solid #f5c6cb',marginBottom:24}}>
        <h4 style={{fontWeight:700,marginBottom:12,color:'#721c24'}}>⚠️ Tại sao chúng tôi không chịu trách nhiệm</h4>
        <ul style={{fontSize:13,color:'#721c24',lineHeight:1.8,paddingLeft:24}}>
          <li><strong>Dữ liệu đầu vào:</strong> Độ chính xác phụ thuộc vào dữ liệu do bạn cung cấp</li>
          <li><strong>Chất lượng thi công:</strong> Thành công phụ thuộc vào công việc, chuyên môn, chất lượng vật liệu</li>
          <li><strong>Số cực thay đổi:</strong> Trong hiếm trường hợp, số cực mới có thể không phù hợp với số thanh rotor</li>
          <li><strong>Từ thông cực đại:</strong> Hệ số từ thông có thể không phù hợp cho số cực mới</li>
          <li><strong>Bão hòa lõi thép:</strong> Khả năng từ hòa của lõi thép có thể bị xuống cấp (không xác định trước được)</li>
        </ul>
      </div>

      {/* Phần 2: Điều khoản thanh toán */}
      <h3 style={{fontSize:18,fontWeight:700,marginBottom:20,marginTop:40}}>2. Điều khoản thanh toán</h3>
      
      <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)',marginBottom:24}}>
        <h4 style={{fontWeight:700,marginBottom:12}}>💰 Phí sử dụng phần mềm</h4>
        <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8,marginBottom:12}}>
          Khách hàng có trách nhiệm thanh toán đầy đủ các khoản phí theo bảng giá, gói dịch vụ hoặc thỏa thuận đã công bố.
        </p>
        <div style={{paddingLeft:20,borderLeft:'3px solid var(--blue2)',fontSize:13,color:'var(--text2)'}}>
          <p>✓ Phí đăng ký sử dụng phần mềm</p>
          <p>✓ Phí duy trì theo tháng/năm (nếu có)</p>
          <p>✓ Phí nâng cấp, mở rộng tính năng (nếu có)</p>
        </div>
      </div>

      <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)',marginBottom:24}}>
        <h4 style={{fontWeight:700,marginBottom:12}}>🏧 Hình thức thanh toán</h4>
        <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
          Khách hàng có thể thanh toán thông qua:
        </p>
        <div style={{paddingLeft:20,borderLeft:'3px solid var(--blue2)',fontSize:13,color:'var(--text2)',marginTop:12}}>
          <p>✓ Chuyển khoản ngân hàng</p>
          <p>✓ Thanh toán điện tử</p>
          <p>✓ Các hình thức thanh toán hợp pháp khác</p>
          <p style={{marginTop:12,fontStyle:'italic'}}>Thanh toán được xem là hoàn tất khi nhà cung cấp xác nhận đã nhận đủ số tiền.</p>
        </div>
      </div>

      <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)',marginBottom:24}}>
        <h4 style={{fontWeight:700,marginBottom:12}}>⏰ Thời hạn thanh toán</h4>
        <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
          Khách hàng phải thực hiện thanh toán đúng thời hạn theo gói dịch vụ đã đăng ký. Đối với các gói có thời hạn, quyền sử dụng phần mềm chỉ có hiệu lực sau khi hoàn tất thanh toán.
        </p>
      </div>

      <div style={{padding:20,background:'#f8d7da',borderRadius:'var(--radius)',border:'1px solid #f5c6cb',marginBottom:24}}>
        <h4 style={{fontWeight:700,marginBottom:12,color:'#721c24'}}>📌 Chậm thanh toán</h4>
        <p style={{fontSize:13,color:'#721c24',lineHeight:1.8,marginBottom:12}}>
          Nếu khách hàng không thanh toán hoặc thanh toán không đầy đủ đúng hạn, nhà cung cấp có quyền:
        </p>
        <ul style={{fontSize:13,color:'#721c24',lineHeight:1.8,paddingLeft:24}}>
          <li>Tạm ngưng quyền truy cập/sử dụng phần mềm</li>
          <li>Hạn chế một phần hoặc toàn bộ tính năng</li>
          <li>Chấm dứt tài khoản nếu chậm thanh toán kéo dài</li>
        </ul>
        <p style={{fontSize:13,color:'#721c24',marginTop:12}}>
          Nhà cung cấp không chịu trách nhiệm đối với bất kỳ thiệt hại nào phát sinh từ việc tạm ngưng/chấm dứt dịch vụ vì lý do chậm thanh toán.
        </p>
      </div>

      <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)',marginBottom:24}}>
        <h4 style={{fontWeight:700,marginBottom:12}}>📊 Thay đổi giá & chính sách</h4>
        <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
          Nhà cung cấp có quyền điều chỉnh mức phí và chính sách thanh toán. Các thay đổi sẽ được thông báo trước cho khách hàng qua website hoặc kênh thông tin chính thức.
        </p>
      </div>

      <div style={{padding:20,background:'var(--card)',borderRadius:'var(--radius)',border:'1px solid var(--border)',marginBottom:48}}>
        <h4 style={{fontWeight:700,marginBottom:12}}>💳 Thuế & chi phí liên quan</h4>
        <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
          Mọi khoản thuế, phí phát sinh liên quan đến việc sử dụng phần mềm sẽ do khách hàng chịu trách nhiệm theo quy định của pháp luật.
        </p>
      </div>

      {/* Phần 3: Gói dịch vụ */}
      <h3 style={{fontSize:18,fontWeight:700,marginBottom:20,marginTop:40}}>3. Gói dịch vụ & Chức năng</h3>
      
      <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8,marginBottom:24}}>
        Phần mềm hỗ trợ thiết kế tính toán dữ liệu động cơ cảm ứng với 3 mục chính:
      </p>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginBottom:32}}>
        <div style={{padding:20,background:'#e3f2fd',borderRadius:'var(--radius)',border:'1px solid #bbdefb'}}>
          <h4 style={{color:'#1976d2',fontWeight:700,marginBottom:12}}>✅ Mục 1: 3 Pha, 1 Tốc độ</h4>
          <ul style={{fontSize:13,color:'var(--text2)',lineHeight:1.8,paddingLeft:20}}>
            <li><strong>Số nguyên:</strong></li>
            <li style={{paddingLeft:12}}>• Tính toán 3 pha 1 lớp</li>
            <li style={{paddingLeft:12}}>• Tính toán 3 pha 2 lớp</li>
            <li style={{marginTop:8}}><strong>Phân số tối giản:</strong></li>
            <li style={{paddingLeft:12}}>• Tính toán 3 pha 1 lớp</li>
            <li style={{paddingLeft:12}}>• Tính toán 3 pha 2 lớp</li>
          </ul>
        </div>

        <div style={{padding:20,background:'#f3e5f5',borderRadius:'var(--radius)',border:'1px solid #e1bee7'}}>
          <h4 style={{color:'#7b1fa2',fontWeight:700,marginBottom:12}}>✅ Mục 2: 3 Pha, 2 Tốc độ</h4>
          <ul style={{fontSize:13,color:'var(--text2)',lineHeight:1.8,paddingLeft:20}}>
            <li>Tốc độ - Momen không đổi (2Y/Δ)</li>
            <li>Tốc độ - Công suất không đổi (Δ/2Y)</li>
            <li>Tốc độ - Công suất & momen thay đổi (2Y/Y)</li>
          </ul>
        </div>

        <div style={{padding:20,background:'#f1f8e9',borderRadius:'var(--radius)',border:'1px solid #dcedc8'}}>
          <h4 style={{color:'#558b2f',fontWeight:700,marginBottom:12}}>✅ Mục 3: 1 Pha</h4>
          <ul style={{fontSize:13,color:'var(--text2)',lineHeight:1.8,paddingLeft:20}}>
            <li>Dây quấn sin</li>
            <li>Phân bố QA = 2QB</li>
            <li>Phân bố QA = 3QB</li>
            <li>Phân bố QA = QB</li>
          </ul>
        </div>

        <div style={{padding:20,background:'#ffe0b2',borderRadius:'var(--radius)',border:'1px solid #ffe0b2'}}>
          <h4 style={{color:'#e65100',fontWeight:700,marginBottom:12}}>✅ Mục 4: Hướng dẫn</h4>
          <ul style={{fontSize:13,color:'var(--text2)',lineHeight:1.8,paddingLeft:20}}>
            <li>Xác định thông số động cơ</li>
            <li>Quan hệ từ cảm trong gông</li>
            <li>Chọn mật độ dòng điện</li>
            <li>Thuộc tính nhanh hệ thống</li>
          </ul>
        </div>
      </div>

      <h3 style={{fontSize:18,fontWeight:700,marginBottom:20,marginTop:40}}>4. Lựa chọn gói dịch vụ</h3>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20,marginBottom:48}}>
        <div style={{padding:24,background:'var(--card)',borderRadius:'var(--radius)',border:'2px solid #e0e0e0',textAlign:'center'}}>
          <h4 style={{fontSize:16,fontWeight:700,marginBottom:16}}>Gói 1 Pha</h4>
          <p style={{fontSize:12,color:'var(--text2)',marginBottom:16}}>Chỉ sử dụng tính toán động cơ 1 pha (Mục 3)</p>
          <div style={{padding:16,background:'#f0f4fb',borderRadius:8,marginBottom:16}}>
            <span style={{fontSize:14,fontWeight:700,color:'var(--blue2)'}}>Gói cơ bản</span>
          </div>
          <button style={{width:'100%',padding:'10px 16px',background:'var(--blue2)',color:'white',border:'none',borderRadius:6,cursor:'pointer',fontWeight:600}}>
            Chọn gói →
          </button>
        </div>

        <div style={{padding:24,background:'var(--card)',borderRadius:'var(--radius)',border:'2px solid var(--blue2)',textAlign:'center',position:'relative'}}>
          <div style={{position:'absolute',top:-12,left:12,background:'var(--blue2)',color:'white',padding:'4px 12px',borderRadius:4,fontSize:11,fontWeight:700}}>
            PHỔ BIẾN
          </div>
          <h4 style={{fontSize:16,fontWeight:700,marginBottom:16}}>Gói 3 Pha (Full)</h4>
          <p style={{fontSize:12,color:'var(--text2)',marginBottom:16}}>Toàn bộ tính năng 3 pha + 1 lớp, 2 lớp, số nguyên & phân số</p>
          <div style={{padding:16,background:'#e3f2fd',borderRadius:8,marginBottom:16}}>
            <span style={{fontSize:14,fontWeight:700,color:'var(--blue2)'}}>Gói tiêu chuẩn</span>
          </div>
          <button style={{width:'100%',padding:'10px 16px',background:'var(--blue2)',color:'white',border:'none',borderRadius:6,cursor:'pointer',fontWeight:600}}>
            Chọn gói →
          </button>
        </div>

        <div style={{padding:24,background:'var(--card)',borderRadius:'var(--radius)',border:'2px solid #4caf50',textAlign:'center'}}>
          <h4 style={{fontSize:16,fontWeight:700,marginBottom:16}}>Gói Trọn đời</h4>
          <p style={{fontSize:12,color:'var(--text2)',marginBottom:16}}>Tất cả chức năng tính toán trên phần mềm</p>
          <div style={{padding:16,background:'#e8f5e9',borderRadius:8,marginBottom:16}}>
            <span style={{fontSize:14,fontWeight:700,color:'#4caf50'}}>Gói cao cấp</span>
          </div>
          <button style={{width:'100%',padding:'10px 16px',background:'#4caf50',color:'white',border:'none',borderRadius:6,cursor:'pointer',fontWeight:600}}>
            Chọn gói →
          </button>
        </div>
      </div>
    </div>
  );
}
