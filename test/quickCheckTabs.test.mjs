// Test thuần logic tính toán của Tab 02 (3 pha) trong QuickCheckTabs.jsx
// Copy y nguyên công thức từ component (không import React) để test độc lập.

import assert from 'node:assert/strict';

function toNum(v, fallback = 0) {
  if (v === '' || v === null || v === undefined) return fallback;
  const n = Number(v);
  return Number.isNaN(n) ? fallback : n;
}

// ==== Logic y hệt Tab 02 trong QuickCheckTabs.jsx ====
function calcTab02({ z, p2, f }) {
  const p2zNum = toNum(z, 0);
  const p2_2pNum = toNum(p2, 0);
  const p2fNum = toNum(f, 0);

  const p2_ntd = p2_2pNum > 0 ? Math.round((120 * p2fNum) / p2_2pNum) : 0;

  const p2_tauRaw = p2_2pNum > 0 ? p2zNum / p2_2pNum : 0;
  const p2_tauIsInteger = Number.isInteger(p2_tauRaw);
  const p2_tau = p2_tauIsInteger ? p2_tauRaw : Math.round(p2_tauRaw * 100) / 100;

  const p2_qRaw = p2_tauRaw / 3;
  const p2_qIsInteger = Number.isInteger(p2_qRaw);
  const p2_q = p2_qIsInteger ? p2_qRaw : Math.round(p2_qRaw * 100) / 100;

  return {
    ntd: p2_ntd,
    tau: p2_tau,
    q: p2_q,
    qIsInteger: p2_qIsInteger,
    pl: p2_qIsInteger ? 'SN' : 'PS',
    plLabel: p2_qIsInteger ? 'Số Nguyên' : 'Phân số tối giản',
  };
}

let passed = 0;
let failed = 0;

function testCase(name, input, expected) {
  try {
    const result = calcTab02(input);
    assert.equal(result.ntd, expected.ntd, `ntd sai: nhận ${result.ntd}, kỳ vọng ${expected.ntd}`);
    assert.equal(result.tau, expected.tau, `tau sai: nhận ${result.tau}, kỳ vọng ${expected.tau}`);
    assert.equal(result.q, expected.q, `q sai: nhận ${result.q}, kỳ vọng ${expected.q}`);
    assert.equal(result.pl, expected.pl, `PL sai: nhận ${result.pl}, kỳ vọng ${expected.pl}`);
    console.log(`✅ PASS  ${name}  ->  Ntd=${result.ntd}, τ=${result.tau}, q=${result.q}, PL=${result.pl} (${result.plLabel})`);
    passed++;
  } catch (err) {
    console.log(`❌ FAIL  ${name}  ->  ${err.message}`);
    failed++;
  }
}

console.log('=== Test Tab 02 (3 pha 1 tốc độ) — SN / PS ===\n');

// Case 1: theo screenshot user gửi trước (Z=36, 2p=3, F=50) -> vốn đã đúng từ trước
testCase(
  'Case A: Z=36, 2p=3, F=50 (từ screenshot, đã đúng trước đó)',
  { z: 36, p2: 3, f: 50 },
  { ntd: 2000, tau: 12, q: 4, pl: 'SN' }
);

// Case 2: bộ số mình đề xuất để test SN
testCase(
  'Case B: Z=36, 2p=4, F=50 (kỳ vọng SN)',
  { z: 36, p2: 4, f: 50 },
  { ntd: 1500, tau: 9, q: 3, pl: 'SN' }
);

// Case 3: bộ số mình đề xuất để test PS (đây là case chính cần verify bug đã sửa)
testCase(
  'Case C: Z=24, 2p=6, F=50 (kỳ vọng PS)',
  { z: 24, p2: 6, f: 50 },
  { ntd: 1000, tau: 4, q: 1.33, pl: 'PS' }
);

// Case 4: thêm 1 case PS khác để chắc chắn không phải trùng hợp
testCase(
  'Case D: Z=18, 2p=4, F=50 (τ=4.5 lẻ -> q lẻ -> kỳ vọng PS)',
  { z: 18, p2: 4, f: 50 },
  { ntd: 1500, tau: 4.5, q: 1.5, pl: 'PS' }
);

// Case 5: edge case 2p = 0 (tránh chia cho 0)
testCase(
  'Case E: 2p=0 (edge case chia 0, kỳ vọng không crash, ntd=0, tau=0, q=0, SN)',
  { z: 36, p2: 0, f: 50 },
  { ntd: 0, tau: 0, q: 0, pl: 'SN' }
);

console.log(`\n=== Kết quả: ${passed} PASS / ${failed} FAIL ===`);
process.exit(failed > 0 ? 1 : 0);
