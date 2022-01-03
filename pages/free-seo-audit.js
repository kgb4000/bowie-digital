import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Ready from '../components/ready-section'

import { NextSeo } from 'next-seo'

export default function FreeAudit() {
  const SEO = {
    title: 'Free SEO Audit',
    titleTemplate: "%s | Figure Out Why You're Not Ranking Higher",
    description:
      "Want to find out why your website is not ranking higher in the search engines? Get a Free SEO Audit and we'll tell you why. Contact us today!",
    canonical: 'https://bowieseo.com/free-seo-audit',
    openGraph: {
      title: "Free SEO Audit | Identify Why You're Not Ranking Higher",
      description:
        "Want to find out why your website is not ranking higher in the search engines? Get a Free SEO Audit and we'll tell you why. Contact us today!",
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Contact me" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="35rem"
        heroText="Free SEO Audit"
        subText="Find out what's holding your website back from ranking higher and
              getting more traffic."
        buttonText="Call (240) 266-0588"
        buttonLink="tel:1-240-266-0588"
      />

      <Main>
        <section className="contact">
          <div className="container">
            <h2>Bowie SEO FREE SEO Audit</h2>
            <p>
              There are a host of reasons why your website is not getting any
              traffic, and why you&apos;re not ranking higher in the search
              engines.
            </p>
            <p>An SEO audit can tell you why.</p>

            <p>
              This Free audit will uncover the elements that are keeping your
              website from ranking higher, and uncover the problems that you
              must fix to get the results you want.
            </p>
          </div>
        </section>
        <Ready
          h2="Ready to Find Out What is Holding Your Website Back Form Ranking Higher and Getting More Traffic?"
          p="Fill out the form below to for your Free SEO Audit."
        />
      </Main>
    </>
  )
}
