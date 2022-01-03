import Link from 'next/link'
import styled from 'styled-components'
import ReactPlayer from 'react-player/youtube'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Ready from '../components/ready-section'

import { NextSeo } from 'next-seo'

export default function LocalSEO() {
  const SEO = {
    title: 'Bowie Local SEO Company',
    description:
      'We perform Local SEO for small businesses in Bowie. You get more customers, more web traffic, and increase revenue. Contact us today!',
    type: 'website',
    canonical: 'https://bowieseo.com/local-seo-maryland',
    openGraph: {
      title: 'Bowie Local SEO Company | Get More Leads for You Local Business',
      description:
        'We perform Local SEO for small businesses in Maryland. You get more customers, more web traffic, and increase revenue. Contact us today!',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Contact me" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="35rem"
        heroText="Bowie SEO Company"
        subText="We Get You More Leads, More Customers and Increase Revenue With Local SEO."
        buttonText="Contact me"
        buttonLink="/contact"
      />
      <Main>
        <section className="article-section">
          <div className="container">
            <h2>Bowie SEO</h2>
            <p>
              Looking for a{' '}
              <Link href="local-seo-maryland">
                <a>local SEO </a>
              </Link>{' '}
              company in Maryland?
            </p>
            <p>Bowie SEO is the company for you.</p>
            <p>
              Bowie SEO is a local SEO company providing SEO and local SEO
              services to small businesses in Bowie and throughout Maryland.
            </p>
            <p>
              We help our customers rank higher in the search engines, get more
              leads, and make more money.
            </p>
            <h2>What is Local SEO?</h2>
            <p>
              Local SEO is the process of improving your website for search
              engines and users in your local area.
            </p>
            <p>
              If you have a business in Bowie Marland, local SEO will target
              customers in Bowie and nearby towns, not customers in Dallas,
              Texas.
            </p>
            <h2>What is the Difference Between Local SEO and SEO?</h2>
            <p>
              <b>SEO (search engine optimization)</b> is the process of
              improving your website for search engines and users.
            </p>
            <p>
              Companies that use SEO are the companies that deliver goods and
              services on a national or global level.
            </p>
            <p>
              Think of companies like GE, Samsung, and Dell computers. They sell
              and market their products to the whole country and the world, not
              just a local area.
            </p>
            <p>
              On the other hand, <b>local SEO</b> is geared towards local
              businesses and local customers.
            </p>
            <p>For example.</p>
            <p>
              If you're a pool builder in Bowie, you want the search engines to
              show your website when someone searches for "pool builder in
              Bowie."
            </p>
            <p>
              Another example is if you're an electrician in Bowie, you want the
              search engines to show your website when someone searches for
              "electrician in Bowie" or "electrician near me."
            </p>
            <p>
              It would be best if you had a Local SEO strategy for your business
              to show up in the local searches.
            </p>
            <h2>How Can Local SEO Help Your Business in Bowie?</h2>
            <p>Local SEO can help your business because it can:</p>
            <ul>
              <li>Get your business more leads.</li>
              <li>Increase your website traffic.</li>
              <li>
                Attract more customers looking for your product or service.
              </li>
              <li>Allow you to spend less money on social media ads.</li>
              <li>Rank your website higher than your competitors.</li>
              <li>Help build trust with new and existing customers.</li>
              <li>Let potential customers find your business online.</li>
              <li>Bring more customers for more sales and more revenue.</li>
            </ul>
            <p>
              When your website shows up in the Google 3 Pack or on the first
              page of Google, you will get more traffic to your website, and
              more people will see your business.
            </p>
            <p>
              You will get more clicks to your website, which will result in
              more sales and more revenue for your business.
            </p>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact me &#8594;</Button>
                </a>
              </Link>
            </div>
            <h2>15 Ways To Know If Your Business Needs Local SEO?</h2>
            <p>
              If you have any of the following issues with your website or
              digital marketing, you may need Local SEO.
            </p>
            <Stats>
              <li>
                When people search for your product or service, your website
                doesn't appear in the search results.
              </li>
              <li>You're not ranking for any keywords.</li>
              <li>Your competitors are ranking higher than you.</li>
              <li>You don't get any leads from your website.</li>
              <li>Your website is slow.</li>
              <li>
                You're trying digital marketing but really don't know what
                you're doing.
              </li>
              <li>You don't have a Google Business Profile set up.</li>
              <li>
                You're spending money on digital marketing but not seeing
                results.
              </li>
              <li>
                Your website has no actual content for your potential customers.
              </li>
              <li>You don't have any backlinks.</li>
              <li>You never set up citations.</li>
              <li>Your website is not secure.</li>
              <li>
                You don't have Google Search Console, or Google Analytics set
                up.
              </li>
              <li>You can't track anything on your site.</li>
              <li>
                You rely on Google ads and social media marketing for traffic
                and customers.
              </li>
            </Stats>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Get a Free SEO Audit &#8594;</Button>
                </a>
              </Link>
            </div>
            <h2>How Does Local SEO Work?</h2>
            <p>
              Local SEO is the process of improving your website for the search
              engines like Google and Bing and attracting your local audience to
              your website.
            </p>
            <p>
              For a Local SEO strategy to work, you need to add different
              elements and processes. These include:
            </p>
            <ol>
              <li>Get your Google Business Profile page.</li>
              <li>Getting backlinks.</li>
              <li>Setting up citations.</li>
              <li>Updating online directories.</li>
              <li>
                Doing an{' '}
                <Link href="/seo-audit">
                  <a>SEO audit</a>
                </Link>
                .
              </li>
              <li>Creating local content.</li>
              <li>Participating in your local community.</li>
            </ol>
            <h2>What is the Cost Of Local SEO Services?</h2>
            <p>
              The cost of your local SEO services depends on different factors.
              These factors include:
            </p>
            <ul>
              <li>The strength of your website.</li>
              <li>The competition in your area and industry.</li>
            </ul>
            <p>Some SEO companies offer local SEO services at meager prices.</p>
            <p>
              <b>Local SEO is not cheap.</b>
            </p>
            <p>
              Don't believe companies that try to sell you SEO services for
              $500.00 an below.
            </p>
            <p>SEO is a serious investment in your website.</p>
            <p>
              Your website is a crucial digital asset that can increase your
              online presence, get you more leads, and bring more money into
              your business.
            </p>
            <p>
              Cheap SEO services mean affordable services that may or may not
              work. Your local SEO campaign may take years before you see any
              results with inferior services.
            </p>
            <p>
              Don't waste your money on cheap SEO services. You will only waste
              your time and your money.
            </p>
            <p>
              Your competition is not using cheap SEO services. That is one
              reason they rank higher in the search engines.
            </p>
            <h2>Why Choose Bowie SEO for your Local SEO?</h2>
            <p>Businesses in Bowie should work with us because:</p>
            <ul>
              <li>
                We are part of the Bowie community and a memeber of the Bowie
                Chamber of Commerce.
              </li>
              <li>We can build your website presence.</li>
              <li>
                We can help you spend less on Google ads and social media
                marketing.
              </li>
              <li>
                We can help you target the right keywords to attract the right
                customers.
              </li>
              <li>We can help you make your website a real digital asset.</li>
              <li>We can help you rank higher than your competition.</li>
              <li>We love working with Maryland businesses.</li>
              <li>We are honest, and our work is transparent.</li>
              <li>
                <b>All we do is SEO.</b>
              </li>
            </ul>
            <p>
              If you have a business in Bowie and thinking about starting a
              local SEO campaign or have questions about Local SEO, please get
              in touch with me and see how an SEO strategy can help your
              business.
            </p>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact me &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <Ready
          h2="Do you have a business in Bowie and want to rank higher in the search engines, get more leads, more customers, and make more money?"
          p="Fill out the form and let me show you how Local SEO can help your business."
        />
      </Main>
    </>
  )
}

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
      line-height: 40px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      left: 0px;
      position: absolute;
      top: 1px;
      letter-spacing: 1px;
    }
  }
`
