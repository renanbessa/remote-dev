/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostIdType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: PostBySlug
// ====================================================

export interface PostBySlug_post_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
  /**
   * Alternative text to display when resource is not displayed
   */
  altText: string | null;
}

export interface PostBySlug_post_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: PostBySlug_post_featuredImage_node | null;
}

export interface PostBySlug_post {
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
   * The excerpt of the post.
   */
  excerpt: string | null;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: PostBySlug_post_featuredImage | null;
  /**
   * The content of the post.
   */
  content: string | null;
}

export interface PostBySlug {
  /**
   * An object of the post Type. 
   */
  post: PostBySlug_post | null;
}

export interface PostBySlugVariables {
  id: string;
  idType: PostIdType;
}
