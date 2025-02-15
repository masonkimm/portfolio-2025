import styled from '@emotion/styled'
import { Button as AntButton, Layout } from 'antd'

export const Sider = styled(Layout.Sider)`
	padding-left: 15px;
	height: 26vh;
	position: fixed;
	left: 0;
	margin-top: 40vh;
	overflow: auto;
	background-color: transparent !important;
	color: white !important;

	.menu {
		background-color: transparent;
		.ant-menu-item {
			color: white !important;
		}

		.ant-menu-item:hover,
		.ant-menu-item-active,
		.ant-menu-item-selected {
			background-color: #00ffbb !important;
			color: black !important;
		}
	}
`

export const ExpandButton = styled(AntButton)`
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	border: none;
	background-color: transparent;
	color: white;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		color: #45a049;
	}
`
