import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'

const MarkdownRenderer = ({
  source
}) => remark()
  .use(reactRenderer)
  .processSync(source)
  .contents

export default MarkdownRenderer