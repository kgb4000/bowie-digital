import styled from 'styled-components'
import { getPost, getPosts } from '../lib/data'
import { ShareBtn } from './share-btn'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
  }
}

export default function Bio({ authorImg, authorBio, shareLink }) {
  return (
    <>
      <BioSection>
        <div className="solution-container">
          <img src={authorImg} />
          <p>{authorBio}</p>
        </div>
      </BioSection>
    </>
  )
}

const BioSection = styled.div`
  max-width: 960px;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: 5px;
  background: #f6f9fc;
  color: #101010;

  img {
    width: 3.5rem;
    border: 4px solid #d35400;
    border-radius: 50%;
  }

  p {
    border-top: 2px solid #d35400;
    padding-top: 1rem;
    font-size: 0.8rem;
  }
`
