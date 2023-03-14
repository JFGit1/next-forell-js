import Head from '../components/Head';
import { Footer } from '../components/Footer';
import Layout from '../components/Layout';

export default function Home() {
	console.log('load home');

	return (
		<>
			<Layout>
				<Head
					title='Forell/Elsesser Engineers, Inc.'
					desc='Forell/Elsesser Engineers, Inc. - A San Francisco structural engineering firm that specializes in seismic and innovative engineering for new and retrofitted construction of all types, offering additional expertise in Integrated Project Delivery, design/build, BIM, feasibility studies, and cost/benefit analyses.'
				/>
				<main>
					<h1>Welcome</h1>
				</main>
				<Footer />
			</Layout>
		</>
	);
}
