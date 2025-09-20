import { Alert, Anchor, Col, Row } from 'antd'
import Landing from './pages/Landing'
import UnderConstructionModal from './components/Modal/UnderConstructionModal'
import Marquee from 'react-fast-marquee'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
      <UnderConstructionModal />
      {/* Fixed banner at the top */}
      <Alert
        message={
          <Marquee pauseOnHovers>
            🚧 Site Under Construction: Some pages and features may not be
            available yet. 🚧
          </Marquee>
        }
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
                key: 'home',
                href: '#home',
                title: 'Home',
              },
              {
                key: 'about',
                href: '#about',
                title: 'About',
              },
              {
                key: 'projects',
                href: '#projects',
                title: 'Projects',
              },
            ]}
          />
        </Col>
        <Col span={20}>
          <div id='home'>
            <Landing />
          </div>
          <div id='about'>
            <About />
          </div>
          <div id='projects'>
            <Projects />
          </div>
        </Col>
      </Row>
    </>
  )
}
export default App
