import React from 'react'
import Footer from './footer'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Header from '../components/outreachheader'

const OutReachLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default OutReachLayout
