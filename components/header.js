import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/button'

export default function Header({ buttontext, buttonLink }) {
  return (
    <Head>
      <div className="container">
        <Link href="/">
          <a className="logo">Bowie Digital Marketing</a>
        </Link>
        <nav>
          <ul className="nav">
            <li>
              <Link href="/services">
                <a className="textnav">Services</a>
              </Link>
            </li>
            <li>
              <HeaderButton as="a" className="header-btn" href={buttonLink}>
                {buttontext}
              </HeaderButton>
            </li>
          </ul>
        </nav>
      </div>
    </Head>
  )
}

const Head = styled.header`
  z-index: 1000;
  height: auto;

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    margin: 0 auto;
    align-items: center;
  }

  .logo {
    display: inline-block;
    font-weight: 700;
    font-size: 1rem;
    color: inherit;

    @media (min-width: 500px) {
      font-size: 1.2rem;
    }
  }

  a.textnav {
    display: none;
  }

  ul.nav {
    margin: 0;
    display: flex;
    align-items: center;

    li {
      list-style-type: none;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 645px) {
    a.textnav {
      display: flex;
    }

    li {
      margin-right: 1rem;
      list-style-type: none;
    }
  }
`

const HeaderButton = styled(Button)`
  background-color: #d35400;
  color: #fff;
  border-color: #d35400;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.6rem;

  @media (min-width: 500px) {
    font-size: 1rem;
  }
`
