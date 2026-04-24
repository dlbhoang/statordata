import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

function AppContent() {
  const { pathname } = useLocation();

  return (
    <>
      <Topbar />
      <Header />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
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
      {pathname === '/' && (
        <div className="locationMapSection">
          <div className="page-wrap">
            <div className="locationMapCard">
              <div className="locationMapHeader">
                <div className="locationMapIcon">📍</div>
                <div>
                  <strong>Vị trí hiện tại của công ty</strong>
                  <p>Giới thiệu trụ sở và địa điểm tư vấn kỹ thuật tại Đắk Lắk, Việt Nam.</p>
                </div>
              </div>
              <div className="locationMapFrame">
                <iframe
                  title="Bản đồ vị trí công ty"
                  src="https://maps.google.com/maps?q=T%C3%A2n%20Ti%E1%BA%BFn%2C%20%C4%90%C3%A1k%20L%C4%83k%2C%20Vietnam&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}
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
