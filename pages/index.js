import React from 'react'
import axios from 'axios'
import AppLayout from '../components/layouts/AppLayout'

const OWNER = 'ManoCurry'
const REPO = 'Blog'


class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      commitLogs: null
    }
  }

  componentDidMount() {
    const commitData = axios.get(`https://api.github.com/repos/${OWNER}/${REPO}/commits`)
      .then(({
        data
      }) => {
        return data.reduce((acc, {
          commit
        }, index) => {
          const author = commit.author
          const name = author.name
          const date = author.date
          const message = commit.message
          acc[date] = {
            name,
            message
          }
          return acc
        }, {})
      })
      .then((commitLogs) => {
        this.setState({
          commitLogs
        })
      })
      .catch(() => {
        console.log('i hate you')
      })
  }

  render () {
    const {
      commitLogs
    } = this.state

    return (
      (
        <AppLayout>
          <h2>
            {
              !commitLogs
              ? 'Loading...'
              : Object.entries(commitLogs)
                  .map(([date, {
                    name,
                    message
                  }]) => {
                    return <span
                      key={date}
                      className={name.toLowerCase()}>
                      {date}:{name}-{message}////---
                    </span>
                  })
            }
          </h2>
          <style jsx>{`
            h2, span {
              margin-right: 2px;
              font-size: 7px;
              line-height: 1.2;
              font-family: 'Courier', 'Menlo', monospace
            }
            .roh {
              color: white;
              background-color: black;
            }
          `}</style>
        </AppLayout>
      )
    )
  }
}



export default Index