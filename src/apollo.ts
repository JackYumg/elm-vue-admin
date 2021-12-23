import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { logErrorMessages } from '@vue/apollo-util'
import { createApolloProvider } from '@vue/apollo-option'

const cache = new InMemoryCache({
    resultCaching:  false
})

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3000/graphql',
});

// Handle errors
const errorLink = onError(error => {
    logErrorMessages(error)
});

export const apolloClient = new ApolloClient({
    cache,
    link: errorLink.concat(httpLink),
});

export const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
  })