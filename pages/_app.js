import { useEffect } from 'react'
import '../styles/globals.css'
import 'react-modal-video/scss/modal-video.scss'

import TagManager from 'react-gtm-module'


const tagManagerArgs = {
  id: "GTM-XXXX",
}

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp