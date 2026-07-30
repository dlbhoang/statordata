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

function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </section>
  );
}

const NAV = [
  ['ky-hieu', 'Ký hiệu & nguyên lý'],
  ['lien-ket-mach-nhanh', 'Liên kết mạch nhánh song song'],
  ['dau-day-pha', 'Xác định đầu dây pha'],
  ['truyen-dong', 'Truyền động điện'],
  ['dau-noi-dong-co', 'Sơ đồ đấu nối 6/9/12 đầu dây'],
  ['sddt-hinh-tia', 'Sơ đồ hình tia SĐĐ rãnh'],
  ['he-so-day-quan', 'Hệ số dây quấn'],
  ['khai-trien-so-nguyen', 'Khai triển 1 tốc độ — q số nguyên'],
  ['khai-trien-phan-so', 'Khai triển 1 tốc độ — q phân số tối giản'],
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

        {/* ================= 1. KÝ HIỆU & NGUYÊN LÝ ================= */}
        <Section id="ky-hieu" title="Ký hiệu và nguyên lý kỹ thuật dây quấn">
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
          <p>Ký hiệu: <strong>F</strong> — tần số nguồn áp cấp vào dây quấn stator; <strong>2p</strong> — số
            cực từ của động cơ (p: số đôi cực); <strong>N<sub>tđ</sub></strong> — tốc độ đồng bộ của từ
            trường quay; <strong>τ</strong> — bước cực từ (khoảng không gian trải rộng của mỗi cực từ trên
            stator); <strong>Z</strong> — tổng số rãnh của stator (hay rotor); <strong>q</strong> — số rãnh
            phân bố cho mỗi pha trên một bước cực từ.</p>

          <div className={styles.formulaBox}>f = P·N<sub>tđ</sub> / 60 &nbsp;hay&nbsp; f = 2p·N<sub>tđ</sub> / 120</div>
          <div className={styles.formulaBox}>τ = Z / 2p &nbsp;(rãnh/cực)</div>
          <div className={styles.formulaBox}>q = τ / (3 pha) &nbsp;(rãnh/pha/cực)</div>
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
        </Section>

        {/* ================= 2. LIÊN KẾT MẠCH NHÁNH SONG SONG ================= */}
        <Section id="lien-ket-mach-nhanh" title="Quy tắc liên kết mạch nhánh song song (A) trong máy điện">
          <h4 className={styles.subTitle}>2.1. Quy tắc liên kết cực thật</h4>
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

          <h4 className={styles.subTitle}>2.2. Quy tắc liên kết cực giả</h4>
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
        </Section>

        {/* ================= 3. XÁC ĐỊNH ĐẦU DÂY PHA ================= */}
        <Section id="dau-day-pha" title="Cách xác định đầu dây pha trong kỹ thuật dây quấn">
          <p>Tùy theo góc lệch vị trí không gian giữa hai pha liên tiếp được chọn:</p>
          <div className={styles.formulaBox}>
            Nếu lệch 120°: khoảng cách 2 đầu vào 2 pha liên tiếp = 120°/α<sub>đ</sub> = (2/3)·τ
          </div>
          <div className={styles.formulaBox}>
            Nếu lệch 240°: khoảng cách 2 đầu vào 2 pha liên tiếp = 240°/α<sub>đ</sub> = (4/3)·τ
          </div>
        </Section>

        {/* ================= 4. TRUYỀN ĐỘNG ĐIỆN ================= */}
        <Section id="truyen-dong" title="Truyền động điện">
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
        </Section>

        {/* ================= 5. SƠ ĐỒ ĐẤU NỐI 6/9/12 ĐẦU DÂY ================= */}
        <Section id="dau-noi-dong-co" title="Sơ đồ đấu nối động cơ 6 / 9 / 12 đầu dây">
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

          <div className={styles.formulaBox}>V<sub>dây Y</sub> = √3 · V<sub>pha</sub> &nbsp;(1.1)</div>
          <div className={styles.formulaBox}>V<sub>dây Δ</sub> = V<sub>pha</sub> &nbsp;(1.2)</div>
          <div className={styles.formulaBox}>V<sub>dây Y</sub> = √3 · V<sub>dây Δ</sub> &nbsp;(1.3)</div>
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
          <div className={styles.formulaBox}>V<sub>dây Y</sub> = √3 · V<sub>pha</sub> &nbsp;(1.1)</div>
          <div className={styles.formulaBox}>V<sub>dây 2Y</sub> = V<sub>pha</sub> / 2 &nbsp;(1.4)</div>
          <div className={styles.formulaBox}>V<sub>dây Y</sub> = 2 · V<sub>dây 2Y</sub> &nbsp;(1.5)</div>

          <FigRow>
            <Figure src="h9dau-5_tamgiac-noitiep.png" caption="Hình 5: Sơ đồ đầu dây 9 đầu, liên kết tam giác (Δ) nối tiếp." />
            <Figure src="h9dau-6_tamgiac-songsong-2D.png" caption="Hình 6: Sơ đồ đầu dây 9 đầu, liên kết tam giác (2Δ) song song." />
          </FigRow>
          <div className={styles.formulaBox}>V<sub>dây Δ</sub> = V<sub>pha</sub> &nbsp;(1.2)</div>
          <div className={styles.formulaBox}>V<sub>dây 2Δ</sub> = V<sub>pha</sub> / 2 &nbsp;(1.6)</div>
          <div className={styles.formulaBox}>V<sub>dây Δ</sub> = 2 · V<sub>dây 2Δ</sub> &nbsp;(1.7)</div>

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
        </Section>

        {/* ================= 6. SƠ ĐỒ HÌNH TIA SĐĐ RÃNH ================= */}
        <Section id="sddt-hinh-tia" title="Sơ đồ hình tia sức điện động rãnh — sức điện động bối dây">
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

          <h4 className={styles.subTitle}>1.2. Trình tự xác định vùng pha</h4>
          <p><span className={styles.stepBadge}>1</span><strong>Bước 01:</strong> từ số liệu stator, xây
            dựng sơ đồ khai triển dây quấn 3 pha; cho dòng 3 pha vào để kiểm chứng số cực từ tạo thành.</p>
          <p><span className={styles.stepBadge}>2</span><strong>Bước 02:</strong> từ sơ đồ khai triển mỗi
            pha, xác định các cạnh tác dụng có dòng cùng hướng; lập bảng tổng kết cho 3 pha; vẽ sơ đồ sức
            điện động rãnh theo góc lệch α<sub>đ</sub> (các vectơ xếp đều trên vòng tròn 360° điện ứng một
            cặp cực từ).</p>
          <p><span className={styles.stepBadge}>3</span><strong>Bước 03:</strong> từ các vectơ SĐĐ rãnh mỗi
            pha suy ra vùng pha; xác định trục đối xứng; kiểm chứng góc lệch 120° giữa các trục pha.</p>

          <div className={styles.exampleCard}>
            <div className={styles.exampleTitle}>
              Mẫu 1: Stator động cơ không đồng bộ 3 pha, Z = 36 rãnh, 2p = 4 — xác định vùng pha cho dây quấn 1 lớp và 2 lớp
            </div>
            <p><strong>Bước 01</strong> — Tìm τ, q, α<sub>đ</sub>:</p>
            <div className={styles.formulaBox}>τ = Z / 2p = 36 / 4 = 9 &nbsp;(rãnh/cực)</div>
            <div className={styles.formulaBox}>q = τ / 3 = 9 / 3 = 3 &nbsp;(rãnh / 1 cực / 1 pha)</div>
            <div className={styles.formulaBox}>α<sub>đ</sub> = 180° / τ = 180° / 9 = 20°</div>
            <p><strong>Đối với dây quấn 2 lớp</strong> — phạm vi bước bối dây y:</p>
            <div className={styles.formulaBox}>(2τ/3) ≤ y ≤ (τ − 1) &nbsp;⇒&nbsp; 6 ≤ y ≤ 8 &nbsp;(rãnh)</div>
            <p>Chọn y = 6 (rãnh) để xây dựng sơ đồ khai triển dây quấn trên stator.</p>
          </div>

          <Figure
            src="h01_khao-sat-cuc-tinh-1lop.png"
            caption="Hình 1: Khảo sát cực tính tạo thành trên sơ đồ khai triển dây quấn 1 lớp, động cơ Z = 36 rãnh, 2p = 4 cực."
          />
          <Figure
            src="h02_hinh-tia-suc-dien-dong-ranh.png"
            caption="Hình 2: Sơ đồ hình tia sức điện động rãnh (α_đ = 20°, 36 rãnh xếp thành 2 tầng ứng với 2 cặp cực từ)."
            maxWidth={520}
          />

          <p>Tất cả các dạng sơ đồ dây quấn 1 lớp có phân bố rãnh cho 3 pha trên stator hoàn toàn giống nhau.
            Nếu quy ước các cạnh tác dụng có dòng đi lên biểu diễn đúng theo vectơ trong Hình 2, thì cạnh tác
            dụng có dòng hướng xuống sẽ biểu diễn bằng vectơ đảo; tương tự cho trường hợp ngược lại.</p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr><th>Pha</th><th>Cạnh tác dụng dòng điện hướng lên</th><th>Cạnh tác dụng dòng điện hướng xuống</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.cellA}>AX</td><td>1, 2, 3, 19, 20, 21</td><td>10, 11, 12, 28, 29, 30</td></tr>
                <tr><td className={styles.cellB}>BY</td><td>16, 17, 18, 34, 35, 36</td><td>7, 8, 9, 25, 26, 27</td></tr>
                <tr><td className={styles.cellC}>CZ</td><td>13, 14, 15, 31, 32, 33</td><td>22, 23, 24, 4, 5, 6</td></tr>
              </tbody>
            </table>
          </div>

          <Figure
            src="h03_vung-pha-60do.png"
            caption="Hình 3: Vùng pha 60° và sơ đồ hình tia SĐĐ rãnh trên stator động cơ Z = 36 rãnh; 2p = 4 cực."
            maxWidth={620}
          />

          <h4 className={styles.subTitle}>Xác định vùng cho dây quấn 2 lớp</h4>
          <Figure
            src="h04_khao-sat-cuc-tinh-2lop.png"
            caption="Hình 4: Khảo sát cực tính tạo thành trên sơ đồ khai triển dây quấn 2 lớp, Z = 36 rãnh, 2p = 4, bước bối dây y = 6 rãnh."
          />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th rowSpan={2}>Pha</th>
                  <th colSpan={2}>Cạnh tác dụng trên</th>
                  <th colSpan={2}>Cạnh tác dụng dưới</th>
                </tr>
                <tr>
                  <th>Dòng đi lên</th><th>Dòng đi xuống</th><th>Dòng đi lên</th><th>Dòng đi xuống</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.cellA}>AX</td>
                  <td>1, 2, 3, 19, 20, 21</td><td>10, 11, 12, 28, 29, 30</td>
                  <td>16', 17', 18', 34', 35', 36'</td><td>7', 8', 9', 25', 26', 27'</td>
                </tr>
                <tr>
                  <td className={styles.cellB}>BY</td>
                  <td>16, 17, 18, 34, 35, 36</td><td>7, 8, 9, 25, 26, 27</td>
                  <td>13', 14', 15', 31', 32', 33'</td><td>22', 23', 24', 4', 5', 6'</td>
                </tr>
                <tr>
                  <td className={styles.cellC}>CZ</td>
                  <td>13, 14, 15, 31, 32, 33</td><td>22, 22, 24, 5, 6</td>
                  <td>28', 29', 30', 10', 11', 12'</td><td>19', 20', 21', 1', 2', 3'</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Figure
            src="h05_vung-pha-120do.png"
            caption="Hình 5: Vùng pha 120° và sơ đồ hình tia SĐĐ cạnh tác dụng dây quấn 2 lớp, Z = 36 rãnh; 2p = 4 cực; y = 6 rãnh."
            maxWidth={560}
          />
        </Section>

        {/* ================= 7. HỆ SỐ DÂY QUẤN ================= */}
        <Section id="he-so-day-quan" title="Xác định hệ số dây quấn từ sơ đồ hình tia sức điện động">
          <h4 className={styles.subTitle}>Hệ số dây quấn 1 lớp</h4>
          <p>Dây quấn 1 lớp luôn có phân bố các tia SĐĐ rãnh cho mỗi pha trong vùng pha 60°, bất chấp kiểu dây
            quấn. Đây là loại dây quấn <strong>bước đủ</strong> — nên hệ số bước ngắn K<sub>n</sub> của dây
            quấn 1 lớp luôn bằng 1. Do đó hệ số dây quấn của dây quấn 1 lớp bằng với hệ số quấn rải; mọi kiểu
            dây quấn 1 lớp xây dựng trên cùng số liệu stato sẽ có cùng một giá trị hệ số dây quấn.</p>

          <h4 className={styles.subTitle}>Hệ số dây quấn 2 lớp</h4>
          <p>Dây quấn 2 lớp luôn có phân bố các tia SĐĐ rãnh cho mỗi pha trong vùng pha <strong>lớn hơn 60°
            và tối đa 120°</strong>. Nếu chọn bước bối dây y = τ → bước đủ; nếu chọn (2τ/3) ≤ y ≤ (τ − 1) →
            bước ngắn. Hệ số bước ngắn tỉ lệ thuận theo bước bối dây — bối dây càng rút ngắn thì hệ số quấn
            rải càng giảm thấp.</p>

          <p>Gọi <strong>n</strong> là tổng số vectơ SĐĐ rãnh trong 1 pha, <strong>E<sub>r</sub></strong> là
            suất của một vectơ SĐĐ rãnh, <strong>E<sub>pha</sub></strong> là độ lớn hình chiếu thẳng góc của
            tổng vectơ SĐĐ rãnh trong 1 pha xuống trục pha:</p>
          <div className={styles.formulaBox}>K<sub>dq</sub> = E<sub>pha</sub> / (n · E<sub>r</sub>)</div>

          <div className={styles.exampleCard}>
            <div className={styles.exampleTitle}>Mẫu 2 — Khảo sát hệ số dây quấn 1 lớp (Z = 36, 2p = 4, hình tia trong Hình 3)</div>
            <Figure src="h06_thu-gon-suc-dien-dong-pha-a.png" caption="Hình 6: Hình vẽ thu gọn sức điện động của pha A." maxWidth={520} />
            <div className={styles.formulaBox}>
              E<sub>pha</sub> = 4E<sub>r</sub>·Cos α<sub>đ</sub> + 4E<sub>r</sub> + 4E<sub>r</sub>·Cos α<sub>đ</sub> = 4E<sub>r</sub>(1 + 2·Cos α<sub>đ</sub>)
            </div>
            <p>Theo phương pháp hình tia sức điện động:</p>
            <div className={styles.formulaBox}>
              K<sub>dq</sub> = 4·(1 + 2·Cos 20°) / 12 = 0,967371
            </div>
            <p>Theo phương pháp đại số:</p>
            <div className={styles.formulaBox}>
              K<sub>dq</sub> = Sin(q·α<sub>đ</sub>/2) / [q·Sin(α<sub>đ</sub>/2)] = Sin(3·10°) / [3·Sin(10°)] = 0,967371
            </div>
            <div className={styles.note}>Hai phương pháp cho kết quả trùng khớp nhau.</div>
          </div>

          <div className={styles.exampleCard}>
            <div className={styles.exampleTitle}>Mẫu 3 — Khảo sát hệ số dây quấn 2 lớp (Z = 36, 2p = 4, bước bối dây y = 6, hình tia trong Hình 5)</div>
            <Figure src="h07_thu-gon-suc-dien-dong-pha-b.png" caption="Hình 7: Hình vẽ thu gọn sức điện động của pha B." maxWidth={560} />
            <p>Xét cặp vectơ SĐĐ tương đương đối xứng qua trục pha, góc hợp bởi vectơ tương đương với trục pha
              là β, E<sub>tp</sub> là suất hình chiếu thẳng góc của cặp vectơ xuống trục pha:</p>
            <div className={styles.formulaBox}>E<sub>tp</sub> = 2·(4E<sub>r</sub>) = 8E<sub>r</sub>·Cos β</div>
            <p>Có 3 cặp vectơ SĐĐ rãnh cách trục pha các góc α<sub>đ</sub>/2; 3α<sub>đ</sub>/2; 5α<sub>đ</sub>/2:</p>
            <div className={styles.formulaBox}>
              K<sub>dq</sub> = 8·[Cos(10°) + Cos(30°) + Cos(50°)] / 24 = 0,831206
            </div>
            <p>Theo phương pháp đại số (K<sub>N</sub> là hệ số bước ngắn dây quấn 2 lớp):</p>
            <div className={styles.formulaBox}>
              K<sub>dq</sub> = [Sin(q·α<sub>đ</sub>/2) / (q·Sin(α<sub>đ</sub>/2))] · Sin[(y/τ)·90°] = 0,831206
            </div>
            <div className={styles.formulaBox}>K<sub>N</sub> = Sin[(y/τ)·90°]</div>
            <div className={styles.note}>Hai phương pháp (hình tia & đại số) cho kết quả trùng khớp nhau.</div>
          </div>
        </Section>

        {/* ================= 8. KHAI TRIỂN SỐ NGUYÊN ================= */}
        <Section id="khai-trien-so-nguyen" title="Phương pháp xây dựng sơ đồ khai triển 3 pha 1 tốc độ, số nguyên">
          <h4 className={styles.subTitle}>Trình tự xây dựng sơ đồ dây quấn 1 lớp (trường hợp q nguyên)</h4>
          <p><span className={styles.stepBadge}>1</span><strong>Bước 01:</strong> căn cứ Z, 2p xác định τ, q.</p>
          <p><span className={styles.stepBadge}>2</span><strong>Bước 02:</strong> căn cứ τ, q xác định phân
            bố rãnh trên stator cho từng pha; vẽ các đoạn thẳng song song, bằng nhau, cách đều nhau — tổng số
            đoạn thẳng bằng đúng tổng số rãnh Z; đánh số thứ tự cho mỗi đoạn.</p>

          <div className={styles.exampleCard}>
            <div className={styles.exampleTitle}>Mẫu 1 — Z = 36 rãnh, 2p = 4 cực (1450 vòng/phút, f = 50 Hz) — dây quấn 1 lớp</div>
            <div className={styles.formulaBox}>τ = Z/2p = 36/4 = 9 (rãnh/cực)</div>
            <div className={styles.formulaBox}>q = τ/3 = 9/3 = 3 (rãnh/1cực/1pha)</div>
            <p>τ = 9 (rãnh) nghĩa là mỗi cực từ chiếm 9 rãnh trong tổng số 36 rãnh của stator. q = 3 (rãnh)
              nghĩa là mỗi pha (A, B, C) chiếm 3 rãnh trong mỗi bước cực từ.</p>

            <Figure src="h1lop-1-0_phanbo-ranh-qnguyen.png" caption="Hình 1.0: Phân bố rãnh cho các pha dây quấn trên tổng số rãnh của stator." />

            <p>Từ các thông số trên, xây dựng sơ đồ khai triển theo 2 kiểu: cực thật hoặc cực giả.</p>

            <Figure src="h1lop-1-1_khaitrien-1pha-cucgia.png" caption="Hình 1.1: Sơ đồ khai triển dây quấn một pha tiêu biểu (pha A.X), cực giả — dạng đồng khuôn tập trung, 1 lớp; Z = 36, 2p = 4." />

            <p><strong>Trình tự xác định các đầu dây pha:</strong> vị trí đầu ĐẦU của pha A tiêu biểu là rãnh
              số 1. Nếu chọn các pha lệch nhau 120°:</p>
            <div className={styles.formulaBox}>Khoảng cách 2 đầu vào 2 pha liên tiếp = 120°/α<sub>đ</sub> = (2/3)·τ = (2/3)·9 = 6 (rãnh)</div>
            <div className={styles.formulaBox}>Đầu dây pha B = (2/3)·τ + A = 6 + 1 = 7 (rãnh)</div>
            <div className={styles.formulaBox}>Đầu dây pha C = (2/3)·τ + B = 6 + 7 = 13 (rãnh)</div>

            <Figure src="h1lop-1-2_khaitrien-3pha-cucgia-120do.png" caption="Hình 1.2: Sơ đồ khai triển dây quấn 1 lớp, đầy đủ 3 pha (đồng khuôn tập trung, cực giả; Z = 36, 2p = 4; lệch pha 120° điện)." />
            <Figure src="h1lop-1-3_khaitrien-3pha-cucthat-120do.png" caption="Hình 1.3: Sơ đồ khai triển dây quấn 3 pha, hai pha liên tiếp lệch nhau 120° (dạng đồng khuôn phân tán, cực thật; Z = 36, 2p = 4)." />
            <Figure src="h1lop-1-4_khaitrien-3pha-cucgia-240do.png" caption="Hình 1.4: Sơ đồ khai triển dây quấn 1 lớp, đầy đủ 3 pha (đồng tâm tập trung, cực giả; Z = 36, 2p = 4; lệch pha 240° điện)." />
          </div>

          <h4 className={styles.subTitle}>Trình tự xây dựng sơ đồ dây quấn 2 lớp (trường hợp q nguyên)</h4>
          <div className={styles.exampleCard}>
            <div className={styles.exampleTitle}>Mẫu 2 — Z = 36 rãnh, 2p = 4 cực — dây quấn 2 lớp</div>
            <p>Phạm vi khoảng bước bối dây Y (Coil Pitch Y):</p>
            <div className={styles.formulaBox}>y = (2/3)·τ ≤ Y ≤ (τ − 1) &nbsp;⇔&nbsp; 6 ≤ Y ≤ 8 (rãnh)</div>
            <p>Chọn bước bối dây Y = 8 (rãnh) để khai triển sơ đồ dây quấn 2 lớp. q = τ/3 = 3 (rãnh/1cực/1pha).</p>

            <Figure src="h2lop-1_phanbo-ranh-qnguyen.png" caption="Hình 1: Phân bố rãnh cho các pha dây quấn trên tổng số rãnh của stator (2 lớp)." />
            <Figure src="h2lop-2_khaitrien-2pha-120do.png" caption="Hình 2: Sơ đồ khai triển dây quấn 2 lớp cho 2 pha AX, BY — liên kết nối tiếp (A = 1), lệch pha 120° điện; y = 8 rãnh; 2p = 4." />
            <Figure src="h2lop-3_khaitrien-2pha-240do.png" caption="Hình 3: Sơ đồ khai triển dây quấn 2 lớp cho 2 pha AX, BY — liên kết nối tiếp (A = 1), lệch pha 240° điện; y = 8 rãnh; 2p = 4." />
          </div>
        </Section>

        {/* ================= 9. KHAI TRIỂN PHÂN SỐ TỐI GIẢN ================= */}
        <Section id="khai-trien-phan-so" title="Phương pháp xây dựng sơ đồ khai triển 3 pha 1 tốc độ, phân số tối giản">
          <p>Khi phân loại dây quấn theo giá trị q ta có hai trường hợp: q là số nguyên, hoặc q là phân số.
            Dây quấn <strong>q phân số</strong> nhằm khử giảm sóng hài bậc cao của từ trường (chủ yếu sóng
            điều hòa răng), cải thiện hệ số công suất cũng như hiệu suất động cơ.</p>
          <p>Có thể áp dụng theo một trong hai phương pháp phân bố: <strong>Clément</strong> hoặc
            <strong> Pyδo</strong> — cả hai đều có thể xây dựng dây quấn 1 lớp hay 2 lớp. Khi xác định hệ số
            dây quấn, nên dùng phương pháp Pistoye khi dùng phân bố Clément, hoặc Crisci khi dùng phân bố Pyδo.</p>

          <h4 className={styles.subTitle}>1. Khảo sát phân bố theo Clément (dây quấn 1 lớp)</h4>
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
            <div className={styles.formulaBox}>τ = Z/2p = 30/4 = 7,5 (rãnh/cực)</div>
            <div className={styles.formulaBox}>q = τ/3 = 7,5/3 = 2,5 = 2 + 1/2 &nbsp;⇒&nbsp; b = 2; c = 1; d = 2</div>

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

          <h4 className={styles.subTitle}>2. Khảo sát phân bố theo Pyδo (dây quấn 2 lớp)</h4>
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
            <div className={styles.formulaBox}>τ = Z/2p = 30/4 = 7,5 (rãnh/cực)</div>
            <div className={styles.formulaBox}>q = τ/3 = 7,5/3 = 2,5 = 2 + 1/2 &nbsp;⇒&nbsp; b = 2; c = 1; d = 2</div>
            <p>Nhóm số thứ tự: giá trị (b+1) = 3 viết c = 1 lần; giá trị b = 2 viết (d − c) = 1 lần → nhóm: <strong>3, 2</strong>.</p>
            <div className={styles.formulaBox}>Số lần lặp lại = 2p·m / d = 4·3 / 2 = 6 (lần)</div>

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
            <div className={styles.formulaBox}>(2τ/3) ≤ Y ≤ (6τ/7) &nbsp;⇒&nbsp; 5 ≤ y ≤ 6,4 &nbsp;(rãnh)</div>
            <p>Chọn bước bối dây Y = 6 (rãnh). Chọn góc lệch pha 120° điện — khoảng lệch giữa 2 đầu dây pha liên tiếp:</p>
            <div className={styles.formulaBox}>120° / α<sub>đ</sub> = 120° / 24° = 5 (rãnh)</div>

            <Figure src="hqps2lop-2_khaitrien-phaAX-yo.png" caption="Hình 2: Sơ đồ khai triển dây quấn cho pha AX, động cơ 3 pha (Z = 30; 2p = 4), dạng dây quấn 2 lớp, bước cuộn dây y = 6." />
            <Figure src="hqps2lop-3_khaitrien-3pha-yo-120do.png" caption="Hình 3: Sơ đồ khai triển ba dây quấn dạng đồng khuôn 2 lớp của động cơ ba pha theo Pyδo, Z = 30; 2p = 4; góc lệch giữa hai pha liên tiếp 120°." />
          </div>

          <div className={styles.note}>
            <strong>Chú ý:</strong> phần này chỉ trình bày phương pháp khai triển theo Clément cho dây quấn 1
            lớp, và theo Pyδo cho dây quấn 2 lớp. Trên thực tế cả hai cách phân bố (Clément hay Pyδo) đều có
            thể dùng để xây dựng dây quấn 1 lớp hoặc 2 lớp — người đọc có thể tự lựa chọn phương pháp phù hợp.
          </div>
        </Section>

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