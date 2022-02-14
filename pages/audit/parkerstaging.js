import Link from 'next/link'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'
import Header from '../../components/audit-header'
import Main from '../../components/main'
import HeroBox from '../../components/herobox'

import { NextSeo } from 'next-seo'

export default function LocalSEO() {
  const SEO = {
    title: 'Parker Staging Mini SEO Audit',
    description:
      'We provide SEO services for business in Annapolis Junction, Maryland. Our local SEO services will get your website to the top of the local search results.',
    canonical: 'https://bowieseo.com/audit/parkerstaging',
  }
  return (
    <>
      <NextSeo
        {...SEO}
        noindex={true}
        nofollow={true}
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
      <Header buttontext="Contact me" buttonLink="/contact" />
      <HeroBox />
      <Main>
        <section>
          <div className="solution-container">
            <h3>Parker Staging Mini SEO Audit</h3>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/cR27O8br7mM"
                width="100%"
                height="100%"
              />
            </div>
            <h2>More Questions?</h2>
            <h3>Contact me:</h3>
            <p>Kester Browne</p>
            <p>Phone: (240) 266-0588</p>
            <p>Email: kester@bowieseo.com</p>
          </div>
        </section>
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
