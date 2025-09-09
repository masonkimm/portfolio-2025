import { Alert, Anchor, Col, Row } from 'antd'
import Landing from './pages/Landing'
import UnderConstructionModal from './components/Modal/UnderConstructionModal'
import Marquee from 'react-fast-marquee';

const App = () => {
  const About = () => {
    return (
      <main className='container-about'>
        <div className='landing-title'>About Me</div>
      </main>
    )
  }

  const Projects = () => {
    return (
      <main className='container-about'>
        <div className='landing-title'>Projects</div>
      </main>
    )
  }
  return (
    <>
      <UnderConstructionModal />
      {/* Fixed banner at the top */}
      <Alert
        message={<Marquee pauseOnHovers>🚧 Site Under Construction: Some pages and features may not be available yet. 🚧</Marquee>}
        type='info'
        banner
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
        }}
      />
      <Row className='landing-page'>
        <Col span={4} className='landing-menu'>
          <Anchor
            affix={false}
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Home',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'About',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Projects',
              },
            ]}
          />
        </Col>
        <Col span={20}>
          <div id='part-1'>{<Landing />}</div>
          <div id='part-2'>
            <About />
          </div>
          <div id='part-3'>
            <Projects />
          </div>
        </Col>
      </Row>
    </>
  )
}
export default App
