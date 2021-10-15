import Link from 'next/link'
import styled from 'styled-components'

export default function Footer() {
  return (
    <>
      <footer>
        <FooterMain>
          <div className="about-BDM">
            <h3>Bowie Digital Marketing</h3>
            <p>
              Bowie Digital Marketing is an SEO agency in Maryland specializing
              in SEO and Local SEO. We help your local business rank higher in
              the Google Map Pack to get more website traffic, more leads, build
              your brand, and make more money.
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
                <Link href="/local-seo">
                  <a>Local SEO</a>
                </Link>
              </li>
              <li>
                <Link href="/free-seo-audit">
                  <a>FREE SEO Audit</a>
                </Link>
              </li>
            </ul>
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
          <div className="contact">
            <h3>Contact</h3>
            <p>
              <a href="mailto:kester@bowiedigitalmarketing.com">
                Email Us Today
              </a>{' '}
            </p>
            <p>
              Call us: <a href="tel:1-240-226-0588">(240) 226-0588</a>
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
        </FooterMain>
      </footer>
      <LastFooter>
        Bowie Digital Marketing &copy;{new Date().getFullYear()}
      </LastFooter>
    </>
  )
}

const FooterMain = styled.div`
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
    grid-column: 1 / 3;
  }

  .hours {
    grid-column: 1 / 3;
  }

  .services {
    grid-column: 4 / 6;
  }

  .contact {
    grid-column: 3 / 5;
  }

  @media (min-width: 736px) {
    display: grid;
    max-width: 1140px;
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
    max-width: 1140px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
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
    width: 280px;
    p {
      display: flex;
      justify-content: space-between;
    }
  }
`

const LastFooter = styled.div`
  text-align: center;
  padding: 1.5rem 0;
`
