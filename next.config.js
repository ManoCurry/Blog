const devnotesData = require('./static/generated/devnotes')

module.exports = {
  exportPathMap: function () {
    const basePathMap = {
      '/': {page: '/' },
      '/about': {page: '/about' },
      '/projects': {page: '/projects' },
      '/devnotes': {page: '/devnotes' },
      '/bash_history': {page: '/bash_history' },
    }
    const devnotePathMap = devnotesData.reduce((acc, post) => {
      acc[`/devnotes/${post.id}`] = {page: '/devnotes/show', query: {id: post.id}}
      return acc
    }, {})

    const pathMap = {
      ...basePathMap,
      ...devnotePathMap,
    }
    console.log(pathMap)
    return pathMap
  }
}