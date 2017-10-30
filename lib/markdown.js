import React from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import frontmatter from 'remark-frontmatter'
import jsYaml from 'js-yaml'

export const processor = unified()
  .use(remarkParse)
  .use(frontmatter, ['yaml'])
  .use(remarkYamlParse)
  .use(remarkRehype, {
    allowDangerousHTML: true
  })
  .use(rehypeRaw)
  .use(rehypeStringify)

// transformer
function remarkYamlParse() {
  return function (node, file) {
    if (node.children[0] && node.children[0].type === 'yaml') {
      file.data.yaml = jsYaml.load(node.children[0].value)
    }
  }
}

export function renderMarkdown (input) {
return processor.processSync(input).toString()
}
