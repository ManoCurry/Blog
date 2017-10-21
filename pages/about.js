import React from 'react'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import AppLayout from '../components/layouts/AppLayout'
import SectionLayout from '../components/layouts/SectionLayout'

import TextJiseung from '../static/text-jiseung.svg'

const About = () => (
  <AppLayout>
    <h2 className='section-title'
      lang='en'>
      $ whoami
    </h2>
    <section className='authors'>
      <ul className='authors'>
        <li className='author'>

          <img className='author-img'
            src='/static/img-author-js-3.jpg'
            alt='Jiseung Roh'/>
          <div className='author-tag'>
            <TextJiseung />
          </div>
        </li>
      </ul>
    </section>
    <style jsx>{`
      .author {
        position: relative;
        width: 55%;
      }
      .author-img {
        width: 100%;
        max-width: 500px;
        height: auto;
      }
      .author-tag {
        position: absolute;
        bottom: 15px;
        left: 15px;
        width: 65px;
      }

    `}</style>
  </AppLayout>
)

export default About