import Seo from '../../components/Seo';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import Link from 'next/link';
import wpApolloClient from '../../services/wp-apollo-client';
import { ALL_PROJECTS_CATEGORY } from '../../queries/pages';

export default function AboutUs({ AllProjectsCategories }) {
	console.log('load projects');
	console.log('AllProjectsCategories:', AllProjectsCategories);

	return (
		<>
			<Seo title='Projects | Forell/Elsesser Engineers, Inc.' description='This is the Projects page' />

			<Layout>
				<main>
					<h1>Projects</h1>
					<ul className='projects-list-items'>
						{AllProjectsCategories?.map(productItem => {
							return (
								<li key={productItem?.slug}>
									<Link href={`/projects/category/${productItem?.slug}`} scroll={false}>
										<strong>{productItem?.name}</strong>
									</Link>

									{/* <ul className='projects-list-team'>
										{productItem?.projTeam.nodes.map(sub => (
											<li key={sub.slug}>
												<p>
													<strong>{sub.title}</strong> - <i>{sub.uri}</i>
													<br />
													<span>{sub.staffCategories.nodes[0].name}</span>
												</p>
											</li>
										))}
									</ul> */}
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
		query: ALL_PROJECTS_CATEGORY,
	});

	return {
		props: {
			AllProjectsCategories: data.projectsCategories.nodes,
		},
	};
}
