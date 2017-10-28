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
        .markdown {
          padding: 0 50px;
        }

        .markdown ul,
        .markdown ol {
          padding-left: 20px;
          margin-bottom: 27px;
        }

        .markdown ul {
          list-style-type: disc;
        }

        .markdown ol {
          list-style-type: number;
        }

        .markdown h1 {
          font-size: 53px;
          line-height: 1.2;
          margin-bottom: 40px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5 {
          margin-top: 81px;
          margin-bottom: 27px;
        }

        .markdown p {
          font-size: 16px;
          line-height: 1.6875;
          margin-bottom: 27px;
        }

        .markdown blockquote {
          padding: 10px 40px;
        }
        .markdown blockquote p {
          padding-left: 20px;
          border-left: 6px solid #e9ecef;
          font-size: 14px;
          color: #495057;
        }

        .markdown pre {
          margin-bottom: 54px;
        }

        .markdown p + pre {
          margin-top: 54px;
        }

        .markdown pre code {
          display: inline-block;
          font-family: 'Menlo', monospace;
          font-size: 14px;
          line-height: 1.6;
          color: #868e96;
        }
      `}</style>
    </article>
)

export default MarkdownRenderer