export const projectsData = [
  {
    id: "bright-tutor",
    title: "Bright Tutor — Educational Tuition Booking Platform",
    category: "Client / Production",
    featured: true,
    shortDescription: "A comprehensive tuition ecosystem connecting students, guardians, tutors, and administrators with role-based onboarding and real-time scheduling.",
    problem: "Finding qualified tutors and managing tuition agreements in Bangladesh traditionally relies on fragmented social media groups or word of mouth, leading to safety concerns, missed payments, and lack of verified qualifications.",
    solution: "Built a centralized, production-grade web platform with isolated onboarding workflows for guardians and tutors, structured tutor profile verification, course/subject matching, and administrator oversight.",
    contribution: "Co-engineered core Next.js & React frontend workflows, integrated oRPC communication, configured PLpgSQL relational database logic, and developed role-based Google authentication flows.",
    technologies: ["Next.js", "React", "TypeScript", "oRPC", "Tailwind CSS", "PLpgSQL", "PostgreSQL", "Docker", "Rust SMS Service"],
    features: [
      "Role-based onboarding with persisted Google authentication",
      "Comprehensive tutor registration flow with document upload",
      "Type-safe end-to-end client-server RPC communication (oRPC)",
      "Automated SMS alerts architecture via Rust backend service",
      "Administrative dashboard for approval and tutor lifecycle control"
    ],
    liveUrl: "https://brighteducations.com/",
    githubUrl: "https://github.com/RobiulSahib/Bright_Tutor",
    demoVideoUrl: null
  },
  {
    id: "smart-restaurant-management",
    title: "RestoFlow — Smart Restaurant Management & POS",
    category: "Academic / Architecture",
    featured: true,
    shortDescription: "Full-stack digital dining system with QR table ordering, live kitchen broadcasts via WebSockets, bilingual menus, and integrated POS billing.",
    problem: "Traditional restaurant operations suffer from manual order errors, slow communication between waitstaff and kitchen stations, and chaotic bill splitting during peak rush hours.",
    solution: "Designed a real-time reactive restaurant architecture (RestoFlow) that automates the entire dining cycle: contactless QR ordering, live progress indicators, instantaneous kitchen display broadcasts, and flexible POS settlement.",
    contribution: "Designed and built the full-stack architecture for CSE471 Software Architecture course, implementing WebSocket real-time event distribution, MongoDB document schemas, bilingual menu filtering, and the complete POS billing engine.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "WebSockets", "MongoDB", "Mongoose", "Cloudinary"],
    features: [
      "Contactless QR table detection that tailors customer views directly to their seat",
      "Instant bilingual language toggle (English & Bangla) across all menus and labels",
      "Real-time WebSocket sync broadcasting live order states across customer, waiter, and kitchen terminals",
      "Role-Based Access Control (RBAC) with PIN-protected authentication for waitstaff, kitchen chefs, and managers",
      "Integrated POS engine featuring recursive bill splitting (by item or equal share) and promotional discount codes",
      "Dietary taste preference engine filtering vegan, halal, gluten-free, and spiciness levels"
    ],
    liveUrl: "https://smart-restaurant-management-system-three.vercel.app/",
    githubUrl: "https://github.com/RobiulSahib/Smart-Restaurant-Management-System",
    demoVideoUrl: "https://youtu.be/z9GmCX00T9g?si=jnJG_80Xr-8hMu_P"
  },
  {
    id: "selfshop-ecommerce",
    title: "SelfShop — Commercial E-Commerce Platform",
    category: "Client / Production",
    featured: true,
    shortDescription: "Full-fledged commercial e-commerce storefront in Bangladesh supporting local online merchants and customers.",
    problem: "Local merchants needed an accessible, fast-loading e-commerce platform with low server overhead and reliable payment and order handling.",
    solution: "Engineered a complete e-commerce solution using PHP and MySQL, providing product categorization, secure shopping cart workflows, and responsive client navigation.",
    contribution: "Engineered administrative vendor and inventory management modules, order processing scripts, and responsive customer-facing shopping views.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    features: [
      "Dynamic product catalog and multi-level category hierarchy",
      "Cart management, automated shipping calculation, and real-time order tracking",
      "Administrative vendor portal for product additions and stock replenishment",
      "Optimized for high-speed page loading across mobile devices"
    ],
    liveUrl: "https://selfshop.com.bd/",
    githubUrl: "https://github.com/RobiulSahib/Selfshop",
    demoVideoUrl: null
  },
  {
    id: "snowboard-rush",
    title: "Snowboard Rush — 3D Downhill Arcade Game",
    category: "Academic / Graphics",
    featured: true,
    shortDescription: "Fast-paced 3D endless runner where a snowboarder descends an icy mountain, navigating dynamic obstacles through atmospheric fog with jump and spin mechanics.",
    problem: "Creating an engaging 3D downhill endless runner with procedural terrain, dynamic obstacle collision, and atmospheric fog from scratch in OpenGL without pre-built physics engines.",
    solution: "Developed a custom 3D graphics rendering engine in Python using PyOpenGL for the CSE423 Computer Graphics course, incorporating perspective camera transformations, continuous collision bounding, and particle-like fog.",
    contribution: "Architected 3D coordinate transformations, procedural obstacle generator (trees, breakable trees, boulders, flying birds), jump & rotational spin mechanics, atmospheric fog rendering, score multipliers, and a multi-life resurrection system.",
    technologies: ["Python", "PyOpenGL", "OpenGL 3D", "Mathematics for 3D Graphics"],
    features: [
      "Dynamic 3D downhill perspective camera tracking the descending snowboarder",
      "Atmospheric weather engine featuring volumetric fog and variable visibility",
      "Procedural obstacle spawning: static boulders, evergreen trees, breakable trees, and swooping birds",
      "Responsive aerial acrobatics: jump control, full rotational spins, and landing validation",
      "Collectible power-ups, point-multiplier coins, and extra life resurrection mechanics"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RobiulSahib/3D_enemy_shooting_opengl",
    demoVideoUrl: null
  },
  {
    id: "3d-enemy-shooting",
    title: "3D Enemy Shooting Game — OpenGL",
    category: "Academic / Graphics",
    featured: true,
    shortDescription: "Interactive 3D first/third-person enemy combat and targeting game built with Python and PyOpenGL.",
    problem: "Real-time 3D projectile trajectory computation, multi-entity enemy rendering, and accurate 3D hit-box detection in a purely mathematical OpenGL environment.",
    solution: "Engineered a custom 3D arena shooter with PyOpenGL featuring player perspective controls, projectile physics, animated enemy targets, and real-time hit detection.",
    contribution: "Programmed 3D world projections, camera look-at transformations, projectile ballistic math, enemy tracking behavior, and player health/score states.",
    technologies: ["Python", "PyOpenGL", "3D Math", "Game Loop Architecture"],
    features: [
      "Custom 3D camera controls with real-time yaw/pitch perspective viewing",
      "Dynamic enemy spawning, patrol behavior, and target tracking",
      "Fast 3D ray-cast / bounding-sphere projectile collision detection",
      "Modular game state machine managing rounds, player health, and score tallies"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RobiulSahib/3D_enemy_shooting_opengl",
    demoVideoUrl: null
  },
  {
    id: "bikalpo-wholesale",
    title: "Bikalpo — Wholesale Grocery E-Commerce Platform",
    category: "Client / Production",
    featured: true,
    shortDescription: "Production wholesale grocery e-commerce monorepo platform connecting suppliers with retailers and bulk buyers.",
    problem: "Wholesale grocery distributors manage high-volume catalogs, bulk tier pricing, supply chain tracking, and distinct admin versus merchant checkout journeys.",
    solution: "Built a high-performance Turborepo monorepo with pnpm workspaces and Next.js server components, powering Bikalpo's live grocery wholesale marketplace.",
    contribution: "Co-developed customer authentication flows, order tracking interfaces, administrative order management modules, and shared TypeScript configuration.",
    technologies: ["Turborepo", "Next.js", "TypeScript", "pnpm Workspaces", "React", "Tailwind CSS"],
    features: [
      "Monorepo architecture with Turborepo and pnpm for parallel compilation",
      "Bulk grocery catalog with dynamic tiered pricing and minimum order thresholds",
      "Full order lifecycle: authentication, checkout, order tracking, and administrative order processing",
      "Shared UI components, config packages, and strict TypeScript types across workspaces"
    ],
    liveUrl: "https://bikalpo.com/",
    githubUrl: "https://github.com/RobiulSahib/bikalpo",
    demoVideoUrl: null
  },
  {
    id: "dims-ecommerce",
    title: "DIMS — Digital Inventory & E-Commerce Platform",
    category: "Client / Production",
    featured: false,
    shortDescription: "Production e-commerce and multi-branch inventory tracking application engineered for Rangpur Electro Hub.",
    problem: "Retail electronics distributors face complex stock discrepancies, multiple warehouse locations, untracked customer borrowing, and disjointed financial reconciliation.",
    solution: "Engineered a unified inventory management system coupled with a customer storefront, featuring stock-out triggers, borrower ledger logging, and structured financial reporting.",
    contribution: "Engineered administrative dashboard views, finance reporting Phase 0/1 modules, storefront REST APIs, and responsive mobile-optimized UI layouts.",
    technologies: ["TypeScript", "Next.js", "React", "REST APIs", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    features: [
      "Multi-category electronics product catalog and customer shopping experience",
      "Comprehensive stock-out sales tracking and automated inventory warnings",
      "Borrowing ledger management for corporate and wholesale lending",
      "Phase-structured financial reconciliation and auditing reporting",
      "Dedicated storefront API integration for high-performance browsing"
    ],
    liveUrl: "https://rangpurelectrohub.com/",
    githubUrl: "https://github.com/RobiulSahib/DIMS",
    demoVideoUrl: null
  },
  {
    id: "dineease-reservation",
    title: "DineEase — Restaurant Reservation & Ordering",
    category: "Client / Production",
    featured: false,
    shortDescription: "Full-stack restaurant reservation and digital food ordering system with seat booking and live order management.",
    problem: "Casual and fine-dining restaurants frequently double-book tables or face communication lapses between host stand reservations and kitchen orders.",
    solution: "Created DineEase, a full-stack web application providing customers with seamless table reservation slots and advance food ordering capabilities.",
    contribution: "Built both frontend and backend modules, implementing reservation scheduling endpoints, order state handling, and menu showcases.",
    technologies: ["JavaScript", "Node.js", "Express.js", "HTML5", "CSS3", "REST APIs"],
    features: [
      "Interactive table reservation calendar and time-slot selection",
      "Digital food ordering menu with item categorization and dish customizers",
      "Backend reservation manager preventing double-bookings",
      "Responsive customer interface with confirmation notifications"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RobiulSahib/DineEase_Restaurant_Reservation_Bokking",
    demoVideoUrl: null
  },
  {
    id: "gym-website",
    title: "GymFit — Fitness Showcase & Membership Portal",
    category: "Client / Production",
    featured: false,
    shortDescription: "Full-stack fitness club platform featuring workout program showcases, membership plans, and automated inquiry emails.",
    problem: "Boutique gyms struggle to convert online visitors into members without clear tier comparisons and direct inquiry channels.",
    solution: "Built a responsive gym web portal showcasing trainers, fitness routines, and class schedules, backed by automated email dispatch.",
    contribution: "Developed both frontend views and backend scripts, including the sendEmail.js automated messaging service and responsive layout styling.",
    technologies: ["JavaScript", "Node.js", "HTML5", "CSS3", "Nodemailer / Email Integration"],
    features: [
      "Dynamic training program showcases (strength, cardio, functional training)",
      "Automated membership inquiry transmission via backend email integration",
      "Interactive trainer bios and class timetable scheduling",
      "Mobile-responsive UI with smooth CSS transitions"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RobiulSahib/GYM-WEBSITE",
    demoVideoUrl: null
  },
  {
    id: "rockdale-estate",
    title: "Rockdale Construction & Real Estate",
    category: "Client / Production",
    featured: false,
    shortDescription: "Corporate web portal and property showcase developed for a modern construction and property development company.",
    problem: "Real estate and construction firms require high-fidelity visual presentation of architectural projects alongside structured client lead acquisition and inquiry workflows.",
    solution: "Constructed a responsive, performant full-stack corporate website with fluid interactive transitions, portfolio galleries, and a secure Node.js inquiry backend.",
    contribution: "Developed the complete frontend architecture using React, Vite, GSAP, and styled components, and built the Express & MongoDB backend service.",
    technologies: ["React", "Vite", "GSAP", "Styled Components", "Node.js", "Express.js", "MongoDB Atlas"],
    features: [
      "Modern architectural project gallery with responsive filtering",
      "Interactive property inquiry and lead generation form",
      "Smooth UI transitions powered by GSAP animations",
      "Modular REST backend storing customer inquiries securely in MongoDB Atlas"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RobiulSahib/Rockdale",
    demoVideoUrl: null
  },
  {
    id: "telegram-api-bot",
    title: "Telegram Automated Notification & Command Bot",
    category: "Automation / Utility",
    featured: false,
    shortDescription: "Automated webhook-driven Telegram bot delivering scheduled alerts, command processing, and system notifications.",
    problem: "Teams require lightweight, direct mobile notifications for server alerts and automated operations without opening heavy dashboards.",
    solution: "Created an asynchronous Node.js bot utilizing Telegram's Bot API to dispatch automated event notifications and process custom operator commands.",
    contribution: "Implemented webhook listener endpoints, message parsing logic, and secure environment configuration.",
    technologies: ["JavaScript", "Node.js", "Telegram Bot API", "REST APIs"],
    features: [
      "Asynchronous webhook processing for immediate message response",
      "Command dispatcher for remote queries and health monitoring",
      "Configurable notification channels for automated system alerts"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RobiulSahib/Telegram_API_Bot",
    demoVideoUrl: null
  },
  {
    id: "tic-tac-toe",
    title: "Interactive Tic-Tac-Toe Game",
    category: "Academic / Architecture",
    featured: false,
    shortDescription: "Interactive 2-player turn-based board game built with pure JavaScript featuring 8-pattern win detection and state reset logic.",
    problem: "Demonstrating clean state management, modular turn sequencing, and deterministic algorithmic win/draw evaluation without external frontend libraries.",
    solution: "Implemented an event-driven 2-player web game with dynamic board rendering, automated win-condition checking across all 8 possible row/column/diagonal patterns, and game reset handling.",
    contribution: "Engineered game loop logic, algorithmic win evaluation matrices, cell locking mechanisms upon victory, and responsive UI styling.",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    features: [
      "Algorithmic win detection covering all 8 horizontal, vertical, and diagonal patterns",
      "Dynamic turn alternating between Player X and Player O",
      "Automatic board locking upon win/draw with celebratory status notifications",
      "Instant restart and new game state resets"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RobiulSahib/Tic-Tac-Toe",
    demoVideoUrl: null
  }
];
