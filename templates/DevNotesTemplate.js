import React from 'react'
import MarkdownRenderer from '../../components/markdown/MarkdownRenderer'
import AppLayout from '../../components/layouts/AppLayout'

const DevNotesTemplate = () => (
  <AppLayout>
    <MarkdownRenderer source={`$source`} />
  </AppLayout>
)

export default DevNotesTemplate