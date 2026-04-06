export const NAV_ITEMS = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Kỹ thuật – Công nghệ', path: '/ky-thuat' },
  { label: 'Điều khoản dịch vụ', path: '/dieu-khoan' },
  { label: 'Học tập 3 pha, 1 tốc độ', path: '/hoc-tap/3pha-1tocdo' },
  { label: 'Học tập 3 pha, 2 tốc độ', path: '/hoc-tap/3pha-2tocdo' },
  { label: 'Học tập 1 pha', path: '/hoc-tap/1pha' },
  { label: 'Sơ đồ mạch nhánh', path: '/so-do-mach' },
];

export const SUBNAV_ITEMS = [
  { label: 'Bắt đầu tính toán', path: '/' },
  { label: '3 pha, 1 tốc độ', path: '#' },
  { label: '3 pha, 2 tốc độ (1/2)', path: '#' },
  { label: '1 pha', path: '#' },
  { label: 'Hướng dẫn kỹ thuật', path: '/huong-dan' },
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
