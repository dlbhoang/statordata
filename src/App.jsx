import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import SoDo             from './pages/SoDo';
import HuongDan         from './pages/HuongDan';
import LienHe           from './pages/LienHe';
import Group            from './pages/Group';
import NotFound         from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Header />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Routes>
          <Route path="/"                          element={<Home />} />
          <Route path="/ky-thuat"                  element={<KyThuat />} />
          <Route path="/dieu-khoan"                element={<DieuKhoan />} />
          <Route path="/hoc-tap/:loai"             element={<HocTap />} />
          <Route path="/tinh-toan/3pha-1tocdo"     element={<TinhToan3Pha1Toc />} />
          <Route path="/tinh-toan/3pha-2tocdo"     element={<TinhToan3Pha2Toc />} />
          <Route path="/tinh-toan/1pha"            element={<TinhToan1Pha />} />
          <Route path="/so-do-mach"                element={<SoDo />} />
          <Route path="/huong-dan"                 element={<HuongDan />} />
          <Route path="/lien-he"                   element={<LienHe />} />
          <Route path="/group"                     element={<Group />} />
          <Route path="*"                          element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
