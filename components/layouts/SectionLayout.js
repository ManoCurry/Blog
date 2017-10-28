import React from 'react'
import Link from 'next/link'

const SectionLayout = (props) => (
  <section className='section-layout'>
    {props.children}
    <style jsx global>{`
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