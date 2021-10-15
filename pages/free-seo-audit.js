import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import ReactPlayer from 'react-player/youtube'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'

import { NextSeo } from 'next-seo'

const FreeReport = () => {
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
    title: 'Free Website And SEO Audit',
    titleTemplate: '%s | Bowie Digital Marketing',
    description:
      'Get your Free Website And SEO Audit and see what you can do to get more traffic to your website. A $999 value. Click here to get started.',
    canonical: 'https://bowiedigitalmarketing.com/free-website-and-seo-audit',
    openGraph: {
      title: 'Digital Marketing Agency in Bowie | Bowie Digital Marketing',
      description:
        'Get your Free Website And SEO Audit and see what you can do to get more traffic to your website. A $999 value. Click here to get started.',
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
      <Header buttontext="Talk to us" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="80vh"
        heroText="Get Your FREE SEO Audit Today"
        subText="Discover What's Holding Your Website Back From Rank Higher And Stopping You From Getting More Customers!"
      />
      <Main>
        <section>
          <div className="container">
            <h2>FREE SEO Audit</h2>
            <p>
              We just don't do the ordinary website and SEO audit, we use the
              latest tools and techniques to get an in-depth study of your
              website. We'll give you a detailed analysis of your site, and also
              steps you can take to help your website rank higher
            </p>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>

            <p>
              We get personal with these audits, because we want our customers
              to rank higher and succeed.
            </p>

            <p>
              Our client didn't have to choose us for their local SEO services,
              so we go all out for them to show our apprciation.
            </p>

            <p>
              Fill out the form below to submit your information to get your
              Free Website analysis and SEO report.
            </p>
            <Form onSubmit={handleOnSubmit}>
              <label htmlFor="firstName">First name*</label>
              <input
                id="firstName"
                type="firstName"
                onChange={handleOnChange}
                required
                value={inputs.firstName}
              />
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                type="phone"
                onChange={handleOnChange}
                required
                value={inputs.phone}
              />
              <label htmlFor="website">Website *</label>
              <input
                id="website"
                type="website"
                onChange={handleOnChange}
                required
                value={inputs.website}
              />
              <SubmitButton
                type="submit"
                disabled={status.submitting || isEnabled}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'I Want More Website Traffic'
                    : 'Submitted'
                  : 'Submitting...'}
              </SubmitButton>
            </Form>
          </div>
        </section>
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

export default FreeReport
