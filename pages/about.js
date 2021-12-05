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
    title: 'About us',
    titleTemplate: '%s | We Help You Get More Customers',
    description:
      'Want More Customers For Your Business? We Specialize in SEO Local SEO and get more customers to your website. Call us today.',
    openGraph: {
      title: 'About us | We Help You Get More Customers',
      description:
        'Want More Customers For Your Local Business? We Specialize In Local SEO, Paid Ads, Web Design And Social Media Ads. Call Us Today.',
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
      <Header buttontext="Talk To Kes" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="100vh"
        heroText="About Us"
        subText="All We Do is Search Engine Marketing for Small Businesses in Maryland"
        buttonText="Book a Call"
        buttonLink="/contact"
      />
      <Main>
        <section className="about">
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

            <h2>Our Vision</h2>
            <p>
              Our vision is to help small businesses use search engine
              optimization to make more money in their business..
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to help one hundred small businesses in Maryland
              use search engine optimization to make more money. We will do this
              by:
            </p>
            <ol>
              <li>Teaching small businesses about SEO</li>
              <li>Showing them how to incorporate it into their marketing</li>
              <li>Running successful SEO campaigns for our clients</li>
            </ol>

            <h2>About us</h2>
            <p>
              Bowie SEO is a search engine optimization company located in
              Bowie, Maryland specializing in search engine optimization, local
              search engine optimization, and SEO Audits.{' '}
            </p>

            <p>
              We help Maryland businesses improve their organic rankings by
              auditing and correcting harmful technical, on-page, and off-page
              issues on their website.
            </p>
            <p>
              This means we do all of the hard work for you. We create an action
              plan to fix these errors and fix them.
            </p>
            <p>Our second service is Local SEO.</p>

            <p>
              This involves taking over your Google Business Profile page (or
              creating one if it doesn't exist) and managing all location
              related content like Geo-tags, Categories, Hours of operation,
              address, phone number etc.{' '}
            </p>

            <p>
              Put simply, this makes sure that Google has all of the necessary
              information to correctly place your business in results for
              searchers close to you. Like many other cities across the country,
              Bowie is constantly growing, which means many locals are looking
              for the best place to eat, shop or have their car repaired.
            </p>

            <p>
              Making sure that you rank high for local keywords will allow you
              to capture customers who are within 5-10 miles of your business.
            </p>

            <p>The final service we offer is organic SEO.</p>

            <p>
              This involves creating a plan including an onsite audit and
              competitive analysis to determine what steps need to be taken in
              order to improve your ranking.
            </p>

            <p>
              Once this has been done changes are implemented onto the website
              so it better follows Google guidelines. We can also help you build
              links which will play a big part in improving your rankings over
              time.
            </p>
            <p>
              Our company prides itself on being able to deliver real results
              with tangible improvements in organic traffic for our clients. If
              you want to outrank your competitors without overspending on
              social media ads, then contact us today.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
            <h2>Why Work With Bowie SEO</h2>
            <p>
              We are a local business and an active part of the local business
              community. We want to help small business owners in our community
              grow with search engine optimization.
            </p>
            <p>
              We're not an out of town SEO agency or super large SEO company
              pretending to care about your business. Because when your business
              grows, the entire community grows, and that's want we want.
            </p>
            <p>
              We belive in doing search engine optimization the right way, so
              that we get our customers the best results.
            </p>

            <p>When you work with Bowie SEO, you get:</p>
            <ul>
              <li>A FREE SEO Audit</li>
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
              We don't offer packages, because every businnes will need
              different SEO services. We create a custom strategy for each
              business we work work and save them money by not paying for
              services they don't need.
            </p>
            <h2>Small Businesses We are Proud to Work With</h2>
            <ul>
              <li>Septic Contractors</li>
              <li>General Contractors</li>
              <li>Plumbers</li>
              <li>HVAC Contractors</li>
              <li>Pool Builders</li>
              <li>Roofers</li>
              <li>Concrete specialists</li>
              <li>Asphalt pavers</li>
              <li>and more</li>
            </ul>
            <p>
              If you have a small business in Maryland, and want to see how SEO
              can help your business, fill out the form, or give us a call.
            </p>
          </div>
          <div className="btn">
            <Link href="/free-seo-audit">
              <a>
                <Button>Free SEO Audit &#8594;</Button>
              </a>
            </Link>
          </div>
        </section>
        <Ready />
      </Main>
      <Footer />
    </>
  )
}
