/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_POST_BY_ID
// ====================================================

export interface GET_POST_BY_ID_post_seo_breadcrumbs {
  __typename: "SEOPostTypeBreadcrumbs";
  text: string | null;
  url: string | null;
}

export interface GET_POST_BY_ID_post_seo_opengraphImage {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GET_POST_BY_ID_post_seo_twitterImage {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GET_POST_BY_ID_post_seo {
  __typename: "PostTypeSEO";
  breadcrumbs: (GET_POST_BY_ID_post_seo_breadcrumbs | null)[] | null;
  title: string | null;
  metaDesc: string | null;
  metaRobotsNoindex: string | null;
  metaRobotsNofollow: string | null;
  opengraphAuthor: string | null;
  opengraphDescription: string | null;
  opengraphTitle: string | null;
  opengraphImage: GET_POST_BY_ID_post_seo_opengraphImage | null;
  opengraphSiteName: string | null;
  opengraphPublishedTime: string | null;
  opengraphModifiedTime: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: GET_POST_BY_ID_post_seo_twitterImage | null;
}

export interface GET_POST_BY_ID_post {
  __typename: "Post";
  /**
   * The globally unique identifier of the post object.
   */
  id: string;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The content of the post.
   */
  content: string | null;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * The unique resource identifier path
   */
  uri: string | null;
  /**
   * The Yoast SEO data of the post
   */
  seo: GET_POST_BY_ID_post_seo | null;
  /**
   * The current status of the object
   */
  status: string | null;
}

export interface GET_POST_BY_ID {
  /**
   * An object of the post Type. 
   */
  post: GET_POST_BY_ID_post | null;
}

export interface GET_POST_BY_IDVariables {
  id: string;
}
