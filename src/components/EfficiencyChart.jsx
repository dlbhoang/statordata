import { useEffect, useRef } from 'react';

export default function EfficiencyChart({ height = 200 }) {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.offsetWidth;
    const H = height;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const pad = { t: 16, r: 14, b: 30, l: 38 };
    const cw = W - pad.l - pad.r;
    const ch = H - pad.t - pad.b;

    // Grid
    ctx.strokeStyle = '#eef2fa'; ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = pad.t + ch * (1 - i / 5);
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cw, y); ctx.stroke();
      ctx.fillStyle = '#8da0c0'; ctx.font = '9px Montserrat,sans-serif';
      ctx.fillText((i * 20) + '%', 2, y + 3);
    }
    for (let i = 0; i <= 5; i++) {
      const x = pad.l + cw * i / 5;
      ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + ch); ctx.stroke();
      ctx.fillStyle = '#8da0c0'; ctx.font = '9px Montserrat,sans-serif';
      ctx.fillText((i * 20) + '%', x - 8, pad.t + ch + 14);
    }

    const pts = [[0,0],[.1,.52],[.2,.70],[.35,.83],[.5,.88],[.65,.905],[.8,.91],[.9,.905],[1,.895],[1.1,.88],[1.2,.86]];
    const toX = v => pad.l + (v / 1.2) * cw;
    const toY = v => pad.t + ch * (1 - v);

    // Fill
    const grad = ctx.createLinearGradient(0, pad.t, 0, pad.t + ch);
    grad.addColorStop(0, 'rgba(26,92,216,.22)');
    grad.addColorStop(1, 'rgba(26,92,216,.02)');
    ctx.beginPath();
    ctx.moveTo(toX(pts[0][0]), toY(pts[0][1]));
    pts.forEach(([x, y]) => ctx.lineTo(toX(x), toY(y)));
    ctx.lineTo(toX(pts[pts.length - 1][0]), pad.t + ch);
    ctx.lineTo(toX(pts[0][0]), pad.t + ch);
    ctx.closePath(); ctx.fillStyle = grad; ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(toX(pts[0][0]), toY(pts[0][1]));
    pts.forEach(([x, y]) => ctx.lineTo(toX(x), toY(y)));
    ctx.strokeStyle = '#1a5cd8'; ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke();

    // Peak
    const peak = pts.reduce((a, b) => b[1] > a[1] ? b : a);
    ctx.beginPath(); ctx.arc(toX(peak[0]), toY(peak[1]), 5, 0, Math.PI * 2);
    ctx.fillStyle = '#00c8e0'; ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();

    // Label
    ctx.fillStyle = '#1249a0'; ctx.font = 'bold 11px Montserrat,sans-serif';
    ctx.fillText('η (%)', pad.l, pad.t - 4);
    ctx.fillStyle = '#8da0c0'; ctx.font = '9px Montserrat,sans-serif';
    ctx.fillText('P (%)', pad.l + cw - 14, pad.t + ch + 14);
  }, [height]);

  return <canvas ref={ref} style={{ width: '100%', display: 'block', borderRadius: 6 }} />;
}
