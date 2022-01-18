import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import ModalVideo from 'react-modal-video'
import NavBar from '../components/navbar/navBar'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Ready from '../components/ready-section'

import { DefaultSeo } from 'next-seo'

export default function Home() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Header buttontext="Free SEO Audit" buttonLink="/free-seo-audit" />
      {/* <NavBar buttonLink="/contact" buttonText="Contact me" /> */}
      <HeroBox
        backgroundHeight="35rem"
        heroText="We Grow Your Website Traffic and Get You More Customers"
        subText="We Help Businesses Get More Web Traffic With Search Engine Optimization"
        buttonText="Get a FREE SEO Audit"
        buttonLink="/free-seo-audit"
      />
      <Main>
        <section className="no-marketing">
          <div className="container">
            <h2 className="title">
              If People Can't Find Your Website When They Search For Your
              Products or Services, You're Losing Money.
            </h2>
            <p className="subtext">
              What are you doing when consumers search for your product or
              service and your website doesn't come up in the search results?
            </p>
            <p className="subtext">You're losing money.</p>
            <p className="subtext">How?</p>
            <p className="subtext">
              Because when they don't find you, they find your competitors and
              spend money with your competitors.
            </p>
            <p className="subtext">
              If you're spending money on social media ads and online ads, you
              may be wasting money if your website does not even appear in the
              organic search results.
            </p>
            <p className="subtext">
              Search marketing can get expensive and cost you more than it has
              to. Doing online marketing the wrong way will result in:
            </p>
            <NoSEO>
              <li>Overspending and wasting money on online advertising.</li>
              <li>
                Low online visibility, lacking credibility, and not enough
                reviews.
              </li>
              <li>
                No brand recognition because consumers can't see or find your
                business when searching for your products or services.
              </li>
              <li>
                A website that doesn't get any traffic doesn't convert or bring
                any business.
              </li>
              <li>
                Stress-filled work environment trying everything to get new
                leads and sales.
              </li>
              <li>Eventually, having to close your business.</li>
            </NoSEO>
            <p className="subtext">
              Don't let this happen by trying online marketing yourself. Click
              the button below to get your FREE SEO Audit and see what you need
              to fix on your website so it can start getting traffic.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="help-section">
          <div className="container">
            <h2 className="title">
              Search Engine Optimization Can 5X - 10X Your Business
            </h2>
            <p className="subtext">
              By starting a search engine optimization strategy, your website
              can generate more traffic, leads, and sales for your business for{' '}
              <b>FREE</b>.
            </p>
            <HelpHow>
              <li>Get more local traffic to your website.</li>
              <li>Outrank your competitors in local search results.</li>
              <li>
                Increase your online visibility to get more leads and sales.
              </li>
              <li>
                Attract your target audience with quality content that helps
                your consumers and gives them the information they want.
              </li>
              <li>Spend less on social media ads and pay-per-click ads.</li>
              <li>Increase leads, sales and revenue.</li>
            </HelpHow>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact us today!</Button>
                </a>
              </Link>
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
              You may have the best services in town, but you don't appear when
              people search for you. How long are you going to stay in business?
              Get your FREE SEO Audit and see what you need to fix so it can
              start getting traffic.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="whoisbowie">
          <div className="container">
            <h2 className="title">Who is Bowie SEO?</h2>
            <p className="subtext">
              Bowie SEO is a local SEO company in Maryland, serving small
              businesses in Bowie and throughout the state.
            </p>
            <p className="subtext">
              We are in Maryland, so you'll always have an SEO company near you.
              We go out of our way to give your business the best SEO services
              and the attention it deserves!
            </p>
            <h3>All we do is SEO.</h3>
            <p className="subtext">
              We're here to help you achieve your desired results with{' '}
              <b>search engine optimization</b>. Whether you're looking to
              increase traffic to your website, improve your online presence, or
              increase. We can help.
            </p>
          </div>
          <div className="btn">
            <Link href="/about">
              <a>
                <Button>More About Us</Button>
              </a>
            </Link>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="title">
              How Can We Help You Fix Your Website, So You Get Traffic?
            </h2>
            <p className="subtext">
              Stop losing money because your website is not performing!
            </p>
            <Plan>
              <li>
                <div>
                  <h3>Call Today!</h3>
                  <p>
                    Call for your{' '}
                    <Link href="/free-seo-audit">
                      <a>FREE SEO Audit</a>
                    </Link>
                    , and see what your business is doing right and what you can
                    improve to help your business rank higher..
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>We Get A Plan Together</h3>
                  <p>
                    After we analyze your website and look at your SEO report,
                    we both plan together to fix the issues we find and give you
                    suggestions that will help you rank higher.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Start Growing Your Business</h3>
                  <p>
                    We measure your success and keep improving your website to
                    grow your business and rank higher than your competition.
                  </p>
                </div>
              </li>
            </Plan>
            <p>
              Let's see how we can help you get more traffic to your website.
            </p>
            <div className="btn">
              <Button>Contact us today</Button>
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
              What are you doing if people can't find your business when they
              search? Get your FREE Website and SEO Audit and see what you need
              to fix on your website so it can start getting traffic.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="solution-section">
          <div className="solution-container">
            <h2 className="title">Our SEO Services</h2>
            <p className="subtext">
              Our SEO services will rank your website higher in Google,
              resulting in more website traffic, leads, and money.
            </p>
            <Solutions>
              <div className="solution-box">
                <h3>SEO</h3>
                <p>
                  SEO lays down the foundation for your website and makes it
                  better for search engines and users. When you have a solid
                  foundation, your website will rank higher organically, and you
                  will attract more leads, get more sales, and make more money.
                </p>
                <Link href="/maryland-seo">
                  <a className="solution-link">More About SEO &rsaquo;</a>
                </Link>
              </div>
              <div className="solution-box">
                <h3>Local SEO</h3>
                <p>
                  Local SEO is about people finding your business when it
                  counts. When local customers are looking for your services on
                  desktop, mobile, and voice searches, you need to show up in
                  the search above your competitors.
                </p>
                <Link href="/local-seo-maryland">
                  <a className="solution-link">More About Local SEO &rsaquo;</a>
                </Link>
              </div>
              <div className="solution-box">
                <h3>SEO Audit</h3>
                <p>
                  An SEO Audit will let you know what's stopping your website
                  from ranking higher in the search engines. It will identify
                  the elements that are holding your website back, and will show
                  you what to fix to make your site better for search engines
                  and consumers.
                </p>
                <Link href="/seo-audit">
                  <a className="solution-link">More about SEO Audit &rsaquo;</a>
                </Link>
              </div>
            </Solutions>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact me today!</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
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
                  <Button>Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <Ready
          h2="Get More Website Traffic, More Leads, and Increase Revenue with SEO."
          p="Please fill out the form, and we'll show you how Bowie SEO can help your business get more web traffic, more leads, and make more money!"
        />
      </Main>
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

    h3 {
      font-size: 2rem;
    }

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
      max-width: 20rem;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      text-decoration: none;
    }
  }

  @media (min-width: 1440px) {

    display: grid;
    max-width: 1500px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 0 auto;

    .solution-box {
      margin: 4rem 0;
      justify-items: center;
      max-width: 100%;
      height: 600px;
      
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
      font-size: 1.2rem;
      background: #000;
      line-height: 45px;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      position: absolute;
      top: 3px;
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
      top: -5px;
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
      top: -3px;
      letter-spacing: 1px;
    }
  }
`
