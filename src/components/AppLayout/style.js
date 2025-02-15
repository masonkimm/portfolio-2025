// layoutStyles.js
import { css } from '@emotion/react'

export const layoutStyles = css`
	min-height: 100vh;
`

export const contentStyles = css`
  color: white;
  // margin: 24px;
	// padding: 24px;
	min-height: 280px;
	background: black;
	overflow: auto;
	scroll-behavior: smooth;
  border: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`