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
      <HeroBox backgroundHeight="10vh" />
      <BlogMain>
        <div className="container">
          <h1>Free Advice</h1>
          {data.posts.map((post) => (
            <div key={post.slug}>
              <div className="blog-posts">
                <img src={post.coverImage.url} alt={post.title} />
                <div className="blog-info">
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <h3>{post.title}</h3>
                    </a>
                  </Link>

                  <Link href={`/blog/${post.slug}`}>
                    <a className="read-more">Read more &#8594;</a>
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

const BlogMain = styled(Main)`
  .blog-posts {
    max-width: 100%;
    margin-bottom: 4rem;
    img {
      width: 100%;
      height: auto;
      margin-right: 5%;
    }

    p {
      margin: 0;
    }

    .blog-info {
      color: #000;

      h3 {
        margin: 0.5rem 0;
      }

      .read-more {
        color: #111;
      }
    }

    .author-info {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      img {
        max-width: 2.5rem;
        height: auto;
      }
    }

    @media (min-width: 768px) {
      display: flex;

      img {
        max-width: 45%;
        margin: 0;
        margin-right: 5%;
      }

      .blog-info {
        h3 {
          margin: 0.5rem 0;
          color: #111;
        }
      }
    }
  }
`
