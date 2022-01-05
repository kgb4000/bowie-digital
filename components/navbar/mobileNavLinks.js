import Link from 'next/link'
import styled from 'styled-components'
import menuToggle from './menuToggle'
import MenuBar from './menuToggle'
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
  height: 100%;
  list-style-type: none;
  backgroung-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`

const LinkItem = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  margin-right: 1rem;

  &:hover {
    border-bottom: 2px solid #333;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

export default function NavLinks() {
  const [isOpen, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  return (
    <NavLinksContainer>
      <MenuBar isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <StyledLink
              href="#"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Services</a>
              {dropdown && <Dropdown />}
            </StyledLink>
          </LinkItem>
        </LinksWrapper>
      )}
    </NavLinksContainer>
  )
}
