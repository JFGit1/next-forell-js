import Seo from '../../components/Seo';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';

import Link from 'next/link';

export default function FourOhFour() {
	return (
		<>
			<Seo title={`Page Not Found | Forell/Elsesser Engineers, Inc.`} description='This is the Projects page' />
			<Layout>
				<main>
					<h1>This is somewhat embarrassing, isn’t it?</h1>
					<p>It seems we can’t find what you’re looking for. Perhaps searching, or one of the links below, can help.</p>
					<p>
						<i>Coming soon.</i>
					</p>
					<Link href='/'>
						<strong>Go back home</strong>
					</Link>
					.
				</main>
				<Footer />
			</Layout>
		</>
	);
}
