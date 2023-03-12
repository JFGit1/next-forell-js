import Head from '../../components/Head';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';
import { ProjectsList } from '../../components/ProjectsList';

export default function AboutUs() {
	console.log('load projects');

	return (
		<>
			<Head title='Projects | Forell/Elsesser Engineers, Inc.' description='This is the Projects page' />

			<Layout>
				<main>
					<h1>Projects</h1>
					<ProjectsList />
				</main>
				<Footer />
			</Layout>
		</>
	);
}
