import { Divider, Tooltip, Typography } from 'antd'
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiMui,
  SiMongodb,
  SiJquery,
  SiBootstrap,
  SiMysql,
  SiPython,
} from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import Collpase from '../components/Collapse/collapse'
const { Paragraph } = Typography

const Projects = () => {
  const iconSize = 28

  const techStack = [
    { icon: <AiFillHtml5 size={iconSize} color="#E34F26" />, label: 'HTML5' },
    { icon: <DiCss3 size={iconSize} color="#1572B6" />, label: 'CSS3' },
    { icon: <SiJavascript size={iconSize} color="#F7DF1E" />, label: 'JavaScript' },
    { icon: <SiNodedotjs size={iconSize} color="#339933" />, label: 'Node.js' },
    { icon: <SiReact size={iconSize} color="#61DAFB" />, label: 'React' },
    { icon: <SiMysql size={iconSize} color="#00758F" />, label: 'MySQL' },
    { icon: <SiMongodb size={iconSize} color="#47A248" />, label: 'MongoDB' },
    { icon: <SiJquery size={iconSize} color="#0769AD" />, label: 'jQuery' },
    { icon: <SiBootstrap size={iconSize} color="#7952B3" />, label: 'Bootstrap' },
    { icon: <SiMui size={iconSize} color="#007FFF" />, label: 'Material UI' },
    { icon: <SiPython size={iconSize} color="#3776AB" />, label: 'Python' },
  ]

  return (
    <main className="container-projects">
      <Paragraph>
        <div className="title">Projects</div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
          {techStack.map((tech, i) => (
            <Tooltip title={tech.label} key={i}>
              <span style={{ display: 'flex', alignItems: 'center' }}>{tech.icon}</span>
            </Tooltip>
          ))}
        </div>
      </Paragraph>

      <Divider />

      <Collpase />
    </main>
  )
}

export default Projects
