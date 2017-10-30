import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

class Navigation extends React.Component {
  render () {
    const {
      pathname
    } = this.props
    console.log(pathname.indexOf('/devnotes'))
    return (
      <ul className='gnb__list'>
        <li className='gnb__item'>
          <Link prefetch
            href='/devnotes'
            >
            <a className={`navlink navlink--big ${
              pathname.indexOf('/devnotes') > -1
                ? 'active'
                : 'inactive'
            }`}
              lang='en'>
              <span className='english'
                lang='en'>Devnotes</span>
              <span className='korean'>개발일기</span>
            </a>
          </Link>
        </li>
        <li className='gnb__item'>
          <Link prefetch
            href='/bash_history'>
            <a className={`navlink ${
              pathname.indexOf('/bash_history') > -1
                ? 'active'
                : 'inactive'
              }`}
              lang='en'>
              <span className='english'
                lang='en'>.bash_history</span>
              <span className='korean'>일상</span>
            </a>
          </Link>
        </li>
        <li className='gnb__item gnb__item--last'>
          <Link prefetch
            href='/about'>
            <a className={`navlink ${
              pathname.indexOf('/about') > -1
                ? 'active'
                : 'inactive'
              }`}
              lang='en'>
              <span className='english'
                lang='en'>$ whoami</span>
              <span className='korean'>MANO</span>
            </a>
          </Link>
        </li>
        <style jsx>{`
          .gnb__list {
            position: absolute;
            left: 40px;
            top: 200px;
            list-style-type: none;
            height: calc(100vh - 200px);
          }

          .gnb__item {
            width: 100%;
            font-weight: 700;
          }

          .gnb__item--last {
            position: absolute;
            bottom: 40px;
          }

          .navlink--big {
            text-transform: uppercase;
          }

          .english {
            font-size: 24px;
            font-weight: 700;
          }

          .korean {
            padding: 0 8px;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            background-color: #1b2125;
            color: #ffffff;
          }

          .navlink span {
            line-height: 40px;
          }

          .inactive .english {
            display: block;
          }
          .inactive .korean {
            display: none;
          }
          .active .english {
            display: none;
          }
          .active .korean {
            display: block;
          }
        `}</style>
      </ul>
    )
  }
}



const withActiveLink = (Component) => {
  return class EnhancedComponent extends React.Component {
    constructor () {
      super()

      this.state = {
        pathname: '/'
      }
    }

    componentDidMount () {
      Router.onRouteChangeComplete = (url) => {
        this.setState({
          pathname: url
        })
      }

      if (typeof window !== 'undefined') {
        this.setState({
          pathname: Router.router.pathname
        })
      }
    }

    render () {
      const {
        pathname
      } = this.state

      return <Component pathname={pathname}/>
    }
  }
}

export default withActiveLink(Navigation)