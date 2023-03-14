import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

import { ProjectsWrapper } from './styles.js';

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC__GRAPHQL_ENDPOINT);

const fetchProducts = async () => {
	return await graphQLClient.request(gql`
		{
			projectsACM(first: 10) {
				nodes {
					...ProjectACMFields
				}
			}
		}

		fragment ProjectACMFields on ProjectACM {
			title
			subtitle
			body
			images {
				mediaItemId
				mediaItemUrl
				altText
				caption
				description
				mediaDetails {
					height
					width
					sizes {
						file
						fileSize
						height
						mimeType
						name
						sourceUrl
						width
					}
				}
			}
			team {
				edges {
					node {
						id
						email
						name
					}
				}
			}
		}
	`);
};
console.log(fetchProducts);

export function ProjectsList() {
	const { data: projects, isLoading, error } = useQuery(['get-products'], fetchProducts, { staleTime: 1000 * 60 });
	const dataProjects = projects?.projectsACM.nodes;

	return (
		<ProjectsWrapper>
			<>{error && <p>Oops... Something went wrong.</p>}</>
			<>{isLoading && <p>Loading...</p>}</>
			<ul className='projects-list-items'>
				{dataProjects?.map(productItem => {
					return (
						<li key={productItem?.title}>
							<strong>{productItem?.title}</strong>
							<p>{productItem?.subtitle}</p>
							<ul className='projects-list-team'>
								{productItem?.team.edges.map(sub => (
									<li key={sub.node.id}>
										<p>
											<strong>{sub.node.name}</strong>
											<br />
											<a href={`mailto:` + sub.node.email}>{sub.node.email}</a>
										</p>
									</li>
								))}
							</ul>
						</li>
					);
				})}
			</ul>
		</ProjectsWrapper>
	);
}
