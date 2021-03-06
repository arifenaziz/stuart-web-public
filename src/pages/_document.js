import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/et-line-fonts.css" />
        <link rel="stylesheet" href="/assets/css/ionicons.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/global.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />                           
        </Head>
        <body>
          <Main />
          <NextScript />  
          <script src="https://code.jquery.com/jquery-2.1.1.min.js"/>       
          <script src="/assets/js/bootstrap.min.js"/>         
          <script src="/assets/js/jquery.meanmenu.js"/>          
          <script src="/assets/js/main.js"/>                   
        </body>
      </Html>
    )
  }
}

export default MyDocument;