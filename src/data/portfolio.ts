export interface SkillItem {
  name: string;
  category: string;
  level: string;
  pips: number;
}

export type TraceType = "net" | "auth" | "cache" | "db" | "queue";

export interface TraceStep {
  name: string;
  type: TraceType;
  startMs: number;
  endMs: number;
}

export interface Project {
  name: string;
  color: string;
  tagline: string;
  problem: string;
  architecture: string;
  stack: string[];
  hardParts: string[];
  traceName: string;
  totalDurationMs: number;
  trace: TraceStep[];
  links: {
    demo?: string;
    repo?: string;
    docs?: string;
  };
}

export interface LadderTier {
  name: string;
  min: number;
  max: number;
  color: string;
}

export interface ProfileRow {
  platform: string;
  initials: string;
  handle: string;
  ratingText: string;
  url: string;
}

export interface ContestBadge {
  badge: string;
  name: string;
  date: string;
  rankText: string;
}

export interface LikedProblem {
  title: string;
  tag: string;
  approach: string;
  complexity: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  bullets: string[];
}

export const PORTFOLIO = {
  meta: {
    title: "Marya Tawfik",
    tagline: "Backend engineer & Competitive programmer",
    pitch: " I'm A backend-focused software engineer, full-stack developer, and competitive programmer passionate about solving problems, building meaningful projects, and continuously learning : ) ",
    email: "mariyatawfik6@gmail.com", // Configurable placeholder as requested
    resumeUrl: "https://drive.google.com/file/d/1R-wANrLcxLEG-GM8zPRd8jw5kR1qzioA/view?usp=sharing",
  },

  socials: [
    { name: "GitHub", label: "GH", url: "https://github.com/MaryaTawfik" },
    { name: "LinkedIn", label: "in", url: "https://linkedin.com/in/marya-tawfik" },
    { name: "Codeforces", label: "CF", url: "https://codeforces.com/profile/MaryaTawfik" },
    { name: "LeetCode", label: "LC", url: "https://leetcode.com/u/gAeoNavwKy/" },
    { name: "Email", label: "@", url: "mariyatawfik6@gmail.com" },
  ],

  hero: {
    typewriterRoles: [
      "Backend engineer",
      "Competitive programmer",
      "Full stack developer",
      "Problem solver",
    ],
    chips: [
      { text: "200 OK", dot: "#16A878", rot: "-6deg" },
      { text: "O(log n)", dot: "#FF6150", rot: "8deg" },
      { text: "{ api }", dot: "#FFC21A", rot: "-4deg" },
      { text: "SELECT *", dot: "#3446C9", rot: "6deg" },
      { text: "Redis", dot: "#E5484D", rot: "-8deg" },
    ],
  },

  about: {
    codeLines: [
      'const marya = {',
      '  role: "backend engineer",',
      '  also: ["full stack", "competitive programmer"],',
      '  energy: "high, usually smiling :) ",',
      '  talksThingsThrough: true,',
      '  adapts: (p) => p.changed ? "no problem" : "on it",',
      '  notices: "small details, in code and in people",',
      '  asks: "what are we building?",',
      '};',
    ],
    heading: "Turning ideas into",
    highlightWord: "reliable systems",
    paragraph:
      `Hi, I'm a software engineer who enjoys building reliable backend systems and solving interesting problems. Through A2SV, I've developed a strong problem-solving mindset and a love for tackling challenges from different angles.

Beyond coding, I enjoy teaching, mentoring, and sharing what I learn because growing together makes the journey even more rewarding.  I'm always excited to learn new things, explore fresh ideas, and connect with amazing people.

When I'm not immersed in technology, you'll probably find me appreciating life's little joys, staying curious, and spreading positivity wherever I can : )
 `,
    bullets: [
      "Listens first, then builds.",
      "Notices the small things.",
      "Adapts fast when plans change.",
    ],
    stats: [
      { value: 195, label: "Codeforces problems solved", colorClass: "bg-[var(--a1)] text-[var(--on-a1)]" },
      { value: 233, label: "LeetCode problems solved", colorClass: "bg-[var(--a2)] text-[var(--on-a2)]" },
      { value: 428, label: " projects shipped", colorClass: "bg-[var(--panel)] text-[var(--fg)]" },
    ],
  },

  skills: [
    { name: "Node.js", category: "Backend", level: "Daily", pips: 5 },
    { name: "PostgreSQL", category: "Database", level: "Daily", pips: 5 },
    { name: "TypeScript", category: "Language", level: "Daily", pips: 5 },
    { name: "Python", category: "Language", level: "Daily", pips: 5 },
    { name: "REST design", category: "Backend", level: "Daily", pips: 5 },
    { name: "React", category: "Frontend", level: "Daily", pips: 5 },

    { name: "Redis", category: "Database", level: "Comfortable", pips: 4 },
     { name: "Next.js", category: "Frontend", level: "Comfortable", pips: 3 },
    // { name: "Python", category: "Language", level: "Comfortable", pips: 4 },
    { name: "Docker", category: "DevOps", level: "Comfortable", pips: 4 },
    { name: "Go", category: "Backend", level: "Comfortable", pips: 4 },
    { name: "Mongo DB", category: "Database", level: "Daily", pips: 5 },
    { name: "AWS", category: "Cloud", level: "Growing", pips: 2 },
  ] as SkillItem[],

  projects: [
    {
  name: "SafeLink Ethiopia",
  color: "#5C838A",
  tagline: "A private, voice-first bridge between survivors of gender-based violence and human advisors.",
  problem: "Survivors of sexual and gender-based violence often don't know who to turn to first, and many can't safely give a name or type in a form. Existing routes assume literacy, confidence and privacy they may not have.",
  architecture: "React clients connect over REST and Socket.IO to a Node/Express API backed by MongoDB. Users are identified only by a private session ID. New conversations are routed to the least-busy active advisor of the requested type (medical, legal, psychological or general). Voxide voice actions drive the same navigation and chat flows in English, Amharic and Afaan Oromo.",
  stack: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "Socket.IO", "MongoDB", "Mongoose", "JWT", "Voxide"],
  hardParts: [
    "Privacy by design: users see only an advisor ID and type, never a name. Advisors see only a session ID, and admins can manage advisor accounts but never read conversations.",
    "Fair routing: filter active advisors by type, prefer those inside working hours, then pick the one with the fewest open conversations. If no advisor is available, the conversation is still created and assignment is retried on the next message.",
    // "WhatsApp-style delete and clear: per-side soft delete and timestamp-based clearing change what each person sees without destroying data, so one side's cleanup never affects the other.",
  ],
  traceName: "Socket send_message",
  totalDurationMs: 52,
  trace: [
    { name: "Socket.IO gateway", type: "net", startMs: 0, endMs: 5 },
    { name: "Verify session / advisor JWT", type: "auth", startMs: 5, endMs: 10 },
    { name: "Find conversation + assigned advisor", type: "db", startMs: 10, endMs: 24 },
    { name: "Atomic push message", type: "db", startMs: 24, endMs: 41 },
    { name: "Broadcast to conversation room", type: "net", startMs: 41, endMs: 46 },
    { name: "Update both inbox lists", type: "net", startMs: 46, endMs: 52 },
  ],
  links: {
    demo: "https://frontend-tau-umber-69.vercel.app/",
    repo: "https://github.com/SafeLink-Ethiopia",
    // docs: "https://github.com/<your-username>/<safelink-repo>#readme",
  },
},
    {
  name: "SraHub",
  color: "#F59E0B",
  tagline: "One trusted record of every job application, with real employers in charge of hiring status.",
  problem: "Early-career job seekers in Ethiopia and across Africa lose track of applications scattered across Amazon, Indeed, RemoteOK, company sites and referrals. A placement desk relaying statuses secondhand isn't a trustworthy record, so the hiring company needs to own the status of its own postings.",
  architecture: "Three roles share one API: Super Admin verifies employers, Employers post jobs and update applicant status, and Employees apply or log applications made elsewhere. A single Application record carries an optional job_id, and that field decides who may edit its status. Every status change writes an audit row, and all scoping is enforced server-side. Seekers use web and mobile, while employers and admins use web only.",
  stack: ["Go", "Gin", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "JWT","Docker"],
  hardParts: [
    // "Server-side data scoping: job_id decides who may change a status. The Employee edits external rows (job_id empty), the Employer edits rows on their own company's jobs, and the Super Admin edits none. Anything outside that scope returns 403.",
    // "Employer verification workflow: a pending, verified, rejected or suspended state machine gates publishing, and suspending an employer unpublishes all their jobs.",
    "Duplicate-safe tracking: repeat taps on Apply, or re-logging the same company, title and URL, never create a second row, and board-applied and manually logged applications appear in one unified list.",
    "Accountability: every status change records the actor, their role, the old and new status, and the time, so no one can edit hiring status silently.",
  ],
  traceName: "PATCH /applications/:id/status",
  totalDurationMs: 38,
  trace: [
    { name: "API gateway", type: "net", startMs: 0, endMs: 4 },
    { name: "Verify token + role", type: "auth", startMs: 4, endMs: 9 },
    { name: "Load application + job", type: "db", startMs: 9, endMs: 19 },
    { name: "Check employer owns job", type: "auth", startMs: 19, endMs: 22 },
    { name: "Update status + write audit row", type: "db", startMs: 22, endMs: 34 },
    { name: "Notify applicant", type: "queue", startMs: 34, endMs: 38 },
  ],
  links: {
    demo: "https://srahub-web.firaolkef.workers.dev/",
    repo: "https://github.com/A2SV-ASTU/srahub",
    
  },
},
    {
  name: "Library Management System",
  color: "#8B5CF6",
  tagline: "A digital library where students pay for membership, borrow books and get automatic reminders, and librarians run it all from one dashboard.",
  problem: "Manual library desks struggle to track who has paid, who has borrowed what and which books are overdue. Members have no easy way to browse the catalog or get reminders before a book is due.",
  architecture: "A React single-page app talks to a Node/Express REST API backed by MongoDB. JWT-based auth with role middleware separates Students from Admins. Payment screenshots upload to Cloudinary, and Nodemailer sends membership, due-date and password-reset emails.",
  stack: ["JavaScript", "React", "Tailwind CSS", "shadcn/ui", "Jotai", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Nodemailer"],
  hardParts: [
    "Payment-gated borrowing: members upload a payment screenshot and transaction ID, and borrowing stays blocked until a librarian approves it. A rejection keeps borrowing blocked, and approval can set a membership expiry date.",
    "Borrowing rules: each member can hold at most 3 books, returns need admin approval, and overdue books are flagged automatically.",
    "Automated email alerts: members get reminders 3 days before a due date, overdue notices, membership-expiry warnings and password-reset links.",
    // "Layered security: bcrypt password hashing, JWT auth, role-based middleware, express-validator input checks, and secure file uploads through multer and Cloudinary.",
  ],
  traceName: "POST /borrow",
  totalDurationMs: 44,
  trace: [
    { name: "API gateway", type: "net", startMs: 0, endMs: 4 },
    { name: "Verify JWT + role", type: "auth", startMs: 4, endMs: 9 },
    { name: "Validate request", type: "net", startMs: 9, endMs: 12 },
    { name: "Check membership + 3-book limit", type: "db", startMs: 12, endMs: 26 },
    { name: "Create borrow record", type: "db", startMs: 26, endMs: 40 },
    { name: "Queue due-date reminder", type: "queue", startMs: 40, endMs: 44 },
  ],
  links: {
    // demo: "https://your-deployed-url.example",
    repo: "https://github.com/MaryaTawfik/library-management-system",
    // docs: "https://github.com/MaryaTawfik/library-management-system#readme",
  },
},
    {
  name: "Smart Campus",
  color: "#06B6D4",
  tagline: "An AI study assistant that indexes your PDFs, then summarises, quizzes you and cites exact pages.",
  problem: "Students and researchers lose hours digging through long textbooks and papers to find one fact, summarise a chapter or check where a claim came from. Generic chatbots can't point to the exact page in your own documents.",
  architecture: "A React and Vite client talks to a FastAPI backend over REST and WebSockets. Uploaded PDFs are chunked and indexed into ChromaDB. A LangChain and LangGraph pipeline combines literal text matching with vector similarity, then queries several LLMs in parallel (Gemini, OpenAI and DeepSeek via OpenRouter). MongoDB stores users and chat history, and JWT protects every route.",
  stack: ["Python", "FastAPI", "LangChain", "LangGraph", "ChromaDB", "MongoDB", "Gemini", "OpenAI", "React", "Vite", "WebSockets", "JWT"],
  hardParts: [
    "Hybrid retrieval: literal string matching handles exact terms, figures and page lookups, while ChromaDB vector search handles meaning, so a query can be answered either way.",
    "Parallel multi-model answers: the same question goes to several LLMs at once with a 'best of all' approach, so one slow or weak model doesn't decide the result.",
    "Page-accurate citations: indexed chunks keep their source page, so the Find Pages mode returns exact page numbers rather than vague references.",
    "Study modes: Summarised Note, Q&A and Find Pages each use a different prompt and retrieval strategy over the same indexed document.",
  ],
  traceName: "WS ask_question",
  totalDurationMs: 2350,
  trace: [
    { name: "WebSocket gateway", type: "net", startMs: 0, endMs: 12 },
    { name: "Verify JWT", type: "auth", startMs: 12, endMs: 20 },
    { name: "Literal match + vector search", type: "db", startMs: 20, endMs: 140 },
    { name: "Parallel LLM calls", type: "net", startMs: 140, endMs: 2280 },
    { name: "Save chat history", type: "db", startMs: 2280, endMs: 2335 },
    { name: "Stream answer to client", type: "net", startMs: 2335, endMs: 2350 },
  ],
  links: {
    // demo: "https://your-deployed-url.example",
    repo: "https://github.com/CSEC-ASTU/bootcamp1",
    // docs: "https://github.com/<your-username>/<smart-campus-repo>#readme",
  },
},
  ] as Project[],

  competitive: {
    currentRating: 1540,
    peakRating: 1612,
    ladder: [
      { name: "Newbie", min: 800, max: 1200, color: "#9A8FA5" },
      { name: "Pupil", min: 1200, max: 1400, color: "#3FAE5A" },
      { name: "Specialist", min: 1400, max: 1600, color: "#1FB5AD" },
      { name: "Expert", min: 1600, max: 1900, color: "#4673E6" },
      { name: "Candidate Master", min: 1900, max: 2100, color: "#A64BD1" },
      { name: "Master", min: 2100, max: 2300, color: "#F29A2E" },
      { name: "International Master", min: 2300, max: 2400, color: "#F29A2E" },
    ] as LadderTier[],
    profiles: [
      {
        platform: "Codeforces",
        initials: "CF",
        handle: "MaryaTawfik",
        // ratingText: "Specialist · 1540 rating",
        url: "https://codeforces.com/profile/MaryaTawfik",
      },
      {
        platform: "LeetCode",
        initials: "LC",
        handle: "MaryaTawfik",
        // ratingText: "Knight · 612 solved",
        url: "https://leetcode.com/u/gAeoNavwKy/",
      },
      // {
      //   platform: "AtCoder",
      //   initials: "AC",
      //   handle: "MaryaTawfik",
      //   ratingText: "Active Contender",
      //   url: "https://atcoder.jp/users/MaryaTawfik",
      // },
      // {
      //   platform: "CodeChef",
      //   initials: "CC",
      //   handle: "MaryaTawfik",
      //   ratingText: "3 Star Division",
      //   url: "https://codechef.com/users/MaryaTawfik",
      // },
    ] as ProfileRow[],
    contests: [
      {
        badge: "#412",
        name: "Codeforces Div. 2 Round",
        date: "Mar 2026",
        rankText: "Rank 412 of ~16,000 contestants",
      },
      {
        badge: "#530",
        name: "LeetCode Weekly Contest",
        date: "Jan 2026",
        rankText: "Rank 530 of ~27,000 contestants",
      },
      {
        badge: "14th",
        name: "ICPC Regional, Team of Three",
        date: "Nov 2025",
        rankText: "14th of 90 collegiate teams",
      },
    ] as ContestBadge[],
    likedProblems: [
      {
        title: "Counting inversions fast",
        tag: "Merge sort",
        approach:
          "Augmenting merge sort to count split inversions during the merge step. While copying from the right subarray, add the remaining elements from the left subarray in O(1).",
        complexity: "Time O(n log n), memory O(n)",
      },
      {
        title: "Shortest path with free edges",
        tag: "Dijkstra on layers",
        approach:
          "Constructing a k-layered state graph where layer i represents using i discount passes. Transitions either stay on layer i with regular edge weight or jump to layer i+1 with weight 0.",
        complexity: "Time O(k · (V + E) log(k · V)), memory O(k · V)",
      },
      {
        title: "Fenwick tree or segment tree",
        tag: "Range queries",
        approach:
          "Using a binary indexed tree (Fenwick) for point updates and prefix sums with lowest significant bit operations (i & -i) for minimal memory footprint and cache locality.",
        complexity: "Time O(log n) per query/update, memory O(n)",
      },
    ] as LikedProblem[],
  },
  community: {
  intro: "Mentoring and teaching are important parts of my professional identity.",
  items: [
    {
      name: "ASTUMSJ Bootcamp 2026",
      role: "Mentor",
      color: "#FF6150",
      description: "", // optional, one line about what you taught or did
    },
    {
      name: "GirlsTech Unilorin Bootcamp 1.0",
      role: "Backend Facilitator",
      color: "#FFC21A",
      description: "",
    },
    {
      name: "CSEC ASTU Python Bootcamp 2026",
      role: "Mentor Coordinator",
      color: "#2BB673",
      description: "",
    },
  ],
},
closing: {
  headline: "Let's build something amazing together.",
  highlight: "amazing", // the word that gets the marker, or "" for none
  sub: "Work with me, stay curious, stay happy.",
},
cv: {
  file: "/Marya-Tawfik-CV.pdf",
  downloadName: "Marya-Tawfik-CV.pdf",
},
  experience: [
    {
      period: "2025 — Present",
      role: "Full stack developer (backend focus)",
      bullets: [
        "Cut p95 latency of the orders endpoint from 480 ms to 190 ms with a composite index and a Redis read cache.",
        "Designed and maintained resilient event-driven workers processing asynchronous batch jobs.",
        "Led backend API design reviews and schema migration strategies with zero downtime.",
      ],
    },
    {
      period: "2024 — 2025",
      role: "Freelance developer",
      bullets: [
        "Delivered end-to-end full stack web platforms, integrating Stripe payment workflows and PostgreSQL databases.",
        "Built administrative dashboards and role-based access control systems for early-stage teams.",
      ],
    },
    {
      period: "2024",
      role: "Open source contributor",
      bullets: [
        "Contributed bug fixes, endpoint test suites, and documentation improvements across developer tooling repositories.",
        "Participated in collegiate hackathons and technical community mentorship workshops.",
      ],
    },
  ] as ExperienceItem[],

  contact: {
    chat: {
      initialMessage: "Hi, I'm Marya. What brings you here?",
      options: [
        {
          id: "hiring",
          label: "I am hiring",
          reply: "I'd love to learn more about the role and your engineering culture! I'm primarily focused on backend systems, clean APIs, and distributed architectures.",
        },
        {
          id: "collab",
          label: "Let's collaborate",
          reply: "Sounds exciting! Whether it's an ambitious backend project, an open-source initiative, or algorithmic problem-solving, let's connect.",
        },
        {
          id: "hi",
          label: "Just saying hi",
          reply: "Hello! Thanks for visiting my corner of the web. Hope you enjoyed the request traces and the mood switcher!",
        },
      ],
    },
  },
};
