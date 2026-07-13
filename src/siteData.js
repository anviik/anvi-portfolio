// ============================================================================
//  siteData.js — ALL of your personal content lives here.
//  Edit the values below and the whole site updates. Nothing else to touch.
// ============================================================================

const siteData = {
  // ---- Identity -----------------------------------------------------------
  name: 'Anvi Kudaraya',
  firstName: 'Anvi',
  role: 'AI/ML Engineer · CS + Cognitive Science @ UC Merced',
  subtitle: 'I build AI systems that actually ship — from mobile apps to 3D perception pipelines.',
  location: 'San Francisco Bay Area, CA',

  // ---- Navigation ---------------------------------------------------------
  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'accomplishments', label: 'Accomplishments' },
    { id: 'contact', label: 'Contact' },
  ],

  // ---- Constellation star positions (%) — order matches `nav`.
  // Kept toward the edges so they never sit under the center name block.
  constellation: [
    { x: 14, y: 22 },   // about
    { x: 9, y: 56 },    // skills  (moved to the outer-left edge)
    { x: 22, y: 84 },   // experience
    { x: 84, y: 20 },   // projects
    { x: 90, y: 55 },   // accomplishments
    { x: 72, y: 83 },   // contact
  ],

  // ---- About --------------------------------------------------------------
  about: {
    greeting: "Hi, I'm",
    bio: [
      "I'm a Computer Science & Cognitive Science student at UC Merced who likes building AI systems that actually ship. Lately that's meant a maintenance-reporting app for BART's daily riders, a two-stage 3D perception pipeline for robotic apple harvesting, and RAG systems that make hundred-page financial PDFs answerable in plain English.",
      "Away from the terminal I founded my school's first consulting club, got elected to student government to represent 10,000+ students, and spend an unreasonable amount of time reviewing open-source PRs. I care most about the small details that make a system feel obvious to use.",
    ],
    // Editorial "fact sheet" — label / value pairs
    facts: [
      { label: 'Studying', value: 'CS & Engineering + Cognitive Science' },
      { label: 'School', value: 'UC Merced' },
      { label: 'Class of', value: '2027' },
      { label: 'Based in', value: 'SF Bay Area, CA' },
      { label: 'Focus', value: 'AI / ML · Full-stack' },
    ],
    // "Currently" quick list
    now: [
      'Building an AI maintenance app @ BART',
      'Researching VLM-guided robotic harvesting @ YuCCA Lab',
      'Contributing to Excalidraw open source',
    ],
  },

  // ---- Skills — grouped, each with an icon --------------------------------
  skillGroups: [
    {
      category: 'Languages',
      items: [
        { name: 'Python', icon: '🐍' },
        { name: 'Java', icon: '☕' },
        { name: 'C++', icon: '⚙️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'SQL', icon: '🗄️' },
        { name: 'HTML / CSS', icon: '🎨' },
        { name: 'Bash', icon: '💻' },
      ],
    },
    {
      category: 'AI / ML',
      items: [
        { name: 'PyTorch', icon: '🔥' },
        { name: 'scikit-learn', icon: '📊' },
        { name: 'LangGraph', icon: '🕸️' },
        { name: 'LangChain', icon: '🔗' },
        { name: 'Hugging Face', icon: '🤗' },
        { name: 'YOLO', icon: '🎯' },
        { name: 'SAM2 / SAM3', icon: '✂️' },
        { name: 'FAISS', icon: '🧭' },
      ],
    },
    {
      category: 'Frameworks & Tools',
      items: [
        { name: 'FastAPI', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'React Native', icon: '📱' },
        { name: 'Flask', icon: '🧪' },
        { name: 'Node.js', icon: '🟩' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Git', icon: '🌿' },
        { name: 'CI/CD', icon: '🔁' },
        { name: 'Linux', icon: '🐧' },
      ],
    },
  ],

  // ---- Work Experience (newest first; `current: true` = ongoing) ----------
  experience: [
    {
      company: 'The Bank of New York (BNY)',
      role: 'Software Engineering Intern',
      date: 'Jun 2026 — Present',
      current: true,
      description:
        'Building an AI agent to automate internal engineering workflows — designing the tool-calling and orchestration layer that lets the agent take reliable, multi-step actions.',
      tech: ['Python', 'LLMs', 'AI Agents', 'Automation'],
    },
    {
      company: 'Bay Area Rapid Transit (BART)',
      role: 'AI Software Engineer — Capstone',
      date: 'Jan 2026 — Present',
      current: true,
      description:
        'Building a React Native + Expo app for BART riders to report maintenance issues, with image upload, GPS station detection, and client-side compression. FastAPI + SQLAlchemy backend routes tickets across 10 departments and 40+ incident types; a fine-tuned YOLOv8 model powers routing. Deployed via Docker on AWS with GitHub Actions CI/CD.',
      tech: ['React Native', 'FastAPI', 'YOLOv8', 'AWS', 'Docker'],
    },
    {
      company: 'YuCCA Lab, UC Merced',
      role: 'AI Research Engineering Intern',
      date: 'Jan 2026 — Present',
      current: true,
      description:
        'Built a batch inference pipeline across frontier VLMs (GPT, Gemini, Claude) over 219 orchard instances, and a two-stage 3D perception pipeline (SAM3 → SAM3DObjects) on remote GPU. Co-authored a CVPR 2026 workshop paper on VLM-guided multi-arm robotic harvesting across 4,027 RGB-D images.',
      tech: ['Python', 'VLMs', 'SAM3', 'CUDA', 'GPU'],
    },
    {
      company: 'Inclusive Interaction Lab',
      role: 'Undergraduate LLM Researcher',
      date: 'Dec 2025 — Present',
      current: true,
      description:
        'Designing LLM-powered systems for child–computer interaction and adaptive learning, applying prompt engineering and user research to improve engagement and response quality.',
      tech: ['LLMs', 'HCI', 'Prompt Engineering', 'User Research'],
    },
    {
      company: 'Outamation (via Extern)',
      role: 'AI/ML Extern',
      date: 'Dec 2025 — Feb 2026',
      description:
        'Built document-intelligence pipelines combining OCR, NLP, LLMs, and RAG to turn unstructured financial PDFs into searchable data. Fine-tuned sentence-transformer embeddings with FAISS hybrid search for a chatbot that answers questions about multi-hundred-page documents.',
      tech: ['RAG', 'FAISS', 'NLP', 'LLMs', 'OCR'],
    },
    {
      company: 'CodeDay — Excalidraw',
      role: 'Open-Source Software Engineer Intern',
      date: 'Nov 2025 — Present',
      current: true,
      description:
        'Contributing production PRs to a large TypeScript/React codebase — debugging state and event issues and collaborating with maintainers to deliver clean, tested features.',
      tech: ['TypeScript', 'React', 'Testing', 'Open Source'],
    },
    {
      company: 'Data Science Society at UC Merced',
      role: 'Lead Technical Director',
      date: 'Nov 2025 — Present',
      current: true,
      description:
        'Leading 6+ technical projects and mentoring engineers across AI, data, and full-stack domains, driving project execution, code quality, and cross-team collaboration.',
      tech: ['Leadership', 'Mentorship', 'Machine Learning', 'Software Engineering'],
    },
    {
      company: 'Google Developer Student Clubs',
      role: 'Technical Lead',
      date: 'Sep 2025 — Present',
      current: true,
      description:
        'Leading a four-member team building a full-stack campus carpooling app — designing the backend, APIs, and CI/CD deployment on AWS.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'AWS', 'CI/CD'],
    },
    {
      company: 'Associated Students of UC Merced',
      role: 'Senator, At-Large',
      date: 'May 2025 — Present',
      current: true,
      description:
        'Elected to represent 9,000+ students, managing a seven-figure budget to fund campus programs and shape policy for student advocacy and research initiatives.',
      tech: ['Leadership', 'Policy', 'Budgeting', 'Communication'],
    },
    {
      company: 'National Science Foundation',
      role: 'Algorithm Design Theory Researcher',
      date: 'May 2025 — Jul 2025',
      description:
        'Designed two Greedy Range Tree variants for k-dimensional range queries, deriving Big-O bounds for query time, preprocessing, and space, and proving tradeoff conditions vs. standard range trees and kd-trees. Authored a paper submitted for conference review.',
      tech: ['Algorithms', 'Complexity', 'Research'],
    },
    {
      company: '180 Degrees Consulting — UC Merced',
      role: 'Founder & President',
      date: 'Oct 2024 — Present',
      current: true,
      description:
        "Founded and scaled UC Merced's first consulting club to 60+ members and 8 client projects, leading cross-functional teams to deliver product, tech, and strategy solutions.",
      tech: ['Leadership', 'Product Strategy', 'Project Management', 'Agile'],
    },
    {
      company: 'University of California, Merced',
      role: 'Software Engineering Intern',
      date: 'Aug 2024 — May 2025',
      description:
        'Optimized a reinforcement-learning irrigation model for almond orchards, cutting freshwater use by 20%. Built an API-driven pipeline ingesting CIMIS weather + IoT sensor data (80% less preprocessing) and a Flask dashboard visualizing CouchDB data with Pandas, NumPy, and Matplotlib.',
      tech: ['RL', 'Flask', 'Pandas', 'IoT', 'Raspberry Pi'],
    },
    {
      company: 'University of California, Merced',
      role: 'Calculus Learning Assistant',
      date: 'Aug 2024 — Present',
      current: true,
      description:
        'Co-teaching Calculus I–II for 250+ students, leading office hours and review sessions to strengthen problem-solving and conceptual understanding.',
      tech: ['Teaching', 'Tutoring', 'Mentorship'],
    },
    {
      company: 'Brain Chain',
      role: 'Software Engineering Intern',
      date: 'May 2023 — Aug 2023',
      description:
        'Developed a 95%-accurate PDF text-extraction tool with a Tkinter GUI, streamlining analyst workflows and shipping it as an executable for 5,000+ page documents.',
      tech: ['Python', 'Tkinter', 'PDF Processing'],
    },
    {
      company: 'Siyanee Analytics Solutions LLP',
      role: 'Product Design Intern',
      date: 'May 2022 — Oct 2022',
      description:
        'Led a four-person design team for the Hindi Praveshikaa app — designing 40+ Figma screens and building adaptive-learning algorithms in C++/Python.',
      tech: ['Figma', 'UX Design', 'C++', 'Python'],
    },
  ],

  // ---- Projects (shown in the coverflow carousel) -------------------------
  // Update `link` to point anywhere you like ('#' = no external link).
  projects: [
    {
      tag: 'AI · Web',
      title: 'Palette',
      image: '/projects/palette.svg',
      short: 'AI reads your coloring, then shops it.',
      description:
        'Snap a selfie and a vision model reads your skin undertone, hair, and eyes to build a personal color palette, then matches you to real makeup, clothing, and skincare you can buy. Qwen2.5-VL-72B handles the analysis, Pinecone vector search over all-MiniLM-L6-v2 embeddings finds matches, and Google Shopping data (via SerpApi) surfaces shoppable products — all on Next.js serverless.',
      tech: ['Next.js', 'VLMs', 'Pinecone', 'Vercel'],
      link: 'https://palette-henna.vercel.app',
    },
    {
      tag: 'AI · Mobile',
      title: 'MirrorVerse',
      image: '/projects/mirrorverse.svg',
      short: 'A flight-simulator for life decisions.',
      description:
        'Structure any life choice as a knowledge graph and let 7 adversarial AI agents debate it across rounds, returning the risks, contradictions, and missing information — personalized by memory of how you actually decide. A LangGraph debate engine over Claude powers the agents, with a FastAPI backend, React Native / Expo app, and a Neo4j Aura + Mem0 + Zep memory layer deployed on GCP Cloud Run.',
      tech: ['Claude', 'LangGraph', 'FastAPI', 'React Native', 'Neo4j'],
      link: 'https://github.com/anviik/mirrorverse',
    },
    {
      tag: 'Open Source',
      title: 'Excalidraw',
      image: '/projects/excalidraw.svg',
      short: 'Contributing to a tool with 100k+ stars.',
      description:
        'Contributor to Excalidraw (100k+ GitHub stars, 350k+ monthly users). Authored 3 production PRs debugging event handling and shared-state issues in the laser pointer and arrow tools, working with maintainers through reviews while keeping CI green.',
      tech: ['TypeScript', 'React', 'Canvas'],
      link: 'https://github.com/excalidraw/excalidraw',
    },
    {
      tag: 'Mobile · AI',
      title: 'BART Rider Maintenance App',
      image: '/projects/bart.svg',
      short: 'Report transit issues with AI routing.',
      description:
        'A React Native + Expo app letting riders report maintenance issues with photos, GPS station detection, and client-side compression. A fine-tuned YOLOv8 model routes tickets across 10 departments and 40+ incident types via a FastAPI backend on AWS.',
      tech: ['React Native', 'FastAPI', 'YOLOv8', 'AWS'],
      link: '#',
    },
    {
      tag: 'AI · NLP',
      title: 'Document Intelligence RAG',
      image: '/projects/rag.svg',
      short: 'Ask questions across 100+ page PDFs.',
      description:
        'A retrieval-augmented pipeline that turns unstructured financial PDFs into searchable data. OCR + NLP + fine-tuned sentence-transformer embeddings with FAISS hybrid search power a chatbot that answers natural-language questions about hundred-page documents.',
      tech: ['RAG', 'FAISS', 'LangChain', 'Python'],
      link: '#',
    },
    {
      tag: 'Research · CV',
      title: 'Orchard 3D Perception',
      image: '/projects/orchard.svg',
      short: 'VLM-guided robotic apple harvesting.',
      description:
        'A two-stage 3D perception pipeline (SAM3 → SAM3DObjects) extracting center-point coordinates from Gaussian-splat outputs on remote GPU. Co-authored a CVPR 2026 workshop paper spanning 4,027 RGB-D images and 16,257 annotated apple instances.',
      tech: ['SAM3', 'VLMs', 'CUDA', 'Python'],
      link: '#',
    },
    {
      tag: 'ML · Sustainability',
      title: 'Smart Irrigation RL',
      image: '/projects/irrigation.svg',
      short: 'Cut orchard freshwater use by 20%.',
      description:
        'A reinforcement-learning model for almond-orchard irrigation, reducing freshwater consumption by 20%. Paired with an automated CIMIS + IoT data pipeline (80% less preprocessing) and a Flask dashboard for live sensor visualization.',
      tech: ['RL', 'Flask', 'Pandas', 'IoT'],
      link: '#',
    },
  ],

  // ---- Accomplishments (first = featured hero trophy) ---------------------
  accomplishments: [
    {
      icon: '📄',
      title: 'CVPR 2026 Workshop Paper',
      description:
        'Co-authored a workshop paper on VLM-guided multi-arm robotic harvesting across 4,027 RGB-D images and 16,257 annotated apple instances.',
    },
    {
      icon: '🚀',
      title: 'Founder & President',
      description: "Founded UC Merced's first consulting club — 180 Degrees Consulting — growing to 50+ members from 100+ applicants.",
    },
    {
      icon: '🏛️',
      title: 'Elected to Student Government',
      description: 'Director of Academic Affairs & Senator at Large representing 10,000+ students, overseeing a 7-figure budget.',
    },
    {
      icon: '🔬',
      title: 'NSF Researcher',
      description: 'Authored an algorithms paper on Greedy Range Tree variants, submitted for conference review.',
    },
    {
      icon: '⭐',
      title: 'Excalidraw Contributor',
      description: 'Shipped production PRs to a project with 100k+ GitHub stars and 350k+ monthly users.',
    },
  ],

  // ---- Contact ------------------------------------------------------------
  contact: {
    message:
      "I'm always open to new projects, research, or just a good conversation about AI and building things. Reach out through any of the links below.",
    links: [
      { type: 'email', label: 'Email', href: 'mailto:anvikudaraya417@gmail.com' },
      { type: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/anvi-kudaraya' },
      { type: 'github', label: 'GitHub', href: 'https://github.com/anviik' },
      { type: 'portfolio', label: 'Portfolio', href: 'https://anvikudaraya.vercel.app' },
    ],
  },
}

export default siteData
