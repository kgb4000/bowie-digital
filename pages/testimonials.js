import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Ready from '../components/ready-section'
import Footer from '../components/footer'

import Link from 'next/link'


export default function Testimonials () {
  return (
    <>
      <Header 
        buttontext="Talk To Us"
        buttonLink="/contact" 
      />
      <HeroBox 
        backgroundHeight="60vh"
        heroText="What Our Clients Say"
      />
      <Main>
        <section className="testimonials">
          <div className="container">
           
          </div>
        </section>
        <Ready />
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
