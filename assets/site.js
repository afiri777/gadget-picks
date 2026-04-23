/**
 * site.js — shared across all pages of gadget-picks
 * 1. EN/JP language toggle (stored in localStorage)
 * 2. Floating ≡ category navigation panel
 */
(function () {
  'use strict';

  /* ============================================================
     Config
  ============================================================ */
  var LANG_KEY  = 'gp_lang';
  var BASE      = '';  // Netlify: no sub-path needed
  var lang      = localStorage.getItem(LANG_KEY) || 'ja';

  var CATEGORIES = [
    { icon: '🏠', ja: 'トップ',              en: 'Top',          path: '/'          },
    { icon: '🔋', ja: 'ガジェット・充電グッズ', en: 'Gadgets',      path: '/gadget/'   },
    { icon: '🖥️', ja: 'デスク・作業効率',     en: 'Desk Setup',   path: '/desk/'     },
    { icon: '🏠', ja: '生活ラクするグッズ',    en: 'Life Hacks',   path: '/life/'     },
    { icon: '🗂️', ja: '片付け・整理',         en: 'Organize',     path: '/organize/' },
    { icon: '🏕️', ja: 'アウトドア・キャンプ', en: 'Outdoor',      path: '/outdoor/'  },
    { icon: '🍳', ja: 'キッチン家電・料理グッズ', en: 'Kitchen',   path: '/kitchen/'  }
  ];

  var T = {
    ja: {
      tagline:     '失敗しにくいものだけ紹介',
      btnCta:      '価格を確認する →',
      yahoo:       'Yahoo!ショッピングで見る',
      amazon:      'Amazonでも見る',
      fitGood:     '👍 向いている人',
      fitBad:      '👎 向いていない人',
      pricePrefix: '目安',
      navTitle:    'カテゴリ',
      langBtn:     'EN',
      footer:      '© 2026 厳選まとめ'
    },
    en: {
      tagline:     'Only the reliable ones',
      btnCta:      'Check Price →',
      yahoo:       'View on Yahoo! Shopping',
      amazon:      'Also on Amazon',
      fitGood:     '👍 Good for',
      fitBad:      '👎 Not for',
      pricePrefix: 'Est.',
      navTitle:    'Categories',
      langBtn:     'JA',
      footer:      '© 2026 Curated Picks'
    }
  };

  /* ============================================================
     Language toggle — inject into .site-header .inner
  ============================================================ */
  function injectLangToggle() {
    var inner = document.querySelector('.site-header .inner');
    if (!inner || document.getElementById('gp-lang-btn')) return;

    var btn = document.createElement('button');
    btn.id = 'gp-lang-btn';
    btn.setAttribute('aria-label', 'Switch language');
    btn.style.cssText = [
      'background:transparent',
      'border:1px solid #444',
      'color:#a0a0a0',
      'font-size:11px',
      'font-weight:700',
      'letter-spacing:0.06em',
      'padding:4px 10px',
      'border-radius:20px',
      'cursor:pointer',
      'transition:border-color .2s,color .2s',
      'white-space:nowrap',
      'flex-shrink:0',
      'margin-left:auto'
    ].join(';');

    btn.addEventListener('mouseover', function () {
      btn.style.borderColor = '#d4a843';
      btn.style.color = '#d4a843';
    });
    btn.addEventListener('mouseout', function () {
      btn.style.borderColor = '#444';
      btn.style.color = '#a0a0a0';
    });
    btn.addEventListener('click', function () {
      lang = lang === 'ja' ? 'en' : 'ja';
      localStorage.setItem(LANG_KEY, lang);
      btn.textContent = T[lang].langBtn;
      applyTranslations();
    });

    btn.textContent = T[lang].langBtn;
    inner.appendChild(btn);
  }

  /* ============================================================
     Apply translations to rendered DOM
  ============================================================ */
  function applyTranslations() {
    var t = T[lang];

    // Header tagline
    var tagline = document.querySelector('.site-header .tagline');
    if (tagline) tagline.textContent = t.tagline;

    // Footer
    var footer = document.querySelector('.site-footer p');
    if (footer) footer.textContent = t.footer;

    // Primary CTA buttons
    document.querySelectorAll('.btn-cta').forEach(function (el) {
      el.textContent = t.btnCta;
    });

    // Sub buttons (Yahoo / Amazon)
    document.querySelectorAll('.btn-sub').forEach(function (el) {
      var href = el.getAttribute('href') || '';
      el.textContent = (href.indexOf('yahoo') !== -1) ? t.yahoo : t.amazon;
    });

    // Fit labels
    document.querySelectorAll('.fit-block.good .fit-label').forEach(function (el) {
      el.textContent = t.fitGood;
    });
    document.querySelectorAll('.fit-block.bad .fit-label').forEach(function (el) {
      el.textContent = t.fitBad;
    });

    // Price prefix (keep <strong> intact)
    document.querySelectorAll('.card-price').forEach(function (el) {
      var strong = el.querySelector('strong');
      if (strong) {
        el.innerHTML = t.pricePrefix + ' <strong>' + strong.textContent + '</strong>';
      }
    });

    // Nav panel title
    var navTitle = document.getElementById('gp-nav-title');
    if (navTitle) navTitle.textContent = t.navTitle;

    // Nav item labels
    document.querySelectorAll('.gp-nav-label').forEach(function (el, i) {
      if (CATEGORIES[i]) el.textContent = CATEGORIES[i][lang];
    });
  }

  /* ============================================================
     Floating category navigation
  ============================================================ */
  function injectFloatingNav() {
    if (document.getElementById('gp-nav-fab')) return;

    var path = window.location.pathname;

    // Detect active category
    var activeIdx = 0;
    for (var i = 1; i < CATEGORIES.length; i++) {
      var slug = CATEGORIES[i].path.replace(/\/$/, '');  // e.g. '/gadget'
      if (path.indexOf(slug) !== -1) { activeIdx = i; break; }
    }

    /* -- Overlay -- */
    var overlay = document.createElement('div');
    overlay.id = 'gp-nav-overlay';
    overlay.style.cssText = [
      'position:fixed',
      'inset:0',
      'background:rgba(0,0,0,.55)',
      'z-index:9998',
      'opacity:0',
      'pointer-events:none',
      'transition:opacity .22s'
    ].join(';');
    overlay.addEventListener('click', closeNav);

    /* -- Panel -- */
    var panel = document.createElement('div');
    panel.id = 'gp-nav-panel';
    panel.style.cssText = [
      'position:fixed',
      'right:0',
      'top:0',
      'height:100%',
      'width:240px',
      'max-width:80vw',
      'background:#111',
      'border-left:1px solid #2e2e2e',
      'z-index:9999',
      'transform:translateX(100%)',
      'transition:transform .25s ease',
      'display:flex',
      'flex-direction:column',
      'overflow-y:auto'
    ].join(';');

    /* Panel header row */
    var pHead = document.createElement('div');
    pHead.style.cssText = [
      'padding:20px 16px 16px',
      'border-bottom:1px solid #2e2e2e',
      'display:flex',
      'align-items:center',
      'justify-content:space-between'
    ].join(';');

    var navTitle = document.createElement('span');
    navTitle.id = 'gp-nav-title';
    navTitle.style.cssText = 'font-size:13px;font-weight:800;color:#d4a843;letter-spacing:.04em;';
    navTitle.textContent = T[lang].navTitle;

    var closeX = document.createElement('button');
    closeX.innerHTML = '✕';
    closeX.setAttribute('aria-label', 'Close navigation');
    closeX.style.cssText = [
      'background:none',
      'border:none',
      'color:#888',
      'font-size:15px',
      'cursor:pointer',
      'padding:4px',
      'line-height:1',
      'transition:color .15s'
    ].join(';');
    closeX.addEventListener('mouseover', function () { closeX.style.color = '#f0f0f0'; });
    closeX.addEventListener('mouseout',  function () { closeX.style.color = '#888'; });
    closeX.addEventListener('click', closeNav);

    pHead.appendChild(navTitle);
    pHead.appendChild(closeX);
    panel.appendChild(pHead);

    /* Nav list */
    var ul = document.createElement('ul');
    ul.style.cssText = 'list-style:none;padding:10px 0;flex:1;';

    CATEGORIES.forEach(function (cat, i) {
      var isActive = (i === activeIdx);
      var li = document.createElement('li');

      var a = document.createElement('a');
      a.href  = BASE + cat.path;
      a.style.cssText = [
        'display:flex',
        'align-items:center',
        'gap:10px',
        'padding:11px 16px',
        'font-size:13px',
        'color:' + (isActive ? '#d4a843' : '#d0d0d0'),
        'border-left:3px solid ' + (isActive ? '#d4a843' : 'transparent'),
        'background:' + (isActive ? 'rgba(212,168,67,.1)' : 'transparent'),
        'transition:background .15s',
        'text-decoration:none',
        'cursor:pointer'
      ].join(';');

      if (!isActive) {
        a.addEventListener('mouseover', function () { a.style.background = 'rgba(255,255,255,.04)'; });
        a.addEventListener('mouseout',  function () { a.style.background = 'transparent'; });
      }

      var iconSpan = document.createElement('span');
      iconSpan.textContent = cat.icon;
      iconSpan.style.cssText = 'font-size:18px;flex-shrink:0;width:24px;text-align:center;';

      var labelSpan = document.createElement('span');
      labelSpan.className = 'gp-nav-label';
      labelSpan.textContent = cat[lang];
      labelSpan.style.cssText = 'flex:1;line-height:1.4;';

      if (isActive) {
        var dot = document.createElement('span');
        dot.textContent = '●';
        dot.style.cssText = 'font-size:8px;color:#d4a843;flex-shrink:0;';
        a.appendChild(iconSpan);
        a.appendChild(labelSpan);
        a.appendChild(dot);
      } else {
        a.appendChild(iconSpan);
        a.appendChild(labelSpan);
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

    panel.appendChild(ul);

    /* Disclaimer at bottom of panel */
    var pFoot = document.createElement('div');
    pFoot.style.cssText = 'padding:14px 16px;border-top:1px solid #1e1e1e;';
    pFoot.innerHTML = '<p style="font-size:10px;color:#555;line-height:1.6;">失敗しにくい商品だけを厳選紹介しています。</p>';
    panel.appendChild(pFoot);

    /* -- FAB button -- */
    var fab = document.createElement('button');
    fab.id = 'gp-nav-fab';
    fab.innerHTML = '&#9776;';  /* ☰ */
    fab.setAttribute('aria-label', 'Open category navigation');
    fab.style.cssText = [
      'position:fixed',
      'bottom:24px',
      'right:20px',
      'width:48px',
      'height:48px',
      'border-radius:50%',
      'background:#d4a843',
      'color:#000',
      'border:none',
      'font-size:20px',
      'line-height:1',
      'cursor:pointer',
      'z-index:9997',
      'box-shadow:0 4px 20px rgba(0,0,0,.55)',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'transition:transform .15s,background .15s'
    ].join(';');
    fab.addEventListener('mouseover', function () {
      fab.style.background = '#e8bf5a';
      fab.style.transform = 'scale(1.08)';
    });
    fab.addEventListener('mouseout', function () {
      fab.style.background = '#d4a843';
      fab.style.transform = 'scale(1)';
    });
    fab.addEventListener('click', openNav);

    document.body.appendChild(overlay);
    document.body.appendChild(panel);
    document.body.appendChild(fab);
  }

  function openNav() {
    var panel   = document.getElementById('gp-nav-panel');
    var overlay = document.getElementById('gp-nav-overlay');
    if (!panel) return;
    panel.style.transform  = 'translateX(0)';
    overlay.style.opacity  = '1';
    overlay.style.pointerEvents = 'auto';
  }

  function closeNav() {
    var panel   = document.getElementById('gp-nav-panel');
    var overlay = document.getElementById('gp-nav-overlay');
    if (!panel) return;
    panel.style.transform  = 'translateX(100%)';
    overlay.style.opacity  = '0';
    overlay.style.pointerEvents = 'none';
  }

  // ESC key closes nav
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' || e.keyCode === 27)) closeNav();
  });

  /* ============================================================
     MutationObserver — re-apply translations if cards added later
  ============================================================ */
  function watchContainers() {
    if (lang === 'ja') return;  // Only needed for EN mode
    var targets = [
      document.getElementById('products-container'),
      document.getElementById('pickup-container')
    ];
    targets.forEach(function (el) {
      if (!el) return;
      new MutationObserver(function () { applyTranslations(); })
        .observe(el, { childList: true, subtree: false });
    });
  }

  /* ============================================================
     Init
  ============================================================ */
  function init() {
    injectLangToggle();
    injectFloatingNav();
    if (lang !== 'ja') applyTranslations();
    watchContainers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
