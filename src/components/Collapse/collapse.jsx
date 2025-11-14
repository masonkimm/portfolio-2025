import { Collapse as AntCollapse, Carousel, Image } from 'antd'

import TechIcons from '../TechIcons/techIcons'

// PREP Images
import prep_1 from '../../assets/projects/prep/prep_1.png'
import prep_2 from '../../assets/projects/prep/prep_2.png'
import prep_3 from '../../assets/projects/prep/prep_3.png'
import prep_4 from '../../assets/projects/prep/prep_4.png'
import prep_5 from '../../assets/projects/prep/prep_5.png'
import prep_6 from '../../assets/projects/prep/prep_6.png'
import prep_7 from '../../assets/projects/prep/prep_7.png'
import prep_8 from '../../assets/projects/prep/prep_8.png'

// COP Images
import teep_1 from '../../assets/projects/teep/teep_1.png'
import teep_2 from '../../assets/projects/teep/teep_2.png'
import teep_3 from '../../assets/projects/teep/teep_3.png'
import teep_4 from '../../assets/projects/teep/teep_4.png'

// COP Images
import cop_1 from '../../assets/projects/cop/cop_1.png'
import cop_2 from '../../assets/projects/cop/cop_2.png'
import cop_3 from '../../assets/projects/cop/cop_3.png'

// Amazon Clone
import ac_1 from '../../assets/projects/amazonClone/ac_1.png'
import ac_2 from '../../assets/projects/amazonClone/ac_2.png'

const Project_PREP = () => (
  <div style={{ padding: '8px 0' }}>
    <p>
      {/* Navy Medicine web app enabling Emergency Managers and Public Health
      Emergency Officers (PHEOs) to collect data, track training, and generate
      readiness reports across Medical Treatment Facilities (MTFs). */}
      Delivered enterprise emergency management platform enabling Emergency
      Managers to collect readiness data and track training compliance across
      100+ Military Treatment Facilities. Consolidated legacy systems into a
      modern React + Flask platform with automated dashboards, document
      management, and DoD-cloud security compliance.
    </p>
    <p>
      PREP consolidates Emergency Preparedness, Anti-Terrorism, and NDMS into a
      secure, scalable platform with automated dashboards and document
      management.
    </p>
    <p>
      <strong>Live Demo: </strong> Deployed in a secure, private DoD cloud
      environment
    </p>
    <p>
      <strong>Technologies:</strong> React, Flask, SQLAlchemy, PostgreSQL,
      GitLab CI/CD, MIP-SF (DoD cloud hosting)
    </p>

    {/* Container with maxWidth and centered */}
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Carousel autoplay arrows dots={false}>
        {[prep_1, prep_2, prep_3, prep_4, prep_5, prep_6, prep_7, prep_8].map(
          (img, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <Image
                src={img}
                alt={`PREP screenshot ${idx + 1}`}
                style={{
                  maxHeight: '500px',
                  width: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
              />
            </div>
          ),
        )}
      </Carousel>
    </div>
  </div>
)

const Project_TEEP = () => (
  <div style={{ padding: '8px 0' }}>
    <p>
      Built React application with a dynamic Gantt chart for managing unit
      assignments, training phases, and resource requirements. Improved
      operational planning by providing real-time visibility into training
      schedules and unsourced requirements.
    </p>
    <p>
      <strong>Live Demo: </strong>
      <a href='https://teep.app1.jdsat-labs.com/' target='_blank'>
        https://teep.app1.jdsat-labs.com/
      </a>
    </p>
    <p>
      <strong>Technologies:</strong> React (Vite), Gantt Chart (Svelte Gantt)
      GitLab CI/CD, Private Cloud Hosting (Demo)
    </p>
    {/* Container with maxWidth and centered */}
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Carousel autoplay arrows dots={false}>
        {[teep_1, teep_2, teep_3, teep_4].map((img, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <Image
              src={img}
              alt={`PREP screenshot ${idx + 1}`}
              style={{
                maxHeight: '500px',
                width: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
)

const Project_COP = () => (
  <div style={{ padding: '8px 0' }}>
    <p>
      Developed interactive geospatial mapping application displaying unit
      deployments, equipment sets, and training phase status. Enabled leadership
      to monitor readiness and deployment planning with dynamic visualization
      tools.
    </p>
    <p>
      <strong>Live Demo: </strong>
      <a href='https://cop-poc.app1.jdsat-labs.com/' target='_blank'>
        https://cop-poc.app1.jdsat-labs.com/
      </a>
    </p>
    <p>
      <strong>Technologies:</strong> React, Flask, Map (Leaflet) GitLab CI/CD,
      Private Cloud Hosting (Demo)
    </p>

    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Carousel autoplay arrows dots={false}>
        {[cop_1, cop_2, cop_3].map((img, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <Image
              src={img}
              alt={`PREP screenshot ${idx + 1}`}
              style={{
                maxHeight: '500px',
                width: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
)

const Project_Amazon_Clone = () => (
  <div style={{ padding: '8px 0' }}>
    <p>
      Built a responsive e-commerce web application featuring advanced UI
      development, global state management, and modern design principles.
      Implemented shopping cart functionality, dynamic product display, and
      clean user experience to showcase frontend engineering expertise.
    </p>
    <p>
      <strong>Live Demo: </strong>
      <a href='https://masonkimm.github.io/amazon-clone/' target='_blank'>
        https://masonkimm.github.io/amazon-clone/
      </a>
    </p>
    <p>
      <strong>Technologies:</strong> React, React-Router-DOM, React Context,
      Github Pages, Material UI, Private Cloud Hosting (Demo)
    </p>

    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Carousel autoplay arrows dots={false}>
        {[ac_1, ac_2].map((img, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <Image
              src={img}
              alt={`PREP screenshot ${idx + 1}`}
              style={{
                maxHeight: '500px',
                width: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
)

const Collpase = () => {
  const items = [
    {
      key: '1',
      label: 'PREP - Portal for Readiness and Emergency Preparedness',
      children: <Project_PREP />,
      extra: (
        <TechIcons
          stack={[
            'react',
            'python',
            'flask',
            'postgresql',
            'antd',
            'gitlab',
            'cloud',
          ]}
          size={20}
        />
      ),
    },
    {
      key: '2',
      label: 'TEEP - Training Exercise & Employment Plan',
      children: <Project_TEEP />,
      extra: (
        <TechIcons
          stack={['react', 'vite', 'gitlab', 'antd', 'gantt', 'cloud']}
          size={20}
        />
      ),
    },
    {
      key: '3',
      label: 'COP',
      children: <Project_COP />,
      extra: (
        <TechIcons
          stack={['react', 'vite', 'gitlab', 'antd', 'map', 'cloud']}
          size={20}
        />
      ),
    },
    {
      key: '4',
      label: 'Amazon Clone',
      children: <Project_Amazon_Clone />,
      extra: <TechIcons stack={['react', 'github', 'cloud']} size={20} />,
    },
  ]

  return (
    <AntCollapse
      defaultActiveKey={['1']}
      items={items}
      accordion
      style={{
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    />
  )
}

export default Collpase
