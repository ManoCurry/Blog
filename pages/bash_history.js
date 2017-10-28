import React from 'react'
import AppLayout from '../components/layouts/AppLayout'
import BashList from './bash/BashList'

const BashHistory = (props) => {
  return (
    <AppLayout>
      <h2 className='section-title'>
        .bash_history
      </h2>
      <BashList />
    </AppLayout>
  )
}

export default BashHistory

