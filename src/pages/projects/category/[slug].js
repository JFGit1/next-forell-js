import Seo from '../../../components/Seo';
import { Footer } from '../../../components/Footer';
import Layout from '../../../components/Layout';

import Link from 'next/link';
import wpApolloClient from '../../../services/wp-apollo-client';
import { PROJECTS_CATEGORY } from '../../../queries/pages';

export default function AboutUs({ ProjectCategoryPage, slug }) {
	console.log('load projects');
	console.log('slug:', slug);

	return (
		<>
			<Seo title={`${ProjectCategoryPage[0]?.name} | Forell/Elsesser Engineers, Inc.`} description='This is the Projects page' />

			<Layout>
				<main>
					<strong>Projects</strong>
					<h1>{ProjectCategoryPage[0]?.name}</h1>
					<p dangerouslySetInnerHTML={{ __html: ProjectCategoryPage[0]?.description }} />

					<ul className='projects-list-items'>
						{ProjectCategoryPage[0]?.projects?.nodes.map(productItem => {
							if (productItem.projHasPage === true) {
								return (
									<li key={productItem?.slug}>
										<Link href={`/projects/${productItem?.slug}`} scroll={false}>
											<strong>{productItem?.title}</strong>
										</Link>
									</li>
								);
							} else {
								return <li key={productItem?.slug}>{productItem?.title}</li>;
							}
						})}
					</ul>
				</main>
				<Footer />
			</Layout>
		</>
	);
}

export async function getServerSideProps(context) {
	const { slug } = context.query;
	const { data } = await wpApolloClient.query({
		query: PROJECTS_CATEGORY,
		variables: { slug: slug },
	});

	return {
		props: {
			ProjectCategoryPage: data.projectsCategories.nodes,
			slug,
		},
	};
}