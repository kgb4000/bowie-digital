import React from 'react'
import Header from '../components/outreachheader'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import ReactPlayer from 'react-player/youtube'

import { NextSeo } from 'next-seo'

export default function DonGwiz() {
  const SEO = {
    title: 'Lewis Aquatech',
    description:
      'We provide SEO services for business in Annapolis Junction, Maryland. Our local SEO services will get your website to the top of the local search results.',
    canonical: 'https://bowieseo.com/audit/parkerstaging',
  }
  return (
    <>
      <NextSeo
        {...SEO}
        noindex={true}
        nofollow={true}
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
      <Header
        buttontext="Book a call"
        buttonLink="https://calendly.com/bowieseo/30min"
      />
      <HeroBox />
      <Main>
        <section>
          <div className="solution-container">
            <h3>Lewis Aquatech Opportunities</h3>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/cR27O8br7mM"
                width="100%"
                height="100%"
                controls="true"
              />
            </div>
            <h2>Your Competitors' Stats in Google</h2>
            <div className="competitors">
              <img src="/images/rockwater.png" />
            </div>
            <div className="competitors">
              <img src="/images/anthonysylvan.png" />
            </div>
            <div className="competitors">
              <img src="/images/townandcountrypools.png" />
            </div>
            <div className="competitors">
              <img src="/images/lewisaquatech.png" />
            </div>
            <p>
              Your competitors in Virginia get more{' '}
              <strong>organic traffic</strong> than you.
            </p>
            <p>
              You too can enjoy the benefits of more website traffic and more
              leads.
            </p>
            <p>Hi, I'm Kester, an SEO specialist in Maryland.</p>
            <p>
              Let's talk about getting Lewis Aquatech more website traffic and
              more leads to build more luxury outdoor spaces.
            </p>
            <a href="https://calendly.com/bowieseo/30min" target="_blank">
              <Button>Book a call</Button>
            </a>
          </div>
        </section>
      </Main>
      <footer className="outreach-footer">
        Kester Browne | SEO Specialist at Bowie SEO
      </footer>
    </>
  )
}
