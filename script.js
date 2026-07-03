/* ─────────────────────────────────────────
   Jay Tai — Quant Finance Portfolio
   script.js
   ───────────────────────────────────────── */

// ── Data ──────────────────────────────────

const TYPEWRITER_TEXTS = [
  'Quantitative Finance Student.',
  'Quant Researcher.',
  'Algorithmic Trader.',
  'ML Engineer.',
  'Open to Opportunities.',
];

const EXPERIENCES = [
  {
    company: 'Unicorn Mgt Pte Ltd.',
    type: 'Family Office · Singapore',
    role: 'Investment Analyst Intern',
    date: 'May 2026 – Present',
    accent: 'accent',
    bullets: [
      'Conducted DD on <strong>8 hedge fund managers</strong> across Multi-Strategy, Quant/Sys, and Macro mandates (AUM $250M – $33B+)',
      'Engineered AI-powered document extraction pipeline using Python & LLM APIs, reducing manual data entry by <strong>70%</strong> across 8 fund decks',
    ],
  },
  {
    company: 'MegaAnnum Technologies Ltd.',
    type: 'Hedge Fund Startup · Hong Kong SAR',
    role: 'Quant Research Intern',
    date: 'Jun 2025 – Jul 2025',
    accent: 'amber',
    bullets: [
      'Developed real-time NLP sentiment pipeline, processing <strong>10,000+ daily articles</strong> and reducing manual analysis time by 75%',
      'Engineered BERT-based sentiment model achieving <strong>89% accuracy</strong> on financial news corpora',
      'Architected multi-asset ML trading strategies (Backtrader) generating <strong>8% annualized returns</strong> with &lt;12% max drawdown',
    ],
  },
  {
    company: 'Lau Chin Huat & Co.',
    type: 'Chartered Accountants · Singapore',
    role: 'Accounting Intern',
    date: 'Apr 2024 – Jul 2024',
    accent: 'purple',
    bullets: [
      'Prepared and audited monthly consolidated financial statements for <strong>15+ corporate clients</strong> under GAAP/FRS standards',
      'Led asset reconciliation in voluntary liquidation, verifying <strong>$2M+ in assets</strong> across 8 entities',
      'Automated financial reporting pipeline with VBA & Power Query, reducing close timeline by <strong>30%</strong>',
    ],
  },
  {
    company: 'Financial Alliance Pte Ltd.',
    type: 'Financial Advisory · Singapore',
    role: 'Investment Analyst Intern',
    date: 'Nov 2021 – Jan 2022',
    accent: 'muted',
    bullets: [
      'Developed financial modelling templates (3-statement LBO models, DCF valuations) for investment thesis development',
      'Conducted equity research and industry analysis on 2+ target sectors for client portfolio recommendations',
    ],
  },
  {
    company: 'Farquhar VC Pte Ltd.',
    type: 'Venture Capital · Singapore',
    role: 'Venture Capitalist Intern',
    date: 'Oct 2021 – Nov 2021',
    accent: 'muted',
    bullets: [
      'Executed due diligence on <strong>12+ early-stage companies</strong> including financial analysis and founder interviews',
      'Co-authored investment memos and IC materials evaluating market opportunity, technology differentiation, and team strength',
    ],
  },
];

const PROJECTS = [
  {
    id: 'montecarlo',
    title: 'Monte Carlo Stock Path Simulator',
    desc: 'GBM-based simulation engine generating 1,000+ price paths with real-time parameter tuning — drift, volatility, time horizon, and path count. Outputs confidence bands, expected path, P(profit), and simulated VaR.',
    tags: ['Python', 'Monte Carlo', 'GBM', 'Canvas API'],
    categories: ['quant'],
    demo: 'montecarlo',
    featured: true,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    id: 'volstrategy',
    title: 'Implied-Realized Vol Spread Strategy',
    desc: 'VIX vs Realized Vol spread signal to detect directional risk mispricing. Logistic regression on 2,500+ daily observations (2016–2026) achieving <strong>52.3% total return vs. 45.8% B&H</strong>. Walk-forward validated with AUC and F1 evaluation.',
    tags: ['Python', 'Volatility', 'Logistic Regression', 'Backtrader'],
    categories: ['quant'],
    demo: 'volstrategy',
    featured: true,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  },
  {
    id: 'backtesting-lstm',
    title: 'LSTM vs ARIMA-GARCH Backtesting',
    desc: 'Rigorous comparative study of LSTM and ARIMA-GARCH models for E-mini S&P 500 futures price prediction. LSTM MAPE 0.18% but directional accuracy below 50% — a clean EMH validation.',
    tags: ['LSTM', 'ARIMA', 'GARCH', 'Python'],
    categories: ['quant'],
    page: 'https://jaytai3336.github.io/BacktestingLSTM/',
    github: 'https://github.com/jaytai3336/BacktestingLSTM',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    id: 'bert-nlp',
    title: 'NLP Sentiment Signal Pipeline',
    desc: 'End-to-end pipeline scraping Bloomberg & social media to generate SPY signals. BERT-based model at 89% accuracy; comparison across VADER, SVM, FinBERT, RoBERTa, and LSTM (77% best).',
    tags: ['BERT', 'Python', 'Transformers', 'NLP'],
    categories: ['ml'],
    page: 'https://jaytai3336.github.io/Sentimental-Analysis/',
    github: 'https://github.com/jaytai3336/Sentimental-Analysis',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  },
  {
    id: 'vae-pricing',
    title: 'Volatility Surface Pricing via VAE',
    desc: 'Generative deep learning approach to options pricing — VAE learns the latent structure of implied vol surfaces for arbitrage-free interpolation at <strong>1000× the speed</strong> of QuantLib. R² > 0.95.',
    tags: ['VAE', 'PyTorch', 'Options Pricing', 'Python'],
    categories: ['quant'],
    page: 'https://jaytai3336.github.io/VAE_pricing/',
    github: 'https://github.com/jaytai3336/VAE_pricing',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 2 L22 22 M2 22 L22 2"/><circle cx="12" cy="12" r="9"/></svg>`,
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Classification',
    desc: 'Systematic benchmark of 8 supervised classifiers on the UCI Cleveland dataset — Logistic Regression through KNN and Random Forest. Best: KNN with <strong>AUC 0.953</strong> on 303 patient records.',
    tags: ['scikit-learn', 'Python', 'Classification', 'Healthcare ML'],
    categories: ['ml'],
    page: 'https://jaytai3336.github.io/Heart-Disease-Prediction-Using-Supervised-Classification-Models/',
    github: 'https://github.com/jaytai3336/Heart-Disease-Prediction-Using-Supervised-Classification-Models',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  },
  {
    id: 'hdb-resale',
    title: 'HDB Resale Price Prediction',
    desc: 'OLS linear regression model on Singapore HDB resale transactions — Adj. R² of <strong>0.8162</strong>. Interactive price estimator with floor area, storey, lease, flat type, and location inputs.',
    tags: ['statsmodels', 'Python', 'Regression', 'Singapore'],
    categories: ['ml', 'research'],
    page: 'https://jaytai3336.github.io/Predicting-HDB-Resale-Prices-in-Singapore-A-Linear-Regression-Approach/',
    github: 'https://github.com/jaytai3336/Predicting-HDB-Resale-Prices-in-Singapore-A-Linear-Regression-Approach',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
  {
    id: 'kyc-agent',
    title: 'AI KYC Multi-Agent System',
    desc: 'Multi-agent system leveraging OpenAI API to autonomously process KYC compliance workflows. Integrates document parsing, identity verification, payment graph analysis, and cross-border transaction anomaly detection.',
    tags: ['OpenAI API', 'Python', 'Multi-agent', 'FastAPI'],
    categories: ['ml'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  },
  {
    id: 'insta360',
    title: 'Insta360 Investment Thesis',
    desc: '3-year DCF model with Monte Carlo-simulated revenue drivers, forecasting revenue from ¥5.5B → ¥23B. Built for <strong>Point72\'s FOFA Challenge</strong>. Competitive analysis vs. DJI including patent litigation risk.',
    tags: ['DCF', 'Monte Carlo', 'Equity Research', 'Excel'],
    categories: ['research'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  },
  {
    id: 'nush-math',
    title: 'Trigonometric Inequality Research',
    desc: 'Pure mathematics research producing two peer-reviewed publications — "Some Functional Upper Bounds for Fejér\'s Sine Polynomial" (Q1) and "A Sharp Trigonometric Double Inequality" (Q2), both published 2021.',
    tags: ['Research', 'Mathematics', 'Analysis', 'Publications'],
    categories: ['research'],
    page: 'https://jaytai3336.github.io/NUSH-Math-Research/',
    github: 'https://github.com/jaytai3336/NUSH-Math-Research',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  },
  {
    id: 'vol-research',
    title: 'Multi-Asset Vol Coupling',
    desc: '"Multi-Asset Volatility Coupling via Shared Latent Space" — ongoing research into latent factor representations of cross-asset volatility dynamics using deep generative architectures.',
    tags: ['Research', 'Deep Learning', 'Vol Modelling', 'In Progress'],
    categories: ['research'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="19" cy="19" r="3"/><line x1="7.5" y1="10.5" x2="16.5" y2="6.5"/><line x1="7.5" y1="13.5" x2="16.5" y2="17.5"/></svg>`,
  },
];

const COMPETITIONS = [
  {
    rank: '1st / 100 Teams', rankClass: 'gold',
    title: 'SG vs HK Quant Trading Hackathon',
    event: 'Quantitative Trading Strategy Bot · 2026',
    metric: 'Built live mean-reversion trading bot generating <strong>+10.79% over 10 days</strong>. Ranked 1st across Singapore and Hong Kong teams.',
    tags: ['Python', 'Mean Reversion', 'Risk Mgmt'],
  },
  {
    rank: '2nd Place', rankClass: 'silver',
    title: 'NUS SDS Datathon',
    event: 'Chinese Market Clustering Analysis · 2026',
    metric: 'K-means & DBSCAN clustering on 500+ Chinese companies; feature extraction pipeline for actionable market segmentation insights.',
    tags: ['ML', 'Unsupervised Learning', 'Python'],
  },
  {
    rank: 'Winner', rankClass: 'winner',
    title: 'Jane Street Estimathon',
    event: 'Jane Street · 2025',
    metric: 'Won competitive estimation challenge requiring rapid probabilistic reasoning and Fermi estimation under time pressure.',
    tags: ['Probability', 'Estimation', 'Strategy'],
  },
  {
    rank: 'Finalist', rankClass: 'participant',
    title: 'SingHacks — AI KYC Workflows',
    event: 'Agentic AI Hackathon · 2026',
    metric: 'Multi-agent AI system for autonomous KYC compliance with document parsing, fraud detection, and payment graph analysis.',
    tags: ['OpenAI API', 'Multi-agent', 'RegTech'],
  },
  {
    rank: 'Participant', rankClass: 'participant',
    title: 'DataBusters Datathon',
    event: 'DSE · GFC vs Luna Terra Analysis · 2026',
    metric: 'Comparative econometric analysis of 2008 GFC vs 2022 Luna Terra collapse, identifying common systemic risk precursors.',
    tags: ['Econometrics', 'Time Series', 'Risk'],
  },
  {
    rank: 'Top Performer', rankClass: 'participant',
    title: 'NUS Mini SDS Datathon',
    event: 'Insurance Price Prediction · 2025',
    metric: 'XGBoost + CatBoost ensemble model achieving <strong>R² = 0.85</strong> on insurance risk pricing from 50+ features.',
    tags: ['XGBoost', 'CatBoost', 'Feature Engineering'],
  },
];

const SKILLS = [
  {
    category: 'Quantitative Finance',
    items: ['Monte Carlo Simulation', 'Stochastic Processes', 'Options Pricing (B-S, Binomial)', 'Value at Risk (VaR)', 'Portfolio Optimisation'],
  },
  {
    category: 'Programming',
    items: ['Python (primary)', 'R', 'SQL', 'Java', 'JavaScript / HTML / CSS'],
  },
  {
    category: 'Data Science & ML',
    items: ['TensorFlow / PyTorch', 'Scikit-learn / XGBoost', 'BERT / Transformers', 'Pandas / NumPy', 'Backtrader'],
  },
  {
    category: 'NLP & AI Systems',
    items: ['LLM APIs (OpenAI)', 'Sentiment Analysis', 'Document Processing', 'Multi-agent Architectures', 'Prompt Engineering'],
  },
];

const TICKER_SYMBOLS = [
  { sym: 'SPY',    base: 545.20 },
  { sym: 'QQQ',    base: 472.80 },
  { sym: 'AAPL',   base: 213.40 },
  { sym: 'NVDA',   base: 134.60 },
  { sym: 'MSFT',   base: 428.90 },
  { sym: 'TSLA',   base: 248.30 },
  { sym: 'BTC-USD',base: 67240  },
  { sym: 'ETH-USD',base: 3510   },
  { sym: 'GLD',    base: 224.50 },
  { sym: 'TLT',    base: 92.30  },
  { sym: 'VIX',    base: 16.40  },
  { sym: 'DXY',    base: 104.20 },
];

// ── Helpers ───────────────────────────────

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const sleep = ms => new Promise(r => setTimeout(r, ms));

function randn() {
  let u = 0, v = 0;
  while (!u) u = Math.random();
  while (!v) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// ── Init ──────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initChartBg();
  initTicker();
  initHeroTags();
  initTypewriter();
  initNavbar();
  initScrollReveal();
  initExperience();
  initProjects();
  initCompetitions();
  initSkills();
  initCounters();
  initModal();
  initContactForm();
  initHamburger();
  initCardGlow();
});

// ── Theme Toggle ──────────────────────────

function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.dataset.theme = saved;

  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.add('theme-switching');
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setTimeout(() => document.documentElement.classList.remove('theme-switching'), 300);
  });
}

// ── Hero Tags Strip ───────────────────────

function initHeroTags() {
  const inner = document.getElementById('heroTagsInner');
  if (!inner) return;

  const TAGS = [
    { label: 'Python',           color: 'green'  },
    { label: 'Stochastic Calc',  color: 'cyan'   },
    { label: 'PyTorch',          color: 'green'  },
    { label: 'Black-Scholes',    color: 'cyan'   },
    { label: 'FinBERT',          color: 'amber'  },
    { label: 'QuantLib',         color: 'purple' },
    { label: 'NumPy · Pandas',   color: 'green'  },
    { label: 'Monte Carlo',      color: 'cyan'   },
    { label: 'RoBERTa',          color: 'amber'  },
    { label: 'GARCH',            color: 'cyan'   },
    { label: 'scikit-learn',     color: 'green'  },
    { label: 'Bloomberg',        color: 'purple' },
    { label: 'LSTM',             color: 'amber'  },
    { label: 'Options Pricing',  color: 'cyan'   },
    { label: 'VAE',              color: 'amber'  },
    { label: 'statsmodels',      color: 'green'  },
    { label: 'Portfolio Theory', color: 'cyan'   },
    { label: 'SQL · R',          color: 'purple' },
    { label: 'spaCy · NLTK',     color: 'amber'  },
    { label: 'Delta Hedging',    color: 'cyan'   },
    { label: 'Git · Selenium',   color: 'purple' },
    { label: 'Realized Vol',     color: 'cyan'   },
    { label: 'Transformer',      color: 'amber'  },
    { label: 'SciPy',            color: 'green'  },
    { label: 'LDA',              color: 'amber'  },
    { label: 'Backtrader',       color: 'purple' },
  ];

  // Double for seamless loop
  const all = [...TAGS, ...TAGS];
  inner.innerHTML = all.map(t =>
    `<span class="h-tag ${t.color}"><span class="h-tag-dot"></span>${t.label}</span>`
  ).join('');
}

// ── Animated Chart Background ─────────────

function initChartBg() {
  const canvas = $('#chartBgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const SERIES_COLORS = [
    'rgba(56,189,248,0.55)',
    'rgba(52,211,153,0.35)',
    'rgba(245,158,11,0.30)',
    'rgba(167,139,250,0.22)',
  ];
  const N_SERIES = 4;
  const DATA_LEN = 140;
  let W, H;
  let series = [];
  let frameId;
  let tick = 0;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    series = SERIES_COLORS.map((color, i) => {
      const prices = [1];
      const drift = (Math.random() - 0.45) * 0.0008;
      const vol   = 0.008 + Math.random() * 0.012;
      for (let j = 1; j < DATA_LEN; j++) {
        prices.push(prices[j-1] * Math.exp(drift + vol * randn()));
      }
      return { color, prices, drift, vol };
    });
  }

  function update() {
    series.forEach(s => {
      const last = s.prices[s.prices.length - 1];
      s.prices.push(last * Math.exp(s.drift + s.vol * randn()));
      if (s.prices.length > DATA_LEN + 60) s.prices.shift();
    });
  }

  function drawGrid() {
    ctx.strokeStyle = 'rgba(56,189,248,0.045)';
    ctx.lineWidth = 0.7;
    const gx = 10, gy = 7;
    for (let i = 0; i <= gx; i++) {
      const x = (i / gx) * W;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let i = 0; i <= gy; i++) {
      const y = (i / gy) * H;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
  }

  function drawSeries() {
    series.forEach(s => {
      const n  = s.prices.length;
      const mn = Math.min(...s.prices);
      const mx = Math.max(...s.prices);
      const rng = mx - mn || 1;
      const pad = 0.12;

      ctx.beginPath();
      s.prices.forEach((p, i) => {
        const x = (i / (n - 1)) * W;
        const y = H - (((p - mn) / rng) * H * (1 - 2 * pad) + H * pad);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    drawSeries();
  }

  let lastUpdate = 0;
  function loop(ts) {
    if (ts - lastUpdate > 60) { update(); lastUpdate = ts; }
    draw();
    frameId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  frameId = requestAnimationFrame(loop);
}

// ── Market Ticker ─────────────────────────

function initTicker() {
  const container = $('#tickerItems');
  if (!container) return;

  const state = TICKER_SYMBOLS.map(s => ({
    ...s,
    price: s.base * (1 + (Math.random() - 0.5) * 0.04),
    change: (Math.random() - 0.48) * 3.5,
  }));

  function buildHTML() {
    return state.map(s => {
      const sign = s.change >= 0 ? '+' : '';
      const cls  = s.change >= 0 ? 't-up' : 't-dn';
      return `<span class="t-item">
        <span class="t-sym">${s.sym}</span>
        <span class="t-price">${s.price < 1000 ? s.price.toFixed(2) : s.price.toFixed(0)}</span>
        <span class="${cls}">${sign}${s.change.toFixed(2)}%</span>
      </span>`;
    }).join('');
  }

  function render() {
    const html = buildHTML();
    container.innerHTML = html + html; // doubled for seamless loop
  }

  function update() {
    state.forEach(s => {
      const move = (Math.random() - 0.5) * 0.0015;
      s.price  *= (1 + move);
      s.change += (Math.random() - 0.5) * 0.12;
      s.change  = Math.max(-8, Math.min(8, s.change));
    });
    render();
  }

  render();
  setInterval(update, 3200);
}

// ── Typewriter ────────────────────────────

async function initTypewriter() {
  const el = $('#typewriter');
  if (!el) return;
  let idx = 0;
  while (true) {
    const text = TYPEWRITER_TEXTS[idx % TYPEWRITER_TEXTS.length];
    for (let i = 0; i <= text.length; i++) {
      el.textContent = text.slice(0, i);
      await sleep(60);
    }
    await sleep(2000);
    for (let i = text.length; i >= 0; i--) {
      el.textContent = text.slice(0, i);
      await sleep(32);
    }
    await sleep(280);
    idx++;
  }
}

// ── Navbar ────────────────────────────────

function initNavbar() {
  const nav = $('#navbar');
  const scrollHint = $('#scrollHint');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    if (scrollHint) scrollHint.style.opacity = window.scrollY > 60 ? '0' : '1';
  }, { passive: true });
}

// ── Scroll Reveal ─────────────────────────

function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  $$('.reveal').forEach(el => io.observe(el));
}

function observeNew(selector) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  $$(selector).forEach(el => io.observe(el));
}

// ── Experience ────────────────────────────

function initExperience() {
  const list = $('#expList');
  if (!list) return;
  EXPERIENCES.forEach((exp, i) => {
    const div = document.createElement('div');
    div.className = 'exp-card reveal';
    div.style.transitionDelay = `${i * 80}ms`;
    div.innerHTML = `
      <div class="exp-accent ${exp.accent}"></div>
      <div class="exp-body">
        <div class="exp-header">
          <div>
            <div class="exp-company">${exp.company}</div>
            <span class="exp-type">${exp.type}</span>
          </div>
          <span class="exp-date">${exp.date}</span>
        </div>
        <div class="exp-role">${exp.role}</div>
        <ul class="exp-bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `;
    list.appendChild(div);
  });
  observeNew('.exp-card');
}

// ── Projects ──────────────────────────────

function initProjects() {
  renderProjects('all');
  $$('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

function renderProjects(filter) {
  const grid = $('#projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  PROJECTS.filter(p => filter === 'all' || p.categories.includes(filter))
    .forEach((p, i) => grid.appendChild(createProjectCard(p, i)));
}

function createProjectCard(p, i) {
  const div = document.createElement('div');
  div.className = 'project-card' + (p.featured ? ' featured' : '');
  div.style.animationDelay = `${i * 55}ms`;

  const ghLink = p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" title="GitHub">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
  </a>` : '';
  const badge = p.demo ? `<span class="interactive-badge">✦ live demo</span>` : (p.page ? `<span class="interactive-badge">✦ live page</span>` : '');

  const actions = [];
  if (p.demo) actions.push(`<button class="card-btn card-btn-demo" data-demo="${p.demo}">Launch Demo →</button>`);
  if (p.page) actions.push(`<a href="${p.page}" target="_blank" rel="noopener noreferrer" class="card-btn card-btn-page">View Page →</a>`);

  div.innerHTML = `
    <div class="card-top">
      <div class="card-icon">${p.icon}</div>
      <div class="card-links">${badge}${ghLink}</div>
    </div>
    <h3 class="card-title">${p.title}</h3>
    <p class="card-desc">${p.desc}</p>
    <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    ${actions.length ? `<div class="card-actions">${actions.join('')}</div>` : ''}
  `;
  if (p.demo) div.querySelector('.card-btn-demo').addEventListener('click', () => openDemo(p.demo, p.title));
  return div;
}

// ── Competitions ──────────────────────────

function initCompetitions() {
  const grid = $('#compGrid');
  if (!grid) return;
  COMPETITIONS.forEach((c, i) => {
    const div = document.createElement('div');
    div.className = 'comp-card reveal';
    div.style.transitionDelay = `${i * 70}ms`;
    div.innerHTML = `
      <span class="comp-rank ${c.rankClass}">${c.rank}</span>
      <div class="comp-title">${c.title}</div>
      <div class="comp-event">${c.event}</div>
      <div class="comp-metric">${c.metric}</div>
      <div class="comp-tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    grid.appendChild(div);
  });
  observeNew('.comp-card');
}

// ── Skills ────────────────────────────────

function initSkills() {
  const layout = $('#skillsLayout');
  if (!layout) return;
  SKILLS.forEach((group, i) => {
    const div = document.createElement('div');
    div.className = 'skill-group reveal';
    div.style.transitionDelay = `${i * 80}ms`;
    div.innerHTML = `
      <div class="skill-group-title">${group.category}</div>
      <div class="skill-items">
        ${group.items.map(s => `<div class="skill-item"><span class="skill-dot"></span>${s}</div>`).join('')}
      </div>
    `;
    layout.appendChild(div);
  });
  observeNew('.skill-group');
}

// ── Counters ──────────────────────────────

function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 35));
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(interval);
      }, 40);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.stat-val').forEach(el => io.observe(el));
}

// ── Modal ─────────────────────────────────

let currentDemo = null;

function initModal() {
  $('#modalCloseBtn').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', e => { if (e.target === $('#modalOverlay')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openDemo(type, title) {
  const overlay = $('#modalOverlay');
  const inner   = $('#modalInner');
  overlay.setAttribute('aria-hidden', 'false');
  if (type === 'montecarlo') { inner.innerHTML = buildMonteCarloUI(title); overlay.classList.add('open'); initMonteCarlo(); }
  if (type === 'volstrategy') { inner.innerHTML = buildVolStrategyUI(title); overlay.classList.add('open'); initVolStrategy(); }
}

function closeModal() {
  const overlay = $('#modalOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  if (currentDemo?.stop) currentDemo.stop();
  currentDemo = null;
  setTimeout(() => { $('#modalInner').innerHTML = ''; }, 240);
}

// ── Card Glow ─────────────────────────────

function initCardGlow() {
  document.addEventListener('mousemove', e => {
    $$('.project-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  }, { passive: true });
}

// ── Monte Carlo Simulator ─────────────────

function buildMonteCarloUI(title) {
  return `
    <div class="mc-wrap">
      <div class="modal-title">${title}</div>
      <div class="modal-subtitle">Geometric Brownian Motion simulation. Adjust parameters and run to see price path fan chart with confidence bands and risk statistics.</div>
      <div class="mc-controls">
        <div class="mc-field">
          <label>S₀ — Initial Price</label>
          <input type="number" id="mcS0" value="100" min="1" max="10000" />
        </div>
        <div class="mc-field">
          <label>μ — Annual Drift (%)</label>
          <input type="number" id="mcDrift" value="8" min="-50" max="100" step="0.5" />
        </div>
        <div class="mc-field">
          <label>σ — Annual Vol (%)</label>
          <input type="number" id="mcVol" value="20" min="1" max="100" step="0.5" />
        </div>
        <div class="mc-field">
          <label>T — Days</label>
          <input type="number" id="mcDays" value="252" min="20" max="1000" step="10" />
        </div>
        <div class="mc-field">
          <label>N — Paths: <span id="mcPathsLabel">100</span></label>
          <input type="range" id="mcPaths" min="20" max="300" value="100" />
        </div>
        <button class="mc-btn mc-btn-run" id="mcRunBtn">▶ Simulate</button>
        <button class="mc-btn mc-btn-reset" id="mcResetBtn">Reset</button>
      </div>
      <div class="canvas-wrap"><canvas id="mcCanvas" height="300"></canvas></div>
      <div class="mc-stats">
        <span>E[S_T]: <span id="mcEst">—</span></span>
        <span>95% CI: <span id="mcCI">—</span></span>
        <span>P(profit): <span id="mcPP">—</span></span>
        <span>VaR 5%: <span id="mcVaR">—</span></span>
        <span>Sharpe (sim): <span id="mcSharpe">—</span></span>
      </div>
    </div>`;
}

function initMonteCarlo() {
  const canvas  = $('#mcCanvas');
  const ctx     = canvas.getContext('2d');
  const runBtn  = $('#mcRunBtn');
  const resetBtn= $('#mcResetBtn');
  const pathsLbl= $('#mcPathsLabel');
  const pathsRng= $('#mcPaths');

  pathsRng?.addEventListener('input', () => { if (pathsLbl) pathsLbl.textContent = pathsRng.value; });

  function resize() { canvas.width = canvas.offsetWidth; }

  function clearCanvas() {
    ctx.fillStyle = '#060c13';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid();
  }

  function drawGrid() {
    const W = canvas.width, H = canvas.height;
    ctx.strokeStyle = 'rgba(56,189,248,0.07)';
    ctx.lineWidth   = 0.6;
    for (let i = 0; i <= 8; i++) {
      const x = (i / 8) * W;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let i = 0; i <= 6; i++) {
      const y = (i / 6) * H;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
  }

  function simulate() {
    const S0  = parseFloat($('#mcS0')?.value || 100);
    const mu  = (parseFloat($('#mcDrift')?.value || 8))  / 100 / 252;
    const sig = (parseFloat($('#mcVol')?.value   || 20)) / 100 / Math.sqrt(252);
    const T   = parseInt($('#mcDays')?.value    || 252);
    const N   = parseInt($('#mcPaths')?.value   || 100);
    const W   = canvas.width, H = canvas.height;
    const PAD = { t: 30, r: 70, b: 40, l: 60 };
    const IW  = W - PAD.l - PAD.r;
    const IH  = H - PAD.t - PAD.b;

    // Generate all paths
    const paths = [];
    for (let n = 0; n < N; n++) {
      const p = [S0];
      for (let t = 1; t <= T; t++) {
        p.push(p[t-1] * Math.exp((mu - 0.5 * sig * sig) + sig * randn()));
      }
      paths.push(p);
    }

    // Stats
    const finals = paths.map(p => p[p.length-1]).sort((a,b) => a-b);
    const exp_sT = finals.reduce((s,v) => s+v, 0) / N;
    const ci5    = finals[Math.floor(N * 0.025)];
    const ci95   = finals[Math.floor(N * 0.975)];
    const pProfit= finals.filter(f => f > S0).length / N * 100;
    const var5   = S0 - ci5;
    const logR   = finals.map(f => Math.log(f / S0) / (T / 252));
    const meanR  = logR.reduce((s,v) => s+v, 0) / N;
    const stdR   = Math.sqrt(logR.reduce((s,v) => s+(v-meanR)**2, 0) / N) / Math.sqrt(1/252) * Math.sqrt(252);
    const sharpe = stdR > 0 ? (meanR / (stdR / Math.sqrt(252))).toFixed(2) : '—';

    // Update display
    $('#mcEst').textContent   = '$' + exp_sT.toFixed(2);
    $('#mcCI').textContent    = `[$${ci5.toFixed(1)}, $${ci95.toFixed(1)}]`;
    $('#mcPP').textContent    = pProfit.toFixed(1) + '%';
    $('#mcVaR').textContent   = '$' + var5.toFixed(2);
    $('#mcSharpe').textContent = sharpe;

    // Y scale
    let allMin = Infinity, allMax = -Infinity;
    paths.forEach(p => p.forEach(v => { if (v < allMin) allMin = v; if (v > allMax) allMax = v; }));
    allMin = Math.min(allMin, S0) * 0.93;
    allMax = Math.max(allMax, S0) * 1.07;

    const toX = t => PAD.l + (t / T) * IW;
    const toY = v => PAD.t + IH - ((v - allMin) / (allMax - allMin)) * IH;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#060c13';
    ctx.fillRect(0, 0, W, H);
    drawGrid();

    // Y-axis labels
    ctx.font = '9px Fira Code, monospace';
    ctx.fillStyle = '#475569';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
      const v = allMin + (allMax - allMin) * (1 - i / 5);
      const y = toY(v);
      ctx.fillText('$' + v.toFixed(0), PAD.l - 6, y + 3);
    }
    // X-axis labels
    ctx.textAlign = 'center';
    for (let i = 0; i <= 4; i++) {
      const t = Math.floor(T * i / 4);
      ctx.fillText('d' + t, toX(t), H - 8);
    }

    // Draw percentile band (5th–95th)
    const pctByDay = [];
    for (let t = 0; t <= T; t++) {
      const vals = paths.map(p => p[t]).sort((a,b) => a-b);
      pctByDay.push({ p5: vals[Math.floor(N*0.05)], p95: vals[Math.floor(N*0.95)], med: vals[Math.floor(N*0.5)] });
    }
    ctx.beginPath();
    for (let t = 0; t <= T; t++) ctx.lineTo(toX(t), toY(pctByDay[t].p95));
    for (let t = T; t >= 0; t--) ctx.lineTo(toX(t), toY(pctByDay[t].p5));
    ctx.closePath();
    ctx.fillStyle = 'rgba(56,189,248,0.07)';
    ctx.fill();

    // Draw individual paths (faint)
    const drawN = Math.min(N, 80);
    paths.slice(0, drawN).forEach(p => {
      ctx.beginPath();
      p.forEach((v, t) => { t === 0 ? ctx.moveTo(toX(t), toY(v)) : ctx.lineTo(toX(t), toY(v)); });
      ctx.strokeStyle = 'rgba(56,189,248,0.10)';
      ctx.lineWidth = 0.7;
      ctx.stroke();
    });

    // Median path
    ctx.beginPath();
    pctByDay.forEach((d, t) => { t === 0 ? ctx.moveTo(toX(t), toY(d.med)) : ctx.lineTo(toX(t), toY(d.med)); });
    ctx.strokeStyle = 'rgba(56,189,248,0.65)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Mean path
    const meanPath = [];
    for (let t = 0; t <= T; t++) {
      meanPath.push(paths.reduce((s,p) => s + p[t], 0) / N);
    }
    ctx.beginPath();
    meanPath.forEach((v, t) => { t === 0 ? ctx.moveTo(toX(t), toY(v)) : ctx.lineTo(toX(t), toY(v)); });
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.2;
    ctx.stroke();

    // S0 baseline
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(toX(0), toY(S0)); ctx.lineTo(toX(T), toY(S0));
    ctx.strokeStyle = 'rgba(100,116,139,0.55)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);

    // Legend
    ctx.font = '9px Fira Code, monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#38bdf8';   ctx.fillText('─ Mean path', PAD.l + 6, PAD.t + 14);
    ctx.fillStyle = 'rgba(56,189,248,0.45)'; ctx.fillText('─ Median', PAD.l + 100, PAD.t + 14);
    ctx.fillStyle = '#475569';   ctx.fillText('-- S₀', PAD.l + 180, PAD.t + 14);
  }

  runBtn?.addEventListener('click', () => { simulate(); });
  resetBtn?.addEventListener('click', () => {
    resize(); clearCanvas();
    ['mcEst','mcCI','mcPP','mcVaR','mcSharpe'].forEach(id => { const el = $(`#${id}`); if (el) el.textContent = '—'; });
  });

  currentDemo = { stop: () => {} };
  resize();
  clearCanvas();
}

// ── Vol Strategy Backtest ─────────────────

function buildVolStrategyUI(title) {
  return `
    <div class="vs-wrap">
      <div class="modal-title">${title}</div>
      <div class="modal-subtitle">Simulates the implied-realized volatility spread signal. When IV premium exceeds the threshold the model goes Long; otherwise Cash. Compare strategy equity curve vs buy-and-hold.</div>
      <div class="vs-controls">
        <label class="vs-label">Threshold (%): <input type="number" id="vsThreshold" value="2.5" min="0.5" max="10" step="0.5" /></label>
        <label class="vs-label">Lookback (days): <input type="range" id="vsLookback" min="5" max="40" value="20" /> <span id="vsLbLabel">20</span></label>
        <button class="vs-btn vs-btn-run" id="vsRunBtn">▶ Run Backtest</button>
        <button class="vs-btn vs-btn-reset" id="vsResetBtn">Reset</button>
      </div>
      <div class="canvas-wrap"><canvas id="vsCanvas" height="380"></canvas></div>
      <div class="vs-stats" id="vsStats"></div>
      <div class="vs-legend">
        <span><span class="vs-dot" style="background:#38bdf8"></span> Strategy</span>
        <span><span class="vs-dot" style="background:#64748b"></span> Buy &amp; Hold</span>
        <span><span class="vs-dot" style="background:rgba(52,211,153,0.4)"></span> Long signal</span>
        <span><span class="vs-dot" style="background:#f59e0b"></span> VIX</span>
        <span><span class="vs-dot" style="background:#a78bfa"></span> Realized Vol</span>
      </div>
    </div>`;
}

function initVolStrategy() {
  const canvas = $('#vsCanvas');
  const ctx    = canvas.getContext('2d');
  const runBtn = $('#vsRunBtn');
  const rstBtn = $('#vsResetBtn');
  const lbInp  = $('#vsLookback');
  const lbLbl  = $('#vsLbLabel');

  lbInp?.addEventListener('input', () => { if (lbLbl) lbLbl.textContent = lbInp.value; });

  const DAYS  = 504; // 2 years
  let W, H;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height;
  }

  function generateData() {
    // Price series (GBM)
    const price = [100];
    for (let i = 1; i < DAYS; i++) {
      price.push(price[i-1] * Math.exp(0.00035 + 0.012 * randn()));
    }

    // Daily log returns
    const logRet = [0];
    for (let i = 1; i < DAYS; i++) logRet.push(Math.log(price[i] / price[i-1]));

    return { price, logRet };
  }

  function runBacktest(price, logRet, lookback, threshold) {
    // Realized vol (rolling std of log returns * sqrt(252))
    const rvol = new Array(DAYS).fill(null);
    for (let i = lookback; i < DAYS; i++) {
      const window = logRet.slice(i - lookback, i);
      const mean   = window.reduce((s,v) => s+v, 0) / window.length;
      const variance = window.reduce((s,v) => s + (v-mean)**2, 0) / window.length;
      rvol[i] = Math.sqrt(variance * 252) * 100;
    }

    // VIX-like series: mean-reverting around realized vol with premium
    const vix = new Array(DAYS).fill(null);
    let vixVal = 18;
    for (let i = 1; i < DAYS; i++) {
      const target = (rvol[i] || 18) + 2 + 3 * Math.abs(randn()) * 0.4;
      vixVal = vixVal + 0.15 * (target - vixVal) + 1.2 * randn();
      vixVal = Math.max(8, Math.min(45, vixVal));
      vix[i] = vixVal;
    }

    // Spread = VIX - Realized Vol
    const spread = vix.map((v, i) => (v !== null && rvol[i] !== null) ? v - rvol[i] : null);

    // Signal: 1 = long, 0 = cash (based on prev day's signal to avoid lookahead)
    const signal = new Array(DAYS).fill(0);
    for (let i = lookback + 1; i < DAYS; i++) {
      signal[i] = spread[i-1] !== null && spread[i-1] > threshold ? 1 : 0;
    }

    // Equity curves
    const stratEq  = [1];
    const bHoldEq  = [1];
    let drawdown    = 0;
    let maxEq       = 1;
    let maxDD       = 0;
    let trades      = 0;
    let wins        = 0;
    let prevSig     = 0;

    for (let i = 1; i < DAYS; i++) {
      const ret    = logRet[i];
      const stratR = signal[i] * ret;
      stratEq.push(stratEq[i-1] * Math.exp(stratR));
      bHoldEq.push(bHoldEq[i-1] * Math.exp(ret));
      maxEq = Math.max(maxEq, stratEq[i]);
      drawdown = (maxEq - stratEq[i]) / maxEq * 100;
      maxDD = Math.max(maxDD, drawdown);
      if (signal[i] === 1 && prevSig === 0) trades++;
      if (signal[i] === 0 && prevSig === 1 && stratEq[i] > stratEq[i-1]) wins++;
      prevSig = signal[i];
    }

    const stratRet = (stratEq[DAYS-1] - 1) * 100;
    const bhRet    = (bHoldEq[DAYS-1] - 1) * 100;
    const logDailyR = [];
    for (let i = 1; i < DAYS; i++) logDailyR.push(Math.log(stratEq[i] / stratEq[i-1]));
    const meanR = logDailyR.reduce((s,v) => s+v, 0) / logDailyR.length;
    const stdR  = Math.sqrt(logDailyR.reduce((s,v) => s+(v-meanR)**2, 0) / logDailyR.length);
    const sharpe = stdR > 0 ? ((meanR / stdR) * Math.sqrt(252)).toFixed(2) : '—';

    return { price, logRet, rvol, vix, spread, signal, stratEq, bHoldEq, stratRet, bhRet, maxDD, sharpe, trades };
  }

  function draw(data) {
    const { price, rvol, vix, spread, signal, stratEq, bHoldEq } = data;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#060c13';
    ctx.fillRect(0, 0, W, H);

    const PAD = { t: 12, r: 14, b: 24, l: 50 };
    const IW  = W - PAD.l - PAD.r;
    const panels = 3;
    const panelH = (H - PAD.t - PAD.b - (panels - 1) * 8) / panels;
    const starts = [PAD.t, PAD.t + panelH + 8, PAD.t + 2 * (panelH + 8)];

    function toX(i) { return PAD.l + (i / (DAYS - 1)) * IW; }
    function toYin(v, mn, mx, s) { return s + panelH - ((v - mn) / (mx - mn)) * panelH; }

    function drawPanel(values, yStart, color, fill = false, mn = null, mx = null) {
      const valid = values.filter(v => v !== null);
      const lo = mn ?? (Math.min(...valid) * 0.97);
      const hi = mx ?? (Math.max(...valid) * 1.03);

      // Grid line
      ctx.strokeStyle = 'rgba(56,189,248,0.06)';
      ctx.lineWidth = 0.5;
      for (let g = 0; g <= 3; g++) {
        const y = yStart + (g / 3) * panelH;
        ctx.beginPath(); ctx.moveTo(PAD.l, y); ctx.lineTo(W - PAD.r, y); ctx.stroke();
      }

      if (fill) {
        ctx.beginPath();
        let first = true;
        values.forEach((v, i) => {
          if (v === null) return;
          const x = toX(i), y = toYin(v, lo, hi, yStart);
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          first = false;
        });
        ctx.lineTo(toX(DAYS - 1), yStart + panelH);
        ctx.lineTo(toX(0), yStart + panelH);
        ctx.closePath();
        ctx.fillStyle = color.replace(')', ',0.08)').replace('rgb', 'rgba');
        ctx.fill();
      }

      ctx.beginPath();
      let first = true;
      values.forEach((v, i) => {
        if (v === null) return;
        const x = toX(i), y = toYin(v, lo, hi, yStart);
        first ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        first = false;
      });
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;
      ctx.stroke();

      // Y labels
      ctx.font = '9px Fira Code, monospace';
      ctx.fillStyle = '#475569';
      ctx.textAlign = 'right';
      ctx.fillText(hi.toFixed(1), PAD.l - 4, yStart + 9);
      ctx.fillText(lo.toFixed(1), PAD.l - 4, yStart + panelH);
    }

    // Panel 0: Price + long signal overlay
    const pMin = Math.min(...price) * 0.97, pMax = Math.max(...price) * 1.03;
    signal.forEach((s, i) => {
      if (s === 1 && (i === 0 || signal[i-1] === 0)) {
        let end = i;
        while (end < DAYS && signal[end] === 1) end++;
        ctx.fillStyle = 'rgba(52,211,153,0.07)';
        ctx.fillRect(toX(i), starts[0], toX(end) - toX(i), panelH);
      }
    });
    drawPanel(price, starts[0], '#94a3b8', false, pMin, pMax);
    ctx.font = '8px Fira Code, monospace';
    ctx.fillStyle = '#475569'; ctx.textAlign = 'left';
    ctx.fillText('PRICE', PAD.l + 4, starts[0] + 10);

    // Panel 1: VIX vs Realized Vol
    const vMin = 5, vMax = 50;
    drawPanel(vix,  starts[1], '#f59e0b', false, vMin, vMax);
    drawPanel(rvol, starts[1], '#a78bfa', false, vMin, vMax);
    ctx.fillText('VIX vs RVol (%)', PAD.l + 4, starts[1] + 10);
    // Spread fill between
    ctx.beginPath();
    let init = true;
    for (let i = 0; i < DAYS; i++) {
      if (vix[i] === null || rvol[i] === null) continue;
      const x = toX(i);
      const yV = toYin(vix[i], vMin, vMax, starts[1]);
      const yR = toYin(rvol[i], vMin, vMax, starts[1]);
      init ? ctx.moveTo(x, yV) : ctx.lineTo(x, yV);
      init = false;
    }
    for (let i = DAYS - 1; i >= 0; i--) {
      if (vix[i] === null || rvol[i] === null) continue;
      ctx.lineTo(toX(i), toYin(rvol[i], vMin, vMax, starts[1]));
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(245,158,11,0.08)';
    ctx.fill();

    // Panel 2: Equity curves
    const eqMin = Math.min(...stratEq, ...bHoldEq) * 0.97;
    const eqMax = Math.max(...stratEq, ...bHoldEq) * 1.03;
    drawPanel(bHoldEq, starts[2], '#64748b', false, eqMin, eqMax);
    drawPanel(stratEq, starts[2], '#38bdf8', true,  eqMin, eqMax);
    ctx.font = '8px Fira Code, monospace';
    ctx.fillStyle = '#475569';
    ctx.fillText('EQUITY CURVE', PAD.l + 4, starts[2] + 10);

    // Panel labels
    ctx.strokeStyle = 'rgba(56,189,248,0.08)';
    ctx.lineWidth = 0.5;
    starts.forEach(s => {
      ctx.beginPath(); ctx.moveTo(PAD.l, s); ctx.lineTo(W - PAD.r, s); ctx.stroke();
    });
  }

  function runAndDraw() {
    const threshold = parseFloat($('#vsThreshold')?.value || 2.5);
    const lookback  = parseInt($('#vsLookback')?.value   || 20);
    const { price, logRet } = generateData();
    const data = runBacktest(price, logRet, lookback, threshold);
    draw(data);

    const stats = $('#vsStats');
    if (stats) {
      const sClass = data.stratRet >= 0 ? 'pos' : 'neg';
      const bClass = data.bhRet    >= 0 ? 'pos' : 'neg';
      stats.innerHTML = [
        ['Strategy Return', (data.stratRet >= 0 ? '+' : '') + data.stratRet.toFixed(2) + '%', sClass],
        ['Buy & Hold',      (data.bhRet    >= 0 ? '+' : '') + data.bhRet.toFixed(2)    + '%', bClass],
        ['Alpha',           ((data.stratRet - data.bhRet) >= 0 ? '+' : '') + (data.stratRet - data.bhRet).toFixed(2) + '%', (data.stratRet - data.bhRet) >= 0 ? 'pos' : 'neg'],
        ['Sharpe Ratio',    data.sharpe, 'neu'],
        ['Max Drawdown',    '-' + data.maxDD.toFixed(2) + '%', 'neg'],
        ['Total Trades',    data.trades, 'neu'],
      ].map(([label, val, cls]) => `
        <div class="vs-stat-item">
          <span class="vs-stat-label">${label}</span>
          <span class="vs-stat-val ${cls}">${val}</span>
        </div>`).join('');
    }
  }

  runBtn?.addEventListener('click', runAndDraw);
  rstBtn?.addEventListener('click', () => {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#060c13'; ctx.fillRect(0, 0, W, H);
    const stats = $('#vsStats'); if (stats) stats.innerHTML = '';
  });

  currentDemo = { stop: () => {} };
  resize();
  // Auto-run on open
  runAndDraw();
}

// ── Contact Form ──────────────────────────

function initContactForm() {
  const form = $('#contactForm');
  const note = $('#formNote');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (note) { note.textContent = '✓ Message sent! (Wire up Formspree in production for real delivery.)'; }
    form.reset();
  });
}

// ── Hamburger ─────────────────────────────

function initHamburger() {
  const btn   = $('#hamburger');
  const links = $('#navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); btn.classList.remove('open');
  }));
  document.addEventListener('click', e => {
    if (!links.contains(e.target) && !btn.contains(e.target)) {
      links.classList.remove('open'); btn.classList.remove('open');
    }
  });
}
