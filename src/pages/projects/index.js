import Head from '../../components/Head';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import wpApolloClient from '../../services/wp-apollo-client';
import { PROJECT_LIST } from '../../queries/pages';

export default function AboutUs({ dataProjects }) {
	console.log('load projects');
	//const dataProjects = projectList?.projectsACM.nodes;

	return (
		<>
			<Head title='Projects | Forell/Elsesser Engineers, Inc.' description='This is the Projects page' />

			<Layout>
				<main>
					<h1>Projects</h1>
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
				</main>
				<Footer />
			</Layout>
		</>
	);
}

export async function getStaticProps(context) {
	const { data } = await wpApolloClient.query({
		query: PROJECT_LIST,
	});

	return {
		props: {
			dataProjects: data.projectsACM.nodes,
		},
	};
}
