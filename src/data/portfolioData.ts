import {
  PersonalInfo,
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Aakash Singh',
  title: 'Full Stack Developer | MERN Stack',
  secondaryTitle: 'MCA Student',
  tagline:
    'Building scalable, secure, and user-focused web applications with modern full-stack technologies.',
  about: `I’m an MCA student and aspiring Full Stack Developer with a strong interest in building modern, scalable, and secure web applications. I work primarily with JavaScript, React, Node.js, Express.js, and MongoDB, and have hands-on experience developing full-stack applications, RESTful APIs, authentication systems, and database-driven solutions.

I enjoy turning ideas into functional products and continuously improving my skills through real-world projects and problem-solving. Alongside full-stack development, I’m also exploring Data Structures & Algorithms, System Design, Networking, and Cybersecurity to build a strong foundation as a software developer.

My goal is to contribute to real-world software projects, learn from experienced developers, and grow into a highly skilled and reliable Full Stack Developer.`,
  location: 'Haridwar, Uttarakhand, India',
  email: 'aakashsinghtech9@gmail.com',
  phone: '9411588454',
  phoneDisplay: '+91 9411588454',
  github: 'https://github.com/aakash15singh2900-svg',
  linkedin: 'https://www.linkedin.com/in/aakash-singh-68880b30a/',
  status: 'Open to Full Stack Developer Opportunities & Engineering Collaborations',
};

export const projects: Project[] = [
  {
    id: 'new-era-engineering-solutions',
    number: '01',
    name: 'NEW ERA Engineering Solutions',
    category: 'Full Stack Web Application',
    tagline: 'Full-stack service booking & client management platform',
    description:
      'A full-stack service booking platform for an engineering services business. Customers can explore services, create accounts, book services, manage their bookings, and simulate online payments using Razorpay Test/Sandbox Mode. Administrators can manage services, customers, bookings, and dashboard statistics.',
    overviewDetailed:
      'Designed and engineered as a comprehensive web application tailored for industrial and engineering services. The system delivers an end-to-end customer journey—from service discovery and online booking to simulated payment processing using Razorpay Test Mode/Sandbox environment. On the administrative side, business owners gain a unified dashboard to manage service catalogs, monitor incoming customer bookings, track statistics, and coordinate schedules.',
    problemGoal:
      'Engineering firms frequently struggle with disorganized manual bookings via phone or messaging apps. The goal was to build a secure, automated platform that handles client accounts, booking schedules, online payment flow testing in sandbox mode, cloud-based documentation/images, and administrative oversight in one centralized portal.',
    isFeatured: true,
    hasFrontend: true,
    status: 'Built (Live Demo Coming Soon)',
    technologies: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Axios',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Razorpay (Test Mode)',
      'ImageKit',
      'Nodemailer/Gmail',
    ],
    keyFeatures: [
      'User registration and authentication',
      'Login and logout with secure session handling',
      'Password reset via automated email links',
      'Interactive service catalog with categories',
      'Detailed service specifications and pricing',
      'Online service booking workflow',
      'Customer profile management',
      'Customer booking history and status tracker',
      'Razorpay payment gateway integration (Sandbox / Test Mode)',
      'Comprehensive Admin dashboard',
      'Customer account management for administrators',
      'Service creation, editing, and deletion (CRUD)',
      'Booking status updates and schedule management',
      'Business metrics and dashboard statistics',
      'Fast image uploads and asset hosting via ImageKit',
      'Automated email notifications via Nodemailer / Gmail',
      'Fully responsive, mobile-first design',
    ],
    architectureConcepts: [
      'RESTful APIs',
      'JWT Authentication',
      'Role-Based Authorization (Admin vs Customer)',
      'CRUD Operations',
      'MongoDB Data Modeling',
      'Payment Gateway Integration (Razorpay Test Mode)',
      'Cloud File Uploads',
      'Transactional Email Services',
      'API Integration',
    ],
    githubUrl: null, // Placeholder: user will provide repository
    liveUrl: null, // No public live demo currently hosted
  },
  {
    id: 'authentication-api',
    number: '02',
    name: 'Authentication API',
    category: 'Backend / Authentication',
    tagline: 'Robust enterprise-grade JWT & OTP auth microservice',
    description:
      'A secure Node.js and Express authentication API built with MongoDB, featuring email verification, OTP-based account verification, JWT authentication, refresh-token sessions, and session management.',
    overviewDetailed:
      'A production-oriented backend authentication service architected according to modern web security standards. It replaces vulnerable single-token implementations with a dual-token access/refresh cycle, hardened HTTP-only cookies, cryptographic OTP verification over Gmail API/SMTP, and rigorous MongoDB session tracking with multi-device signout capabilities.',
    problemGoal:
      'Creating scalable, resilient security boundaries for modern web apps requires robust protections against token theft, session hijacking, and unauthorized resource access. This API provides an easily integrated, self-contained authentication and authorization backend microservice.',
    isFeatured: false,
    hasFrontend: false,
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Gmail API',
      'REST API',
    ],
    keyFeatures: [
      'Six-digit OTP email verification with TTL expiry',
      'JWT-based stateless authentication for fast verification',
      'Short-lived access tokens (15m expiration)',
      'Secure refresh-token rotation and persistent sessions',
      'HTTP-only, SameSite secure refresh-token cookies',
      'Protected API routes with custom Express middleware',
      'Current-user profile and session introspection endpoint',
      'Single-session secure logout',
      'Logout-all devices functionality',
      'Active session database management',
      'Granular middleware-based route protection & error handling',
    ],
    architectureConcepts: [
      'RESTful API',
      'Authentication & Authorization',
      'Access Token + Refresh Token Architecture',
      'OTP Verification Pipeline',
      'Session Management & Revocation',
      'MongoDB Data Modeling & Indexing',
      'Custom Express Middleware',
      'API Security & Sanitization',
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 'railway-management-system',
    number: '03',
    name: 'Railway Management System',
    category: 'Python Application',
    status: 'In Development',
    tagline: 'Modular train transit, reservation & inventory system',
    description:
      'A Python-based railway management system designed to simulate core railway operations such as train management, passenger booking, ticket cancellation, seat availability, and journey management.',
    overviewDetailed:
      'Currently in active development, this software engineering project models real-world transportation logistics. It leverages Object-Oriented Programming (OOP) paradigms and core computer science data structures to manage train schedules, simulate dynamic seat allocation across coaches, handle passenger record persistence, and compute PNR tracking.',
    problemGoal:
      'To build an algorithmic, fault-tolerant console application demonstrating clean modular OOP design, persistent file storage, robust input validation, and transaction consistency during concurrent ticket bookings and cancellations.',
    isFeatured: false,
    hasFrontend: false,
    technologies: [
      'Python',
      'Object-Oriented Programming',
      'Data Structures',
      'File Handling',
    ],
    keyFeatures: [
      'Train schedule & route management',
      'Dynamic train search by station & date',
      'Passenger ticket booking engine',
      'Ticket cancellation with automated refund logic',
      'Real-time seat availability calculation',
      'Passenger record management & history',
      'Unique deterministic PNR generation',
      'Booking records and transaction logs',
      'Data persistence via structured file handling',
      'Comprehensive input validation',
      'Defensive exception handling for edge cases',
      'Modular, extensible architectural design',
    ],
    architectureConcepts: [
      'OOP (Inheritance, Encapsulation, Polymorphism)',
      'Data Structures (Lists, Dictionaries, Queues)',
      'File Handling & Serialization',
      'CRUD Operations',
      'Exception Handling',
      'Modular Programming',
      'Algorithmic Problem Solving',
    ],
    githubUrl: null,
    liveUrl: null,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    categoryKey: 'languages',
    iconName: 'Code2',
    description: 'Foundational programming and core web scripting languages',
    skills: [
      { name: 'JavaScript', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'C', highlight: false },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3', highlight: false },
    ],
  },
  {
    title: 'Frontend Development',
    categoryKey: 'frontend',
    iconName: 'Layout',
    description: 'Modern component-driven UI architecture and responsive design',
    skills: [
      { name: 'React.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Vite', highlight: false },
      { name: 'React Router', highlight: false },
      { name: 'Axios', highlight: false },
      { name: 'Responsive Web Design', highlight: true },
    ],
  },
  {
    title: 'Backend Development',
    categoryKey: 'backend',
    iconName: 'Server',
    description: 'Scalable server-side logic, API design, and security middleware',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'RESTful APIs', highlight: true },
      { name: 'JWT Authentication', highlight: true },
      { name: 'Access & Refresh Tokens', highlight: true },
      { name: 'OTP Verification', highlight: false },
      { name: 'Middleware & API Security', highlight: true },
    ],
  },
  {
    title: 'Databases',
    categoryKey: 'databases',
    iconName: 'Database',
    description: 'NoSQL document modeling, indexing, and schema validation',
    skills: [
      { name: 'MongoDB', highlight: true },
      { name: 'Mongoose', highlight: true },
    ],
  },
  {
    title: 'Tools & Technologies',
    categoryKey: 'tools',
    iconName: 'Wrench',
    description: 'Version control, API testing, IDE, and media hosting services',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'Postman', highlight: true },
      { name: 'VS Code', highlight: false },
      { name: 'ImageKit', highlight: false },
      { name: 'Cloudinary', highlight: false },
    ],
  },
];

export const currentlyLearningSkills = [
  {
    name: 'Data Structures & Algorithms',
    focus: 'Mastering arrays, linked lists, trees, graphs, and dynamic programming for optimal algorithmic problem-solving.',
    status: 'In Progress',
  },
  {
    name: 'System Design',
    focus: 'Designing scalable architectures, caching strategies, rate limiting, and distributed system trade-offs.',
    status: 'In Progress',
  },
  {
    name: 'Networking',
    focus: 'TCP/IP, HTTP/HTTPS protocols, DNS resolution, WebSockets, and low-latency client-server communication.',
    status: 'In Progress',
  },
  {
    name: 'Cybersecurity',
    focus: 'Application security best practices, OWASP Top 10 vulnerabilities, secure headers, and encryption standards.',
    status: 'In Progress',
  },
  {
    name: 'Generative AI',
    focus: 'Prompt engineering, LLM integration, embeddings, and building AI-enhanced developer tooling.',
    status: 'In Progress',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-new-era',
    role: 'Freelance Full Stack Developer',
    client: 'NEW ERA Engineering Solutions',
    type: 'Client Project',
    duration: 'March 2026 – April 2026',
    description:
      'Developed and implemented a full-stack service booking platform for a real-world engineering services business, covering customer authentication, service management, bookings, payments, admin operations, image uploads, and email integration.',
    responsibilities: [
      'Developed responsive frontend interfaces using React, Vite and Tailwind CSS',
      'Developed RESTful APIs using Node.js and Express.js',
      'Integrated MongoDB and Mongoose for persistent data storage',
      'Implemented authentication and booking management workflows',
      'Integrated Razorpay payment gateway in sandbox test mode for transaction flow verification',
      'Integrated ImageKit for high-performance cloud image uploads',
      'Implemented transactional email functionality using Nodemailer/Gmail',
      'Developed comprehensive admin functionality for services, customers, and bookings',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'Razorpay (Test Mode)',
      'ImageKit',
      'Nodemailer',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dev Bhoomi Uttarakhand University',
    yearOrStatus: 'Currently Pursuing',
    details: 'Advanced computer applications, software engineering, systems, and full-stack paradigms.',
  },
  {
    id: 'edu-bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'COER University',
    yearOrStatus: 'Completed',
    score: 'CGPA 7.58',
    details: 'Core computer science fundamentals, data structures, database systems, and object-oriented programming.',
  },
  {
    id: 'edu-class-12',
    degree: 'Class 12 (Senior Secondary)',
    institution: 'Holy Ganges Public School',
    yearOrStatus: '2023',
    details: 'Senior secondary education with a science & mathematics foundation.',
  },
  {
    id: 'edu-class-10',
    degree: 'Class 10 (Secondary)',
    institution: 'Holy Ganges Public School',
    yearOrStatus: '2021',
    details: 'Foundational secondary school education.',
  },
];

export const certificationData: CertificationItem = {
  id: 'cert-be10x-ai',
  title: 'AI Tools & Claude Workshop',
  issuer: 'be10x',
  issueDate: 'October 1, 2026',
  topics: [
    'Creating presentations using AI',
    'Data analysis using AI',
    'Coding and debugging using AI',
  ],
  verificationNote:
    'Hands-on workshop demonstrating practical AI workflows, modern prompt engineering, iterative debugging with AI models, and analytical tools.',
};
