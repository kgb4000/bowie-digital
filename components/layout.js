import React from 'react'
import Footer from './footer'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
