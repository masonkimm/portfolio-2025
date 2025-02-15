import { Divider } from 'antd'
import { Container } from '../../styles/global'
import { ActionButtons, IconButton } from './style'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const Landing = () => {
	return (
		<Container id='landingPage'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-6xl m-5'>Mason Kim</h1>
				<img src='https://rb.gy/xikudy' alt='spinning logo' style={{ height: '150px' }} />

				<h2 className='italic text-3xl'>Full-Stack Developer</h2>
				<Divider
					style={{
						borderColor: 'lightgray',
						color: 'white',
					}}
				/>
				<ActionButtons>
					<IconButton href='https://github.com/masonkimm' target='_blank'>
						<GithubOutlined />
					</IconButton>
					<IconButton href='mailto:mason@example.com'>
						<MailOutlined />
					</IconButton>
					<IconButton href='https://linkedin.com/in/masonkim' target='_blank'>
						<LinkedinOutlined />
					</IconButton>
				</ActionButtons>
			</div>
		</Container>
	)
}

export default Landing
