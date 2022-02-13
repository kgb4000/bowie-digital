import Link from 'next/link'
import styled from 'styled-components'
import {
  NextSeo,
  LocalBusinessJsonLd,
  CorporateContactJsonLd,
  LogoJsonLd,
  SocialProfileJsonLd,
} from 'next-seo'
export default function Footer() {
  return (
    <>
      <footer>
        <LogoJsonLd
          logo="http://bowieseo.com/images/logo.jpg"
          url="http://bowieseo.com"
        />
        <SocialProfileJsonLd
          type="Organization"
          name="Bowie SEO"
          url="http://www.bowieseo.com"
          sameAs={[
            'https://www.facebook.com/bowieseo',
            'https://linkedin.com/in/kester-browne',
          ]}
        />
        <CorporateContactJsonLd
          url="http://bowieseo.com"
          logo="http://bowieseo.com/images/logo.jpg"
          contactPoint={[
            {
              telephone: '+1-240-266-0588',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: ['English'],
            },
          ]}
        />
        <LocalBusinessJsonLd
          type="LocalBusiness"
          name="Bowie SEO"
          description="Bowie SEO is an SEO company in Maryland helping small businesses increase their website traffic, leads, and revenue with SEO. Contact us today!"
          url="https://bowieseo.com"
          telephone="+12402660588"
          address={{
            streetAddress: '4710 Silverbrook Way',
            addressLocality: 'Bowie',
            addressRegion: 'MD',
            postalCode: '20720',
            addressCountry: 'US',
          }}
          geo={{
            latitude: '39.013313',
            longitude: '-76.776924',
          }}
          priceRange={{}}
          images={['https://bowieseo.com/images/bowie-seo-company.jpeg']}
          review={[
            {
              author: 'Max Payne',
              datePublished: '2006-05-04',
              name: 'SEO Audit',
              reviewBody:
                'I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.',
              reviewRating: {
                bestRating: '5',
                worstRating: '1',
                reviewAspect: 'Ambiance',
                ratingValue: '4',
              },
            },
          ]}
          openingHours={[
            {
              opens: '09:00',
              closes: '18:00',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ],
            },
          ]}
        />
        <NextSeo />
        <FooterMain>
          <div className="about-BDM">
            <h3>Bowie SEO</h3>
            <p>
              Bowie SEO is an SEO company in Maryland, specializing in SEO and
              Local SEO. We help local businesses rank higher in the search
              engines, get more website traffic, more leads, and more customers.{' '}
              <a href="tel:12402660588">Call us today!</a>
            </p>
          </div>
          <div className="menu">
            <h3>Menu</h3>
            <nav>
              <ul>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="services">
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="/maryland-seo">
                  <a>SEO</a>
                </Link>
              </li>
              <li>
                <Link href="/local-seo-maryland">
                  <a>Local SEO</a>
                </Link>
              </li>
              <li>
                <Link href="/seo-audit">
                  <a>SEO Audit</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <p>
              Email me: <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>{' '}
            </p>
            <p>
              Call me: <a href="tel:1-240-266-0588">(240) 266-0588</a>
            </p>
            <p>Bowie, Md 20720</p>
            <div className="social">
              <span>
                <a href="#">
                  <i className="im im-instagram"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="hours">
            <h3>Hours</h3>
            <p>
              <span className="day">Monday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Tuesday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Wednesday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Thursday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Friday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Saturday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Sunday: </span>
              <span className="time">Closed</span>
            </p>
          </div>
        </FooterMain>
      </footer>
      <LastFooter>
        Bowie SEO &copy;{new Date().getFullYear()}
        <div className="policy-term">
          <p className="policy">
            <Link href="/terms-of-service">
              <a>Terms of Service</a>
            </Link>
          </p>
          <p className="policy">
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </p>
        </div>
      </LastFooter>
    </>
  )
}

const FooterMain = styled.div`
  ul {
    margin: 0;
  }

  a {
    text-decoration: none;

    &:hover {
      color: #d55e0f;
    }
  }

  p,
  li,
  .contact {
    font-size: 1rem;
  }

  color: #fff;
  padding: 2rem 1.2rem;

  a {
    color: inherit;

    &::hover {
      color: green;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  div {
    margin-bottom: 2rem;

    li {
      list-style-type: none;
      margin: 1rem 0;
    }

    p {
      margin: 1rem 0;
    }
  }

  .about-BDM {
    grid-column: 1 / 6;
  }

  .menu {
    grid-column: 1 / 2;
    grid-row: 2;
  }

  .services {
    grid-column: 2 / 4;
    grid-row: 2;
  }

  .contact {
    grid-column: 4 / 6;
    grid-row: 3;
  }

  .hours {
    grid-column: 1 / 3;
  }

  @media (min-width: 736px) {
    display: grid;
    max-width: 960px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    justify-content: space-around;
    justify-items: start;
    padding: 4rem 2rem;

    .about-BDM,
    .contact,
    .services,
    .hours,
    .menu {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    max-width: 960px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    justify-content: space-around;
    justify-items: start;

    .about-BDM,
    .contact,
    .services,
    .hours,
    .menu {
      margin-bottom: 0;
    }
  }

  .hours {
    width: 320px;
    p {
      display: flex;
      justify-content: space-between;
    }
  }
`

const LastFooter = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  font-weight: 900;

  .policy-term {
    margin-top: 1rem;
  }

  .policy {
    margin: 1rem 0;
    font-size: 0.6rem;
  }
`
