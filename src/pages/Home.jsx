import { Link } from 'react-router-dom';
import MotorSVG from '../components/MotorSVG';
import EfficiencyChart from '../components/EfficiencyChart';
import Subnav from '../components/Subnav';
import QuickCheckTabs from '../components/QuickCheckTabs';
import statorPhoto from '../assets/HINHTHONGSODINHMUC.jpg';
import appGif from '../assets/app.gif';
import fluxDensityImage from '../assets/PHANBOMATDOTUTHONG.jpg';

import { HERO_FEATURES, ANALYSIS_RESULTS, WHY_ITEMS } from '../data/content';
import styles from './Home.module.css';
import VideoDemoWidget from '../components/VideoDemoWidget';
import AnalysisWidget from '../components/AnalysisWidget';
import CalculationLinksWidget from '../components/CalculationLinksWidget';
import StatsBannerWidget from '../components/StatsBannerWidget';
import MagneticWidget from '../components/MagneticWidget';
import WhyWidget from '../components/WhyWidget';
import FluxDensityWidget from '../components/FluxDensityWidget';
import HistoryWidget from '../components/HistoryWidget';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={`page-wrap ${styles.heroInner}`}>
          <div className={`${styles.heroCard} fade-up`}>
            <div className={styles.heroCardImg}>
              <MotorSVG size={90} spin />
            </div>
            <div className={styles.heroCardBody}>
              <span className={styles.appBadge}>⚡ App Statordata</span>
              <h3>Phần mềm thiết kế<br />dây quấn động cơ điện</h3>
              <p>Tính toán & thiết kế chuyên nghiệp<br />cho kỹ sư điện Việt Nam</p>
            </div>
          </div>
          <div className={`${styles.heroContent} fade-up-1`}>
            <div className={styles.heroBadge}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0l1.5 4.5H12L8.5 7l1.5 4.5L6 9 2 11.5 3.5 7 0 4.5h4.5z"/></svg>
              Phần mềm thiết kế máy điện
            </div>
            <h1 className={styles.heroH1}>
              Thiết kế & Tính toán <em>dây quấn Stator</em> động cơ cảm ứng
            </h1>
            <ul className={styles.heroList}>
              {HERO_FEATURES.slice(0, 4).map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <div className={styles.heroActions}>
              <Link to="/group" className="btn btn-gold">Group Statordata.com</Link>
              <Link to="/lien-he" className="btn btn-ghost">Liên hệ</Link>
            </div>
          </div>
        </div>
      </section>
      <Subnav />
      <StatsBannerWidget />
      <CalculationLinksWidget />
      <QuickCheckTabs />
      <section className="section">
        <div className="page-wrap">
          <h2 className={styles.analysisSectionTitle}>PHƯƠNG PHÁP XỬ LÝ DỮ LIỆU TÍNH TOÁN</h2>
          <div className={styles.analysisSectionTitleLine} />
          <div className={styles.featGrid}>
            <AnalysisWidget results={ANALYSIS_RESULTS} />
            <VideoDemoWidget src={appGif} alt="Demo quá trình xử lý dữ liệu Statordata" />
          </div>
        </div>
      </section>
      <MagneticWidget fluxImage={appGif} statorPhoto={statorPhoto} />
      <WhyWidget items={WHY_ITEMS} />
      <FluxDensityWidget fluxDensityImage={fluxDensityImage} appGif={appGif} />
      <HistoryWidget />
    </>
  );
}