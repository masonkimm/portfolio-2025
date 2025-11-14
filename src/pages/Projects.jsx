import { Divider, Typography } from 'antd'
import Collpase from '../components/Collapse/collapse'
import Typewriter from '../components/TypeWriter/typeWriter'
import TechIcons, { baseIconMap } from '../components/TechIcons/techIcons'
const { Paragraph } = Typography

const Projects = () => {
  return (
    <main className='container-projects'>
      <Paragraph>
        <div className='title'>
          <Typewriter text={'Projects'} />
        </div>
        <TechIcons stack={Object.keys(baseIconMap)} size={28} />
      </Paragraph>

      <Divider />

      <Collpase />
    </main>
  )
}

export default Projects
