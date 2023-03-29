import Seo from '../../components/Seo';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import apolloClient from '../../services/apollo-client';
import { PROJECTS_PAGE, ALL_PROJECTS_PATH } from '../../services/graphql/queries';
import Link from 'next/link';

export default function AboutUs({ ProjectPage }) {
	// console.log('load projects');
	// console.log('ProjectPage:', ProjectPage);

	return (
		<>
			<Seo title={`${ProjectPage?.title} | Forell/Elsesser Engineers, Inc.`} description='This is the Projects page' />

			<Layout>
				<main>
					<strong>Projects</strong>
					<h1>{ProjectPage?.title}</h1>
					<p>{ProjectPage?.projSubTitle}</p>
					<div dangerouslySetInnerHTML={{ __html: ProjectPage?.content }} />
					<h2>Customized Solution</h2>
					<div dangerouslySetInnerHTML={{ __html: ProjectPage?.projCustomizedSolution }} />
					<h2>Highlights</h2>
					<div dangerouslySetInnerHTML={{ __html: ProjectPage?.projHighlights }} />

					<h2>Team</h2>
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
					<h2>Categories</h2>
					<ul>
						{ProjectPage?.projectsCategories?.nodes.map(categoryItem => {
							return (
								<li key={categoryItem?.slug}>
									<Link href={`/projects/category/${categoryItem?.slug}`} scroll={false}>
										<strong>{categoryItem?.name}</strong>
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

export async function getStaticPaths() {
	const { data } = await apolloClient.query({
		query: ALL_PROJECTS_PATH,
	});

	const paths = data.projects.nodes.map(item => ({
		params: { slug: item.slug },
	}));

	return {
		paths: paths || [],
		fallback: false, // can also be true or 'blocking'
	};
}

export async function getStaticProps({ params }) {
	const { data } = await apolloClient.query({
		query: PROJECTS_PAGE,
		variables: { id: params.slug },
	});

	return {
		props: {
			ProjectPage: data.project,
		},
	};
}

/*
export async function getServerSideProps(context) {
	const { slug } = context.query;
	const { data } = await apolloClient.query({
		query: PROJECTS_PAGE,
		variables: { id: slug },
	});

	return {
		props: {
			ProjectPage: data.project,
		},
	};
}
 */
