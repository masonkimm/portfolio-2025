import Timeline from '../components/Timeline/timeline'
import { Divider, Typography } from 'antd'
const { Paragraph } = Typography

const About = () => {
  return (
    <main className='container-about'>
      <div className='container-about-top'>
        <Paragraph>
          <span className='about-title'> About me</span>
          <br />
          {
            "I'm a full-stack developer with a strong focus on building clean, responsive user interfaces. Over the past few years I've worked across both frontend and backend stacks — from designing React applications with modern tooling to developing secure APIs in Python and Node."
          }
          <br />
          <br />
          {
            "I enjoy solving problems through code, refining UI/UX for better accessibility, and collaborating with teams to bring ideas from concept to production. Outside of work, I'm always learning — whether it's new JavaScript frameworks, cloud services like AWS, or improving DevOps workflows."
          }
        </Paragraph>
      </div>
      <Divider style={{ backgroundColor: '#0c0c0cff' }} />
      <div className='container-about-bottom'>
        <Timeline />
      </div>
    </main>
  )
}

export default About
