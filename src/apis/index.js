import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient
