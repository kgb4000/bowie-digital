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
import Accordion from '../components/accordion'

import { DefaultSeo } from 'next-seo'

export default function Home() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Header buttontext="Free SEO Audit" buttonLink="/free-seo-audit" />
      {/* <NavBar buttonLink="/contact" buttonText="Contact me" /> */}
      <HeroBox
        backgroundHeight="45rem"
        backgroundPosition="center"
        backgroundImage="/images/maryland-seo-company-hero.webp"
        altText="Maryland SEO Company"
        heroText="We Grow Your Website Traffic"
        subText="Our Maryland SEO Company can get You More Web Traffic and More Leads"
        buttonText="Get a FREE SEO Audit"
        buttonLink="/free-seo-audit"
      />
      <Main>
        <section className="no-marketing">
          <div className="container">
            <h2 className="title">
              Grow Your Business with a Maryland{' '}
              <span className="highlight">SEO Company</span>
            </h2>
            <p>
              Bowie SEO is a Maryland SEO company located in Bowie, Maryland.
            </p>
            <p>
              We believe that search engine optimization (SEO) is the best
              digital marketing channel to help you find your ideal customers
              and help potential customers find local businesses.
            </p>
            <p>
              As SEO consultants, we are proud to offer Maryland SEO services to
              all businesses in Maryland.
            </p>
            <p>
              Search engine optimization also helps increase your website
              traffic, increases your online presence, and helps you do more
              business online.
            </p>
            <p>
              Maryland small business owners can get reach their target market
              get more traffic reach to the top of the search engine results
              with SEO services from Bowie SEO.
            </p>
            <p>But first.</p>
          </div>
        </section>
        <section className="solution-section">
          <div className="container">
            <h3>
              If your business website isn't on the first page of Google, then
              you're losing money.
            </h3>
            <h3>And your competitors are stealing your customers.</h3>
            <h3>I can help you fix that.</h3>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact us to find out how!</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="no-marketing">
          <div className="container">
            <h2 className="title">
              What is <span className="highlight">SEO</span>?
            </h2>
            <p>
              Search engine optimization (SEO) is the process of improving your
              website for search engines and users.
            </p>
            <p>
              Search algorithms look at many factors, including the words of
              your query, relevance, and usability of pages, the expertise of
              sources, and your location and settings.
            </p>
            <p>
              Let's say you are looking to sell Maryland crabs online. You
              finally get the website up and running, but no matter how many
              times you visit the website yourself, it doesn't show in the top
              ten results when someone searches for "Maryland Crabs" on Google.
            </p>
            <p>So who will find your site? </p>
            <p>The answer is no one.</p>
            <h3>
              SEO is Therefore <span className="highlight">Essential</span> for
              Small Business Because SEO:
            </h3>
            <NoSEO>
              <li>
                Can get you on the first page of Google, and the top of the
                Google Map Pack.
              </li>
              <li>Increases your search rankings</li>
              <li>Can bring you more website traffic and quality traffic</li>
              <li>Can help your with conversion rate optimization</li>
              <li>Increases your web presence</li>
              <li>Helps you outrank your competitors</li>
              <li>Helps you find better-targeted keywords</li>
            </NoSEO>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="no-marketing">
          <div className="container">
            <h2 className="title">
              Why Your Small Business Needs{' '}
              <span className="highlight">Search Engine</span> Optimization
            </h2>
            <p>
              Apart from the above points, small businesses need search engine
              optimization because search engines are constantly evolving.
            </p>
            <p>
              According to Moz, Google reported over 3,000 improvements to
              search in 2018. This was more than eight times the amount in 2009.
              (
              <a
                href="https://moz.com/blog/how-often-does-google-update-its-algorithm"
                target="_blank"
              >
                Moz
              </a>
              )
            </p>
            <p>Significant Google search algorithm changes include:</p>
            <Why>
              <li>
                <h3>Panda</h3>
                <p>
                  A search results algorithm which filtered out websites with
                  thin, low quality content.{' '}
                </p>
              </li>
              <li>
                <h3>Mobile First Indexing</h3>
                <p>
                  Google will use the mobile version of the webpage for ranking
                  and indexing purposes. (
                  <a
                    href="https://www.searchenginejournal.com/google-mobile-first-indexing/346170/#close"
                    target="_blank"
                  >
                    Search Engine Journal
                  </a>
                  )
                </p>
              </li>
              <li>
                <h3>Rank Brain</h3>
                <p>
                  Google's algorithm that uses machine learning to determine the
                  most relevant results to search engine queries. (
                  <a
                    href="https://moz.com/learn/seo/google-rankbrain"
                    target="_blank"
                  >
                    Moz
                  </a>
                  )
                </p>
              </li>
            </Why>
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
              What Can Search Engine Optimization Do for{' '}
              <span className="highlight">Maryland</span> Businesses?
            </h2>
            <p className="subTitle">Why Should You Start an SEO Campaign</p>
            <p>
              There are several reasons you will want to start an SEO campaign.
            </p>
            <HelpHow>
              <li>
                46% of all Google searches are looking for local information.
              </li>
              <li>
                4 in 5 consumers use search engines to find local information.
              </li>
              <li>
                <a
                  href="https://seoexpertbrad.com/local-seo-stats/"
                  target="_blank"
                >
                  92%
                </a>{' '}
                of searchers will pick businesses on the first page of local
                search results. (
                <a
                  href="https://seoexpertbrad.com/local-seo-stats/"
                  target="_blank"
                >
                  SEO Expert Brad
                </a>
                )
              </li>
              <li>
                72% of consumers that did a local search visited a store within
                five miles.
              </li>
              <li>
                97% of people searched online to find local businesses. (
                <a
                  href="https://www.hubspot.com/marketing-statistics"
                  target="_blank"
                >
                  HubSpot
                </a>
                )
              </li>
              <li>
                97% of people learn more about a local company online than
                anywhere else.
              </li>
              <li>
                61% of mobile searchers are more likely to contact a local
                business if they have a mobile website.
              </li>
            </HelpHow>
            <p>More reasons are:</p>
            <h3>
              You Get More <span className="highlight">Website Traffic</span>
            </h3>
            <p>
              Starting an SEO strategy is one of the best decisions you will
              make for your business. Your business will move up in the search
              engine rankings, and you will get more website traffic.{' '}
            </p>
            <h3>Increase Your Online Visibility</h3>
            <p>
              Get Found and be seen by more people searching for your products
              and services.
            </p>
            <h3>
              <span className="highlight">Rank Higher</span> in the Search
              Engines
            </h3>
            <p>
              When you rank higher in the search engine results, your ideal
              customers find your business, you build your web presence, and
              more people will see and recognize your brand. Appearing higher in
              the search results.
            </p>
            <h3>Reach Your Target Market</h3>
            <p>
              Potential customers find your business because you use search
              engine optimization and perform keyword research to reach your
              target audience.
            </p>
            <h3>
              Outrank Your <span className="highlight">Competitors</span>
            </h3>
            <p>
              Search engine optimization makes your website better for search
              engines and your customers. When you do SEO and your competitors
              don't, your SEO efforts will create a more significant online
              presence, rank higher in the search rankings, get more traffic,
              and do more online business.{' '}
            </p>
            <h3>
              Spend <span className="highlight">Less Money</span> on Digital
              Marketing
            </h3>
            <p>
              Search engine optimization can help you spend less money on Google
              Ads and other search marketing tactics. When you do SEO and rank
              higher in the organic search engine results, you will not have to
              spend as much money on ads and social media marketing.
            </p>

            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact us today</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="solution-section">
          <div className="solution-container">
            <h2 className="title">Our SEO Services</h2>
            <p className="subTitle">Maryland SEO Company Services</p>
            <Solutions>
              <div className="solution-box">
                <h3>SEO</h3>
                <p>
                  SEO lays down the foundation for your website and makes it
                  better for search engines and users. Your website will rank
                  higher see increases in web traffic and leads.
                </p>
                <Link href="/maryland-seo">
                  <a className="solution-link">More About SEO &rsaquo;</a>
                </Link>
              </div>
              <div className="solution-box">
                <h3>Local SEO</h3>
                <p>
                  Local SEO is about your local business found by your ideal
                  customers. When customers look for your services, you need to
                  show up in the search above your competitors.
                </p>
                <Link href="/local-seo-maryland">
                  <a className="solution-link">More About Local SEO &rsaquo;</a>
                </Link>
              </div>
              <div className="solution-box">
                <h3>SEO Audit</h3>
                <p>
                  Discover what's stopping your site from ranking higher in the
                  search engines. With an SEO audit, you will identify elements
                  holding your website back and fix the issues.
                </p>
                <Link href="/seo-audit">
                  <a className="solution-link">More about SEO Audit &rsaquo;</a>
                </Link>
              </div>
              <div className="solution-box">
                <h3>Link Building</h3>
                <p>
                  Build credibility and authority with backlinks. Get quality
                  backlinks that will boost your domain authority and help you
                  get quality traffic from Google and other search engines.
                </p>
                <Link href="/seo-audit">
                  <a className="solution-link">
                    More about Link Building &rsaquo;
                  </a>
                </Link>
              </div>
              <div className="solution-box">
                <h3>Keyword Research</h3>
                <p>
                  Find the keywords potential customers use to find your
                  products and services. Keyword research is vital so that the
                  content you create is what customers are searching for.
                </p>
                <Link href="/seo-audit">
                  <a className="solution-link">
                    More about Keyword Research &rsaquo;
                  </a>
                </Link>
              </div>
              <div className="solution-box">
                <h3>Technical SEO</h3>
                <p>
                  If search engines can't index your website, you will not
                  appear in the search results. We ensure that your website is
                  indexable and satisfies the search engine requirements.
                </p>
                <Link href="/seo-audit">
                  <a className="solution-link">
                    More about Technical SEO &rsaquo;
                  </a>
                </Link>
              </div>
            </Solutions>
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
              Why Work With <span className="highlight">Bowie SEO</span>?
            </h2>
            <p>
              A Maryland SEO Company providing the Best SEO Services for
              Maryland Businesses
            </p>
            <p>
              Bowie SEO is a digital marketing company specializing in SEO and
              Local SEO for businesses in Maryland.
            </p>
            <p>
              We are Maryland SEO experts that only focus on improving your SEO
              rankings in the major search engines and ensuring that their SEO
              efforts make them more money.
            </p>
            <p>We don't do search marketing.</p>
            <p>All we do is SEO.</p>
            <p>
              We want Maryland small business owners to realize the benefits of
              starting an SEO strategy and what it can do for their business.
            </p>
            <p>
              We do whatever it takes to ensure our small business customers
              understand and enjoy the benefits of Maryland SEO and reap all the
              help it can provide.
            </p>
            <p>
              As one of the top Maryland SEO companies, we go the extra mile to
              make sure you increase your website traffic, expand your online
              presence, target relevant keywords.
            </p>
            <p>
              We are a small company but are Maryland SEO experts. We work
              quickly, getting stuff done faster than larger digital marketing
              companies.
            </p>
            <p>We offer our clients a 100% satisfaction guarantee.</p>
            <p>
              If you're not satisfied, we promise to do whatever it takes to
              make it right.
            </p>
            <p>When you work with Bowie SEO, you get:</p>
            <ul>
              <li>
                An SEO Audit to help discover what's holding your website back
                from performing better in the search engines
              </li>
              <li>No monthly contacts.</li>
              <li>
                Advice on web development and web design to help make your
                website convert better
              </li>
              <li>
                A Maryland SEO company working with small businesses in
                Maryland, not an SEO company from Miami or New York posing as a
                Maryland businesses
              </li>
              <li>
                An SEO-focused campaign that works on one business per industry
                in our area.
              </li>
              <li>
                Weekly and monthly updates to keep you informed about your SEO
                campaign's progress.
              </li>
            </ul>
          </div>
          <div className="btn">
            <Link href="/contact">
              <a>
                <Button>Contact us today!</Button>
              </a>
            </Link>
          </div>
        </section>
        <section className="faq-container">
          <h2 className="title">
            FAQ<span className="highlight">s</span>
          </h2>
          <Accordion />
        </section>
        <Ready
          h2="Ready to Get More Website Traffic, More Leads, and Increase Revenue with SEO?"
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
    margin-bottom: 1rem;
    background-color: #fff;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    border-radius: 5px;
    position: relative;
    top: 0;
    transition: top ease 0.5s;

    :hover {
      top: -10px;

        a {
          color: #fff;
          border-color: #ff5200;
          background-color: #ff5200;
      }
    }
  }


    h3 {
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
      border: 1px solid #ff5200;
      border-radius: 10px;
      max-width: 20rem;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      text-decoration: none;
      font-size: 15px;
}
    }
  }

  @media (min-width: 768px) {

    display: grid;
    max-width: 1500px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 0 auto;

    .solution-box {
      justify-items: center;
      max-width: 100%;
      height: 600px;
      
      p {
        font-size: 1rem;
      }
    }

    @media (min-width: 1200px) {

    display: grid;
    max-width: 1500px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 0 auto;

    .solution-box {
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
    padding-left: 3rem;
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
    }
  }
`

const HelpHow = styled.ol`
  list-style-type: none;
  margin: 0 auto;
  counter-reset: li;

  li {
    padding-left: 3rem;
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
    }
  }

  h3 {
    margin-bottom: 0;
  }
`

const Why = styled(HelpHow)`
  li {
    ::before {
      top: 10px;
    }
  }
`
