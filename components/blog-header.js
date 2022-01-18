import styled from 'styled-components'
import { ShareBtn } from './share-btn'

export default function BlogHeroBox({
  backgroundHeight,
  heroText,
  author,
  coverImage,
  headerImgText,
  headerImg,
  date,
  shareLink,
}) {
  return (
    <Hero
      coverImage={coverImage}
      backgroundHeight={backgroundHeight}
      headerImg={headerImg}
      headerImgText={headerImgText}
    >
      <div className="content">
        <div>
          <h1>{heroText}</h1>
          <img src={coverImage} alt={heroText} className="show" />
          <p>
            <span>{date}</span>, <span>by {author}</span>
          </p>
        </div>
        <ShareBtn shareLink={shareLink} />
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
  ${'' /* height: ${(props) => props.backgroundHeight}; */}
  margin-top: 100px;
  margin-bottom: 2rem;
  h1 {
    font-size: 1.6rem;
  }

  .content {
    max-width: 800px;
    text-align: center;
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`
