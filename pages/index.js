import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import ModalVideo from 'react-modal-video'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Ready from '../components/ready-section'
import Footer from '../components/footer'

import { NextSeo } from 'next-seo'

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Digital Marketing Agency',
    titleTemplate: '%s | Get More Customers',
    description:
      'Bowie Digital Marketing is dedicated to helping small businesses make more money using SEO.',
    canonical: 'https://bowiedigitalmarketing.com',
    openGraph: {
      title: 'Digital Marketing Agency | Get More Customers',
      description:
        'Bowie Digital Marketing is dedicated to helping small businesses make more money using SEO.',
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
      <Header buttontext="Talk To Us" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="100vh"
        heroText="Small Business SEO ...Simplified" //Business Marketing ...Simplified
        subText="We help your business make more money with Search Engine Optimization"
        buttonText="Get Your Free SEO Audit"
        buttonLink="/free-seo-audit"
      />
      <Main>
        <section className="no-marketing">
          <div className="container">
            <h2 className="title">
              If Your Not Doing Digital Marketing The Right Way, You're Wasting
              Money.
            </h2>
            <p className="subtext">
              If your digital marketing is not making money for your business,
              you are wasting money. Stop wasting money on marketing that
              doesn't work.{' '}
            </p>
            <p className="subtext">
              Not understanding how to do online marketing can can get expensive
              and cost you more than it has to. Doing it wrong will result in:
            </p>
            <NoSEO>
              <li>Overspending and wasting money on online advertizing</li>
              <li>
                Low online visibility, low credability and not enough reviews
              </li>
              <li>
                No brand recognition because consumers can't see or find your
                business when they search for your products or services
              </li>
              <li>
                A website that doesn't get any traffic, doesn't convert, or
                bring any business
              </li>
              <li>
                A stress filled work environment trying everything to get new
                leads and sales
              </li>
              <li>Eventually having to closing your business</li>
            </NoSEO>
            <p className="subtext">
              Don't let this happen trying online marketing yourself. Click the
              button below to get your FREE SEO Audit and see what you need to
              fix on your website so it can start getting traffic.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Get Your Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="help-section">
          <div className="container">
            <h2 className="title">
              The Right Digital Marketing Plan Can 5X - 10X Your Business
            </h2>
            <p className="subtext">
              With the right marketing plan, your online marketing can generate
              more traffic, more leads, and more sales for your business.
            </p>
            <HelpHow>
              <li>Get more local traffic to your website.</li>
              <li>Outrank your competitors in local search results</li>
              <li>
                Increase your online visibility to get more leads and sales.
              </li>
              <li>
                Attract your target audience with quality content that helps
                them and gives them the information they want.
              </li>
              <li>
                Get more 5 star reviews and build your brand, online reputation
                and credibility in your community and field of business.
              </li>
              <li>
                Make more money for you and your business and become the
                authority in your community.
              </li>
            </HelpHow>
            <div className="btn">
              <Button>Book A 15 min Call &#8594;</Button>
            </div>
          </div>
        </section>
        <section className="no-marketing">
          <div className="container">
            <h2 className="title">
              90.63% of Content Gets No Traffic From Google.
            </h2>
            <div className="btn">
              <p>
                <a
                  href="https://ahrefs.com/blog/search-traffic-study/"
                  no-follow="true"
                  target="_blank"
                >
                  Ahrefs
                </a>
              </p>
            </div>
            <p className="subtext">
              You may have the best services in town, but you don't show up when
              people search for you. How long are you going to stay in business?
              Get your FREE SEO Audit and see what you need to fix so it can
              start getting traffic.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Free Website & SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="title">
              How We Can Help You Can Fix Your Website So You Get Traffic
            </h2>
            <p className="subtext">
              And don't ever miss business opportunities because of bad online
              marketing!
            </p>
            <Plan>
              <li>
                <div>
                  <h3>Schedule A Call</h3>
                  <p>
                    Call us for your{' '}
                    <Link href="/services/free-seo-audit">
                      <a>FREE Website Analysis and SEO report</a>
                    </Link>
                    , and see what your business is doing right and what you can
                    improve to help your business rank higher.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>We Get A Plan Together</h3>
                  <p>
                    After we analyze your website and look at your SEO report,
                    we get a plan together to fix the issuses we find and give
                    you suggestions that will help you ranking higher.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Start Growing Your Business</h3>
                  <p>
                    We measure your success and keep improving your website to
                    grow youer business and beat your competition.
                  </p>
                </div>
              </li>
            </Plan>
            <div className="btn">
              <Button>Book A 15 min Call &#8594;</Button>
            </div>
          </div>
        </section>
        <section className="no-marketing">
          <div className="container">
            <h2 className="title">
              4 in 5 consumers use search engines to find local information.
            </h2>
            <div className="btn">
              <p>
                <a
                  href="https://www.thinkwithgoogle.com/marketing-strategies/search/how-advertisers-can-extend-their-relevance-with-search-download/"
                  no-follow="true"
                  target="_blank"
                >
                  Think With Google
                </a>
              </p>
            </div>
            <p className="subtext">
              If people can't find your business when they search, what are you
              doing? Get your FREE Website and SEO Audit and see what you need
              to fix on your website so it can start getting traffic.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Get Your Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="solution-section">
          <div className="container">
            <h2 className="title">Our SEO Services</h2>
            <p className="subtext">
              Our SEO services are designed to to rank higher your business
              higher in Google, resulting in more website traffic, more leads,
              and more money.
            </p>
            <Solutions>
              <div className="solution-box">
                <h3>Local SEO</h3>
                <p>
                  Local SEO is about your business being found when it counts.
                  When local customers are looking for your services on desktop,
                  mobile, and voice searches, you need to show up in the search
                  above your competitors.
                </p>
                <Link href="/local-seo">
                  <a className="solution-link">Learn more &rsaquo;</a>
                </Link>
              </div>
              <div className="solution-box">
                <h3>FREE SEO Audit</h3>
                <p>
                  Rank higher in the Google Map Pack and increase your online
                  presence to get in front of more consumers actively searching
                  for your products or services. Rank higher in the Google Map
                  Pack and increase your online presence to get in front of more
                  consumers actively searching for your products or services.
                </p>
                <Link href="/free-seo-audit">
                  <a className="solution-link">Learn more &rsaquo;</a>
                </Link>
              </div>
            </Solutions>
            <div className="btn">
              <Button>Book A 15 min Call &#8594;</Button>
            </div>
          </div>
        </section>
        {/* <section className="our-work">
          <div className="container">
            <h2 className="title">Recent Work</h2>
            <Work>
              <div>
                <h3>Monica Browne Weddings</h3>
                <p>A Wedding Planning Company</p>
              </div>
              <div>
                <h3>Max Life Barbershop</h3>
                <p>A Barbershop and Salon</p>
              </div>
              <div>
                <h3>Stanton Pools</h3>
                <p>A Pool Building Company</p>
              </div>
            </Work>
            <div className="btn">
              <Link href="/our-work">
                <a>
                  <Button>See more Work &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section> */}
        {/* <section>
          <div className="container">
            <h2 className="title">What Our Clients Are Saying</h2>
            <p className="subtext">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias culpa dignissimos et illo dolor cupiditate dicta libero
              quasi, ut aperiam quod odit at accusantium, minus soluta
              perspiciatis! Velit, fugiat voluptas.
            </p>
            <div className="btn">
              <Button>More testimonials &#8594;</Button>
            </div>
          </div>
        </section> */}
        <section className="no-marketing">
          <div className="container">
            <h2 className="title">
              97% of people learn more about a local company online than
              anywhere else.{' '}
            </h2>
            <div className="btn">
              <p>
                <a
                  href="https://seotribunal.com/blog/stats-to-understand-seo/#local-seo-facts"
                  target="_blank"
                  no-follow="true"
                >
                  SEO Tribunal
                </a>
              </p>
            </div>
            <p className="subtext">
              When people searching for your service don't see your company,
              they go to your competitors. Get your FREE Website and SEO Audit
              and see what you need to fix on your website so it can start
              getting traffic.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Get Your Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <Ready />
      </Main>
      <Footer />
    </>
  )
}

const Solutions = styled.div`

  .solution-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: auto;
    padding: 4rem 2rem;
    margin-bottom: 2rem;
    background-color: #fff;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    position: relative;
    top: 0;
    transition: top ease 0.5s;

    :hover {
      top: -10px;

        a {
          color: #fff;
          border-color: #d35400;
          background-color: #d35400;
      }
    }
  }


    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
    }

    Link {
      display: block;
    }

    .solution-link {
      display: inline-block;
      padding: 0.8rem;
      border: 1px solid #000;
      width: 9rem;
      text-align: center;
    }
  }

  @media (min-width: 600px) {
    
    display: grid;
    max-width: 1140px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .solution-box {
      margin: 4rem 0;
      justify-items: center;
      max-width: 100%;
      height: 400px;
      
      p {
        font-size: 1rem;
      }
    }
    
`

const Plan = styled.ol`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  align-content: center;
  counter-reset: li;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin: 1rem 0;
    position: relative;
    list-style-type: none;

    div {
      padding-left: 4rem;
    }

    ::before {
      counter-increment: li;
      content: counter(li) '';
      color: #fff;
      font-size: 1rem;
      background: #000;
      line-height: 45px;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      position: absolute;
      top: 1.5rem;
    }
  }
`

const NoSEO = styled.ol`
  list-style-type: none;
  margin: 0 auto;
  counter-reset: li;

  li {
    margin: 3rem 0;
    padding-left: 4rem;
    position: relative;

    ::before {
      counter-increment: li;
      content: counter(li) '';
      color: #000;
      font-size: 1rem;
      font-weight: 700;
      background: #fff;
      line-height: 45px;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      left: 0px;
      position: absolute;
      top: -0.5rem;
    }
  }
`

const HelpHow = styled.ol`
  list-style-type: none;
  margin: 0 auto;
  counter-reset: li;

  li {
    margin: 3rem 0;
    padding-left: 4rem;
    position: relative;

    ::before {
      counter-increment: li;
      content: counter(li) '';
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      background: #000;
      line-height: 45px;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      left: 0px;
      position: absolute;
      top: -0.5rem;
      letter-spacing: 1px;
    }
  }
`

const Work = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    width: 300px;
    height: 300px;
    padding: 1.5rem;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    border-radius: 5px;

    h3 {
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 720px) {
    display: grid;
    max-width: 1140px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    div {
      width: 100%;
    }
  }
`
