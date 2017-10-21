import React from 'react'
import Link from 'next/link'
import { globalStyle } from '../pages/index'

const SectionLayout = (props) => (
  <section className='section-layout'>
    <div className='section-wrap'>
    {props.children}
    { globalStyle }
    </div>
    <style jsx global>{`
      .section-wrap {
        width: 83.33333333%;
        margin: 0 auto;
      }
      .section-title {
        margin-bottom: 64px;
        font-size: 53px;
        line-heigt: 1.2075471698;
        letter-spacing: -.03em;
      }
    `}</style>
  </section>
)

export default SectionLayout