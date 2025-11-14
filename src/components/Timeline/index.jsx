import { useRef, useState } from 'react'
import { Carousel, Steps, Row, Col } from 'antd'

// logos
import logoGmu from '../../assets/logo-gmu.png'
import logoHhmi from '../../assets/logo-hhmi.png'
import logoGw from '../../assets/logo-gw.png'
import logoJdsat from '../../assets/logo-jdsat.png'
import logoAwsCp from '../../assets/logo-aws-cp.png'

// Put your data in one array
const timelineData = [
  {
    year: '2016',
    title: 'George Mason University',
    subtitle: 'B.S. in Neuroscience',
    description:
      'Focused on cognitive neuroscience, research methods, and statistical analysis.',
    logo: logoGmu,
  },
  {
    year: '2017',
    title: 'HHMI Janelia Research',
    subtitle: 'Research Analyst',
    description:
      'Worked on neural circuit experiments and collaborated on imaging technologies.',
    logo: logoHhmi,
  },
  {
    year: '2020',
    title: 'George Washington University',
    subtitle: 'Full-Stack Development Certificate',
    description:
      'Bootcamp focused on JavaScript, React, Node.js, databases, and full-stack practices.',
    logo: logoGw,
  },
  {
    year: '2021',
    title: 'JDSAT Inc.',
    subtitle: 'Software Engineer',
    description:
      'Built data-driven web applications, dashboards, and optimized backend APIs.',
    logo: logoJdsat,
  },
  {
    year: '2024',
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Amazon Web Services',
    description:
      'Validated cloud computing, security, and AWS fundamentals for scalable apps.',
    logo: logoAwsCp,
  },
]

// Reusable item
const CarouselItem = ({ year, title, subtitle, description, logo }) => (
  <div className='carousel-content'>
    <img className='carousel-logo' src={logo} alt={`${title} logo`} />

    <div className='carousel-left'></div>
    <div className='carousel-right'>
      <p className='carousel-year'>{year}</p>
      <h2 className='carousel-title'>{title}</h2>
      <h3 className='carousel-subtitle'>{subtitle}</h3>
      {description && <p className='carousel-description'>{description}</p>}
    </div>
  </div>
)

const Timeline = () => {
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef(null)

  const items = timelineData.map((item) => ({
    key: item.year,
    title: item.year,
  }))

  const handleStepChange = (i) => {
    setCurrent(i)
    carouselRef.current?.goTo(i, true)
  }

  const handleAfterChange = (i) => setCurrent(i)

  return (
    <Row className='timeline-container' gutter={16} justify='center'>
      <Col xs={0} md={5}>
        <Steps
          direction='vertical'
          className='timeline-steps'
          current={current}
          onChange={handleStepChange}
          items={items}
          labelPlacement='vertical'
          size='small'
          progressDot
        />
      </Col>
      <Col xs={24} md={19}>
        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={5500}
          afterChange={handleAfterChange}
          // dots
          arrows
        >
          {timelineData.map((item) => (
            <div key={item.year}>
              <div className='carousel-container'>
                <CarouselItem {...item} />
              </div>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  )
}

export default Timeline
