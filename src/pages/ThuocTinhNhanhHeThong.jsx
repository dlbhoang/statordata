import { useState } from 'react';
import Subnav from '../components/Subnav';

const TABS = [
  { key: 'dien-ap', title: 'Điện áp' },
  { key: 'kich-thuoc', title: 'Thông số kích thước' },
  { key: 'buoc-boi-sin', title: 'Bước bối dây quấn sin' },
  { key: 'quy-doi-day', title: 'Qui đổi dây đồng tiết diện tròn' },
];

const CONTENT = {
  'dien-ap': [
    'ĐỘNG CƠ 3 PHA 1 TỐC ĐỘ.',
    'Hình 1: Điện áp pha (Vpha) khi liên kết hình sao (Y).',
    'Hình 2: Điện áp pha (Vpha) khi liên kết hình tam giác (∆).',
    'ĐỘNG CƠ 3 PHA 2 TỐC ĐỘ.',
    'Hình 3: Điện áp dây (Vdây), theo (Robert Dahlander).',
    'ĐỘNG CƠ 1 PHA HAY 2 PHA.',
    'Hình 4: Điện áp pha (Vpha).',
  ],
  'kich-thuoc': [
    'THÔNG SỐ KÍCH THƯỚC CƠ BẢN DÙNG TRONG THIẾT KẾ TÍNH TOÁN DỮ LIỆU.',
    'XÁC ĐỊNH THÔNG SỐ KÍCH THƯỚC KỸ THUẬT STATOR:',
    '1: Đường kính trong của lõi thép stator: Dt (Cm).',
    '2: Bề dầy lõi thép stator: L (Cm).',
    '3: Bề dầy gông stator: Hg (Cm).',
    '4: Bề dầy răng stator: bz (Cm).',
    '5: Đường kính ngoài stator: Dn (mm).',
    'THÔNG SỐ KÍCH THƯỚC RÃNH STATOR:',
    '1: Đáy nhỏ rãnh: d1 (mm).',
    '2: Đáy lớn rãnh: d2 (mm).',
    '3: Chiều cao rãnh: h (mm).',
    '4: Chiều cao răng rãnh: Hr (Cm).',
  ],
  'buoc-boi-sin': [
    'CÁCH XÁC ĐỊNH BƯỚC BỐI DÂY QUẤN SIN, PHA LÀM VIỆC VÀ PHA KHỞI ĐỘNG.',
    'Ví dụ 1: Z = 36 rãnh; 2p = 4 (cực), loại có mượn rãnh.',
    'Nhóm bối dây quấn pha làm việc: y1 = 2, y2 = 4, y3 = 6, y4 = 8 (rãnh).',
    'Nhóm bối dây quấn pha khởi động: y1 = 3, y2 = 5, y3 = 7, y4 = 9 (rãnh).',
    'Ví dụ 2: Z = 32 rãnh; 2p = 4 (cực), loại không mượn rãnh.',
    'Các bước bối dây được xác định trên sơ đồ khai triển theo đúng nhóm bối dây thực tế.',
    'Giả sử một nhóm bối dây có 4 bối/nhóm: N1c, N2c, N3c, N4c (pha làm việc) và N1p, N2p, N3p, N4p (pha khởi động).',
  ],
  'quy-doi-day': [
    'QUI ĐỔI NHIỀU ĐƯỜNG KÍNH DÂY ĐỒNG TIẾT DIỆN TRÒN, VỀ TỔNG ĐƯỜNG KÍNH DÂY ĐỒNG CÓ TIẾT DIỆN LỚN NHẤT.',
    'Mẫu 1: d1 = 1 (mm), n1 = 1; d2 = 1,05 (mm), n2 = 2; d3 = 1,1 (mm), n3 = 2.',
    'Kết quả: dt = 2,5739 (mm).',
    'Mẫu 2: Qui đổi ngược từ dt = 2,5739 (mm) sang nhiều dây nhỏ thay thế.',
    'Ví dụ thay thế: d1 = 1,15 (mm), n1 = 2; d2 = 1,35 (mm), n2 = 1; phần còn lại d = 1,4688 (mm).',
    'Công thức tổng hợp: dt² = d1² + d2² + d3² + d4² + d5² + d6² + d7².',
    'Qui đổi ngược: d = sqrt(dt² - N1.d1² - N2.d2² - ... - N7.d7²).',
    'QUI ĐỔI DÂY ĐỒNG CHỮ NHẬT (DÂY DẸT) VỀ TỔNG ĐƯỜNG KÍNH DÂY ĐỒNG TIẾT DIỆN TRÒN (TÍNH LỚP MEN CÁCH ĐIỆN): dt = 1,128.a.b.',
  ],
};

export default function ThuocTinhNhanhHeThong() {
  const [active, setActive] = useState(TABS[0].key);

  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 36 }}>
        <span className="sec-label">Thuộc tính nhanh hệ thống</span>
        <h2 className="sec-title">
          <span className="accent">Nội dung chuẩn theo PDF 2</span>
        </h2>
        <p className="sec-desc">
          Bổ sung đầy đủ các tab: Điện áp, Kích thước, Bước bối dây quấn sin, Qui đổi dây đồng tiết diện tròn.
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`btn ${active === tab.key ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="card">
          <div className="card-header">
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green)' }} />
            <h4>{TABS.find((t) => t.key === active)?.title}</h4>
          </div>
          <div className="card-body">
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {CONTENT[active].map((line) => (
                <li key={line} style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.65 }}>
                  - {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
