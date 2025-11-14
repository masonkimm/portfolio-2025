import { SunOutlined, MoonOutlined } from '@ant-design/icons'

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        fontSize: '22px',
        background: 'none',
        border: 'none',
        color: 'var(--text)',
        cursor: 'pointer',
        marginLeft: '15px',
      }}
    >
      {darkMode ? <SunOutlined /> : <MoonOutlined />}
    </button>
  )
}
