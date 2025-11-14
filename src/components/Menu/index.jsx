import { Anchor } from 'antd'
import './styles.css'

const Menu = () => {
  return (
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
  )
}
export default Menu
