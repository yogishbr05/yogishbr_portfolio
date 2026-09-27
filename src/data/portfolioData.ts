import { Project, SkillItem, ExperienceItem, EducationItem, ServiceItem } from '../types/portfolio';

// Import local generated project and portrait images
import developerPortrait from '../assets/images/yogish_br_portrait_1790501199043.jpg';
import projectGroceryStore from '../assets/images/project_grocery_store_1790485832750.jpg';
import projectFoodDelivery from '../assets/images/project_food_delivery_1790485844929.jpg';
import projectCarRental from '../assets/images/project_car_rental_1790485857306.jpg';

export const personalInfo = {
  name: 'Yogish B.R.',
  title: 'Python Full Stack Developer & Front-End Engineer',
  tagline: 'Building responsive web interfaces, robust Python backend services, and scalable database architectures.',
  email: 'yogishbr2004@gmail.com',
  phone: '+91-7204558697',
  location: 'Bengaluru, Karnataka, India',
  status: 'Open to Full-Time & Internship Opportunities',
  linkedin: 'https://linkedin.com/in/yogishbr',
  github: 'https://github.com/yogishbr',
  portraitImage: developerPortrait,
  bio: 'Aspiring Software Engineer and MCA graduate with strong foundations in Python, modern HTML5, CSS3, JavaScript, and MySQL. Experienced in developing 3-tier full-stack applications with Flask backends, intuitive user interfaces, and structured relational databases. Passionate about object-oriented programming, clean code architecture, and continuous learning.',
  stats: [
    { label: 'MCA & BCA CGPA', value: '8.56 / 8.71' },
    { label: 'Core Projects Built', value: '4+' },
    { label: 'Full Stack Training', value: '6 Months' },
    { label: 'Code Quality Focus', value: '100%' }
  ]
};

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: 'HTML5 & Semantic Markup',
    category: 'frontend',
    proficiency: 95,
    experience: 'Core Foundation',
    highlight: 'Accessible structure, semantic elements, SEO-optimized DOM architecture'
  },
  {
    name: 'CSS3 & Modern Layouts',
    category: 'frontend',
    proficiency: 92,
    experience: 'Core Foundation',
    highlight: 'Flexbox, CSS Grid, custom keyframe animations, glassmorphism, responsive media queries'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    proficiency: 85,
    experience: 'Application Logic',
    highlight: 'Async/await, DOM manipulation, form validation, fetch API, event-driven programming'
  },
  {
    name: 'Bootstrap 5',
    category: 'frontend',
    proficiency: 90,
    experience: 'UI Framework',
    highlight: 'Rapid responsive layouts, custom utility overrides, grid systems, modal components'
  },
  {
    name: 'React.js',
    category: 'frontend',
    proficiency: 82,
    experience: 'Component UI',
    highlight: 'Functional components, hooks (useState, useEffect), state management, dynamic rendering'
  },

  // Backend
  {
    name: 'Python',
    category: 'backend',
    proficiency: 90,
    experience: 'Core Language',
    highlight: 'Object-Oriented Programming (OOP), modular architecture, data structures, algorithms'
  },
  {
    name: 'Flask Web Framework',
    category: 'backend',
    proficiency: 85,
    experience: 'Backend Services',
    highlight: 'RESTful API routing, Jinja2 templating, session handling, request/response lifecycle'
  },
  {
    name: 'Object-Oriented Design',
    category: 'backend',
    proficiency: 88,
    experience: 'Software Architecture',
    highlight: 'Encapsulation, inheritance, polymorphism, design patterns, clean code principles'
  },

  // Database
  {
    name: 'MySQL & Relational DBs',
    category: 'database',
    proficiency: 88,
    experience: 'Data Persistence',
    highlight: 'Schema normalization, complex queries, multi-table JOINs, indexing, foreign key constraints'
  },
  {
    name: 'SQL (Structured Query Language)',
    category: 'database',
    proficiency: 90,
    experience: 'Query Design',
    highlight: 'CRUD operations, stored procedures, data integrity constraints, aggregation functions'
  },

  // Developer Tools & Workflow
  {
    name: 'Git & GitHub',
    category: 'tools',
    proficiency: 90,
    experience: 'Version Control',
    highlight: 'Branching workflows, commits, pull requests, merge conflict resolution, repository management'
  },
  {
    name: 'VS Code & Development Environments',
    category: 'tools',
    proficiency: 92,
    experience: 'Developer Tools',
    highlight: 'Extensions, linting, integrated terminal, debugger configuration, workspace productivity'
  },
  {
    name: 'MS Excel & Data Documentation',
    category: 'tools',
    proficiency: 85,
    experience: 'Data Management',
    highlight: 'Data spreadsheets, project documentation, tabular analysis, inventory records'
  }
];

export const projectsData: Project[] = [
  {
    id: 'grocery-store-management',
    title: 'Grocery Store Management System',
    category: 'Full Stack',
    role: 'Full Stack Engineer & Database Architect',
    summary: 'A robust 3-tier web application featuring a Python Flask backend, MySQL relational database, and interactive frontend interface for store operations.',
    description: 'Developed a comprehensive 3-tier enterprise management system enabling grocery shop owners to track product inventory levels, manage supplier catalogs, record point-of-sale customer orders, and generate analytical revenue summaries. Engineered server-side routing with Python Flask, implemented secure CRUD operations against MySQL, and designed an intuitive dashboard interface using HTML5, CSS3, and JavaScript.',
    technologies: ['Python', 'Flask', 'MySQL', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'Bootstrap'],
    image: projectGroceryStore,
    architecture: [
      'Presentation Layer: Responsive dynamic HTML5/CSS3/JS UI with real-time stock indicators',
      'Business Logic Layer: Python Flask application handling routing, input sanitization, and transaction logic',
      'Data Layer: Normalized MySQL relational database managing products, categories, orders, and suppliers'
    ],
    keyFeatures: [
      'Real-time inventory tracking with low-stock warnings and unit categorization',
      'Dynamic order checkout calculator with automated invoice generation',
      'Normalized multi-table relational schema with ACID-compliant transactions',
      'Secure CRUD operations for products, customers, and sales logs'
    ],
    githubUrl: 'https://github.com/yogishbr/grocery-store-management-system',
    demoUrl: '#demo-grocery',
    liveInteractiveType: 'grocery'
  },
  {
    id: 'door-delight-food-ordering',
    title: 'Door Delight – Food Ordering Platform',
    category: 'Full Stack',
    role: 'Front-End & Backend Developer',
    summary: 'A modern food ordering web platform featuring dynamic food catalogs, category filtering, cart management, and order checkout flows.',
    description: 'Engineered a modern consumer-facing food delivery platform named Door Delight. Built with responsive layout principles, it presents curated food menus, dynamic price calculations, nutritional details, and seamless order progression. Connected frontend interfaces with Python database operations to store customer orders, delivery addresses, and user profiles.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'MySQL', 'Bootstrap'],
    image: projectFoodDelivery,
    architecture: [
      'Interactive UI: Grid-based responsive food cards, sticky cart summaries, and drawer checkout',
      'Backend Logic: Python backend managing dish inventories, discounts, and order statuses',
      'Database Storage: Structured relational tables for customer records and order histories'
    ],
    keyFeatures: [
      'Interactive culinary category filter (All, Continental, Indian, Desserts, Beverages)',
      'Live shopping cart with real-time total computation, coupon code logic, and tax calculation',
      'User-friendly login and registration authentication workflow',
      'Responsive design adapting flawlessly across mobile phones, tablets, and 4K desktops'
    ],
    githubUrl: 'https://github.com/yogishbr/door-delight-food-ordering',
    demoUrl: '#demo-food',
    liveInteractiveType: 'food'
  },
  {
    id: 'car-rental-management',
    title: 'Car Rental Management System',
    category: 'Python & DB',
    role: 'Full Stack Developer',
    summary: 'An automated vehicle rental portal with fleet cataloging, booking date calculation, customer records, and SQL reservation management.',
    description: 'Created a specialized vehicle rental platform that manages vehicle inventories, availability dates, daily hire rates, and customer agreements. Implemented complex SQL queries to prevent overlapping reservations, generate billing statements based on rental duration, and categorize vehicles across SUV, Sedan, Luxury, and Electric tiers.',
    technologies: ['Python', 'SQL', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    image: projectCarRental,
    architecture: [
      'Customer Portal: Vehicle search, filter by transmission & fuel type, rental duration estimator',
      'Reservation Engine: Python validation algorithms preventing double-booking of active fleet',
      'Relational Database: Comprehensive SQL schema linking customers, cars, bookings, and payments'
    ],
    keyFeatures: [
      'Interactive fleet explorer with specifications (HP, seating, fuel type, transmission)',
      'Date-based pricing calculator estimating total cost including deposit and taxes',
      'SQL database schema with relational integrity and status triggers',
      'Customer profile management and past booking history tracker'
    ],
    githubUrl: 'https://github.com/yogishbr/car-rental-management-system',
    demoUrl: '#demo-rental',
    liveInteractiveType: 'rental'
  },
  {
    id: 'auth-frontend-suite',
    title: 'Interactive Authentication & UI Suite',
    category: 'Front-End',
    role: 'Front-End Engineer',
    summary: 'A collection of pixel-perfect, accessible login, registration, and dashboard UI components with client-side validation.',
    description: 'Designed and implemented an enterprise-grade front-end design suite featuring responsive authentication pages, interactive forms, real-time client-side input validation, password strength meters, and glassmorphic modal systems. Built with clean semantic HTML5 and cutting-edge CSS3 styling.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap 5', 'Responsive Design'],
    image: projectFoodDelivery,
    architecture: [
      'Modular CSS architecture using modern Flexbox and CSS Grid frameworks',
      'JavaScript regex validation for email formats, strong passwords, and phone numbers',
      'WCAG AA accessible focus rings, keyboard tab navigation, and ARIA labels'
    ],
    keyFeatures: [
      'Instant client-side feedback on field validation with clear error messaging',
      'Toggleable password visibility and dynamic strength analysis meter',
      'Ultra-responsive mobile navigation drawer and touch-friendly controls',
      'Zero layout shift (CLS) with smooth transitions and subtle CSS keyframes'
    ],
    githubUrl: 'https://github.com/yogishbr/responsive-web-projects',
    demoUrl: '#demo-auth'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'pentagon-space-internship',
    role: 'Python Development Intern',
    company: 'Pentagon Space',
    location: 'Bengaluru, India',
    period: '2024 (6 Months Duration)',
    duration: '6 Months',
    type: 'Internship / Full Stack Training',
    description: 'Gained intensive hands-on experience in full-stack web engineering using Python, HTML5, CSS3, JavaScript, and SQL through real-world software development modules.',
    achievements: [
      'Engineered responsive, user-friendly web interfaces adhering to modern HTML5 semantic guidelines and CSS3 standards.',
      'Implemented server-side application logic and RESTful endpoints using Python and Flask.',
      'Designed and queried MySQL relational databases, executing complex multi-table joins and CRUD transactions.',
      'Constructed robust form validation, dynamic data binding, and asynchronous request handling for business workflows.',
      'Strengthened object-oriented programming (OOP) principles and collaborative Git/GitHub version control workflows.'
    ],
    technologies: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'SQL', 'MySQL', 'Flask', 'Git']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'mca-degree',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Jain College, Bengaluru City University',
    university: 'Bengaluru City University',
    location: 'Bengaluru, Karnataka',
    year: 'Graduation: 2026',
    score: '8.56',
    scoreType: 'CGPA',
    highlights: [
      'Specialized coursework in Advanced Python, Web Architectures, Database Management Systems (DBMS), and Software Engineering.',
      'Led academic project teams building 3-tier web applications and practical client-server implementations.',
      'Maintained consistent high academic standing with an outstanding 8.56 CGPA.'
    ]
  },
  {
    id: 'bca-degree',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Seshadripuram College, Tumkur',
    university: 'Tumkur City University',
    location: 'Tumkur, Karnataka',
    year: 'Graduation: 2024',
    score: '8.71',
    scoreType: 'CGPA',
    highlights: [
      'Graduated with honors and an exceptional CGPA of 8.71.',
      'Rigorous foundation in Object-Oriented Programming, Data Structures, Relational Databases, and Web Development.',
      'Active participant in technical symposiums, coding challenges, and web design competitions.'
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'frontend-dev',
    title: 'Front-End Development',
    description: 'Crafting responsive, high-performance user interfaces using HTML5, CSS3, JavaScript, Bootstrap, and React with smooth animations and intuitive UX.',
    deliverables: [
      'Mobile-first responsive web design',
      'Pixel-perfect glassmorphism & gradient themes',
      'Interactive single page application (SPA) components',
      'Accessible & cross-browser compatible layouts'
    ],
    icon: 'layout'
  },
  {
    id: 'python-dev',
    title: 'Python & Backend Engineering',
    description: 'Developing maintainable, scalable backend logic, RESTful APIs, and server-side operations utilizing Python and Flask frameworks with clean OOP design.',
    deliverables: [
      'Modular Python backend architecture',
      'REST API design and integration',
      'Object-Oriented Programming (OOP) refactoring',
      'Business logic validation & automated tests'
    ],
    icon: 'server'
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Web Development',
    description: 'Connecting intuitive user interfaces with robust backend APIs and secure relational database schemas in cohesive 3-tier web applications.',
    deliverables: [
      '3-Tier application planning & implementation',
      'CRUD data flows and async state management',
      'Secure user authentication & session management',
      'End-to-end integration and debugging'
    ],
    icon: 'layers'
  },
  {
    id: 'database-dev',
    title: 'Database Design & SQL Optimization',
    description: 'Architecting normalized relational database models, writing performant SQL queries, and ensuring data integrity across application transactions.',
    deliverables: [
      'Relational schema modeling (1NF, 2NF, 3NF)',
      'Complex SQL joins, subqueries, and views',
      'Data indexing and query optimization',
      'CRUD procedure scripts and data migration'
    ],
    icon: 'database'
  },
  {
    id: 'api-web-solutions',
    title: 'API Integration & Web Solutions',
    description: 'Developing modular client-server architectures, integrating third-party APIs, and ensuring responsive cross-browser compatibility.',
    deliverables: [
      'REST API design, testing & JSON data integration',
      'Structured Git repository management & collaboration',
      'Cross-browser and mobile responsive optimization',
      'Clean modular frontend-to-backend data flows'
    ],
    icon: 'terminal'
  }
];

export const certificationsData = [
  {
    title: 'Python Full Stack Development Certification',
    issuer: 'Pentagon Space & Industry Standards',
    year: '2026',
    description: 'Comprehensive certification covering full-stack web development with Python, Flask, HTML5, CSS3, JavaScript, relational MySQL database architecture, and object-oriented programming.',
    badge: 'Verified Credential'
  }
];
