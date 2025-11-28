// script.js — 页面交互：主题、菜单、图片来源与滚动
document.addEventListener('DOMContentLoaded', function () {
  // Theme handling
  const themeToggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('prefers-theme') || null;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
  const defaultTheme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', defaultTheme);
  updateThemeUI(defaultTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('prefers-theme', next);
      updateThemeUI(next);
    });
  }

  function updateThemeUI(t) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    themeToggle.setAttribute('aria-pressed', t === 'dark');
    // set icon
    themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  // Mobile nav
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on mobile
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
        }
      }
    });
  });

  // Mark active nav link
  const navLinks = document.querySelectorAll('#main-nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // compare file names (e.g., 'mecha.html' or '#overview')
    if (href.includes('#')) {
      // if same page and anchor points to a section we match index.html
      if (currentPath === 'index.html' && href.indexOf('#') > -1) {
        const target = href.split('#')[1];
        if (target && window.location.hash) {
          if (window.location.hash === '#' + target) a.classList.add('active');
        }
      }
      return;
    }
    const hrefFile = href.split('/').pop();
    if (hrefFile === currentPath) {
      a.classList.add('active');
    }
  });

  // Lightbox for gallery images
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbClose = document.getElementById('lightboxClose');
  const lbCredit = document.getElementById('lightboxCredit');
  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', (e) => {
      const src = img.getAttribute('src');
      lbImg.src = src;
      lbImg.alt = img.alt || '';
      lbCredit.textContent = img.dataset.credit || '';
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });
  if (lbClose) lbClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
  });
  if (lightbox) lightbox.addEventListener('click', (e)=>{
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') {
      if (lightbox && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
        lightbox.setAttribute('aria-hidden', 'true');
      }
    }
  });

  // Fill credit text for images
  document.querySelectorAll('img[data-credit]').forEach(img => {
    const credit = img.getAttribute('data-credit');
    const card = img.closest('.mecha-card') || img.closest('figure') || img.parentElement;
    if (!card) return;
    const ct = card.querySelector('.credit-text');
    if (ct && credit) ct.textContent = credit;
  });

  // Little UI enhancement: add 'floating' class to hero on load
  const hero = document.querySelector('.hero-inner');
  if (hero) hero.classList.add('floating');

  // Accessibility: keyboard nav for menu
  if (menuToggle) {
    menuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.click();
      }
    });
  }

  // Header condensed on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    let ticking = false;
    const threshold = 80; // px scrolled to condense
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > threshold) {
            header.classList.add('condensed');
          } else {
            header.classList.remove('condensed');
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});

// End script
