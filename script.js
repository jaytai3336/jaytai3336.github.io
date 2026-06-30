/* ─────────────────────────────────────────
   Jay Tai — Portfolio  |  script.js
   ───────────────────────────────────────── */

// ── Data ──────────────────────────────────

const PROJECTS = [
  {
    id: 'sorting',
    title: 'Sorting Visualizer',
    desc: 'Watch classic sorting algorithms come to life. Choose your algorithm, set the speed, then hit Sort to see it run step-by-step on a randomized array.',
    tags: ['JavaScript', 'Canvas API', 'Algorithms'],
    categories: ['interactive', 'tools'],
    demo: 'sorting',
    featured: true,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="20" x2="4" y2="4"/><line x1="9" y1="20" x2="9" y2="8"/><line x1="14" y1="20" x2="14" y2="12"/><line x1="19" y1="20" x2="19" y2="6"/></svg>`,
  },
  {
    id: 'life',
    title: "Conway's Game of Life",
    desc: "An interactive cellular automaton. Click or drag to paint living cells, then press Play to watch life evolve according to Conway's classic rules.",
    tags: ['JavaScript', 'Canvas API', 'Simulation'],
    categories: ['interactive'],
    demo: 'life',
    featured: true,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="4" cy="12" r="2"/></svg>`,
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    desc: 'Designed and built from scratch with vanilla HTML, CSS, and JS — no frameworks. Features particle canvas, interactive demos, and smooth scroll animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    categories: ['web'],
    github: 'https://github.com/jaytai3336/jaytai3336.github.io',
    live: 'https://jaytai3336.github.io',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
  },
  {
    id: 'proj4',
    title: 'Project Name',
    desc: 'A brief description of this project and the problem it solves. Replace this with your actual project — tools used, impact, anything notable.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    categories: ['web'],
    github: '#',
    live: '#',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
  {
    id: 'proj5',
    title: 'CLI Automation Tool',
    desc: 'A command-line utility that automates repetitive dev-ops tasks, saving hours of manual work per week. Built with Python and packaged for easy distribution.',
    tags: ['Python', 'CLI', 'Automation'],
    categories: ['tools'],
    github: '#',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  },
  {
    id: 'proj6',
    title: 'Open Source Contributions',
    desc: 'Bug fixes, documentation, and new features contributed to popular open-source projects. Community review and collaboration experience.',
    tags: ['Open Source', 'TypeScript', 'GitHub'],
    categories: ['tools', 'web'],
    github: '#',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>`,
  },
];

const SKILLS = [
  {
    category: 'Frontend',
    items: ['HTML / CSS', 'JavaScript (ES2022+)', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js / Express', 'Python', 'REST APIs', 'PostgreSQL / SQL', 'MongoDB'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git / GitHub', 'Docker', 'Linux / Bash', 'Webpack / Vite', 'CI/CD (GitHub Actions)'],
  },
  {
    category: 'Currently Learning',
    items: ['Rust', 'Machine Learning', 'WebAssembly', 'Cloud (AWS / GCP)'],
  },
];

const TYPEWRITER_TEXTS = [
  'Software Engineer.',
  'Frontend Developer.',
  'Open Source Enthusiast.',
  'Problem Solver.',
];

// ── Helpers ───────────────────────────────

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ── Init ──────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTypewriter();
  initNavbar();
  initScrollReveal();
  initProjects();
  initSkills();
  initCounters();
  initModal();
  initContactForm();
  initHamburger();
  initCardGlow();
});

// ── Particle Canvas (Hero BG) ─────────────

function initParticles() {
  const canvas = $('#particleCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles, animId;
  const COUNT = 70;
  const MAX_DIST = 140;
  const ACCENT = [100, 255, 218];
  let mouse = { x: -9999, y: -9999 };

  class Particle {
    constructor() { this.reset(true); }
    reset(randomY = false) {
      this.x  = Math.random() * W;
      this.y  = randomY ? Math.random() * H : Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.r  = Math.random() * 1.5 + 0.5;
    }
    update() {
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const d  = Math.hypot(dx, dy);
      if (d < 100) {
        this.x += (dx / d) * 1.2;
        this.y += (dy / d) * 1.2;
      }
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT},0.5)`;
      ctx.fill();
    }
  }

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    particles = Array.from({ length: COUNT }, () => new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${ACCENT},${(1 - d / MAX_DIST) * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = -9999; mouse.y = -9999;
  });

  resize();
  draw();
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
    await sleep(1800);
    for (let i = text.length; i >= 0; i--) {
      el.textContent = text.slice(0, i);
      await sleep(35);
    }
    await sleep(300);
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
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));
}

// ── Projects ──────────────────────────────

function initProjects() {
  const grid = $('#projectsGrid');
  if (!grid) return;
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
  grid.innerHTML = '';
  const visible = PROJECTS.filter(p =>
    filter === 'all' || p.categories.includes(filter)
  );
  visible.forEach((p, i) => {
    const card = createProjectCard(p, i);
    grid.appendChild(card);
  });
}

function createProjectCard(p, i) {
  const div = document.createElement('div');
  div.className = 'project-card' + (p.featured ? ' featured' : '');
  div.style.animationDelay = `${i * 60}ms`;

  const ghLink = p.github ? `
    <a href="${p.github}" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="View on GitHub">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
    </a>` : '';

  const liveLink = p.live ? `
    <a href="${p.live}" target="_blank" rel="noopener noreferrer" title="Live site" aria-label="View live site">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </a>` : '';

  const badge = p.demo ? `<span class="interactive-badge">✦ interactive</span>` : '';

  const actionBtns = p.demo
    ? `<button class="card-btn card-btn-demo" data-demo="${p.demo}">Launch Demo</button>`
    : '';
  const ghBtn = p.github && p.github !== '#'
    ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="card-btn card-btn-github">View Code</a>`
    : '';

  div.innerHTML = `
    <div class="card-top">
      <div class="card-icon">${p.icon || ''}</div>
      <div class="card-links">
        ${badge}
        ${ghLink}
        ${liveLink}
      </div>
    </div>
    <h3 class="card-title">${p.title}</h3>
    <p class="card-desc">${p.desc}</p>
    <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    ${actionBtns || ghBtn ? `<div class="card-actions">${actionBtns}${ghBtn}</div>` : ''}
  `;

  if (p.demo) {
    div.querySelector('.card-btn-demo')?.addEventListener('click', () => openDemo(p.demo, p.title));
  }

  return div;
}

// ── Skills ────────────────────────────────

function initSkills() {
  const layout = $('#skillsLayout');
  if (!layout) return;
  SKILLS.forEach((group, i) => {
    const div = document.createElement('div');
    div.className = 'skill-group reveal';
    div.style.animationDelay = `${i * 80}ms`;
    div.innerHTML = `
      <div class="skill-group-title">${group.category}</div>
      <div class="skill-items">
        ${group.items.map(s => `
          <div class="skill-item">
            <span class="skill-dot"></span>${s}
          </div>`).join('')}
      </div>
    `;
    layout.appendChild(div);
  });
  // re-observe newly added elements
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.skill-group').forEach(el => io.observe(el));
}

// ── Counters ──────────────────────────────

function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.ceil(target / 40);
      const tick = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(tick);
      }, 35);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.stat-val').forEach(el => io.observe(el));
}

// ── Modal ─────────────────────────────────

let currentDemo = null;

function initModal() {
  const overlay = $('#modalOverlay');
  const closeBtn = $('#modalCloseBtn');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openDemo(type, title) {
  const overlay = $('#modalOverlay');
  const inner   = $('#modalInner');
  overlay.setAttribute('aria-hidden', 'false');

  if (type === 'sorting') {
    inner.innerHTML = buildSortingUI(title);
    overlay.classList.add('open');
    initSortingViz();
  } else if (type === 'life') {
    inner.innerHTML = buildLifeUI(title);
    overlay.classList.add('open');
    initGameOfLife();
  }
}

function closeModal() {
  const overlay = $('#modalOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  // stop any running loops
  if (currentDemo?.stop) currentDemo.stop();
  currentDemo = null;
  setTimeout(() => { $('#modalInner').innerHTML = ''; }, 260);
}

// ── Card Glow (mouse-tracking) ─────────────

function initCardGlow() {
  document.addEventListener('mousemove', e => {
    $$('.project-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  }, { passive: true });
}

// ── Sorting Visualizer ────────────────────

function buildSortingUI(title) {
  return `
    <div class="viz-wrap">
      <div class="modal-title">${title}</div>
      <div class="modal-subtitle">Select an algorithm and press Sort. Watch each comparison in real time.</div>
      <div class="viz-controls">
        <label>
          Algorithm
          <select id="algoSelect">
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="quick">Quick Sort</option>
          </select>
        </label>
        <label>
          Speed
          <input type="range" id="speedRange" min="1" max="10" value="5" />
        </label>
        <label>
          Bars
          <input type="range" id="sizeRange" min="20" max="100" value="50" />
        </label>
        <button class="viz-btn viz-btn-sort" id="sortBtn">Sort</button>
        <button class="viz-btn viz-btn-reset" id="resetBtn">Reset</button>
      </div>
      <div class="viz-canvas-wrap">
        <canvas id="sortCanvas" height="260"></canvas>
      </div>
      <div class="viz-info">
        <span>Comparisons: <span id="cmpCount">0</span></span>
        <span>Swaps: <span id="swpCount">0</span></span>
        <span>Status: <span id="sortStatus">Ready</span></span>
      </div>
    </div>
  `;
}

function initSortingViz() {
  const canvas  = $('#sortCanvas');
  const ctx     = canvas.getContext('2d');
  const sortBtn = $('#sortBtn');
  const resetBtn= $('#resetBtn');
  const cmpEl   = $('#cmpCount');
  const swpEl   = $('#swpCount');
  const statEl  = $('#sortStatus');

  let arr = [], N = 50, running = false, stopped = false;
  let comparisons = 0, swaps = 0;

  const COLOR = {
    default:  '#2a2a2a',
    compare:  '#ff6b6b',
    swap:     '#ffd93d',
    sorted:   '#64ffda',
    pivot:    '#c778dd',
  };

  function getSpeed() {
    const v = parseInt($('#speedRange')?.value || 5);
    return Math.max(1, 120 - v * 11);
  }

  function resize() {
    canvas.width  = canvas.offsetWidth;
  }

  function genArray() {
    N = parseInt($('#sizeRange')?.value || 50);
    arr = Array.from({ length: N }, (_, i) => ({
      val:   Math.floor(Math.random() * (canvas.height - 20)) + 10,
      color: COLOR.default,
    }));
    comparisons = 0; swaps = 0;
    cmpEl.textContent = '0'; swpEl.textContent = '0'; statEl.textContent = 'Ready';
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barW = canvas.width / N;
    arr.forEach((item, i) => {
      ctx.fillStyle = item.color;
      const x = i * barW;
      const h = item.val;
      const y = canvas.height - h;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x + 1, y, barW - 2, h, [2, 2, 0, 0]) : ctx.rect(x + 1, y, barW - 2, h);
      ctx.fill();
    });
  }

  async function mark(indices, color, delay = true) {
    const prev = indices.map(i => arr[i]?.color);
    indices.forEach(i => { if (arr[i]) arr[i].color = color; });
    draw();
    if (delay) await sleep(getSpeed());
    return prev;
  }

  async function unmark(indices, prevColors) {
    indices.forEach((i, j) => { if (arr[i]) arr[i].color = prevColors[j] || COLOR.default; });
    draw();
  }

  async function bubbleSort() {
    for (let i = 0; i < N - 1 && !stopped; i++) {
      for (let j = 0; j < N - i - 1 && !stopped; j++) {
        comparisons++; cmpEl.textContent = comparisons;
        await mark([j, j+1], COLOR.compare);
        if (arr[j].val > arr[j+1].val) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          swaps++; swpEl.textContent = swaps;
          await mark([j, j+1], COLOR.swap);
        }
        await unmark([j, j+1], [COLOR.default, COLOR.default]);
      }
      arr[N - 1 - i].color = COLOR.sorted;
      draw();
    }
    if (!stopped) arr[0].color = COLOR.sorted;
  }

  async function insertionSort() {
    arr[0].color = COLOR.sorted;
    for (let i = 1; i < N && !stopped; i++) {
      const key = { ...arr[i] };
      let j = i - 1;
      arr[i].color = COLOR.compare;
      draw(); await sleep(getSpeed());
      while (j >= 0 && arr[j].val > key.val && !stopped) {
        comparisons++; cmpEl.textContent = comparisons;
        arr[j+1] = { ...arr[j] };
        arr[j+1].color = COLOR.swap;
        swaps++; swpEl.textContent = swaps;
        draw(); await sleep(getSpeed());
        arr[j+1].color = COLOR.sorted;
        j--;
      }
      arr[j+1] = { ...key, color: COLOR.sorted };
      draw(); await sleep(getSpeed() / 2);
    }
  }

  async function selectionSort() {
    for (let i = 0; i < N - 1 && !stopped; i++) {
      let minIdx = i;
      arr[i].color = COLOR.pivot;
      for (let j = i + 1; j < N && !stopped; j++) {
        comparisons++; cmpEl.textContent = comparisons;
        const prev = arr[j].color;
        arr[j].color = COLOR.compare;
        draw(); await sleep(getSpeed());
        if (arr[j].val < arr[minIdx].val) {
          if (minIdx !== i) arr[minIdx].color = COLOR.default;
          minIdx = j;
          arr[minIdx].color = COLOR.swap;
        } else {
          arr[j].color = prev === COLOR.swap ? COLOR.swap : COLOR.default;
        }
        draw();
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        swaps++; swpEl.textContent = swaps;
      }
      arr[i].color = COLOR.sorted;
      if (minIdx !== i) arr[minIdx].color = COLOR.default;
      draw();
    }
    if (!stopped) arr[N-1].color = COLOR.sorted;
  }

  async function quickSort(lo = 0, hi = N - 1) {
    if (lo >= hi || stopped) return;
    const pivot = arr[hi].val;
    arr[hi].color = COLOR.pivot;
    let p = lo;
    for (let j = lo; j < hi && !stopped; j++) {
      comparisons++; cmpEl.textContent = comparisons;
      arr[j].color = COLOR.compare;
      draw(); await sleep(getSpeed());
      if (arr[j].val <= pivot) {
        [arr[p], arr[j]] = [arr[j], arr[p]];
        swaps++; swpEl.textContent = swaps;
        arr[p].color = COLOR.swap;
        arr[j].color = COLOR.default;
        p++;
      } else {
        arr[j].color = COLOR.default;
      }
      draw(); await sleep(getSpeed() / 2);
    }
    [arr[p], arr[hi]] = [arr[hi], arr[p]];
    arr[p].color = COLOR.sorted;
    draw();
    await quickSort(lo, p - 1);
    await quickSort(p + 1, hi);
    if (lo === 0 && hi === N - 1 && !stopped) arr.forEach(a => a.color = COLOR.sorted);
  }

  async function run() {
    if (running) return;
    running = true; stopped = false;
    sortBtn.disabled = true;
    statEl.textContent = 'Sorting…';
    const algo = $('#algoSelect')?.value || 'bubble';
    if (algo === 'bubble')    await bubbleSort();
    if (algo === 'insertion') await insertionSort();
    if (algo === 'selection') await selectionSort();
    if (algo === 'quick') {
      arr.forEach(a => a.color = COLOR.default);
      await quickSort(0, N - 1);
    }
    if (!stopped) {
      arr.forEach(a => a.color = COLOR.sorted);
      draw();
      statEl.textContent = 'Done!';
    }
    running = false;
    if (sortBtn) sortBtn.disabled = false;
  }

  sortBtn.addEventListener('click', run);
  resetBtn.addEventListener('click', () => { stopped = true; running = false; setTimeout(() => { genArray(); draw(); sortBtn.disabled = false; }, 50); });
  $('#sizeRange')?.addEventListener('input', () => { if (!running) { genArray(); draw(); } });

  currentDemo = { stop: () => { stopped = true; running = false; } };

  resize(); genArray(); draw();
}

// ── Conway's Game of Life ─────────────────

function buildLifeUI(title) {
  return `
    <div class="life-wrap">
      <div class="modal-title">${title}</div>
      <div class="modal-subtitle">Click or drag on the grid to paint cells. Press Play to run the simulation.</div>
      <div class="life-controls">
        <button class="viz-btn viz-btn-sort" id="lifePlayBtn">Play</button>
        <button class="viz-btn viz-btn-reset" id="lifeStepBtn">Step</button>
        <button class="viz-btn viz-btn-reset" id="lifeRandomBtn">Random</button>
        <button class="viz-btn viz-btn-reset" id="lifeClearBtn">Clear</button>
        <label style="font-size:0.8rem;color:var(--muted);display:flex;align-items:center;gap:.4rem">
          Speed
          <input type="range" id="lifeSpeed" min="1" max="20" value="8" style="width:80px;accent-color:var(--accent)"/>
        </label>
      </div>
      <div class="life-canvas-wrap" id="lifeCanvasWrap">
        <canvas id="lifeCanvas"></canvas>
      </div>
      <div class="life-info">
        <span>Generation: <span id="lifegen">0</span></span>
        <span>Population: <span id="lifepop">0</span></span>
        <span class="life-hint">Click/drag to draw · Space = Play/Pause</span>
      </div>
    </div>
  `;
}

function initGameOfLife() {
  const canvas    = $('#lifeCanvas');
  const ctx       = canvas.getContext('2d');
  const playBtn   = $('#lifePlayBtn');
  const stepBtn   = $('#lifeStepBtn');
  const randomBtn = $('#lifeRandomBtn');
  const clearBtn  = $('#lifeClearBtn');
  const genEl     = $('#lifegen');
  const popEl     = $('#lifepop');

  const CELL   = 12;
  let COLS, ROWS, grid, next, running = false, animId, gen = 0;
  let drawing  = false, drawState = true;

  function resize() {
    const wrap = $('#lifeCanvasWrap');
    const W    = wrap.offsetWidth;
    COLS = Math.floor(W / CELL);
    ROWS = Math.floor(320 / CELL);
    canvas.width  = COLS * CELL;
    canvas.height = ROWS * CELL;
    initGrid();
    draw();
  }

  function initGrid() {
    grid = Array.from({ length: ROWS }, () => new Uint8Array(COLS));
    next = Array.from({ length: ROWS }, () => new Uint8Array(COLS));
    gen = 0; if (genEl) genEl.textContent = 0;
  }

  function randomize() {
    gen = 0; if (genEl) genEl.textContent = 0;
    grid.forEach(row => row.forEach((_, j, r) => { r[j] = Math.random() < 0.3 ? 1 : 0; }));
    draw();
  }

  function clear() {
    gen = 0; if (genEl) genEl.textContent = 0;
    grid.forEach(row => row.fill(0));
    draw();
  }

  function countNeighbors(r, c) {
    let n = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = (r + dr + ROWS) % ROWS;
        const nc = (c + dc + COLS) % COLS;
        n += grid[nr][nc];
      }
    }
    return n;
  }

  function step() {
    let pop = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const n = countNeighbors(r, c);
        const alive = grid[r][c];
        if (alive) {
          next[r][c] = (n === 2 || n === 3) ? 1 : 0;
        } else {
          next[r][c] = n === 3 ? 1 : 0;
        }
        pop += next[r][c];
      }
    }
    [grid, next] = [next, grid];
    gen++;
    if (genEl) genEl.textContent = gen;
    if (popEl) popEl.textContent = pop;
    draw();
  }

  function draw() {
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let pop = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (grid[r][c]) {
          const age = 1;
          ctx.fillStyle = '#64ffda';
          ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2);
          pop++;
        }
      }
    }
    // draw grid lines subtly
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 0.5;
    for (let c = 0; c <= COLS; c++) {
      ctx.beginPath(); ctx.moveTo(c * CELL, 0); ctx.lineTo(c * CELL, canvas.height); ctx.stroke();
    }
    for (let r = 0; r <= ROWS; r++) {
      ctx.beginPath(); ctx.moveTo(0, r * CELL); ctx.lineTo(canvas.width, r * CELL); ctx.stroke();
    }
    if (popEl && gen === 0) popEl.textContent = pop;
  }

  function getCell(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width  / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top)  * scaleY;
    return [Math.floor(y / CELL), Math.floor(x / CELL)];
  }

  function toggleCell(e) {
    const [r, c] = getCell(e);
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
    if (!drawing) { drawState = !grid[r][c]; }
    grid[r][c] = drawState ? 1 : 0;
    draw();
  }

  canvas.addEventListener('mousedown', e => { drawing = true; toggleCell(e); });
  canvas.addEventListener('mousemove', e => { if (drawing) toggleCell(e); });
  window.addEventListener('mouseup', () => { drawing = false; });

  // Touch support
  canvas.addEventListener('touchstart', e => {
    e.preventDefault(); drawing = true;
    toggleCell(e.touches[0]);
  }, { passive: false });
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    toggleCell(e.touches[0]);
  }, { passive: false });
  canvas.addEventListener('touchend', () => { drawing = false; });

  function getInterval() {
    const v = parseInt($('#lifeSpeed')?.value || 8);
    return Math.max(20, 320 - v * 15);
  }

  function startLoop() {
    if (running) return;
    running = true;
    playBtn.textContent = 'Pause';
    let last = 0;
    function loop(ts) {
      if (!running) return;
      if (ts - last > getInterval()) { step(); last = ts; }
      animId = requestAnimationFrame(loop);
    }
    animId = requestAnimationFrame(loop);
  }

  function stopLoop() {
    running = false;
    cancelAnimationFrame(animId);
    playBtn.textContent = 'Play';
  }

  playBtn.addEventListener('click', () => running ? stopLoop() : startLoop());
  stepBtn.addEventListener('click', () => { stopLoop(); step(); });
  randomBtn.addEventListener('click', () => { stopLoop(); randomize(); });
  clearBtn.addEventListener('click', () => { stopLoop(); clear(); });

  document.addEventListener('keydown', function spaceHandler(e) {
    if (e.code === 'Space' && $('#lifePlayBtn')) {
      e.preventDefault();
      running ? stopLoop() : startLoop();
    }
    if (!$('#lifePlayBtn')) document.removeEventListener('keydown', spaceHandler);
  });

  currentDemo = { stop: () => { stopLoop(); } };

  resize();
  randomize();
}

// ── Contact Form ──────────────────────────

function initContactForm() {
  const form = $('#contactForm');
  const note = $('#formNote');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (note) {
      note.style.color = 'var(--accent)';
      note.textContent = '✓ Message sent! (Connect Formspree in production to enable real email delivery.)';
    }
    form.reset();
  });
}

// ── Hamburger Menu ────────────────────────

function initHamburger() {
  const btn   = $('#hamburger');
  const links = $('#navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && !btn.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('open');
    }
  });
}
