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
      company: 'Outamation (via Extern)',
      role: 'AI/ML Extern',
      date: 'Dec 2025 — Feb 2026',
      description:
        'Built document-intelligence pipelines combining OCR, NLP, LLMs, and RAG to turn unstructured financial PDFs into searchable data. Fine-tuned sentence-transformer embeddings with FAISS hybrid search for a chatbot that answers questions about multi-hundred-page documents.',
      tech: ['RAG', 'FAISS', 'NLP', 'LLMs', 'OCR'],
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
      company: 'University of California, Merced',
      role: 'Software Engineering Intern',
      date: 'Aug 2024 — May 2025',
      description:
        'Optimized a reinforcement-learning irrigation model for almond orchards, cutting freshwater use by 20%. Built an API-driven pipeline ingesting CIMIS weather + IoT sensor data (80% less preprocessing) and a Flask dashboard visualizing CouchDB data with Pandas, NumPy, and Matplotlib.',
      tech: ['RL', 'Flask', 'Pandas', 'IoT', 'Raspberry Pi'],
    },
  ],

  // ---- Projects (shown in the hover carousel) -----------------------------
  // Update `link` to point anywhere you like ('#' = no external link).
  projects: [
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
