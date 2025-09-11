import { Timeline as _Timeline, Button } from 'antd'

// logos
import logoGmu from '../../assets/logo-gmu.png'
import logoHhmi from '../../assets/logo-hhmi.png'
import logoGw from '../../assets/logo-gw.png'
import logoJdsat from '../../assets/logo-jdsat.png'
import logoAwsCp from '../../assets/logo-aws-cp.png'

// mui icons
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import CardMembershipIcon from '@mui/icons-material/CardMembership'

const Timeline = () => {
  const items = [
    {
      dot: <SchoolIcon style={{ fontSize: '20px' }} />,
      color: 'orange',
      children: (
        <>
          <p className='timeline-year'>2016</p>
          <p>George Mason University</p>
          <p>B.S. in Neuroscience</p>
          <img className='timeline-logo' src={logoGmu} alt='' />
          
          <Button className='timeline-tag'>
            Details
          </Button>
        </>
      ),
    },
    {
      dot: <WorkIcon style={{ fontSize: '20px' }} />,
      color: 'orange',
      children: (
        <>
          <p className='timeline-year'>2017</p>
          <p>HHMI Janelia Research</p>
          <p>Research Analyst</p>
          <img className='timeline-logo logo-left' src={logoHhmi} alt='' />
        </>
      ),
    },
    {
      dot: <SchoolIcon style={{ fontSize: '20px' }} />,
      color: 'orange',
      children: (
        <>
          <p className='timeline-year'>2021</p>
          <p>George Washington University</p>
          <p>Full-Stack Development Certificate</p>
          <img className='timeline-logo' src={logoGw} alt='' />
        </>
      ),
    },
    {
      dot: <WorkIcon style={{ fontSize: '20px' }} />,
      color: 'orange',
      children: (
        <>
          <p className='timeline-year'>2021</p>
          <p>JDSAT</p>
          <p>Full Stack Developer</p>
          <img className='timeline-logo logo-left' src={logoJdsat} alt='' />
          {/* <img className='timeline-logo logo-left' src={logoHhmi} alt='' /> */}
        </>
      ),
    },

    {
      dot: <CardMembershipIcon style={{ fontSize: '20px' }} />,
      color: 'orange',
      children: (
        <>
          <p>2024</p>
          <p>AWS Certificate</p>
          <p>Certified Cloud Practitioner</p>
          <img className='timeline-logo' src={logoAwsCp} alt='' />
        </>
      ),
    },
  ]
  return <_Timeline className='timeline' mode='alternate' items={items} />
}

export default Timeline
