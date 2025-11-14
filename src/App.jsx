import { Alert, Col, ConfigProvider, Row, theme } from 'antd'
import Landing from './pages/Landing'
import UnderConstructionModal from './components/Modal/UnderConstructionModal'
import Marquee from 'react-fast-marquee'
import About from './pages/About/'
import Projects from './pages/Projects'
import Menu from './components/Menu/'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/navBar'
import ThemeToggle from './components/ThemeToggle/themeToggle'

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark',
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
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
      {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      {/* Floating Theme Toggle */}
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Row className='landing-page'>
        <Col xs={0} sm={5} md={4} lg={3} className='landing-menu'>
          <Menu />
        </Col>
        <Col xs={25} sm={19} md={20} lg={21}>
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
    </ConfigProvider>
  )
}
export default App
