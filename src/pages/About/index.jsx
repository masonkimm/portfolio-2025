import { useState } from 'react'
import Timeline from '../../components/Timeline'
import { Button, Divider, Typography } from 'antd'
import Resume from '../../components/PdfViewer/pdfViewer'
import { DownloadOutlined } from '@ant-design/icons'
import Typewriter from '../../components/TypeWriter/typeWriter'
import './styles.css'

const { Paragraph } = Typography

const About = () => {
  const [viewTimeline, setViewTimeline] = useState(true)
  const [viewResume, setViewResume] = useState(false)

  return (
    <main className='container-about'>
      <div className='container-about-top'>
        <Paragraph className='about-text'>
          <span className='title'>
            <Typewriter text='About me' />
          </span>
          <br />
          {
            // "I'm a full-stack developer with a strong focus on building clean, responsive user interfaces. Over the past few years I've worked across both frontend and backend stacks — from designing React applications with modern tooling to developing secure APIs in Python and Node."
            'Full-Stack Software Engineer with 4+ years of experience architecting and delivering scalable, secure web applications for mission-critical government systems. Frontend-focused with strong backend proficiency and object-oriented designs, cloud deployment automation, and compliance-driven engineering. Demonstrated ability to lead initiatives, optimize system performance, and collaborate cross-functionally to deliver solutions serving thousands of users while maintaining the highest security and accessibility standards.'
          }
          <br />
          <br />

          {
            'I enjoy solving problems through code, refining UI/UX for better accessibility, and collaborating with teams to bring ideas from concept to production.'
          }
          <br />
          <br />

          {
            "Outside of work, I'm always learning — whether it's new JavaScript frameworks, cloud services like AWS, or improving DevOps workflows."
          }
        </Paragraph>
      </div>
      <Divider style={{ backgroundColor: '#c7c7c7' }} />
      <div className='container-about-middle'>
        <div className='container-about-middle-left'>
          <Button
            style={{
              background: viewTimeline ? 'var(--accent)' : 'var(--card-bg)',
              color: viewTimeline ? '#fff' : 'var(--text)',
            }}
            onClick={() => {
              setViewTimeline(true)
              setViewResume(false)
            }}
          >
            Timeline
          </Button>
          <Button
            style={{
              background: viewResume ? 'var(--accent)' : 'var(--card-bg)',
              color: viewResume ? '#fff' : 'var(--text)',
            }}
            onClick={() => {
              setViewResume(true)
              setViewTimeline(false)
            }}
          >
            Resume
          </Button>
        </div>
        <div className='container-about-middle-right'>
          {viewResume && (
            <Button
              className='download-btn'
              style={{
                background: 'var(--card-bg)',
                color: 'var(--text)',
              }}
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/portfolio-2025/Resume-2025.pdf'
                link.download = 'Mason-Kim-Resume-2025.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <DownloadOutlined style={{ fontSize: '20px' }} />
            </Button>
          )}
        </div>
      </div>
      <div className='container-about-bottom'>
        {viewTimeline ? <Timeline /> : <Resume />}
      </div>
    </main>
  )
}

export default About
