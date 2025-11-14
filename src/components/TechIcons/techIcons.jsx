// src/utils/iconMap.js (or keep inline if you prefer)

import {
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiMui,
  SiMongodb,
  SiJquery,
  SiBootstrap,
  SiMysql,
  SiVite,
  SiGithub,
  SiAntdesign,
  SiFlask,
  SiGitlab,
  SiPostgresql,
} from 'react-icons/si'
import { AiFillHtml5, AiOutlineCloud } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { MdTimeline } from 'react-icons/md'
import { FaMapMarkedAlt, FaDatabase } from 'react-icons/fa'
import { Tooltip } from 'antd'

export const baseIconMap = {
  html: { component: AiFillHtml5, color: '#E34F26', label: 'HTML5' },
  css: { component: DiCss3, color: '#1572B6', label: 'CSS3' },
  javascript: {
    component: SiJavascript,
    color: '#F7DF1E',
    label: 'JavaScript',
  },
  node: { component: SiNodedotjs, color: '#339933', label: 'Node.js' },
  react: { component: SiReact, color: '#61DAFB', label: 'React' },
  mysql: { component: SiMysql, color: '#4479A1', label: 'MySQL' },
  mongodb: { component: SiMongodb, color: '#47A248', label: 'MongoDB' },
  jquery: { component: SiJquery, color: '#0769AD', label: 'jQuery' },
  bootstrap: { component: SiBootstrap, color: '#7952B3', label: 'Bootstrap' },
  mui: { component: SiMui, color: '#007FFF', label: 'Material UI' },
  python: { component: SiPython, color: '#3776AB', label: 'Python' },
  vite: { component: SiVite, color: '#646CFF', label: 'Vite' },
  github: { component: SiGithub, color: '#535353ff', label: 'GitHub' },
  gantt: { component: MdTimeline, color: '#7d7d7d', label: 'Gantt Chart' },
  map: { component: FaMapMarkedAlt, color: '#34A853', label: 'Map' },
  antd: { component: SiAntdesign, color: '#0170FE', label: 'Ant Design' },
  flask: { component: SiFlask, color: '#f60202ff', label: 'Flask' },
  sqlalchemy: { component: FaDatabase, color: '#D71F00', label: 'SQLAlchemy' },
  gitlab: { component: SiGitlab, color: '#FC6D26', label: 'GitLab' },
  cloud: { component: AiOutlineCloud, color: '#1890FF', label: 'Cloud' },
  postgresql: { component: SiPostgresql, color: '#4169E1', label: 'PostgreSQL' },
}

const TechIcons = ({ stack, size = 28, gap = 12 }) => (
  <div style={{ display: 'flex', gap: `${gap}px`, flexWrap: 'wrap' }}>
    {stack.map((tech) => {
      const { component: Icon, color, label } = baseIconMap[tech.toLowerCase()]
      return (
        <Tooltip title={label} key={tech}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.2s ease, filter 0.2s ease',
            }}
            className='tech-icon'
          >
            <Icon size={size} color={color} />
          </span>
        </Tooltip>
      )
    })}
  </div>
)

export default TechIcons
