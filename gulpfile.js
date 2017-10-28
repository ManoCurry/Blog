const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const through = require('through2')

const template = fs.readFileSync(`${__dirname}/templates/RemarkedComponent.js`, 'utf8')

gulp.task('generate:md', () => {
  gulp.src([`${__dirname}/data/posts/*.md`])
    .pipe(gulpPlugin(markdownFileProcessor))
    .pipe(gulp.dest(`${__dirname}/pages/posts`))
})

const gulpPlugin = (transformer) => {
  return through.obj((file, encoding, callback) => {
    const input = file.contents.toString(encoding)
    const output = template.replace(/\$source/, input)

    file = transformer(file, output)

    callback(null, file)
  })
}

const markdownFileProcessor = (file, output) => {
  file.contents = new Buffer(output)
  file.path = file.path.replace(/\.md$/, '.js')

  return file
}
