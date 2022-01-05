import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import Dropdown from '../dropdown'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 70px;
  list-style-type: none;
`

const LinkItem = styled.li`
  display: flex;
  height: 70px;
  padding: 0 1rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  margin-right: 1rem;
  font-weight: 500;
  font-size: 18px;

  ${
    '' /* &:hover {
    border-bottom: 2px solid #333;
  } */
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-weight: 700;
`

export default function NavLinks() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
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

  const closeMobileMenu = () => {
    setClick(false)
  }

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <StyledLink href="#" className="nav-links" onClick={closeMobileMenu}>
            <a>Services</a>
          </StyledLink>
          {dropdown && <Dropdown />}
        </LinkItem>
        <LinkItem
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <StyledLink href="#" className="nav-links" onClick={closeMobileMenu}>
            <a>Blog</a>
          </StyledLink>
        </LinkItem>
        {/* <LinkItem className="nav-item">
          <StyledLink href="/maryland-seo" className="nav-links">
            <a>SEO</a>
          </StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink href="#" className="nav-links">
            <a>Local SEO</a>
          </StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink href="#" className="nav-links">
            <a>SEO Audit</a>
          </StyledLink>
        </LinkItem> */}
      </LinksWrapper>
    </NavLinksContainer>
  )
}
