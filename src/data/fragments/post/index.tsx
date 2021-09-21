import {gql} from '@apollo/client'

export const PostFragment = gql`
  fragment PostFragment on Post {
    id
    title
    excerpt
    slug
    featuredImage {
      node {
        ...ImageFragment
      }
    }
  }
`
