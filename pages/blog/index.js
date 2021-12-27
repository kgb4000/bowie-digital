import Link from 'next/link'
import Header from '../../components/header'
import HeroBox from '../../components/herobox'
import Main from '../../components/main'
import styled from 'styled-components'
import Footer from '../../components/footer'
import { getPosts } from '../../lib/data'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Blog({ data }) {
  return (
    <>
      <Header buttontext="Talk To Me" buttonLink="/contact" />
      <BlogHeroBox backgroundHeight="6rem" heroText="Advice" />
      <BlogMain>
        <div className="blog-container">
          {data.posts.map((post) => (
            <div key={post.slug}>
              <div className="blog-posts">
                <img src={post.coverImage.url} alt={post.title} />
                <div className="blog-info">
                  <Link href={`/${post.slug}`}>
                    <a>
                      <h2>{post.title}</h2>
                    </a>
                  </Link>
                  <Link href={`/${post.slug}`}>
                    <a>Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogMain>
      <Footer />
    </>
  )
}

const BlogHeroBox = styled(HeroBox)`
  margin-top: 6rem;
`

const BlogMain = styled(Main)`
  .blog-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1.2rem;
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #000;
  }


  @media (min-width: 768px) {
    .blog-posts {
      display: flex;
      margin-bottom: 4rem;
      align-items: center;
      img {
        max-width: 30rem;
        margin-right: 5%;
      }

      p {
        margin: 0;
      }

      img {
        max-width: 45%;
        margin: 0;
        margin-right: 5%;
      }

      
    }
    @media (min-width: 1024px) {
    .blog-posts {
      display: flex;
      margin-bottom: 4rem;
      align-items: center;
      img {
        max-width: 30rem;
        margin-right: 5%;
      }

      p {
        margin: 0;
      }

      img {
        max-width: 45%;
        margin: 0;
        margin-right: 5%;
      }

    }
  }
`
