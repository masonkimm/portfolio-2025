// import { Divider } from 'antd'
import { Badge, Space } from 'antd'
import { Container } from '../../styles/global'
import { IconButton, StyledDivider, AnimatedBadge } from './style'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const Landing = () => {
	return (
		<Container id='landingPage'>
			<div className='flex flex-col items-center justify-center'>
				{/* Name and role */}
				<h1 className='text-5xl m-5 font-sans'>Mason Kim</h1>

				{/* <img src='https://rb.gy/xikudy' alt='spinning logo' style={{ height: '150px' }} /> */}

				{/* <Space size='large' className='m-7'>
					<Badge color='rgb(41, 136, 232)'/>
					<Badge color='rgb(228, 240, 92)' />
					<Badge color='rgb(241, 242, 243)'/>
					<Badge color='rgb(134, 245, 106)' />
					<Badge color='rgb(243, 117, 239)' />
				</Space> */}

				<Space size='large' className='m-7'>
					<AnimatedBadge color='rgb(41, 136, 232)' delay={0} />
					<AnimatedBadge color='rgb(228, 240, 92)' delay={0.2} />
					<AnimatedBadge color='rgb(241, 242, 243)' delay={0.4} />
					<AnimatedBadge color='rgb(134, 245, 106)' delay={0.6} />
					<AnimatedBadge color='rgb(243, 117, 239)' delay={0.8} />
				</Space>

				<h2 className='italic text-2xl'>Full-Stack Developer</h2>

				<StyledDivider />

				{/* Social media icons */}
				<div className='flex items-center justify-space-between gap-18 text-sm'>
					<IconButton href='https://github.com/masonkimm' target='_blank'>
						<GithubOutlined />
					</IconButton>
					<IconButton href='mailto:mason@example.com'>
						<MailOutlined />
					</IconButton>
					<IconButton href='https://www.linkedin.com/in/masonkimm' target='_blank'>
						<LinkedinOutlined />
					</IconButton>
				</div>
			</div>
		</Container>
	)
}

export default Landing
