/** @jsxImportSource @emotion/react */
import { Layout } from 'antd'
import { layoutStyles, contentStyles } from './style'
import SideBar from '../Sidebar'

const { Content } = Layout

const AppLayout = ({ children }) => {
	return (
		<Layout css={layoutStyles}>
			<Layout>
				<SideBar />
				<Content css={contentStyles}>{children}</Content>
			</Layout>
		</Layout>
	)
}

export default AppLayout
