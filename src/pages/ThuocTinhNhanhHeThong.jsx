import { useState } from 'react';
import Subnav from '../components/Subnav';
import styles from './ThuocTinhNhanhHeThong.module.css';

// ✅ IMPORT ẢNH TỪ ASSETS
import imgKichThuoc from '../assets/logo.png';
import imgBoiSin from '../assets/THONGSOKICHTHUOCRANH.jpg';
import imgDayDong from '../assets/DAYQUANSINMUONRANH.jpg';

const TABS = [
  { key: 'kich-thuoc', title: 'Thông số kích thước' },
  { key: 'buoc-boi-sin', title: 'Bước bối dây quấn sin' },
  { key: 'quy-doi-day', title: 'Qui đổi dây đồng tiết diện tròn' },
];

// ✅ CONTENT GIỮ NGUYÊN
const CONTENT = {
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
    'QUI ĐỔI DÂY ĐỒNG CHỮ NHẬT: dt = 1,128.a.b.',
  ],
};

// ✅ MAP 1 ẢNH / TAB
const TAB_IMAGES = {
  'kich-thuoc': imgKichThuoc,
  'buoc-boi-sin': imgBoiSin,
  'quy-doi-day': imgDayDong,
};

export default function ThuocTinhNhanhHeThong() {
  const [active, setActive] = useState(TABS[0].key);

  return (
    <>
      <Subnav />

      <div className={`page-wrap ${styles.page}`}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <span className="sec-label">Thuộc tính nhanh hệ thống</span>
            <h2 className="sec-title">
              <span className="accent">Nội dung chuẩn theo PDF 2</span>
            </h2>
          </div>

          <p className={styles.pageDesc}>
            Bổ sung đầy đủ các tab: Kích thước, Bước bối dây quấn sin, Qui đổi dây đồng.
          </p>
        </div>

        {/* TABS */}
        <div className={styles.tabList}>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tabButton} ${
                active === tab.key ? styles.tabButtonActive : ''
              }`}
              onClick={() => setActive(tab.key)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* CARD */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderDot} />
            <h4 className={styles.cardHeaderTitle}>
              {TABS.find((t) => t.key === active)?.title}
            </h4>
          </div>

          <div className={styles.cardBody}>
            {/* IMAGE */}
            {TAB_IMAGES[active] && (
              <div className={styles.imageFrame}>
                <img
                  src={TAB_IMAGES[active]}
                  alt="minh họa"
                  className={styles.image}
                />
              </div>
            )}

            {/* CONTENT */}
            <ul className={styles.contentList}>
              {CONTENT[active].map((line) => (
                <li key={line} className={styles.contentItem}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}