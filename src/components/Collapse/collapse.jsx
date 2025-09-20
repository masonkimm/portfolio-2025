import React, { useState } from 'react'
import { SettingOutlined } from '@ant-design/icons'
import { Collapse as _Collapse, Select } from 'antd'
import {
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiMui,
  SiMongodb,
  SiJquery,
  SiBootstrap,
  SiMysql,
} from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'

const text = `
  Under Construction
`
const Collpase = () => {
  const onChange = (key) => {
    console.log(key)
  }

  const iconMap = {
    html: <AiFillHtml5 className='icon-collapse' />,
    css: <DiCss3 className='icon-collapse' />,
    javascript: <SiJavascript className='icon-collapse' />,
    node: <SiNodedotjs className='icon-collapse' />,
    react: <SiReact className='icon-collapse' />,
    mysql: <SiMysql className='icon-collapse' />,
    mongodb: <SiMongodb className='icon-collapse' />,
    jquery: <SiJquery className='icon-collapse' />,
    bootstrap: <SiBootstrap className='icon-collapse' />,
    mui: <SiMui className='icon-collapse' />,
    python: <SiPython className='icon-collapse' />,
  }

  const techStackIcons = (stack = []) => (
    <div style={{ display: 'flex', gap: '8px' }}>
      {stack.map(
        (tech) => iconMap[tech.toLowerCase()], // match lowercase keys
      )}
    </div>
  )
  const items = [
    {
      key: '1',
      label: 'PREP - Portal for Readiness and Emergency Preparedness',
      children: <div>{text}</div>,
      extra: techStackIcons(['react', 'mysql', 'python']),
    },
    {
      key: '2',
      label: 'TEEP - Training Exercise & Exmployment Plant',
      children: <div>{text}</div>,
      extra: techStackIcons(['html', 'css']),
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <div>{text}</div>,
      extra: techStackIcons(['mongodb', 'python']),
    },
  ]
  return (
    <>
      <_Collapse defaultActiveKey={['1']} onChange={onChange} items={items} />
    </>
  )
}
export default Collpase
