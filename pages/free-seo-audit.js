import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Ready from '../components/ready-section'

import { NextSeo } from 'next-seo'

export default function FreeAudit() {
  const SEO = {
    title: 'Free SEO Audit',
    titleTemplate: "%s | Let's Audit Your Website",
    description:
      "Want to find out why your website is not ranking higher in the search engines? Get a Free SEO Audit and we'll tell you why. Contact us today!",
    canonical: 'https://bowieseo.com/free-seo-audit',
    openGraph: {
      title: "Free SEO Audit | Let's Audit Your Website",
      description:
        "Want to find out why your website is not ranking higher in the search engines? Get a Free SEO Audit and we'll tell you why. Contact us today!",
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Contact us" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="35rem"
        backgroundImage="/images/free-seo-audit.webp"
        heroText="Free SEO Audit"
        subText="Find out what's holding your website back from ranking higher and
              getting more traffic."
        buttonText="Call (240) 266-0588"
        buttonLink="tel:1-240-266-0588"
      />

      <Main>
        <section className="contact">
          <div className="container">
            <h2>FREE SEO Audit</h2>
            <p>
              There are many reasons why your website is not getting any traffic
              and why you're not ranking higher in the search engines.
            </p>
            <p>An SEO audit can tell you why.</p>

            <p>
              This Free audit will uncover the elements that keep your website
              from ranking higher and find the problems you must fix to get the
              results you want.
            </p>
            <p>
              This Free audit will get you started to ranking higher in the
              search engines, attracting more customers, and growing your
              business.
            </p>
          </div>
        </section>
        <Ready
          h2="Find Out What's Stopping Your Website From Ranking Higher And Getting More Traffic."
          p="Please fill out the form below for your Free SEO Audit."
        />
      </Main>
    </>
  )
}
