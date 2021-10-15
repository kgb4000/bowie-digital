import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'

import Link from 'next/link'


export default function Videos () {
  return (
    <>
      <Header 
        buttontext="Talk To Us"
        buttonLink="/contact" 
      />
      <HeroBox 
        backgroundHeight="60vh"
        heroText="Videos"
      />
      <Main>
        <section className="contact">
          <div className="container">
           
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

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: rgb(240, 78, 74);
`
