// ============================================================================
// THEME TOGGLE
// ============================================================================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// ============================================================================
// PAGE NAVIGATION (SPA)
// ============================================================================

const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo');

function showPage(pageName) {
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(`${pageName}-page`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('nav-links').classList.remove('active');
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.getAttribute('data-page');
        showPage(pageName);
    });
});

logo.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('home');
});

// Mobile menu toggle
document.getElementById('mobile-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

// ============================================================================
// FOOTER — LAST MODIFIED DATE
// ============================================================================

const lastModified = document.lastModified;
const lastModElement = document.getElementById('last-modified');

if (lastModElement) {
    lastModElement.textContent = 'Last Modified: ' + lastModified;
}

// ============================================================================
// LUCIDE ICONS
// ============================================================================

lucide.createIcons();
