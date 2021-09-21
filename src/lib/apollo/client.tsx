import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'

import {removeLastTrailingSlash} from '@utils/removeLastTrailingSlash'

const cache = new InMemoryCache()

/**
 * The credentials: 'include' allows cookies to be automatically sent
 * along with the request 'include' because backend is on another domain.
 *
 * @see https://www.apollographql.com/docs/react/networking/authentication/#cookie
 */
const link = createHttpLink({
  uri: removeLastTrailingSlash(
    `${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}`
  ),
})

const client = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
})

export default client
