import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Ready from '../components/ready-section'
// import ReactPlayer from 'react-player/youtube'
import Layout from '../components/layout'

import { NextSeo } from 'next-seo'
import { WebPageJsonLd } from 'next-seo'

import Link from 'next/link'

export default function About() {
  const SEO = {
    title: 'About Us | Bowie SEO',
    description:
      'We specialize in SEO and Local SEO to get you more website traffic, leads and customers. Contact us today!',
    canonical: 'https://bowieseo.com/about',
    openGraph: {
      title: 'About Us | Bowie SEO',
      description:
        'We specialize in SEO and Local SEO to get you more website traffic, leads and customers. Contact us today!',
    },
  }
  return (
    <>
      <Layout>
        {/* <WebPageJsonLd
        description="Looking for a SEO Expert in Maryland? We specialize in SEO and Local SEO to get you more traffic, leads and customers. Contact me today!"
        id="https://bowieseo.com/about"
        lastReviewed="2021-05-26T05:59:02.085Z"
        reviewedBy={{
          type: 'Kester',
          name: 'Browne',
        }}
      /> */}
        <NextSeo {...SEO} />
        <Header buttontext="Contact us" buttonLink="/contact" />
        <HeroBox
          backgroundHeight="100vh"
          heroText="About Us"
          subText="About Bowie SEO"
          buttonText="Contact us"
          buttonLink="/contact"
        />
        <Main>
          <section className="section">
            <div className="container">
              <h2>About Us</h2>
              <p>We are Bowie SEO.</p>
              <p>
                We are{' '}
                <Link href="/maryland-seo-expert">
                  <a>SEO experts</a>
                </Link>{' '}
                from Bowie, Maryland.
              </p>
              <p>
                If you were expecting a big SEO firm or agency, we're sorry,
                we're just a small team.
              </p>
              <p>
                We're doing all the hard work behind the scenes to help
                businesses like yours rank higher, get more traffic, more
                customers, and make more money.
              </p>
              <p>
                We help Maryland businesses improve their organic rankings by
                auditing and correcting harmful technical, on-page, and off-page
                SEO issues.
              </p>
              <p>
                We find the issues stopping your site from ranking higher and
                getting leads, and I also fix the problems.
              </p>
              <p>
                We create an action plan to fix the problems that are stopping
                your website from performing better in the search results.
              </p>
              <p>
                We take pride pride in delivering actual results with tangible
                improvements in organic traffic for my clients.
              </p>
              <p>
                Most of all, the goal of SEO is to make more money for your
                business.
              </p>
              <p>
                Contact us today if you want to outrank your competitors, get
                more leads, and make more money in your business.
              </p>
              <div className="btn">
                <Link href="/contact">
                  <a>
                    <Button>Contact us</Button>
                  </a>
                </Link>
              </div>

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

              <h2>Our Vision</h2>
              <p>
                Our vision is to help small businesses in Maryland use search
                engine optimization to make more money for their companies.
              </p>
              <h2>Our Mission</h2>
              <p>
                Our mission is to help one hundred small businesses in Maryland
                use search engine optimization. I will do this by:
              </p>
              <ol>
                <li>Teaching small businesses about SEO.</li>
                <li>
                  Showing them how to incorporate it into their digital
                  marketing.
                </li>
                <li>
                  Running successful SEO campaigns for small businesses in
                  Maryland.
                </li>
                <li>Being an asset to my community.</li>
              </ol>
              <h2>Why Work With Bowie SEO</h2>
              <p>
                We are a local business and an active part of the local business
                community. I want to help small business owners in our community
                grow with search engine optimization.
              </p>
              <p>
                We're not an out-of-town SEO agency or super large SEO company
                pretending to care about your business. Because when your
                business grows, the entire community grows, and that's want I
                want.
              </p>
              <p>
                We believe in doing search engine optimization the right way to
                get our customers the best results.
              </p>

              <p>When you work with me Bowie SEO, you get:</p>
              <ul>
                <li>
                  An{' '}
                  <Link href="/seo-audit">
                    <a>SEO Audit</a>
                  </Link>
                  .
                </li>
                <li>An actual list of keywords you must target.</li>
                <li>Measurable results.</li>
                <li>No long-term contacts.</li>
                <li>Able to cancel anytime.</li>
                <li>
                  To work with a local Maryland SEO company doing business with
                  other local businesses, not an SEO company in another state.
                </li>
                <li>
                  Only White Hat SEO practices won't get your website banned.
                </li>
                <li>
                  A company that works with one business per industry in our
                  area. If we work with a lawyer in Bowie, we will not work with
                  another lawyer in Bowie or within 30 miles of your territory.
                </li>
                <li>Weekly updates and monthly reports.</li>
                <li>An SEO company that cares about your business.</li>
              </ul>
              <h2>Small Businesses I am Proud to Work With</h2>
              <ul>
                <li>Chiropractors</li>
                <li>Interior designers</li>
                <li>Construction companies</li>
                <li>Pain Management companies</li>
                <li>
                  <Link href="/contractor-seo">
                    <a>General Contractors</a>
                  </Link>
                </li>
                <li>Plumbers</li>
                <li>
                  <Link href="/low-competition-keywords-for-divorce-and-family-lawyers">
                    <a>Lawyers</a>
                  </Link>
                </li>
                <li>HVAC Contractors</li>
                <li>Pool Builders</li>
                <li>Roofers</li>
                <li>Concrete specialists</li>
                <li>Asphalt pavers</li>
                <li>Septic Contractors</li>
                <li>and more</li>
              </ul>
              <p>
                If you have a small business in Maryland and want to see how SEO
                can help your business, fill out the form or give us a call at{' '}
                <a href="tel:1-240-266-0588">(240) 266-0588</a>.
              </p>

              <div className="btn">
                <Link href="/contact">
                  <a>
                    <Button>Contact us</Button>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <Ready
            h2="Do You Want to, Get More Traffic, Rank Higher in the Search Engines, Get More Leads, and Increase Revenue For Your Business?"
            p="Please fill out the form, and we'll show you how Bowie SEO can help your business get more web traffic, rank higher, get more leads, and make more money!"
          />
        </Main>
      </Layout>
    </>
  )
}
