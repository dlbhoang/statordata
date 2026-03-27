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
  { label: '3 pha, 1 tốc độ', path: '/tinh-toan/3pha-1tocdo' },
  { label: '3 pha, 2 tốc độ (1/2)', path: '/tinh-toan/3pha-2tocdo' },
  { label: '1 pha', path: '/tinh-toan/1pha' },
  { label: 'Hướng dẫn kỹ thuật', path: '/huong-dan' },
];

export const HERO_FEATURES = [
  'Vô vô hoá thiết kế và tính toán dữ liệu dây quấn động cơ Cảm ứng',
  'Hỗ trợ kỹ thuật thiết kế và tính toán dữ liệu dây quấn động cơ cảm ứng',
  'Tính toán số liệu dây quấn stator Motor 1 tốc độ và 2 tốc độ',
  'Tính toán số vòng dây, đường kính dây, công suất định mức động cơ',
  'Ứng dụng cho động cơ 1 pha và 3 pha với đầy đủ sơ đồ mạch nhánh',
];

export const ANALYSIS_RESULTS = [
  { title: 'Kiểm tra cực tốt nhất', desc: 'có thể thực hiện cho động cơ cảm ứng.' },
  { title: 'Thống số sơ đồ khai triển', desc: 'dây quấn stator động cơ theo tiêu chuẩn IEC.' },
  { title: 'Góc lệch vị trí', desc: 'không gian giữa hai pha liên tiếp trong stator.' },
  { title: 'Quan hệ từ thông cực đại', desc: 'trên mỗi cực từ tại khe hở không khí.' },
  { title: 'Số vòng dây quấn', desc: 'cho mỗi pha dây quấn stator động cơ.' },
  { title: 'Số vòng mỗi bối dây', desc: 'và chọn tải số vòng tối ưu nhất.' },
  { title: 'Đường kính dây đồng', desc: 'tốt nhất không có lớp men cách điện d.' },
  { title: 'Các thông số định mức', desc: 'toàn diện của động cơ theo chuẩn IEC 60034.' },
];

export const WHY_ITEMS = [
  {
    num: '01', title: 'Làm việc dựa trên phần mềm Statordata.com',
    desc: 'Làm việc trực tiếp với các thông số đầu vào của stator do người dùng cung cấp, đáp ứng các thao tác tính toán và cho các kết quả chính xác, trình thiết kế dây quấn stator chuyên nghiệp.',
  },
  {
    num: '02', title: 'Hỗ trợ tính toán thống số từ vòng dây',
    desc: 'Hỗ trợ bổ sung và tính toán dữ liệu sau khi lựa chọn thông số từ vòng dây quấn stator theo chế độ 3 pha Diện/Cylinder đầy đủ.',
  },
  {
    num: '03', title: 'Phân tích và xây dựng sơ đồ khai triển',
    desc: 'Phân tích thông số kỹ thuật và xây dựng sơ đồ khai triển dây quấn stator Motor hoặc rotor, kết cấu đồng thanh chuyên nghiệp.',
  },
  {
    num: '04', title: 'Kiểm tra và đánh giá đầu ra',
    desc: 'Kiểm tra đánh giá đầu ra các thông số kỹ thuật số mô tả thống số cực đại tại mức từ động cơ, đảm bảo độ chính xác cao nhất.',
  },
  {
    num: '05', title: 'Tính toán và chuẩn hoá toàn diện',
    desc: 'Tính toán và chuẩn hoá các thông số động cơ dựa trên những tham số đầu vào, chuẩn hóa theo tiêu chuẩn IEC quốc tế.',
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
