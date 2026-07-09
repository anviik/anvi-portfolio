import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiGnubash,
  SiPytorch, SiScikitlearn, SiLangchain, SiHuggingface, SiFastapi, SiReact,
  SiFlask, SiNodedotjs, SiDocker, SiPostgresql, SiGit, SiGithubactions,
  SiLinux, SiNvidia, SiPandas, SiRaspberrypi, SiExcalidraw, SiOpenjdk,
} from 'react-icons/si'
import {
  FaJava, FaAws, FaDatabase, FaBrain, FaFlask, FaBullseye, FaScissors,
  FaMicrochip, FaCode, FaDiagramProject,
} from 'react-icons/fa6'

// name (lowercased) -> [IconComponent, brandColor]
const MAP = {
  // Languages
  'python': [SiPython, '#3776AB'],
  'java': [FaJava, '#E76F00'],
  'c++': [SiCplusplus, '#00599C'],
  'javascript': [SiJavascript, '#F7DF1E'],
  'typescript': [SiTypescript, '#3178C6'],
  'sql': [FaDatabase, '#6bb5c9'],
  'html / css': [SiHtml5, '#E34F26'],
  'html/css': [SiHtml5, '#E34F26'],
  'bash': [SiGnubash, '#4EAA25'],

  // AI / ML
  'pytorch': [SiPytorch, '#EE4C2C'],
  'scikit-learn': [SiScikitlearn, '#F7931E'],
  'langgraph': [FaDiagramProject, '#1C3C3C'],
  'langchain': [SiLangchain, '#1C3C3C'],
  'hugging face': [SiHuggingface, '#FFD21E'],
  'yolo': [FaBullseye, '#00FFFF'],
  'yolov8': [FaBullseye, '#00A98F'],
  'sam2 / sam3': [FaScissors, '#8e6b9e'],
  'sam3': [FaScissors, '#8e6b9e'],
  'faiss': [FaDatabase, '#4267B2'],
  'vlms': [FaBrain, '#c48b9f'],
  'llms': [FaBrain, '#c48b9f'],
  'nlp': [FaBrain, '#a8d5a2'],
  'rag': [FaDatabase, '#6bb5c9'],
  'ocr': [FaCode, '#8e6b9e'],
  'cuda': [SiNvidia, '#76B900'],
  'rl': [FaBrain, '#e8b87e'],

  // Frameworks & tools
  'fastapi': [SiFastapi, '#009688'],
  'react': [SiReact, '#61DAFB'],
  'react native': [SiReact, '#61DAFB'],
  'flask': [SiFlask, '#a08e9e'],
  'node.js': [SiNodedotjs, '#5FA04E'],
  'docker': [SiDocker, '#2496ED'],
  'aws': [FaAws, '#FF9900'],
  'postgresql': [SiPostgresql, '#4169E1'],
  'git': [SiGit, '#F05032'],
  'ci/cd': [SiGithubactions, '#2088FF'],
  'linux': [SiLinux, '#FCC624'],
  'pandas': [SiPandas, '#150458'],
  'iot': [FaMicrochip, '#6bb5c9'],
  'raspberry pi': [SiRaspberrypi, '#A22846'],

  // Project-specific
  'canvas': [SiExcalidraw, '#6965DB'],
  'algorithms': [FaCode, '#8e6b9e'],
  'complexity': [FaCode, '#8e6b9e'],
  'research': [FaFlask, '#c48b9f'],
}

const FALLBACK = [FaCode, '#8e6b9e']

export default function TechIcon({ name, size = 16, colored = true }) {
  const [Icon, color] = MAP[name?.toLowerCase()] || FALLBACK
  return <Icon size={size} style={colored ? { color } : undefined} aria-hidden="true" />
}
