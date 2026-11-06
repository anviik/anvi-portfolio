// ============================================================================
//  siteData.js: ALL of your personal content lives here.
//  Edit the values below and the whole site updates. Nothing else to touch.
// ============================================================================

const siteData = {
  // ---- Identity -----------------------------------------------------------
  name: 'Anvi Kudaraya',
  firstName: 'Anvi',
  subtitle: 'Computer science and engineering student interested in SWE and AI.',
  // Small print along the bottom of the hero
  heroMeta: ['University of California, Merced', 'SF Bay Area, CA'],
  location: 'San Francisco Bay Area, CA',

  // ---- Navigation ---------------------------------------------------------
  nav: [
    { id: 'projects', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'blogs', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ],

  // ---- About --------------------------------------------------------------
  about: {
    greeting: "Hi, I'm",
    bio: [
      "I'm a computer science and engineering student at UC Merced, interested in full-stack development, backend systems, AI, and algorithms.",
    ],
    // Editorial "fact sheet": label / value pairs
    facts: [
      { label: 'Studying', value: 'CS & Engineering + Cognitive Science' },
      { label: 'School', value: 'University of California, Merced' },
      { label: 'Based in', value: 'SF Bay Area, CA' },
      { label: 'Focus', value: 'Full-stack · Backend · AI · Algorithms' },
    ],
    // "Currently" quick list
    now: [
      'Researching VLM-guided robotic harvesting @ YuCCA Lab',
      'Contributing to Excalidraw open source',
    ],
  },

  // ---- Skills: grouped. Logos are looked up by name in TechIcon.jsx --------
  skillGroups: [
    {
      category: 'Languages',
      items: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'C++' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'SQL' },
        { name: 'HTML / CSS' },
        { name: 'Bash' },
      ],
    },
    {
      category: 'AI / ML',
      items: [
        { name: 'PyTorch' },
        { name: 'scikit-learn' },
        { name: 'LangGraph' },
        { name: 'LangChain' },
        { name: 'Hugging Face' },
        { name: 'YOLO' },
        { name: 'SAM2 / SAM3' },
        { name: 'FAISS' },
      ],
    },
    {
      category: 'Frameworks & Tools',
      items: [
        { name: 'FastAPI' },
        { name: 'React' },
        { name: 'React Native' },
        { name: 'Flask' },
        { name: 'Node.js' },
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'PostgreSQL' },
        { name: 'Git' },
        { name: 'CI/CD' },
        { name: 'Linux' },
      ],
    },
    {
      category: 'Models & Platforms',
      items: [
        { name: 'Claude' },
        { name: 'OpenAI GPT' },
        { name: 'Gemini' },
        { name: 'CUDA' },
        { name: 'Next.js' },
        { name: 'Vercel' },
        { name: 'Expo' },
        { name: 'GCP' },
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'Figma' },
        { name: 'Raspberry Pi' },
      ],
    },
  ],

  // ---- Work Experience (newest first; `current: true` = ongoing) ----------
  experience: [
    {
      company: 'The Bank of New York (BNY)',
      short: 'BNY', logo: '/logos/bny-tile.png', logoBg: '#00243e',
      role: 'Software Engineering Intern',
      date: 'Jun 2026 - Aug 2026',
      description:
        'Built an AI agent to automate internal engineering workflows, designing the tool-calling and orchestration layer that let the agent take reliable, multi-step actions.',
      tech: ['Python', 'LLMs', 'AI Agents', 'Automation'],
    },
    {
      company: 'Bay Area Rapid Transit (BART)',
      short: 'BART', logo: '/logos/bart.svg',
      role: 'AI Software Engineer - Capstone',
      date: 'Jan 2026 - May 2026',
      description:
        'Built a React Native + Expo app for BART riders to report maintenance issues, with image upload, GPS station detection, and client-side compression. A FastAPI + SQLAlchemy backend routed tickets across 10 departments and 40+ incident types, with a fine-tuned YOLOv8 model powering routing. Deployed via Docker on AWS with GitHub Actions CI/CD.',
      tech: ['React Native', 'FastAPI', 'YOLOv8', 'AWS', 'Docker'],
    },
    {
      company: 'YuCCA Lab, UC Merced',
      short: 'YuCCA Lab', logo: '/logos/ucmerced.png',
      role: 'AI Research Engineering Intern',
      date: 'Jan 2026 - Present',
      current: true,
      description:
        'Built a batch inference pipeline across frontier VLMs (GPT, Gemini, Claude) over 219 orchard instances, and a two-stage 3D perception pipeline (SAM3 → SAM3DObjects) on remote GPU. Co-authored a CVPR 2026 workshop paper on VLM-guided multi-arm robotic harvesting across 4,027 RGB-D images.',
      tech: ['Python', 'VLMs', 'SAM3', 'CUDA', 'GPU'],
    },
    {
      company: 'Outamation (via Extern)',
      short: 'Outamation', logo: '/logos/outamation-tile.png',
      role: 'AI/ML Extern',
      date: 'Dec 2025 - Feb 2026',
      description:
        'Built document-intelligence pipelines combining OCR, NLP, LLMs, and RAG to turn unstructured financial PDFs into searchable data. Fine-tuned sentence-transformer embeddings with FAISS hybrid search for a chatbot that answers questions about multi-hundred-page documents.',
      tech: ['RAG', 'FAISS', 'NLP', 'LLMs', 'OCR'],
    },
    {
      company: 'CodeDay - Excalidraw',
      short: 'Excalidraw', logoIcon: 'excalidraw',
      role: 'Open-Source Software Engineer Intern',
      date: 'Nov 2025 - Present',
      current: true,
      description:
        'Contributing production PRs to a large TypeScript/React codebase, debugging state and event issues and collaborating with maintainers to deliver clean, tested features.',
      tech: ['TypeScript', 'React', 'Testing', 'Open Source'],
    },
    {
      company: 'Data Science Society at UC Merced',
      short: 'Data Science Society', logo: '/logos/dss.png', logoFill: true,
      role: 'Lead Technical Director',
      date: 'Nov 2025 - Present',
      current: true,
      description:
        'Leading 6+ technical projects and mentoring engineers across AI, data, and full-stack domains, driving project execution, code quality, and cross-team collaboration.',
      tech: ['Leadership', 'Mentorship', 'Machine Learning', 'Software Engineering'],
    },
    {
      company: 'Google Developer Student Clubs',
      short: 'Google Developer Student Clubs', logo: '/logos/gdsc-tile.png',
      role: 'Technical Lead',
      date: 'Sep 2025 - Present',
      current: true,
      description:
        'Leading a four-member team building a full-stack campus carpooling app, designing the backend, APIs, and CI/CD deployment on AWS.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'AWS', 'CI/CD'],
    },
    {
      company: 'Associated Students of UC Merced',
      short: 'ASUCM', logo: '/logos/asucm-tile.png',
      role: 'Senator, At-Large',
      date: 'May 2025 - Present',
      current: true,
      description:
        'Elected to represent 9,000+ students, managing a seven-figure budget to fund campus programs and shape policy for student advocacy and research initiatives.',
      tech: ['Leadership', 'Policy', 'Budgeting', 'Communication'],
    },
    {
      company: 'National Science Foundation',
      short: 'National Science Foundation', logo: '/logos/nsf.svg',
      role: 'Algorithm Design Theory Researcher',
      date: 'May 2025 - Jul 2025',
      description:
        'Designed two Greedy Range Tree variants for k-dimensional range queries, deriving Big-O bounds for query time, preprocessing, and space, and proving tradeoff conditions vs. standard range trees and kd-trees. Authored a paper submitted for conference review.',
      tech: ['Algorithms', 'Complexity', 'Research'],
    },
    {
      company: '180 Degrees Consulting - UC Merced',
      short: '180 Degrees Consulting', logo: '/logos/180dc.png',
      role: 'Founder & President',
      date: 'Oct 2024 - Present',
      current: true,
      description:
        "Founded and scaled UC Merced's first consulting club to 60+ members and 8 client projects, leading cross-functional teams to deliver product, tech, and strategy solutions.",
      tech: ['Leadership', 'Product Strategy', 'Project Management', 'Agile'],
    },
    {
      company: 'University of California, Merced',
      short: 'UC Merced', logo: '/logos/ucmerced.png',
      role: 'Software Engineering Intern',
      date: 'Aug 2024 - May 2025',
      description:
        'Optimized a reinforcement-learning irrigation model for almond orchards, cutting freshwater use by 20%. Built an API-driven pipeline ingesting CIMIS weather + IoT sensor data (80% less preprocessing) and a Flask dashboard visualizing CouchDB data with Pandas, NumPy, and Matplotlib.',
      tech: ['RL', 'Flask', 'Pandas', 'IoT', 'Raspberry Pi'],
    },
    {
      company: 'University of California, Merced',
      short: 'UC Merced', logo: '/logos/ucmerced.png',
      role: 'Calculus Learning Assistant',
      date: 'Aug 2024 - Present',
      current: true,
      description:
        'Co-teaching Calculus I-II for 250+ students, leading office hours and review sessions to strengthen problem-solving and conceptual understanding.',
      tech: ['Teaching', 'Tutoring', 'Mentorship'],
    },
  ],

  // ---- Projects (shown in the coverflow carousel) -------------------------
  // Update `link` to point anywhere you like ('#' = no external link).
  // Add `image: '/projects/shot.png'` to replace a project's monogram panel with a screenshot.
  projects: [
    {
      tag: 'AI · Web',
      title: 'Palette',
      short: 'AI reads your coloring, then shops it.',
      description:
        'Snap a selfie and a vision model reads your skin undertone, hair, and eyes to build a personal color palette, then matches you to real makeup, clothing, and skincare you can buy. Qwen2.5-VL-72B handles the analysis, Pinecone vector search over all-MiniLM-L6-v2 embeddings finds matches, and Google Shopping data (via SerpApi) surfaces shoppable products, all on Next.js serverless.',
      tech: ['Next.js', 'VLMs', 'Pinecone', 'Vercel'],
      link: 'https://palette-henna.vercel.app',
    },
    {
      tag: 'AI · Mobile',
      title: 'MirrorVerse',
      short: 'A flight-simulator for life decisions.',
      description:
        'Structure any life choice as a knowledge graph and let 7 adversarial AI agents debate it across rounds, returning the risks, contradictions, and missing information, personalized by memory of how you actually decide. A LangGraph debate engine over Claude powers the agents, with a FastAPI backend, React Native / Expo app, and a Neo4j Aura + Mem0 + Zep memory layer deployed on GCP Cloud Run.',
      tech: ['Claude', 'LangGraph', 'FastAPI', 'React Native', 'Neo4j'],
      link: 'https://github.com/anviik/mirrorverse',
    },
    {
      tag: 'Open Source',
      title: 'Excalidraw',
      short: 'Contributing to a tool with 100k+ stars.',
      description:
        'Contributor to Excalidraw (100k+ GitHub stars, 350k+ monthly users). Authored 3 production PRs debugging event handling and shared-state issues in the laser pointer and arrow tools, working with maintainers through reviews while keeping CI green.',
      tech: ['TypeScript', 'React', 'Canvas'],
      link: 'https://github.com/excalidraw/excalidraw',
    },
    {
      tag: 'Mobile · AI',
      title: 'BART Rider Maintenance App',
      short: 'Report transit issues with AI routing.',
      description:
        'A React Native + Expo app letting riders report maintenance issues with photos, GPS station detection, and client-side compression. A fine-tuned YOLOv8 model routes tickets across 10 departments and 40+ incident types via a FastAPI backend on AWS.',
      tech: ['React Native', 'FastAPI', 'YOLOv8', 'AWS'],
      link: '#',
    },
    {
      tag: 'AI · NLP',
      title: 'Document Intelligence RAG',
      short: 'Ask questions across 100+ page PDFs.',
      description:
        'A retrieval-augmented pipeline that turns unstructured financial PDFs into searchable data. OCR + NLP + fine-tuned sentence-transformer embeddings with FAISS hybrid search power a chatbot that answers natural-language questions about hundred-page documents.',
      tech: ['RAG', 'FAISS', 'LangChain', 'Python'],
      link: '#',
    },
    {
      tag: 'Research · CV',
      title: 'Orchard 3D Perception',
      short: 'VLM-guided robotic apple harvesting.',
      description:
        'A two-stage 3D perception pipeline (SAM3 → SAM3DObjects) extracting center-point coordinates from Gaussian-splat outputs on remote GPU. Co-authored a CVPR 2026 workshop paper spanning 4,027 RGB-D images and 16,257 annotated apple instances.',
      tech: ['SAM3', 'VLMs', 'CUDA', 'Python'],
      link: '#',
    },
    {
      tag: 'ML · Sustainability',
      title: 'Smart Irrigation RL',
      short: 'Cut orchard freshwater use by 20%.',
      description:
        'A reinforcement-learning model for almond-orchard irrigation, reducing freshwater consumption by 20%. Paired with an automated CIMIS + IoT data pipeline (80% less preprocessing) and a Flask dashboard for live sensor visualization.',
      tech: ['RL', 'Flask', 'Pandas', 'IoT'],
      link: '#',
    },
  ],

  // ---- Blog ---------------------------------------------------------------
  //  Each post: card preview data + a `body` array of typed blocks.
  //  Block types:
  //    'p'       = paragraph
  //    'h2'      = section heading
  //    'image'   = full-width figure { src, alt, caption }
  //    'split'   = image beside text: { side: 'left'|'right', image, blocks: [...] }
  //    'quote'   = pull quote
  //    'table'   = { head: [...], rows: [[...]] }
  //    'list'    = bulleted list
  //    'lessons' = titled takeaway cards
  //    'note'    = closing italic aside
  blogs: [
    {
      slug: 'cvpr-agricultural-robotics',
      kicker: 'Research · Computer Vision',
      date: 'Fall 2026',
      title: 'From CVPR to Vision-Language Models in the Orchard',
      lead: 'What a year of agricultural robotics research taught me about the gap between seeing and doing.',
      dek: 'Our harvesting research reached a CVPR workshop, then grew into a benchmark asking whether pretrained VLMs can plan for multi-arm fruit-picking robots.',
      cover: '/images/blogs/cvpr-cover.png',
      thumbFit: 'contain', // a diagram, so show all of it on its own white background
      coverAlt: 'Diagram comparing a traditional 3D perception and multi-arm planner pipeline with a zero-shot VLM pipeline for apple harvesting',
      tags: ['Computer Vision', 'Vision-Language Models', 'Robotics', '3D Perception'],
      links: [{ label: 'Read the paper on arXiv', href: 'https://arxiv.org/abs/2609.13606v1' }],
      body: [
        {
          type: 'p',
          text: 'Over the past year, I have had the opportunity to work on research at the intersection of artificial intelligence, computer vision, and agriculture. What started as an opportunity to explore how modern vision models could be applied to agricultural environments eventually led to research presented through a CVPR workshop and continued into new work involving Vision-Language Models and 3D perception.',
        },
        {
          type: 'p',
          text: 'One of the highlights of this experience was having our agricultural robotics research accepted to a workshop at the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR). The conference took place in Denver, Colorado, and it was exciting to see our work become part of a much larger community focused on advancing computer vision.',
        },
        {
          type: 'image',
          src: '/images/blogs/cvpr-poster.png',
          alt: 'Research poster titled Advancing Multi-Arm Robotic Apple Harvesting Through 3D Perception and Intelligent Planning, showing motivations, a perception and planning pipeline, and preliminary SAM3 and Grounding DINO results',
          caption: 'Our poster: Advancing Multi-Arm Robotic Apple Harvesting Through 3D Perception and Intelligent Planning (UC Merced and UC Davis).',
        },

        { type: 'h2', text: 'From Computer Vision to Vision-Language Models' },
        {
          type: 'p',
          text: 'Since then, my research has continued to evolve. Most recently, I contributed to a paper exploring whether pretrained Vision-Language Models, or VLMs, can be used for multi-arm robotic fruit harvesting.',
        },
        {
          type: 'p',
          text: 'The work looks at a challenging problem in agricultural robotics. A robotic harvesting system not only needs to recognize fruit, but also determine where that fruit is located in 3D space, decide which robotic arm should pick it, and generate a harvesting path without causing collisions between multiple arms.',
        },
        {
          type: 'p',
          text: 'Our research introduces a benchmark for evaluating pretrained VLMs on **zero-shot multi-arm fruit harvesting planning** using real-world apple and citrus orchard images. Instead of requiring a model to be specifically retrained for every orchard environment, we explored whether general-purpose VLMs could reason directly from an orchard image and generate harvesting sequences and 3D waypoints for multiple robotic arms.',
        },
        {
          type: 'p',
          text: 'One part of the project that I found especially interesting was comparing this approach against a more traditional computer vision and robotics pipeline. The traditional pipeline uses separate stages for fruit detection and segmentation, 3D localization, task allocation, and trajectory optimization. The VLM approach instead attempts to reason about the scene and directly produce a structured harvesting plan.',
        },
        {
          type: 'p',
          text: 'We evaluated several open-source and closed-source VLMs and looked beyond whether a model could simply recognize fruit. We also measured how accurately the models could generate harvesting waypoints, how efficiently they planned trajectories, and whether their multi-arm assignments could result in collisions.',
        },
        {
          type: 'p',
          text: 'The results showed something that I found particularly interesting. Modern VLMs are already capable of generating useful multi-arm harvesting plans without task-specific training, but understanding an image at a high level is very different from producing the precise 3D coordinates required for a physical robot. Accurate waypoint generation and safe coordination between robotic arms remain major challenges.',
        },

        { type: 'h2', text: 'Experimenting with 3D Vision' },
        {
          type: 'p',
          text: "Outside of the main paper, I also had the opportunity to experiment with Meta's SAM 3D model on some of the agricultural imagery we were working with.",
        },
        {
          type: 'p',
          text: 'This was especially interesting because much of our research revolves around the difference between understanding **what** exists in an image and understanding **where it exists in physical space**. Testing newer 3D vision approaches gave me another perspective on how foundation models could eventually help robots reason about real-world agricultural environments.',
        },
        {
          type: 'p',
          text: 'It was also a chance for me to explore research outside of my assigned experiments. One of my favorite parts of research has been being able to take a new model or idea, test it on the problems we are already working on, and see where it succeeds and where it still struggles.',
        },

        { type: 'h2', text: 'What I Took Away From the Experience' },
        {
          type: 'p',
          text: 'Before working on these projects, I mostly thought of computer vision in terms of tasks such as classification, detection, and segmentation. Agricultural robotics showed me how much more complicated the problem becomes once the output of a model has to translate into an action in the physical world.',
        },
        {
          type: 'p',
          text: 'A model recognizing an apple is useful. A robot, however, needs to know where that apple is, which arm should reach it, how that arm should move, and whether that movement will interfere with another robot.',
        },
        {
          type: 'p',
          text: 'That difference between **vision and action** has become one of the most interesting parts of this research for me.',
        },
        {
          type: 'p',
          text: 'Having the opportunity to contribute to research connected to CVPR, experiment with emerging models such as SAM 3D, and continue into work involving VLM-based robotic planning has given me a much deeper understanding of how quickly AI and computer vision are evolving.',
        },
        {
          type: 'p',
          text: 'It has also made me increasingly interested in work that goes beyond evaluating models in isolation and instead asks a bigger question: **How can we turn the capabilities of foundation models into systems that can reliably interact with the real world?**',
        },
        {
          type: 'p',
          text: "I'm excited to continue exploring that question through AI, computer vision, and robotics research.",
        },
      ],
    },
    {
      slug: 'entering-industry-expo',
      kicker: 'Leadership · Student Government',
      date: 'February 2026',
      title: "Building UC Merced's First Entering Industry Expo",
      lead: '350+ students. 11 companies. 13 student organizations. One room that had never existed on our campus before.',
      dek: 'As an ASUCM Senator at Large I pitched, planned, and emceed the first event of its kind at UC Merced, and it is coming back bigger in Fall 2026.',
      cover: '/images/blogs/emcee.jpg',
      coverAlt: 'Anvi emceeing the Entering Industry Networking Expo on stage at UC Merced',
      tags: ['Event Planning', 'Corporate Outreach', 'Public Speaking', 'Student Advocacy'],
      stats: [
        { value: '350+', label: 'Students attended' },
        { value: '11', label: 'Companies hosted' },
        { value: '13', label: 'Clubs & orgs' },
      ],
      body: [
        {
          type: 'p',
          text: 'Last year, as a Senator at Large for ASUCM, I hosted UC Merced’s first ever Entering Industry Networking Expo. It was the first event of its kind at our university, and by the time the doors closed we had brought together 11 companies, roughly 13 registered clubs and organizations, and over 350 undergraduates from across every engineering discipline on campus.',
        },
        {
          type: 'p',
          text: 'I also got to MC it, which meant standing in front of that room and watching an idea I had pitched months earlier turn into something real.',
        },
        {
          type: 'image',
          src: '/images/blogs/ExpoSession.jpg',
          alt: 'A full ballroom of students networking with recruiters at company and club tables',
          caption: 'Peak expo floor: recruiters, student orgs, and 350+ undergraduates in one room.',
        },

        { type: 'h2', text: 'Why I wanted this to exist' },
        {
          type: 'split',
          side: 'right',
          image: {
            src: '/images/blogs/RCOTabling.jpg',
            alt: 'A student shaking hands with a recruiter across a tabling booth',
            caption: 'The whole point, in one frame.',
          },
          blocks: [
            {
              type: 'p',
              text: 'UC Merced is the youngest campus in the UC system, and that comes with a specific kind of gap. Our students are talented, hungry, and building genuinely impressive things, but we do not always have the same recruiting pipelines that older campuses take for granted. Companies show up where they already know the talent is.',
            },
            {
              type: 'p',
              text: 'My argument was simple: if we build the room, they will come, and once they come they will keep coming.',
            },
            {
              type: 'p',
              text: 'As someone who cares deeply about tech and wants to spend my career in it, that gap was personal. I knew what it felt like to want a way in and not be sure where the door was. I wanted an event where a sophomore who had never spoken to a recruiter could walk in, shake a hand, and leave with a contact and a little more confidence than they came in with.',
            },
          ],
        },

        { type: 'h2', text: 'Turning the idea into an event' },
        {
          type: 'p',
          text: 'Coming up with the concept was the easy part. Making it happen meant a lot of coordination across groups that do not always work together.',
        },
        {
          type: 'split',
          side: 'left',
          narrow: true,   // portrait poster, keep the figure column slim
          image: {
            src: '/images/blogs/Companies.png',
            alt: 'Sponsor board showing the logos of every company that attended the expo',
            caption: 'Eleven yeses: ENGEO, Kiewit, Turner Construction, Tesla, dsm-firmenich, TRC, MBC BioLabs, Transdev, USDA NRCS, Veeva, and the UC Merced Student Career Center.',
          },
          blocks: [
            {
              type: 'p',
              text: 'I collaborated with school executives and the Student Career Center to get institutional backing, secure the space, and make sure the event fit into the broader career programming already on campus.',
            },
            {
              type: 'p',
              text: 'On the student side, I worked with 13 registered clubs and organizations to table the event, which was intentional: I wanted students to see their peers alongside the recruiters, so the professional and the community sides of engineering at UC Merced were visible in the same space.',
            },
            {
              type: 'p',
              text: 'Company outreach was its own track. Getting 11 organizations to commit to a first-year event with no track record meant selling a vision rather than a result. Every yes made the next pitch easier.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Then came the logistics that nobody sees and everybody notices when they go wrong: floor layout, table assignments, check-in flow, signage, run of show, and a script for the mic.',
        },

        { type: 'h2', text: 'By the numbers' },
        {
          type: 'table',
          head: ['Metric', 'Result'],
          rows: [
            ['Undergraduate attendees', '350+'],
            ['Companies hosted', '11'],
            ['Student clubs and organizations tabling', '13'],
            ['Engineering disciplines represented', 'All majors across the School of Engineering'],
            ['Precedent', 'First event of its kind in UC Merced history'],
          ],
        },
        {
          type: 'split',
          side: 'right',
          image: {
            src: '/images/blogs/PanelSession.jpg',
            alt: 'A packed room of students seated for the industry panel session',
            caption: 'The panel session. Standing room by the time it started.',
          },
          blocks: [
            {
              type: 'p',
              text: 'For a first run, with no prior attendance data to plan against and no template to copy from, hitting 350+ students told me the demand had been there the whole time.',
            },
            {
              type: 'quote',
              text: 'It was just waiting on somebody to build the room.',
            },
          ],
        },

        { type: 'h2', text: 'What I took away from it' },
        {
          type: 'lessons',
          items: [
            {
              lead: 'Ambitious events are mostly logistics.',
              text: 'The vision took an afternoon. The execution took months of emails, follow-ups, and calendar wrangling. I got a lot more comfortable with the unglamorous half.',
            },
            {
              lead: 'Being new is leverage.',
              text: 'At an older campus, an idea like this would have had ten predecessors and a rulebook. At UC Merced, I got to define what the event was. Being part of a growing school means the things you build actually become the standard.',
            },
            {
              lead: 'Running the mic is a skill.',
              text: 'MCing a 350-person event taught me how to hold a room, keep energy up between segments, and adjust in real time when the schedule slips. That is not a thing you learn from planning documents.',
            },
          ],
        },

        { type: 'h2', text: "What's next" },
        {
          type: 'split',
          side: 'left',
          narrow: true,   // portrait shot, keep the figure column slim
          image: {
            src: '/images/blogs/BanquetPresenation.png',
            alt: 'Anvi and Miranda Bada presenting the expo at the banquet',
            caption: 'Presenting the expo, billed on the slide as our ASUCM senator project.',
          },
          blocks: [
            {
              type: 'p',
              text: 'I am now serving as ASUCM Director of Academic Affairs on the executive team, and I am bringing the Expo back in Fall 2026, this time with the full weight of an executive office behind it.',
            },
            { type: 'p', text: 'The goals for round two:' },
            {
              type: 'list',
              items: [
                'Grow past 11 companies, with a deliberate push toward broader industry representation',
                'Beat 350 attendees and widen participation beyond engineering',
                'Structured programming alongside open networking: resume reviews and employer panels',
                'An operational playbook so the event runs every year without depending on any one person',
              ],
            },
          ],
        },
        {
          type: 'p',
          text: 'That last point matters most to me. What started as one senator’s idea is now a recurring event on the UC Merced calendar. I did not just host something once. I started a legacy that will keep running after I graduate.',
        },

        { type: 'h2', text: 'The bigger goal' },
        {
          type: 'p',
          text: 'I want UC Merced to get the recognition it deserves. Not as the newest UC, but as a place where companies actively recruit because they know what our students can do. One expo does not fix that on its own, but 11 companies who now have a relationship with this campus is a real start, and next year it will be more.',
        },
        {
          type: 'p',
          text: 'Getting to be part of that growth, at a school still writing its own history, has been one of the most rewarding things I have done in college. I am not close to done with it.',
        },
        {
          type: 'note',
          text: 'Interested in bringing your company to the Fall 2026 Entering Industry Expo? Reach out at anvikudaraya417@gmail.com.',
        },
      ],
    },
    {
      slug: 'bart-capstone-ticket-routing',
      kicker: 'Capstone · Applied AI',
      date: 'Spring 2026',
      title: 'Teaching a Maintenance App to Route Its Own Tickets',
      lead: 'A React Native app, a FastAPI backend, and a YOLOv8 model that learns which department to send a broken escalator to. Winner of our capstone category.',
      dek: 'My team built the app riders use to report a problem, and trained the model that decides which of ten BART departments owns it.',
      cover: '/images/blogs/bart-cover.jpg',
      coverAlt: 'Our capstone team standing in front of the BART incident identification poster at the showcase',
      tags: ['React Native', 'FastAPI', 'YOLOv8', 'RLHF', 'AWS', 'Docker'],
      stats: [
        { value: '1st', label: 'Place in category' },
        { value: '10', label: 'Departments routed' },
        { value: '100', label: 'Labels per retrain' },
      ],
      body: [
        {
          type: 'p',
          text: 'BART moves hundreds of thousands of people a day, and when something breaks, the person most likely to notice it first is a rider standing right in front of it. The gap is that riders have no fast way to say so, and even when a report does come in, somebody still has to read it and decide which of ten departments owns the problem.',
        },
        {
          type: 'p',
          text: 'My capstone team built the app for the first half of that and trained a model for the second. It won our category at the capstone showcase.',
        },

        { type: 'h2', text: 'What we shipped' },
        { type: 'p', text: 'Three pieces, built to work as one system across four layers:' },
        {
          type: 'list',
          items: [
            'A client layer: a mobile app riders use to report an issue in under a minute, and an admin dashboard where employees work the resulting queue',
            'A backend layer: a REST API that handles requests and routes tickets, plus a data processing layer that formats incident records and manages database connections',
            'A model serving layer: a classifier that predicts the incident type, a description model that writes a summary of what’s in the photo, and a retrain job that pulls both forward',
            'A storage layer: S3 for raw and processed images, and a results database holding incident metadata',
          ],
        },
        {
          type: 'p',
          text: 'The model serving layer is where the interesting engineering is, so I’ll spend the most time there.',
        },

        { type: 'h2', text: 'The mobile app' },
        {
          type: 'p',
          text: 'I built the client in React Native with Expo. The design constraint was that a rider reporting a broken elevator is standing in a loud station on bad platform wifi and has about thirty seconds of patience. Every technical decision came out of that.',
        },
        {
          type: 'flow',
          audience: 'What riders see',
          title: 'The rider flow, screen by screen',
          note: 'These are the actual screens a passenger moves through in the app, from spotting a problem on the platform to teaching the model that routes it. Steps 3 and 4 are entirely optional.',
          steps: [
            {
              src: '/images/blogs/screen1.PNG',
              alt: 'BART Report an Incident screen with photo upload, GPS-detected station, and description field',
              title: 'Report an incident',
              text: 'The only screen a rider has to fill out: add a photo, confirm the station, describe what they saw, submit. The station arrives pre-filled from device location. That “Dublin / Pleasanton” row with the GPS chip is detected, not chosen, so nobody scrolls fifty stations on platform wifi. The photo is compressed on-device before it leaves the phone.',
            },
            {
              src: '/images/blogs/screen2.png',
              ratio: 0.505,   // crops the mobile-Safari chrome off the bottom
              alt: 'Report Submitted confirmation showing ticket ID, station, assigned department, and a Help improve BART’s AI button',
              title: 'Report submitted',
              text: 'Confirmation with a ticket ID and, most importantly, the department the model already picked. “Assigned To: Buildings” is the classifier’s routing decision, shown back to the rider seconds after they hit submit. The quieter button underneath, “Help improve BART’s AI,” is the opt-in into the next two screens.',
            },
            {
              src: '/images/blogs/screen3.png',
              ratio: 0.505,   // crops the mobile-Safari chrome off the bottom
              alt: 'Help BART labeling screen asking what is in this photo, with a list of incident categories',
              title: 'Label a photo',
              text: 'Riders who opt in see a photo and pick its category from the same incident taxonomy the model predicts over. The counter tracks their tally and offers to let them stop at any point, which is the whole design: no account, no commitment, leave whenever. Every tap is a human-verified label the system did not have to pay an annotator for.',
            },
            {
              src: '/images/blogs/screen4.png',
              ratio: 0.505,   // crops the mobile-Safari chrome off the bottom
              alt: 'Thanks for helping confirmation screen with a Submit Another Report button',
              title: 'Thanks for helping',
              text: 'The exit. Labels collected here queue up alongside the corrections admins make when they reassign a misrouted ticket, and every hundred of them trigger a retrain, so the routing gets sharper as a by-product of people using the app.',
            },
          ],
        },
        {
          type: 'lessons',
          items: [
            {
              lead: 'GPS-based station detection.',
              text: 'Making people scroll a dropdown of BART stations is exactly the kind of friction that kills a report halfway through. The app reads device location on open and resolves it to the nearest station, so the field is pre-filled before the user thinks about it. They can override it, but most of the time they don’t need to.',
            },
            {
              lead: 'Client-side image compression.',
              text: 'Raw phone photos are several megabytes, and uploading one over underground platform connectivity is where a report dies. I compress on device before the request goes out, which cut upload payloads enough to make submissions reliable on weak connections instead of a coin flip.',
            },
            {
              lead: 'Debugging what actually broke.',
              text: 'Uploads and geolocation were the two features that failed in ways I could not reproduce on my own device. Permission states differ across platforms, network conditions vary, and the failure mode is usually silent. I added structured logging across the upload and location paths so every failure carried the context needed to diagnose it: which stage failed, what the permission state was, what the payload looked like. That turned “it doesn’t work sometimes” into a specific, fixable list.',
            },
          ],
        },

        { type: 'h2', text: 'The backend' },
        {
          type: 'p',
          text: 'The API is FastAPI with SQLAlchemy ORM, backed by AWS S3 for image storage. It handles ticket creation, image upload, department routing, filtering, and admin status updates.',
        },
        {
          type: 'p',
          text: 'The routing surface is the part that made the data model non-trivial: 10 departments and 40+ incident types, which is a mapping with real ambiguity in it. A shattered platform light could reasonably belong to facilities or to electrical, and the schema had to represent that without hardcoding assumptions we would need to unwind later.',
        },
        {
          type: 'p',
          text: 'I wrote pytest unit and integration tests covering routing logic and upload validation. Routing was worth testing exhaustively because a wrong department is worse than no ticket. It looks handled while sitting in the wrong queue.',
        },

        { type: 'h2', text: 'The AI: classification as a routing decision' },
        {
          type: 'quote',
          text: 'We did not build an image classifier and then figure out what to do with the labels. We built a routing model, and classification happened to be how it got there.',
        },
        {
          type: 'p',
          text: 'I fine-tuned a YOLOv8 classification model on maintenance issue imagery to predict incident type from a rider’s photo, then mapped that prediction into the department routing layer. When a rider submits a photo of a leaking ceiling, the model does the categorization a human dispatcher would otherwise do manually, and the ticket lands in the right queue immediately.',
        },
        {
          type: 'p',
          text: 'YOLOv8 was the right choice for a few concrete reasons. It fine-tunes well on a modest dataset, which mattered because maintenance issue photos are not something you download from Hugging Face in bulk. It’s fast enough to run inference on submission without making the rider wait. And the classification variant kept the problem scoped to what we actually needed rather than paying for detection we would not use.',
        },

        { type: 'h2', text: 'The second model: describing what’s in the photo' },
        {
          type: 'p',
          text: 'Classification gets a ticket to the right department. It does not tell the person in that department what they are looking at.',
        },
        {
          type: 'p',
          text: 'So the model serving layer runs a second job: image description, which generates a written summary of the incident from the photo. The admin dashboard shows that summary in the queue, which means an employee can triage a list of twenty tickets by reading rather than opening twenty images one at a time.',
        },
        {
          type: 'p',
          text: 'This is a small feature that changes the ergonomics of the whole admin side. A photo requires a click and a load. A sentence is scannable. When the queue gets long, that difference decides whether the tool gets used.',
        },
        {
          type: 'p',
          text: 'It also pairs with the classifier in a useful way. The label says what category, the description says what specifically, and together they give a department enough to prioritize before anyone opens the ticket.',
        },

        { type: 'h2', text: 'The part I’m most proud of: a retraining loop that costs nothing extra' },
        {
          type: 'p',
          text: 'Any deployed classifier drifts. New incident types appear, seasons change what a station looks like, and the model’s confident wrong answers are the expensive ones. The standard fix is periodic reannotation, which means paying someone to relabel data, which means it never actually happens.',
        },
        {
          type: 'p',
          text: 'So I prototyped an RLHF-style verified-label retraining pipeline built on a signal the system already generates for free.',
        },
        {
          type: 'quote',
          text: 'When an admin receives a misrouted ticket and reassigns it, that reassignment is a label. A human expert just looked at the image, disagreed with the model, and supplied the correct answer.',
        },
        {
          type: 'p',
          text: 'That’s a verified correction, produced as a side effect of work someone was doing regardless. The pipeline captures those verified labels, accumulates them, and triggers a retrain every 100 labeled images.',
        },
        {
          type: 'p',
          text: 'That threshold was a deliberate tradeoff. Retrain too often and you burn compute on noise from a handful of corrections. Retrain too rarely and the model stays wrong about a new failure mode for months. A hundred was small enough that the model tracks real drift and large enough that a few unusual tickets don’t drag it around.',
        },
        {
          type: 'p',
          text: 'No annotation contract, no labeling sprint, no separate workflow for anyone to remember. The system gets more accurate as a function of being used. That’s the design principle I keep coming back to: the best training data is the data your users are already producing. You just have to notice it and build the plumbing to catch it.',
        },

        { type: 'h2', text: 'The other half: the admin dashboard' },
        {
          type: 'p',
          text: 'Everything above is what a rider touches. The other client is the one BART staff use, and it is where a routed ticket becomes work somebody actually does.',
        },
        {
          type: 'flow',
          audience: 'What staff see',
          title: 'The admin flow, screen by screen',
          note: 'These are the actual screens a BART employee works through, from signing in to confirming a fix. Step 4 is also where the retraining loop gets its labels.',
          wide: true,
          columns: 3,
          steps: [
            {
              src: '/images/blogs/screen5.png',
              ratio: 1.9,
              pos: 'top',
              alt: 'BART admin log in screen with username and password fields',
              title: 'Sign in',
              text: 'Staff log in to a dashboard scoped to their own department, so nobody is handed a queue that is not theirs.',
            },
            {
              src: '/images/blogs/screen6.png',
              ratio: 1.9,
              pos: 'top',
              alt: 'List of BART maintenance departments including Fare Collection, Buildings, Comms, and Track',
              title: 'Pick a department',
              text: 'All ten maintenance departments. Every one of the 40+ incident types the classifier predicts maps into one of these rows, which is the routing layer itself.',
            },
            {
              src: '/images/blogs/screen7.png',
              ratio: 1.9,
              pos: '50% 41%',
              alt: 'Buildings department dashboard showing total issues, issues in progress, in queue, and resolved',
              title: 'See the queue',
              text: 'Total issues, today’s count, and three buckets: in progress, in queue, resolved. This is the whole workload for one department at a glance.',
            },
            {
              src: '/images/blogs/screen8.png',
              ratio: 1.9,
              pos: '50% 45%',
              alt: 'Issue detail view with a photo of graffiti and a dropdown to set status to In Progress, In Queue, or Resolved',
              title: 'Change a status',
              text: 'Opening a ticket shows the rider’s photo, submission time, and station, with a dropdown to move it between In Queue, In Progress, and Resolved. Correcting a misrouted ticket here is exactly what produces a verified label.',
            },
            {
              src: '/images/blogs/screen9.png',
              ratio: 1.9,
              pos: '50% 52%',
              alt: 'Queued issue showing a platform photo with a passenger’s face automatically blurred, plus an AI-written description',
              title: 'Blurred for safety',
              text: 'Faces are blurred automatically before any employee sees the photo. Riders shoot crowded platforms, so anonymizing bystanders was a requirement rather than a nicety. The AI description sits underneath: “a passenger is standing dangerously close to the platform edge.”',
            },
            {
              src: '/images/blogs/screen10.png',
              ratio: 1.9,
              pos: '50% 44%',
              alt: 'Resolved issue view showing before and after photos side by side with submission and fix dates',
              title: 'Confirm the fix',
              text: 'Once a ticket closes, the resolved view pairs the original photo with the follow-up so anyone can verify the work, with the submission and fix dates recorded beside it.',
            },
          ],
        },

        { type: 'h2', text: 'Getting it deployed' },
        {
          type: 'p',
          text: 'We deployed as a proof of concept on Docker and AWS, with GitHub Actions running CI/CD, and every change went in through peer-reviewed pull requests.',
        },
        {
          type: 'p',
          text: 'The PR discipline mattered more than it sounds like it should for a student project. Working across a mobile client, a Python API, and an ML pipeline means the interfaces between them are where things break, and code review is where those mismatches surface before they become a broken demo. It also meant the repo stayed in a state where a teammate could pick up a piece they had not written.',
        },

        { type: 'h2', text: 'What I’d build next' },
        {
          type: 'list',
          items: [
            'Confidence thresholds on routing: auto-route above a confidence bar, flag for human review below it, so the model’s uncertainty becomes a feature instead of a silent failure',
            'Duplicate detection: twenty riders reporting the same broken escalator should be one ticket with twenty confirmations, not twenty tickets',
            'Closing the loop with riders: people report more when they see something happen',
          ],
        },

        { type: 'h2', text: 'Why this one mattered to me' },
        {
          type: 'p',
          text: 'This is the project where the software engineering and the machine learning stopped being separate things I was learning. The model was only useful because there was a real ticket queue behind it, and the queue was only good because a model kept it sorted. Making that work end to end, from a compressed image leaving a phone in an underground station to a verified label improving the classifier weeks later, changed what I want to work on.',
        },
        {
          type: 'p',
          text: 'Before this, I liked AI and I liked building software, but I held them as two separate tracks. This project showed me the part I actually care about is where they meet. A model with no product around it is a notebook nobody uses. A product with no intelligence in it makes people do work a machine should be doing. The problems worth solving live in between, and they are systems problems as much as they are model problems.',
        },
        {
          type: 'p',
          text: 'That is the direction I am pointed now. I want to keep building intelligent systems that ship to real users, keep getting deeper into the engineering that makes a model useful in production, and keep looking for the places where a system can learn from work people are already doing. This project was the start of that, not the end of it.',
        },
        {
          type: 'note',
          text: 'Winning our capstone category was a good afternoon. Getting the retraining loop to work was the better one.',
        },
      ],
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
