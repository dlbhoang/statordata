import { useState, useRef, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Subnav from '../components/Subnav';
import styles from './LyThuyet3Pha1Toc.module.css';

/* Đặt toàn bộ 39 ảnh (trong file zip đính kèm) vào: public/images/lythuyet-3pha-1toc/
   rồi giữ nguyên tên file — component này tham chiếu ảnh qua đường dẫn public. */
const IMG = (name) => `/images/${name}`;

function Figure({ src, caption, maxWidth }) {
  return (
    <div className={styles.figure} style={maxWidth ? { maxWidth, margin: '18px auto 24px' } : undefined}>
      <img src={IMG(src)} alt={caption} loading="lazy" />
      {caption && <div className={styles.figCaption}>{caption}</div>}
    </div>
  );
}

function FigRow({ children }) {
  return <div className={styles.figRow}>{children}</div>;
}

function Formula({ children }) {
  return (
    <div className={styles.formulaBox}>
      <BlockMath math={children} />
    </div>
  );
}

/* Bọc nội dung dài: mặc định chỉ hiện tối đa `collapsedHeight` (px), phía dưới có lớp
   phủ mờ dần + nút "Xem thêm / Thu gọn". Tự đo chiều cao thật của nội dung — nếu nội
   dung ngắn hơn collapsedHeight thì không hiện nút (không giới hạn, không phủ mờ). */
function ReadMore({ children, collapsedHeight = 620 }) {
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const innerRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollHeight > collapsedHeight + 32);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children, collapsedHeight]);

  return (
    <div className={styles.readMoreOuter}>
      <div
        ref={innerRef}
        className={styles.readMoreInner}
        style={{ maxHeight: expanded || !overflowing ? 'none' : collapsedHeight }}
      >
        {children}
        {!expanded && overflowing && <div className={styles.readMoreFade} />}
      </div>
      {overflowing && (
        <div className={styles.readMoreBtnWrap}>
          <button
            type="button"
            className={styles.readMoreBtn}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Thu gọn ▲' : 'Xem thêm ▾'}
          </button>
        </div>
      )}
    </div>
  );
}

/* Khối nội dung có nhiều Tab con — bám theo đúng các mục được đánh nhãn "Tab:" trong
   tài liệu gốc (mỗi Tab = 1 nút bấm, chỉ hiển thị nội dung của Tab đang chọn). */
function TabGroup({ id, title, intro, tabs }) {
  const [active, setActive] = useState(null);
  const selectedTab = active === null ? null : tabs[active];

  return (
    <section id={id} className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      {intro && <div className={styles.groupIntro}>{intro}</div>}
      <div className={styles.tabSplit}>
        <div className={styles.tabSideList}>
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              className={`${styles.tabSideBtn} ${i === active ? styles.tabSideBtnActive : ''}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className={styles.tabSideContent}>
          {selectedTab ? (
            <div className={styles.body}>
              <h4 className={styles.tabPanelTitle}>{selectedTab.label}</h4>
              <ReadMore key={active}>{selectedTab.content}</ReadMore>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>Chọn một mục ở bên trái để xem nội dung chi tiết.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



const NAV = [
  ['ky-thuat-day-quan', 'Kỹ thuật dây quấn động cơ cảm ứng 3 pha, 1 tốc độ'],
  ['khai-trien-so-nguyen', 'PP khai triển 1 tốc độ — số nguyên'],
  ['khai-trien-phan-so', 'PP khai triển 1 tốc độ — phân số tối giản'],
];

export default function LyThuyet3Pha1Toc() {
  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 48 }}>
        <span className="sec-label">Lý thuyết</span>
        <h2 className="sec-title">
          <span className="accent">Mục 3 — Trung tâm học tập</span>
          <br />Kỹ thuật dây quấn động cơ cảm ứng 3 pha, 1 tốc độ
        </h2>
        <p className="sec-desc">
          Biên soạn: <strong>Võ Nguyễn Bá Liêu</strong>. Toàn bộ lý thuyết, công thức, ví dụ mẫu và sơ đồ
          gốc trong tài liệu được trình bày đầy đủ bên dưới — dùng làm tài liệu tham khảo song song với các
          công cụ tính toán 1 lớp / 2 lớp.
        </p>

        <div className={`card ${styles.tocCard}`}>
          <div className="card-header">
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)' }} />
            <h4>Mục lục</h4>
          </div>
          <div className="card-body">
            <ol className={styles.tocList}>
              {NAV.map(([id, label]) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ol>
          </div>
        </div>

        {/* ================= NHÓM 1: KỸ THUẬT DÂY QUẤN ĐỘNG CƠ CẢM ỨNG 3 PHA, 1 TỐC ĐỘ ================= */}
        <TabGroup
          id="ky-thuat-day-quan"
          title="Lý thuyết dây quấn 3 pha 1 tốc độ"
          tabs={[
            {
              label: 'Kỹ thuật dây quấn động cơ cảm ứng 3 pha, 1 tốc độ',
              content: (
                <>
                  <h4 className={styles.subTitle}>Tổng quan</h4>
                  <p>Kỹ thuật dây quấn động cơ cảm ứng 3 pha, 1 tốc độ là một trong những kiến thức nền tảng quan trọng trong thiết kế và phân tích động cơ không đồng bộ. Phần này trình bày chi tiết về cấu trúc, nguyên lý hoạt động và các phương pháp xây dựng sơ đồ khai triển dây quấn cho các loại động cơ khác nhau.</p>
                  <p><strong>Nội dung chính bao gồm:</strong></p>
                  <ul>
                    <li>Ký hiệu và nguyên lý cơ bản của dây quấn</li>
                    <li>Các quy tắc liên kết và xác định đầu dây pha</li>
                    <li>Phương pháp xây dựng sơ đồ khai triển cho dây quấn 1 lớp và 2 lớp</li>
                    <li>Phân tích sơ đồ hình tia sức điện động rãnh</li>
                  </ul>
                </>
              ),
            },
            {
              label: 'Ký hiệu và nguyên lý kỹ thuật dây quấn',
              content: (
                <>
                  <h4 className={styles.subTitle}>1.0. Các thuật ngữ cơ bản</h4>
                  <p><strong>1. Bối dây (Coils):</strong> là cuộn dây quấn được tạo nên do nhiều vòng dây quấn nối
                    tiếp nhau và có hình dạng theo dạng hình học định trước.</p>
                  <p><strong>2. Cạnh tác dụng (Conductors):</strong> là thành phần bối dây được lồng vào trong rãnh
                    của lõi thép stator. Một cuộn dây bao gồm hai cạnh tác dụng.</p>
                  <p><strong>3. Đầu nối:</strong> là thành phần của cuộn dây dùng liên kết các cạnh tác dụng của bối
                    dây với nhau.</p>

                  <Figure
                    src="h1-1_ky-hieu-boi-day.png"
                    caption="Hình 1.1: Các ký hiệu của bối dây trong sơ đồ khai triển dây quấn."
                  />

                  <p><strong>4. Bước cuộn dây (Coil Pitch y):</strong> là khoảng cách giữa hai cạnh tác dụng của bối
                    dây, tính theo đơn vị rãnh. Bước bối dây còn được gọi là bước quấn dây.</p>
                  <p>Ví dụ: nếu đọc thứ tự các cạnh tác dụng là 1 → 9 thì bước bối dây (Coil Pitch) y = 8 (rãnh).</p>

                  <Figure src="h1-2_buoc-boi-day.png" caption="Hình 1.2: Bước bối dây (Coil pitch y), y = 8 rãnh." maxWidth={420} />

                  <h4 className={styles.subTitle}>1.1. Các quan hệ cơ bản áp dụng trong kỹ thuật dây quấn</h4>
                  <p>Ký hiệu: <strong>f</strong> — tần số nguồn áp cấp vào dây quấn stator; <strong>2p</strong> — số
                    cực từ của động cơ (p: số đôi cực); <strong>N_{"{tđ}"}</strong> — tốc độ đồng bộ của từ
                    trường quay; <strong>τ</strong> — bước cực từ (khoảng không gian trải rộng của mỗi cực từ trên
                    stator); <strong>Z</strong> — tổng số rãnh của stator (hay rotor); <strong>q</strong> — số rãnh
                    phân bố cho mỗi pha trên một bước cực từ.</p>

                  <Formula>{"f = \\frac{p \\cdot N_{tđ}}{60} = \\frac{2p \\cdot N_{tđ}}{120}"}</Formula>
                  <Formula>{"\\tau = \\frac{Z}{2p} \\text{ (rãnh/cực)}"}</Formula>
                  <Formula>{"q = \\frac{\\tau}{3} \\text{ (rãnh/pha/cực)}"}</Formula>
                  <p style={{ fontSize: 13, color: 'var(--text2)' }}>
                    Đơn vị: [f] = Hz; [N<sub>tđ</sub>] = vòng/phút; [Z] = [τ] = rãnh.
                  </p>

                  <h4 className={styles.subTitle}>1.2. Quy định về đầu đầu và đầu cuối của dây quấn máy điện</h4>
                  <p>Các đầu dây pha động cơ không đồng bộ 3 pha được quy ước như sau:</p>
                  <ul>
                    <li>Pha A: ký hiệu A.X &nbsp;— hoặc U₁.U₂</li>
                    <li>Pha B: ký hiệu B.Y &nbsp;— hoặc V₁.V₂</li>
                    <li>Pha C: ký hiệu C.Z &nbsp;— hoặc W₁.W₂</li>
                  </ul>

                  <FigRow>
                    <Figure src="h1-3a_dau-day-pha-abc.png" caption="Hình 1.3a: Quy định đầu dây mỗi pha (A.X / B.Y / C.Z)." />
                    <Figure src="h1-3b_dau-day-pha-u1v1w1.png" caption="Hình 1.3b: Ký hiệu tương đương U₁.U₂ / V₁.V₂ / W₁.W₂." />
                  </FigRow>

                  <h4 className={styles.subTitle}>2. Quy tắc liên kết mạch nhánh song song (A) trong máy điện</h4>
                  <h4 className={styles.subTitle} style={{ fontSize: 14, marginTop: 16 }}>2.1. Quy tắc liên kết cực thật</h4>
                  <div className={styles.note}>Áp dụng khi bộ dây thỏa tính chất: <strong>Số nhóm bối dây = Số cực 2p</strong>.</div>

                  <p><strong>2.1.1. Trường hợp liên kết nối tiếp các nhóm bối dây:</strong> Quy ước cách đánh dấu cực
                    tính cho nhóm bối dây quấn: khi nhìn thẳng vào nhóm cuộn dây, đầu ở phía trái nhóm quy ước là đầu
                    <strong> ĐẦU</strong>, đầu còn lại nằm bên phải quy ước là đầu <strong>CUỐI</strong> (hoặc ngược lại).</p>
                  <p>Liên kết <strong>hai đầu cùng tên</strong> của hai nhóm bối dây cùng thuộc về một pha bố trí
                    liên tiếp lân cận nhau trên sơ đồ khai triển của dây quấn.</p>

                  <Figure
                    src="h1-4_lienket-noitiep-cucthat.png"
                    caption="Hình 1.4: Phương pháp liên kết nối tiếp (A = 1) theo quy tắc đấu CỰC THẬT. (Một pha có 2 nhóm bối dây, thực hiện số cực 2p = 2)."
                  />

                  <p><strong>2.1.2. Trường hợp liên kết song song các nhóm bối dây:</strong> Liên kết <strong>hai đầu
                    khác tên</strong> của 2 nhóm bối dây (cùng thuộc một pha, bố trí liên tiếp lân cận nhau) để tạo
                    thành các đầu chung của hệ thống.</p>

                  <Figure
                    src="h1-5_lienket-songsong-cucthat.png"
                    caption="Hình 1.5: Liên kết song song (A = 2) cực thật, bằng phương pháp nối song song các nhóm bối dây (2p = 2)."
                  />

                  <h4 className={styles.subTitle} style={{ fontSize: 14 }}>2.2. Quy tắc liên kết cực giả</h4>
                  <div className={styles.note}>Áp dụng khi bộ dây thỏa tính chất: <strong>Số nhóm bối dây = Số đôi cực p</strong>.</div>

                  <p><strong>2.2.1. Trường hợp liên kết nối tiếp các nhóm bối dây:</strong> Liên kết <strong>hai đầu
                    khác tên</strong> của hai nhóm bối dây (cùng thuộc một pha) bố trí liên tiếp lân cận nhau trên sơ
                    đồ khai triển của dây quấn.</p>

                  <Figure
                    src="h1-6_lienket-noitiep-cucgia.png"
                    caption="Hình 1.6: Phương pháp liên kết nối tiếp (A = 1) theo quy tắc đấu CỰC GIẢ (2p = 4 cực)."
                  />

                  <p><strong>2.2.2. Trường hợp liên kết song song các nhóm bối dây:</strong> Liên kết <strong>hai đầu
                    cùng tên</strong> của hai nhóm bối dây (cùng thuộc một pha, bố trí liên tiếp lân cận nhau) để tạo
                    thành các đầu chung.</p>

                  <Figure
                    src="h1-7_lienket-songsong-cucgia.png"
                    caption="Hình 1.7: Liên kết song song (A = 2) cực giả, bằng phương pháp nối song song các nhóm bối dây (2p = 4)."
                  />

                  <h4 className={styles.subTitle}>3. Cách xác định đầu dây pha trong kỹ thuật dây quấn</h4>
                  <p>Tùy theo góc lệch vị trí không gian giữa hai pha liên tiếp được chọn:</p>
                  <div className={styles.formulaBox}>
                    Nếu lệch 120°: khoảng cách 2 đầu vào 2 pha liên tiếp = 120°/α<sub>đ</sub> = (2/3)·τ
                  </div>
                  <div className={styles.formulaBox}>
                    Nếu lệch 240°: khoảng cách 2 đầu vào 2 pha liên tiếp = 240°/α<sub>đ</sub> = (4/3)·τ
                  </div>
                </>
              ),
            },
            {
              label: 'Truyền động điện',
              content: (
                <>
                  <h4 className={styles.subTitle}>Tổng quan</h4>
                  <p>Trong quá trình vận hành động cơ điện, khi khởi động cần quan tâm đến 2 vấn đề chủ yếu:</p>
                  <ul>
                    <li>Giảm thấp dòng khởi động qua dây dẫn, cấp nguồn vào các bộ dây quấn stator của động cơ ngay
                      thời điểm khởi động.</li>
                    <li>Phương pháp giảm dòng khởi động thực chất là giảm áp cấp vào động cơ tại thời điểm khởi
                      động. Theo lý thuyết động cơ không đồng bộ 3 pha: <strong>momen khởi động tỉ lệ thuận với bình
                      phương giá trị điện áp hiệu dụng cấp vào động cơ</strong> — nên giảm dòng khởi động cũng làm
                      giảm momen khởi động.</li>
                  </ul>
                  <p>Trong thực tế, các biện pháp giảm dòng khởi động chia thành hai dạng:</p>
                  <ul>
                    <li>Giảm áp nguồn cấp vào dây quấn stator bằng phương pháp cổ điển: biến áp giảm áp, hay đấu nối
                      tiếp phần tử hạn áp (điện trở/điện cảm) với dây quấn stator.</li>
                    <li>Dùng bộ biến đổi áp xoay chiều 3 pha với linh kiện điện tử để điều chỉnh áp hiệu dụng nguồn 3
                      pha cấp vào động cơ — gọi là phương pháp <strong>khởi động mềm (soft start)</strong>.</li>
                  </ul>

                  <h4 className={styles.subTitle}>1. Phương pháp xây dựng sơ đồ đấu nối động cơ không đồng bộ 3 pha</h4>
                  <p>Tùy theo công dụng và phạm vi sử dụng, các đầu ra của bộ dây quấn stator được thực hiện theo một
                    trong các dạng:</p>
                  <ul>
                    <li><strong>6 đầu ra dây:</strong> vận hành theo sơ đồ liên kết Δ (tam giác) hay Y (sao).</li>
                    <li><strong>9 đầu ra dây:</strong> liên kết nối tiếp (Y) – sao song song (2Y) hay tam giác nối
                      tiếp (Δ) – tam giác song song (2Δ).</li>
                    <li><strong>12 đầu ra dây:</strong> liên kết nối tiếp (Y) – sao song song (2Y) hay tam giác nối
                      tiếp (Δ) – tam giác song song (2Δ).</li>
                  </ul>
                  <p>Tương ứng mỗi trường hợp cần quan tâm: sơ đồ ra dây & cách đánh số thứ tự đầu dây; sơ đồ đấu dây
                    và áp nguồn cấp vào (chọn điện áp định mức mỗi pha làm chuẩn); quan hệ giữa các điện áp nguồn
                    theo mỗi sơ đồ đấu dây.</p>

                  <h4 className={styles.subTitle}>1.1.0. Động cơ 3 pha ra 6 đầu dây</h4>
                  <p>Các đầu ra dây của 3 pha dây quấn stator được đánh thứ tự theo tiêu chuẩn NEMA: <strong>đầu ĐẦU
                    </strong> các pha đánh số <strong>1, 2, 3</strong>; <strong>đầu CUỐI</strong> đánh số <strong>4,
                    5, 6</strong>. Đầu và cuối của cùng một pha số thứ tự chênh lệch 3 đơn vị.</p>

                  <FigRow>
                    <Figure src="h6dau-1_sodo-hinhsao-Y.png" caption="Hình 1: Sơ đồ ra dây và liên kết dây quấn stator theo hình sao (Y)." />
                    <Figure src="h6dau-2_sodo-hinhtamgiac.png" caption="Hình 2: Sơ đồ ra dây và liên kết dây quấn stator theo hình tam giác (Δ)." />
                  </FigRow>

                  <p><strong>Liên kết hình sao Y:</strong> mối nối chung là giao điểm của 3 đầu 1,2,3 (khi đó nguồn
                    L1,L2,L3 cấp vào 4,5,6) — hoặc giao điểm của 3 đầu 4,5,6 (khi đó nguồn cấp vào 1,2,3).</p>
                  <p><strong>Liên kết hình tam giác Δ:</strong> dựng 3 đỉnh, mỗi đỉnh là giao điểm của 2 đầu khác tính
                    chất của 2 bộ dây quấn (nối CUỐI pha này với ĐẦU pha kế tiếp, hoán vị vòng thứ tự để có đủ 3 đỉnh).</p>

                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây Y}} = \\sqrt{3} \\cdot U_{\\text{pha}} \\quad \\text{(1.1)}`} />
                  </div>
                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây Δ}} = U_{\\text{pha}} \\quad \\text{(1.2)}`} />
                  </div>
                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây Y}} = \\sqrt{3} \\cdot U_{\\text{dây Δ}} \\quad \\text{(1.3)}`} />
                  </div>
                  <div className={styles.highlight}>
                    Tóm lại: với động cơ 3 pha ra 6 đầu, thay đổi sơ đồ liên kết khi vận hành là để tạo sự tương
                    thích giữa điện áp quy định của nhà sản xuất cho mỗi sơ đồ đấu dây với điện áp nguồn cung cấp.
                  </div>

                  <h4 className={styles.subTitle}>1.1.2. Động cơ 3 pha ra 9 đầu dây</h4>
                  <p>Có hai trường hợp vận hành: <strong>sao nối tiếp (Y) hay sao song song (2Y)</strong>, hoặc
                    <strong> tam giác nối tiếp (Δ) hay tam giác song song (2Δ)</strong>.</p>

                  <FigRow>
                    <Figure src="h9dau-3_sao-noitiep-Y.png" caption="Hình 3: Sơ đồ đầu dây 9 đầu, liên kết sao (Y) nối tiếp." />
                    <Figure src="h9dau-4_sao-songsong-2Y.png" caption="Hình 4: Sơ đồ đầu dây 9 đầu, liên kết sao (2Y) song song." />
                  </FigRow>
                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây Y}} = \\sqrt{3} \\cdot U_{\\text{pha}} \\quad \\text{(1.1)}`} />
                  </div>
                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây 2Y}} = \\frac{U_{\\text{pha}}}{2} \\quad \\text{(1.4)}`} />
                  </div>
                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây Y}} = 2 \\cdot U_{\\text{dây 2Y}} \\quad \\text{(1.5)}`} />
                  </div>

                  <FigRow>
                    <Figure src="h9dau-5_tamgiac-noitiep.png" caption="Hình 5: Sơ đồ đầu dây 9 đầu, liên kết tam giác (Δ) nối tiếp." />
                    <Figure src="h9dau-6_tamgiac-songsong-2D.png" caption="Hình 6: Sơ đồ đầu dây 9 đầu, liên kết tam giác (2Δ) song song." />
                  </FigRow>
                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây Δ}} = U_{\\text{pha}} \\quad \\text{(1.2)}`} />
                  </div>
                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây 2Δ}} = \\frac{U_{\\text{pha}}}{2} \\quad \\text{(1.6)}`} />
                  </div>
                  <div className={styles.formulaBox}>
                    <BlockMath math={`U_{\\text{dây Δ}} = 2 \\cdot U_{\\text{dây 2Δ}} \\quad \\text{(1.7)}`} />
                  </div>

                  <h4 className={styles.subTitle}>1.1.3. Động cơ 3 pha ra 12 đầu dây</h4>
                  <p>Có thể liên kết vận hành theo 1 trong 4 sơ đồ, tương ứng 4 cấp điện áp nguồn khác nhau. Mỗi pha
                    dây quấn được tách thành 2 nửa pha rời độc lập, mỗi nửa ra 2 đầu dây → 3 pha có tổng cộng 12 đầu.</p>
                  <div className={styles.note}>
                    Các đầu dây cùng thuộc một pha, số thứ tự chênh nhau 3 đơn vị: pha 1 → 1,4,7,10; pha 2 → 2,5,8,11;
                    pha 3 → 3,6,9,12.
                  </div>

                  <FigRow>
                    <Figure src="h12dau-7_sao-noitiep-Y.png" caption="Hình 7: 12 đầu dây, liên kết sao (Y) nối tiếp." />
                    <Figure src="h12dau-8_sao-songsong-2Y.png" caption="Hình 8: 12 đầu dây, liên kết sao (2Y) song song." />
                  </FigRow>
                  <FigRow>
                    <Figure src="h12dau-9_tamgiac-noitiep.png" caption="Hình 9: 12 đầu dây, liên kết tam giác (Δ) nối tiếp." />
                    <Figure src="h12dau-10_tamgiac-songsong-2D.png" caption="Hình 10: 12 đầu dây, liên kết tam giác (2Δ) song song." />
                  </FigRow>
                </>
              ),
            },
            {
              label: 'Sơ đồ hình tia sức điện động rãnh',
              content: (
                <>
                  <h4 className={styles.subTitle}>1.1. Các khái niệm và định nghĩa</h4>
                  <p>Khi xây dựng sơ đồ khai triển cho dây quấn stato máy điện ba pha, vấn đề quan trọng là cách phân
                    bố rãnh stator cho ba pha dây quấn. Khi từ trường quay quét qua các thanh dẫn của stato, trên mỗi
                    thanh dẫn xuất hiện sức điện động cảm ứng; sức điện động sinh ra trong các cạnh tác dụng của cùng
                    một rãnh gọi là <strong>sức điện động rãnh</strong>.</p>
                  <p>Một bối dây tạo thành từ hai cạnh tác dụng thuộc hai cực từ lân cận đối tính, tạo ra hai sức
                    điện động rãnh tức thời trái dấu nhau. Hai cạnh tác dụng thuộc hai rãnh kề nhau lệch pha theo
                    thời gian một góc bằng góc lệch điện <strong>α<sub>đ</sub></strong> giữa hai rãnh liên tiếp. Tập
                    hợp các vectơ sức điện động rãnh của một pha gọi là <strong>vùng pha</strong>, với trục đối xứng
                    gọi là <strong>trục pha</strong>. Ba trục pha lệch nhau từng đôi một một góc <strong>120° điện</strong>.</p>
                  <div className={styles.highlight}>
                    Dây quấn 1 lớp (bước đủ) luôn có vùng pha <strong>60° điện</strong>; dây quấn 2 lớp bước ngắn có
                    vùng pha tối đa <strong>120° điện</strong>.
                  </div>

                  <h4 className={styles.subTitle} style={{ fontSize: 14 }}>1.2. Trình tự xác định vùng pha</h4>
                  <p><span className={styles.stepBadge}>1</span><strong>Bước 01:</strong> từ số liệu stator, xây
                    dựng sơ đồ khai triển dây quấn 3 pha; cho dòng 3 pha vào để kiểm chứng số cực từ tạo thành.</p>
                  <p><span className={styles.stepBadge}>2</span><strong>Bước 02:</strong> từ sơ đồ khai triển mỗi
                    pha, xác định các cạnh tác dụng có dòng cùng hướng; lập bảng tổng kết cho 3 pha; vẽ sơ đồ sức
                    điện động rãnh theo góc lệch α<sub>đ</sub> (các vectơ xếp đều trên vòng tròn 360° điện ứng một
                    cặp cực từ).</p>
                  <p><span className={styles.stepBadge}>3</span><strong>Bước 03:</strong> từ các vectơ SĐĐ rãnh mỗi
                    pha suy ra vùng pha; xác định trục đối xứng; kiểm chứng góc lệch 120° giữa các trục pha.</p>

                  <div className={styles.exampleCard}>
                    <div className={styles.exampleTitle}>Mẫu 1 — Z = 36 rãnh, 2p = 4 cực — xác định vùng pha cho dây quấn 1 lớp và 2 lớp</div>

                    <p><strong>Bước 01 —</strong> tìm các thông số cơ bản τ; q; α<sub>đ</sub>:</p>
                    <Formula>{"\\tau = \\frac{Z}{2p} = \\frac{36}{4} = 9 \\text{ (rãnh/cực)}"}</Formula>
                    <Formula>{"q = \\frac{\\tau}{3} = \\frac{9}{3} = 3 \\text{ (rãnh/cực/pha)}"}</Formula>
                    <Formula>{"\\alpha_đ = \\frac{180°}{\\tau} = \\frac{180°}{9} = 20°"}</Formula>
                    <p><strong>Đối với dây quấn 2 lớp</strong> — phạm vi bước bối dây y:</p>
                    <Formula>{"\\frac{2\\tau}{3} \\leq y \\leq (\\tau - 1) \\Longleftrightarrow 6 \\leq y \\leq 8 \\text{ (rãnh)}"}</Formula>
                    <p>Chọn bước bối dây y = 6 (rãnh) để xây dựng sơ đồ khai triển dây quấn trên stator.</p>

                    <p><strong>Bước 02 —</strong> tất cả các dạng sơ đồ dây quấn 1 lớp có phân bố rãnh cho 3 pha trên
                      stator hoàn toàn giống nhau. Khi cho dòng 3 pha vào bộ dây quấn ta có 4 cực từ hình thành trên
                      stator (Hình 1). Từ α<sub>đ</sub> = 20° suy ra sơ đồ hình tia sức điện động rãnh (Hình 2): xem
                      không gian trải rộng của một cặp cực từ ứng với 360° điện thì trong khoảng một cặp cực từ chứa
                      18 rãnh — toàn bộ vector sức điện động của 36 rãnh xếp thành hai tầng, mỗi tầng ứng một cặp cực
                      từ.</p>
                    <div className={styles.note}>
                      Quy ước: nếu cạnh tác dụng có dòng đi lên được biểu diễn bằng đúng vector sức điện động rãnh vẽ
                      trong Hình 2, thì cạnh tác dụng có dòng hướng xuống được biểu diễn bằng vector đảo của vector
                      sức điện động rãnh tương ứng (và ngược lại).
                    </div>

                    <FigRow>
                      <Figure src="h01_khao-sat-cuc-tinh-1lop.png" caption="Hình 1: Khảo xác cực tính tạo thành trên sơ đồ khai triển dây quấn 1 lớp, động cơ Z = 36 rãnh, 2p = 4 cực." />
                      <Figure src="h02_hinh-tia-suc-dien-dong-ranh.png" caption="Hình 2: Hình tia sức điện động rãnh." />
                    </FigRow>

                    <p><strong>Bảng tổng kết các cạnh tác dụng của ba pha dây quấn — sơ đồ dây quấn 1 lớp:</strong></p>
                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        <thead>
                          <tr><th>PHA</th><th>Cạnh tác dụng có dòng điện hướng lên</th><th>Cạnh tác dụng có dòng điện hướng xuống</th></tr>
                        </thead>
                        <tbody>
                          <tr><td className={styles.cellA}>AX</td><td className={styles.left}>1, 2, 3, 19, 20, 21</td><td className={styles.left}>10, 11, 12, 28, 29, 30</td></tr>
                          <tr><td className={styles.cellB}>BY</td><td className={styles.left}>16, 17, 18, 34, 35, 36</td><td className={styles.left}>7, 8, 9, 25, 26, 27</td></tr>
                          <tr><td className={styles.cellC}>CZ</td><td className={styles.left}>13, 14, 15, 31, 32, 33</td><td className={styles.left}>22, 23, 24, 4, 5, 6</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <Figure src="h03_vung-pha-60do.png" caption="Hình 3: Vùng pha 60° và sơ đồ hình tia sức điện động rãnh trên stator động cơ Z = 36 rãnh; 2p = 4 cực." />

                    <p><strong>Bước 03 —</strong> xác định vùng cho dây quấn 2 lớp (bước bối dây y = 6 rãnh):</p>
                    <Figure src="h04_khao-sat-cuc-tinh-2lop.png" caption="Hình 4: Khảo xác cực tính tạo thành trên sơ đồ khai triển dây quấn 2 lớp, động cơ Z = 36 rãnh, 2p = 4 cực, bước bối dây y = 6 rãnh." />

                    <p><strong>Bảng tổng kết các cạnh tác dụng của ba pha dây quấn — sơ đồ dây quấn 2 lớp:</strong></p>
                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th rowSpan={2}>PHA</th>
                            <th colSpan={2}>Các cạnh tác dụng trên</th>
                            <th colSpan={2}>Các cạnh tác dụng dưới</th>
                          </tr>
                          <tr>
                            <th>Dòng điện đi lên</th><th>Dòng điện đi xuống</th>
                            <th>Dòng điện đi lên</th><th>Dòng điện đi xuống</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={styles.cellA}>AX</td>
                            <td className={styles.left}>1, 2, 3, 19, 20, 21</td>
                            <td className={styles.left}>10, 11, 12, 28, 29, 30</td>
                            <td className={styles.left}>16', 17', 18', 34', 35', 36'</td>
                            <td className={styles.left}>7', 8', 9', 25', 26', 27'</td>
                          </tr>
                          <tr>
                            <td className={styles.cellB}>BY</td>
                            <td className={styles.left}>16, 17, 18, 34, 35, 36</td>
                            <td className={styles.left}>7, 8, 9, 25, 26, 27</td>
                            <td className={styles.left}>13', 14', 15', 31', 32', 33'</td>
                            <td className={styles.left}>22', 23', 24', 4', 5', 6'</td>
                          </tr>
                          <tr>
                            <td className={styles.cellC}>CZ</td>
                            <td className={styles.left}>13, 14, 15, 31, 32, 33</td>
                            <td className={styles.left}>22, 22, 24, 5, 6</td>
                            <td className={styles.left}>28', 29', 30', 10', 11', 12'</td>
                            <td className={styles.left}>19', 20', 21', 1', 2', 3'</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p style={{ fontSize: 12.5, color: 'var(--text2)' }}>* Số liệu hàng CZ giữ nguyên theo bảng gốc của tài liệu (trang 5).</p>

                    <Figure src="h05_vung-pha-120do.png" caption="Hình 5: Vùng pha 120° và sơ đồ hình tia sức điện động cạnh tác dụng dây quấn 2 lớp trên stator động cơ Z = 36 rãnh; 2p = 4 cực. Bước bối dây y = 6 (rãnh)." />
                  </div>

                  <h4 className={styles.subTitle}>Xác định hệ số dây quấn từ sơ đồ hình tia sức điện động</h4>

                  <p><strong>Hệ số dây quấn 1 lớp:</strong> dây quấn 1 lớp luôn có phân bố các tia sức điện động rãnh
                    cho mỗi pha trong vùng pha <strong>60°</strong>, bất chấp kiểu dây quấn — sự thay đổi hình dạng
                    nhóm bối dây chỉ ảnh hưởng đến điện trở dây quấn stato và điện kháng tản từ của bối dây quấn,
                    không có tác dụng khử sóng hài bậc cao hình thành trong sức từ động do dây quấn stato tạo ra.
                    Dây quấn 1 lớp được xem là loại dây quấn bước đủ (tính chất căn cứ vào hình dạng sức từ động tạo
                    bởi pha dây quấn phân bố trên một cặp cực từ, không căn cứ vào bước dây quấn thực tế đang thực
                    hiện).</p>
                  <div className={styles.highlight}>
                    Hệ số bước ngắn K<sub>n</sub> của dây quấn một lớp luôn bằng 1. Do đó, hệ số dây quấn của dây
                    quấn 1 lớp bằng với hệ số quấn rải. Tất cả các dạng dây quấn 1 lớp xây dựng trên cùng số liệu
                    stato sẽ có cùng một giá trị hệ số dây quấn.
                  </div>

                  <p><strong>Hệ số dây quấn 2 lớp:</strong> ngược lại, dây quấn 2 lớp luôn có phân bố các tia sức
                    điện động rãnh cho mỗi pha trong vùng pha <strong>120°</strong>. Sơ đồ tia sức điện động rãnh sẽ
                    thay đổi khi thay đổi bước dây quấn, nhưng vùng pha luôn có giá trị lớn hơn 60° và tối đa bằng
                    120°. Đối với dây quấn 2 lớp, nếu chọn bước bối dây y = τ thì dây quấn thuộc loại bước đủ; nếu
                    chọn 2τ/3 ≤ y ≤ (τ − 1) thì dây quấn thuộc loại bước ngắn. Hệ số bước ngắn tỉ lệ thuận theo bước
                    bối dây — nếu bước bối dây càng rút ngắn thì hệ số quấn rải càng giảm thấp.</p>

                  <p>Ngoài quan hệ tính toán hệ số dây quấn bằng phương pháp đại số, hệ số dây quấn còn có thể được
                    xác định thông qua sơ đồ hình tia sức điện động rãnh. Nếu gọi <strong>n</strong> là tổng số vector
                    sức điện động rãnh chứa trong 1 pha, <strong>E<sub>r</sub></strong> là suất của một vector sức
                    điện động rãnh, <strong>E<sub>pha</sub></strong> là độ lớn của hình chiếu thẳng góc của tổng
                    vector sức điện động rãnh trong 1 pha xuống trục pha, hệ số dây quấn được xác định theo quan hệ
                    sau:</p>
                  <Formula>{"K_{dq} = \\frac{E_{pha}}{n \\cdot E_r}"}</Formula>

                  <div className={styles.exampleCard}>
                    <div className={styles.exampleTitle}>Mẫu 2 — Khảo sát hệ số dây quấn 1 lớp (Z = 36 rãnh, 2p = 4 cực)</div>
                    <p>Cho stator động cơ không đồng bộ 3 pha có Z = 36 rãnh, 2p = 4, dây quấn stator dạng dây quấn 1
                      lớp, có sơ đồ hình tia tìm được trong Hình 3. Xác định hệ số dây quấn 1 lớp trên sơ đồ hình tia
                      sức điện động rãnh.</p>
                    <p><strong>Giải:</strong> từ sơ đồ hình tia sức điện động rãnh phân bố trên 1 pha, vẽ thu gọn lại
                      sơ đồ (Hình 6), tìm vectơ tổng của toàn bộ các vectơ sức điện động rãnh trên 1 pha, xác định
                      hình chiếu của vectơ tổng trên trục pha, suy ra biểu thức tính hệ số dây quấn:</p>
                    <Formula>{"E_{pha} = 4E_r\\cos\\alpha_đ + 4E_r + 4E_r\\cos\\alpha_đ = 4E_r\\left(1 + 2\\cos\\alpha_đ\\right)"}</Formula>
                    <p>Hệ số dây quấn tính theo phương pháp hình tia sức điện động như sau:</p>
                    <Formula>{"K_{dq} = \\frac{E_{pha}}{12E_r} = \\frac{4\\left(1 + 2\\cos20°\\right)}{12} = 0.967371"}</Formula>
                    <p>Nếu áp dụng theo phương pháp đại số như sau:</p>
                    <Formula>{"K_{dq} = \\frac{\\sin\\left(q\\cdot\\frac{\\alpha_đ}{2}\\right)}{q\\cdot\\sin\\left(\\frac{\\alpha_đ}{2}\\right)} = \\frac{\\sin\\left(3\\cdot\\frac{20°}{2}\\right)}{3\\cdot\\sin\\left(\\frac{20°}{2}\\right)} = 0.967371"}</Formula>
                    <div className={styles.note}>Áp dụng theo 2 phương pháp ta có thể thấy kết quả tìm thấy trùng khớp nhau.</div>
                    <Figure src="h06_thu-gon-suc-dien-dong-pha-a.png" caption="Hình 6: Hình vẽ thu gọn sức điện động của pha A, trong mẫu 1." maxWidth={520} />
                  </div>

                  <div className={styles.exampleCard}>
                    <div className={styles.exampleTitle}>Mẫu 3 — Khảo sát hệ số dây quấn 2 lớp (Z = 36 rãnh, 2p = 4 cực, y = 6)</div>
                    <p>Cho stator động cơ không đồng bộ 3 pha có Z = 36 rãnh, 2p = 4, có sơ đồ hình tia tìm được
                      trong Hình 5. Bước bối dây y = 6.</p>
                    <p><strong>Giải:</strong> từ sơ đồ hình tia sức điện động, vẽ lại phân bố sức điện động rãnh cho
                      pha B (Hình 7). Thu gọn các vector sức điện động rãnh: 24 vector sức điện động rãnh được thay
                      thế bằng 6 vector sức điện động rãnh đối xứng từng đôi qua trục pha. Chọn một cặp vector đối
                      xứng qua trục pha để tìm hình chiếu của cặp vector này xuống trục pha; gọi β là góc hợp bởi
                      vector sức điện động tương đương với trục pha và E<sub>tp</sub> là suất của hình chiếu thẳng
                      góc của cặp vector sức điện động tương đương xuống trục pha, ta có:</p>
                    <Formula>{"E_{tp} = 2\\cdot\\left(4E_r\\right) = 8E_r\\cos\\beta"}</Formula>
                    <p>Vì có 3 cặp vector sức điện động rãnh cách trục pha lần lượt các góc α<sub>đ</sub>/2;
                      3α<sub>đ</sub>/2; 5α<sub>đ</sub>/2 nên hệ số dây quấn tính theo phương pháp hình tia sức điện
                      động như sau:</p>
                    <Formula>{"K_{dq} = \\frac{8E_r\\left(\\cos\\frac{\\alpha_đ}{2} + \\cos\\frac{3\\alpha_đ}{2} + \\cos\\frac{5\\alpha_đ}{2}\\right)}{24E_r} = \\frac{8\\left(\\cos10° + \\cos30° + \\cos50°\\right)}{24} = 0.831206"}</Formula>
                    <p>Nếu áp dụng theo phương pháp đại số như sau:</p>
                    <Formula>{"K_{dq} = \\frac{\\sin\\left(q\\cdot\\frac{\\alpha_đ}{2}\\right)}{q\\cdot\\sin\\left(\\frac{\\alpha_đ}{2}\\right)}\\cdot\\sin\\left(\\frac{y}{\\tau}\\cdot90°\\right) = \\frac{\\sin\\left(3\\cdot\\frac{20°}{2}\\right)}{3\\cdot\\sin\\left(\\frac{20°}{2}\\right)}\\cdot\\sin\\left(\\frac{6}{9}\\cdot90°\\right) = 0.831206"}</Formula>
                    <div className={styles.note}>
                      Trong đó, hệ số bước ngắn K<sub>n</sub> của dây quấn 2 lớp:{' '}
                      <InlineMath math={"K_N = \\sin\\left(\\frac{y}{\\tau}\\cdot90°\\right)"} />. Áp dụng theo 2
                      phương pháp ta có thể thấy kết quả tìm thấy trùng khớp nhau.
                    </div>
                    <Figure src="h07_thu-gon-suc-dien-dong-pha-b.png" caption="Hình 7: Hình vẽ thu gọn sức điện động của pha B, trong mẫu 1." maxWidth={520} />
                  </div>
                </>
              ),
            },
          ]}
        />

        {/* ================= NHÓM 2: PP KHAI TRIỂN 3 PHA 1 TỐC ĐỘ, SỐ NGUYÊN ================= */}
        <TabGroup
          id="khai-trien-so-nguyen"
          title="Phương pháp xây dựng sơ đồ khai triển 3 pha 1 tốc độ, số nguyên"
          tabs={[
            {
              label: 'Xây dựng sơ đồ khai triển 3 pha 1 lớp',
              content: (
                <>
                  <p><span className={styles.stepBadge}>1</span><strong>Bước 01:</strong> căn cứ Z, 2p xác định τ, q.</p>
                  <p><span className={styles.stepBadge}>2</span><strong>Bước 02:</strong> căn cứ τ, q xác định phân
                    bố rãnh trên stator cho từng pha; vẽ các đoạn thẳng song song, bằng nhau, cách đều nhau — tổng số
                    đoạn thẳng bằng đúng tổng số rãnh Z; đánh số thứ tự cho mỗi đoạn.</p>

                  <div className={styles.exampleCard}>
                    <div className={styles.exampleTitle}>Mẫu 1 — Z = 36 rãnh, 2p = 4 cực (1450 vòng/phút, f = 50 Hz) — dây quấn 1 lớp</div>
                    <Formula>{"\\tau = \\frac{Z}{2p} = \\frac{36}{4} = 9 \\text{ (rãnh/cực)}"}</Formula>
                    <Formula>{"q = \\frac{\\tau}{3} = \\frac{9}{3} = 3 \\text{ (rãnh/1cực/1pha)}"}</Formula>
                    <p>τ = 9 (rãnh) nghĩa là mỗi cực từ chiếm 9 rãnh trong tổng số 36 rãnh của stator. q = 3 (rãnh)
                      nghĩa là mỗi pha (A, B, C) chiếm 3 rãnh trong mỗi bước cực từ.</p>

                    <Figure src="h1lop-1-0_phanbo-ranh-qnguyen.png" caption="Hình 1.0: Phân bố rãnh cho các pha dây quấn trên tổng số rãnh của stator." />

                    <p>Từ các thông số trên, xây dựng sơ đồ khai triển theo 2 kiểu: cực thật hoặc cực giả.</p>

                    <Figure src="h1lop-1-1_khaitrien-1pha-cucgia.png" caption="Hình 1.1: Sơ đồ khai triển dây quấn một pha tiêu biểu (pha A.X), cực giả — dạng đồng khuôn tập trung, 1 lớp; Z = 36, 2p = 4." />

                    <p><strong>Trình tự xác định các đầu dây pha:</strong> vị trí đầu ĐẦU của pha A tiêu biểu là rãnh
                      số 1. Nếu chọn các pha lệch nhau 120°:</p>
                    <Formula>{"\\text{Khoảng cách} = \\frac{120°}{\\alpha_đ} = \\frac{2}{3}\\tau = \\frac{2}{3} \\times 9 = 6 \\text{ (rãnh)}"}</Formula>
                    <Formula>{"\\text{Đầu dây pha B} = \\frac{2}{3}\\tau + A = 6 + 1 = 7 \\text{ (rãnh)}"}</Formula>
                    <Formula>{"\\text{Đầu dây pha C} = \\frac{2}{3}\\tau + B = 6 + 7 = 13 \\text{ (rãnh)}"}</Formula>

                    <Figure src="h1lop-1-2_khaitrien-3pha-cucgia-120do.png" caption="Hình 1.2: Sơ đồ khai triển dây quấn 1 lớp, đầy đủ 3 pha (đồng khuôn tập trung, cực giả; Z = 36, 2p = 4; lệch pha 120° điện)." />
                    <Figure src="h1lop-1-3_khaitrien-3pha-cucthat-120do.png" caption="Hình 1.3: Sơ đồ khai triển dây quấn 3 pha, hai pha liên tiếp lệch nhau 120° (dạng đồng khuôn phân tán, cực thật; Z = 36, 2p = 4)." />
                    <Figure src="h1lop-1-4_khaitrien-3pha-cucgia-240do.png" caption="Hình 1.4: Sơ đồ khai triển dây quấn 1 lớp, đầy đủ 3 pha (đồng tâm tập trung, cực giả; Z = 36, 2p = 4; lệch pha 240° điện)." />
                  </div>
                </>
              ),
            },
            {
              label: 'Xây dựng sơ đồ khai triển 3 pha 2 lớp',
              content: (
                <>
                  <p><span className={styles.stepBadge}>1</span><strong>Bước 01:</strong> căn cứ Z, 2p xác định τ, q.</p>
                  <p><span className={styles.stepBadge}>2</span><strong>Bước 02:</strong> căn cứ τ, q xác định phân
                    bố rãnh trên stator cho từng pha; vẽ các đoạn thẳng song song, bằng nhau, cách đều nhau — tổng số
                    đoạn thẳng bằng đúng tổng số rãnh Z; đánh số thứ tự cho mỗi đoạn.</p>

                  <div className={styles.exampleCard}>
                    <div className={styles.exampleTitle}>Mẫu 2 — Z = 36 rãnh, 2p = 4 cực — dây quấn 2 lớp</div>
                    <p>Phạm vi khoảng bước bối dây Y (Coil Pitch Y):</p>
                    <Formula>{"\\frac{2}{3}\\tau \\leq Y \\leq (\\tau - 1) \\Longleftrightarrow 6 \\leq Y \\leq 8 \\text{ (rãnh)}"}</Formula>
                    <p>Chọn bước bối dây Y = 8 (rãnh) để khai triển sơ đồ dây quấn 2 lớp. q = τ/3 = 3 (rãnh/1cực/1pha).</p>

                    <Figure src="h2lop-1_phanbo-ranh-qnguyen.png" caption="Hình 1: Phân bố rãnh cho các pha dây quấn trên tổng số rãnh của stator (2 lớp)." />
                    <Figure src="h2lop-2_khaitrien-2pha-120do.png" caption="Hình 2: Sơ đồ khai triển dây quấn 2 lớp cho 2 pha AX, BY — liên kết nối tiếp (A = 1), lệch pha 120° điện; y = 8 rãnh; 2p = 4." />
                    <Figure src="h2lop-3_khaitrien-2pha-240do.png" caption="Hình 3: Sơ đồ khai triển dây quấn 2 lớp cho 2 pha AX, BY — liên kết nối tiếp (A = 1), lệch pha 240° điện; y = 8 rãnh; 2p = 4." />
                  </div>
                </>
              ),
            },
          ]}
        />

        {/* ================= NHÓM 3: PP KHAI TRIỂN 3 PHA 1 TỐC ĐỘ, PHÂN SỐ TỐI GIẢN ================= */}
        <TabGroup
          id="khai-trien-phan-so"
          title="Phương pháp xây dựng sơ đồ khai triển 3 pha 1 tốc độ, phân số tối giản"
          intro={
            <>
              <p>Khi phân loại dây quấn theo giá trị q ta có hai trường hợp: q là số nguyên, hoặc q là phân số.
                Dây quấn <strong>q phân số</strong> nhằm khử giảm sóng hài bậc cao của từ trường (chủ yếu sóng
                điều hòa răng), cải thiện hệ số công suất cũng như hiệu suất động cơ.</p>
              <p>Có thể áp dụng theo một trong hai phương pháp phân bố: <strong>Clément</strong> hoặc
                <strong> Pyδo</strong> — cả hai đều có thể xây dựng dây quấn 1 lớp hay 2 lớp. Khi xác định hệ số
                dây quấn, nên dùng phương pháp Pistoye khi dùng phân bố Clément, hoặc Crisci khi dùng phân bố Pyδo.</p>
            </>
          }
          tabs={[
            {
              label: 'Xây dựng sơ đồ khai triển 3 pha 1 lớp (Clément)',
              content: (
                <>
                  <p><span className={styles.stepBadge}>1</span><strong>Bước 01:</strong> từ Z, 2p xác định τ, q.</p>
                  <p><span className={styles.stepBadge}>2</span><strong>Bước 02:</strong> phân tích q phân số theo
                    dạng q = b + c/d (b, c, d nguyên; c/d tối giản), rồi lập bảng phân bố rãnh cho 3 pha (số hàng =
                    2p) theo quy tắc:</p>
                  <ul>
                    <li>Nếu c/d &lt; 0,5 → mỗi ô ghi giá trị <strong>b</strong>.</li>
                    <li>Nếu c/d &gt; 0,5 → mỗi ô ghi giá trị <strong>(b + 1)</strong>.</li>
                    <li>Nếu c/d = 0,5 → mỗi ô ghi tùy ý (b + 1) hay b.</li>
                  </ul>
                  <p>Sau đó đánh dấu các ô cần điều chỉnh: bắt đầu từ ô đầu tiên (hàng 1, cột 1), đếm theo chiều trái
                    → phải, trên → dưới một khoảng đúng bằng số cực để đánh dấu ô kế tiếp, lặp lại đến hết bảng; rồi
                    đánh dấu tiếp ô ngay dưới các ô vừa đánh dấu. Các ô được đánh dấu hiệu chỉnh: (b+1) → b, và b →
                    (b+1). Cuối cùng kiểm tra tổng giá trị các ô phải bằng đúng Z.</p>
                  <p><span className={styles.stepBadge}>3</span><strong>Bước 03:</strong> dựa bảng phân bố, xây dựng
                    sơ đồ khai triển cho một pha rồi mở rộng cho cả ba pha.</p>

                  <div className={styles.exampleCard}>
                    <div className={styles.exampleTitle}>Mẫu 1 — Z = 30 rãnh, 2p = 4 cực (1450 vòng/phút, f = 50 Hz) — dây quấn 1 lớp</div>
                    <Formula>{"\\tau = \\frac{Z}{2p} = \\frac{30}{4} = 7.5 \\text{ (rãnh/cực)}"}</Formula>
                    <Formula>{"q = \\frac{\\tau}{3} = \\frac{7.5}{3} = 2.5 = 2 + \\frac{1}{2} \\Rightarrow b = 2; c = 1; d = 2"}</Formula>

                    <p><strong>Bảng phân bố ban đầu</strong> (vì c/d = 0,5 nên chọn ghi mỗi ô = b = 2):</p>
                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        <thead><tr><th>A</th><th>B</th><th>C</th></tr></thead>
                        <tbody>
                          <tr><td>2</td><td>2</td><td>2</td></tr>
                          <tr><td>2</td><td>2</td><td>2</td></tr>
                          <tr><td>2</td><td>2</td><td>2</td></tr>
                          <tr><td>2</td><td>2</td><td>2</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p>Tổng hiện có = 8 × 3 = 24 rãnh; cần tăng cường thêm 30 − 24 = 6 rãnh (2 rãnh/pha) vào các ô
                      được đánh dấu theo quy tắc Bước 02:</p>
                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        <thead><tr><th>A</th><th>B</th><th>C</th></tr></thead>
                        <tbody>
                          <tr><td className={styles.cellStar}>2<span className={styles.markStar}>✳</span></td><td>2</td><td>2</td></tr>
                          <tr><td>2</td><td className={styles.cellStar}>2<span className={styles.markStar}>✳</span></td><td>2</td></tr>
                          <tr><td>2</td><td className={styles.cellStar}>2<span className={styles.markFlower}>❀</span></td><td className={styles.cellStar}>2<span className={styles.markStar}>✳</span></td></tr>
                          <tr><td>2</td><td>2</td><td className={styles.cellStar}>2<span className={styles.markFlower}>❀</span></td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p>Các ô đánh dấu (✳ và ❀) được hiệu chỉnh (b) → (b+1), kết quả bảng phân bố hoàn thiện (tổng = 30 rãnh):</p>
                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        <thead><tr><th>A</th><th>B</th><th>C</th></tr></thead>
                        <tbody>
                          <tr><td style={{ color: '#c33', fontWeight: 800 }}>3</td><td>2</td><td>2</td></tr>
                          <tr><td style={{ color: '#c33', fontWeight: 800 }}>3</td><td style={{ color: '#c33', fontWeight: 800 }}>3</td><td>2</td></tr>
                          <tr><td>2</td><td style={{ color: '#c33', fontWeight: 800 }}>3</td><td style={{ color: '#c33', fontWeight: 800 }}>3</td></tr>
                          <tr><td>2</td><td>2</td><td style={{ color: '#c33', fontWeight: 800 }}>3</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.note}>
                      Mỗi hàng cho phân bố rãnh của từng pha trên mỗi cực từ (số hàng = 2p); trên cùng một hàng, giá
                      trị mỗi ô cho phân bố rãnh của pha tương ứng trên cực từ (hàng) khảo sát.
                    </div>

                    <Figure src="hqps1lop-1_phanbo-ranh-clement.png" caption="Hình 1: Phân bố rãnh stator cho 3 pha dây quấn theo CLEMENT (Z = 30 rãnh; 2p = 4 cực)." />
                    <Figure src="hqps1lop-2_khaitrien-1pha-clement.png" caption="Hình 2: Dây quấn 1 lớp dạng đồng khuôn tập trung cực giả (A = 1), phân bố theo Clément — nhóm 3 bối có y = 7 rãnh, nhóm 2 bối có y = 8 rãnh." />
                    <Figure src="hqps1lop-3_khaitrien-3pha-clement-cucgia.png" caption="Hình 3: Sơ đồ đầy đủ 3 pha, dây quấn dạng đồng khuôn móc xích cực giả (A = 1), Z = 30 rãnh, 2p = 4 cực. Lệch nhau 240°." />
                  </div>
                </>
              ),
            },
            {
              label: 'Xây dựng sơ đồ khai triển 3 pha 2 lớp (Pyδo)',
              content: (
                <>
                  <p><span className={styles.stepBadge}>1</span><strong>Bước 01:</strong> từ Z, 2p xác định τ, q.</p>
                  <p><span className={styles.stepBadge}>2</span><strong>Bước 02:</strong> phân tích q = b + c/d (c/d
                    tối giản), rồi:</p>
                  <ul>
                    <li>Lập <strong>nhóm số thứ tự</strong>: viết số (b+1) với số lần = c; kế tiếp viết số b với số
                      lần = (d − c).</li>
                    <li>Xác định số lần lặp lại nhóm số thứ tự trong chuỗi số: <strong>Số lần lặp lại = 2p·m / d</strong> (m = 3 pha).</li>
                    <li>Thành lập <strong>chuỗi số thứ tự</strong> bằng cách viết nhóm số thứ tự lặp lại theo số lần
                      tính được → cho phân bố các rãnh trên stator cho 3 pha dây quấn.</li>
                  </ul>
                  <p><span className={styles.stepBadge}>3</span><strong>Bước 03:</strong> chọn bước bối dây (tương
                    tự trường hợp q nguyên), vẽ một pha tiêu biểu, sau đó chọn góc lệch 120° hay 240° để vẽ tiếp các
                    pha còn lại.</p>

                  <div className={styles.exampleCard}>
                    <div className={styles.exampleTitle}>Mẫu 2 — Z = 30 rãnh, 2p = 4 cực (1450 vòng/phút, f = 50 Hz) — dây quấn 2 lớp</div>
                    <Formula>{"\\tau = \\frac{Z}{2p} = \\frac{30}{4} = 7.5 \\text{ (rãnh/cực)}"}</Formula>
                    <Formula>{"q = \\frac{\\tau}{3} = \\frac{7.5}{3} = 2.5 = 2 + \\frac{1}{2} \\Rightarrow b = 2; c = 1; d = 2"}</Formula>
                    <p>Nhóm số thứ tự: giá trị (b+1) = 3 viết c = 1 lần; giá trị b = 2 viết (d − c) = 1 lần → nhóm: <strong>3, 2</strong>.</p>
                    <Formula>{"\\text{Số lần lặp lại} = \\frac{2p \\cdot m}{d} = \\frac{4 \\cdot 3}{2} = 6 \\text{ (lần)}"}</Formula>

                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        <thead>
                          <tr><th>3</th><th>2</th><th>3</th><th>2</th><th>3</th><th>2</th><th>3</th><th>2</th><th>3</th><th>2</th><th>3</th><th>2</th></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={styles.cellA}>A</td><td className={styles.cellB}>B</td><td className={styles.cellC}>C</td>
                            <td className={styles.cellA}>A</td><td className={styles.cellB}>B</td><td className={styles.cellC}>C</td>
                            <td className={styles.cellA}>A</td><td className={styles.cellB}>B</td><td className={styles.cellC}>C</td>
                            <td className={styles.cellA}>A</td><td className={styles.cellB}>B</td><td className={styles.cellC}>C</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <Figure src="hqps2lop-1_phanbo-ranh-yo.png" caption="Hình 1: Phân bố rãnh stator cho 3 pha dây quấn theo Pyδo, Z = 30 rãnh; 2p = 4 cực." />

                    <p><strong>Bước 03</strong> — phạm vi bước bối dây:</p>
                    <Formula>{"\\frac{2\\tau}{3} \\leq Y \\leq \\frac{6\\tau}{7} \\Rightarrow 5 \\leq y \\leq 6.4 \\text{ (rãnh)}"}</Formula>
                    <p>Chọn bước bối dây Y = 6 (rãnh). Chọn góc lệch pha 120° điện — khoảng lệch giữa 2 đầu dây pha liên tiếp:</p>
                    <Formula>{"\\frac{120°}{\\alpha_đ} = \\frac{120°}{24°} = 5 \\text{ (rãnh)}"}</Formula>

                    <Figure src="hqps2lop-2_khaitrien-phaAX-yo.png" caption="Hình 2: Sơ đồ khai triển dây quấn cho pha AX, động cơ 3 pha (Z = 30; 2p = 4), dạng dây quấn 2 lớp, bước cuộn dây y = 6." />
                    <Figure src="hqps2lop-3_khaitrien-3pha-yo-120do.png" caption="Hình 3: Sơ đồ khai triển ba dây quấn dạng đồng khuôn 2 lớp của động cơ ba pha theo Pyδo, Z = 30; 2p = 4; góc lệch giữa hai pha liên tiếp 120°." />
                  </div>

                  <div className={styles.note}>
                    <strong>Chú ý:</strong> phần này chỉ trình bày phương pháp khai triển theo Clément cho dây quấn 1
                    lớp, và theo Pyδo cho dây quấn 2 lớp. Trên thực tế cả hai cách phân bố (Clément hay Pyδo) đều có
                    thể dùng để xây dựng dây quấn 1 lớp hoặc 2 lớp — người đọc có thể tự lựa chọn phương pháp phù hợp.
                  </div>
                </>
              ),
            },
          ]}
        />



        <div className="card" style={{ marginTop: 8 }}>
          <div className="card-body" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, color: 'var(--text2)' }}>
              Áp dụng lý thuyết trên vào công cụ tính toán thực tế:
            </span>
            <a href="/tinh-toan/3pha-1tocdo" className="btn btn-primary">⚡ Tính toán 3 pha 1 tốc độ</a>
          </div>
        </div>
      </div>
    </>
  );
}