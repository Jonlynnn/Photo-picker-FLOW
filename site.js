const root = document.documentElement;
const media = matchMedia('(prefers-color-scheme: dark)');
const isEnglish = root.lang.toLowerCase().startsWith('en');
let preference = 'auto';

try {
  preference = localStorage.getItem('flow-theme') || 'auto';
} catch {}

if (!['auto', 'light', 'dark'].includes(preference)) preference = 'auto';

const themeLabels = isEnglish
  ? {
      auto: { short: 'Auto', accessible: 'Follow system' },
      light: { short: 'Light', accessible: 'Light' },
      dark: { short: 'Dark', accessible: 'Dark' },
    }
  : {
      auto: { short: '自动', accessible: '跟随系统' },
      light: { short: '浅色', accessible: '浅色' },
      dark: { short: '深色', accessible: '深色' },
    };

function applyTheme() {
  root.dataset.theme = preference === 'auto'
    ? (media.matches ? 'dark' : 'light')
    : preference;

  document.querySelectorAll('.theme').forEach((button) => {
    button.querySelector('span').textContent = themeLabels[preference].short;
    const action = isEnglish ? 'Click to change' : '点击切换';
    button.setAttribute(
      'aria-label',
      `${isEnglish ? 'Color mode' : '颜色模式'}：${themeLabels[preference].accessible}，${action}`
    );
  });
}

applyTheme();
media.addEventListener('change', applyTheme);

document.querySelectorAll('.theme').forEach((button) => {
  button.addEventListener('click', () => {
    preference = { auto: 'light', light: 'dark', dark: 'auto' }[preference];
    try {
      localStorage.setItem('flow-theme', preference);
    } catch {}
    applyTheme();
  });
});

const pageName = location.pathname.split('/').pop() || 'index.html';
const languageTargets = {
  'index.html': 'index-en.html',
  'privacy.html': 'privacy-en.html',
  'download.html': 'download-en.html',
  'support.html': 'support-en.html',
  'index-en.html': 'index.html',
  'privacy-en.html': 'privacy.html',
  'download-en.html': 'download.html',
  'support-en.html': 'support.html',
};
const nav = document.querySelector('.nav');
const themeButton = nav?.querySelector('.theme');

if (nav && themeButton && languageTargets[pageName]) {
  const languageLink = document.createElement('a');
  languageLink.className = 'language-switch';
  languageLink.href = languageTargets[pageName];
  languageLink.lang = isEnglish ? 'zh-CN' : 'en';
  languageLink.hreflang = isEnglish ? 'zh-CN' : 'en';
  languageLink.textContent = isEnglish ? '中文' : 'EN';
  languageLink.setAttribute(
    'aria-label',
    isEnglish ? '切换到中文' : 'Switch to English'
  );
  nav.insertBefore(languageLink, themeButton);
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  root.classList.add('motion-ready');
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

document.querySelectorAll('[data-color]').forEach((button) => {
  button.addEventListener('click', () => {
    const poster = document.querySelector('.poster');
    if (poster) poster.style.background = button.dataset.color;
    document.querySelectorAll('[data-color]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
  });
});
