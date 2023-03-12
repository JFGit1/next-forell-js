import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC__GRAPHQL_ENDPOINT);

export default function ContentPage({ id }) {
	const fetchPage = async () => {
		return await graphQLClient.request(gql`
         query PageByIdQuery {
            page(id: "${id}", idType: DATABASE_ID) {
               title
               content
            }
         }
      `);
	};

	const { data: contentPage, isLoading, error } = useQuery([`get-page-${id}`], fetchPage, { staleTime: 1000 * 60 });

	return (
		<>
			<div>
				<h1>{contentPage?.page.title}</h1>
				<>{error && <p>Oops... Something went wrong.</p>}</>
				<>{isLoading && <p>Loading...</p>}</>

				<div dangerouslySetInnerHTML={{ __html: contentPage?.page.content }} />
			</div>
		</>
	);
}
