import {gql} from '@apollo/client'

export const GetJob = gql`
  query GetJob($uri: String) {
    vaga: vagaBy(uri: $uri) {
      id
      title
      slug
      uri
      content(format: RENDERED)
    }
  }
`
