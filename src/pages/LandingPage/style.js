import styled from '@emotion/styled'

// export const StyledDivider = styled.div`
// 	width: 100%;
// 	border-top: 1px solid white;
// 	margin: 20px 0;
// `

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
	// background: rgba(255, 255, 255, 0.1);

	&:hover {
		color: #40a9ff;
		transform: scale(1.1);
		background: rgba(255, 255, 255, 0.2);
	}
`