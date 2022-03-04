import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Ready from '../components/ready-section'
import Button from '../components/button'
import ReactPlayer from 'react-player/youtube'
import LocalCities from '../components/local-cities'
import Accordion from '../components/accordion'
import { expertData } from '../components/lib/expert-data'

import { NextSeo } from 'next-seo'

const SEOAudit = () => {
  const SEO = {
    title: 'A Maryland SEO Expert That Gets You Results',
    description:
      'Need a Maryland SEO Expert to help increase website traffic, attract more potential customers and make your more money? Contact Bowie SEO today!',
    canonical: 'https://bowieseo.com/maryland-seo-expert',
    openGraph: {
      title: 'A Maryland SEO Expert That Gets You Results',
      description:
        'Need a Maryland SEO Expert to help increase website traffic, attract more potential customers and make your more money? Contact Bowie SEO today!',
      type: 'website',
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Hire an Expert" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="100vh"
        backgroundImage="/images/seo-audit.webp"
        heroText="Maryland SEO Expert"
        subText="Hire an SEO Expert and Get a ROI. "
        buttonText="Hire an Expert"
        buttonLink="/contact"
      />
      <Main>
        <section>
          <div className="container">
            <h2>Get a Maryland SEO Expert to Help You Grow Your Business</h2>
            <p>
              Are you worrying about finding more customers for your business?
            </p>
            <p>Are you losing business to your competitors?</p>
            <p>
              Do you want to boost your website traffic and attract more
              potential customers?
            </p>
            <p>We can help.</p>
            {/* <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div> */}
            <p>
              We are Bowie SEO and we are SEO experts. We help small businesses
              make more money with search engine optimization.
            </p>
            <p>
              We create a strategies that help businesses reach more customers,
              and grow.
            </p>
            <p>But first.</p>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact us</Button>
                </a>
              </Link>
            </div>
            <h2>What is SEO?</h2>
            <p>
              Search engine optimization (SEO) is the process of improving your
              website for search engines and users.
            </p>
            <p>
              SEO also helps increase your online visibility in the organic
              search results. Hence, the more frequently and higher your website
              appears in the search engine rankings, the more people will visit
              your website.
            </p>
            <p>
              SEO differs from search advertising in that it aims to improve
              rankings for websites to make them more visible; by contrast,
              local marketing doesn't aim to show specific websites but rather
              to draw more foot traffic to a particular location.
            </p>
            <h2>
              5 Reasons Why Your Business Needs Search Engine Optimization
            </h2>
            <p>Why does your business need SEO?</p>
            <p>
              There are many reasons your business needs search engine
              optimization.
            </p>
            <h3>#1 Organic Search is Still #1</h3>
            <p>
              Organic search is still the number one source of traffic for most
              websites. A recent study found that organic search results
              generate three times more traffic than paid search engine
              marketing.
            </p>
            <h3>#2 You Can Reach Your Target Market, and They Can Find You</h3>
            <p>
              Investing in SEO can help you reach new customers. Ranking higher
              in search engine can get in front of more customers. More
              customers seeing your business can bring more sales and revenue.
              SEO also helps you target the right keywords and phrases. Keywords
              that people use to find your products or services.
            </p>
            <h3>#3 More People Rely on Search Engines for Information</h3>
            <p>
              More and more people trust search engines to find information.
            </p>
            <p>
              The average person goes online almost every day. This makes it
              super important for businesses to invest in search engine
              optimization. People trust major search engines like Google to
              show them the best results.
            </p>
            <h3>
              #4 You Will Improve Your Web Presence and Rank Above Your
              Competition
            </h3>
            <p>
              Using SEO can improve your web presence and help you rank above
              your competition.
            </p>
            <p>
              By incorporating link building into your website, you will create
              a relationship with other sites with a lot of authority online.
              When other websites use links to point back to your site, they're
              giving you free marketing because it increases people's chances of
              seeing your company when they conduct relevant searches.
            </p>
            <h3>#5 Search Engines Are Not Going Anywhere Anytime Soon</h3>
            <p>Search engines are not going anywhere.</p>
            <p>
              As long as people use the internet, search engine optimization is
              here to stay. SEO is something every business must do if they want
              to reach potential customers.
            </p>
            <p>Why?</p>
            <p>
              More than 95% of people use search engines to get information.
            </p>
            <p>
              Your business will not appear in the search results when people
              search for your services. People will not see your business
              without search engine optimization.
            </p>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact us</Button>
                </a>
              </Link>
            </div>
            <h2>Our Maryland SEO Services</h2>
            <p>
              We build a foundation for your website and make it better for
              search engines and users. You will rank higher, get more traffic,
              and attract more potential customers. You will also enjoy the
              benefits of getting more leads and increasing sales and revenue.
            </p>
            <p>We can help you with:</p>
            <h3>Site Architecture</h3>
            <p>
              A good site architecture allows people to find your web pages
              quickly, and Google bots to crawl and index your site. Not
              optimizing your site architecture can cause some pages not to get
              indexed or crawled. If pages on your website are not indexed, they
              won't appear in the search results.
            </p>
            <h3>Internal Linking</h3>
            <p>
              Internal linking helps search engines understand your website and
              help it rank better. Establish hierarchy, build link equity,
              increase website crawlability and improve user experience.
            </p>
            <h3>Keyword Research</h3>
            <p>
              Target relevant keywords that will help you reach your target
              audience.
            </p>
            <p>
              Find the keywords customers use to find your products and
              services. Keyword research is vital. Create content that shows up
              in the search results and increase your online visibility and SEO
              rankings.
            </p>
            <h3>Competitive Analysis</h3>
            <p>
              Find your main competitors and see what they are doing. Compare
              your company's strengths and weaknesses to your competitors. Use
              this information to discover opportunities your competition
              doesn't see.
            </p>
            <h3>SEO Audits</h3>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/cR27O8br7mM"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <p>
              Discover what's stopping your site from appearing higher in the
              search rankings. An SEO audit will help identify elements on your
              site that kill your website performance in the search engines.
            </p>
            <h3>On-Page SEO</h3>
            <p>
              Analyze each page of your website and make changes to increase
              ranking and website traffic. Optimize keyword placement, meta
              titles and meta descriptions, and UX to increase user engagement
              and dwell time.
            </p>
            <h3>Local SEO</h3>
            <p>Local businesses get found by local customers.</p>
            <p>
              When customers look for your services, your website must be above
              your competitors. A local SEO strategy can help your business
              appear in the Map Pack and the local organic search results.
            </p>
            <h3>XML Sitemaps</h3>
            <p>
              Create a sitemap, so search engines understand your website
              structure. A better structure allows Google to crawl your website,
              and find your web pages.
            </p>
            <h3>Page Speed Optimization</h3>
            <p>
              Increase your website performance by optimizing your website
              page's speed. Increase your conversions and user experience by
              removing increasing your website performance.
            </p>
            <h3>Technical SEO</h3>
            <p>
              If search engines can't index your website, you will not appear in
              the search. We ensure that your website is indexable and satisfies
              the search engine requirements.
            </p>
            <h3>Schema Markup</h3>
            <p>
              Help search engines read your website better. Add schema
              structured data to your website to improve how Google reads and
              shows it in the SERPs.
            </p>
            <h3>Link Building</h3>
            <p>
              Build credibility and authority with backlinks. Get quality
              backlinks that boost your domain authority and get high quality
              traffic.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
            <h2>Hire Maryland SEO Experts to Get Results</h2>
            <p>
              If you want to have a successful website, hiring an SEO expert is
              necessary.
            </p>
            <p>Guess what?</p>
            <p>Your competitors are already using SEO professionals.</p>
            <p>
              The days of simply creating a website and waiting for the traffic
              to come rolling in are over. Today's SEO experts can help develop
              strategies for your business that will:
            </p>
            <ul>
              <li>Get you more website traffic</li>
              <li>Attract new potential customers</li>
              <li>Rank your website higher than your competitors</li>
              <li>Help increase sales and revenue</li>
            </ul>
            <p>
              When hiring an SEO expert, you must take the time to do your
              research.
            </p>
            <p>
              Find out what sets them apart from other professionals in their
              industry.
            </p>
            <h4>An SEO agency might be right for your business if:</h4>
            <p>
              - You don't have staff or budget dedicated specifically toward
              marketing initiatives{' '}
            </p>
            <p>
              - You don't have staff or budget dedicated specifically toward
              marketing initiatives{' '}
            </p>
            <p>- You need help with link building and content creation </p>
            <p>- You don't have time to manage SEO initiatives on your own </p>
            <p>
              - Your website is brand new, and you need help quickly getting up
              the rankings
            </p>
            <p>
              - Your website is brand new and you need help quickly getting up
              the rankings
            </p>
            <p>- You have absolutely no idea what you're doing</p>
            <h4>Some questions you should ask about their work are:</h4>
            <p>- What are some of your past successes?</p>
            <p>- How would you rank my competitors' sites?</p>
            <p>
              - What kind of strategies do you think will be most effective for
              me?
            </p>
            <p>
              - Do you have any case studies that I could look at to learn more
              about your methods?
            </p>
            <h2>Why Work With Bowie SEO?</h2>
            <p>
              Some SEO companies offer many different digital marketing
              solutions.
            </p>
            <p>So why should you choose Bowie SEO?</p>
            <p>All we do is SEO.</p>
            <p>
              We don't do web designing, web development, search marketing,
              social media management, or any other digital marketing.
            </p>
            <p>
              Our focus is to help your business grow and make more money with
              SEO.
            </p>
            <p>
              If we didn't focus on search engine optimization alone, we
              wouldn't consider ourselves a top Maryland SEO company.
            </p>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact us</Button>
                </a>
              </Link>
            </div>
            <h2 className="title">
              FAQ<span className="highlight">s</span>
            </h2>
            <Accordion data={expertData} />
          </div>
        </section>
        <Ready
          h2="Want a Maryland SEO Expert To Help You Get More Traffic, More Leads, and Help Grow Your Business?"
          p="Please fill out the form below and we'll contact you ASAP."
        />
        <LocalCities />
      </Main>
    </>
  )
}

const Form = styled('form')`
  margin: 2rem 0;
  padding: 0;

  label {
    font-weight: 100;
    margin-bottom: 0.5em;
  }
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #eee;
    font-size: inherit;
    font-family: inherit;
    box-sizing: border-box;
  }

  input[type='text'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
  }

  .budget {
    margin: 1rem 0;
  }
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: #d35400;
  border: 1px solid #d35400;
`

export default SEOAudit
