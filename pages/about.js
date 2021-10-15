import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'
import Ready from '../components/ready-section'
import ReactPlayer from 'react-player/youtube'

import { NextSeo } from 'next-seo'

import Link from 'next/link'


export default function About () {
  const SEO = {
    title: "About us",
    titleTemplate: "%s | Bowie Digital Marketing",
    description: "Want More Customers For Your Local Business? We Specialize In Local SEO, PCC Ads, Web Design And Social Media Ads. Call Us Today.",
    openGraph: {
      title: "About us | Bowie Digital Marketing",
      description: "Want More Customers For Your Local Business? We Specialize In Local SEO, Paid Ads, Web Design And Social Media Ads. Call Us Today."
    }
  }
  return (
    <>
      <NextSeo {... SEO}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      }} />
      <Header 
        buttontext="Talk To Us"
        buttonLink="/contact" 
      />
      <HeroBox 
        backgroundHeight="60vh"
        heroText="About Us"
        subText="A Digital Marketing Agency in Bowie"
        buttonText="Book a Call"
        buttonLink="/contact"
      />
      <Main>
        <section className="about">
          <div className="container">
            <h2>A Digital Marketing Agency</h2>
           
            <div className="video-container">
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                  width='100%'
                  height='100%'
                />
              </div>
            </div>

            <p>We are Bowie Digital Marketing. We serve local business owners that want to see more traffic coming from their website, and also want to rank higher on Google Maps.</p>
            
            <p>Have you ever searched for a product or service, let's say a plumber, on your smartphone.</p>

            <p>The search comes up.</p>

            <p>First are the paid ads on the top, the local listings second, which is called the Map Pack, and the organic search on the bottom.</p>

            <p>You look at the first 3 lisitings at the top of the Map Pack. They all have great reviews.</p>

            <p>You want to see more so you click on the see-more-results button to see more local business.</p>


            <p>At Bowie Digital Marketing, we help local business get to the first page of the Map Pack.</p>

          

            <p><b>How many customers are finding your business on Google?</b></p>
           
          <div className="btn">
            <Link href="/services/free-website-and-seo-audit">
              <a>
                <Button>Free Site Analysis & SEO Report &#8594;</Button>
              </a>
            </Link>
          </div>
          </div>
        </section>
        <section className="our-mission">
          <div className="container">
            <h2>Our Mission</h2>

            <p>We understand how hard and frustrating it can be to run your business and figure out digital marketing. Digital marketing takes a lot of time, is an ongoing process, and the rules are constantly changing.</p>

            <p>Start with our <Link href="/services/free-website-and-seo-audit"><a>Free Website and SEO audit</a></Link> to show you what your website has going right, and what we need to improve to get your website ranking higher and getting more traffic.</p>
            <div className="btn">
              <Link href="/services/free-website-and-seo-audit">
                <a>
                  <Button>Book a 15 min call &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="why-us">
          <div className="container">
            <h2>Why choose us</h2>

            <p>We understand how hard and frustrating it can be to run your business and figure out digital marketing. Digital marketing takes a lot of time, is an ongoing process, and the rules are constantly changing.</p>

            <p>These are the reasons we started our digital marketing agency. We want to partner with business owners and help them succeed with online marketing.</p>

            <p>You have a long list of things to worry about running your business, and you don't need to add digital marketing to that list.</p>

            <p>We've seen business owners try online marketing themselves, only to waste time, waste money, and resources trying to figure things out their own. Most of the time, they waste money trying different things hoping they work.</p>

            <p>We are here to help. We work directly with business owners and show them exactly what they need to do to rank their website on the first page and get more customers.</p>

            <p>Start with our <Link href="/services/free-website-and-seo-audit"><a>Free Website and SEO audit</a></Link> to show you what your website has going right, and what we need to improve to get your website ranking higher and getting more traffic.</p>
            <div className="btn">
              <Link href="/services/free-website-and-seo-audit">
                <a>
                  <Button>Free Site Analysis & SEO Report &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <Ready />
      </Main>
      <Footer />
    </>
  )
}
