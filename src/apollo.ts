import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { logErrorMessages } from '@vue/apollo-util'
import { createApolloProvider } from '@vue/apollo-option'
import { reactive } from 'vue-demi';

const cache = new InMemoryCache({
    resultCaching: false
});

const header = {
    Authorization: ''
}

const newHeaders = new Proxy(header, {
    get: (target: any, key: any) => {
        if (key === 'Authorization') {
            return `Bearer ${localStorage.getItem('wym_jwt')}`;
        } else if (key in target) {
            return target[key];
        }
    }
})

const linkOption = {
    // You should use an absolute URL here
    uri: 'http://localhost:3000/graphql',
    headers: newHeaders
};


export const linkReOption = reactive(linkOption);

// HTTP connection to the API
const httpLink = createHttpLink(linkReOption);

// Handle errors
const errorLink = onError(error => {
    logErrorMessages(error)
});

export const apolloClient = new ApolloClient({
    cache,
    link: errorLink.concat(httpLink)
});

export const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})