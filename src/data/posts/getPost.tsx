import {gql} from '@apollo/client'
import {SeoFragment} from '../fragments/seo'
import {ImageFragment} from '../fragments/image'
import {PostFragment} from '../fragments/post'

export const GetPost = gql`
  ${PostFragment}
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFragment
      content
    }
  }
  ${SeoFragment}
  ${ImageFragment}
`

export const GET_POST_BY_ID = gql`
  query GET_POST_BY_ID($id: ID!) {
    post(idType: DATABASE_ID, id: $id) {
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
