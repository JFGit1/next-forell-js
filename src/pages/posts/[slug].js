import Seo from '../../components/Seo';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';

export default function Posts() {
	return (
		<>
			<Seo title={`Posts | Forell/Elsesser Engineers, Inc.`} description='This is the Projects page' />
			<Layout>
				<main>
					<h1>Posts</h1>
				</main>
				<Footer />
			</Layout>
		</>
	);
}
