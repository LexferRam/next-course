import Document, { Html, Head, Main, NextScript, Link } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html lang='sp'>
        <Head>
             <style>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          
          a {
            color: inherit;
            text-decoration: none;
          }
          
          * {
            box-sizing: border-box;
          }
            nav{
              height: 50px;
            padding: 10px;
            background: #000000;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: white;
}

            nav ul{
              display: flex;
            justify-content:center;
            align-items: center;
            list-style: none;
}

            nav ul li a {
              margin: 5px 15px;
}




`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}



export default MyDocument