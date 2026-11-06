import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiGnubash,
  SiPytorch, SiScikitlearn, SiLangchain, SiHuggingface, SiFastapi, SiReact,
  SiFlask, SiNodedotjs, SiDocker, SiPostgresql, SiGit, SiGithubactions, SiGithub,
  SiLinux, SiNvidia, SiPandas, SiNumpy, SiRaspberrypi, SiExcalidraw, SiExpo,
  SiFigma, SiNextdotjs, SiVercel, SiGooglecloud, SiClaude, SiOpenai, SiGooglegemini,
} from 'react-icons/si'
import {
  FaJava, FaAws, FaDatabase, FaBrain, FaFlask, FaBullseye, FaScissors,
  FaMicrochip, FaCode, FaDiagramProject,
} from 'react-icons/fa6'

// name (lowercased) -> [IconComponent, brandColor]. A null color means the brand
// mark is black or white, so it follows the text color and stays visible in both themes.
const MAP = {
  // Languages
  'python': [SiPython, '#3776AB'],
  'java': [FaJava, '#E76F00'],
  'c++': [SiCplusplus, '#00599C'],
  'javascript': [SiJavascript, '#E0B400'],
  'typescript': [SiTypescript, '#3178C6'],
  'sql': [FaDatabase, '#2b7f9e'],
  'html / css': [SiHtml5, '#E34F26'],
  'html/css': [SiHtml5, '#E34F26'],
  'bash': [SiGnubash, '#4EAA25'],

  // AI / ML
  'pytorch': [SiPytorch, '#EE4C2C'],
  'scikit-learn': [SiScikitlearn, '#F7931E'],
  'langgraph': [FaDiagramProject, null],
  'langchain': [SiLangchain, null],
  'hugging face': [SiHuggingface, '#E8A800'],
  'yolo': [FaBullseye, '#00A98F'],
  'yolov8': [FaBullseye, '#00A98F'],
  'sam2 / sam3': [FaScissors, '#7b5ea7'],
  'sam3': [FaScissors, '#7b5ea7'],
  'faiss': [FaDatabase, '#4267B2'],
  'vlms': [FaBrain, '#b0497b'],
  'llms': [FaBrain, '#b0497b'],
  'nlp': [FaBrain, '#5f9e58'],
  'rag': [FaDatabase, '#2b7f9e'],
  'ocr': [FaCode, '#7b5ea7'],
  'cuda': [SiNvidia, '#76B900'],
  'gpu': [SiNvidia, '#76B900'],
  'rl': [FaBrain, '#c98a3c'],
  'ai agents': [FaBrain, '#b0497b'],
  'prompt engineering': [FaBrain, '#5f9e58'],
  'hci': [FaBrain, '#c98a3c'],
  'automation': [FaDiagramProject, '#2b7f9e'],
  'claude': [SiClaude, '#D97757'],
  'openai gpt': [SiOpenai, null],
  'gemini': [SiGooglegemini, '#4285F4'],

  // Frameworks & tools
  'fastapi': [SiFastapi, '#009688'],
  'react': [SiReact, '#1ba9cf'],
  'react native': [SiReact, '#1ba9cf'],
  'flask': [SiFlask, null],
  'node.js': [SiNodedotjs, '#5FA04E'],
  'docker': [SiDocker, '#2496ED'],
  'aws': [FaAws, '#FF9900'],
  'postgresql': [SiPostgresql, '#4169E1'],
  'git': [SiGit, '#F05032'],
  'ci/cd': [SiGithubactions, '#2088FF'],
  'linux': [SiLinux, null],
  'pandas': [SiPandas, null],
  'numpy': [SiNumpy, '#4DABCF'],
  'iot': [FaMicrochip, '#2b7f9e'],
  'raspberry pi': [SiRaspberrypi, '#A22846'],
  'expo': [SiExpo, null],

  // Project-specific
  'canvas': [SiExcalidraw, '#6965DB'],
  'open source': [SiGithub, null],
  'figma': [SiFigma, '#F24E1E'],
  'next.js': [SiNextdotjs, null],
  'vercel': [SiVercel, null],
  'neo4j': [FaDatabase, '#4581C3'],
  'gcp': [SiGooglecloud, '#4285F4'],
  'pinecone': [FaDatabase, '#5b8def'],
  'algorithms': [FaCode, '#7b5ea7'],
  'complexity': [FaCode, '#7b5ea7'],
  'research': [FaFlask, '#b0497b'],
}

/** Brand logo for a tool, or nothing if the name has no icon (e.g. "Leadership"). */
export default function TechIcon({ name, size = 16 }) {
  const entry = MAP[name?.toLowerCase()]
  if (!entry) return null
  const [Icon, color] = entry
  return (
    <Icon
      size={size}
      className="tech-icon"
      style={color ? { '--brand': color } : undefined}
      aria-hidden="true"
    />
  )
}
