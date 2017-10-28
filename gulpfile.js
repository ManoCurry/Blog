const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const through = require('through2')

// to get yaml data
const unified = require('unified')
const remarkParse = require('remark-parse')
const frontmatter = require('remark-frontmatter')
const jsYaml = require('js-yaml')

// template for devnotes
const template = fs.readFileSync(`${__dirname}/templates/DevnotesTemplate.js`, 'utf8')

// gulp tasks
gulp.task('generate:md', () => {
  gulp.src([`${__dirname}/data/posts/*.md`])
    .pipe(gulpPlugin(devnotesProcessor, template))
    .pipe(gulp.dest(`${__dirname}/pages/posts`))
})

gulp.task('generate:list', () => {
  const postYamls = fs.readdirSync('./data/posts')
    .filter((postPath) => {
      return postPath.match(/\.md$/)
    })
    .map((postPath) => {
      const postContent = fs.readFileSync(path.join('data/posts', postPath))
      return {
        ...parseFrontmatter(postContent),
        id: postPath
      }
    })
    .sort((a, b) => b == null || b.date == null
      ? -1
      : b.date.localeCompare(a.date)
    )
  fs.writeFileSync('./data/generated/devnoteList.json', JSON.stringify(postYamls))
})

gulp.task('imagemin', () => {
  gulp.src(['./static/bashes/**/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest(`${__dirname}/static/bashes`))
})


// gulpPlugin
const gulpPlugin = (transformer, template) => {
  return through.obj((file, encoding, callback) => {
    file = transformer(file, encoding)

    callback(null, file)
  })
}

// devnotesProcessor
const devnotesProcessor = (file, encoding) => {
  const input = file.contents.toString(encoding)
  const escapedInput = input.replace(/`/g, '\\`')
  const output = template.replace(/\$source/, escapedInput)

  file.contents = new Buffer(output)
  file.path = file.path
    .replace(/\.md$/, '.js')
    .replace(/posts/, 'devnotes')

  return file
}

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

gulp.task('watch', () => {
  gulp.watch('./data/posts/*.md', ['generate:md', 'generate:list'])
})
