import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Seo from './components/Seo';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home             from './pages/Home';
import KyThuat          from './pages/KyThuat';
import DieuKhoan        from './pages/DieuKhoan';
import HocTap           from './pages/HocTap';
import TinhToan3Pha1Toc from './pages/TinhToan3Pha1Toc';
import TinhToan3Pha2Toc from './pages/TinhToan3Pha2Toc';
import TinhToan1Pha      from './pages/TinhToan1Pha';
import TinhToan3Pha1Toc1Lop from './pages/TinhToan3Pha1Toc1Lop';
import TinhToan3Pha1Toc2Lop from './pages/TinhToan3Pha1Toc2Lop';
import TinhToan1PhaSin from './pages/TinhToan1PhaSin';
import SoDo             from './pages/SoDo';
import HuongDan         from './pages/HuongDan';
import PdfContentPage   from './pages/PdfContentPage';
import ThuocTinhNhanhHeThong from './pages/ThuocTinhNhanhHeThong';
import LienHe           from './pages/LienHe';
import Group            from './pages/Group';
import NotFound         from './pages/NotFound';
import MapModal         from './components/MapModal';

function AppContent() {
  const { pathname } = useLocation();

  const seoData = (() => {
    if (pathname === '/') {
      return {
        title: 'Statordata.com — Phần mềm thiết kế dây quấn stator cho động cơ 1 pha và 3 pha',
        description: 'Công cụ hỗ trợ thiết kế dây quấn stator, tính toán động cơ 1 pha/3 pha, sơ đồ mạch và tài liệu kỹ thuật chuyên sâu.',
        keywords: 'thiết kế stator, dây quấn stator, động cơ 1 pha, động cơ 3 pha, tính toán stator, sơ đồ mạch, StatorData',
        path: '/',
      };
    }
    if (pathname.startsWith('/ky-thuat')) {
      return {
        title: 'Kỹ thuật vòng dây stator – StatorData.com',
        description: 'Tìm hiểu kỹ thuật quấn dây stator, lựa chọn bước dây và cách bố trí cuộn dây cho động cơ.',
        keywords: 'kỹ thuật stator, bước dây, quấn dây stator, thiết kế động cơ',
        path: pathname,
      };
    }
    if (pathname.startsWith('/dieu-khoan')) {
      return {
        title: 'Điều khoản sử dụng StatorData.com',
        description: 'Xem điều khoản, chính sách sử dụng và quyền riêng tư khi truy cập StatorData.com.',
        keywords: 'điều khoản, chính sách, StatorData, quyền riêng tư',
        path: pathname,
      };
    }
    if (pathname.startsWith('/hoc-tap')) {
      return {
        title: 'Tài liệu học tập stator và động cơ – StatorData.com',
        description: 'Hướng dẫn và tài liệu học tập về thiết kế cuộn dây stator, sơ đồ mạch và lý thuyết động cơ.',
        keywords: 'tài liệu stator, học tập động cơ, hướng dẫn stator, thiết kế stator',
        path: pathname,
      };
    }
    if (pathname.startsWith('/tinh-toan')) {
      return {
        title: 'Tính toán dây quấn stator động cơ – StatorData.com',
        description: 'Công cụ tính toán dây quấn stator cho các loại động cơ 1 pha và 3 pha, hỗ trợ lập bảng dữ liệu chính xác.',
        keywords: 'tính toán stator, tính toán động cơ, động cơ 1 pha, động cơ 3 pha, thiết kế dây quấn',
        path: pathname,
      };
    }
    if (pathname.startsWith('/so-do-mach')) {
      return {
        title: 'Sơ đồ mạch điện động cơ – StatorData.com',
        description: 'Sơ đồ mạch, hướng dẫn đấu dây và cấu hình điều khiển cho động cơ điện.',
        keywords: 'sơ đồ mạch, đấu dây động cơ, mạch điều khiển, StatorData',
        path: pathname,
      };
    }
    if (pathname.startsWith('/huong-dan')) {
      return {
        title: 'Hướng dẫn sử dụng StatorData.com',
        description: 'Hướng dẫn chi tiết các chức năng và công cụ thiết kế dây quấn stator trên StatorData.com.',
        keywords: 'hướng dẫn sử dụng, StatorData, thiết kế stator, hướng dẫn động cơ',
        path: pathname,
      };
    }
    if (pathname.startsWith('/lien-he')) {
      return {
        title: 'Liên hệ StatorData.com',
        description: 'Liên hệ tư vấn kỹ thuật, hợp tác và phản hồi về phần mềm thiết kế dây quấn stator.',
        keywords: 'liên hệ, tư vấn kỹ thuật, StatorData, hợp tác',
        path: pathname,
      };
    }
    if (pathname.startsWith('/group')) {
      return {
        title: 'Group StatorData.com – Cộng đồng kỹ thuật stator',
        description: 'Tham gia cộng đồng Group StatorData.com để trao đổi kỹ thuật thiết kế stator và động cơ điện.',
        keywords: 'group statordata, cộng đồng kỹ thuật, stator, động cơ',
        path: pathname,
      };
    }
    return {
      title: 'StatorData.com — Công cụ thiết kế và tính toán dây quấn stator',
      description: 'Công cụ thiết kế dây quấn stator và tư liệu động cơ cho kỹ sư điện, kỹ thuật viên và học viên.',
      keywords: 'StatorData, thiết kế dây quấn, stator, động cơ, tính toán, kỹ thuật điện',
      path: pathname,
    };
  })();

  return (
    <>
      <a className="sr-only sr-only-focusable" href="#main-content">Bỏ qua điều hướng</a>
      <Seo {...seoData} />
      <Topbar />
      <Header />
      <Navbar />
      <main id="main-content" aria-label="Nội dung chính" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Routes>
          <Route path="/"                          element={<Home />} />
          <Route path="/ky-thuat"                  element={<KyThuat />} />
          <Route path="/dieu-khoan"                element={<DieuKhoan />} />
          <Route path="/hoc-tap/:loai"             element={<HocTap />} />
          <Route path="/hoc-tap/*"                 element={<PdfContentPage />} />
          <Route path="/tinh-toan/3pha-1tocdo"     element={<TinhToan3Pha1Toc />} />
          <Route path="/tinh-toan/3pha-1tocdo/1lop" element={<TinhToan3Pha1Toc1Lop />} />
          <Route path="/tinh-toan/3pha-1tocdo/2lop" element={<TinhToan3Pha1Toc2Lop />} />
          <Route path="/tinh-toan/3pha-2tocdo"     element={<TinhToan3Pha2Toc />} />
          <Route path="/tinh-toan/1pha"            element={<TinhToan1Pha />} />
          <Route path="/tinh-toan/1pha/sin"        element={<TinhToan1PhaSin />} />
          <Route path="/so-do-mach"                element={<SoDo />} />
          <Route path="/huong-dan"                 element={<HuongDan />} />
          <Route path="/huong-dan/thuoc-tinh-nhanh-he-thong" element={<ThuocTinhNhanhHeThong />} />
          <Route path="/huong-dan/*"               element={<PdfContentPage />} />
          <Route path="/so-do-mach/*"              element={<PdfContentPage />} />
          <Route path="/lien-he"                   element={<LienHe />} />
          <Route path="/group"                     element={<Group />} />
          <Route path="*"                          element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}