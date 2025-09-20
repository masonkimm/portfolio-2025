import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons'


const Landing = () => {
    return (
      <main className='container-landing'>
        <div className='title'>Mason Kim</div>
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