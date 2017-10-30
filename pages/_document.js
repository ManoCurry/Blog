import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <link href='/static/styles/xcode.css' rel='stylesheet'/>
        </Head>
        <body className='custom_class'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}