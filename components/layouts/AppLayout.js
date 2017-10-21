import React from 'react'
import Link from 'next/link'
import Sidebar from '../Sidebar'
import SectionLayout from './SectionLayout'
import globalStyle from './globalStyle'

const AppLayout = (props) => (
  <div className='wrap'>
    <Sidebar/>
    <SectionLayout>
      {props.children}
    </SectionLayout>
    {
      globalStyle
    }
  </div>
)

export default AppLayout