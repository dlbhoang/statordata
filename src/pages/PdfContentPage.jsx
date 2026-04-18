import { useLocation } from 'react-router-dom';
import Subnav from '../components/Subnav';
import { PDF_ROUTE_CONTENT } from '../data/pdfRouteContent';

export default function PdfContentPage() {
  const { pathname } = useLocation();
  const data = PDF_ROUTE_CONTENT[pathname];

  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 36 }}>
        <span className="sec-label">Nội dung chuẩn hóa theo PDF</span>
        <h2 className="sec-title">
          <span className="accent">{data?.title || 'Trang nội dung'}</span>
        </h2>
        <p className="sec-desc">
          {data
            ? 'Nội dung được chuẩn hóa thuật ngữ theo tài liệu PDF để đồng bộ cách gọi tên và cấu trúc mục.'
            : 'Mục này đang được cập nhật theo tài liệu PDF. Vui lòng quay lại sau.'}
        </p>

        <div className="card">
          <div className="card-header">
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--blue2)' }} />
            <h4>Nội dung</h4>
          </div>
          <div className="card-body">
            {data?.sections?.length ? (
              <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
                {data.sections.map((line) => (
                  <li key={line} style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.65 }}>
                    - {line}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: 'var(--text2)', fontSize: 13 }}>Chưa có nội dung chi tiết.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
