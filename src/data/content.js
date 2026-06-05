export const NAV_ITEMS = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Kỹ thuật – Công nghệ', path: '/ky-thuat' },
  { label: 'Điều khoản dịch vụ', path: '/dieu-khoan' },
  {
    label: 'Trung tâm học tập 3 pha, 1 Tốc độ.',
    path: '/hoc-tap/3pha-1tocdo',
    children: [
      { 
        label: 'KỸ THUẬT DÂY QUẤN ĐỘNG CƠ CẢM ỨNG 3 PHA, 1 TỐC ĐỘ.',
        path: '/hoc-tap/3pha-1tocdo',
        children: [
          { label: 'Ký hiệu và nguyên lý kỹ thuật dây quấn.', path: '/hoc-tap/3pha-1tocdo/kyhieu' },
          { label: 'Truyền động điện và sơ đồ liên kết tổng quát.', path: '/hoc-tap/3pha-1tocdo/truyen-dong' },
        ]
      },
      { 
        label: 'PHƯƠNG PHÁP XÂY DỰNG SƠ ĐỒ KHAI TRIỂN 3 PHA 1 TỐC ĐỘ, SỐ NGUYÊN.', 
        path: '/hoc-tap/3pha-1tocdo/so-nguyen',
        children: [
          { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 1 lớp.', path: '/hoc-tap/3pha-1tocdo/so-nguyen/1lop' },
          { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 2 lớp.', path: '/hoc-tap/3pha-1tocdo/so-nguyen/2lop' },
        ]
      },
      { 
        label: 'PHƯƠNG PHÁP XÂY DỰNG SƠ ĐỒ KHAI TRIỂN 3 PHA 1 TỐC ĐỘ, PHÂN SỐ TỐI GIẢN.', 
        path: '/hoc-tap/3pha-1tocdo/phan-so-toi-gian',
        children: [
          { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 1 lớp.', path: '/hoc-tap/3pha-1tocdo/phan-so-toi-gian/1lop' },
          { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 2 lớp.', path: '/hoc-tap/3pha-1tocdo/phan-so-toi-gian/2lop' },
        ]
      },
    ],
  },
  {
    label: 'Trung tâm học tập 3 pha, 2 Tốc độ. Tỉ lệ (1/2).',
    path: '/hoc-tap/3pha-2tocdo',
    children: [
      { 
        label: 'KỸ THUẬT DÂY QUẤN ĐỘNG CƠ CẢM ỨNG 3 PHA, 2 TỐC ĐỘ, THEO (ROBERT DAHLANDER).', 
        path: '/hoc-tap/3pha-2tocdo',
        children: [
          { label: 'Ký hiệu và nguyên lý kỹ thuật dây quấn.', path: '/hoc-tap/3pha-2tocdo/kyhieu' },
          { label: 'Sơ đồ ra dây và liên kết tổng quát từng loại tốc độ.', path: '/hoc-tap/3pha-2tocdo/sodo' },
        ]
      },
      { 
        label: 'PHƯƠNG PHÁP XÂY DỰNG SƠ ĐỒ KHAI TRIỂN 3 PHA, 2 TỐC ĐỘ, THEO (ROBERT DAHLANDER)', 
        path: '/hoc-tap/3pha-2tocdo/phuong-phap',
        children: [
          { label: 'Trường hợp 1: Đổi tốc độ momen (hay ngẫu lực) không đổi (n = var; t = const):(2y/∆).)', path: '/hoc-tap/3pha-2tocdo/case1' },
          { label: 'Trường hợp 2: Đổi tốc độ công suất không đổi, (n = var; p = const): (∆/ 2y).', path: '/hoc-tap/3pha-2tocdo/case2' },
          { label: 'Trường hợp 3: Đổi tốc độ công suất và momen (hay ngẫu lực) thay đổi: (n = var; p =var, t = var): (2Y/Y).)', path: '/hoc-tap/3pha-2tocdo/case3' },
        ]
      },
    ],
  },
  {
    label: 'Trung tâm học tập 1 pha.',
    path: '/hoc-tap/1pha',
    children: [
      { 
        label: 'Lý thuyết và phân loại trong trong máy điện 1 pha.', 
        path: '/hoc-tap/1pha',
        children: [
          { label: 'Lý thuyết & phân loại', path: '/hoc-tap/1pha/lythuyet' },
          { label: 'Sơ đồ & thông số kỹ thuật', path: '/hoc-tap/1pha/sodo' },
        ]
      },
      { 
        label: 'Sơ đồ liên kết tổng quát và Thông số kỹ thuật tính toán dữ liệu.', 
        path: '/hoc-tap/1pha/phuong-phap',
        children: [
          { label: 'Qₐ = Qᵦ (Bằng pha khởi)', path: '/hoc-tap/1pha/qa-qb' },
          { label: 'Qₐ = 2Qᵦ (2x pha khởi)', path: '/hoc-tap/1pha/qa-2qb' },
          { label: 'Qₐ = 3Qᵦ (3x pha khởi)', path: '/hoc-tap/1pha/qa-3qb' },
          { label: 'Dây quấn 2 lớp', path: '/hoc-tap/1pha/2lop' },
          { label: 'Pha làm việc & khởi động sin', path: '/hoc-tap/1pha/sin' },
        ]
      },
    ],
  },
  {
    label: 'PHƯƠNG PHÁP XÂY DỰNG SƠ ĐỒ KHAI TRIỂN ĐỘNG CƠ 1 PHA.',
    path: '/so-do-mach',
    children: [
      {
        label: 'Phương pháp xây dựng sơ đồ khai triển, sử dụng phân bố Qₐ = Qᵦ (Pha làm việc bằng pha khởi động).',
      },
     {
      label: 'Phương pháp xây dựng sơ đồ khai triển, sử dụng phân bố Qₐ = 2Qᵦ (Pha làm việc bằng 2 lần pha khởi động).',
     },
     {
      label: 'Phương pháp xây dựng sơ đồ khai triển, sử dụng phân bố Qₐ = 3Qᵦ (Pha làm việc bằng 3 lần pha khởi động).'
     },
     {
      label: 'Phương pháp xây dựng sơ đồ khai triển động cơ 1 pha. Loại dây quấn 2 lớp.',
     },
     {
      label: 'Phương pháp xây dựng sơ đồ khai triển, Pha làm việc và pha khởi động dây quấn sin.',
     }
    ],
  },
  {
    label: 'Các dạng sơ đồ mạch nhánh song song (A).',
    path: '/so-do-mach/nhanh-song-song',
    children: [
      {
        label: 'Sơ đồ mạch nhánh song song 2p = 2 (cực).',
        path: '/so-do-mach/nhanh-song-song/2p2',
      },
     {
      label: 'Sơ đồ mạch nhánh song song 2p = 4 (cực).',
      path: '/so-do-mach/nhanh-song-song/2p4',
     },
     {
      label: 'Sơ đồ mạch nhánh song song 2p = 6 (cực).',
      path: '/so-do-mach/nhanh-song-song/2p6',
     },
     {
      label: 'Sơ đồ mạch nhánh song song 2p = 8 (cực).',
      path: '/so-do-mach/nhanh-song-song/2p8',
     },
     {
      label: 'Sơ đồ mạch nhánh song song 2p = 10 (cực).',
      path: '/so-do-mach/nhanh-song-song/2p10',
     },
     {
      label: 'Sơ đồ mạch nhánh song song 2p = 12 (cực).',
      path: '/so-do-mach/nhanh-song-song/2p12',
     },
]}
];

export const SUBNAV_ITEMS = [
  {
    label: 'Bắt đầu tính toán',
    path: '/',
  },
  {
    label: 'Mục 1: Tính toán dữ liệu 3 pha, 1 tốc độ.',
    path: '/hoc-tap/3pha-1tocdo',
    children: [

      {
        label: 'TÍNH TOÁN DỮ LIỆU DÂY QUẤN STATOR 3 PHA, SỐ NGUYÊN.',
        path: '/hoc-tap/3pha-1tocdo/so-nguyen',
        children: [
          { label: 'Tính toán dữ liệu 3 pha 1 lớp.', path: '/hoc-tap/3pha-1tocdo/so-nguyen/1lop' },
          { label: 'Tính toán dữ liệu 3 pha 2 lớp.', path: '/hoc-tap/3pha-1tocdo/so-nguyen/2lop' },
          { label: 'Hướng dẫn tính toán dữ liệu dây quấn stator.', path: '/hoc-tap/3pha-1tocdo/so-nguyen/huong-dan' },
        ]
      },

      {
        label: 'TÍNH TOÁN DỮ LIỆU DÂY QUẤN STATOR 3 PHA, PHÂN SỐ TỐI GIẢN.',
        path: '/hoc-tap/3pha-1tocdo/phan-so-toi-gian',
        children: [
          { label: 'Tính toán dữ liệu 3 pha 1 lớp.', path: '/hoc-tap/3pha-1tocdo/phan-so/1lop' },
          { label: 'Tính toán dữ liệu 3 pha 2 lớp.', path: '/hoc-tap/3pha-1tocdo/phan-so/2lop' },
          { label: 'Hướng dẫn tính toán dữ liệu dây quấn stator.', path: '/hoc-tap/3pha-1tocdo/phan-so/huong-dan' },
        ]
      }

    ]
  },
  {
    label: 'Mục 2: Tính toán dữ liệu dây quấn stator 3 pha, 2 tốc độ.',
    path: '/hoc-tap/3pha-2tocdo',
    children: [

      {
        label: 'TÍNH TOÁN DỮ LIỆU DÂY QUẤN STATOR 3 PHA, 2 TỐC, THEO (ROBERT DAHLANDER).',
        path: '/hoc-tap/3pha-2tocdo/dahlander',
        children: [
          { label: 'Tính toán dây quấn đổi tốc độ momen không đổi (2Y/Δ).', path: '/hoc-tap/3pha-2tocdo/momen' },
          { label: 'Tính toán dây quấn đổi tốc độ công suất không đổi (Δ/2Y).', path: '/hoc-tap/3pha-2tocdo/cong-suat' },
          { label: 'Tính toán dây quấn công suất và momen thay đổi (2Y/Y).', path: '/hoc-tap/3pha-2tocdo/thay-doi' },
          { label: 'Hướng dẫn tính toán dữ liệu dây quấn stator.', path: '/hoc-tap/3pha-2tocdo/huong-dan' }
        ]
      }

    ]
  },
  {
    label: 'Mục 3: Tính toán dữ liệu 1 pha.',
    path: '/hoc-tap/1pha',
    children: [
      { label: 'Tính toán dữ liệu dây quấn sin.', path: '/hoc-tap/1pha/day-quan-sin' },
      { label: 'Hướng dẫn tính toán dữ liệu dây quấn sin.', path: '/hoc-tap/1pha/huong-dan' },

      { label: 'Tính toán dữ liệu phân bố QA = 2QB.', path: '/hoc-tap/1pha/qa-2qb' },
      { label: 'Hướng dẫn QA = 2QB.', path: '/hoc-tap/1pha/qa-2qb/huong-dan' },

      { label: 'Tính toán dữ liệu phân bố QA = 3QB.', path: '/hoc-tap/1pha/qa-3qb' },
      { label: 'Hướng dẫn QA = 3QB.', path: '/hoc-tap/1pha/qa-3qb/huong-dan' },

      { label: 'Tính toán dữ liệu phân bố QA = QB.', path: '/hoc-tap/1pha/qa-qb' },
      { label: 'Hướng dẫn QA = QB.', path: '/hoc-tap/1pha/qa-qb/huong-dan' },
    ]
  },
  {
    label: 'Mục 4: Hướng dẫn kỹ thuật tính toán dữ liệu.',
    path: '/huong-dan',
    children: [
      { label: 'Xác định thông số động cơ 3 pha 1 tốc.', path: '/huong-dan/3pha-1toc' },
      { label: 'Xác định thông số động cơ 3 pha 2 tốc.', path: '/huong-dan/3pha-2toc' },
      { label: 'Xác định thông số động cơ 1 pha.', path: '/huong-dan/1pha' },

      { label: 'Quan hệ từ cảm trong gông và răng stator.', path: '/huong-dan/tu-cam' },
      { label: 'Chọn mật độ dòng điện và hệ số công suất.', path: '/huong-dan/mat-do-dong' },
      { label: 'Thuộc tính nhanh hệ thống.', path: '/huong-dan/thuoc-tinh-nhanh-he-thong' }
    ]
  }
];
export const CALCULATION_MENU = [
  {
    title: 'Tính Toán Dữ Liệu 3 Pha, 1 Tốc Độ',
    pathname: '3pha-1tocdo',
    items: [
      { label: 'Tính toán dữ liệu 3 pha 1 lớp.', path: '/tinh-toan/3pha-1tocdo/1lop' },
      { label: 'Tính toán dữ liệu 3 pha 2 lớp.', path: '/tinh-toan/3pha-1tocdo/2lop' },
      { label: 'Hướng dẫn tính toán dữ liệu dây quấn stator.', path: '/tinh-toan/3pha-1tocdo/guide' },
    ],
  },
  {
    title: 'Tính Toán Dữ Liệu Dây Quấn Stator 3 Pha, 2 Tốc Độ',
    pathname: '3pha-2tocdo',
    items: [
      { label: 'Tính toán dữ liệu đối tốc độ moment không đổi (2y/Δ).', path: '/tinh-toan/3pha-2tocdo/case1' },
      { label: 'Tính toán dữ liệu đối tốc độ công suất không đổi (Δ/2y).', path: '/tinh-toan/3pha-2tocdo/case2' },
      { label: 'Tính toán dữ liệu đối tốc độ công suất & moment thay đổi (2Y/Y).', path: '/tinh-toan/3pha-2tocdo/case3' },
      { label: 'Hướng dẫn tính toán dữ liệu dây quấn stator.', path: '/tinh-toan/3pha-2tocdo/guide' },
    ],
  },
  {
    title: 'Tính Toán Dữ Liệu 1 Pha',
    pathname: '1pha',
    items: [
      { label: 'Tính toán dữ liệu dây quấn pha làm việc & kha khởi động sin.', path: '/tinh-toan/1pha/sin' },
      { label: 'Tính toán dữ liệu phân bố Qₐ = 2Qᵦ.', path: '/tinh-toan/1pha/qa-2qb' },
      { label: 'Tính toán dữ liệu phân bố Qₐ = 3Qᵦ.', path: '/tinh-toan/1pha/qa-3qb' },
      { label: 'Tính toán dữ liệu phân bố Qₐ = Qᵦ.', path: '/tinh-toan/1pha/qa-qb' },
      { label: 'Hướng dẫn tính toán dữ liệu dây quấn sin.', path: '/tinh-toan/1pha/guide' },
    ],
  },
  {
    title: 'Hướng Dẫn Kỹ Thuật Tính Toán Dữ Liệu',
    pathname: 'guide',
    items: [
      { label: 'Xác định các thông số điện áp & kích thước hình học động cơ cảm ứng.', path: '/tinh-toan/guide/parameters' },
      { label: 'Các thông số kỳ thuật dùng trong tính toán công suất.', path: '/tinh-toan/guide/technical' },
      { label: 'Phương pháp xử lý dữ liệu.', path: '/tinh-toan/guide/methods' },
    ],
  },
];

export const HERO_FEATURES = [
  'Phần mềm Statordata.com tối ưu hoá, thiết kế - tính toán dữ liệu dây quấn động cơ Cảm ứng.',
  'Hổ trợ kỹ thuật trong quá trình thiết kế và tính toán dữ liệu dây quấn stator động cơ cảm ứng',
  'Thiết kế - Tính toán dữ liệu dây quấn stator hoặc Rotor dây quấn 1 lớp hay 2 lớp.',
  'Tính toán dữ liệu số vòng mỗi pha dây quấn hay số vòng mỗi bối dây quấn động cơ.',
  'Tính toán đường kính dây đồng có tiết diện tròn không có lớp cách điện.',
  'Tính toán công suất định mức động cơ và tính toán dòng điện định mức động cơ.',
  'Ứng dụng cho động cơ không đồng bộ hoặc động cơ đồng bộ, loại stator hoặc rotor dây quấn, 1 pha và 3 pha.'
];

export const ANALYSIS_RESULTS = [
  '01: Kiểm tra cực tốt nhất có thể thực hiện cho động cơ.',
  '02: Thông số xây dựng sơ đồ khai triển dây quấn stator động cơ.',
  '03: Góc lệch vị trí không gian giữa hai pha liên tiếp.',
  '04: Quan hệ từ thông cực đại trên mỗi cực từ với tử cảm cực đại tại khe hở không khí.',
  '05: Số vòng dây quấn cho mỗi pha dây quấn stator động cơ.',
  '06: Số vòng dây quấn cho mỗi bối dây và chọn lại số vòng dây quấn cho mỗi bối dây.',
  '07: Đường kính dây đồng có tiết diện tròn không có lớp men cách điện d.',
  '08: Các thông số định mức động cơ.',
];

export const WHY_ITEMS = [
  {
    num: '01',
    title: 'Làm việc dựa trên phần mềm Statordata.com',
    desc: 'Làm việc trực tiếp với các thông số đầu vào của stator do người dùng cung cấp, đảm bảo tính linh hoạt và chính xác trong quá trình thiết kế và tính toán dữ liệu dây quấn stator.',
  },
  {
    num: '02',
    title: 'Hỗ trợ nhiều loại động cơ',
    desc: 'Hỗ trợ thiết kế và tính toán dữ liệu cho nhiều loại động cơ, bao gồm động cơ 1 pha, động cơ 3 pha 1 tốc độ và động cơ 3 pha hai tốc độ (đổi cực Dahlander).',
  },
  {
    num: '03',
    title: 'Phân tích và xây dựng sơ đồ khai triển',
    desc: 'Phân tích thông số xây dựng sơ đồ khai triển dây quấn stator hoặc rotor động cơ cảm ứng.',
  },
  {
    num: '04',
    title: 'Kiểm tra và đánh giá đầu ra',
    desc: 'Kiểm tra đánh giá quan hệ các thông số mật độ từ thông cực đại tại mỗi vị trí trên stator hoặc rotor dây quấn.',
  },
  {
    num: '05',
    title: 'Tính toán và chuẩn hoá toàn diện',
    desc: 'Tính toán và chuẩn hóa các thông số định mức nhằm đảm bảo động cơ làm việc ổn định và hiệu quả.',
  },
  {
    num: '06',
    title: 'Tiết kiệm thời gian tính toán',
    desc: 'Tiết kiệm đến 70% thời gian tính toán, giảm sai sót khi thiết kế - tính toán dữ liệu thủ công.',
  },
];

export const THEORY_CARDS = [
  {
    id: 1, title: 'Từ trường và Mạch từ cơ bản',
    desc: 'Khái niệm cơ bản về từ trường, đường sức từ, từ thông và các định luật Ampere, Faraday trong máy điện.',
    icon: '🔵', tags: ['Cơ bản', 'Từ trường'],
  },
  {
    id: 2, title: 'Dây quấn Stator 3 pha',
    desc: 'Nguyên lý thiết kế dây quấn stator 3 pha: bước cực, bước dây quấn, hệ số dây quấn và phân bổ rãnh.',
    icon: '⚡', tags: ['3 pha', 'Stator'],
  },
  {
    id: 3, title: 'Dây quấn 2 tốc độ (Dahlander)',
    desc: 'Thiết kế dây quấn động cơ 2 tốc độ theo phương pháp Dahlander, tỉ lệ tốc độ 1:2.',
    icon: '🔄', tags: ['2 tốc độ', 'Dahlander'],
  },
  {
    id: 4, title: 'Dây quấn 1 pha cảm ứng',
    desc: 'Nguyên lý và thiết kế dây quấn động cơ 1 pha: dây quấn chính, dây quấn phụ, tụ điện khởi động.',
    icon: '🔌', tags: ['1 pha', 'Tụ điện'],
  },
  {
    id: 5, title: 'Tính toán công suất định mức',
    desc: 'Phương pháp tính toán công suất đầu ra, hiệu suất, hệ số công suất và các thông số nhiệt của động cơ.',
    icon: '📊', tags: ['Công suất', 'Hiệu suất'],
  },
  {
    id: 6, title: 'Mạch nhánh song song (A)',
    desc: 'Các sơ đồ mạch nhánh song song trong dây quấn stator và ảnh hưởng đến dòng điện, từ thông.',
    icon: '🔗', tags: ['Mạch nhánh', 'Song song'],
  },
];
