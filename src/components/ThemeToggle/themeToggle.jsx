import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import './styles.css'
export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={`theme-toggle-btn ${darkMode ? 'dark' : 'light'}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <span className='toggle-icon'>
        {darkMode ? <SunOutlined /> : <MoonOutlined />}
      </span>

      <span className='toggle-label'>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  )
}
