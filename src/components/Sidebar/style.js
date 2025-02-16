import styled from '@emotion/styled'
import { Button as AntButton, Layout } from 'antd'

export const ButtonContainer = styled.div`
	gap: 15px;
`

export const Sider = styled(Layout.Sider)`
	height: 26vh;
	position: fixed;
	left: 0;
	margin-top: 40vh;
	overflow: auto;
	background-color: transparent !important;
	color: white !important;
	min-width: 100px !important; /* Prevent shrinking */

	.menu {
		background-color: transparent;
		.ant-menu-item {
			color: white !important;
		}

		.ant-menu-item:hover {
			color: lightblue !important;
		}
		.ant-menu-item-active,
		.ant-menu-item-selected {
			background-color: transparent !important;
			color: white !important;
		}
	}
`

export const ExpandButton = styled(AntButton)`
	position: absolute;
	bottom: 10px;
	margin-left: 50px;
	// transform: translateX(-50%);
	border: none;
	background-color: transparent;
	color: white;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
`