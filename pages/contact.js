import { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'
import { NextSeo } from 'next-seo'
import Ready from '../components/ready-section'

export default function Contact() {
  const SEO = {
    title: 'Contact | Bowie SEO',
    description:
      'If you have any questions about Search engine optimization for your small business in Maryland, please contact us.',
    canonical: 'https://bowieseo.com/contact',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://bowieseo.com/contact',
      site_name: 'Bowie SEO',
      images: [],
    },
  }
  return (
    <>
      <NextSeo
        {...SEO}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
      <Header buttontext="Talk To Me" buttonLink="tel:1-240-266-0588" />
      <HeroBox
        backgroundHeight="100vh"
        heroText="Contact Me"
        subText="I want to hear from you."
        buttonText="Call me"
        buttonLink="tel:1-240-266-0588"
      />

      <Main>
        <section className="contact">
          <div className="container">
            <p>
              If you would like to get in touch with me and learn how search
              engine optimization can help your business, please feel free to
              reach out.
            </p>
            <p>
              I am happy to answer any questions you have about my SEO services
              and how it can help your business.
            </p>
            <p>You can reach me in the following ways: </p>
            <ul>
              <li>
                By phone: <a href="tel:1-240-266-0588">(240) 266-0588</a>
              </li>
              <li>
                By email:{' '}
                <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>
              </li>
            </ul>
          </div>
        </section>
        <Ready h2="Fill out the form and I will get back to you ASAP!" />
      </Main>
      <Footer />
    </>
  )
}

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: rgb(240, 78, 74);
`
