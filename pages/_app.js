import { useEffect } from 'react'
import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import TagManager from 'react-gtm-module'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-K5LS529' })
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
