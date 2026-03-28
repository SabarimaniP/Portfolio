/**
 * =====================================================
 *   skills.js — Skills Section Filter
 *   Works with the new .skill-card structure
 *   Filters .chip-row and .skills-sub-label by data-cat
 * =====================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initSkillsFilter();
});

function initSkillsFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const rows    = document.querySelectorAll('.chip-row, .skills-sub-label');

  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {

      /* ── Update active button ── */
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      /* ── Show / hide rows ── */
      rows.forEach(el => {
        if (filter === 'all') {
          el.style.display    = '';
          el.style.opacity    = '1';
          el.style.transition = '';
        } else {
          const show = el.dataset.cat === filter;
          if (show) {
            el.style.display    = '';
            el.style.opacity    = '0';
            el.style.transition = 'opacity 0.3s ease';
            /* Force reflow so transition plays */
            void el.offsetHeight;
            el.style.opacity    = '1';
          } else {
            el.style.display    = 'none';
          }
        }
      });

    });
  });
}
