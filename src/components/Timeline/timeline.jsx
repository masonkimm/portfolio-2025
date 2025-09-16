import { useRef, useState } from 'react'
import { Button, Carousel, message, Steps } from 'antd'
// logos
import logoGmu from '../../assets/logo-gmu.png'
import logoHhmi from '../../assets/logo-hhmi.png'
import logoGw from '../../assets/logo-gw.png'
import logoJdsat from '../../assets/logo-jdsat.png'
import logoAwsCp from '../../assets/logo-aws-cp.png'

const Gmu = () => (
  <div className='timeline-content'>
    <p className='timeline-year'>2016</p>
    <p>George Mason University</p>
    <p>B.S. in Neuroscience</p>
    <img className='timeline-logo' src={logoGmu} alt='' />
  </div>
)

const Hhmi = () => (
  <div className='timeline-content'>
    <p className='timeline-year'>2017</p>
    <p>HHMI Janelia Research</p>
    <p>Research Analyst</p>
    <img className='timeline-logo' src={logoHhmi} alt='' />
  </div>
)

const Gwu = () => (
  <div className='timeline-content'>
    <p className='timeline-year'>2020</p>
    <p>George Washington University</p>
    <p>Full-Stack Development Certificate</p>
    <img className='timeline-logo' src={logoGw} alt='' />
  </div>
)

const Jdsat = () => (
  <div className='timeline-content'>
    <p className='timeline-year'>2021</p>
    <p>JD SAT Tech</p>
    <p>Software Engineer</p>
    <img className='timeline-logo' src={logoJdsat} alt='' />
  </div>
)

const Aws = () => (
  <div className='timeline-content'>
    <p className='timeline-year'>2024</p>
    <p>AWS Certificate</p>
    <p>Certified Cloud Practitioner</p>
    <img className='timeline-logo' src={logoAwsCp} alt='' />
  </div>
)

const steps = [
  { title: '2016', content: <Gmu /> },
  { title: '2017', content: <Hhmi /> },
  { title: '2020', content: <Gwu /> },
  { title: '2021', content: <Jdsat /> },
  { title: '2024', content: <Aws /> },
]

const Timeline = () => {
  // const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef(null)

  const items = steps.map((s) => ({ key: s.title, title: s.title }))

  // Steps --> Carousel
  const handleStepChange = (i) => {
    setCurrent(i)
    carouselRef.current?.goTo(i, true)
  }

  // Carousel -> Steps
  const handleAfterChange = (i) => setCurrent(i)

  return (
    <div className='timeline-wrap'>
      <Steps
        className='timeline-steps'
        current={current}
        onChange={handleStepChange}
        items={items}
        labelPlacement='vertical'
        size='small'
        progressDot
      />
      <Carousel
        className=''
        ref={carouselRef}
        autoplay
        autoplaySpeed={5500}
        afterChange={handleAfterChange}
        dots
        arrows
      >
        {steps.map((s) => (
          <div key={s.title}>
            <div className='carousel-content'>{s.content}</div>
          </div>
        ))}
      </Carousel>

      <div className='timeline-actions'>
        <Button
          onClick={() => carouselRef.current?.prev()}
          disabled={current === 0}
          style={{ marginRight: 8, backgroundColor: '#364D79', color: '#fff' }}
        >
          Previous
        </Button>
        {current < steps.length - 1 && (
          <Button
            type='primary'
            onClick={() => carouselRef.current?.next()}
            style={{
              marginRight: 8,
              backgroundColor: '#364D79',
              color: '#fff',
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  )
}

export default Timeline
