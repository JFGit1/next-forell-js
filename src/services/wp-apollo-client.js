import { ApolloClient, InMemoryCache } from '@apollo/client';

const wpApolloClient = new ApolloClient({
	uri: process.env.NEXT_PUBLIC__GRAPHQL_ENDPOINT,
	cache: new InMemoryCache(),
});

export default wpApolloClient;
