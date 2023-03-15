import Seo from '../../components/Seo';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import wpApolloClient from '../../services/wp-apollo-client';
import { PROJECT_PAGE } from '../../queries/pages';
import Link from 'next/link';

export default function AboutUs({ ProjectPage }) {
	console.log('load projects');
	console.log('ProjectPage:', ProjectPage);

	return (
		<>
			<Seo title={`${ProjectPage?.title} | Forell/Elsesser Engineers, Inc.`} description='This is the Projects page' />

			<Layout>
				<main>
					<strong>Projects</strong>
					<h1>{ProjectPage?.title}</h1>
					<p>{ProjectPage?.projSubTitle}</p>
					<div dangerouslySetInnerHTML={{ __html: ProjectPage?.content }} />
					<h3>Customized Solution</h3>
					<div dangerouslySetInnerHTML={{ __html: ProjectPage?.projCustomizedSolution }} />
					<h3>Highlights</h3>
					<div dangerouslySetInnerHTML={{ __html: ProjectPage?.projHighlights }} />

					<h3>Team</h3>
					<ul>
						{ProjectPage?.projTeam?.nodes.map(teamItem => {
							return (
								<li key={teamItem?.slug}>
									<Link href={`/about-us/staff/${teamItem?.slug}`} scroll={false}>
										<strong>{teamItem?.title}</strong>
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

export async function getServerSideProps(context) {
	const { slug } = context.query;
	const { data } = await wpApolloClient.query({
		query: PROJECT_PAGE,
		variables: { id: slug },
	});

	return {
		props: {
			ProjectPage: data.project,
		},
	};
}
