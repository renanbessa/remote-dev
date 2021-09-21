/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPosts
// ====================================================

export interface AllPosts_posts_edges_node {
  __typename: "Post";
  /**
   * The globally unique identifier of the post object.
   */
  id: string;
  /**
   * Post publishing date.
   */
  date: string | null;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
}

export interface AllPosts_posts_edges {
  __typename: "RootQueryToPostConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: AllPosts_posts_edges_node | null;
}

export interface AllPosts_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * Edges for the RootQueryToPostConnection connection
   */
  edges: (AllPosts_posts_edges | null)[] | null;
}

export interface AllPosts {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: AllPosts_posts | null;
}
