import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Ready from '../components/ready-section'
import ReactPlayer from 'react-player/youtube'

import { NextSeo } from 'next-seo'

import Link from 'next/link'

export default function About() {
  const SEO = {
    title: 'About Bowie SEO',
    titleTemplate: '%s | Maryland SEO Expert',
    description:
      'Looking for a SEO Expert in Maryland? I specialize in SEO and Local SEO to get you more traffic, leads and customers. Contact me today!',
    canonical: 'https://bowieseo.com/about',
    openGraph: {
      title: 'About Bowie SEO | Maryland SEO Expert',
      description:
        'Looking for a SEO Expert in Maryland? I specialize in SEO and Local SEO to get you more traffic, leads and customers. Contact me today!',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Talk to Kes" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="35rem"
        heroText="About Me"
        subText="Maryland SEO Expert"
        buttonText="Contact me"
        buttonLink="/contact"
      />
      <Main>
        <section className="section">
          <div className="container">
            <h2>About me</h2>
            <p>Hello, my name is Kester.</p>
            <p>I am an SEO expert and the owner of Bowie SEO.</p>
            <p>
              If you were expecting a big SEO firm or agency, I'm sorry, it's
              just me.
            </p>
            <p>
              I'm the one actually doing all the hard work behind the scenes
              helping business rank higher in the search engines.
            </p>
            <p>
              I live in Bowie, Maryland and I specialize in search engine
              optimization.
            </p>
            <p>
              I help Maryland businesses improve their organic rankings by
              auditing and correcting harmful technical, on-page, and off-page
              issues on their website.
            </p>
            <p>
              I not only find the issues stopping your site from ranking higher
              and getting leads, I can fix the isuues.
            </p>
            <p>
              I create an action plan for us to fix the problems that are
              stopping your website from performing better in the search
              results.
            </p>
            <p>
              I pride myself on being able to deliver real results with tangible
              improvements in organic traffic for my clients.
            </p>
            <p>
              Most of all, the goal of this marketing channel is to make more
              money for your business
            </p>
            <p>
              If you want to outrank your competitors, get more leads, and make
              more money in your business, then contact me today.
            </p>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact me &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {/* <div className="video-container">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  width="100%"
                  height="100%"
                />
              </div>
            </div> */}

            <h2>My Vision</h2>
            <p>
              My vision is to help small businesses in Maryland use search
              engine optimization to make more money for their businesses.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2>My Mission</h2>
            <p>
              My mission is to help one hundred small businesses in Maryland use
              search engine optimization. I will do this by:
            </p>
            <ol>
              <li>Teaching small businesses about SEO.</li>
              <li>
                Showing them how to incorporate it into their digital marketing.
              </li>
              <li>
                Running successful SEO campaigns for small businesses in
                Maryland.
              </li>
              <li>Being an asset to my community.</li>
            </ol>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2>Why Work With Me and Bowie SEO</h2>
            <p>
              We are a local business and an active part of the local business
              community. I want to help small business owners in our community
              grow with search engine optimization.
            </p>
            <p>
              We're not an out of town SEO agency or super large SEO company
              pretending to care about your business. Because when your business
              grows, the entire community grows, and that's want I want.
            </p>
            <p>
              I believe in doing search engine optimization the right way, so
              that I get our customers the best results.
            </p>

            <p>When you work with me and Bowie SEO, you get:</p>
            <ul>
              <li>
                An{' '}
                <Link href="/seo-audit">
                  <a>SEO Audit</a>
                </Link>
                .
              </li>
              <li>Real list of keyword you must target.</li>
              <li>Measurable results.</li>
              <li>No long-term contacts.</li>
              <li>Cancel anytime.</li>
              <li>
                To work with a local Maryland SEO company doing business with
                other local businesses, not an SEO company in another state.
              </li>
              <li>
                Only White Hat SEO practices that won&apos;t get you website
                banned.
              </li>
              <li>
                A company that works with one business per industry in our area.
                Example. If we work with a roofer in Bowie, we will not work
                with another roofer in Bowie, or within 30 miles of your
                teritory.
              </li>
              <li>Weekly updates and monthly reports.</li>
              <li>An SEO company that really cares about your business.</li>
            </ul>
            <p>
              We don't offer SEO packages because every business has different
              needs. We therefore create a custom SEO strategy for your
              business.
            </p>
            <h2>Small Businesses I am Proud to Work With</h2>
            <ul>
              <li>Chiropractors</li>
              <li>Interior designers</li>
              <li>Construction companies</li>
              <li>Pain Management companies</li>
              <li>General Contractors</li>
              <li>Plumbers</li>
              <li>Lawyers</li>
              <li>HVAC Contractors</li>
              <li>Pool Builders</li>
              <li>Roofers</li>
              <li>Concrete specialists</li>
              <li>Asphalt pavers</li>
              <li>Septic Contractors</li>
              <li>and more</li>
            </ul>
            <p>
              If you have a small business in Maryland, and want to see how SEO
              can help your business, fill out the form, or give me a call at{' '}
              <a href="tel:1-240-266-0588">(240) 266-0588</a>.
            </p>
          </div>
          <div className="btn">
            <Link href="/contact">
              <a>
                <Button>Contatc me &#8594;</Button>
              </a>
            </Link>
          </div>
        </section>
        <Ready
          h2="I Can Help You, Get More Traffic, Rank Higher in the Search Engines, Get More Leads, and Increase Revenue For Your Business?"
          p="I look forward to meeting with you and showing you how Bowie SEO can help. Please fill out the form so that we can get started."
        />
      </Main>
    </>
  )
}
