import {gql} from '@apollo/client'

/**
 * Get All Jobs
 *
 */
export const GetAllJobs = gql`
  query AllJobs {
    vagas(first: 1000, where: {orderby: {field: DATE, order: DESC}}) {
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
