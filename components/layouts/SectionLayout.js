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
        padding-top: 32px;
        padding-bottom: 32px;
        overflow: hidden;
      }

      .section-layout {
        width: 100%;
        height: 100%;
        overflow: auto;
      }

      .section-wrap {
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

      @media screen and (max-width: 540px) {
        .section-container {
          padding-bottom: 45px;
        }
        .section-wrap {
          padding-left: 15px;
          padding-right: 15px;
        }
      }
      `}
    </style>
  </section>
)

export default SectionLayout