// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add Owl Carousel CSS globally */}
          
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
          />
           <link 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
    rel="stylesheet"
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

 
        </Head>
        <body>
          <Main />
          <h1>this is a meta data </h1>
          <NextScript />
          {/* Add jQuery */}
          <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha384-oP2pQ3brw2rJ5K6l9tgtZyT/9fuNfw3h4a7lHXuW5RAyghA1Jf9Yc3ybVnt9rUt9"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
