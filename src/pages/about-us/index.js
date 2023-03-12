import Head from '../../components/Head';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import ContentPage from '../../components/ContentPages';

export default function AboutUs() {
	console.log('load about us');

	return (
		<>
			<Head title='About Us | Forell/Elsesser Engineers, Inc.' description='This is the About Us page' />

			<Layout>
				<main>
					<ContentPage id='6' />
				</main>
				<Footer />
			</Layout>
		</>
	);
}
