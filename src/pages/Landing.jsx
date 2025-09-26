import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons'
import Typewriter from '../components/TypeWriter/typeWriter'


const Landing = () => {
    return (
      <main className='container-landing'>
        <div className='title'><Typewriter text={'Mason Kim'} /></div>
        <div className='landing-subtitle'>Full-Stack Developer</div>
        <div className="landing-subtitle">
          <GithubOutlined className='landing-icon' />
          <LinkedinOutlined className='landing-icon' />
          <MailOutlined className='landing-icon' />
        </div>
      </main>
    )
  }

export default Landing