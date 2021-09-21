/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllJobs
// ====================================================

export interface AllJobs_vagas_edges_node {
  __typename: "Vaga";
  /**
   * The globally unique identifier of the vagas object.
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

export interface AllJobs_vagas_edges {
  __typename: "RootQueryToVagaConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: AllJobs_vagas_edges_node | null;
}

export interface AllJobs_vagas {
  __typename: "RootQueryToVagaConnection";
  /**
   * Edges for the RootQueryToVagaConnection connection
   */
  edges: (AllJobs_vagas_edges | null)[] | null;
}

export interface AllJobs {
  /**
   * Connection between the RootQuery type and the Vaga type
   */
  vagas: AllJobs_vagas | null;
}
