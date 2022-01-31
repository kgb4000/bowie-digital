import Link from 'next/link'
import Header from '../../components/header'
import HeroBox from '../../components/herobox'
import Main from '../../components/main'
import styled from 'styled-components'
import { getPosts } from '../../lib/data'
import { BlogJsonLd, NextSeo } from 'next-seo'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Blog({ data }) {
  const SEO = {
    title: 'Learn how SEO can help your business | Blog | Bowie SEO',
    description:
      'This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization.',
    type: 'website',
    canonical: 'https://bowieseo.com/blog',
    openGraph: {
      title: 'Learn how SEO can help your business | Blog | Bowie SEO',
      description:
        'This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization.',
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Header buttontext="Free SEO Audit" buttonLink="/free-seo-audit" />
      <BlogMain>
        <div className="blog-container">
          <h1>SEO Blog</h1>
          <BlogJsonLd
            url="https://bowieseo.com/blog"
            title="Blog"
            images={[]}
            authorName="Kester Browne"
            description="This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization."
          />
          {data.posts.map((post) => (
            <div key={post.slug}>
              <div className="blog-posts">
                <img src={post.coverImage.url} alt={post.title} />
                <div className="blog-info">
                  <Link href={`/${post.slug}`}>
                    <a>
                      <h2>{post.postTitle}</h2>
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
    </>
  )
}

const BlogMain = styled(Main)`
  margin-top: 5rem;
  .blog-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1.2rem;
    margin-bottom: 4rem;
  }
  h1 {
    text-align: center;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #000;
  }

  a {
    text-decoration: none;
  }


  @media (min-width: 768px) {
    h2 {
    font-size: 1.2rem;
    }
    .blog-posts {
      display: flex;
      margin-bottom: 4rem;
      align-items: center;
      img {
        max-width: 25rem;
        margin-right: 5%;
      }

      p {
        margin: 0;
      }

      img {
        max-width: 50%;
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
        max-width: 25rem;
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
