import Head from '../../components/Head';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import ContentPage from '../../components/ContentPages';

export default function ContactUs() {
	console.log('load contact us');

	return (
		<>
			<Head title='Contact Us | Forell/Elsesser Engineers, Inc.' description='This is the Contact Us page' />

			<Layout>
				<main>
					<ContentPage id='7' />
				</main>
				<Footer />
			</Layout>
		</>
	);
}
