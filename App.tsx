import {ApolloProvider} from '@apollo/client';
import React from 'react';
import MainNavigation from '@navigations/mainNavigation';
import {client} from './src/services/api-Client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainNavigation />
    </ApolloProvider>
  );
}
