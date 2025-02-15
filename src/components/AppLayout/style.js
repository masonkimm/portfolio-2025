import { css } from '@emotion/react'

export const layoutStyles = css`
  min-height: 100vh;
`

export const contentStyles = css`
  color: white;
  background: black; /* You can set it to any color */
  
  overflow: auto;
  scroll-behavior: smooth;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

