import {ApolloClient, InMemoryCache} from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri: 'https://fintros-frontend-assignment.herokuapp.com/graphql',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					retrievePageArticles: {
						keyArgs: false,
						merge(existing = [], incoming) {
							return [...existing, ...incoming]
						}
					}
				}
			}
		}
	})
})
