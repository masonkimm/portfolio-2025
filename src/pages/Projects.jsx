import { Divider, Tooltip, Typography } from 'antd'
import Marquee from 'react-fast-marquee'
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
  const techStack = [
    { icon: <AiFillHtml5 className='icon' />, label: 'HTML5' },
    { icon: <DiCss3 className='icon' />, label: 'CSS3' },
    { icon: <SiJavascript className='icon' />, label: 'JavaScript' },
    { icon: <SiNodedotjs className='icon' />, label: 'Node.js' },
    { icon: <SiReact className='icon' />, label: 'React' },
    { icon: <SiMysql className='icon' />, label: 'MySQL' },
    { icon: <SiMongodb className='icon' />, label: 'MongoDB' },
    { icon: <SiJquery className='icon' />, label: 'jQuery' },
    { icon: <SiBootstrap className='icon' />, label: 'Bootstrap' },
    { icon: <SiMui className='icon' />, label: 'Material UI' },
    { icon: <SiPython className='icon' />, label: 'Material UI' },
  ]

  return (
    <main className='container-projects'>
      <Paragraph>
        <div className='title'>Projects</div>
        <Marquee pauseOnHover gradient={false} speed={50}>
          {techStack.map((tech, i) => (
            <Tooltip title={tech.label} key={i}>
              <span>
                {tech.icon}
              </span>
            </Tooltip>
          ))}
        </Marquee>
      </Paragraph>

      <Divider />

      <Collpase />
    </main>
  )
}

export default Projects
