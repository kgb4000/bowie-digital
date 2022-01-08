import styled from 'styled-components'
import { getPost, getPosts } from '../lib/data'

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

export default function Bio({ authorImg, authorBio }) {
  return (
    <>
      <BioSection>
        <div className="container">
          <img src={authorImg} />
          <p>{authorBio}</p>
        </div>
      </BioSection>
    </>
  )
}

const BioSection = styled.div`
  max-width: 700px;
  padding: 1rem 0;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 5px;
  background: #f6f9fc;
  color: #101010;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  img {
    width: 4rem;
    border: 4px solid #d35400;
    border-radius: 50%;
  }

  p {
    border-top: 2px solid #d35400;
    padding-top: 1rem;
  }
`
