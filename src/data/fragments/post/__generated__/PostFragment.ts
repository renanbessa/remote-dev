/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFragment
// ====================================================

export interface PostFragment_featuredImage_node {
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

export interface PostFragment_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: PostFragment_featuredImage_node | null;
}

export interface PostFragment {
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
  featuredImage: PostFragment_featuredImage | null;
}
