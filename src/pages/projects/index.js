import Seo from '../../components/Seo';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import Link from 'next/link';
import wpApolloClient from '../../services/wp-apollo-client';
import { ALL_PROJECT_CATEGORIES } from '../../queries/pages';

export default function AboutUs({ AllProjectsCategories }) {
	// console.log('load projects');
	// console.log('AllProjectsCategories:', AllProjectsCategories);

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
		query: ALL_PROJECT_CATEGORIES,
	});

	return {
		props: {
			AllProjectsCategories: data.projectsCategories.nodes,
		},
	};
}
