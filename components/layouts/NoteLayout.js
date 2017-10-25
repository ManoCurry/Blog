import React from 'react'
import AppLayout from './AppLayout'

const NoteLayout = (props) => (
  <AppLayout>
    <article className='section-layout'>
      <div className='section-wrap'>
        {props.children}
      </div>
    </article>
  </AppLayout>
)

export default NoteLayout