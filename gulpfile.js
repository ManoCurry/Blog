const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

// to get yaml data
const unified = require('unified')
const remarkParse = require('remark-parse')
const frontmatter = require('remark-frontmatter')
const jsYaml = require('js-yaml')

const processor = unified()
  .use(remarkParse)
  .use(frontmatter, ['yaml'])

// parseFrontmatter
const parseFrontmatter = (input) => {
const tree = processor.parse(input)
if (tree.children && tree.children[0].type === 'yaml') {
  return jsYaml.load(tree.children[0].value)
}
return {}
}

gulp.task('devnotes', () => {
  const postYamls = fs.readdirSync('./static/posts')
    .filter((postPath) => {
      return postPath.match(/\.md$/)
    })
    .map((postPath) => {
      const postContent = fs.readFileSync(path.join('static/posts', postPath))
      return {
        ...parseFrontmatter(postContent),
        id: postPath.replace(/\.md$/, '')
      }
    })
    .sort((a, b) => b == null || b.date == null
      ? -1
      : b.date.localeCompare(a.date)
    )
  fs.writeFileSync('./static/generated/devnotes.json', JSON.stringify(postYamls))
})

gulp.task('imagemin', () => {
  gulp.src(['./static/bashes/**/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest(`${__dirname}/static/bashes`))
})

gulp.task('devnotes:watch', () => {
  gulp.watch('./data/posts/*.md', ['generate:list'])
})
