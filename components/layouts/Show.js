import React from 'react'
import AppLayout from './AppLayout'

const NoteLayout = (props) => (
  <AppLayout>
    <article className='section-container'>
      <div className='section-layout'>
        <div className='section-wrap'>
        {props.children}
        </div>
      </div>
    </article>
  </AppLayout>
)

export default NoteLayout