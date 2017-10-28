import React from 'react'
import Link from 'next/link'
import sectionLayoutStyle from '../styles/sectionLayoutStyle'

const SectionLayout = (props) => (
  <section className='section-layout'>
    <div className='section-wrap'>
    {props.children}
    </div>
    {
      sectionLayoutStyle
    }
  </section>
)

export default SectionLayout