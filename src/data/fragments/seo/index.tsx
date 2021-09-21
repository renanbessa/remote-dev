import {gql} from '@apollo/client'

export const SeoFragment = gql`
  fragment SeoFragment on PostTypeSEO {
    breadcrumbs {
      text
      url
    }
    title
    metaDesc
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphAuthor
    opengraphDescription
    opengraphTitle
    opengraphImage {
      sourceUrl
    }
    opengraphSiteName
    opengraphPublishedTime
    opengraphModifiedTime
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
    }
  }
`
