import {gql} from '@apollo/client'
import {SeoFragment} from '../fragments/seo'

export const GetJob = gql`
  query GetJob($uri: String) {
    vaga: vagaBy(uri: $uri) {
      id
      title
      slug
      uri
      content
    }
  }
`

export const GET_JOB_BY_ID = gql`
  query GET_JOB_BY_ID($id: ID!) {
    vaga(idType: DATABASE_ID, id: $id) {
      id
      title
      content
      slug
      uri
      seo {
        ...SeoFragment
      }
      status
    }
  }
  ${SeoFragment}
`
