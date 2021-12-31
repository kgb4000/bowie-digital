import Link from 'next/link'
import Header from '../components/header'
import BlogHeroBox from '../components/blog-header'
import Main from '../components/main'
import styled from 'styled-components'
import Footer from '../components/footer'
import { getPost, getPosts, getPostsSlugs } from '/lib/data'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import Bio from '../components/author-bio'

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

export const getStaticPaths = async () => {
  const slugsRes = await getPostsSlugs()
  const slugs = slugsRes.posts
  console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export default function Articles({ post }) {
  const SEO = {
    title: post.title,
    description: post.excerpt,
    url: `https://bowieseo.com/${post.slug}`,
    canonical: `https://bowieseo.com/${post.slug}`,
    type: 'article',
    openGraph: {
      type: 'article',
      description: post.excerpt,
      article: {
        publishedTime: post.date,
        authors: [`https://www.example.com/authors/@${post.author.name}`],
      },
      images: [
        {
          url: post.coverImage.url,
          width: post.coverImage.width,
          height: post.coverImage.height,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      url: `https://bowieseo.com/${post.slug}`,
      site_name: 'Bowie SEO',
    },
  }

  return (
    <>
      <ArticleJsonLd
        url={`https://bowieseo.com/${post.slug}`}
        title={post.title}
        images={[post.coverImage.url]}
        datePublished={post.date}
        authorName={[post.author.name]}
        authorImg={post.author.photo.url}
        description={post.excerpt}
      />

      <NextSeo {...SEO} />
      <Header buttontext="Contact me" buttonLink="/contact" />
      <BlogHeroBox
        backgroundHeight="60rem"
        coverImage={post.coverImage.url}
        heroText={post.title}
        date={new Date(post.date).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
        author={post.author.name}
        shareLink={`https://bowieseo.com/${post.slug}`}
      />
      <Main>
        <div className="container">
          <RichText content={post.content.json} />
          <Bio authorImg={post.author.photo.url} authorBio={post.author.bio} />
        </div>
      </Main>
      <Footer />
    </>
  )
}
