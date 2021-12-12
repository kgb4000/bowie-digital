import { useEffect } from 'react'
import '../styles/globals.css'

import TagManager from 'react-gtm-module'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-K5LS529' })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
