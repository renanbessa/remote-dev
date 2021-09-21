/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SeoFragment
// ====================================================

export interface SeoFragment_breadcrumbs {
  __typename: "SEOPostTypeBreadcrumbs";
  text: string | null;
  url: string | null;
}

export interface SeoFragment_opengraphImage {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface SeoFragment_twitterImage {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface SeoFragment {
  __typename: "PostTypeSEO";
  breadcrumbs: (SeoFragment_breadcrumbs | null)[] | null;
  title: string | null;
  metaDesc: string | null;
  metaRobotsNoindex: string | null;
  metaRobotsNofollow: string | null;
  opengraphAuthor: string | null;
  opengraphDescription: string | null;
  opengraphTitle: string | null;
  opengraphImage: SeoFragment_opengraphImage | null;
  opengraphSiteName: string | null;
  opengraphPublishedTime: string | null;
  opengraphModifiedTime: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: SeoFragment_twitterImage | null;
}
