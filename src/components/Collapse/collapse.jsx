import React from 'react'
import { Collapse as AntCollapse, Carousel, Image, Tag } from 'antd'
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

const iconMap = {
  html: <AiFillHtml5 size={22} color='#e34c26' />,
  css: <DiCss3 size={22} color='#1572B6' />,
  javascript: <SiJavascript size={22} color='#f7df1e' />,
  node: <SiNodedotjs size={22} color='#339933' />,
  react: <SiReact size={22} color='#61DAFB' />,
  mysql: <SiMysql size={22} color='#00758f' />,
  mongodb: <SiMongodb size={22} color='#47A248' />,
  jquery: <SiJquery size={22} color='#0769AD' />,
  bootstrap: <SiBootstrap size={22} color='#7952B3' />,
  mui: <SiMui size={22} color='#007FFF' />,
  python: <SiPython size={22} color='#3776AB' />,
}

const TechIcons = ({ stack }) => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    {stack.map((tech) => (
      <span key={tech}>{iconMap[tech.toLowerCase()]}</span>
    ))}
  </div>
)

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
      <strong>Live Demo Link: </strong> Deployed in a secure, private DoD cloud
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
      <Carousel autoplay arrows>
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
      <strong>Live Demo Link: </strong>https://teep.app1.jdsat-labs.com/
    </p>
    <p>
      <strong>Technologies:</strong> React (Vite), Flask, GitLab CI/CD, MIP-SF
      (DoD cloud hosting)
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
      <Carousel autoplay arrows>
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
      <strong>Live Demo Link: </strong>https://cop-poc.app1.jdsat-labs.com/
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
      <Carousel autoplay arrows>
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

const Collpase = () => {
  const items = [
    {
      key: '1',
      label: 'PREP - Portal for Readiness and Emergency Preparedness',
      children: <Project_PREP />,
      extra: <TechIcons stack={['react', 'mysql', 'python']} />,
    },
    {
      key: '2',
      label: 'TEEP - Training Exercise & Employment Plan',
      children: <Project_TEEP />,
      extra: <TechIcons stack={['html', 'css']} />,
    },
    {
      key: '3',
      label: 'COP',
      children: <Project_COP />,
      extra: <TechIcons stack={['react', 'python']} />,
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
