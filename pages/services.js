import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'

import Link from 'next/link'


export default function Sevices () {
  return (
    <>
      <Header 
        buttontext="Talk To Us"
        buttonLink="/contact" 
      />
      <HeroBox 
        backgroundHeight="100vh"
        heroText="Digital Marketing Services"
        buttonLink="/contact"
      />
      <Main>
        <section className="contact">
          <div className="container">
          <Solutions>
              <div className="solutions">
                <div className="solution-box">
                  <h3>Local SEO Services </h3>
                  <p>Rank higher in the Google Map Pack and increase your online presence to get in front of more consumers actively searching for your products or services.</p>
                  <Link href="/services/local-seo-services">
                    <a className="solution-link">Learn more &rsaquo;</a>
                  </Link>
                </div>
                <div className="solution-box">
                  <h3>Reputation Management</h3>
                  <p>Get more 5 star reviews on your Google My Business Page and build more credability with customers so that they see your business as the best choice.</p>
                  <Link href="/services/reputation-management">
                    <a className="solution-link">Learn more &rsaquo;</a>
                  </Link>
                </div>
              </div>
              <div className="solutions">
                <div className="solution-box">
                  <h3>Mobile Web Design</h3>
                  <p>Get a website that will convert visitors into customers and make you look more credible, and give consumers the answers they are looking for.</p>
                  <Link href="/services/web-design">
                    <a className="solution-link">Learn more &rsaquo;</a>
                  </Link>
                </div>
                <div className="solution-box">
                  <h3>Paid Advertising</h3>
                  <p>Promote your products and services to consumers searching for exactly what your business offers and promote your brand, products and services at the same time.</p>
                  <Link href="/services/paid-advertising">
                    <a className="solution-link">Learn more &rsaquo;</a>
                  </Link>
                </div>
              </div>
            </Solutions>
          </div>
        </section>
        
        <section className="ready-section">
          <div className="container">
            <h2 className="title">Ready To Boost Your Marketing And Make More Money?</h2>
            <p className="subtext"> We look forward to meeting you and learning how we can make your online marketing work for your business!</p>
            <form>
              <div className="form-data">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="form-data">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="form-data">
                <label>Phone</label>
                <input type="text" />
              </div>
              <div className="form-data">
                <label>What services are you interested in? (optional)</label>
                <textarea></textarea>
              </div>
              <div className="form-data">
                <label>Your message (optional)</label>
                <textarea></textarea>
              </div>
              <SubmitButton>Let's Work</SubmitButton>
            </form>
          </div>
        </section>
        </Main>
        <Footer />
    </>
  )
}

const Solutions = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  .solution-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: auto;
    padding: 1.5rem;
    margin-bottom: 2rem;
    background-color: #fff;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
    }

    Link {
      display: block;
    }

    .solution-link {
      display: inline-block;
      padding: 0.8rem;
      border: 1px solid #000;
      width: 9rem;
      text-align: center;
    }
  }

  @media (min-width: 600px) {

    display: grid;
    max-width: 1140px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .solution-box {
      justify-items: center;
      max-width: 100%;
      height: 300px;
      margin-bottom: 20px;
      
      p {
        font-size: 1rem;
      }
    }
    
}
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: rgb(240, 78, 74);
`
