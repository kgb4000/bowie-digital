import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Footer from '../components/footer'
import Ready from '../components/ready-section'
import Button from '../components/button'
import ReactPlayer from 'react-player/youtube'

import { NextSeo } from 'next-seo'

const SEOAudit = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    email: '',
    phone: '',
    website: '',
  })

  const [status, setStatus] = useState(false)

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const isEnabled = inputs.email.length && inputs.firstName > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        firstName: '',
        email: '',
        phone: '',
        website: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    // const endpoint = 'https://eekybmqof6.execute-api.us-east-1.amazonaws.com/prod/weddings-contact-form'

    const body = JSON.stringify({
      senderName: inputs.firstName,
      senderEmail: inputs.email,
      senderPhone: inputs.phone,
      senderService: inputs.website,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const SEO = {
    title: 'SEO Audit',
    titleTemplate: '%s | Bowie SEO',
    description:
      "Get an SEO Audit and see what's stopping your website from getting traffic, generating leads, and bringing you more business. Call us (240) 266-0588!",
    canonical: 'https://bowieseo.com/seo-audit',
    openGraph: {
      title: 'Free Website And SEO Audit',
      description:
        'Get your Free Website And SEO Audit and see what you can do to get more traffic to your website. A $999 value. Click here to get started.',
      type: 'website',
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Talk to us" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="35rem"
        heroText="SEO Audit"
        subText="Discover What's Stopping You From Getting Web Traffic and How to Fix The Problems!"
      />
      <Main>
        <section>
          <div className="container">
            <h2>Bowie SEO Audit</h2>
            <p>
              At Bowie SEO, we just don’t do a regular ordinary SEO audit, we do
              a Bowie SEO Audit.
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
              With our Bowie SEO audit, we get down and inside your website with
              our 100 point audit.
            </p>

            <p>
              We use our 100 point SEO audit to discover the problems and issues
              that are holding your website back from performing better in the
              search engines.
            </p>

            <p>
              When we find problems holding your website back, we present them
              to you with solutions that will help improve your website’s
              performance in the search engines.
            </p>
            <p>
              The goal is to help you get more leads, more customers, and make
              more money for your business.
            </p>

            <h2>What is an SEO Audit?</h2>
            <p>
              An SEO audit is an evaluation of your entire website to see if it
              can appear in the search engines results pages.
            </p>
            <p>Example.</p>
            <p>
              If Google and Bing think your website is good enough to appear in
              their search results for a particular keyword, then they will show
              it in their search results.{' '}
            </p>
            <p>
              What position they show your webpage depends on if they feel that
              it satisfies the searcher’s intent.
            </p>
            <h2>Why is an SEO Audit Important?</h2>
            <p>
              An SEO Audit is important because by performing an SEO audit, you
              can find issues that are affecting your website’s ability to rank
              higher in the search engines.
            </p>
            <p>
              A search engine optimization audit essentially grades your website
              on the best practices for SEO.
            </p>
            <p>
              Using best practices is key to Google&apos;s algorithm, which
              means that the more sites that do things incorrectly (or
              don&apos;t do anything at all), the better your chances of ranking
              higher.{' '}
            </p>
            <p>
              You should always be thinking about ways to improve your content
              and metadata by using these guidelines:
            </p>
            <p>
              Although an SEO audit will only show you the issues affecting your
              website, it will not show you how to fix them.{' '}
            </p>
            <p>We can fix the issues with your website.</p>
            <h2>Benefits of an SEO Audit</h2>
            <ol>
              <li>
                It can help you determine what keywords to rank for and why. If
                you&apos;re going to expand into new markets, focusing on
                ranking for specific keywords is essential and will produce
                better results. Choosing random keywords without knowing what
                people are using or if the keywords are related to your goals is
                a recipe for wasting money.
              </li>
              <li>
                You&apos;ll know where your weaknesses lie so that you can
                improve them! Having an ineffective link building campaign can
                be disastrous for businesses who rely on SEO, as this process
                typically takes longer than many other aspects of running a
                website that aren&apos;t dependent on inbound traffic. By
                checking your standings against competitors&apos; when looking
                at keywords related to your industry, you&apos;ll be able to
                figure out if there&apos;s any way you can work it into future
                plans or whether or not it would just be a waste of time and
                energy.{' '}
              </li>
              <li>
                SEO audits help with the process of content optimization! If you
                intend on having a blog on your website , reviews, forums, or
                any other kind of public content that people can find themselves
                reading, SEO audits are going to provide relevant information
                regarding how well optimized they really are for a particular
                keyword.
              </li>
              <li>
                An SEO audit helps save money! If there are no keywords to
                target that could generate additional traffic, then there&apos;s
                no need to be devoting all of your marketing budget into areas
                that won&apos;t benefit the company.
              </li>
              <li>
                Brand awareness! When it comes down to it, one of the biggest
                issues most companies face in regards to not receiving enough
                inbound traffic is their brand being less recognizable by
                consumers, which makes doing an SEO audit ideal because you get
                a general idea of what sort of keywords are being typed into
                search engines on a regular basis. This data can certainly come
                in handy when trying to figure out how well you&apos;re doing
                compared to others who also sell similar products/services.
              </li>
              <li>
                It helps you understand what your competitors are doing! As
                mentioned before, it&apos;s important to know how well
                you&apos;re doing compared to others and whether or not there is
                any room for improvement on certain aspects of your website that
                will help move things along in the right direction so why not
                look at how they rank on Google? By having this information
                available, you can more easily assess where they&apos;re earning
                their profits from and use that as a way of figuring out how
                much potential traffic is available on your end.
              </li>
              <li>
                It helps identify opportunities! One of the biggest benefits of
                doing an SEO audit is that it can open your eyes to various
                opportunities that you might not have considered before. From an
                equally important standpoint, it also helps control your costs
                by eliminating everything that&apos;s unnecessary or isn&apos;t
                yielding any results making sure you only pay for things that
                are actually producing tangible results.
              </li>
            </ol>
            <h2>What is the SEO Audit Process?</h2>
            <p>
              When performing an SEO Audit, there are different elements to look
              at and look for in your website and webpages.
            </p>
            <p>
              But before we perform the audit, we must set and establish SEO
              benchmarks.
            </p>
            <p>
              A benchmark is a point of reference from which measurements are
              made.
            </p>
            <p>
              Our SEO benchmark will be the present state and stats of your
              website before we perform any SEO, or local SEO services.
            </p>
            <p>At Bowie SEO, we like to measure KPIs like:</p>
            <ol>
              <li>
                Revenue from your organic traffic - how much money your business
                is making from your website.
              </li>
              <li>
                Total organic search traffic - the total amount of website
                visitors.
              </li>
              <li>
                ROI from your SEO investment with us - if your SEO investment is
                paying off.
              </li>
            </ol>
            <p>
              After we record our SEO benchmarks, we perform our SEO audit.{' '}
            </p>
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
              What Should You Do After You get The Results From Your SEO Audit?
            </h2>
            <p>
              After your SEO audit, you should incorporate all necessary changes
              as quickly as possible.
            </p>
            <p>
              Tracking the success of those changes over time will be a great
              indicator of whether you&apos;ve gone far enough or if there are
              still opportunities for improvement.
            </p>
            <p>
              Use this information to continue developing an ongoing checklist
              of tasks that need to happen on a regular basis, e.g., content
              maintenance, getting more backlinks, monitoring website traffic,
              etc.
            </p>
            <p>
              The more detail that goes into this checklist up front, the easier
              it&apos;ll be to use effectively going forward.
            </p>
            <p>
              And don&apos;t hesitate to reach out for expert help if you need
              it.
            </p>
            <h2>We Get Personal with Bowie SEO Audits</h2>
            <p>Why?</p>
            <p>Because I appreciate you.</p>
            <p>I appreciate you for choosing me to do your SEO audit.</p>
            <p>
              I want your business to prosper, and as SEO specialists, I’ll do
              whatever I can do to help you be successful.
            </p>
          </div>
        </section>
        <Ready
          h2="Ready to Get More Traffic and Rank Higher in the Search Engines?"
          p="Fill out the form below to get your SEO Audit."
        />
      </Main>
      <Footer />
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
