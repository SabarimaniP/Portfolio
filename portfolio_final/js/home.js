/**
 * =====================================================
 *   home.js — Constellation Canvas Animation
 *   The animated PM skills network on the Home section
 *
 *   To add/remove nodes: edit the NODE_DEFS array below
 *   To change colors:    edit the `color` field per node
 * =====================================================
 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initConstellation();
});

function initConstellation() {
  const canvas = document.getElementById('constCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  /* ── Node definitions ── */
  const NODE_DEFS = [
    { label: 'Product\nStrategy', icon: '🎯', color: '#7c5cfc' },
    { label: 'User\nResearch',    icon: '🔍', color: '#5b8af5' },
    { label: 'Customer\nEmpathy',            icon: '🎨', color: '#c084fc' },
    { label: 'Data',              icon: '🗃️', color: '#4ade80' },
    { label: 'Problem\nDiscovery',      icon: '🧪', color: '#facc15' },
    { label: 'Market\nResearch',            icon: '⚡', color: '#f97316' },
  ];

  let nodes = [], W = 0, H = 0, t = 0, animFrame;

  function buildNodes() {
    const cx = W / 2;
    const cy = H / 2;
    const r  = Math.min(W, H) * 0.32;
    nodes = NODE_DEFS.map((def, i) => {
      const angle = (i / NODE_DEFS.length) * Math.PI * 2 - Math.PI / 2;
      return {
        ...def,
        ox: cx + r * Math.cos(angle),
        oy: cy + r * Math.sin(angle),
        x: 0, y: 0,
        pulse: Math.random() * Math.PI * 2,
        radius: Math.max(20, Math.min(W, H) * 0.05),
      };
    });
  }

  function resize() {
    const dpr  = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    if (W === 0 || H === 0) return;
    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildNodes();
  }

  function hexRgba(hex, a) {
    const rv = parseInt(hex.slice(1, 3), 16);
    const gv = parseInt(hex.slice(3, 5), 16);
    const bv = parseInt(hex.slice(5, 7), 16);
    return `rgba(${rv},${gv},${bv},${a})`;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.011;

    nodes.forEach((n, i) => {
      n.x     = n.ox + Math.sin(t + i * 1.15) * 7;
      n.y     = n.oy + Math.cos(t + i * 0.88) * 7;
      n.pulse += 0.033;
    });

    /* Edges */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        const maxD = Math.min(W, H) * 1.05;
        if (d > maxD) continue;
        const alpha = (1 - d / maxD) * 0.36;
        const grad  = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, hexRgba(a.color, alpha));
        grad.addColorStop(1, hexRgba(b.color, alpha));
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 1.5;
        ctx.stroke();
      }
    }

    /* Nodes */
    nodes.forEach(n => {
      const scale = 1 + 0.13 * Math.sin(n.pulse);
      const R     = n.radius * scale;

      /* Glow */
      const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, R * 1.9);
      grd.addColorStop(0, hexRgba(n.color, 0.15));
      grd.addColorStop(1, hexRgba(n.color, 0));
      ctx.beginPath(); ctx.arc(n.x, n.y, R * 1.9, 0, Math.PI * 2);
      ctx.fillStyle = grd; ctx.fill();

      /* Body */
      ctx.beginPath(); ctx.arc(n.x, n.y, R, 0, Math.PI * 2);
      ctx.fillStyle   = '#0f1520'; ctx.fill();
      ctx.strokeStyle = hexRgba(n.color, 0.85);
      ctx.lineWidth   = 2.5; ctx.stroke();

      /* Icon */
      ctx.font         = `${Math.round(R * 0.62)}px serif`;
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.icon, n.x, n.y - 1);

      /* Label */
      ctx.font      = `500 11px 'DM Sans', sans-serif`;
      ctx.fillStyle = '#8892a4';
      n.label.split('\n').forEach((line, li) => {
        ctx.fillText(line, n.x, n.y + R + 13 + li * 14);
      });
    });

    animFrame = requestAnimationFrame(draw);
  }

  /* Pause when scrolled off screen */
  const visObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { if (!animFrame) draw(); }
      else { cancelAnimationFrame(animFrame); animFrame = null; }
    });
  });
  visObs.observe(canvas);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cancelAnimationFrame(animFrame);
      animFrame = null;
      resize();
      draw();
    }, 80);
  });

  /* Wait for layout to settle then paint */
  requestAnimationFrame(() => {
    setTimeout(() => { resize(); draw(); }, 100);
  });
}