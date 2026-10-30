export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  role: string;
  highlights: string[];
  architectureNotes?: string;
  githubUrl?: string | null;
  demoUrl?: string | null;
  statusText: string;
  featuredBadge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface MentorshipItem {
  organization: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  skillsDemonstrated: string[];
}

export interface ProblemSolvingPlatform {
  name: string;
  profileUrl: string;
  handle: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  isConfigurable?: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Marya Tawfik",
    role: "Full-Stack Developer",
    focus: "Backend Engineering",
    headline: "Building Systems. Solving Problems. Empowering Developers.",
    bio: "I'm Marya Tawfik, a full-stack developer focused on backend engineering. I build practical digital experiences, enjoy competitive programming, and love sharing knowledge through mentoring.",
    subtext: "A2SVian committed to robust backend systems, distributed architectures, clean database design, and algorithmic problem solving.",
    location: "Addis Ababa, Ethiopia",
    email: "maryaahmed200412@gmail.com",
    portraitUrl: "/portrait.jpg", // Replaceable with real portrait file in public/ or state preview
    affiliation: {
      name: "A2SVian",
      fullName: "Africa to Silicon Valley (A2SV)",
      description: "Trained in rigorous data structures, competitive programming, and software engineering principles.",
    },
    socialLinks: {
      github: "https://github.com/MaryaTawfik",
      linkedin: "https://linkedin.com/in/marya-tawfik",
      instagram: "https://instagram.com/mar_.eshet",
    },
  },

  pillars: [
    {
      id: "engineering",
      title: "Backend & Systems",
      subtitle: "Reliable, scalable architectures",
      description:
        "Building practical applications and diving deep into what happens behind the scenes: API design, data integrity, microservice boundaries, caching, and scalable backend workflows.",
      focusAreas: ["RESTful & WebSocket APIs", "Relational & Document Databases", "System Architecture & Scalability", "Clean Code & Modularity"],
    },
    {
      id: "problem-solving",
      title: "Algorithmic Thinking",
      subtitle: "Logic-driven problem solving",
      description:
        "Practicing data structures and algorithms through competitive programming. Breaking intricate problems into clean mathematical and programmatic invariants.",
      focusAreas: ["Graph Algorithms & Trees", "Dynamic Programming", "Time & Space Complexity Optimization", "ETCPC & Contest Problem Solving"],
    },
    {
      id: "community",
      title: "Community & Mentorship",
      subtitle: "Sharing knowledge and lifting peers",
      description:
        "Believing that the best way to master engineering is to teach it. Facilitating bootcamps, coordinating mentors, and helping developers master backend and algorithmic concepts.",
      focusAreas: ["Backend Facilitation", "Peer Code Reviews & Guidance", "Curriculum Coordination", "Technical Communication"],
    },
  ],

  projects: [
    {
      id: "safelink",
      title: "SafeLink",
      category: "Full-Stack Development · Privacy-Conscious Technology",
      tagline: "Voice-enabled, privacy-first platform connecting survivors with trusted guidance.",
      description:
        "SafeLink is a privacy-first, voice-enabled platform that helps people affected by sexual and gender-based violence understand their options, access trusted information, connect with appropriate human advisors, and reach the right support without unnecessarily exposing their identity.",
      technologies: ["Voice Processing", "Backend APIs", "Privacy-Preserving Architecture", "Secure Session Flow", "TypeScript / React"],
      role: "Lead Full-Stack & System Design Contributor",
      highlights: [
        "Architected anonymous user routing to ensure zero persistent personally identifiable records during initial inquiries.",
        "Engineered voice-enabled interaction pathways to facilitate hands-free accessibility for users under distress.",
        "Structured intuitive triage logic to match users with certified advisors without compromising user discretion.",
      ],
      architectureNotes:
        "Built with an ephemeral session pipeline that scrubs transient telemetry and encrypts sensitive advisor coordination payloads. Designed for high resilience and zero identity footprint.",
      githubUrl: "https://github.com/MaryaTawfik/SafeLink", // placeholder / configurable repo URL
      demoUrl: null, // live demo placeholder
      statusText: "Repository & Architecture Prototype",
      featuredBadge: "Privacy & Social Impact",
    },
    {
      id: "srahub",
      title: "SRAHub",
      category: "Backend Engineering · Employment Platform",
      tagline: "High-throughput talent matching backend connecting verified employers and applicants.",
      description:
        "SRAHub is a platform designed to connect employers and employees, focusing on scalable backend workflows, efficient search queries, structured role matchmaking, and responsive API contracts.",
      technologies: ["Go / Node.js", "PostgreSQL", "REST APIs", "Authentication & RBAC", "Optimized Query Design"],
      role: "Backend Engineer",
      highlights: [
        "Implemented robust data validation and role-based access controls for enterprise employers versus individual job candidates.",
        "Structured performant relational schemas supporting candidate indexing, application lifecycles, and status tracking.",
        "Designed clean REST endpoints adhering to strict HTTP semantics, error handling, and request pagination.",
      ],
      architectureNotes:
        "Database model utilizes index optimization on candidate skill sets and job requirements to deliver sub-50ms candidate search filtering.",
      githubUrl: "https://github.com/MaryaTawfik/SRAHub",
      demoUrl: null,
      statusText: "Backend Core",
      featuredBadge: "Backend Architecture",
    },
    {
      id: "smart-campus",
      title: "Smart Campus",
      category: "Full-Stack Development · AI · RAG",
      tagline: "Academic intelligence assistant with vector indexing and verifiable citation retrieval.",
      description:
        "Smart Campus is an AI-powered academic assistant that helps students and researchers navigate complex academic materials. Using large language models and vector search, it enables users to index PDFs, ask questions, generate summaries, and retrieve relevant citations.",
      technologies: ["Python / FastAPI", "Vector Embeddings", "RAG Pipeline", "PDF Ingestion & Chunking", "React"],
      role: "Full-Stack & RAG Pipeline Developer",
      highlights: [
        "Configured document parsing and semantic chunking strategies tailored to academic papers and university curricula.",
        "Integrated dense vector search with reranking to return grounding citations alongside generated synthetic responses.",
        "Created an intuitive frontend workspace enabling side-by-side reading of source PDF sections and synthesized summaries.",
      ],
      architectureNotes:
        "Ingestion worker segments PDFs into overlapping semantic chunks, computes embeddings, and stores vectors with metadata for exact citation lookups.",
      githubUrl: "https://github.com/MaryaTawfik/Smart-Campus",
      demoUrl: null,
      statusText: "Full-Stack & RAG Architecture",
      featuredBadge: "Retrieval-Augmented Generation",
    },
    {
      id: "library-management",
      title: "Library Management System",
      category: "Full-Stack Development",
      tagline: "Robust transactional system for cataloging, loan lifecycles, and inventory auditing.",
      description:
        "A library management application designed to support everyday library operations, including book management, borrowing, returning, overdue monitoring, and related record management.",
      technologies: ["TypeScript", "Relational Database", "REST APIs", "State Management", "Tailwind CSS"],
      role: "Full-Stack Developer",
      highlights: [
        "Modeled atomic transaction states for book checkout, return processing, and real-time inventory adjustments.",
        "Built administrative dashboards with filtered search across author, ISBN, loan status, and patron histories.",
        "Implemented rigorous client and server-side validation preventing race conditions on single-copy inventory items.",
      ],
      architectureNotes:
        "Ensures transaction consistency with row-level locking on inventory item updates to prevent accidental double-borrowing.",
      githubUrl: "https://github.com/MaryaTawfik/Library-Management-System",
      demoUrl: null,
      statusText: "Application System",
      featuredBadge: "Transactional Business Logic",
    },
  ],

  skillCategories: [
    {
      title: "Backend Development",
      description: "Designing resilient services, clean API contracts, and real-time data channels.",
      skills: [
        { name: "Go", description: "High-performance microservices, concurrent goroutines, and lightweight APIs." },
        { name: "FastAPI", description: "Modern, high-speed asynchronous Python services with automatic schema validation." },
        { name: "Node.js", description: "Event-driven asynchronous backend services, middleware, and micro-utilities." },
        { name: "REST APIs", description: "RESTful architecture, status codes, predictable error envelopes, and pagination." },
        { name: "WebSockets", description: "Full-duplex bidirectional streaming for real-time messaging and events." },
      ],
    },
    {
      title: "Databases & Storage",
      description: "Data modeling, integrity constraints, and query optimization.",
      skills: [
        { name: "SQL Databases", description: "PostgreSQL & MySQL schema design, foreign keys, ACID transactions, and index tuning." },
        { name: "MongoDB", description: "Document-oriented schemas, aggregation pipelines, and flexible document models." },
      ],
    },
    {
      title: "AI & Retrieval",
      description: "Integrating modern retrieval pipelines with language model grounding.",
      skills: [
        { name: "RAG (Retrieval-Augmented Generation)", description: "Document chunking, dense vector embeddings, citation grounding, and context injection." },
      ],
    },
    {
      title: "Frontend Development",
      description: "Crafting responsive, accessible, and performant user interfaces.",
      skills: [
        { name: "React", description: "Component-driven development, custom hooks, and concurrent rendering." },
        { name: "Next.js", description: "Server components, routing, and modern frontend production architectures." },
        { name: "TypeScript", description: "Strict static typing, interfaces, and end-to-end type safety." },
        { name: "JavaScript", description: "ESNext syntax, asynchronous promises, DOM APIs, and functional patterns." },
        { name: "Tailwind CSS", description: "Utility-first design systems, custom responsive tokens, and aesthetic polish." },
      ],
    },
    {
      title: "Computer Science & Problem Solving",
      description: "Algorithmic rigor, data structures, and competitive programming.",
      skills: [
        { name: "Data Structures & Algorithms", description: "Graph algorithms, trees, heaps, hash maps, sorting, and dynamic programming." },
        { name: "Competitive Programming", description: "Rigorous contest time management, edge-case analysis, and complexity bounds." },
        { name: "Problem-Solving", description: "Decomposing ambiguous, multi-variable challenges into testable sub-problems." },
      ],
    },
  ],

  problemSolving: {
    platforms: [
      {
        name: "Codeforces",
        profileUrl: "https://codeforces.com/profile/MaryaTawfik",
        handle: "MaryaTawfik",
        description: "Practicing algorithmic speed, math-heavy problems, and graph theory in timed contests.",
        metricLabel: "Active Contestant",
        metricValue: "Codeforces Profile",
      },
      {
        name: "LeetCode",
        profileUrl: "https://leetcode.com/u/MaryaTawfik",
        handle: "MaryaTawfik",
        description: "Focused on core data structures, recursive problem solving, dynamic programming, and system invariants.",
        metricLabel: "Solved Problems",
        metricValue: "400+ Problems",
        isConfigurable: true,
      },
      {
        name: "ETCPC Participation",
        profileUrl: "https://github.com/MaryaTawfik",
        handle: "Team Contender",
        description: "Competed in the Ethiopian Collegiate Programming Contest (ETCPC), collaborating under contest time constraints.",
        metricLabel: "Contest",
        metricValue: "ETCPC Contender",
      },
    ],
    disciplines: [
      { name: "Graph Algorithms", note: "BFS, DFS, Dijkstra, Topo Sort, Disjoint Set Union" },
      { name: "Dynamic Programming", note: "1D/2D states, knapsack patterns, interval DP" },
      { name: "Tree Structures", note: "BST, Segment Trees, LCA, Tree Traversals" },
      { name: "Two Pointers & Sliding Window", note: "Linear amortized scans and range bounds" },
      { name: "Binary Search", note: "Monotonic predicates and search on answers" },
      { name: "Greedy Strategies", note: "Optimal substructure and sorting invariants" },
    ],
  },

  mentoring: [
    {
      organization: "ASTUMSJ Bootcamp",
      role: "Mentor",
      period: "2026",
      location: "ASTU (Adama Science and Technology University)",
      responsibilities: [
        "Mentored aspiring developers through fundamental and intermediate programming concepts.",
        "Held 1-on-1 and small-group debugging sessions to resolve algorithmic roadblocks and code structure issues.",
        "Encouraged systematic engineering practices, testing mindset, and clean repository maintenance.",
      ],
      skillsDemonstrated: ["1-on-1 Mentorship", "Technical Communication", "Code Review", "Empathy in Engineering"],
    },
    {
      organization: "GirlsTech Unilorin Bootcamp 1.0",
      role: "Backend Facilitator",
      period: "2026",
      location: "Virtual / Community",
      responsibilities: [
        "Delivered structured sessions on backend fundamentals, web request lifecycles, and database interactions.",
        "Guided participants in writing their first REST APIs and understanding client-server communication.",
        "Fostered an inclusive, empowering space for women entering computer science and software development.",
      ],
      skillsDemonstrated: ["Curriculum Delivery", "Backend Architecture Teaching", "API Design Guidance", "Inclusive Mentoring"],
    },
    {
      organization: "CSEC ASTU Python Bootcamp",
      role: "Mentor Coordinator",
      period: "2026",
      location: "Computer Science & Engineering Club, ASTU",
      responsibilities: [
        "Coordinated mentor assignments, student check-ins, and workshop timelines across multiple cohort tracks.",
        "Created standardized problem sets and evaluation rubrics for Python programming milestones.",
        "Facilitated feedback loops between students and mentors to adapt teaching pace and ensure retention.",
      ],
      skillsDemonstrated: ["Mentorship Coordination", "Curriculum Organization", "Cross-Team Leadership", "Python Facilitation"],
    },
  ],
};
