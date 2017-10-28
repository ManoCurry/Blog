import React from 'react'
import AppLayout from '../components/layouts/AppLayout'
import BashHistoryRenderer from './bashes/BashHistoryRenderer'

const BashHistory = (props) => {
  return (
    <AppLayout>
      <h2 className='section-title'>
        .bash_history
      </h2>
      <article className='section-layout'>
        <div className='section-wrap'>
          <BashHistoryRenderer />
        </div>
      </article>
    </AppLayout>
  )
}

export default BashHistory

