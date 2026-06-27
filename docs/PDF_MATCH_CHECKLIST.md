# Checklist đối chiếu PDF vs Website

## Trạng thái hiện tại

- [x] Chuẩn hóa chính tả/thuật ngữ các mục menu chính theo PDF (Trung tâm, pha khởi động, sơ đồ mạch nhánh song song).
- [x] Bổ sung route trang con để phủ các path trong `NAV_ITEMS` và `SUBNAV_ITEMS`.
- [x] Bổ sung cụm tab thiếu của PDF 2: điện áp, kích thước, bước bối dây quấn sin, qui đổi dây đồng.
- [x] Tạo trang nội dung chuẩn hóa cho các route con chưa có trang riêng (`PdfContentPage` + `PDF_ROUTE_CONTENT`).

## Đối chiếu 1:1 theo nhóm nội dung

### 1) PDF: Tab phân chia trên trang web

- [x] Navbar cấp 1 (Trang chủ, Kỹ thuật – Công nghệ, Điều khoản dịch vụ).
- [x] Nhóm học tập 3 pha 1 tốc độ (đủ các nhánh con).
- [x] Nhóm học tập 3 pha 2 tốc độ (đủ các nhánh con theo Dahlander).
- [x] Nhóm học tập 1 pha (đủ các nhánh con chính).
- [x] Nhóm sơ đồ mạch nhánh song song (2p = 2,4,6,8,10,12) có path riêng.
- [x] Subnav mục 1..4 có route khả dụng.

### 2) PDF: Thuộc tính nhanh hệ thống

- [x] Tab Điện áp.
- [x] Tab Thông số kích thước kỹ thuật stator/rãnh stator.
- [x] Tab Cách xác định bước bối dây quấn sin.
- [x] Tab Qui đổi đường kính dây đồng tiết diện tròn.

## Còn cần hoàn thiện để đạt “100% tuyệt đối”

- [x] Thay phần lớn nội dung tóm tắt ở các trang route con bằng nội dung chi tiết theo PDF (đã mở rộng gần nguyên văn cho các nhóm chính và có công thức/mẫu dữ liệu).
- [ ] Đồng bộ toàn bộ hình minh họa theo đúng “Hình 1..Hình 4” và chú thích ảnh tương ứng.
- [ ] Soát chính tả theo bản PDF gốc trên tất cả trang cũ (Home, Footer, HuongDan...) để đồng nhất tuyệt đối từng câu.

## File liên quan đã thêm/sửa

- `src/data/content.js`
- `src/data/pdfRouteContent.js`
- `src/pages/PdfContentPage.jsx`
- `src/pages/ThuocTinhNhanhHeThong.jsx`
- `src/App.jsx`
