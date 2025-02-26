import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {AWS_APPSYNC_API_KEY, AWS_APPSYNC_GRAPHQL_ENDPOINT} from '@env';

const httpLink = createHttpLink({
  uri: AWS_APPSYNC_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      'x-api-key': AWS_APPSYNC_API_KEY,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
