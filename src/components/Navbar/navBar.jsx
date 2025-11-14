import styled from '@emotion/styled'
import ThemeToggle from '../ThemeToggle/themeToggle'

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  background: var(--bg);
  color: var(--text);
  box-shadow: 0 2px 8px var(--shadow);
  padding: 12px 32px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.25s ease, color 0.25s ease;
`

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <Nav>
      <div className='logo'>Mason Kim</div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <a href='#about' style={{ color: 'var(--text)' }}>
          About
        </a>
        <a href='#projects' style={{ color: 'var(--text)' }}>
          Projects
        </a>
        <a href='#contact' style={{ color: 'var(--text)' }}>
          Contact
        </a>

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </Nav>
  )
}
