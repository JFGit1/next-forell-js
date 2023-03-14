import Head from '../../components/Head';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import wpApolloClient from '../../services/wp-apollo-client';
import { PAGES_BY_SLUG } from '../../queries/pages';

export default function AboutUs({ contentPage }) {
	console.log('load about us');

	return (
		<>
			<Head title={`${contentPage?.page.title} | Forell/Elsesser Engineers, Inc.`} description='This is the About Us page' />

			<Layout>
				<main>
					<div>
						<h1>{contentPage?.page.title}</h1>
						<div dangerouslySetInnerHTML={{ __html: contentPage?.page.content }} />
					</div>
				</main>
				<Footer />
			</Layout>
		</>
	);
}

export async function getServerSideProps(context) {
	context.res.setHeader('Cache-Control', 'public, s-maxage=10, max-age=7200, stale-while-revalidate=59');

	const { data: contentPage } = await wpApolloClient.query({
		query: PAGES_BY_SLUG,
		variables: { id: 'about' },
	});

	return {
		props: {
			contentPage,
		},
	};
}
