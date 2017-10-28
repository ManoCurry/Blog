import React from 'react'
import AppLayout from '../components/layouts/AppLayout'
import BashItems from './bash/BashItems'

const BashHistory = (props) => {
  return (
    <AppLayout>
      <h2 className='section-title'>
        .bash_history
      </h2>
      <BashItems />
    </AppLayout>
  )
}

export default BashHistory

