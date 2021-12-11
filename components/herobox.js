import Link from 'next/link'
import styled from 'styled-components'
import Button from './button'

export default function HeroBox({
  backgroundHeight,
  heroText,
  subText,
  backgroundImage,
  buttonText,
  buttonLink,
  children,
}) {
  return (
    <Hero backgroundImage={backgroundImage} backgroundHeight={backgroundHeight}>
      <div className="content">
        <h2>{heroText}</h2>
        <p>{subText}</p>
        {buttonText && (
          <Link href={buttonLink}>
            <a>
              <Button>{buttonText} &#8594;</Button>
            </a>
          </Link>
        )}
        {children}
      </div>
    </Hero>
  )
}

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  height: ${(props) => props.backgroundHeight};
  margin-top: -100px;

  h2 {
    font-size: 2.5rem;
  }

  .content {
    max-width: 1000px;
    text-align: center;
    padding: 0 1rem;

    p {
      max-width: 40rem;
      margin: 2rem auto 3rem auto;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 4rem;
    }
    p {
      font-size: 1.4rem;
      margin: 2rem;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 6rem;
    }
  }
`
