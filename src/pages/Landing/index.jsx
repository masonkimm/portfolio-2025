import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons'
import Typewriter from '../../components/TypeWriter/typeWriter'
import './styles.css'

const Landing = () => {
  return (
    <main className="container-landing">
      <div className="landing-content">
        <div className="title">
          <Typewriter text={'Mason Kim'} />
        </div>
        <div className="landing-subtitle">Full-Stack Developer</div>
        <div className="landing-icons">
          <GithubOutlined className="landing-icon" />
          <LinkedinOutlined className="landing-icon" />
          <MailOutlined className="landing-icon" />
        </div>
      </div>
    </main>
  )
}

export default Landing
