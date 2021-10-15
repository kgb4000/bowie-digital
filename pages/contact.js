import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'

import Link from 'next/link'


export default function Contact () {
  return (
    <>
      <Header 
        buttontext="Talk To Us"
        buttonLink="/contact" 
      />
      <HeroBox 
        backgroundHeight="100vh"
        heroText="Contact us"
        subText="We want to hear from you"
      />
      <Main>
        <section className="contact">
          <div className="container">
           
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
