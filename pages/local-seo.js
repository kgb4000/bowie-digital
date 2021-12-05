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
    title: 'Maryland SEO Company',
    titleTemplate: '%s | Get More Customers',
    description:
      'Local SEO Agency in Bowie. SEO Friendly Websites That Work. We Build Websites So Thatt Customers Find Your Business. Contact Us Today!',
    canonical: 'https://bowiedigitalmarketing.com/local-seo',
    openGraph: {
      title: 'Local SEO - Bowie',
      description:
        'Local SEO Agency in Bowie. SEO Friendly Websites That Work. We Build Websites So Thatt Customers Find Your Business. Contact Us Today!',
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
        heroText="Local SEO"
        subText="Get more website traffic, more leads, and make more money with a Maryland Local SEO Strategy."
      />
      <Main>
        <section className="article-section">
          <div className="container">
            <h1>Local SEO Company</h1>
            <p>
              Bowie Digital Marketing is a local SEO company that helps
              businesses rank higher in the Google Map Pack. Using search engine
              optimization techniques, best practices, and testing, we get your
              website ranked higher in Google, so that your website gets more
              traffic, which turns into customers, which turns into more sales.
            </p>
          </div>
        </section>
        <section className="article-section">
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
        </section>
        <section>
          <div className="container">
            <h2>If Customers Can't Find You In The Local Search...</h2>
            <p>
              Today more than ever, your business needs a strong online
              presence. Without one, your business is likely continuously
              struggle to get customers, leads, and sales, or eventually you
              have to go out of business.
            </p>
            <p>
              It is also important that your business ranks on the first page of
              the search. This is because 92% of searches will pick businesses
              on the first page of the local results.
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
          </div>
        </section>
        <section className="article-section">
          <div className="container">
            <h2>What is Local SEO</h2>
            <p>
              Local SEO is the process of optimizing your website for your
              location and your local audience.
            </p>
          </div>
        </section>
        <section className="article-section">
          <div className="container">
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
                4 in 5 consumers use search engines to find local information. -
                Think with Google
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
              <Button>Free Website & SEO Audit &#8594;</Button>
            </div>
          </div>
        </section>
        <section className="article-section">
          <div className="container">
            <h2>How Do You Do Local SEO</h2>
            <p>
              At Bowie Digital Marketing, we do local SEO for small businesses.
              It is not a set it and forget it process. If you want to implement
              a successful SEO strategy, you have to do it continuously.
            </p>
            <p>
              To get your business website ranked, there are a few steps you
              need to perform. These steps include:
            </p>
            <MustHave>
              <li>Doing keyword research and selecting the right keywords</li>
              <li>
                Claiming your Google My Business Page and continuously updating
                it with new information.
              </li>
              <li>
                Getting testimonials and 5 star reviews on your Google My
                Business Page
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
            <Button>Book a call &#8594;</Button>
          </div>
        </section>
        <section className="article-section">
          <div className="container">
            <h2>Benefits Of Doing Local SEO</h2>
            <Stats>
              <li>
                <h3>Reduce Your Ad Cost</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae qui cumque illo ipsa eius dolorum deleniti iusto iure
                  minus laboriosam at in, culpa sequi, maxime reprehenderit quas
                  molestiae nesciunt repellat?
                </p>
              </li>
              <li>
                <h3>Increase Sales</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae qui cumque illo ipsa eius dolorum deleniti iusto iure
                  minus laboriosam at in, culpa sequi, maxime reprehenderit quas
                  molestiae nesciunt repellat?
                </p>
              </li>
              <li>
                <h3>Build Your Brand And Authority</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae qui cumque illo ipsa eius dolorum deleniti iusto iure
                  minus laboriosam at in, culpa sequi, maxime reprehenderit quas
                  molestiae nesciunt repellat?
                </p>
              </li>
              <li>
                <h3>Bring Returning Customers</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae qui cumque illo ipsa eius dolorum deleniti iusto iure
                  minus laboriosam at in, culpa sequi, maxime reprehenderit quas
                  molestiae nesciunt repellat?
                </p>
              </li>
              <li>
                <h3>Bring More Relevant Search Traffic</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae qui cumque illo ipsa eius dolorum deleniti iusto iure
                  minus laboriosam at in, culpa sequi, maxime reprehenderit quas
                  molestiae nesciunt repellat?
                </p>
              </li>
              <li>
                <h3>Increase Your Online Visibility</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae qui cumque illo ipsa eius dolorum deleniti iusto iure
                  minus laboriosam at in, culpa sequi, maxime reprehenderit quas
                  molestiae nesciunt repellat?
                </p>
              </li>
              <li>
                <h3>Mobile</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae qui cumque illo ipsa eius dolorum deleniti iusto iure
                  minus laboriosam at in, culpa sequi, maxime reprehenderit quas
                  molestiae nesciunt repellat?
                </p>
              </li>
              <li>
                <h3>It Can Reduce Your Ad Cost</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae qui cumque illo ipsa eius dolorum deleniti iusto iure
                  minus laboriosam at in, culpa sequi, maxime reprehenderit quas
                  molestiae nesciunt repellat?
                </p>
              </li>
            </Stats>
            <div className="btn">
              <Button>Book a 15 min call &#8594;</Button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Why Hire A Local SEO Expert?</h2>
            <p>
              You should hire a local SEO expert so you can get professional and
              expert insight into what it takes to get your website on the first
              page of Google, and also how to beat your competiton. You will
              have someonr to work on making sure your website gets leads, gets
              seen by consumers searching for your products or services, and
              that youbecome the authority in your industry. When you hire Bowie
              Digital Marketing, we become your partners to help you grow your
              business.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>How Much Does Local SEO Cost?</h2>
            <p>
              I believe that every business is unique, with no two businesses
              being the same. The one price fits all pricing should be a red
              flag for any online marketing company. I work with small
              businesses. I want to see them grow. When they grow, I grow. I
              have a minimum retainer of $999.00 per month for local SEO
              services, but the return on investment is well worth the price and
              better that paid advertising.
            </p>
          </div>
        </section>
        <Ready />
      </Main>
      <Footer />
    </>
  )
}

const MustHave = styled.ul`
  max-width: 500px;
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
