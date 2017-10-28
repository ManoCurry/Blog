import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import NoteLayout from '../components/layouts/NoteLayout'

const MarkdownRenderer = ({
  source
}) => (
    <article className='markdown'>
      {
        remark()
          .use(reactRenderer)
          .processSync(source)
          .contents
      }
      <style jsx global>{`
        .markdown h1 {
          font-size: 53px;
          line-height: 1.2;
          margin-bottom: 40px;
        }

        .markdown p {
          font-size: 16px;
          line-height: 1.6875;
          margin-bottom: 27px;
        }
      `}</style>
    </article>
)

export default MarkdownRenderer