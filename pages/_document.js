import Document, { Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full">
        <Head />
        <body className="bg-gray-100 text-gray-800 bg-site-grad bg-no-repeat px-5">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
