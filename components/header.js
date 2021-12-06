import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import Button from './button'
import Dropdown from './dropdown'

export default function Header({ buttontext, buttonLink }) {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

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
      <div className="container">
        <Link href="/">
          <a className="logo">Bowie SEO</a>
        </Link>
        <div className="menu-btn" onClick={handleClick}>
          {click ? 'bar' : 'noBar'}
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
              <HeaderButton
                as="a"
                className="header-btn nav-links"
                href={buttonLink}
                onClick={closeMobileMenu}
              >
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
  height: 100px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100rem;
    line-height: 100px;
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
      width: 300px;

    li {
      margin: 0;

      a.textnav{
      padding: 1rem 0;
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
