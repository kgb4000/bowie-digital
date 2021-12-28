import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'
import Ready from '../components/ready-section'
import ReactPlayer from 'react-player/youtube'

import { NextSeo } from 'next-seo'

import Link from 'next/link'

export default function About() {
  const SEO = {
    title: 'About Bowie SEO',
    titleTemplate: '%s | We Help You Get More Leads and Customers',
    description:
      'Want More Customers and Leads For Your Business? We specialize in SEO and Local SEO to get you more traffic, leads and customers. Call (240) 266-0588!',
    canonical: 'https://bowieseo.com/about',
    openGraph: {
      title: 'About Bowie SEO | We Help You Get More Leads and Customers',
      description:
        'Want More Customers and Leads For Your Business? We specialize in SEO and Local SEO to get you more traffic, leads and customers. Call (240) 266-0588!',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Talk To Kes" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="40rem"
        heroText="About Me"
        subText="All I Do is Search Engine Optimization for Small Businesses in Maryland"
        buttonText="Contact me"
        buttonLink="/contact"
      />
      <Main>
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
              My vision is to help small businesses use search engine
              optimization to make more money in their business.
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
              <li>Showing them how to incorporate it into their marketing.</li>
              <li>
                Running successful SEO campaigns for small businesses in
                Maryland.
              </li>
            </ol>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2>About me</h2>
            <p>Hello, my name is Kes.</p>
            <p>I am an SEO expert and the founder of Bowie SEO.</p>
            <p>
              If you were expecting a big SEO firm or agency, I'm sorry, it's
              just me.
            </p>
            <p>
              I'm the one actually doing all the hard work behind the scenes
              helping business rank higher in the search engines.
            </p>
            <p>
              I am located in Bowie, Maryland and I specialize in search engine
              optimization.
            </p>
            <p>
              I help Maryland businesses improve their organic rankings by
              auditing and correcting harmful technical, on-page, and off-page
              issues on their website.
            </p>
            <p>I not only find them, I fix them.</p>
            <p>
              I create an action plan for us to fix the problems that are
              stopping your website from performing better in the search
              results.
            </p>
            <p>
              I pride myself on being able to deliver real results with tangible
              improvements in organic traffic for my clients. If you want to
              outrank your competitors without overspending on social media ads,
              then contact me today.
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
              <li>An SEO Audit</li>
              <li>Real keyword research</li>
              <li>Measurable results</li>
              <li>No monthly contacts.</li>
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
              We don't offer packages, because every business will need
              different SEO services. We create a custom strategy for each
              business we work work and save them money by not paying for
              services they don't need.
            </p>
            <h2>Small Businesses We are Proud to Work With</h2>
            <ul>
              <li>Chiropractors</li>
              <li>Interior designers</li>
              <li>Construction companies</li>
              <li>Pain Management companies</li>
              <li>General Contractors</li>
              <li>Plumbers</li>
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
              can help your business, fill out the form, or give us a call.
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
      <Footer />
    </>
  )
}
