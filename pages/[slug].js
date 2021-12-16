import Link from 'next/link'
import Header from '../components/header'
import HeroBox from '../components/herobox'
import Main from '../components/main'
import styled from 'styled-components'
import Footer from '../components/footer'
import { getPost, getPosts, getPostsSlugs } from '/lib/data'
import { RichText } from '@graphcms/rich-text-react-renderer'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 30, // In seconds
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
  return (
    <>
      <Header buttontext="Talk To Me" buttonLink="tel:1-240-266-0588" />
      <HeroBox backgroundHeight="40rem" heroText={post.title} />
      <div className="container">
        <RichText content={post.content.json} />
      </div>

      <Footer />
    </>
  )
}
