import Timeline from '../components/Timeline/timeline'
import { Typography } from 'antd'
const { Paragraph } = Typography

const About = () => {
  return (
    <main className='container-about'>
      {/* <div className='landing-title'>About Me</div> */}
      <div className='container-about-top'>
        <Paragraph>
          <span className='about-title'> About me</span>
          <br />
          I&#39;m a full-stack developer with a strong focus on building clean, responsive user interfaces. Over the past few years I&#39;ve worked across both frontend and backend stacks — from
          designing React applications with modern tooling to developing secure APIs in Python and Node.
          <br />
          <br />I enjoy solving problems through code, refining UI/UX for better accessibility, and collaborating with teams to bring ideas from concept to production. Outside of work, I&#39;m always
          learning — whether it&#39;s new JavaScript frameworks, cloud services like AWS, or improving DevOps workflows.
        </Paragraph>
      </div>
      <div className='container-about-bottom'>
        <Timeline />
        <div className='container-about-bottom-right'>Timeline contents</div>
      </div>
    </main>
  )
}

export default About
