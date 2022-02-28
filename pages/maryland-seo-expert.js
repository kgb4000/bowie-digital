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
            <h2>Maryland SEO Expert</h2>
            <p>
              Are you worrying about finding more customers for your business?
            </p>
            <p>
              Do you want to boost your website traffic and attract more
              potential customers?
            </p>
            <p>
              Are you looking for a Maryland SEO expert that can help your
              business rank higher in search engines?
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
              Our company can help your business create an SEO strategy that
              will make your website better, rank higher, attract more potential
              customers, and help increase your sales and revenue.
            </p>
            <p>But first.</p>
            <h2>What is SEO?</h2>
            <p>
              Search engine optimization (SEO) is the process of improving your
              website for search engines and users.
            </p>
            <p>
              SEO also helps increase your online visibility in the organic
              search results. Hence, the more frequently and higher your website
              appears in the search engine rankings, the more visitors you will
              receive.
            </p>
            <p>
              SEO differs from search advertising in that it aims to improve
              rankings for websites to make them more visible; by contrast,
              local marketing doesn't aim to show specific websites but rather
              to draw more foot traffic to a particular location.
            </p>
            <h2>Why Does Your Business Need Search Engine Optimization?</h2>
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
            <h3>#2 You Can Reach Your Customers</h3>
            <p>
              Investing in SEO is that it can help you reach new customers. SEO
              enables you to target keywords and phrases that people are using
              to find your type of product or service. By ranking higher in
              search engine results pages, you can get in front of more
              customers.
            </p>
            <h3>#3 Improve Your Web Presence</h3>
            <p>
              Using SEO can also help improve your search presence and overall
              top-of-mind awareness.{' '}
            </p>
            <p>
              By incorporating link building into your website, you will create
              a relationship with other sites with a lot of authority online.
              When other websites use links to point back to your site, they're
              giving you free marketing because it increases people's chances of
              seeing your company when they conduct relevant searches.
            </p>
            <h3>#4 Search Engines Are Not Going Anywhere</h3>
            <p>Search engines are not going anywhere.</p>
            <p>
              As long as people use search engines to search for information,
              businesses will need SEO. Search engine optimization is something
              every business must do if they want to appear in the major search
              engines. Without search engine optimization, your business will
              not appear in the search engines when people search for your
              products or services.
            </p>
            <p>
              The average person goes online almost every day, making it
              incredibly important for businesses to invest in search engine
              optimization. People trust search engines like Google to show them
              the best results for their search queries.
            </p>
            <p>
              SEO experts know how to utilize various strategies, from basic
              on-page optimization to building an extensive link profile and
              engaging in social media marketing. One of the most important
              roles is that of a strategist with a big-picture vision that helps
              you identify the path toward growth.
            </p>
            <h2>Hire an SEO Expert to Get Results</h2>
            <p>
              If you want to build a successful website, utilizing an SEO
              consultant is a must.
            </p>
            <p>
              The days of simply creating a website and waiting for the traffic
              to come rolling in are over. Today's SEO experts can create SEO
              strategies that they can use to rank your website higher than your
              competitors.
            </p>
            <p>
              When hiring an SEO expert, it's important that you take the time
              to do your research and find out what sets them apart from other
              professionals in their industry.
            </p>
            <h4>An SEO professional might be right for your business if:</h4>
            <p>
              - You don't have staff or budget dedicated specifically toward
              marketing initiatives{' '}
            </p>
            <p>- You need help with link building and content creation</p>
            <p>- You're not getting any website traffic</p>
            <p>- Your competitors rank higher than you</p>
            <p>- You don't have time to manage SEO initiatives on your own</p>
            <p>
              - Your website is brand new and you need help quickly getting up
              the rankings
            </p>
            <p>- You have absolutely no idea what you're doing</p>
            <h4>Some questions you should ask about their work are:</h4>
            <p>- What are some of your past successes?</p>
            <p>- Do you work with my competitors'?</p>
            <p>
              - What kind of strategies do you think will be most effective for
              me?
            </p>
            <p>
              - Do you have any case studies that I could look at to learn more
              about your methods?
            </p>
            <h2>Our SEO Services</h2>
            <h3>SEO services</h3>
            <p>
              Lay down the foundation for your website and make it better for
              search engines and users. Your website will rank higher, get more
              traffic, and enjoy more leads and customers.
            </p>
            <h3>Local SEO services</h3>
            <p>
              <Link href="/local-seo-maryland">
                <a>Local SEO</a>
              </Link>{' '}
              is about your local business found by your ideal customers. When
              customers look for your services, you need to show up in the
              search above your competitors.
            </p>
            <h3>Keyword Research</h3>
            <p>
              Find the keywords potential customers use to find your products
              and services. Keyword research is vital so that the content you
              create is what customers are searching for.
            </p>
            <h3>On-Page SEO services</h3>
            <p>
              Analyze each page of your website and make changes to increase
              ranking and website traffic.
            </p>
            <h3>Technical SEO</h3>
            <p>
              If search engines can't index your website, you will not appear in
              the search results. We ensure that your website is indexable and
              satisfies the search engine requirements.
            </p>
            <h3>SEO Audit</h3>
            <p>
              Discover what's stopping your site from ranking higher in the
              search engines. With an SEO audit, you will identify elements
              holding your website back and fix the issues.
            </p>
            <h3>Link Building</h3>
            <p>
              Build credibility and authority with backlinks. Get quality
              backlinks that will boost your domain authority and help you get
              quality traffic from Google and other search engines.
            </p>
            <h2 className="title">
              FAQ<span className="highlight">s</span>
            </h2>
            <Accordion data={expertData} />
          </div>
        </section>
        <Ready
          h2="Want a Maryland Expert To Help You Get More Traffic and More Leads?"
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
