import styled from 'styled-components'
import Link from 'next/link'
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
              getting leads."
        buttonText="Contact us"
        buttonLink="/contact"
      />

      <Main>
        <section className="contact">
          <div className="container">
            <h2>Do You Have These Questions Like Other Business Owners?</h2>
            <ul>
              <li>
                <b>
                  Why can't I rank in the Google Map Pack or the local organic
                  search results?
                </b>
              </li>
              <li>
                <b>Why can't I get leads from my website?</b>
              </li>

              <li>
                <b>Am I ranking for the right keywords?</b>
              </li>
              <li>
                <b>Am I targeting the right keywords?</b>
              </li>
              <li>
                <b>
                  What are my competitors doing to rank higher than me in
                  Google? What keywords are they ranking for?
                </b>
              </li>
            </ul>
            <p>This Free Mini SEO Audit can answer these questions for you.</p>
            <p>
              While this is not a{' '}
              <Link href="/seo-audit">
                <a>complete SEO Audit</a>
              </Link>
              , this Free Mini SEO Audit will show you elements that are
              stopping you from:
            </p>{' '}
            <ul>
              <li>
                <b>Attracting more potential customers.</b>
              </li>
              <li>
                <b>Stopping customers from finding you when they search.</b>
              </li>
              <li>
                <b>Getting more leads through your website.</b>
              </li>
              <li>
                <b>Making more money for your business.</b>
              </li>
            </ul>{' '}
            <h2>You Don't Have to Try and Figure it Out Anymore</h2>
            <p>
              The truth is, you may never find out what's stopping your website
              from performing in the search engines unless you perform an SEO
              Audit.
            </p>
            <p>
              This Free Mini SEO Audit will get you started and answer some of
              the questions you have.
            </p>
            <p>This free audit will tell you:</p>
            <ul>
              <li>
                <b>Keywords you rank for.</b>
              </li>
              <li>
                <b>Your approximate total monthly traffic.</b>
              </li>
              <li>
                <b>Keywords 3 of your competitors rank for, and you are not.</b>
              </li>
              <li>
                <b>
                  On-Page, Off-Page SEO, and Technical issues affecting you
                  website.
                </b>
              </li>
              <li>
                <b>
                  Issues with your Content, Website Structure, and Backlinks
                  profile.
                </b>
              </li>
            </ul>
            <p>
              This Free audit will uncover the elements that are keeping your
              website from ranking. It will find the problems you must fix.
            </p>
            <p>
              This Free audit will help you discover what you need to fix to get
              your website ranking higher and in front of more customers.
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
          <div className="container">
            <h2>What You Get With This Free Mini SEO Audit</h2>
            <ul>
              <li>
                <b>
                  A <span class="thick">personalized video</span> explaining
                  what we found and the opportunities to rank higher, reach more
                  customers and make more money.
                </b>
              </li>
              <li>
                <b>
                  Your <span class="thick">total organic monthly traffic.</span>
                </b>
              </li>
              <li>
                <b>The total amount of keywords you rank for.</b>
              </li>
              <li>
                <b>
                  The total amount of backlinks you have pointing to your
                  website.
                </b>
              </li>
              <li>
                <b>
                  <span class="thick">10 Keywords</span> you should rank for to
                  get more leads, customers, and make more money.
                </b>
              </li>
              <li>
                <b>
                  On-Page SEO issues affecting your website website performance.
                </b>
              </li>
              <li>
                <b>Off-Page issues affecting your website performance.</b>
              </li>
              <li>
                <b>Technical SEO issues affecting your website performance.</b>
              </li>
              <li>
                <b>
                  Where You Rank in <span class="thick">Google Maps.</span>
                </b>
              </li>
              <li>
                <b>
                  Recommendations on <span class="thick">How</span> and{' '}
                  <span class="thick">Where</span> to Use Your Keywords.
                </b>
              </li>
              <li>
                <b>
                  Recommendations on what to do to improve your rankings,
                  attract more customers, and appear higher in the Google Map
                  Pack and the organic results.
                </b>
              </li>
            </ul>
          </div>
        </section>
        <Ready
          h2="Find Out What's Stopping Your Website From Ranking Higher And Getting More Traffic."
          p="Please fill out the form below for your Free Mini SEO Audit."
        />
      </Main>
    </>
  )
}
