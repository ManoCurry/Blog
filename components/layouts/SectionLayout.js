import React from 'react'
import Link from 'next/link'

const SectionLayout = (props) => (
  <section className='section-layout'>
    <div className='section-wrap'>
    {props.children}
    </div>
    <style jsx global>{`
      .section-layout {
        position: relative;
        flex-grow: 1;
        height: 100vh;
      }
      .section-wrap {
        position: absolute;
        top: 75px;
        bottom: 75px;
        left: 50px;
        right: 50px;
        overflow: hidden;
      }
      .section-title {
        margin-bottom: 64px;
        font-size: 53px;
        line-height: 1;
        letter-spacing: -.03em;
      }
      .section-title span {
        font-size: 24px;
        line-height: 1;
        margin-left: 16px;
        opacity: .5;
        letter-spacing: -.025em;
      }
    `}</style>
  </section>
)

export default SectionLayout