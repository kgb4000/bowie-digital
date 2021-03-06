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
  altText,
  backgroundPosition,
}) {
  return (
    <Hero
      backgroundImage={backgroundImage}
      backgroundPosition={backgroundPosition}
      backgroundHeight={backgroundHeight}
      headerImg={headerImg}
      headerImgText={headerImgText}
    >
      <span role="img" aria-label={altText}></span>
      <div className="content">
        <div>
          <h1>{heroText}</h1>
          {subText && <p>{subText}</p>}
          {buttonText && (
            <Link href={buttonLink}>
              <a>
                <Button>{buttonText}</Button>
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
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.42),
      rgba(255, 82, 0, 0.7)
    ),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  height: ${(props) => props.backgroundHeight};
  margin-bottom: 2rem;
  background-position: ${(props) => props.backgroundPosition};

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  .content {
    max-width: 95%;
    text-align: center;
    padding: 0 0.5rem;
    color: #fff;

    p {
      max-width: 40rem;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 768px) {
    .content {
      width: 80%;
    }
    h1 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.4rem;
      margin: 2rem;
    }
  }
`
