import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'

import { NextSeo } from 'next-seo'

export default function FreeAudit() {
  const SEO = {
    title: 'Free SEO Audit',
    titleTemplate: "%s | Identify Why You're Not Ranking Higher",
    description:
      "Want to find out why your website is not ranking higher in the search engines? Get a Free SEO Audit and we'll tell you why. Call (240) 266-0588 today!",
    canonical: 'https://bowieseo.com/free-seo-audit',
    openGraph: {
      title: "Free SEO Audit | Identify Why You're Not Ranking Higher",
      description:
        "Want to find out why your website is not ranking higher in the search engines? Get a Free SEO Audit and we'll tell you why. Call (240) 266-0588 today!",
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
        heroText="Free SEO Audit"
        subText="Find out what's holding your website back from ranking higher and
              getting more traffic."
      />

      <Main>
        <section className="contact">
          <div className="container">
            <h2>Bowie SEO FREE SEO Audit</h2>
            <p>
              There are a host of reasons why your website is not getting any
              traffic, and why you're not ranking higher in the search engines.
            </p>
            <p>An SEO audit can tell you why.</p>
            <p>An SEO audit will reveal:</p>
            <ul>
              <li></li>
            </ul>
            <p>
              This Free audit will uncover some of the elements that are keeping
              your website from ranking higher, and uncover the problems that
              you must fix to get the results you need.
            </p>
            <p>Fill out the form below and let's get started.</p>
            <form>
              <div className="form-input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
              </div>
              <div className="form-input">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" />
              </div>
              <div className="form-input">
                <label htmlFor="website">Website</label>
                <input type="text" name="website" />
              </div>
              <div className="form-input">
                <label htmlFor="name">Message</label>
                <textarea></textarea>
              </div>
              <SubmitButton>Audit My Website!</SubmitButton>
            </form>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: rgb(240, 78, 74);
`
