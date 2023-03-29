import Seo from '../../components/Seo';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import apolloClient from '../../services/apollo-client';
import { PAGES_BY_SLUG } from '../../services/graphql/queries';

export default function ContactUs({ contentPage }) {
	console.log('load contact us');

	return (
		<>
			<Seo title={`${contentPage?.page.title} | Forell/Elsesser Engineers, Inc.`} description='This is the Contact Us page' />

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

export async function getStaticProps(context) {
	const { data: contentPage } = await apolloClient.query({
		query: PAGES_BY_SLUG,
		variables: { id: 'contact-us' },
	});

	return {
		props: {
			contentPage,
		},
	};
}
