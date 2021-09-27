import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Script src="https://code.jquery.com/jquery-2.1.1.min.js"/>       
  <Script src="/assets/js/bootstrap.min.js"/>         
  <Script src="/assets/js/jquery.meanmenu.js"/>          
  <Script src="/assets/js/main.js"/> 
  
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
