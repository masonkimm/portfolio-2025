import styled from '@emotion/styled'

export const StyledDivider = styled.div`
	width: 120%;
	border-top: .2px solid rgb(81, 81, 81);
	margin: 40px 0;
`


export const IconButton = styled.a`
	color: gray;
	font-size: 1.6rem;
	transition: color 0.3s, transform 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	padding: 10px;
	// background: rgba(255, 255, 255, 0.1);

	&:hover {
		color: white;
		transform: scale(1.1);
		background: rgba(255, 255, 255, 0.2);
	}
`