import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  fetch: (uri, options) => {
    const headers = {
      Authorization: 'Bearer ' + import.meta.env.VITE_APP_PASS,
    }
    options.headers = headers
    return fetch(uri, options)
  },
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient
