import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'

import Link from 'next/link'


export default function OurWork () {
  return (
    <>
      <Header 
        buttontext="Talk To Us"
        buttonLink="/contact" 
      />
      <HeroBox 
        backgroundHeight="100vh"
        heroText="Our Work"
        subText="We build websites for local businesses that get traffic and convert"
        buttonText="Book a Call"
        buttonLink="/contact"
      />
      <Main>
        <section className="contact">
          <div className="container">
            <h2 className="title">Recent Work</h2>
              <Work>
                <div>
                  <h3>Maldof Painting</h3>
                  <p>A Painting Company</p>
                </div>
                <div>
                  <h3>Geronimo Construction</h3>
                  <p>A Home Renovation Company</p>
                </div>
                <div>
                  <h3>Stanton Pools</h3>
                  <p>A Pool Building Company</p>
                </div>
                <div>
                  <h3>Major Accounting LLC</h3>
                  <p>A Painting Company</p>
                </div>
                <div>
                  <h3>Geronimo Construction</h3>
                  <p>A Home Renovation Company</p>
                </div>
                <div>
                  <h3>Stanton Pools</h3>
                  <p>A Pool Building Company</p>
                </div>
                <div>
                  <h3>Maldof Painting</h3>
                  <p>A Painting Company</p>
                </div>
                <div>
                  <h3>Geronimo Construction</h3>
                  <p>A Home Renovation Company</p>
                </div>
                <div>
                  <h3>Stanton Pools</h3>
                  <p>A Pool Building Company</p>
                </div>
              </Work>
              <div className="btn">
                <Button>Schedule a Call &#8594;</Button>
            </div>
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

const Work = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    width: 300px;
    height: 300px;
    padding: 1.5rem;
    text-align: center;
    background-color: #dfe6e9;

    h3 {
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 720px) {

    display: grid;
    max-width: 1140px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    div {
      width: 100%;
    }
    
  }
  
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: rgb(240, 78, 74);
`
