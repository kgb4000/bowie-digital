import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../logo'
import NavLinks from './navLinks'
import Button from '../../components/button'

const NavBarContainer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  padding: 0 1.2rem;

  position: fixed;
  top: 0px;
  background: #fff;
  width: 100%;
  z-index: 1000;
`

const LeftSection = styled.div`
  display: flex;
`

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
`

const HeaderButton = styled(Button)`
  background-color: #d35400;
  color: #fff;
  border-color: #d35400;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  margin: 0;
  font-size: 16px;
  display: flex;
`

export default function Navbar({ buttonLink, buttonText }) {
  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection> </MiddleSection>
      <RightSection>
        <NavLinks />
        <Link href={buttonLink}>
          <a>
            <HeaderButton>{buttonText}</HeaderButton>
          </a>
        </Link>
      </RightSection>
    </NavBarContainer>
  )
}
