import Link from 'next/link'
import styled from 'styled-components'
import ReactPlayer from 'react-player/youtube'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'
import Ready from '../components/ready-section'

import { NextSeo } from 'next-seo'

export default function LocalSEO() {
  const SEO = {
    title: 'Local SEO',
    titleTemplate: '%s | Get More Customers and Make More Sales',
    description:
      "We're a Local SEO company and all we do is SEO. We use the best SEO practices to get you more customers and grow your business. Contact us today (240)266-0588.",
    canonical: 'https://bowieseo.com/local-seo',
    openGraph: {
      title: 'Local SEO',
      description:
        "We're a Local SEO company and all we do is SEO. We use the best SEO practices to get you more customers and grow your business. Contact us today (240)266-0588.",
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
      <Header buttontext="Talk To Me" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="100vh"
        heroText="Get Found with Local SEO"
        subText="Get more website traffic, more leads, and make more money with a Local SEO Strategy."
        buttonText="Contact me"
        buttonLink="/contact"
      />
      <Main>
        <section className="article-section">
          <div className="container">
            <h1>Bowie SEO - Local SEO Company</h1>
            <p>Hello, we're Bowie SEO.</p>
            <p>
              We are a local SEO company helping small businesses in Maryland
              make more money with local search engine optimization services.
            </p>
            <p>
              If you didn't know, the #1 way for local businesses to rank higher
              on Google, Bing, and other search engines is with local search
              engine optimization.
            </p>
            <p>
              Our local search engine optimization services can help your small
              businesses:
            </p>
            <ul>
              <li>Get more business online </li>
              <li>Increase your online visibility and your online presence</li>
              <li>Build your brand</li>
              <li>Get more quality traffic </li>
              <li>Get more leads and customers</li>
              <li>Make more money for your small business</li>
            </ul>
            <p>
              We work hard to get your website ranked higher in Google, so you
              get more traffic coming to your website. We want small businesses
              to realize the power of search engine optimization and all the
              benefits that it can produce.
            </p>
            <p>But first, what is local SEO?</p>
            <div className="btn">
              <Link href="/about">
                <a>
                  <Button>More about us</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>What is Local SEO?</h2>
            <p>
              Local SEO is the process of improving your website for your
              location and your local audience.
            </p>
            <p>
              To rank higher in Google, there are seven ranking factors for
              local SEO. These ranking factors are:
            </p>
            <ul>
              <li>Google Business Profile</li>
              <li>On-page signals</li>
              <li>Online reviews</li>
              <li>Backlink profile</li>
              <li>Citations</li>
              <li>Behavioral signals</li>
              <li>Local content</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Why Local SEO is Important?</h2>
            <p>
              Local SEO is important because it can help your business get more
              eyes on your business, more traffic to your website, and also help
              build your brand.
            </p>
            <p>
              What business doesn't want more more customers, more website
              traffic, and to build their brand?
            </p>
            <p>
              Here are some statistic to show how starting a local SEO strategy
              can help grow your business.
            </p>
            <Stats>
              <li>
                4 in 5 consumers use search engines to find local information.
              </li>
              <li>
                92% of searchers will pick businesses on the first page of local
                search results.
              </li>
              <li>
                46% of all Google searches are looking for local information.
              </li>
              <li>
                72% of consumers that did a local search visited a store within
                five miles.
              </li>
              <li>
                88% of searches for local businesses on a mobile device either
                call or visit the business within 24 hours.{' '}
              </li>
              <li>
                97% of people learn more about a local company online than
                anywhere else.
              </li>
              <li>
                61% of mobile searchers are more likely to contact a local
                business if they have a mobile-friendly site.
              </li>
              <li>
                78% of location-based mobile searches result in an offline
                purchase.
              </li>
              <li>
                By using location-based coupons on mobile can lead to a 9916%
                increase in incremental mobile revenue.
              </li>
            </Stats>
            <p>
              I searched for a stamp concrete contractor in my area, and these
              were the results.
            </p>
            <img src="/local-seo-example.png" className="roofer-img" />
            <p>
              If you were looking for a comapny that does concrete work, how
              likely are you to click on one of these comapanies to see what
              they offer?
            </p>
            <p>
              Apply the same thinking to your business. If customers are
              searching for your products or services, and they can't find you,
              the business you should have got, will go to your competition.
            </p>
            <p>
              But what you don't see are the SEO problems with these websites. A
              properly optimized website can easily rank higher than these
              websites for their keywords, and essentially get more leads,
              customers, and sales.
            </p>
            <p>
              <b>
                How much money are you losing buy not being on the first page of
                the search?
              </b>
            </p>
          </div>
        </section>

        {/* <section className="article-section">
          <div className="container">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </section> */}
        <section>
          <div className="container">
            <h2>If Customers Can't Find You In The Local Search...</h2>
            <p>
              Today more than ever, your business needs a strong online
              presence. Without one, your business is likely continuously
              struggle to get customers, leads, and sales, or eventually go out
              of business.
            </p>
            <p>
              It is important that your business rank on the first page of the
              search. This is because 92% of peopele will pick businesses on the
              first page of the local results.
            </p>
            <p>What does that mean?</p>
            <p>
              It means that if you want to get traffic to your website, and get
              seen by more people searching for your products or services, you
              must show up on the first page of Google.
            </p>
            <p>
              How do you get traffic to your website for your local business?
            </p>
            <p>By starting a local SEO strategy.</p>

            <h2>Why Local SEO is Important</h2>
            <p>
              Local SEO is important because it can help your business get more
              customers, more eyes on your business, more traffic to your
              website, and also help build your brand. What business doesn't
              want more more customers, more website traffic, and to build their
              brand?
            </p>
            <p>
              Here are some statistic to show how starting a local SEO program
              can help your business.
            </p>
            <Stats>
              <li>
                4 in 5 consumers use search engines to find local information.
              </li>
              <li>
                92% of searchers will pick businesses on the first page of local
                search results.
              </li>
              <li>
                46% of all Google searches are looking for local information.
              </li>
              <li>
                72% of consumers that did a local search visited a store within
                five miles.
              </li>
              <li>
                88% of searches for local businesses on a mobile device either
                call or visit the business within 24 hours.{' '}
              </li>
              <li>
                97% of people learn more about a local company online than
                anywhere else.
              </li>
              <li>
                61% of mobile searchers are more likely to contact a local
                business if they have a mobile-friendly site.
              </li>
              <li>
                78% of location-based mobile searches result in an offline
                purchase.
              </li>
              <li>
                By using location-based coupons on mobile can lead to a 9916%
                increase in incremental mobile revenue.
              </li>
            </Stats>
            <p>
              I searched for a stamp concrete contractor in my area, and these
              were the results.
            </p>
            <img src="/local-seo-example.png" className="roofer-img" />
            <p>
              If you were looking for a comapny that does concrete work, how
              likely are you to click on one of these comapanies to see what
              they offer?
            </p>
            <p>
              Apply the same thinking to your business. If customers are
              searching for your products or services, and they can't find you,
              the business you should have got, will go to your competition.
            </p>
            <p>
              But what you don't see are the SEO problems with these websites. A
              properly optimized website can easily rank higher than these
              websites for their keywords, and essentially get more leads,
              customers, and sales.
            </p>
            <p>
              <b>
                How much money are you losing buy not being on the first page of
                the search?
              </b>
            </p>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Book a 15 min call &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* <div className="container">
          <h2>What are the Key Local Ranking Factors?</h2>
          <p>
            Local SEO will help your businees rank higher in the search engines.
            But to rank higher, there are elements that
          </p>
          <p>
            To get your business website ranked, there are a few steps you need
            to perform. These steps include:
          </p>
          <MustHave>
            <li>Doing keyword research and selecting the right keywords</li>
            <li>
              Claiming your Google My Business Page and continuously updating it
              with new information.
            </li>
            <li>
              Getting testimonials and 5 star reviews on your Google My Business
              Page
            </li>
            <li>Having a website that is mobile friendly and loads fast</li>
            <li>
              Having a blog with quality content and updating it as much as
              possible
            </li>
            <li>Adding and building backlinks</li>
            <li>
              Building citations and matching NAP (name, address and phone
              number) across all listing sites
            </li>
          </MustHave>
        </div>
        <div className="btn">
          <Link href="/contact">
            <a>
              <Button>Book a 15 min call &#8594;</Button>
            </a>
          </Link>
        </div> */}

        <div className="container">
          <h2>Why Hire A Local SEO Expert?</h2>
          <p>Simple.</p>
          <p>
            You should hire a local SEO expert like{' '}
            <Link href="/about">
              <a>me</a>
            </Link>{' '}
            to get your website on the first page of Google, get you more
            customers, and to rank higher than your competiton.
          </p>
          <p>
            You will have someone to work on making sure your website gets
            leads, gets seen by consumers searching for your products or
            services, and that you become the authority in your industry. When
            you hire Bowie SEO, we become your partners and help you grow your
            business.
          </p>
        </div>
        <div className="container">
          <h2>How Much Does Local SEO Cost?</h2>
          <p>
            I believe that every business is unique, with no two businesses
            being the same.
          </p>
          <p>I don't do packages and you should not either.</p>
          <p>
            I work with small businesses. I want to see small businesses grow.
            When they grow, my company also grows.
          </p>
          <p>
            Even though I have a minimum retainer for local SEO services, I
            always do a{' '}
            <Link href="free-seo-audit">
              <a>Free SEO audit</a>
            </Link>{' '}
            to see how much work we need to do to fix your website and get your
            website ranking.
          </p>
        </div>
        <div className="container">
          <Ready />
        </div>
      </Main>
      <Footer />
    </>
  )
}

const MustHave = styled.ul`
  margin: 0 auto;
  margin-left: 1rem;

  li {
    margin: 2rem 0;
    position: relative;
    letter-spacing: 1px;
    line-height: 1.4;
  }
`

const Stats = styled.ol`
  list-style-type: none;

  margin: 0 auto;
  counter-reset: li;

  @media (min-width: 768px) {
    margin-left: 0.5rem;
    max-width: 1140px;
  }

  li {
    margin: 3rem 0;
    padding-left: 3rem;
    position: relative;
    letter-spacing: 1px;
    line-height: 1.4;

    ::before {
      counter-increment: li;
      content: counter(li) '';
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      background: #000;
      border: 2px solid #000;
      line-height: 30px;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      left: 0px;
      position: absolute;
      top: -0.08rem;
      letter-spacing: 1px;
    }
  }
`
