import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  name: 'graphql-pokemon-client',
  link: new HttpLink({ uri: "https://beta.pokeapi.co/graphql/v1beta", fetch})
});

export default client;
