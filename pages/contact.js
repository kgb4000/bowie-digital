import { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import { NextSeo } from 'next-seo'
import ContactForm from '../components/contact-form'

export default function Contact() {
  const SEO = {
    title: 'Contact Us to Learn How SEO Can Help Grow Your Business.',
    description:
      "Contact us if you have any questions about search engine optimization for your small business, and let's see how we can help your business GROW.",
    canonical: 'https://bowieseo.com/contact',
    openGraph: {
      title: 'Contact Us to Learn How SEO Can Help Grow Your Business.',
      description:
        "Contact us if you have any questions about search engine optimization for your small business, and let's see how we can help your business GROW.",
      type: 'website',
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
      <Header buttontext="Calll now!" buttonLink="tel:1-240-266-0588" />
      <HeroBox
        backgroundHeight="40rem"
        backgroundImage="/images/contact-us.webp"
        backgroundPosition="center left"
        heroText="Contact Us"
        subText="Let Us Help You Get More Website Traffic."
        buttonText=" Call (240) 266-0588"
        buttonLink="tel:1-240-266-0588"
      />

      <Main>
        <section className="contact">
          <div className="container">
            <p>
              I am an <b>SEO expert</b> in Bowie, Maryland.
            </p>
            <p>
              If you would like to get in touch with me and learn how search
              engine optimization can help your business, please feel free to
              reach out.
            </p>
            <p>
              I am happy to answer any questions you have about my SEO services
              and how search engine optimization can help your business grow.
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
              <li>Or fill out the form below</li>
            </ul>
          </div>
        </section>
        <ContactForm h2="Fill out the form and I will get back to you ASAP!" />
      </Main>
    </>
  )
}
