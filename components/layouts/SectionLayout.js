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
        padding-top: 20px;
        padding-bottom: 20px;
        overflow: hidden;
      }
      .section-wrap {
        position: absolute;
        top: 20px;
        bottom: 20px;
        left: 0;
        padding: 0 150px;
        overflow: auto;
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
      `}
    </style>
  </section>
)

export default SectionLayout