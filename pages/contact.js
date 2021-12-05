import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Button from '../components/button'
import Footer from '../components/footer'

import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Header buttontext="Talk To Me" buttonLink="/contact" />
      <HeroBox
        backgroundHeight="60vh"
        heroText="Contact us"
        subText="We want to hear from you"
      />

      <Main>
        <section className="contact">
          <div className="container">
            <p>
              If you would like to get in touch with us, please feel free to
              reach out.
            </p>
            <p>
              We are happy to answer any questions you have about our SEO
              services and how it can help your business.
            </p>
            <p>You can reach us in the following ways: </p>
            <ul>
              <li>By phone: (240) 266-0588</li>
              <li>By email: info@bowieseo.com </li>
            </ul>
            <p>
              Or fill out the form below and we’ll get back to you as soon as
              possible!
            </p>

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
                <label htmlFor="name">Message</label>
                <textarea></textarea>
              </div>
              <Button>Send</Button>
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
