/**
 * Muhammad Maaz — Portfolio Data Store
 * All editable fields, content, projects, skills, and links are organized here.
 * You can update your bio, links, project information, and skills without modifying HTML.
 */

const portfolioData = {
    personal: {
        name: "Muhammad Maaz",
        shortName: "Maaz",
        monogram: "MM",
        title: "Full Stack Web Developer",
        badge: "Open for Opportunities",
        email: "maaazz714@gmail.com",
        phone: "+92 313 8272258",
        phoneSecondary: "+92 335 0837884",
        location: "Karachi, Pakistan",
        github: "https://github.com/maaz2008",
        linkedin: "https://www.linkedin.com/in/muhammad-maaz-283559367",
        introGreeting: "HELLO, I'M",
        heroSubtitle: "Turning ideas into elegant, responsive, and functional digital experiences.",
        heroBio: "I build modern web applications by combining creative frontend interfaces with robust backend functionality and database integration. I'm passionate about learning, solving problems, and transforming ideas into practical digital products.",
        profileImage: "assets/images/profile.jpg"
    },

    about: {
        summary: "I am a dedicated Full Stack Web Developer based in Karachi, Pakistan, with a strong foundation in modern frontend craftsmanship and robust backend architecture. My focus revolves around building clean, responsive user interfaces, structured database systems, and dependable web applications using technologies like HTML5, CSS3, JavaScript, PHP, Laravel, and MySQL.",
        highlights: [
            { icon: "code", label: "Frontend Craft", text: "Clean, responsive HTML5/CSS3/JavaScript & Bootstrap interfaces" },
            { icon: "server", label: "Backend Core", text: "Structured PHP & Laravel architectures with RESTful paradigms" },
            { icon: "database", label: "Data Integrity", text: "Normalized MySQL schema design, relational modeling & CRUD" },
            { icon: "sparkles", label: "AI Integration", text: "Leveraging cutting-edge LLMs (Gemini API) to elevate productivity" }
        ],
        details: {
            education: [
                {
                    institution: "GDBC Gulistan-e-Johar No. 1 — Karachi Board",
                    degree: "Intermediate (Pre-Engineering)",
                    period: "2024 — 2026 (Expected)",
                    badge: "In Progress",
                    description: "Focused on analytical thinking, mathematics, physics, and computational problem-solving."
                },
                {
                    institution: "CAA Model School-2 — Karachi Board",
                    degree: "Matriculation (Science Group)",
                    period: "2022 — 2024",
                    badge: "Completed",
                    description: "Built strong foundations in science, computer science fundamentals, and mathematics."
                }
            ],
            certifications: [
                {
                    title: "ACCP AI (Aptech Certified Computer Professional in AI)",
                    institution: "Aptech Computer Education",
                    status: "Currently Enrolled",
                    note: "In-depth study in full stack development, software engineering, and modern AI application integration."
                },
                {
                    title: "Certification in Graphic Designing",
                    institution: "Kent Institute of Information Technology",
                    status: "Completed",
                    note: "Trained in visual hierarchy, UI/UX aesthetics, color theory, typography, and digital design principles."
                }
            ],
            interests: [
                "Building high-performance, mobile-first responsive web applications",
                "Architecting scalable backend logic with Laravel & clean MVC principles",
                "Designing efficient relational databases with MySQL & optimizing queries",
                "Creating intuitive, animated micro-interactions and accessible UI designs",
                "Exploring AI-driven software workflows and generative API integrations"
            ],
            careerGoals: "To excel as a versatile Full Stack Software Engineer, contributing to high-impact web products, mastering modern distributed architectures, and collaborating with forward-thinking engineering teams."
        }
    },

    // The 10 Core Technologies featured in Hero Orbit and Skills Section
    technologies: [
        {
            id: "html5",
            name: "HTML5",
            category: "frontend",
            orbit: "inner",
            angle: 0,
            color: "#E34F26",
            bgColor: "rgba(227, 79, 38, 0.12)",
            borderColor: "rgba(227, 79, 38, 0.35)",
            role: "Semantic structure, accessible markup, modern SEO standards, and document hierarchy.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2-8.6 2.8-8.6-2.8L1.5 0zm17.4 5.3H5.1l.4 4.5h12.9l-.5 5.6-5.9 1.6-5.9-1.6-.3-3.4H3.1l.6 5.8 8.3 2.3 8.3-2.3 1.1-12.5z"/></svg>`
        },
        {
            id: "css3",
            name: "CSS3",
            category: "frontend",
            orbit: "inner",
            angle: 72,
            color: "#1572B6",
            bgColor: "rgba(21, 114, 182, 0.12)",
            borderColor: "rgba(21, 114, 182, 0.35)",
            role: "Responsive layouts with Flexbox and Grid, custom animations, transitions, and modern glassmorphic UI.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2-8.6 2.8-8.6-2.8L1.5 0zm16.9 8.2l.2-2.9H4.9l.7 8.2h11.7l-.4 4.5-4.9 1.3-4.9-1.3-.3-3.3H4.1l.5 5.8 7.4 2.1 7.4-2.1.8-8.9H7.8l-.3-2.9h10.9z"/></svg>`
        },
        {
            id: "javascript",
            name: "JavaScript",
            category: "frontend",
            orbit: "inner",
            angle: 144,
            color: "#F7DF1E",
            bgColor: "rgba(247, 223, 30, 0.12)",
            borderColor: "rgba(247, 223, 30, 0.35)",
            role: "Interactive client-side behavior, DOM manipulation, asynchronous Fetch API, and dynamic application state.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.221.24 1.02-.69 1.486-1.891 1.365-.96-.15-1.41-.6-1.936-1.455l-1.874 1.094c.345.75.765 1.26 1.305 1.62 1.336.9 3.511.87 4.757-.105 1.14-.855 1.502-2.31 1.107-3.69l-.017-.031zm-9.362-7.859h-2.31v6.78c0 1.545-.075 2.115-.555 2.595-.495.495-1.185.6-2.145.45-.63-.105-1.125-.39-1.5-.78l-1.335 1.485c.675.765 1.62 1.2 2.76 1.275 1.35.09 2.55-.315 3.39-1.125.96-.945 1.095-2.22 1.095-4.14v-6.54h-1.001z"/></svg>`
        },
        {
            id: "bootstrap",
            name: "Bootstrap",
            category: "frontend",
            orbit: "inner",
            angle: 216,
            color: "#7952B3",
            bgColor: "rgba(121, 82, 179, 0.12)",
            borderColor: "rgba(121, 82, 179, 0.35)",
            role: "Mobile-first grid system, pre-styled responsive components, rapid prototyping, and modal interfaces.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.87 14.51c-.42.92-1.17 1.48-2.24 1.69v.03c1.23.23 2.05.86 2.45 1.88.42 1.03.36 2.31-.19 3.37-.58 1.11-1.52 1.89-2.83 2.34-1.29.43-2.88.54-4.76.54H3.8V6.64h4.48c1.78 0 3.28.1 4.49.52 1.2.42 2.08 1.14 2.62 2.16.53 1.02.58 2.22.15 3.19-.28.64-.69 1.17-1.23 1.57.19.14.38.28.56.43zm-4.32-4.99c0-.62-.21-1.05-.62-1.3-.4-.25-1.06-.38-1.97-.38H6.55v3.42h2.41c.88 0 1.54-.14 1.95-.41.42-.28.64-.73.64-1.33zm.45 6.43c0-.75-.24-1.28-.73-1.58-.49-.3-1.27-.45-2.33-.45H6.55v4.13h2.44c1.07 0 1.84-.15 2.32-.46.49-.32.69-.87.69-1.64z"/></svg>`
        },
        {
            id: "jquery",
            name: "jQuery",
            category: "frontend",
            orbit: "inner",
            angle: 288,
            color: "#0769AD",
            bgColor: "rgba(7, 105, 173, 0.12)",
            borderColor: "rgba(7, 105, 173, 0.35)",
            role: "Event-driven scripting, streamlined DOM traversal, asynchronous AJAX requests, and UI animation handling.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.002 0c-4.48 0-8.2 2.766-9.878 6.644 2.24-1.218 4.79-1.42 7.07-.723 2.19.67 4.09 2.215 5.25 4.148 1.16 1.933 1.48 4.298.92 6.47-.56 2.172-1.97 4.032-3.84 5.178 3.5-.785 6.45-3.08 7.96-6.19 1.51-3.11 1.45-6.73-.18-9.8C17.67 2.66 15.01 0 12.002 0zm-2.8 9.355c-1.38.288-2.6.992-3.56 1.98-1.78 1.83-2.33 4.47-1.51 6.89 1.12-1.74 2.87-2.94 4.88-3.41 1.08-.25 2.2-.23 3.25.07-.46-.77-1.07-1.42-1.78-1.92-.68-.48-1.47-.79-2.28-.82z"/></svg>`
        },
        {
            id: "php",
            name: "PHP",
            category: "backend",
            orbit: "outer",
            angle: 36,
            color: "#777BB4",
            bgColor: "rgba(119, 123, 180, 0.12)",
            borderColor: "rgba(119, 123, 180, 0.35)",
            role: "Server-side web logic, session management, secure request handling, and backend business logic.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-7.6 14.8h-1.6l1.7-8h2.6c1.1 0 1.9.2 2.4.7.5.5.7 1.2.5 2.1-.2.9-.6 1.7-1.3 2.2-.7.6-1.7.9-2.9.9h-.8l-.6 2.1zm2.3-3.8h.9c.6 0 1.1-.1 1.4-.4.3-.3.5-.7.6-1.2.1-.5.1-.8-.1-1.1-.2-.2-.6-.4-1.1-.4h-1.1l-.6 3.1zm6.7 3.8h-1.6l1.7-8h1.6l-.7 3.2h2.6c1.1 0 1.9.2 2.4.7.5.5.7 1.2.5 2.1-.2.9-.6 1.7-1.3 2.2-.7.6-1.7.9-2.9.9h-.8l-.6 2.1zm2.3-3.8h.9c.6 0 1.1-.1 1.4-.4.3-.3.5-.7.6-1.2.1-.5.1-.8-.1-1.1-.2-.2-.6-.4-1.1-.4h-1.1l-.6 3.1zm7.1 3.8h-1.6l.7-3.3h-2.1l-.3 1.5h-1.6l1.7-8h1.6l-.7 3.3h2.1l.7-3.3h1.6l-1.7 8z"/></svg>`
        },
        {
            id: "laravel",
            name: "Laravel",
            category: "backend",
            orbit: "outer",
            angle: 108,
            color: "#FF2D20",
            bgColor: "rgba(255, 45, 32, 0.12)",
            borderColor: "rgba(255, 45, 32, 0.35)",
            role: "MVC architecture, Eloquent ORM, Blade templating, authentication scaffolding, routing, and migration pipelines.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.7 5.2l4.3-2.5 4.3 2.5v5l-4.3 2.5-4.3-2.5v-5zm0 8.6l4.3 2.5 4.3-2.5v-5l-4.3 2.5-4.3-2.5v5zm12.3-6.2l-3.3-1.9v2.5l2 1.1-6.7 3.9-6.7-3.9 2-1.1V5.7L4 7.6v8.8l8 4.6 8-4.6V7.6z"/></svg>`
        },
        {
            id: "mysql",
            name: "MySQL",
            category: "database",
            orbit: "outer",
            angle: 180,
            color: "#4479A1",
            bgColor: "rgba(68, 121, 161, 0.12)",
            borderColor: "rgba(68, 121, 161, 0.35)",
            role: "Relational database schema design, normalized tables, indexed queries, foreign keys, and ACID data integrity.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.54 10.66c-.16-.36-.45-.6-.82-.72-.37-.12-.86-.14-1.46-.08-1.07.1-2.27.65-3.4 1.54-.7.55-1.37 1.25-1.95 2.05-.59.81-1.04 1.71-1.33 2.66-.29.96-.38 1.93-.24 2.89.14.95.53 1.84 1.13 2.62.6.78 1.39 1.41 2.31 1.83.92.42 1.94.62 2.99.57 1.05-.05 2.06-.34 2.97-.84.92-.51 1.68-1.22 2.22-2.08.54-.86.84-1.85.86-2.9-.02-1.05-.27-2.09-.72-3.05-.46-.96-1.12-1.8-1.94-2.48l-.62-.51zm-3.02 9.06c-.66.03-1.3-.1-1.87-.37-.58-.27-1.07-.66-1.44-1.15-.38-.49-.62-1.05-.71-1.65-.09-.6-.03-1.2.16-1.8.19-.6.5-1.16.89-1.67.4-.5.88-.95 1.42-1.31.54-.36 1.11-.64 1.7-.8.59-.16 1.15-.2 1.67-.11.53.08.97.29 1.32.61.35.32.58.74.68 1.23.11.49.07 1.02-.12 1.57-.19.55-.51 1.1-.94 1.61-.43.51-.95.96-1.54 1.32-.59.37-1.24.63-1.9.76-.11.02-.21.03-.32.03v.27z"/></svg>`
        },
        {
            id: "xampp",
            name: "XAMPP",
            category: "database",
            orbit: "outer",
            angle: 252,
            color: "#FB7A24",
            bgColor: "rgba(251, 122, 36, 0.12)",
            borderColor: "rgba(251, 122, 36, 0.35)",
            role: "Local server testing, Apache web service orchestrations, phpMyAdmin database administration, and offline environments.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.005 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12.005 12 6.627 0 11.995-5.373 11.995-12 0-6.627-5.368-12-11.995-12zm-3.8 6.4h2.2l1.4 2.8 1.4-2.8h2.2l-2.5 4.4 2.6 4.8h-2.2l-1.5-3-1.5 3h-2.2l2.6-4.8-2.5-4.4zm7.6 9.2h-7.6v-1.6h7.6v1.6zm0-8.4h-7.6V5.6h7.6v1.6z"/></svg>`
        },
        {
            id: "github",
            name: "GitHub",
            category: "tools",
            orbit: "outer",
            angle: 324,
            color: "#F8FAFC",
            bgColor: "rgba(248, 250, 252, 0.10)",
            borderColor: "rgba(248, 250, 252, 0.35)",
            role: "Distributed Git version tracking, repository management, branch workflows, collaborative merges, and releases.",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
        }
    ],

    // Featured Projects
    projects: [
        {
            id: "lawyer-portal",
            title: "Lawyer Appointment Portal",
            category: "Full Stack Web Application",
            subtitle: "Digital Legal Consultation & Booking Ecosystem",
            description: "A comprehensive legal consultation and appointment booking ecosystem built with Laravel, PHP, and MySQL. Features verified attorney profiles, practice area filtering, dynamic appointment scheduling, client consultation management, and responsive interfaces.",
            features: [
                "Client & attorney authentication with dedicated role-based portals",
                "Practice area and location-based discovery search & filtering",
                "Dynamic appointment scheduling with real-time slot booking",
                "Comprehensive lawyer profiles with qualifications, credentials & reviews",
                "Client consultation tracking & automated status notifications",
                "Robust relational MySQL schema with foreign keys & transaction safety"
            ],
            technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "HTML5"],
            image: "assets/images/lawyer-portal.png",
            displayUrl: "github.com/maaz2008/lawyers_website",
            githubUrl: "https://github.com/maaz2008/lawyers_website.git",
            liveUrl: "",
            featured: true
        },
        {
            id: "fanhub-portal",
            title: "Fan Hub Plus — Fandom Universe Portal",
            category: "Full Stack Web Application",
            subtitle: "Unified Portal for Fandom Communities & Media Archives",
            description: "An end-to-end full stack web application uniting global fandom communities across 8 core categories: Anime, Gaming, Movies, TV Shows, K-Pop, Comics, Manga, and Cosplay. Features role-based access control, community content publishing, multimedia streaming archives, and analytics.",
            features: [
                "Multiverse taxonomy spanning 8 core fandom categories with 14,000+ curated records",
                "Multi-tier role-based access control (Admin, Verified Member, Standard User, Applicant)",
                "Community content publishing system with lore editor and media attachments",
                "Interactive convention calendar with location tracking & event alerts",
                "Real-time fandom search and tag-based discovery engine",
                "Robust Laravel backend with relational MySQL schema and Blade/Tailwind UI"
            ],
            technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Blade"],
            image: "assets/images/fanhub.png",
            displayUrl: "github.com/khizarahmed2312/fanhub",
            githubUrl: "https://github.com/khizarahmed2312/fanhub",
            liveUrl: "",
            featured: true
        },
        {
            id: "focus-flow",
            title: "FocusFlow — Deep Work & Productivity App",
            category: "Frontend Productivity Application",
            subtitle: "Deep Focus Session Timer & Habit Intelligence System",
            description: "A high-performance productivity and deep work application engineered to eliminate distractions and accelerate daily output. Features interactive Pomodoro timers, habit streak analytics, AI Focus coaching with FlowBot, ambient audio soundscapes, and session metrics.",
            features: [
                "Customizable Pomodoro focus timer with visual progress arc and audio alerts",
                "AI Focus Coach (FlowBot) providing real-time cognitive pacing and break guidance",
                "Habit streak tracker with consecutive days metrics and calendar heatmaps",
                "Curated ambient soundscapes (rain, cafe, binaural beats) for deep work immersion",
                "Interactive task management boards with status toggles and priority tagging",
                "Lightweight vanilla JavaScript & modern CSS architecture with dark gold aesthetic"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "jQuery", "Web Audio API"],
            image: "assets/images/focus-flow.png",
            displayUrl: "github.com/khizarahmed2312/Focus-Flow",
            githubUrl: "https://github.com/khizarahmed2312/Focus-Flow",
            liveUrl: "",
            featured: true
        }
    ],

    // Professional Services
    services: [
        {
            id: "responsive-web",
            number: "01",
            title: "Responsive Website Development",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
            description: "Building modern, fluid websites engineered to look stunning and function seamlessly across smartphones, tablets, laptops, and ultra-wide desktops."
        },
        {
            id: "frontend-ui",
            number: "02",
            title: "Frontend UI Development",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
            description: "Crafting interactive user interfaces with semantic HTML5, modern CSS3 animations, glassmorphic styling, and clean vanilla JavaScript."
        },
        {
            id: "laravel-backend",
            number: "03",
            title: "Laravel Backend Development",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
            description: "Implementing structured backend applications with PHP and Laravel, utilizing MVC architecture, secure routing, authentication, and RESTful APIs."
        },
        {
            id: "mysql-db",
            number: "04",
            title: "MySQL Database Integration",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
            description: "Designing normalized database schemas, building relational models, writing optimized queries, and connecting backends with reliable CRUD operations."
        },
        {
            id: "maintenance",
            number: "05",
            title: "Website Maintenance & Optimization",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
            description: "Refining existing codebases, fixing layout inconsistencies, improving page load speeds, updating assets, and keeping websites updated."
        }
    ],

    // Development Workflow
    workflow: [
        {
            step: "01",
            title: "Understand the Requirements",
            tagline: "Discovery & Scope",
            description: "Analyzing the project objectives, target audience, technical specifications, and key features to establish clear development milestones."
        },
        {
            step: "02",
            title: "Plan the Interface & Structure",
            tagline: "Architecture & Wireframes",
            description: "Drafting layout wireframes, defining visual hierarchy, structuring database schemas, and setting up clean project file architectures."
        },
        {
            step: "03",
            title: "Develop the Frontend",
            tagline: "Interactive UI & Polish",
            description: "Writing semantic HTML, crafting responsive CSS grids/flexboxes, implementing smooth animations, and binding interactive JavaScript events."
        },
        {
            step: "04",
            title: "Implement Backend & Database",
            tagline: "Logic & Data Integrity",
            description: "Building robust PHP/Laravel server controllers, configuring Eloquent models, creating MySQL migrations, and connecting API endpoints."
        },
        {
            step: "05",
            title: "Test, Optimize & Refine",
            tagline: "QA & Deployment",
            description: "Conducting cross-browser testing, verifying mobile responsiveness, validating forms, tuning performance, and preparing for deployment."
        }
    ]
};
