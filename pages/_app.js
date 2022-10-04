import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap");
  },[])
  return <Component {...pageProps} />
}

export default MyApp
