/* ============================================
   CATMOON — Main JavaScript
   Animations, particles & interactivity
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        once: true,
        easing: 'ease-out-cubic',
        offset: 60
    });

    // --- Floating Particles ---
    createParticles();

    // --- Header hide/show on scroll ---
    initScrollHeader();

    // --- Floating CTA click ---
    const cta = document.getElementById('floating-cta');
    if (cta) {
        cta.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    // --- Update copyright year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Typewriter cursor blink for hero title ---
    const heroTitle = document.querySelector('.typewriter');
    if (heroTitle) {
        heroTitle.style.borderRight = '3px solid #FFD1DC';
        heroTitle.style.paddingRight = '4px';
        setInterval(() => {
            heroTitle.style.borderRightColor = 
                heroTitle.style.borderRightColor === 'transparent' ? '#FFD1DC' : 'transparent';
        }, 600);
    }
});

/* --- Particle System --- */
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const count = 20;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (8 + Math.random() * 12) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.width = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

/* --- Header auto-hide on scroll --- */
function initScrollHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    let lastScroll = 0;
    const threshold = 60;

    window.addEventListener('scroll', () => {
        const current = window.scrollY;
        if (current > threshold && current > lastScroll) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = current;
    }, { passive: true });
}
