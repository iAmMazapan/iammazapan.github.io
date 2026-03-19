// ============================================================================
// TRANSLATIONS (EN)
// ============================================================================

const translations = {
    en: {
        // Nav
        nav_about: "About",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_volunteering: "Volunteering",
        nav_gallery: "Gallery",
        nav_hobbies: "Hobbies",
        nav_contact: "Contact",

        // Hero
        hero_title: "I am a student...",
        hero_desc: "passionate about algorithms, graph theory, and exploring the frontiers of computer science. I love studying new topics across all fields of science. I particularly enjoy problems involving graph theory, parallel computing, and GPU programming. Outside of tech, I immerse myself in music.",

        // About Me
        about_title: "About Me",
        about_p1: 'I\'m a Computer Science student at <strong>UNSAAC</strong> (Cusco, Peru), in my final semester, finishing my thesis on predictive archaeological modeling with Machine Learning and geospatial data. Before university, I studied at <strong>COAR Ayacucho</strong>, a national high-performance public school I got into through a competitive national exam.',
        about_p2: 'Competitive programming is a core part of who I am. I represented UNSAAC at the <strong>ICPC South America Regional three consecutive years</strong> (2022\u20132024) and became the <strong>highest-rated Codeforces competitor in Cusco</strong> (Expert, max 1622). I trained at the <strong>Training Camp Argentina</strong> (2024, 2025) and <strong>Training Camp Arequipa</strong> (2025).',
        about_p3: 'My research interests are in <strong>graph theory</strong>, <strong>GPU computing (CUDA)</strong>, <strong>parallel algorithms</strong>, and computational science in general. I\'m drawn to problems at the intersection of theory and high-performance computing, and I\'m looking toward graduate studies in these areas.',
        about_p4: 'On the community side, I co-founded the <strong>CS Cusco Initiative</strong> to bring CS education to rural Andean provinces, volunteer at <a href="https://www.instagram.com/warmitech_cusco/" target="_blank"><strong>WarmiTech Cusco</strong></a> teaching programming to young women, led the <a href="https://www.linkedin.com/company/cp-unsaac/" target="_blank"><strong>UNSAAC CP Group</strong></a>, and co-founded the IEEE CS Chapter at UNSAAC.',
        about_p5: "Outside of CS, I play guitar, read across science and philosophy, and enjoy exploring new music.",

        // Achievements
        achievements_title: "Achievements",
        ach_nasa: '<strong>NASA Space Apps Challenge Cusco \u2014 Winner</strong>. Developed <a href="https://github.com/iAmMazapan/FarmGuardians" target="_blank">FarmGuardians</a>, an educational game using NASA Earth data.',
        ach_ieee: '<strong>IEEEXtreme 18.0</strong> \u2014 Top 5 in Peru, Top 150 worldwide. Team "Wozmit". <a href="https://ieeextreme.org/ieeextreme-18-0-ranking/" target="_blank">Ranking</a>',
        ach_cuscontest: '<strong>CUSCONTEST Champion</strong> (2023 & 2024) \u2014 Winner as team "Watashi WA choudo nani ga". <a href="https://omegaup.com/arena/cuscontest-xx/scoreboard/xabGNtJRMdX7JkMfNqvHCZe2rsfHVH" target="_blank">Scoreboard</a>',
        ach_eneisoft: "<strong>ENEISOFT</strong> \u2014 Top 7 in Peru.",
        ach_elecon: "<strong>ELECON \u2014 Winner</strong>. First place in the international congress programming competition.",
        ach_icpc: '<strong>ICPC South America Regional</strong> \u2014 Represented UNSAAC in three consecutive editions. <a href="https://icpc.global/ICPCID/SIFE9U6L1IB3" target="_blank">ICPC Profile</a>',
        ach_camp: "<strong>Training Camp Argentina</strong> \u2014 Rosario (2024) and Santa Fe (2025).",

        // Experience
        exp_title: "Experience & Education",
        exp_work: "Work Experience",
        exp_ruwark_date: "January 2026 \u2013 Present",
        exp_ruwark_desc: "Built a predictive model for archaeological site discovery using scikit-learn and XGBoost, trained with geospatial features derived from satellite DEMs (GDAL, Rasterio, GeoPandas). Integrated Google Gemini API for automated data extraction from archaeological reports. Contributed to microservices backend (Laravel, Node.js, Docker) and Next.js/React frontend.",
        exp_transzela_date: "November 2025 \u2013 January 2026",
        exp_transzela_desc: "Developed an electronic billing system with Angular frontend and C#/.NET backend. Implemented REST API endpoints and integrated the Izipay payment gateway.",
        exp_tikaymi_title: "Web Development Intern",
        exp_tikaymi_date: "May 2025 \u2013 November 2025",
        exp_tikaymi_desc: "Built a document management system deployed to production. REST APIs with Django, frontend with Vue.js, containerized with Docker in production and staging environments. Agile methodology with Scrum.",
        exp_education: "Education",
        exp_unsaac_title: "B.S. in Computer Science",
        exp_unsaac_date: "2020 \u2013 2026 (final semester)",
        exp_unsaac_desc: "Thesis: Predictive modeling of archaeological potential using Machine Learning and geospatial data. Member of ACM Student Chapter and IEEE Computer Society.",
        exp_coar_title: "COAR Ayacucho \u2014 Science Track",
        exp_coar_org: "Colegio de Alto Rendimiento (National High-Performance Public School), Ayacucho, Peru",
        exp_coar_desc: "Highly competitive national selection for high-potential students from low-income backgrounds. Intensive STEM curriculum with critical thinking focus.",

        // Projects
        proj_title: "Projects",
        proj_arq_title: "Predictive Archaeological Modeling \u2014 ML + GIS",
        proj_arq_org: "Independent Research / UNSAAC Thesis",
        proj_arq_year: "2025 \u2013 Present",
        proj_arq_desc: 'End-to-end reproducible data science pipeline for predicting archaeological site locations. Organized in 4 Jupyter Notebook stages: data acquisition, feature engineering from satellite DEMs, model training (scikit-learn, XGBoost), and geospatial visualization. Dataset: ~27,000 balanced samples at 30m resolution. Publication planned for ACM SIGSPATIAL or similar. <a href="https://github.com/iAmMazapan/arqueologia-predictiva" target="_blank">[Repo]</a>',
        proj_farm_title: "FarmGuardians \u2014 Educational Video Game",
        proj_farm_desc: 'Winner of NASA Space Apps Challenge Cusco (2024 & 2025). Data-driven educational game using NASA Earth observation data (NDVI, temperature, soil moisture) transformed into interactive agricultural missions. Led the development team. <a href="https://github.com/iAmMazapan/FarmGuardians" target="_blank">[Repo]</a> | <a href="https://www.youtube.com/watch?v=3FlgNu1J8EA" target="_blank">[Demo]</a>',
        proj_alloys_title: "Estimation of Optimal Hardness in Metal Alloys",
        proj_alloys_year: "February 2024",
        proj_alloys_desc: "Combined multilinear regression with genetic algorithms to optimize alloy hardness. Improved target metric by 15%, achieving 0.02 MSE.",
        proj_gol_title: "Conway's Game of Life \u2014 Cellular Automaton",
        proj_gol_org: "Personal Project",
        proj_gol_desc: 'Interactive implementation of Conway\'s Game of Life with Pygame. Features Gosper Glider Guns, Pentadecathlon oscillators, real-time HUD, pause/resume, and click-to-toggle cells. Includes a GIF generator. <a href="https://github.com/iAmMazapan/game-of-life" target="_blank">[Repo]</a>',
        proj_cp_title: "Competitive Programming Repository",
        proj_cp_org: "Personal GitHub",
        proj_cp_year: "Ongoing",
        proj_cp_desc: 'Solutions, techniques, and practice code for ICPC, IEEEXtreme, CUSCONTEST, and Codeforces contests. <a href="https://github.com/iAmMazapan/Competitive-Programming" target="_blank">[Repo]</a>',

        // Volunteering
        vol_title: "Volunteering & Community",
        vol_cs_title: "CS Cusco Initiative \u2014 Co-founder",
        vol_cs_org: "Nonprofit educational project, Cusco, Peru",
        vol_cs_date: "2026 \u2013 Present",
        vol_cs_desc: "Co-founded a nonprofit initiative to bring computer science education to youth in rural provinces of Cusco (highland provinces and Sacred Valley). Program includes motivational talks, introductory Python courses, and competitive programming training. Advised by Edison Ttito Concha (SWE @ Amazon Brazil).",
        vol_boot_title: "Competitive Programming Bootcamp \u2014 Lead Instructor",
        vol_boot_org: "UNSAAC, backed by the Dean and ACM Chapter",
        vol_boot_desc: "Designed and taught a multi-day bootcamp for undergraduates covering algorithms, graphs, dynamic programming, and contest strategies. Improved participation and performance of UNSAAC teams in regional competitions.",
        vol_warmi_title: "WarmiTech Cusco \u2014 Programming Instructor (Volunteer)",
        vol_warmi_desc: "Volunteer instructor teaching programming and introductory competitive programming to young women, promoting female participation in STEM.",
        vol_google_title: "Google Peru Student Summit \u2014 Student Lead",
        vol_google_date: "September 2024",
        vol_google_desc: "Coordinated logistics and guided 150+ attendees at a Google-sponsored tech summit in Cusco. Certified by Andrea Santillana (OmegaUp Director) and Geraldine Francia (Hola Cloud Global Lead).",
        vol_ieee_title: "IEEE CS Chapter \u2014 Co-founder & IEEEXtreme Ambassador",
        vol_ieee_desc: "Co-founded the IEEE Computer Society Student Chapter at UNSAAC. Hosted IEEEXtreme 18.0 in Cusco and promoted competitive programming across IEEE Region 9.",
        vol_cpunsaac_title: "CP UNSAAC \u2014 Former Leader",
        vol_cpunsaac_org: "Competitive Programming Group, UNSAAC",
        vol_cpunsaac_desc: "Led the university's competitive programming group. Taught algorithms and data structures, organized training sessions and practice contests for ICPC preparation.",

        // Gallery
        gallery_title: "Gallery",
        gallery_desc: "Moments that shaped my journey \u2014 competitions, communities, and experiences.",
        gal_0: "ICPC South America Regional 2025 \u2014 UNSAAC delegation",
        gal_1: "ICPC Team \"El Bendito Fulkerson\" \u2014 Regional 2025",
        gal_2: "ICPC \u2014 Representing UNSAAC with pride",
        gal_3: "First ICPC Team \"Maqueentosh\" \u2014 Where the ICPC journey began",
        gal_4: "First RPC \u2014 6 problems solved, balloons earned",
        gal_5: "CUSCONTEST XX Champion \u2014 10 problems solved, 1st of 54+ teams",
        gal_6: "NASA Space Apps Challenge \u2014 FarmGuardians winning team",
        gal_7: "Training Camp Argentina 2025 \u2014 Santa Fe",
        gal_8: "Team \"Pancito\" \u2014 The first competitive programming team",
        gal_9: "WarmiTech Cusco \u2014 Teaching programming to young women",
        gal_10: "PhawAI + TaReCDa 2025 \u2014 AI Research Workshop, UCSP Arequipa",

        // Hobbies
        hobbies_title: "Hobbies & Interests",
        hobbies_desc: "When I'm not coding or solving algorithmic puzzles, I enjoy activities that help me stay creative, balanced, and continuously learning.",
        hobby_reading: "<strong>Reading:</strong> Novels, literature in general, a bit of philosophy and science. Helps me broaden perspectives and deepen understanding of ideas.",
        hobby_music: "<strong>Music & Guitar:</strong> Exploring different genres, especially EDM and rock. Playing guitar is a way to unwind and express creativity.",
        hobby_puzzles: "<strong>Puzzles:</strong> Rubik's cubes and other mechanical puzzles. Complements my interest in algorithms by finding patterns and optimizing solutions.",
        hobby_films: "<strong>Films & Series:</strong> Open to any good recommendations. I'm just starting to appreciate the seventh art and enjoy exploring storytelling and cinematography.",
        hobby_games: "<strong>Video Games:</strong> MOBAs and adventure games. Fascinating both as entertainment and as studies in game mechanics and strategy.",

        // Contact
        contact_title: "Contact",
        contact_desc: "Always happy to connect with fellow programmers, researchers, or anyone passionate about algorithms and competitive programming. Feel free to reach out!",
        contact_location: "Location:",
    }
};

// ============================================================================
// LANGUAGE TOGGLE
// ============================================================================

let currentLang = localStorage.getItem('lang') || 'en';
const langToggle = document.getElementById('lang-toggle');

// Store Spanish originals on first load
const spanishOriginals = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
    spanishOriginals[el.getAttribute('data-i18n')] = el.innerHTML;
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    langToggle.textContent = lang === 'es' ? 'EN' : 'ES';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang === 'en' && translations.en[key]) {
            el.innerHTML = translations.en[key];
        } else if (lang === 'es' && spanishOriginals[key]) {
            el.innerHTML = spanishOriginals[key];
        }
    });
}

langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
});

// Apply saved language on load
if (currentLang === 'en') {
    setLanguage('en');
}

// ============================================================================
// THEME TOGGLE
// ============================================================================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
themeIcon.textContent = currentTheme === 'dark' ? '\uD83C\uDF19' : '\u2600\uFE0F';

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '\uD83C\uDF19' : '\u2600\uFE0F';
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
// LUCIDE ICONS
// ============================================================================

lucide.createIcons();

// ============================================================================
// LIGHTBOX GALLERY
// ============================================================================

const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const images = document.querySelectorAll('.gallery-item img');
    const captions = document.querySelectorAll('.gallery-caption');

    if (images[index]) {
        lightboxImg.src = images[index].src;
        lightboxCaption.textContent = captions[index] ? captions[index].textContent : '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox(event) {
    if (event.target === lightbox || event.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function changeLightbox(event, direction) {
    event.stopPropagation();
    const images = document.querySelectorAll('.gallery-item img');
    const captions = document.querySelectorAll('.gallery-caption');
    const total = images.length;

    currentIndex = (currentIndex + direction + total) % total;
    lightboxImg.src = images[currentIndex].src;
    lightboxCaption.textContent = captions[currentIndex] ? captions[currentIndex].textContent : '';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
        changeLightbox(e, -1);
    } else if (e.key === 'ArrowRight') {
        changeLightbox(e, 1);
    }
});
