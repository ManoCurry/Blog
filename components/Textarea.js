import React from 'react'
import Link from 'next/link'
import ReactRenderer from 'remark-react'
import Remark from 'remark'

class Textarea extends React.Component {
  state = {
    text: null
  }

  onFormChange = (e) => {
    console.log(this.input.value)
    const text = this.input.value
    this.setState({
      text
    })
  }

  render (props) {
    return (
      <div>
        <textarea name=''
          id=''
          ref={input => this.input = input}
          onChange={this.onFormChange}
          >
        </textarea>
        {
          Remark()
            .use(ReactRenderer)
            .processSync(this.state.text)
            .contents
        }
      </div>
    )
  }
}

export default Textarea





// import React from 'react'
// import Remark from 'remark'
// import RemarkRenderer from 'remark-react'

// class Editor extends React.Component {
//   state = {
//     text
//   }
// }