import Link from 'next/link'
import styled from 'styled-components'
// import BowieLogo from '../images/logo.png'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoImg = styled.div`
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`

const LogoText = styled.a`
  .logo {
    font-weight: 900;
    font-size: 1.5rem;
    color: #121212;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
  }
`

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImg>{/* <img src={BowieLogo} alt="Bowie SEO logo." /> */}</LogoImg>
      <LogoText>
        <Link href="/">
          <a className="logo">Bowie SEO</a>
        </Link>
      </LogoText>
    </LogoWrapper>
  )
}
