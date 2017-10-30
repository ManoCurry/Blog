import React from 'react'
import Link from 'next/link'

const SectionLayout = (props) => (
  <section className='section-container'>
    <div className='section-layout'>
      <div className='section-wrap'>
        {props.children}
      </div>
    </div>
    <style jsx global>{`
      .section-container {
        position: relative;
        flex-grow: 1;
        height: 100vh;
        padding-top: 40px;
        padding-bottom: 40px;
        overflow: hidden;
      }

      .section-layout {
        position: absolute;
        top: 40px;
        bottom: 40px;
        left: 50%;
        overflow: auto;
        width: 100%;
        transform: translateX(-50%);
      }

      .section-wrap {
        width: 50%;
        max-width: 700px;
        margin: 0 auto;
      }

      .section-title {
        padding-top: 32px;
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