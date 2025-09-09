// components/UnderConstructionModal.tsx
import { useEffect, useState } from 'react'
import { Modal } from 'antd'

const UnderConstructionModal = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true) // show modal on mount
  }, [])

  const handleOk = () => setOpen(false)
  const handleCancel = () => setOpen(false)

  return (
    <Modal
      title='🚧 Site Under Construction'
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText='Got it'
      cancelButtonProps={{ style: { display: 'none' } }} // hide cancel
    >
      <p>
        Thanks for visiting! This site is still being built. Some pages and features may not work yet. Please visit my portfolio v1.0 at{' '}
        <a href='https://masonkimm.github.io/portfolio-kim/' target='_blank' rel='noopener noreferrer'>
          https://masonkimm.github.io/portfolio-kim/
        </a>
      </p>
    </Modal>
  )
}

export default UnderConstructionModal
