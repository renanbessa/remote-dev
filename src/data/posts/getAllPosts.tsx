import {gql} from '@apollo/client'

/**
 * Get All Posts
 *
 */
export const GetAllPosts = gql`
  query AllPosts {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      edges {
        node {
          id
          date
          title
          slug
        }
      }
    }
  }
`

/**
 * Get All Posts with Slug
 *
 */
export const GetAllPostsWithSlug = gql`
  query AllPostsWithSlug {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`
