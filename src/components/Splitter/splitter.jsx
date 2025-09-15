// components/Splitter/splitter.tsx|jsx
import React from 'react'
import { Flex, Splitter as _Splitter, Typography } from 'antd'
import Timeline from '../Timeline/timeline'

const Desc = ({ text }) => (
  <Flex justify='center' align='center' style={{ height: '100%' }}>
    <Typography.Title type='secondary' level={5} style={{ whiteSpace: 'nowrap' }}>
      {Timeline}
    </Typography.Title>
  </Flex>
)

const Splitter = () => {
  const [sizes, setSizes] = React.useState(['30%', '70%'])
  return (
    <Flex vertical style={{ width: '100%', height: '100%' }}>
      <_Splitter onResize={setSizes} className='about-splitter'>
        <_Splitter.Panel size={sizes[0]} resizable={false}>
          <Desc />
        </_Splitter.Panel>
        <_Splitter.Panel size={sizes[1]}>
          <Desc text='Second' />
        </_Splitter.Panel>
      </_Splitter>
    </Flex>
  )
}

export default Splitter
