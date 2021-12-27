import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckwtyfy2c4z5t01yy6qfhf1nx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        title
        slug
        coverImage {
          url
          width
          height
        }
        date
        excerpt
        content {
          json
        }
        author {
          name
          photo {
            url
            width
            height
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckwtyfy2c4z5t01yy6qfhf1nx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPosts($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        date
        slug
        excerpt
        coverImage {
          url
          width
          height
        }
        content {
          json
        }
        author {
          name
          photo {
            url
            height
            width
          }
        }
      }
    }
  `

  const variables = {
    slug: slug,
  }

  return await graphQLClient.request(query, variables)
}

export const getPostsSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckwtyfy2c4z5t01yy6qfhf1nx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}
