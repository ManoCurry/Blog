import React from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import frontmatter from 'remark-frontmatter'
import jsYaml from 'js-yaml'
import NoteLayout from '../layouts/NoteLayout'
import { renderMarkdown } from '../../lib/markdown'

const MarkdownRenderer = ({
  source
}) => (
    <article className='markdown'>
      <div dangerouslySetInnerHTML={{__html: renderMarkdown(source)}} />
      <style jsx global>{`
        .markdown {
          width: 100%;
          max-width: 590px;
          margin: 0 auto;
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
          line-height: 1;
        }

        .markdown h2 {
          font-size: 27px;
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
          width: 100%;
          margin-bottom: 54px;
        }

        .markdown p + pre {
          margin-top: 54px;
          white-space: pre-wrap;
        }

        .markdown pre code {
          display: inline-block;
          width: 100%;
          font-family: 'Menlo', monospace;
          font-size: 13px;
          line-height: 1.6;
          color: #868e96;
        }

        .markdown .highlight--container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .markdown .highlight--h1 span,
        .markdown .highlight--h2 span {
          position: relative;
          left: -16px;
          display: inline-block;
          padding: 0 16px;
          margin-bottom: 10px;
          line-height: 1;
        }

        .markdown .highlight--h1 span {
          background-color: #ebeef0;
        }

        .markdown .highlight--h1 span:last-child {
          margin-bottom: 0;
        }


        .markdown .highlight--container span {
          margin-bottom: 13px;
        }

        .markdown .yellow span {
          background-color: #fef790 !important;
        }
      `}</style>
    </article>
)

export default MarkdownRenderer