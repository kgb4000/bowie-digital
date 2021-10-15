import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Footer from '../components/footer'
import Ready from '../components/ready-section'
import Button from '../components/button'

import { NextSeo } from 'next-seo'

export default function MarylandSEO() {
  const SEO = {
    title: 'Maryland SEO',
    titleTemplate: '%s | Get More Customers',
    description:
      'We use Maryland SEO to help businesses in Maryland rank higher on Google and get more customers. Call us today.',
    openGraph: {
      title: 'Maryland SEO | Get More Customers',
      description:
        'We use Maryland SEO to help businesses in Maryland rank higher on Google and get more customers. Call us today.',
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
      <HeroBox backgroundHeight="60vh" heroText="Maryland SEO" />
      <Main>
        <div className="content">
          <div className="container">
            <h1> A Maryland SEO Company</h1>
            <p>
              Bowie Digital Marketing is a Maryland SEO company offering SEO to
              small businesses in Maryland. We offer this service because we
              want our small business community in Maryland to be successful.
            </p>
            <p>
              Have you ever wondered how to get your business ranked on the
              first page of Google? Or how to get it ranked in the Map Pack?
            </p>
            <p>Well, that&apos; s what we do.</p>
            <p>
              We help companies throughout Maryland increase traffic to their
              websites and rank higher in Google. We get you more website
              traffic and ranking higher by using SEO.
            </p>
            <h2>What is SEO</h2>
            <p>
              SEO (search engine optimization) is the process of improving your
              website for users and search engines. When someone searches for
              your product or service, you want the search engines to display
              your company.{' '}
            </p>
            <Quotebox>
              SEO is the process of improving your website for users and search
              engines.
              <p>
                <Link href="/">
                  <a>Bowie Digital Marketing</a>
                </Link>
              </p>
            </Quotebox>
            <p>
              You don&apos;t want your company showing up on the second or third
              page of the search results. You want your business showing up on
              the first page.
            </p>
            <p>Why?</p>
            <p>
              According to Moz, the first page of Google gets{' '}
              <b>
                <a
                  href="https://moz.com/blog/google-organic-click-through-rates-in-2014"
                  target="_blank"
                  rel="noreferrer"
                >
                  71% to 92% of the clicks
                </a>
              </b>
              , and the second page gets below 6% of all clicks.
            </p>
            <p>
              Also, according to Brad,{' '}
              <b>
                92% of searchers will pick businesses on the first page of local
                search results.
              </b>
            </p>
            <p>
              Even though your website reaches the first page of Google, your
              business needs to be near the top. The first five search results
              receive <b>67.6%</b> of clicks, and the second five receive only{' '}
              <b>3.73%</b>.
            </p>
            <p>
              Although there are many different search engines like Bing, Apple
              Maps, Yahoo, and DuckDuckGo, we use Google when talking about SEO
              and ranking. We use Google because it is the most used search
              engine in the US and has around <b>88%</b> of the search engine
              market.
            </p>
            <p>
              Bing has 5% of the market, Yahoo has almost 3%, and DuckDuckGo has
              nearly 3%.
            </p>
            <h2>The Benefits of SEO for Maryland Businesses</h2>
            <Quotebox>Watch Video!</Quotebox>
            <ul>
              <li>Increase the number of people coming to your website.</li>
              <li>Increase the number of leads your business gets.</li>
              <li>Replace expensive pay-per-click ads and social media ads.</li>
            </ul>
            <h2>Why is SEO Important for Businesses in Maryland?</h2>
            <p>
              SEO is essential for businesses in Maryland because this process
              can push your business website ahead of your competition. Your
              business website will rank higher in the search engines and the
              Map Pack, and your website will get more traffic.
            </p>
            <Quotebox>Watch Video!</Quotebox>
            <p>
              More website traffic will put you in front of more customers
              searching for your products or services. It will also lead to more
              people knowing about your business, more sales, and more revenue
              for your business.
            </p>
            <p>
              Adding an SEO strategy is one of the best investments you can ever
              make for your business.
            </p>
            <p>
              Here are a few statistics on why SEO can help businesses in
              Maryland.
            </p>
            <p>
              Imagine you&apos;re a pool builder, an eye doctor, a plumber, a
              certified professional accountant, a lawyer, or you own a nail
              salon.{' '}
              <b>
                Instead of getting fifty calls a month to your business, you got
                one hundred and forty-five calls per month or more?
              </b>
            </p>
            <p>What would that mean for your business?</p>
            <p>Would an increase in sales help your bottom line?</p>
            <p>Yes, it would. </p>
            <p>That is what an SEO strategy can do for your business.</p>
            <h2>Twenty Six (26) Ways To Know If Your Business Needs SEO?</h2>
            <p>You know if your business needs SEO if:</p>
            <ol>
              <li className="ways">You don&apos;t have a website.</li>
              <li className="ways">Your website is not mobile-friendly.</li>
              <div className="blog-image">
                <img
                  src="/images/mobile-website-vs-non-mobile-website.webp"
                  className="blog-img"
                  alt="Mobile website vs non-mobile website"
                  loading="lazy"
                />
                <em>
                  <small>
                    Source:{' '}
                    <a href="https://developers.google.com/search/mobile-sites/get-started">
                      Google Search Central
                    </a>
                  </small>
                </em>
              </div>
              <li className="ways">You get zero traffic on your website.</li>
              <li className="ways">Your website gets a little traffic.</li>
              <div className="blog-image">
                <img
                  src="/images/small-amount-of-backlinks.webp"
                  className="blog-img"
                  alt="Website with low traffic"
                  loading="lazy"
                />
                <em>
                  <small>
                    Source: <a href="/">Bowie Digital marketing</a>
                  </small>
                </em>
              </div>
              <li className="ways">Your web traffic is not increasing.</li>
              <li className="ways">
                You rely mostly on paid ads, social media advertising, and
                referals to get leads and customers.
              </li>
              <li className="ways">
                You get little or no leads from your website.
              </li>
              <li className="ways">You are not on the first page of Google.</li>
              <Quotebox>
                92% of searchers will pick businesses on the first page of local
                search results.
                <p>
                  <a href="https://moz.com/blog/google-organic-click-through-rates-in-2014">
                    SEO Expert Brad
                  </a>
                </p>
              </Quotebox>
              <li className="ways">
                You don&apos;t rank for any of your keywords.
              </li>
              <li className="ways">You are targeting hard to rank keywords.</li>
              <li className="ways">
                You don&apos;t have a Google My Business page.
              </li>
              <li className="ways">
                You are not on the first page of the Google Map Pack.
              </li>
              <div className="blog-image">
                <img
                  src="/images/google-search-for-bakery-in-bowie-md.webp"
                  className="blog-img"
                  alt="Google search for bakery in Bowie Maryland"
                  loading="lazy"
                />
                <em>
                  <small>Source: Bowie Digital Marketing</small>
                </em>
              </div>
              <li className="ways">
                Your Google My Business page is not complete.
              </li>
              <li className="ways">
                You don&apos;t update your Google My Business Page regularly.
              </li>
              <li className="ways">Your website is slow.</li>
              <div className="blog-image">
                <img
                  src="/images/slow-mobile-website-speed.webp"
                  className="blog-img"
                  alt="Website with low traffic"
                  loading="lazy"
                />
                <em>
                  <small>Source: Bowie Digital Marketing</small>
                </em>
              </div>
              <li className="ways">You have broken links on your website.</li>
              <li className="ways">You have duplicate content on your site.</li>
              <li className="ways">
                Your meta description uses more than the 160 character limit.
              </li>
              <li className="ways">
                You don&apos;t have an SSL certificate, and your site is not
                secure.
              </li>
              <li className="ways">You less than 10 Google reviews.</li>
              <li className="ways">
                You don&apos;t have Google Analytics or Google Console connected
                to your website.
              </li>
              <li className="ways">You don&apos;t have a sitemap.</li>
              <li className="ways">
                You don&apos;t have enough content on your website.
              </li>
              <li className="ways">
                You have incorrect and inconsistent citations.
              </li>
              <li className="ways">
                You have fewer backlinks than your competitors.
              </li>
              <li className="ways">Your competitors rank higher than you.</li>
            </ol>
            <h2>Our Maryland SEO Process</h2>
            <p>
              Our goal is to improve your website. The ultimate goal is to get
              it ranking higher than your competition to increase your website
              traffic so you can make more money for your business.
            </p>
            <p>
              SEO is not a one-day or one-month process. It is a process that
              will take some time. It can take six to twelve months to start
              seeing results from SEO. Sometimes you can see results within
              three months, but it depends on your competition in your area.
            </p>
            <p>
              We at Bowie Digital Marketing have a system that will create
              results for Maryland businesses.
            </p>
            <p>This system includes:</p>
            <ul>
              <li>Technical SEO Analysis </li>
              <li>Competitor Analysis</li>
              <li>Local SEO </li>
              <li>On-Page SEO checks</li>
              <li>Off-Page SEO checks</li>
            </ul>
            <h3>Technical SEO Analysis</h3>
            <p>
              Google, and other search engines, need to crawl and index your
              site. They crawl your website using spiders to analyze each page
              on your website. After crawling your website, your web pages get
              indexed.
            </p>
            <p>
              If Google can&apos;t crawl your website, it cannot index your
              website. If it can&apos;t index your website, you will not rank in
              Google.
            </p>
            <p>
              As part of our technical analysis, we make sure that your website
              gets indexed on Google. We also make sure that pages that
              don&apos;t need to be indexed are not indexed.
            </p>
            <p>
              Other factors that are part of our technical analysis include:
            </p>
            <ul>
              <li>Website design</li>
              <li>Website organization</li>
              <li>404 errors and broken links</li>
              <li>Site speed</li>
              <li>Mobile and responsive website</li>
              <li>Sitemaps</li>
              <li>SSL and Security</li>
              <li>Google tools - Google Analytics and Google Console</li>
            </ul>
            <h4>Web Design</h4>
            <p>
              In 2021 and beyond, your customers will expect you to have a
              website with a good design. Investing in a responsive web design
              that looks on both desktop and mobile devices are a must.{' '}
            </p>
            <p>
              Customers will not spend time on your website if your website is
              slow, hard to read, has a lousy color scheme, and is not clean. A
              website with a bad design will have higher bounce rates which are
              not good for Local SEO.
            </p>
            <div className="blog-image">
              <img
                src="/images/info-4.webp"
                className="blog-img"
                alt="8 Statistics That Prove Responsive Web Desing Is Essential To SEO"
                title="8 Statistics That Prove Responsive Web Desing Is Essential To SEO"
                loading="lazy"
              />
              <em>
                Source:{' '}
                <a
                  href="https://www.digitalgravity.ae/blog/8-statistics-that-prove-responsive-design-is-essential-to-seo/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Digital Gravity
                </a>
              </em>
            </div>
            <p>
              If your website is not mobiel or responsive, we can help you with
              that. Depending on the size of your website, we can redesign it to
              make it more appealing to your visitors.
            </p>
            <h4>Website Architecture</h4>
            <p>
              Website architecture is how the pages on your website are linked
              together. For good SEO, you want a Flat Architecture.
            </p>{' '}
            <p>
              Having a Flat Architecture means that users and Google spiders can
              reach any page on your website in four clicks or less.
            </p>
            <div className="blog-image">
              <img
                src="/images/interlinking-site-architecture-makeseasy-indexing-.webp"
                className="blog-img"
                alt="Interlinking site architecture makes easy indexing"
                loading="lazy"
              />
              <em>
                Source:{' '}
                <a
                  href="https://moz.com/blog/site-architecture-for-seo"
                  rel="noreferrer"
                  target="_blank"
                >
                  Backlinko
                </a>
              </em>
            </div>
            <p>
              Without a simple site architecture, some pages may not get indexed
              and users will not find them.
            </p>
            <div className="blog-image">
              <img
                src="/images/pages-several-clicks-away-from-homepage-may-not-be-indexed.webp"
                className="blog-img"
                alt="Pages several-clicks away from homepage may not be indexed"
                loading="lazy"
              />
              <em>
                Source:{' '}
                <a
                  href="https://backlinko.com/hub/seo/architecture"
                  rel="noreferrer"
                  target="_blank"
                >
                  Backlinko
                </a>
              </em>
            </div>
            <h4>404 Errors and Broken Links</h4>
            <p>
              404 errors and broken links give users a bad experience. You could
              have deleted a page or misspelled the anchor text for the link.
            </p>
            <p>
              When a user clicks on a link and the page is not there, it can be
              frustrating. A user will likely not return to your site. Broken
              links and 404 pages are not good signals for rankings.
            </p>
            <p>
              If you have broken links on your website, we can find them and fix
              them. We have to tools to scan your entire website.
            </p>
            <h4>Page Speed</h4>
            <p>
              Your page speed is one of the most significant factors for good
              SEO and a ranking factor in Google. Your website&apos;s speed on
              desktops and smartphones can mean the difference between ranking
              on the first page and ranking on the second page.{' '}
            </p>
            <p>
              Your page speed can also be the difference between customers
              staying on your site or going to your competitor&apos;s site.
            </p>
            <p>
              Your page speed also plays a large role when it comes to
              conversions. According to Google, pages that load faster get
              higher conversions than websites that are slower.
            </p>
            <div className="blog-image">
              <img
                src="/images/googles-mobile-page-speed.png"
                className="blog-img border"
                alt="Page speed benchmarks"
                loading="lazy"
              />
              <em>
                Source: <a>Think With Google</a>
              </em>
            </div>
            <p>Every second your website takes to load means users bounce.</p>
            <p>
              Your website speed is crucial to your SEO and ranking. If you have
              website speed issues, we can fix them for you and help you rank
              higher.
            </p>
            <h4>Mobile and Responsive Website</h4>
            <p>
              Having a mobile and responsive website is part of good web design
              and is great for SEO and Local SEO. Your customers also expect it.{' '}
            </p>
            <p>
              According to Hubspot Marketing Statistics, 61% of mobile searchers
              are more likely to contact a local business if they have a
              mobile-friendly site.
            </p>
            <p>
              If you don&apos;t have a mobile or responsive website, you will
              lose customers to your competitors that do have mobile sites.
              Google will also penalize your website, and it will not rank high
              in the search.
            </p>
            <p>
              Use <a href="#">this tool</a> to test if your website is
              mobile-friendly. Think with Google tool.
            </p>
            <h4>Website Security</h4>
            <p>
              Search engines take web security very seriously. You know if your
              site is secure if it starts with HTTPS, and you see a little lock
              next to your domain name.
            </p>
            <div className="blog-image">
              <img
                src="/images/NotSecure.png"
                className="blog-img"
                loading="lazy"
              />
              <em>
                Source: <a>Think With Google</a>
              </em>
            </div>
            <p>
              If your site is not secure, Google will display a &quot;Not
              Secure&quot; notice next to your domain name. An unsecured website
              will not rank high in the search and will deter customers from
              doing business with your business.
            </p>
            <p>
              An unsecured site will also hurt your conversions. Your business
              will lose trust and credibility, and consumers may not come back
              to your website.{' '}
            </p>
            <h4>Sitemap</h4>
            <p>
              Search engines use sitemaps to find the different pages on your
              website. If your site is new, or you don&apos;t have any backlinks
              or external links, Google will use your sitemap to find all the
              pages on your website.
            </p>
            <p>
              Without a sitemap, Google will use backlinks and external links.
              If you don&apos;t have any backlinks or other websites linking to
              your website, Google will have a hard time finding your web pages.
            </p>
            <h4>Google Tools</h4>
            <p>
              The tools that Google has can help you rank higher in the search
              engines. These tools are Google Analytics and Google Console.
            </p>
            <p>
              Having Google Analytics on your website allows you to analyze the
              traffic that comes to your site. It lets you see how many visitors
              came to your website, where they came from, what day, what pages
              they visited, and even the device they used.
            </p>
            <p>Google Console is a tool that you can use to see such things </p>
            <h3>Competitor Analysis</h3>
            <img src="/images/competition.jpg" loading="lazy" />
            <p>
              If you have a businees in Maryland, chances are someone else is
              selling the same products or services as you.
            </p>
            <p>
              So how do you get an advantage over your competition and rank
              higher in Google?
            </p>
            <p>
              You use a <b>competitive analysis</b>.
            </p>
            <p>
              A competitive anaylysis is a strategy that you use to look at your
              competitors&apos; websites. You use a competitive analysis to look
              at your their website&apos;s strengths and weaknesses and compare
              them to your website&apos;s strengths and weaknesses.
            </p>
            <p>In our competitive analysis, we do:</p>
            <ul>
              <li>Keyword Research</li>
              <li>Content Research</li>
              <li>Technical SEO Reseach</li>
              <li>Link Research</li>
              <li>Local SEO</li>
            </ul>
            <p>
              We perform a competitor analysis agianst your top five
              competitiors that rank higher than you in Google.
            </p>
            <h4>Keyword Research</h4>
            <p>
              Keywords are words or phrases that people enter into the search
              engines to find answers to. They are essential because you can
              appear at the top of the search by choosing the right keywords.
              When we do your competitor analysis, we do keyword research to see
              which keywords and phrases your competitors rank. We also look at
              how much traffic they get from those keywords and use this info to
              determine what keywords you should try to rank.
            </p>
            <div className="blog-image">
              <img
                src="/images/ahref.gif"
                className="blog-img"
                alt="Ahrefs keyword research tool"
                loading="lazy"
              />
              <em>
                Source:{' '}
                <a
                  href="https://moz.com/blog/site-architecture-for-seo"
                  rel="noreferrer"
                  target="_blank"
                >
                  ahrefs
                </a>
              </em>
            </div>
            <p>
              When we do your competitor analysis, we do keyword research to see
              which keywords and phrases your competitors rank. We also look at
              how much traffic they get from those keywords and use this info to
              determine what keywords you should try to rank.
            </p>
            <p>
              At the end of our competitor analysis, we have a list of keywords
              that you will want to use. We use these keywords on our website to
              rank higher and get more traffic.
            </p>
            <h4>Content Reasearch</h4>
            <p>
              Content is king, and it is invaluable when doing your competitor
              analysis.{' '}
            </p>
            <p>
              The content on your competitors&apos;s websites is precious. By
              looking at the content on their website, we can see which web
              pages bring in the most traffic and which bring in minor traffic.
              We can use this information to decide what content we will create
              and make our content better and more engaging to increase dwell
              time.
            </p>
            <p>
              Example. If your competitor has a blog post that is five hundred
              words, you should create a post that is one thousand words. You
              should also add more pictures, graphics, and more videos to keep
              people engaged longer.
            </p>
            <p>
              You should answer the user&apos;ss questions and seek to become
              the authority on the subject.
            </p>
            <h4>Technical SEO Reseach</h4>
            <p>We do technical analysis on your competitor&apos;s websites.</p>
            <p>
              Besides doing technical analysis on your website, we do it on your
              competitors&apos;s. We do this to see what your competitors are
              doing right and what they are doing better. Then we can determine
              what we need to improve our website.
            </p>
            <p>
              For example, their website may be mobile but looks cluttered and
              doesn&apos;st have a lot of content. Their website may also not be
              as fast or have broken links.
            </p>
            <p>
              We can then use this information to make your website looks
              better, runs faster, and all the links work.
            </p>
            <h4>Link Research</h4>
            <p>
              If you want to rank higher in Google, you must have backlinks.
            </p>
            <p>
              Backlinks are links from one website to another. In the case of
              your website, backlinks are links from another website to your
              website.
            </p>
            <p>
              Backlinks are like votes given to your website. The more votes you
              have and the better quality votes from high authority websites,
              the higher you website authority.
            </p>
            <p>
              In our competitive analysis, we count how many backlinks your
              competitors have, and we look at the quality of those backlinks.{' '}
            </p>
            <h4>Local SEO</h4>
            <p>
              Local SEO is the process of improving your website for your
              location and your local audience. Although similar to SEO, local
              SEO focuses on improving your website to attract customers in your
              local area.
            </p>
            <p>
              For example, if you own an asphalt paving company in Bowie, you
              will want to target customers in Bowie. You will have to target
              local keywords like Bowie, or Maryland, or even Annapolis so that
              you come up in the Local Map Pack.
            </p>
            <p>
              There are several reasons you will want to start a local SEO
              strategy.
            </p>
            <p>These reasons are:</p>
            <ol>
              <li className="ways">
                46% of all Google searches are looking for local information.
              </li>
              <li className="ways">
                4 in 5 consumers use search engines to find local information.
              </li>
              <li className="ways">
                92% of searchers will pick businesses on the first page of local
                search results.
              </li>
              <li className="ways">
                72% of consumers that did a local search visited a store within
                five miles.
              </li>
              <li className="ways">
                88% of searches for local businesses on a mobile device either
                call or visit the business within 24 hours.
              </li>
              <li className="ways">
                97% of people learn more about a local company online than
                anywhere else.
              </li>
              <li className="ways">
                61% of mobile searchers are more likely to contact a local
                business if they have a mobile website.
              </li>
            </ol>
            <h5>NAP</h5>
            <p>
              We check citations for your NAP consistency. Nap stands for name,
              address, and phone number. Citations are online references to your
              business&apos;s NAP info.
            </p>
            <p>If you list your company as:</p>
            <div className="address correct">
              <p>Frank&apos;s Auto Shop</p>
              <p>1234 Central Avenue</p>
              <p>Mitchellville, Maryland 20774</p>
              <p>(240) 655-9192</p>
            </div>
            <p>
              You must enter your NAP the same everywhere you list your
              business. It must be the same on your website, your Google My
              Business page, other business directories, and other local
              websites. You cannot change your listing to:
            </p>
            <div className="address incorrect">
              <p>Frank&apos;s Car Shop</p>
              <p>
                1234 Central <b>Avenue</b>
              </p>
              <p>
                Mitchellville, <b>MD</b> 20774
              </p>
              <p>(240) 655-9192</p>
            </div>
            <p>or</p>
            <div className="address incorrect">
              <p>Frank&apos;s Auto</p>
              <p>1234 Central Ave</p>
              <p>Mitchellville, MD 20774</p>
              <p>
                <b>1 (240) 655-9192</b>
              </p>
            </div>
            <p>
              Every site you list your business must match. Google uses these
              listings as signals to verify that your business is for real.
              Inconsistent NAP citations will be a red flag for Google and
              therefore hurt your SEO.
            </p>
            <p>Some websites you can list your business on include:</p>
            <ul>
              <li>Facebook</li>
              <li>
                <a
                  href="https://www.yelp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Yelp
                </a>
              </li>
              <li>
                <a
                  href="https://www.bingplaces.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Bing Places
                </a>
              </li>
              <li>Four Square</li>
              <li>CityScapes</li>
              <li>Angie&apos;s List</li>
              <li>Google My Business</li>
            </ul>
            <h5>Google My Business</h5>
            <p>
              Today, a{' '}
              <a
                href="https://www.google.com/business/"
                rel="noreferrer"
                target="_blank"
              >
                Google My Business
              </a>{' '}
              (GMB) page is not an option. You must have one if you want
              customers to find you on Google. As more people use search engines
              to discover new services, it is a no-brainer that you have a
              Google My Business page.
            </p>
            <p>
              <b>Plus, it&apos;s free!</b>
            </p>
            <p>
              A report from Google found that 60% of smartphone users contacted
              businesses directly through search results.
            </p>
            <p>
              If you don&apos;t have a Google My Business page, you are missing
              consumers searching for your products and services.
            </p>
            <p>
              If you don&apos;t have a GMB page, we can help set it up for you.
            </p>
            <h5>Local Link Building</h5>
            <p>
              Local link building is one way to help build your website&apos;s
              authority. Getting backlinks from sites like the Maryland Chamber
              of Commerce and the Better Business Bureau can help your site rank
              higher than your competition.
            </p>
            <p>Other ways to get valuable backlinks in your area are:</p>
            <ul>
              <li>
                <a
                  href="https://mdchamber.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Maryland Chamber of Commerce
                </a>
              </li>
              <li>local newspapers and media outlets</li>
              <li>other local businesses</li>
              <li>local blogs</li>
              <li>local bloggers</li>
              <li>local charities</li>
              <li>sponsoring events</li>
              <li>volunteering your services to worthy causes</li>
            </ul>
            <p>
              Backlinks from local businesses and organizations will also signal
              to Google that you are an authority in your local community and,
              therefore boost your website authority.
            </p>
            <h5>On-Page SEO</h5>
            <p>
              On-page SEO is the practice of improving your <b>website pages</b>{' '}
              for users and search engines. By improving your web pages, you can
              rank higher than your competitors and increase your click-through
              rates and website conversions.{' '}
            </p>
            <p>Things you may improve on your web pages include:</p>
            <ul>
              <li>User Experience</li>
              <li>URL Structure</li>
              <li>Title Tags and Meta Descriptions</li>
              <li>Keyword Placement</li>
              <li>Alt text</li>
              <li>Content</li>
              <li>Bounce Rate</li>
              <li>Dwell Time</li>
            </ul>
            <h5>Off-Page SEO</h5>
            <p>
              Off-page SEO is the practice of improving your website pages for
              search engines and users. Things you may improve on your web pages
              include:
            </p>
            <ul>
              <li>Link Building / Backlinks</li>
              <li>Social Media</li>
              <li>Podcasting</li>
              <li>Content Marketing</li>
              <li>Getting Reviews</li>
              <li>Brand Building</li>
              <li>Guest Posting</li>
              <li>Local Citations</li>
              <li>Google My Business Page</li>
            </ul>
            <h2>The Cost Of SEO</h2>
            <p>
              Some companies offer SEO services starting as low as $199.00 a
              month, and other companies advertise services starting at $249.00
              a month. Although these prices may seem like a deal, please be
              aware. Cheap SEO prices usually mean cheap SEO services. For those
              prices, your SEO strategy may take years for you to see any
              results.
            </p>
            <p>Some cheap SEO companies are known to use Black Hat SEO.</p>
            <p>
              Black Hat SEO goes against the search engine&apos;s terms of
              service, and although it can get you ranked, there is an excellent
              chance that your website can get banned from the search engine.
            </p>
            <p>Don&apos;t take that chance.</p>
            <p>
              For our Maryland business community, we offer our White Hat SEO
              services according to your business needs. White Hat SEO{' '}
            </p>
            <p>
              We first perform our FREE SEO Audit to determine what needs
              improving. It may be anything from improving your title tags,
              adding meta-descriptions, or fixing your page speed.{' '}
            </p>
            <p>
              Only after we identify any problems and opportunities we find,
              then we give you a price.
            </p>
            <p>
              Higher rankings in Google and the Local Map Pack can get you more
              leads, more customers, and more revenue for your business.
            </p>
            <div className="btn">
              <Link href="/free-seo-audit">
                <a>
                  <Button>Get Your Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
            <p>
              SEO is a long-term process that can take six to twelve months to
              see results. If you&apos;re serious about your business and
              understand the benefits of an SEO strategy, you know it&apos;s
              worth the investment.
            </p>
            <p>
              Higher rankings in Google and the Local Map Pack can get you more
              leads, more customers, and more revenue for your business.
            </p>
            <h2>Why Work With Us</h2>
            <p>
              Bowie Digital Marketing is a professional SEO company, and we want
              our customers to succeed. We want our customers to realize the
              benefits of starting an SEO strategy and what it can do for their
              business.
            </p>
            <p>
              We do whatever it takes to ensure our customers enjoy SEO
              benefits, including going the extra mile.
            </p>
            <p>
              We want our customers to realize the benefits of starting an SEO
              strategy and what it can do for their business.
            </p>
            <p>
              We do what ever it takes to make sure our customers enjoy the
              benefits of SEO, and that includes going the extra mile.
            </p>
            <p>We offer a 100% satisfaction guarantee.</p>
            <p>
              If you&apos;re not satisfied, we promise to do whatever it takes
              to make it right.
            </p>
            <p>When you work with Bowie Digital marketing:</p>
            <ul>
              <li>A FREE SEO Audit</li>
              <li>You get no monthly contacts.</li>
              <li>
                You work with a local Maryland SEO company doing business with
                other local businesses, not an SEO company in Miami.
              </li>
              <li>
                We only practice White Hat SEO that won&apos;t get you website
                banned
              </li>
              <li>We work with one business per industry in our area.</li>
              <li>Weekly updates and monthly reports.</li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              Businesses in Maryland should consider starting an SEO strategy.
              An SEO strategy gets you on the first page of Google, bringing you
              more leads, more customers and helps make more money for your
              business.
            </p>
            <p>
              Please get in touch with us if you want to learn more or see how
              an SEO strategy can help your business.
            </p>
          </div>
        </div>
        <Ready />
      </Main>
      <Footer />
    </>
  )
}

const Quotebox = styled.div`
  color: #fff;
  background-color: #20202a;
  padding: 3rem;
  margin: 2rem 0;
  font-size: 1.8rem;
  line-height: 1.2;
  font-weight: 900;

  p {
    text-align: center;
    color: #fff;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`
