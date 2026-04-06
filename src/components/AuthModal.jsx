import { useState } from 'react';
import styles from './AuthModal.module.css';

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });
  const [showForgot, setShowForgot] = useState(false);

  if (!open) return null;

  const switchMode = (next) => {
    setMode(next);
    setShowForgot(false);
    setForm({ email: '', password: '', confirm: '' });
  };

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showForgot) {
      alert(`Yêu cầu đặt lại mật khẩu cho ${form.email}`);
    } else if (mode === 'login') {
      alert(`Đăng nhập với ${form.email}`);
    } else {
      alert(`Đăng ký với ${form.email}`);
    }
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>

        {/* ── Close ── */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Đóng">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* ── Brand ── */}
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" stroke="#00c8e0" strokeWidth="1.5"/>
              <circle cx="11" cy="11" r="5" fill="#1249a0"/>
              <circle cx="11" cy="11" r="2" fill="#00c8e0"/>
            </svg>
          </div>
          <div>
            <div className={styles.brandName}>Statordata</div>
            <div className={styles.brandSub}>Hệ thống kỹ thuật động cơ điện</div>
          </div>
        </div>

        {/* ── Tab bar ── */}
        {!showForgot && (
          <div className={styles.tabBar}>
            <button
              type="button"
              className={mode === 'login' ? styles.tabActive : styles.tab}
              onClick={() => switchMode('login')}
            >
              Đăng nhập
            </button>
            <button
              type="button"
              className={mode === 'register' ? styles.tabActive : styles.tab}
              onClick={() => switchMode('register')}
            >
              Đăng ký
            </button>
          </div>
        )}

        {showForgot && (
          <div className={styles.forgotHeader}>
            <button type="button" className={styles.backBtn} onClick={() => setShowForgot(false)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Quay lại đăng nhập
            </button>
            <div className={styles.forgotTitle}>Quên mật khẩu</div>
            <div className={styles.forgotSub}>Nhập email để nhận liên kết đặt lại mật khẩu</div>
          </div>
        )}

        {/* ── Form ── */}
        <form className={styles.form} onSubmit={handleSubmit}>

          <div className={styles.field}>
            <label className={styles.label}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="1" y="3" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 5l5.5 3.5L12 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              placeholder="email@domain.com"
              required
              className={styles.input}
            />
          </div>

          {!showForgot && (
            <div className={styles.field}>
              <label className={styles.label}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="2" y="5.5" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4 5.5V4a2.5 2.5 0 015 0v1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="6.5" cy="8.5" r="1" fill="currentColor"/>
                </svg>
                Mật khẩu
              </label>
              <input
                type="password"
                value={form.password}
                onChange={handleChange('password')}
                placeholder="Nhập mật khẩu"
                required
                className={styles.input}
              />
            </div>
          )}

          {mode === 'register' && !showForgot && (
            <div className={styles.field}>
              <label className={styles.label}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="2" y="5.5" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4 5.5V4a2.5 2.5 0 015 0v1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M4.5 8.5l1.5 1.5 2.5-2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                value={form.confirm}
                onChange={handleChange('confirm')}
                placeholder="Xác nhận mật khẩu"
                required
                className={styles.input}
              />
            </div>
          )}

          <button type="submit" className={styles.submitBtn}>
            {showForgot
              ? 'Gửi liên kết đặt lại'
              : mode === 'login'
              ? 'Đăng nhập'
              : 'Tạo tài khoản'}
          </button>

          {/* ── Footer links ── */}
          {!showForgot && mode === 'login' && (
            <div className={styles.footerLinks}>
              <button type="button" className={styles.linkBtn} onClick={() => setShowForgot(true)}>
                Quên mật khẩu?
              </button>
            </div>
          )}

          {!showForgot && mode === 'register' && (
            <div className={styles.footerLinks}>
              <span className={styles.footerText}>Đã có tài khoản?</span>
              <button type="button" className={styles.linkBtn} onClick={() => switchMode('login')}>
                Đăng nhập ngay
              </button>
            </div>
          )}
        </form>

        {/* ── Divider note ── */}
        <div className={styles.note}>
          Thuộc tính bảo vệ nội dung · Statordata.com
        </div>
      </div>
    </div>
  );
}