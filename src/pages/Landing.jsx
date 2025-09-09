import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons'


const Landing = () => {
    return (
      <main className='container-landing'>
        <div className='landing-title'>Mason Kim</div>
        <div className='landing-subtitle'>Full-Stack Developer</div>
        <div className="landing-subtitle">
          <GithubOutlined style={{ fontSize: '32px', margin: '0 12px' }} />
          <LinkedinOutlined style={{ fontSize: '32px', margin: '0 12px' }} />
          <MailOutlined style={{ fontSize: '32px', margin: '0 12px' }} />
        </div>
      </main>
    )
  }

export default Landing