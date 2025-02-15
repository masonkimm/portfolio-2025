
import { useState, useEffect, useMemo } from 'react'
import { Menu, Tooltip } from 'antd'
import { HomeOutlined, UserOutlined, ProjectOutlined, DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'
import { Sider, ExpandButton } from './style.js'

const SideBar = () => {
	const [collapsed, setCollapsed] = useState(true)
	const [activeKey, setActiveKey] = useState('1') // Initial menu selection

	// Map section IDs to menu keys
	const sectionIdMap = useMemo(
		() => ({
			1: 'landingPage',
			2: 'aboutPage',
			3: 'projectsPage',
		}),
		[],
	)

	// Update active menu item when manually scrolling
	useEffect(() => {
		const handleScroll = () => {
			for (const [key, sectionId] of Object.entries(sectionIdMap)) {
				const section = document.getElementById(sectionId)
				if (section) {
					const rect = section.getBoundingClientRect()
					if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
						setActiveKey(key)
						break
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [sectionIdMap])

	// Scroll to section on menu click
	const handleMenuClick = ({ key }) => {
		const section = document.getElementById(sectionIdMap[key])
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
			setActiveKey(key)
		}
	}

	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<Menu
				mode='inline'
				selectedKeys={[activeKey]}
				className='menu'
				onClick={handleMenuClick}
				items={[
					{ key: '1', icon: <HomeOutlined className='menu-item-icon' />, label: 'Home' },
					{ key: '2', icon: <UserOutlined className='menu-item-icon' />, label: 'About Me' },
					{ key: '3', icon: <ProjectOutlined className='menu-item-icon' />, label: 'Projects' },
				]}
			/>
			<Tooltip title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}>
				<ExpandButton icon={collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />} onClick={() => setCollapsed(!collapsed)} />
			</Tooltip>
		</Sider>
	)
}

export default SideBar