export default function MotorSVG({ size = 80, spin = true }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 80 80" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={spin ? { animation: 'spinSlow 12s linear infinite' } : {}}
    >
      <circle cx="40" cy="40" r="36" stroke="rgba(255,255,255,.15)" strokeWidth="1.5"/>
      <circle cx="40" cy="40" r="28" stroke="rgba(0,200,224,.3)" strokeWidth="1" strokeDasharray="4 3"/>
      <circle cx="40" cy="40" r="20" stroke="rgba(0,200,224,.5)" strokeWidth="1.5"/>
      <circle cx="40" cy="40" r="12" fill="rgba(0,200,224,.1)" stroke="rgba(0,200,224,.7)" strokeWidth="1.5"/>
      {[0,45,90,135,180,225,270,315].map(angle => {
        const r = Math.PI * angle / 180;
        const x1 = 40 + 20 * Math.cos(r), y1 = 40 + 20 * Math.sin(r);
        const x2 = 40 + 34 * Math.cos(r), y2 = 40 + 34 * Math.sin(r);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,.35)" strokeWidth="1.5" strokeLinecap="round"/>;
      })}
      <circle cx="40" cy="40" r="5" fill="rgba(0,200,224,.9)"/>
    </svg>
  );
}
