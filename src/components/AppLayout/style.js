import { css } from '@emotion/react'

export const layoutStyles = css`
	min-height: 100vh;
`

export const contentStyles = css`
	color: white;
	// background: linear-gradient(to bottom, black, gray); /* Gradient background */
	background: linear-gradient(to bottom, #000000, #1c1c1c);


	overflow: auto;
	scroll-behavior: smooth;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
