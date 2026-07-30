import { useState } from 'react';
import Subnav from '../components/Subnav';
import styles from './TinhToan.module.css';

const INIT = { z: 36, p: 4, f: 50, y: 6 };
const toRad = (deg) => (deg * Math.PI) / 180;

function calc(d) {
  const tau = d.z / d.p;
  const q = tau / 3;
  const isInt = Math.abs(q - Math.round(q)) < 1e-6;
  const alpha = 180 / tau;
  const kpb = isInt
    ? Math.sin(toRad((q * alpha) / 2)) / (q * Math.sin(toRad(alpha / 2)))
    : null;
  const yMin = Math.ceil((2 / 3) * tau);
  const yMax = Math.floor(tau - 1);
  const yValid = d.y >= yMin && d.y <= yMax;
  const kn = Math.sin(toRad((d.y / tau) * 90));
  const kdq = isInt ? kn * kpb : null;
  const ndb = Math.round((120 * d.f) / d.p);
  const kc120 = (2 / 3) * tau;
  const kc240 = (4 / 3) * tau;
  const buocLoai = d.y >= tau ? 'Bước đủ' : 'Bước ngắn';
  return { tau, q, isInt, alpha, kpb, kn, kdq, ndb, kc120, kc240, yMin, yMax, yValid, buocLoai };
}

export default function TinhToan3Pha1Toc2Lop() {
  const [d, setD] = useState(INIT);
  const [calced, setCalced] = useState(false);
  const upd = (k, v) => setD((prev) => ({ ...prev, [k]: +v }));
  const r = calc(d);

  return (
    <>
      <Subnav />
      <div className="page-wrap" style={{ paddingTop: 28, paddingBottom: 36 }}>
        <span className="sec-label">Tính toán</span>
        <h2 className="sec-title">
          <span className="accent">Tính toán dữ liệu</span>
          <br />Dây quấn 3 pha, 1 tốc độ — 2 lớp
        </h2>
        <p className="sec-desc">
          Tính bước cực, số rãnh/pha/cực, phạm vi bước bối dây hợp lệ và hệ số dây quấn
          (có xét bước ngắn) cho dây quấn 2 lớp.
        </p>

        <div className={styles.layout}>
          <div className={styles.inputPanel}>
            <div className="card">
              <div className="card-header">
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--blue2)' }} />
                <h4>Thông số đầu vào</h4>
                <span className="tag blue" style={{ marginLeft: 'auto' }}>2 Lớp</span>
              </div>
              <div className="card-body">
                {[
                  ['z', 'Số rãnh Stator Z', ''],
                  ['p', 'Số cực 2P', ''],
                  ['f', 'Tần số f', 'Hz'],
                ].map(([key, label, unit]) => (
                  <div key={key} className={styles.field}>
                    <label>
                      {label}
                      {unit && <span className={styles.unit}>{unit}</span>}
                    </label>
                    <input
                      className="inp"
                      type="number"
                      step="any"
                      value={d[key]}
                      onChange={(e) => upd(key, e.target.value)}
                      style={{ width: 110, textAlign: 'right' }}
                    />
                  </div>
                ))}
                <div className={styles.field}>
                  <label>
                    Bước bối dây y<span className={styles.unit}>rãnh</span>
                  </label>
                  <input
                    className="inp"
                    type="number"
                    step="1"
                    value={d.y}
                    onChange={(e) => upd('y', e.target.value)}
                    style={{ width: 110, textAlign: 'right' }}
                  />
                </div>
                <div style={{ fontSize: 11.5, color: r.yValid ? 'var(--text2)' : '#c62828', marginTop: 4 }}>
                  Phạm vi hợp lệ: {r.yMin} ≤ y ≤ {r.yMax} rãnh
                  {!r.yValid && ' — giá trị y ngoài phạm vi khuyến nghị!'}
                </div>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: 12, justifyContent: 'center' }}
                  onClick={() => setCalced(true)}
                >
                  ⚡ Tính toán
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="card" style={{ marginBottom: 16 }}>
              <div className="card-header">
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green)' }} />
                <h4>Kết quả — Dây quấn 2 lớp</h4>
                {calced && <span className="tag green" style={{ marginLeft: 'auto' }}>✓ Hoàn thành</span>}
              </div>
              <div className="card-body">
                {!calced ? (
                  <div className={styles.emptyState}>
                    <div style={{ fontSize: 40 }}>🔌</div>
                    <p>Nhập thông số và nhấn <strong>Tính toán</strong></p>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.5px' }}>
                        Thông số cơ bản
                      </div>
                      <div className={styles.results}>
                        {[
                          ['Tốc độ đồng bộ Ndb', `${r.ndb} vòng/phút`, 'blue'],
                          ['Bước cực τ', `${r.tau.toFixed(2)} rãnh/cực`, 'blue'],
                          ['Số rãnh/pha/cực q', `${r.q.toFixed(3)} rãnh`, 'blue'],
                          ['Phân loại', r.isInt ? 'q nguyên' : 'q phân số', r.isInt ? 'green' : 'gold'],
                          ['Góc lệch điện αđ', `${r.alpha.toFixed(2)}°`, 'blue'],
                        ].map(([l, v, c]) => (
                          <div key={l} className={styles.resRow}>
                            <span className={styles.resLabel}>{l}</span>
                            <span className={`tag ${c}`}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '14px 0' }} />

                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.5px' }}>
                        Bước bối dây &amp; hệ số dây quấn
                      </div>
                      {!r.isInt ? (
                        <p style={{ fontSize: 12.5, color: 'var(--text2)' }}>
                          q là phân số — cần áp dụng phương pháp phân bố Pyδo (dạng 2 lớp) để xác định
                          chính xác bảng phân bố rãnh và hệ số dây quấn.
                        </p>
                      ) : (
                        <div className={styles.results}>
                          {[
                            ['Bước bối dây y (đã chọn)', `${d.y} rãnh — ${r.buocLoai}`, r.yValid ? 'blue' : 'red'],
                            ['Hệ số bước ngắn Kn', r.kn.toFixed(4), 'gold'],
                            ['Hệ số phân bố Kpb', r.kpb.toFixed(4), 'gold'],
                            ['Hệ số dây quấn Kdq', r.kdq.toFixed(4), 'green'],
                          ].map(([l, v, c]) => (
                            <div key={l} className={styles.resRow}>
                              <span className={styles.resLabel}>{l}</span>
                              <span className={`tag ${c}`}>{v}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '14px 0' }} />

                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.5px' }}>
                        Vị trí đầu dây pha
                      </div>
                      <div className={styles.results}>
                        {[
                          ['Vùng pha', '60° – 120° điện (tùy bước y)', 'blue'],
                          ['Khoảng cách 2 đầu dây (lệch 120°)', `${r.kc120.toFixed(2)} rãnh`, 'cyan'],
                          ['Khoảng cách 2 đầu dây (lệch 240°)', `${r.kc240.toFixed(2)} rãnh`, 'cyan'],
                        ].map(([l, v, c]) => (
                          <div key={l} className={styles.resRow}>
                            <span className={styles.resLabel}>{l}</span>
                            <span className={`tag ${c}`}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)' }} />
                <h4>Ghi chú kỹ thuật</h4>
              </div>
              <div className="card-body">
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    'Bước bối dây y = τ: dây quấn bước đủ. y < τ: dây quấn bước ngắn (giảm sóng hài bậc cao).',
                    'Hệ số bước ngắn Kn = sin(y/τ × 90°); Kn giảm khi y càng rút ngắn so với τ.',
                    'Hệ số dây quấn Kdq = Kn × Kpb, luôn thấp hơn dây quấn 1 lớp cùng số liệu stator khi có bước ngắn.',
                  ].map((t) => (
                    <li key={t} style={{ fontSize: 12, color: 'var(--text2)', paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>›</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}