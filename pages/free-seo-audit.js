import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Ready from '../components/ready-section'
import ReactPlayer from 'react-player/lazy'

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
        backgroundHeight="100vh"
        backgroundImage="/images/free-seo-audit.webp"
        heroText="Free SEO Audit"
        subText="Find out what's holding your website back from ranking higher and
              getting more traffic."
        buttonText="Contact us"
        buttonLink="/contact"
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
              This Free audit will help you discover what you need to fix in
              order to get your website ranking higher and infront of your ideal
              customers.
            </p>
            <h3>
              Check out this Free Mini SEO Audit we did for a home staging
              company in Maryland.
            </h3>
          </div>
          <div className="container">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/cR27O8br7mM"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
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
