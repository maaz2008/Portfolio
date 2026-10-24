/**
 * Muhammad Maaz — Portfolio Interactive Scripts
 * Vanilla JavaScript (Zero external dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
    initOrbitAnimation();
    initSkills();
    initProjects();
    initServices();
    initWorkflow();
    initAboutTabs();
    initNavbar();
    initContactForm();
    initCopyEmail();
    initBackToTop();
    initDynamicYear();
    initScrollReveal();
    initScrollParallax();
});

/* ==========================================================================
   1. SIGNATURE ORBIT ANIMATION SYSTEM
   Arranges 10 technology icons on two concentric revolving orbits
   with continuous counter-rotation to maintain upright orientation.
   Untouched by scroll transforms to keep orbits revolving seamlessly.
   ========================================================================== */
function initOrbitAnimation() {
    const innerRotator = document.getElementById('orbitInnerRotator');
    const outerRotator = document.getElementById('orbitOuterRotator');
    const orbitStage = document.getElementById('heroOrbitStage');
    const toggleOrbitBtn = document.getElementById('toggleOrbitBtn');

    if (!innerRotator || !outerRotator || !portfolioData || !portfolioData.technologies) return;

    // Filter technologies by orbit
    const innerTechs = portfolioData.technologies.filter(t => t.orbit === 'inner');
    const outerTechs = portfolioData.technologies.filter(t => t.orbit === 'outer');

    // Render Inner Orbit (5 items, clockwise parent rotation -> counter-clockwise counter-rotation)
    innerRotator.innerHTML = innerTechs.map(tech => createOrbitNodeHtml(tech, 'inner', 'orbit-node-counter-cw')).join('');

    // Render Outer Orbit (5 items, counter-clockwise parent rotation -> clockwise counter-rotation)
    outerRotator.innerHTML = outerTechs.map(tech => createOrbitNodeHtml(tech, 'outer', 'orbit-node-counter-ccw')).join('');

    // Orbit Pause/Play Toggle Button
    if (toggleOrbitBtn && orbitStage) {
        let isPaused = false;
        toggleOrbitBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            orbitStage.classList.toggle('is-paused', isPaused);
            toggleOrbitBtn.setAttribute('aria-pressed', isPaused);
            toggleOrbitBtn.innerHTML = isPaused
                ? `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Resume Orbit`
                : `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause Orbit`;
        });
    }
}

function createOrbitNodeHtml(tech, orbitType, counterAnimClass) {
    const radiusVar = orbitType === 'inner' ? 'var(--orbit-inner-radius)' : 'var(--orbit-outer-radius)';
    return `
        <div class="orbit-slot" style="--angle: ${tech.angle}deg; --radius: ${radiusVar};">
            <div class="${counterAnimClass}">
                <div class="orbit-icon-badge" 
                     tabindex="0" 
                     role="button" 
                     aria-label="${tech.name} technology: ${tech.role}"
                     style="--brand-color: ${tech.color}; --brand-glow: ${tech.bgColor};">
                    <span class="orbit-icon-svg">${tech.svg}</span>
                    <div class="orbit-tooltip">${tech.name}</div>
                </div>
            </div>
        </div>
    `;
}

/* ==========================================================================
   2. SKILLS AND TECHNOLOGIES GRID
   ========================================================================== */
function initSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!skillsGrid || !portfolioData || !portfolioData.technologies) return;

    function renderSkills(filterCategory = 'all') {
        const filtered = filterCategory === 'all'
            ? portfolioData.technologies
            : portfolioData.technologies.filter(item => {
                if (filterCategory === 'frontend') return item.category === 'frontend';
                if (filterCategory === 'backend') return item.category === 'backend';
                if (filterCategory === 'tools') return item.category === 'database' || item.category === 'tools';
                return true;
            });

        skillsGrid.innerHTML = filtered.map((tech, index) => `
            <div class="skill-card glass-panel reveal-up" style="--card-color: ${tech.color}; --card-bg: ${tech.bgColor}; --card-border: ${tech.borderColor}; transition-delay: ${(index % 4) * 0.08}s;">
                <div class="skill-card-top">
                    <div class="skill-icon-wrapper">
                        ${tech.svg}
                    </div>
                    <div class="skill-name-group">
                        <h3>${tech.name}</h3>
                        <span class="skill-category-tag">${tech.category}</span>
                    </div>
                </div>
                <p class="skill-role-desc">${tech.role}</p>
            </div>
        `).join('');

        // Re-observe newly rendered cards
        observeRevealElements();
    }

    renderSkills('all');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSkills(btn.getAttribute('data-filter'));
        });
    });
}

/* ==========================================================================
   3. FEATURED PROJECTS SECTION
   ========================================================================== */
function initProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer || !portfolioData || !portfolioData.projects) return;

    projectsContainer.innerHTML = portfolioData.projects.map((project, index) => {
        const isReversed = index % 2 === 1 ? 'reversed' : '';
        const visualMockup = generateMockupHtml(project);

        const liveBtn = project.liveUrl
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                 Live Demo
               </a>`
            : `<button class="btn btn-secondary btn-disabled" title="Deployment URL will be added upon launch">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                 Demo Pending
               </button>`;

        const githubBtn = project.githubUrl
            ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                 GitHub Repo
               </a>`
            : '';

        const featuresList = project.features
            ? project.features.map(f => `
                <div class="project-feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${f}</span>
                </div>
              `).join('')
            : '';

        const techBadges = project.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('');

        return `
            <div class="project-card glass-panel reveal-up ${isReversed}" id="project-${project.id}">
                <div class="project-visual reveal-scale">
                    ${visualMockup}
                </div>
                <div class="project-details">
                    <span class="project-category reveal-up">${project.category}</span>
                    <h3 class="project-title reveal-up reveal-delay-1">${project.title}</h3>
                    <p class="project-desc reveal-up reveal-delay-2">${project.description}</p>
                    
                    ${featuresList ? `<div class="project-features reveal-up reveal-delay-3">${featuresList}</div>` : ''}
                    
                    <div class="project-tech-badges reveal-up reveal-delay-4">
                        ${techBadges}
                    </div>

                    <div class="project-actions reveal-up reveal-delay-5">
                        ${liveBtn}
                        ${githubBtn}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function generateMockupHtml(project) {
    if (project.image) {
        const displayUrl = project.displayUrl || (project.githubUrl ? project.githubUrl.replace(/^https?:\/\//, '') : 'github.com/maaz2008');
        return `
            <div class="mockup-window">
                <div class="mockup-header">
                    <div class="mockup-dots">
                        <span class="mockup-dot red"></span>
                        <span class="mockup-dot yellow"></span>
                        <span class="mockup-dot green"></span>
                    </div>
                    <div class="mockup-url">${displayUrl}</div>
                    ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="mockup-header-link" title="Open GitHub Repository">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        </a>
                    ` : ''}
                </div>
                <div class="mockup-body mockup-screenshot-body">
                    <div class="mockup-image-frame">
                        <img src="${project.image}" alt="${project.title} Preview" class="project-screenshot-img" loading="lazy">
                        <div class="screenshot-overlay">
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="screenshot-view-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                <span>Explore Code on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (project.mockupType === 'lawyer') {
        return `
            <div class="mockup-window">
                <div class="mockup-header">
                    <div class="mockup-dots">
                        <span class="mockup-dot red"></span>
                        <span class="mockup-dot yellow"></span>
                        <span class="mockup-dot green"></span>
                    </div>
                    <div class="mockup-url">https://lawyerportal.local/dashboard</div>
                </div>
                <div class="mockup-body">
                    <div class="mockup-ui-lawyer">
                        <div class="lawyer-nav-bar">
                            <span class="lawyer-badge-brand">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                LegalCare Pro
                            </span>
                            <span style="font-size: 0.6875rem; color: #94A3B8;">Karachi, PK</span>
                        </div>
                        <div class="lawyer-cards-row">
                            <div class="lawyer-mini-card">
                                <div class="lawyer-mini-header">
                                    <div class="lawyer-avatar-placeholder"></div>
                                    <div>
                                        <div style="font-size: 0.75rem; font-weight:700; color:#F8FAFC;">Adv. S. Khan</div>
                                        <div style="font-size: 0.625rem; color:#38BDF8;">Corporate Law</div>
                                    </div>
                                </div>
                                <div class="lawyer-book-btn">Book Consultation</div>
                            </div>
                            <div class="lawyer-mini-card">
                                <div class="lawyer-mini-header">
                                    <div class="lawyer-avatar-placeholder"></div>
                                    <div>
                                        <div style="font-size: 0.75rem; font-weight:700; color:#F8FAFC;">Adv. A. Rehman</div>
                                        <div style="font-size: 0.625rem; color:#A78BFA;">Civil Litigation</div>
                                    </div>
                                </div>
                                <div class="lawyer-book-btn">Book Consultation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (project.mockupType === 'focusflow') {
        return `
            <div class="mockup-window">
                <div class="mockup-header">
                    <div class="mockup-dots">
                        <span class="mockup-dot red"></span>
                        <span class="mockup-dot yellow"></span>
                        <span class="mockup-dot green"></span>
                    </div>
                    <div class="mockup-url">https://focusflow.app/workspace</div>
                </div>
                <div class="mockup-body">
                    <div class="mockup-ui-focusflow">
                        <div class="ff-header">
                            <span class="ff-ai-pill">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
                                Gemini AI Powered
                            </span>
                            <span style="font-size: 0.6875rem; color:#94A3B8;">Deep Focus Session</span>
                        </div>
                        <div class="ff-timer-card">
                            <div class="ff-timer-display">25:00</div>
                            <div style="font-size: 0.75rem; color: #CBD5E1;">Sprint: Full-Stack Architecture</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="mockup-window">
            <div class="mockup-header">
                <div class="mockup-dots">
                    <span class="mockup-dot red"></span>
                    <span class="mockup-dot yellow"></span>
                    <span class="mockup-dot green"></span>
                </div>
                <div class="mockup-url">https://showcase.local</div>
            </div>
            <div class="mockup-body" style="text-align: center;">
                <div style="font-size: 0.875rem; font-weight:700; color:#38BDF8; margin-bottom: 8px;">Responsive Component Architecture</div>
                <div style="font-size: 0.75rem; color:#94A3B8;">Fluid CSS Grid & Modern Vanilla UI Patterns</div>
            </div>
        </div>
    `;
}

/* ==========================================================================
   4. SERVICES SECTION
   ========================================================================= */
function initServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid || !portfolioData || !portfolioData.services) return;

    servicesGrid.innerHTML = portfolioData.services.map((service, index) => `
        <div class="service-card glass-panel reveal-up" style="transition-delay: ${(index % 3) * 0.09}s;">
            <span class="service-number">${service.number}</span>
            <div class="service-icon-box">
                ${service.icon}
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
        </div>
    `).join('');
}

/* ==========================================================================
   5. DEVELOPMENT WORKFLOW TIMELINE
   ========================================================================== */
function initWorkflow() {
    const workflowTimeline = document.getElementById('workflowTimeline');
    if (!workflowTimeline || !portfolioData || !portfolioData.workflow) return;

    workflowTimeline.innerHTML = portfolioData.workflow.map((item, index) => `
        <div class="workflow-step-card glass-panel reveal-up" style="transition-delay: ${index * 0.1}s;">
            <div class="workflow-step-badge">${item.step}</div>
            <span class="workflow-tagline">${item.tagline}</span>
            <h3 class="workflow-step-title">${item.title}</h3>
            <p class="workflow-step-desc">${item.description}</p>
        </div>
    `).join('');
}

/* ==========================================================================
   6. ABOUT TABS (Education / Certifications / Interests / Goals)
   ========================================================================== */
function initAboutTabs() {
    const tabButtons = document.querySelectorAll('.about-tab-btn');
    const tabPanes = document.querySelectorAll('.about-tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const activePane = document.getElementById(targetTab);
            if (activePane) activePane.classList.add('active');
        });
    });
}

/* ==========================================================================
   7. NAVBAR (Scroll Blur, Mobile Menu, Active Section Tracker)
   ========================================================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky blur on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }

    // Active Section Indicator with IntersectionObserver
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href').replace('#', '');
                    link.classList.toggle('active', href === currentId);
                });
            }
        });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
}

/* ==========================================================================
   8. CONTACT FORM WITH HONEST STATUS FEEDBACK
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const statusAlert = document.getElementById('formStatusAlert');
    if (!form || !statusAlert) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const subject = form.elements['subject'].value.trim();
        const message = form.elements['message'].value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            statusAlert.className = 'form-status-alert error';
            statusAlert.innerHTML = `<strong>Please fill out all required fields</strong> before sending.`;
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            statusAlert.className = 'form-status-alert error';
            statusAlert.innerHTML = `<strong>Invalid email address:</strong> Please enter a valid email format.`;
            return;
        }

        // Honest feedback as demanded by prompt:
        // "If no backend or email service is configured, clearly indicate that configuration is needed. Never pretend a message has been sent when it has not."
        statusAlert.className = 'form-status-alert info';
        statusAlert.innerHTML = `
            <strong>Form validated successfully!</strong><br>
            Note: The client-side form is fully functioning and ready for connection with your chosen mail service (such as EmailJS, Formspree, or your PHP backend). In the meantime, you can email Muhammad Maaz directly at 
            <a href="mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hi Maaz,\n\n' + message + '\n\nFrom: ' + name + ' (' + email + ')')}" style="color: var(--electric-blue); text-decoration: underline;">
                ${portfolioData.personal.email}
            </a>.
        `;

        form.reset();
    });
}

/* ==========================================================================
   9. WORKING COPY-EMAIL BUTTON
   ========================================================================== */
function initCopyEmail() {
    const copyBtn = document.getElementById('copyEmailBtn');
    if (!copyBtn || !portfolioData || !portfolioData.personal.email) return;

    copyBtn.addEventListener('click', async () => {
        const email = portfolioData.personal.email;
        try {
            await navigator.clipboard.writeText(email);
            const originalHtml = copyBtn.innerHTML;
            copyBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Copied!
            `;
            copyBtn.style.background = '#10B981';
            copyBtn.style.color = '#FFFFFF';
            copyBtn.style.borderColor = '#10B981';

            setTimeout(() => {
                copyBtn.innerHTML = originalHtml;
                copyBtn.style.background = '';
                copyBtn.style.color = '';
                copyBtn.style.borderColor = '';
            }, 2500);
        } catch (err) {
            // Fallback
            prompt("Copy this email address:", email);
        }
    });
}

/* ==========================================================================
   10. BACK TO TOP SMOOTH SCROLL
   ========================================================================== */
function initBackToTop() {
    const backBtn = document.getElementById('backToTopBtn');
    if (!backBtn) return;

    backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==========================================================================
   11. DYNAMIC COPYRIGHT YEAR
   ========================================================================== */
function initDynamicYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/* ==========================================================================
   12. CINEMATIC SCROLL-TRIGGERED REVEAL SYSTEM (IntersectionObserver)
   ========================================================================== */
let globalRevealObserver = null;

function initScrollReveal() {
    // Only apply hidden initial state if JS is active and reduced-motion is not requested
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    document.documentElement.classList.add('reveal-ready');

    globalRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                // Reveal once to avoid distracting repetitions
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -45px 0px',
        threshold: 0.1
    });

    observeRevealElements();

    // Trigger hero entrance reveals right after initial paint
    requestAnimationFrame(() => {
        const heroReveals = document.querySelectorAll('.hero-content .reveal-up');
        heroReveals.forEach(el => el.classList.add('is-revealed'));
    });
}

function observeRevealElements() {
    if (!globalRevealObserver) return;
    const elements = document.querySelectorAll('.reveal-up:not(.is-revealed), .reveal-scale:not(.is-revealed)');
    elements.forEach(el => globalRevealObserver.observe(el));
}

/* ==========================================================================
   13. CINEMATIC SCROLL-LINKED TEXT PARALLAX
   Subtle upward depth movement on scroll for key large headings and hero items
   ========================================================================== */
function initScrollParallax() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const parallaxItems = document.querySelectorAll('.scroll-parallax-item');
    const parallaxHeadings = document.querySelectorAll('.parallax-heading');

    let isTicking = false;

    function onScroll() {
        if (!isTicking) {
            requestAnimationFrame(updateParallax);
            isTicking = true;
        }
    }

    function updateParallax() {
        const scrollY = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight;

        // 1. Hero text parallax (moves up slightly as user scrolls down past hero)
        if (scrollY < viewportHeight * 1.2) {
            parallaxItems.forEach(item => {
                const speed = parseFloat(item.getAttribute('data-speed')) || 0.06;
                // Move upward gradually: clamped between 0 and -45px
                const offsetY = Math.max(-45, -scrollY * speed);
                item.style.setProperty('--parallax-y', `${offsetY.toFixed(1)}px`);
            });
        }

        // 2. Section Headings subtle depth parallax (clamped smoothly within [-12px, 12px])
        parallaxHeadings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            // Relative distance from viewport vertical center
            const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
            // Only calculate if within or close to viewport
            if (rect.top < viewportHeight + 100 && rect.bottom > -100) {
                const offset = Math.max(-12, Math.min(12, -distanceFromCenter * 0.035));
                heading.style.setProperty('--heading-parallax-y', `${offset.toFixed(1)}px`);
            }
        });

        isTicking = false;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();
}
