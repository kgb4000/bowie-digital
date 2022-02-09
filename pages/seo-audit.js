import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Ready from '../components/ready-section'
import Button from '../components/button'
import ReactPlayer from 'react-player/youtube'

import { NextSeo } from 'next-seo'

const SEOAudit = () => {
  const SEO = {
    title:
      "🏆  SEO Audit Services | What's Stopping Your Website From Getting Traffic",
    description:
      "Get SEO Audit services. See  what's stopping your website from getting traffic, generating leads, and bringing you more business. Contact us today!",
    canonical: 'https://bowieseo.com/seo-audit',
    openGraph: {
      title:
        "🏆  SEO Audit Services | What's Stopping Your Website From Getting Traffic",
      description:
        "Get SEO Audit services. See  what's stopping your website from getting traffic, generating leads, and bringing you more business. Contact us today!",
      type: 'website',
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Contact us" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="100vh"
        backgroundImage="/images/seo-audit.webp"
        heroText="SEO Audit Services"
        subText="Discover What's Stopping Your Website From Getting Traffic and Fix it!"
        buttonText="Contact us"
        buttonLink="/contact"
      />
      <Main>
        <section>
          <div className="container">
            <h2>SEO Audit Services</h2>
            <p>Bowie SEO provides SEO audit services in Maryland.</p>
            <p>
              We don't do a regular ordinary SEO audit. We do a Bowie SEO Audit.
            </p>
            {/* <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div> */}

            <p>
              With our SEO audit, we get down and inside your website with our
              multi-point audit.
            </p>

            <p>
              We use our multi-point audit to discover the problems and issues
              that are holding your website from performing better in the search
              engines.
            </p>

            <p>
              When we find problems holding your website back, we present them
              to you with solutions that will help improve your website's
              performance in the search engines.
            </p>
            <p>
              The goal is to help you get more leads, more customers, and make
              more money for your business.
            </p>

            <h2>What is an SEO Audit?</h2>
            <p>
              An SEO audit evaluates your entire website to see if it can appear
              in the search engines results pages.
            </p>
            <p>Example.</p>
            <p>
              If Google and Bing think your website is good enough to appear in
              their search results for a particular keyword, then they will show
              it in their search results.
            </p>
            <p>
              What position they show your webpage depends on if they feel that
              it satisfies the searcher's intent.
            </p>
            <h2>Why is an SEO Audit Important?</h2>
            <p>
              An SEO Audit is essential because by performing an SEO audit, you
              can find issues that are affecting your website's ability to rank
              higher in the search engines.
            </p>
            <p>
              A search engine optimization audit essentially grades your website
              on the best practices for SEO.
            </p>
            <p>
              Using best practices is key to Google's algorithm, which means
              that the more sites that do things incorrectly (or don't do
              anything at all), the better your chances of ranking higher.
            </p>
            <p>
              It would help if you always were thinking about ways to improve
              your content and metadata by using these guidelines:
            </p>
            <p>
              Although an SEO audit will only show you the issues affecting your
              website, it will not show you how to fix them.
            </p>
            <p>We can fix the issues with your website.</p>
            <h2>Benefits of an SEO Audit</h2>
            <ol>
              <li>
                It can help you determine what keywords to rank for and why. If
                you're going to expand into new markets, focusing on ranking for
                specific keywords is essential and will produce better results.
                Choosing random keywords without knowing what people are using
                or if the keywords are related to your goals is a recipe for
                wasting money.
              </li>
              <li>
                You'll know where your weaknesses lie so that you can improve
                them! Having an ineffective link-building campaign can be
                disastrous for businesses that rely on SEO. This process
                typically takes longer than many other aspects of running a
                website that isn't dependent on inbound traffic. By checking
                your standings against competitors' when looking at keywords
                related to your industry, you'll be able to figure out if
                there's any way you can work it into plans or whether or not it
                would just be a waste of time and energy.
              </li>
              <li>
                SEO audits help with the process of content optimization! If you
                intend on having a blog on your website, reviews, forums, or any
                other kind of public content that people can find themselves
                reading, SEO audits are going to provide relevant information
                regarding how well optimized they are for a particular keyword.
              </li>
              <li>
                An SEO audit helps save money! If there are no keywords to
                target that could generate additional traffic, then there's no
                need to be devoting all of your marketing budgets to areas that
                won't benefit the company.
              </li>
              <li>
                Brand awareness! When it comes down to it, one of the most
                significant issues most companies face in regards to not
                receiving enough inbound traffic is their brand being less
                recognizable by consumers, which makes doing an SEO audit ideal
                because you get a general idea of what sort of keywords are
                being typed into search engines regularly. This data can
                certainly come in handy when figuring out how well you're doing
                compared to others who also sell similar products/services.
              </li>
              <li>
                It helps you understand what your competitors are doing! As
                mentioned before, it's essential to know how well you're doing
                compared to others and whether or not there is any room for
                improvement on certain aspects of your website that will help
                move things along in the right direction, so why not look at how
                they rank on Google? By having this information available, you
                can more easily assess where they're earning their profits from
                and use that as a way of figuring out how much potential traffic
                is general on your end.
              </li>
              <li>
                One of the most significant benefits of doing an SEO audit is
                opening your eyes to various options that you might not have
                considered before. It helps identify opportunities! From an
                equally important standpoint, it also helps control your costs
                by eliminating unnecessary or isn't yielding any results, making
                sure you only pay for things producing tangible results.
              </li>
            </ol>
            <h2>What is the SEO Audit Process?</h2>
            <p>
              When performing an SEO Audit, there are different elements to look
              for in your website and webpages.
            </p>
            <p>
              But before we perform the audit, we must set and establish SEO
              benchmarks.
            </p>
            <p>
              A benchmark is a point of reference from which measurements are
              made. Our SEO benchmark will be your website's present state and
              stats before we perform any SEO or local SEO services.
            </p>
            <p>
              Our SEO benchmark will be the present state and stats of your
              website before we perform any SEO, or local SEO services.
            </p>
            <p>At Bowie SEO, we like to measure KPIs like:</p>
            <ol>
              <li>
                Revenue from your organic traffic - how much money your business
                is making from your website
              </li>
              <li>
                Total organic search traffic - the total amount of website
                visitors
              </li>
              <li>
                ROI from your SEO investment with us - if your SEO investment is
                paying off
              </li>
            </ol>
            <p>After we record our SEO benchmarks, we perform our SEO audit.</p>
            <p>Our SEO audit process involves doing:</p>
            <ol>
              <li>Technical audit</li>
              <li>A content audit</li>
              <li>A site architecture audit</li>
              <li>A website speed audit</li>
              <li>A website security audit</li>
              <li>A check on your url structure</li>
              <li>Checking redirects</li>
              <li>Keyword research</li>
              <li>Making sure search engines can crawl and index your site</li>
              <li>An audit all your images</li>
              <li>User experience check</li>
              <li>On page audit</li>
              <li>Off page audit</li>
              <li>Schema markup</li>
              <li>Plus more</li>
            </ol>
            <h2>
              What Should You Do After You Get The Results From Your SEO Audit?
            </h2>
            <p>
              After your SEO audit, you should incorporate all necessary changes
              as quickly as possible.
            </p>
            <p>
              Tracking the success of those changes over time will be a great
              indicator of whether you've gone far enough or if there are still
              opportunities for improvement.
            </p>
            <p>
              Use this information to continue developing an ongoing checklist
              of tasks that need to happen regularly, e.g., content maintenance,
              getting more backlinks, monitoring website traffic, etc.
            </p>
            <p>
              The more detail that goes into this checklist upfront, the easier
              it'll be to use effectively going forward.
            </p>
            <p>
              And don't hesitate to reach out for expert help if you need it.
            </p>
            <h2>We Get Personal with Bowie SEO Audits</h2>
            <p>Why?</p>
            <p>We appreciate you.</p>
            <p>We appreciate you for choosing me to do your SEO audit.</p>
            <p>
              We want your business to prosper, and an SEO specialist, I’ll do
              whatever we can do to help you be successful.
            </p>
          </div>
        </section>
        <Ready
          h2="Ready to Get More Traffic and Rank Higher in the Search Engines?"
          p="Fill out the form below to get your SEO Audit."
        />
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
