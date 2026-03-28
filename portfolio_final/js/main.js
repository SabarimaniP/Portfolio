/**
 * =====================================================
 *   main.js — Core functionality
 *   Handles: Loader, Cursor, Navigation, Scroll Reveal,
 *            Copy Buttons, Back-to-Top, Smooth Scroll
 * =====================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavigation();
  initScrollReveal();
  initCopyButtons();
  initBackToTop();
  initSmoothScroll();
});

/* ─────────────────────────────────────────────
   1. PAGE LOADER
───────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  const fill   = document.getElementById('loaderFill');
  const text   = document.getElementById('loaderText');
  if (!loader) return;

  const steps = [
    { pct: 20,  label: 'Initialising...' },
    { pct: 45,  label: 'Loading assets...' },
    { pct: 72,  label: 'Almost there...' },
    { pct: 90,  label: 'Finishing up...' },
    { pct: 100, label: 'Done!' },
  ];

  let i = 0;
  const tick = () => {
    if (i >= steps.length) {
      setTimeout(() => { loader.classList.add('hidden'); }, 300);
      return;
    }
    const { pct, label } = steps[i++];
    fill.style.width = pct + '%';
    text.textContent = label;
    setTimeout(tick, 220 + Math.random() * 160);
  };
  setTimeout(tick, 200);
}

/* ─────────────────────────────────────────────
   2. CUSTOM CURSOR
───────────────────────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  const lerp = () => {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerp);
  };
  lerp();

  const hoverSel = 'a, button, .chip, .stat-card, .proj-card, .edu-card, .social-link, .filter-btn, .nav-link';
  document.addEventListener('mouseover', e => { if (e.target.closest(hoverSel)) ring.classList.add('hovered'); });
  document.addEventListener('mouseout',  e => { if (e.target.closest(hoverSel)) ring.classList.remove('hovered'); });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ─────────────────────────────────────────────
   3. NAVIGATION — active link + hamburger
───────────────────────────────────────────── */
function initNavigation() {
  const nav        = document.getElementById('mainNav');
  const allLinks   = document.querySelectorAll('.nav-link, .mob-link');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const sections   = document.querySelectorAll('section[id]');

  // Highlight active section link on scroll
  function syncActive() {
    let current = '';
    sections.forEach(s => { if (window.scrollY + 90 >= s.offsetTop) current = s.id; });
    allLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }

  // Add shadow to nav when scrolled
  function syncNav() { nav.classList.toggle('scrolled', window.scrollY > 20); }

  window.addEventListener('scroll', () => { syncActive(); syncNav(); }, { passive: true });
  syncActive();

  // Hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

/* ─────────────────────────────────────────────
   4. SCROLL REVEAL
───────────────────────────────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = (idx * 0.08) + 's';
    obs.observe(el);
  });
}

/* ─────────────────────────────────────────────
   5. COPY TO CLIPBOARD
───────────────────────────────────────────── */
function initCopyButtons() {
  const toast = document.getElementById('toast');

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.dataset.copy;
      if (!text) return;

      navigator.clipboard.writeText(text)
        .then(() => showToast('✅ Copied to clipboard!'))
        .catch(() => {
          // Fallback for older browsers
          const el = Object.assign(document.createElement('textarea'), { value: text });
          el.style.cssText = 'position:fixed;opacity:0';
          document.body.append(el);
          el.select();
          document.execCommand('copy');
          el.remove();
          showToast('✅ Copied to clipboard!');
        });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
  }
}

/* ─────────────────────────────────────────────
   6. BACK TO TOP
───────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─────────────────────────────────────────────
   7. SMOOTH SCROLL (anchor links)
───────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([download])').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = (document.getElementById('mainNav')?.offsetHeight || 68);
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });
}