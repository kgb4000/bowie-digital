import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Ready from '../components/ready-section'
import Button from '../components/button'
import ReactPlayer from 'react-player/youtube'
import Accordion from '../components/accordion'
import { expertData } from '../components/lib/expert-data'
import Layout from '../components/layout'

import { NextSeo } from 'next-seo'

const SEOAudit = () => {
  const SEO = {
    title: 'Maryland SEO Expert | Proven Resutls | Bowie SEO',
    description:
      'Do you want to rank higher, increase web traffic, attract more customers and make more money? Get a Maryland SEO Expert. Contact Bowie SEO today!',
    canonical: 'https://bowieseo.com/maryland-seo-expert',
    openGraph: {
      title: 'Maryland SEO Expert | Proven Resutls | Bowie SEO',
      description:
        'Do you want to rank higher, increase web traffic, attract more customers and make more money? Get a Maryland SEO Expert. Contact Bowie SEO today!',
      type: 'website',
    },
  }

  return (
    <>
      <Layout>
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
              <p>Do you want more customers?</p>
              <p>
                When people search for your products and services, do you want
                your website to show up in the Map Pack?
              </p>
              <p>
                Do you want your website to appear on the first page of Google?
              </p>
              <p>Do you want more website traffic?</p>
              <p>
                Or do you want to make more money by getting customers from your
                website?
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
                We are SEO experts, and we help small businesses make more money
                with SEO.
              </p>
              <p>
                We create strategies that help business reach potential
                customers, increase sales and revenue.
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
                Search engine optimization (SEO) is the process of improving
                your website for search engines and users.
              </p>
              <p>
                SEO also helps increase your online visibility in the search
                results.
              </p>
              <p>
                The higher your site appears in the search rankings, the more
                visitors you will receive.
              </p>
              <p>
                Also the more your website appears in the search rankings,
                people will see your website.
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
                Organic search is still the number one source of traffic for
                most websites. A study found that organic search results get
                three times more traffic than online ads.
              </p>
              <h3>
                #2 You Can Reach Your Target Market, and They Can Find You
              </h3>
              <p>Investing in SEO can help you reach new customers.</p>
              <p>
                Ranking higher in search engines can get in front of more
                customers. More customers seeing your business can bring more
                sales and revenue. SEO also helps you target the right keywords
                and phrases. Keywords that people use to find your products or
                services.
              </p>
              <h3>#3 More People Rely on Search Engines for Information</h3>
              <p>
                More and more people trust search engines to find information.
              </p>
              <p>
                The average person goes online almost every day. As more people
                go online, it is super important for businesses to invest in
                SEO. People trust major search engines like Google to show them
                the best results.
              </p>
              <h3>
                #4 More People Will See Your Website and You'll Rank Above Your
                Competition
              </h3>
              <p>
                Using SEO can improve your web presence and help you rank above
                your competition.
              </p>
              <p>
                The more people see your website, the more they recognize your
                company and see you as an authority. More people seeing your
                website will result in more people clicking on your website.
                When more people click on your website, it boosts your SEO
                rankings.
              </p>
              <p>
                If you are doing SEO and your competitors are not, you will rank
                higher in the search results.
              </p>
              <h3>#5 Search Engines Are Not Going Anywhere Anytime Soon</h3>
              <p>Search engines are not going anywhere.</p>
              <p>
                As long as people use the internet, every business will need SEO
                if they want to reach customers.
              </p>
              <p>Why?</p>
              <p>
                Because 93% of online experiences begin with search engines, and
                46% of Google searches are looking for local information.
              </p>
              <p>
                When people search for your services, your business will not
                appear in the search results. People will not see your business
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
                We help you build the foundation for your website and make it
                better for search engines and users. You will rank higher, get
                more traffic, and enjoy the benefits of getting more leads and
                customers.
              </p>
              <p>We can help you with:</p>
              <h3>Site Architecture</h3>
              <p>
                An optimized site architecture allows users to find your web
                pages quickly. It also allows search engine bots to crawl and
                index your website. Not optimizing your site architecture can
                cause some pages not to get indexed.
              </p>
              <h3>Internal Linking</h3>
              <p>
                Internal linking helps search engines understand your website
                and help it rank better. Establish hierarchy, build link equity,
                increase website crawlability and improve user experience.
              </p>
              <h3>Keyword Research</h3>
              <p>
                Target relevant keywords that will help you reach your target
                audience.
              </p>
              <p>
                Find the keywords customers use to find your products and
                services. Keyword research is vital so that the content you
                create shows up in the search results, increasing your online
                visibility and your SEO rankings.
              </p>
              <h3>Competitive Analysis</h3>
              <p>
                Find your main competitors and see what they are doing. Compare
                your company's strengths and weaknesses to your competitors and
                use this information to discover opportunities your competition
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
                search rankings. An SEO audit will help identify elements on
                your site that kill website performance.
              </p>
              <h3>On-Page SEO</h3>
              <p>
                Analyze each page in your website. We make changes to increase
                ranking and website traffic. Optimize keyword placement, meta
                titles and meta descriptions. Wee look at improving UX to
                increase user engagement and dwell time.
              </p>
              <h3>Local SEO</h3>
              <p>Local businesses get found by local customers.</p>
              <p>
                When customers look for your services, you need to be above your
                competition. A local SEO strategy can help you appear in the Map
                Pack and the local organic search engine results.
              </p>
              <h3>XML Sitemaps</h3>
              <p>
                Create a sitemap, so search engines understand your website
                structure. A sitemap can help search engine bots crawl your
                website, and find your web pages.
              </p>
              <h3>Page Speed Optimization</h3>
              <p>
                Increase your website performance by optimizing your website
                page's speed. Increase conversions and user experience by
                removing elements that slow down your website.
              </p>
              <p>A slow site can affect your entire website performance.</p>

              <h3>Schema Markup</h3>
              <p>
                Help search engines read your website better. Add schema
                structured data tags to improve how Google reads your website
                and shows it in the SERPs.
              </p>
              <h3>Link Building</h3>
              <p>
                Build credibility and authority with backlinks. Get quality
                backlinks that will boost your domain authority and help you get
                quality traffic from Google.
              </p>
              <h3>Technical SEO</h3>
              <p>
                If search engines can't index your website, you will not appear
                in the search. We ensure that your website is indexable and
                satisfies the search engine requirements.
              </p>
              <div className="btn">
                <Link href="/free-seo-audit">
                  <a>
                    <Button>Free SEO Audit &#8594;</Button>
                  </a>
                </Link>
              </div>
              <h2>Hire Maryland SEO Experts and Get Results</h2>
              <p>
                Hiring an SEO expert is necessary if you want to have a
                successful website.
              </p>
              <p>Why?</p>
              <p>Guess what.</p>
              <p>Your competitors are already using SEO professionals.</p>
              <p>
                The days of creating a website and waiting for the traffic to
                come rolling in are over. Today's SEO experts can help develop
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
                research. Find out what sets them apart from other professionals
                in their industry.
              </p>
              <p>
                Find out what sets them apart from other professionals in their
                industry.
              </p>
              <h4>An SEO agency might be right for your business if:</h4>
              <p>
                - You don't have staff or budget dedicated toward marketing
                initiatives 
              </p>
              <p>
                - You don't have staff or budget dedicated specifically toward
                marketing initiatives{' '}
              </p>
              <p>- You need help with link building and content creation</p>
              <p>
                - You don't have time to manage SEO initiatives on your own {' '}
              </p>
              <p>
                - Your website is brand new, and you need help getting up the
                rankings
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
                - What kind of strategies do you think will be most effective
                for me?
              </p>
              <p>
                - Do you have any case studies that I could look at to learn
                more about your methods?
              </p>
              <p>
                The average person goes online almost every day, making it
                incredibly important for businesses to invest in search engine
                optimization. People trust major search engines like Google to
                show them the best results for their search queries.
              </p>
              <p>
                SEO experts know how to utilize various strategies, from basic
                on-page optimization to building an extensive link profile and
                engaging in social media marketing. One of the most important
                roles is that of a strategist with a big-picture that helps you
                identify the path toward growth.
              </p>
              <h2>Why Work With Bowie SEO?</h2>
              <p>
                With SEO companies offering different digital marketing
                solutions, it's hard to choose the right company.
              </p>
              <p>So why should you choose Bowie SEO?</p>
              <p>
                We don't do web designing, web development, search marketing,
                social media management, or any other digital marketing.
              </p>
              <p>All we do is SEO.</p>
              <p>
                We don't do web designing, Google ads, or social media marketing
                either.
              </p>
              <p>
                Our focus is to help your business get more traffic, leads, and
                make more money with SEO.
              </p>
              <p>
                If we didn't focus on SEO alone, we wouldn't consider ourselves
                a top Maryland SEO company.
              </p>
              <div className="btn">
                <Link href="/contact">
                  <a>
                    <Button>Contact us</Button>
                  </a>
                </Link>
              </div>
              <h2 className="title">How to Get Started</h2>
              <h4>Contact us</h4>
              <p>
                Call us for a Free Mini SEO Audit. See what's stopping your
                website from ranking higher, getting leads, and performing
                better.
              </p>
              <h4>Plan</h4>
              <p>
                After we get all the information, we plan what actions will
                bring your business the best results.
              </p>
              <h4>Execute</h4>
              <p>
                We execute or plan. We track and make changes to improve your
                website to achieve goals and get results.
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
              <h3>How Long Does it Take to See SEO results?</h3>
              <p>
                It can take three to six months, or it can take six to twelve
                months to see any results from your SEO campaign.
              </p>
              <p>
                The length of time depends on how competitive your industry is.
              </p>
              <p>
                It also depends on the strength of your website, your
                competitor's websites, and more.
              </p>

              <h3>What SEO Strategy will You Put in place for My Business?</h3>
              <p>
                The answer is we don't know yet. We have to talk with you first.
                Then we perform an SEO audit to identify any problems that may
                be stopping your website from ranking.
              </p>
              <h3>How Much Will SEO Cost?</h3>
              <p>
                Investing in SEO services is a plan to increase free organic
                traffic for the future.
              </p>
              <p>
                The cost of SEO should differ according to each company's
                specific needs.
              </p>
              <p>
                Some companies offer SEO services starting as low as $199.00,
                and others have services starting at $249.00 a month.
              </p>
              <p>These prices may seem like a deal, please be aware.</p>
              <p>
                Cheap SEO prices usually mean cheap SEO services. For those
                prices, your SEO strategy may take years for you to see any
                results or you may not see any results at all.
              </p>
              <p>
                Here are some other reasons why you should avoid Cheap SEO
                services. Some cheap SEO companies use Black Hat SEO.
              </p>
              <p>
                Black Hat SEO goes against the search engine's terms of service.
                Although it can get you ranked, there is an excellent chance
                that your website will get banned.
              </p>
              <p>Please don't take that chance.</p>
              <p>
                As a professional Maryland SEO company and SEO experts, we only
                practice White Hat SEO.
              </p>
              <h3>Can You Guarantee #1 Rankings?</h3>
              <p>
                No SEO expert or consultant can guarantee first place rankings.
              </p>
              <p>
                If anyone makes this guarantee, be cautious. It is a sign that
                they are inexperienced or plan to take your hard-earned money.
              </p>
              <p>There are no guarantees in life.</p>
              <p>
                The only guarantee we make is that your website will perform
                better than when we started.
              </p>
            </div>
          </section>
          <Ready
            h2="Want a Maryland SEO Expert To Help You Get More Traffic, More Leads, and Help Grow Your Business?"
            p="Please fill out the form below and we'll contact you ASAP."
          />
        </Main>
      </Layout>
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
