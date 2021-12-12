import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import Button from './button'
import Dropdown from './dropdown'

export default function Header({ buttontext, buttonLink }) {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const Bar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
    </svg>
  )

  const noBar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    </svg>
  )

  const closeMobileMenu = () => {
    setClick(false)
  }

  const handleClick = () => {
    setClick(!click)
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 460) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 460) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <Head>
      <div className="header-container">
        <Link href="/">
          <a className="logo">Bowie SEO</a>
        </Link>
        <div className="menu-btn" onClick={handleClick}>
          {click ? noBar : Bar}
        </div>

        <nav className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav">
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link href="#" className="nav-links" onClick={closeMobileMenu}>
                <a className="textnav">Services</a>
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="textnav">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={buttonLink}>
                <a>
                  {' '}
                  <HeaderButton
                    className="header-btn nav-links"
                    onClick={closeMobileMenu}
                  >
                    {buttontext}
                  </HeaderButton>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Head>
  )
}

const Head = styled.header`
  z-index: 1000;
  height: 70px;

  .header-container {
    padding: 1rem 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .logo {
    display: inline-block;
    font-weight: 900;
    font-size: 1.5rem;
    color: inherit;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
  }

  nav {
    display: none;

    li {
      list-style-type: none;
    }
  }


  @media (min-width: 768px) {

    div.menu-btn {
      display: none;
    }

    nav {
      display: block;
    } 
    ul.nav {
      display: flex;
      justify-content: space-between;
      width: 500px;

    li {
      margin: 0 1rem;

      a.textnav{
      padding: 16px 10px;
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
