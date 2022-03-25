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
          <a className="logo">Kester Browne</a>
        </Link>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href={buttonLink} target="_blank">
                <HeaderButton
                  className="header-btn nav-links"
                  onClick={closeMobileMenu}
                >
                  {buttontext}
                </HeaderButton>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Head>
  )
}

const Head = styled.header`
  position: fixed;
  top: 0px;
  background: #fff;
  width: 100%;
  z-index: 1000;

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    color: #ff5200
  }

  .header-container {
    padding: 0.5rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .logo {
    display: inline-block;
    font-weight: 600;
    font-size: 1rem;
    color: inherit;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
  }

  .logo:hover {
    color: inherit;
  }


  li {
    list-style-type: none;
    margin-bottom: 0;
  }


  @media (min-width: 768px) {


    nav {
      display: block;
    } 
    ul.nav {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

    li {
      a.textnav {
      padding: 30px 10px;
      margin-bottom: 0;
      font-weight: 500;
    }
  }
`

const HeaderButton = styled(Button)`
  background-color: #ff5200;
  color: #fff;
  border-color: #ff5200;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.5rem;
  margin: 0;

  &:hover {
    background-color: white;
    color: #d35400;
  }

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`
