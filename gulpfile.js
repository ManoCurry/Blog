const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const through = require('through2')

const template = fs.readFileSync(`${__dirname}/templates/RemarkedComponent.js`, 'utf8')

gulp.task('generate:md', () => {
  gulp.src([`${__dirname}/data/posts/*.md`])
    .pipe(gulpPlugin(markdownFileProcessor, template))
    .pipe(gulp.dest(`${__dirname}/pages/posts`))
})

gulp.task('generate:bash', () => {
  gulp.src([`${__dirname}/data/bashes/history.json`])
    .pipe(gulpPlugin(bashHistoryPostProcessor, template))
    .pipe(gulp.dest(`${__dirname}/pages/bashes/`))
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

const bashHistoryPostProcessor = (file, encoding) => {
  const input = file.contents.toString(encoding)
  const bashData = createBashData(input)
  console.log(bashData)
  const output = template.replace(/\$source/, bashData)

  file.contents = new Buffer(output)
  file.path = file.path.replace(/\.json$/, '.jsx')

  return file
}

const createBashData = (json) => {
  const data = JSON.parse(json)

  return Object.entries(data)
    .map(([date, history], index) => {
      const dateInfo = `# ${date} `
      const imageSources = history.images
        .reduce((result, path) => {
          return result += `![${date}](${path}) `
        }, '')
      const venueInfo = `${history.venue} ${history.address} `
      return dateInfo + imageSources + venueInfo
    })
}



