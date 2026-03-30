/**
 * =====================================================
 *   projects.js — Project Banner SVG Illustrations
 *   Injects inline SVG art into each project card banner
 *
 *   To customise a banner: find the matching block below
 *   (pb1 = FamWish, pb2 = GPay, pb3 = TECHgium)
 *   and edit the SVG markup inside the template literal.
 * =====================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initProjectBanners();
});

function initProjectBanners() {

  /* ─────────────────────────────────────────────
     BANNER 1 — FamWish
  ───────────────────────────────────────────── */
  const pb1 = document.getElementById('pb1');
  if (pb1) {
    pb1.insertAdjacentHTML('afterbegin', `
      <svg width="100%" height="100%" viewBox="0 0 380 185"
           xmlns="http://www.w3.org/2000/svg"
           style="position:absolute;inset:0">
        <defs>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- Central goal target -->
        <circle cx="190" cy="92" r="44" fill="rgba(124,92,252,0.12)" stroke="rgba(124,92,252,0.45)" stroke-width="1.5"/>
        <text x="190" y="100" font-size="30" text-anchor="middle" dominant-baseline="middle">🎯</text>

        <!-- Teen node -->
        <circle cx="74" cy="74" r="30" fill="rgba(91,138,245,0.08)" stroke="rgba(91,138,245,0.35)" stroke-width="1"/>
        <text x="74" y="70" font-size="18" text-anchor="middle">👦</text>
        <text x="74" y="92" font-size="9.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Teen</text>

        <!-- Parent node -->
        <circle cx="306" cy="74" r="30" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.35)" stroke-width="1"/>
        <text x="306" y="70" font-size="18" text-anchor="middle">👩</text>
        <text x="306" y="92" font-size="9.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Parent</text>

        <!-- Arrows -->
        <path d="M104 78 L144 88" stroke="rgba(91,138,245,0.55)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" filter="url(#glow1)"/>
        <path d="M236 88 L276 78" stroke="rgba(192,132,252,0.55)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" filter="url(#glow1)"/>

        <!-- DAU / D30 badge -->
        <rect x="138" y="140" width="104" height="24" rx="12" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.3)" stroke-width="1"/>
        <text x="190" y="156" font-size="10.5" text-anchor="middle" fill="#4ade80" font-family="DM Sans">↑ DAU &amp; D30</text>

        <!-- Wish badge top -->
        <rect x="150" y="18" width="80" height="22" rx="11" fill="rgba(250,204,21,0.08)" stroke="rgba(250,204,21,0.3)" stroke-width="1"/>
        <text x="190" y="33" font-size="9.5" text-anchor="middle" fill="#facc15" font-family="DM Sans">✨ Wish Request</text>
      </svg>
    `);
  }

  /* ─────────────────────────────────────────────
     BANNER 2 — Google Pay Redesign
  ───────────────────────────────────────────── */
  const pb2 = document.getElementById('pb2');
  if (pb2) {
    pb2.insertAdjacentHTML('afterbegin', `
      <svg width="100%" height="100%" viewBox="0 0 380 185"
           xmlns="http://www.w3.org/2000/svg"
           style="position:absolute;inset:0">

        <!-- Phone mockup -->
        <rect x="148" y="18" width="84" height="150" rx="12" fill="rgba(8,12,20,0.75)" stroke="rgba(91,138,245,0.45)" stroke-width="1.5"/>
        <rect x="162" y="32" width="56" height="46" rx="4" fill="rgba(91,138,245,0.06)"/>

        <!-- G logo -->
        <text x="190" y="60" font-size="28" text-anchor="middle" dominant-baseline="middle" fill="#4285F4" font-weight="900">G</text>

        <!-- Fix labels -->
        <rect x="162" y="86" width="56" height="15" rx="3" fill="rgba(74,222,128,0.1)"/>
        <text x="190" y="98" font-size="8.5" text-anchor="middle" fill="#4ade80" font-family="DM Sans">Clean UI ✓</text>

        <rect x="162" y="106" width="56" height="15" rx="3" fill="rgba(192,132,252,0.1)"/>
        <text x="190" y="118" font-size="8.5" text-anchor="middle" fill="#c084fc" font-family="DM Sans">AI Insights ✓</text>

        <rect x="162" y="126" width="56" height="15" rx="3" fill="rgba(250,204,21,0.1)"/>
        <text x="190" y="138" font-size="8.5" text-anchor="middle" fill="#facc15" font-family="DM Sans">Smart Rewards ✓</text>

        <!-- 36 participants bubble -->
        <rect x="16" y="66" width="84" height="40" rx="8" fill="rgba(8,12,20,0.6)" stroke="rgba(91,138,245,0.3)" stroke-width="1"/>
        <text x="58" y="85" font-size="20" text-anchor="middle" fill="#5b8af5" font-weight="900" font-family="Syne">36</text>
        <text x="58" y="100" font-size="8.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Participants</text>

        <!-- 3 pain points bubble -->
        <rect x="280" y="66" width="84" height="40" rx="8" fill="rgba(8,12,20,0.6)" stroke="rgba(249,115,22,0.3)" stroke-width="1"/>
        <text x="322" y="85" font-size="20" text-anchor="middle" fill="#f97316" font-weight="900" font-family="Syne">3</text>
        <text x="322" y="100" font-size="8.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Pain Points</text>
      </svg>
    `);
  }

  /* ─────────────────────────────────────────────
     BANNER 3 — TECHgium Robot
  ───────────────────────────────────────────── */
  const pb3 = document.getElementById('pb3');
  if (pb3) {
    pb3.insertAdjacentHTML('afterbegin', `
      <svg width="100%" height="100%" viewBox="0 0 380 185"
           xmlns="http://www.w3.org/2000/svg"
           style="position:absolute;inset:0">
        <defs>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- Robot body -->
        <rect x="158" y="60" width="64" height="68" rx="8" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.45)" stroke-width="1.5"/>

        <!-- Robot head -->
        <rect x="168" y="36" width="44" height="34" rx="6" fill="rgba(249,115,22,0.07)" stroke="rgba(249,115,22,0.35)" stroke-width="1"/>

        <!-- Eyes -->
        <circle cx="180" cy="53" r="5.5" fill="rgba(249,115,22,0.25)" stroke="#f97316" stroke-width="1.5" filter="url(#glow3)"/>
        <circle cx="200" cy="53" r="5.5" fill="rgba(249,115,22,0.25)" stroke="#f97316" stroke-width="1.5" filter="url(#glow3)"/>

        <!-- Thermal panel -->
        <rect x="170" y="72" width="40" height="20" rx="3" fill="rgba(250,204,21,0.08)" stroke="rgba(250,204,21,0.4)" stroke-width="1"/>
        <text x="190" y="86" font-size="10" text-anchor="middle" fill="#facc15">🌡 Thermal</text>

        <!-- LiDAR ring -->
        <circle cx="190" cy="108" r="17" fill="none" stroke="rgba(91,138,245,0.45)" stroke-width="1.2" stroke-dasharray="3,3"/>
        <text x="190" y="112" font-size="8.5" text-anchor="middle" fill="#5b8af5" font-family="DM Sans">LIDAR</text>

        <!-- Trophy badge -->
        <rect x="264" y="16" width="100" height="36" rx="8" fill="rgba(8,12,20,0.72)" stroke="rgba(250,204,21,0.4)" stroke-width="1"/>
        <text x="283" y="36" font-size="14">🏆</text>
        <text x="330" y="28" font-size="8.5" fill="#facc15" font-weight="700" font-family="Syne" text-anchor="middle">TOP 30</text>
        <text x="330" y="44" font-size="7.5" fill="#8892a4" font-family="DM Sans" text-anchor="middle">/ 400+ teams</text>

        <!-- GPS label -->
        <text x="36" y="66" font-size="10" fill="#4ade80" font-family="DM Sans">📡 GPS Nav</text>

        <!-- Terrain line -->
        <path d="M18 162 Q78 138 138 155 Q198 172 258 148 Q318 126 362 152" stroke="rgba(249,115,22,0.25)" stroke-width="1.5" fill="none"/>
      </svg>
    `);
  }

 /* ─────────────────────────────────────────────
   BANNER 4 — FamPay RCA
───────────────────────────────────────────── */
const pb4 = document.getElementById('pb4');
if (pb4) {
  pb4.insertAdjacentHTML('afterbegin', `
    <svg width="100%" height="100%" viewBox="0 0 380 185"
         xmlns="http://www.w3.org/2000/svg"
         style="position:absolute;inset:0">
      <defs>
        <filter id="glow4">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Central insight node -->
      <circle cx="190" cy="86" r="44" fill="rgba(250,204,21,0.09)" stroke="rgba(250,204,21,0.38)" stroke-width="1.5"/>
      <text x="190" y="78" font-size="9" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Core Insight</text>
      <text x="190" y="93" font-size="11" text-anchor="middle" fill="#facc15" font-family="DM Sans" font-weight="700">Payments ≠</text>
      <text x="190" y="108" font-size="11" text-anchor="middle" fill="#facc15" font-family="DM Sans" font-weight="700">Daily Habit</text>

      <!-- Left node — Problem -->
      <circle cx="72" cy="74" r="30" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.35)" stroke-width="1"/>
      <text x="72" y="70" font-size="20" text-anchor="middle">📉</text>
      <text x="72" y="91" font-size="9.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Drop</text>

      <!-- Right node — Solution -->
      <circle cx="308" cy="74" r="30" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.35)" stroke-width="1"/>
      <text x="308" y="70" font-size="20" text-anchor="middle">✦</text>
      <text x="308" y="91" font-size="9.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">FamWish</text>

      <!-- Arrow left to center -->
      <path d="M102 78 L144 84" stroke="rgba(249,115,22,0.55)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" filter="url(#glow4)"/>

      <!-- Arrow center to right -->
      <path d="M236 84 L278 78" stroke="rgba(74,222,128,0.55)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" filter="url(#glow4)"/>

      <!-- Root cause pills - bottom left -->
      <rect x="14" y="115" width="110" height="18" rx="4" fill="rgba(91,138,245,0.08)" stroke="rgba(91,138,245,0.28)" stroke-width="1"/>
      <text x="20" y="128" font-size="8.5" fill="#5b8af5" font-family="DM Sans">⚡ No Daily Triggers</text>

      <rect x="14" y="138" width="110" height="18" rx="4" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.28)" stroke-width="1"/>
      <text x="20" y="151" font-size="8.5" fill="#c084fc" font-family="DM Sans">🔄 No Habit Loop</text>

      <rect x="14" y="161" width="110" height="18" rx="4" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.28)" stroke-width="1"/>
      <text x="20" y="174" font-size="8.5" fill="#f97316" font-family="DM Sans">📈 No Progression</text>

      <!-- Metrics badge - bottom right -->
      <rect x="248" y="128" width="118" height="24" rx="12" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.3)" stroke-width="1"/>
      <text x="307" y="144" font-size="10.5" text-anchor="middle" fill="#4ade80" font-family="DM Sans">↑ DAU &amp; D30</text>

      <!-- Top badge -->
      <rect x="138" y="16" width="104" height="22" rx="11" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.3)" stroke-width="1"/>
      <text x="190" y="31" font-size="9.5" text-anchor="middle" fill="#f97316" font-family="DM Sans">🔍 RCA Study</text>
    </svg>
  `);

  /* ─────────────────────────────────────────────
   BANNER 5 — AI Call Analyzer (n8n)
───────────────────────────────────────────── */
const pb5 = document.getElementById('pb5');
if (pb5) {
  pb5.insertAdjacentHTML('afterbegin', `
    <svg width="100%" height="100%" viewBox="0 0 380 185"
         xmlns="http://www.w3.org/2000/svg"
         style="position:absolute;inset:0">
      <defs>
        <filter id="glow5">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Pipeline track -->
      <line x1="44" y1="92" x2="336" y2="92"
            stroke="rgba(74,222,128,0.18)" stroke-width="1.5" stroke-dasharray="5,4"/>

      <!-- Node 1: Audio -->
      <circle cx="44" cy="92" r="26" fill="rgba(74,222,128,0.08)"
              stroke="rgba(74,222,128,0.4)" stroke-width="1.5" filter="url(#glow5)"/>
      <text x="44" y="88" font-size="16" text-anchor="middle">🎙</text>
      <text x="44" y="127" font-size="8.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Audio</text>

      <!-- Arrow -->
      <path d="M72 92 L96 92" stroke="rgba(74,222,128,0.5)" stroke-width="1.5"
            marker-end="url(#arr5)" fill="none"/>
      <defs>
        <marker id="arr5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(74,222,128,0.6)"/>
        </marker>
      </defs>

      <!-- Node 2: Whisper Transcribe -->
      <circle cx="130" cy="92" r="26" fill="rgba(91,138,245,0.08)"
              stroke="rgba(91,138,245,0.4)" stroke-width="1.5"/>
      <text x="130" y="88" font-size="16" text-anchor="middle">📝</text>
      <text x="130" y="127" font-size="8.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Whisper</text>

      <!-- Arrow -->
      <path d="M158 92 L182 92" stroke="rgba(91,138,245,0.5)" stroke-width="1.5" fill="none"/>

      <!-- Node 3: GPT-4o-mini (center, larger) -->
      <circle cx="216" cy="92" r="32" fill="rgba(192,132,252,0.09)"
              stroke="rgba(192,132,252,0.45)" stroke-width="1.5" filter="url(#glow5)"/>
      <text x="216" y="86" font-size="9" text-anchor="middle" fill="#c084fc" font-family="DM Sans" font-weight="700">GPT-4o</text>
      <text x="216" y="100" font-size="9" text-anchor="middle" fill="#c084fc" font-family="DM Sans" font-weight="700">mini ×3</text>
      <text x="216" y="134" font-size="8.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Parallel AI</text>

      <!-- Arrow -->
      <path d="M250 92 L272 92" stroke="rgba(192,132,252,0.5)" stroke-width="1.5" fill="none"/>

      <!-- Node 4: Scores -->
      <circle cx="306" cy="92" r="26" fill="rgba(250,204,21,0.08)"
              stroke="rgba(250,204,21,0.4)" stroke-width="1.5"/>
      <text x="306" y="88" font-size="16" text-anchor="middle">📊</text>
      <text x="306" y="127" font-size="8.5" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Report</text>

      <!-- Score pills -->
      <rect x="248" y="14" width="88" height="18" rx="4"
            fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.28)" stroke-width="1"/>
      <text x="292" y="27" font-size="8" text-anchor="middle" fill="#4ade80" font-family="DM Sans">Quality /10</text>

      <rect x="248" y="37" width="88" height="18" rx="4"
            fill="rgba(91,138,245,0.08)" stroke="rgba(91,138,245,0.28)" stroke-width="1"/>
      <text x="292" y="50" font-size="8" text-anchor="middle" fill="#5b8af5" font-family="DM Sans">Script /8</text>

      <rect x="248" y="60" width="88" height="18" rx="4"
            fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.28)" stroke-width="1"/>
      <text x="292" y="73" font-size="8" text-anchor="middle" fill="#c084fc" font-family="DM Sans">Talk Time</text>

      <!-- n8n badge bottom left -->
      <rect x="14" y="148" width="72" height="22" rx="11"
            fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.3)" stroke-width="1"/>
      <text x="50" y="163" font-size="9.5" text-anchor="middle" fill="#4ade80" font-family="DM Sans">⚡ n8n</text>

      <!-- Hindi label -->
      <rect x="98" y="148" width="84" height="22" rx="11"
            fill="rgba(91,138,245,0.08)" stroke="rgba(91,138,245,0.28)" stroke-width="1"/>
      <text x="140" y="163" font-size="9" text-anchor="middle" fill="#5b8af5" font-family="DM Sans">🇮🇳 Hindi Calls</text>
    </svg>
  `);
}

/* ─────────────────────────────────────────────
   BANNER 6 — FamPay Product Teardown
───────────────────────────────────────────── */
const pb6 = document.getElementById('pb6');
if (pb6) {
  pb6.insertAdjacentHTML('afterbegin', `
    <svg width="100%" height="100%" viewBox="0 0 380 185"
         xmlns="http://www.w3.org/2000/svg"
         style="position:absolute;inset:0">
      <defs>
        <filter id="glow6">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Central FamPay core node -->
      <circle cx="190" cy="86" r="44" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)" stroke-width="1.5" filter="url(#glow6)"/>
      <text x="190" y="80" font-size="9" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Product</text>
      <text x="190" y="94" font-size="12" text-anchor="middle" fill="#c084fc" font-family="DM Sans" font-weight="700">FamPay</text>
      <text x="190" y="108" font-size="9" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Teardown</text>

      <!-- Left node — Teen -->
      <circle cx="72" cy="72" r="28" fill="rgba(91,138,245,0.08)" stroke="rgba(91,138,245,0.35)" stroke-width="1"/>
      <text x="72" y="68" font-size="18" text-anchor="middle">👦</text>
      <text x="72" y="88" font-size="9" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Teen</text>

      <!-- Right node — Parent -->
      <circle cx="308" cy="72" r="28" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.35)" stroke-width="1"/>
      <text x="308" y="68" font-size="18" text-anchor="middle">👩</text>
      <text x="308" y="88" font-size="9" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Parent</text>

      <!-- Arrows -->
      <path d="M100 76 L144 84" stroke="rgba(91,138,245,0.55)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" filter="url(#glow6)"/>
      <path d="M236 84 L280 76" stroke="rgba(192,132,252,0.55)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" filter="url(#glow6)"/>

      <!-- 4 layer pills - bottom left stack -->
      <rect x="14" y="112" width="105" height="16" rx="4" fill="rgba(91,138,245,0.08)" stroke="rgba(91,138,245,0.28)" stroke-width="1"/>
      <text x="20" y="124" font-size="8" fill="#5b8af5" font-family="DM Sans">💳 Access Layer</text>

      <rect x="14" y="132" width="105" height="16" rx="4" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.28)" stroke-width="1"/>
      <text x="20" y="144" font-size="8" fill="#4ade80" font-family="DM Sans">🔒 Permission Layer</text>

      <rect x="14" y="152" width="105" height="16" rx="4" fill="rgba(250,204,21,0.08)" stroke="rgba(250,204,21,0.28)" stroke-width="1"/>
      <text x="20" y="164" font-size="8" fill="#facc15" font-family="DM Sans">💰 Money Layer</text>

      <rect x="14" y="172" width="105" height="16" rx="4" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.28)" stroke-width="1"/>
      <text x="20" y="184" font-size="8" fill="#c084fc" font-family="DM Sans">🔁 Habit Layer</text>

      <!-- Right side stats -->
      <!-- 15M badge -->
      <rect x="248" y="110" width="118" height="36" rx="8" fill="rgba(192,132,252,0.07)" stroke="rgba(192,132,252,0.28)" stroke-width="1"/>
      <text x="307" y="126" font-size="16" text-anchor="middle" fill="#c084fc" font-family="DM Sans" font-weight="900">15M+</text>
      <text x="307" y="140" font-size="8" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Users (2025)</text>

      <!-- 60% badge -->
      <rect x="248" y="152" width="56" height="30" rx="6" fill="rgba(250,204,21,0.07)" stroke="rgba(250,204,21,0.28)" stroke-width="1"/>
      <text x="276" y="167" font-size="13" text-anchor="middle" fill="#facc15" font-family="DM Sans" font-weight="900">60%</text>
      <text x="276" y="178" font-size="7" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Teen Share</text>

      <!-- Pivot badge -->
      <rect x="310" y="152" width="56" height="30" rx="6" fill="rgba(249,115,22,0.07)" stroke="rgba(249,115,22,0.28)" stroke-width="1"/>
      <text x="338" y="165" font-size="8" text-anchor="middle" fill="#f97316" font-family="DM Sans" font-weight="700">2023</text>
      <text x="338" y="178" font-size="7" text-anchor="middle" fill="#8892a4" font-family="DM Sans">Pivot</text>

      <!-- Top badge -->
      <rect x="138" y="16" width="104" height="22" rx="11" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.3)" stroke-width="1"/>
      <text x="190" y="31" font-size="9.5" text-anchor="middle" fill="#c084fc" font-family="DM Sans">🔍 Strategy Deep-Dive</text>
    </svg>
  `);
}
}
}

