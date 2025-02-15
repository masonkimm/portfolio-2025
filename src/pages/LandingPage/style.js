import styled from '@emotion/styled'

export const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 50%;
`

export const Name = styled.h1`
	font-size: 4rem;
	font-weight: bold;
	margin-bottom: 10px;
`

export const SubText = styled.p`
	font-size: 1.2rem;
	color: #d1d1d1;
	margin-top: 15px;
	line-height: 1.5;
	max-width: 90%;
`

export const Role = styled.h2`
	font-size: 1.5rem;
	color: #00ffbb;
	font-weight: bold;
	margin-bottom: 20px;
`

// export const CTAButton = styled.button`
// 	background: #00ffbb;
// 	color: #0d0d0d;
// 	padding: 12px 24px;
// 	font-size: 1.2rem;
// 	border: none;
// 	border-radius: 8px;
// 	cursor: pointer;
// 	margin-top: 20px;
// 	transition: 0.3s ease;

// 	&:hover {
// 		background: #00e6a6;
// 	}
// `

export const RightContent = styled.div`
	position: relative;
	margin-right: 70px;
	img {
		height: 250px;
		border-radius: 12px;
		box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
	}
	
`

// export const FloatingAccent = styled.div`
// 	width: 50px;
// 	height: 50px;
// 	background: rgba(255, 255, 255, 0.1);
// 	position: absolute;
// 	border-radius: 8px;

// 	&.accent1 {
// 		top: 20px;
// 		left: -50px;
// 		background: #006666;
// 	}

// 	&.accent2 {
// 		bottom: -40px;
// 		right: -30px;
// 		background: #996600;
// 	}
// `



export const NavItem = styled.span`
	color: ${(props) => (props.active ? '#00ffbb' : 'white')};
	margin: 0 15px;
	font-size: 1.1rem;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover {
		color: #00ffbb;
	}
`

// export const Header = styled.p`
// 	font-size: 1rem;
// 	color: #ccc;
// 	margin-bottom: 5px;
// `

export const StyledDivider = styled.div`
	width: 100%;
	border-top: 1px solid white;
	margin: 20px 0;
`

export const ActionButtons = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 15px;
	// justify-content: center;
`

export const IconButton = styled.a`
	color: white;
	font-size: 1.8rem;
	transition: color 0.3s, transform 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	padding: 10px;
	background: rgba(255, 255, 255, 0.1);

	&:hover {
		color: #40a9ff;
		transform: scale(1.1);
		background: rgba(255, 255, 255, 0.2);
	}
`