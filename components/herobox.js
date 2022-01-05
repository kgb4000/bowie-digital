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
  headerImgText,
  headerImg,
}) {
  return (
    <Hero
      backgroundImage={backgroundImage}
      backgroundHeight={backgroundHeight}
      headerImg={headerImg}
      headerImgText={headerImgText}
    >
      <div className="content">
        <div>
          <h1>{heroText}</h1>
          <p>{subText}</p>
          {buttonText && (
            <Link href={buttonLink}>
              <a>
                <Button>{buttonText} &#8594;</Button>
              </a>
            </Link>
          )}
        </div>
        {headerImgText && <img src={headerImg} />}
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
  margin-top: 100px;

  h1 {
    font-size: 2.2rem;
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
    h1 {
      font-size: 3rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.4rem;
      margin: 2rem;
    }
  }
`
