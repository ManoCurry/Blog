const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const through = require('through2')

const template = fs.readFileSync(`${__dirname}/templates/BashHistoryTemplate.js`, 'utf8')

gulp.task('generate:md', () => {
  gulp.src([`${__dirname}/data/posts/*.md`])
    .pipe(gulpPlugin(markdownFileProcessor, template))
    .pipe(gulp.dest(`${__dirname}/pages/posts`))
})

gulp.task('imagemin', () => {
  gulp.src(['./static/bashes/**/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest(`${__dirname}/static/bashes`))
})


const gulpPlugin = (transformer, template) => {
  return through.obj((file, encoding, callback) => {
    file = transformer(file, encoding)

    callback(null, file)
  })
}

const markdownFileProcessor = (file, encoding) => {
  const input = file.contents.toString(encoding)
  const output = template.replace(/\$source/, input)

  file.contents = new Buffer(output)
  file.path = file.path.replace(/\.md$/, '.js')


  return file
}
