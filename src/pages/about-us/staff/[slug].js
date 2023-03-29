import Seo from '../../../components/Seo';
import Layout from '../../../components/Layout';
import { Footer } from '../../../components/Footer';

import apolloClient from '../../../services/apollo-client';
import { ALL_STAFF_PAGE, STAFF_PAGE } from '../../../services/graphql/queries';
import Link from 'next/link';

export default function Staff({ StaffPage }) {
	console.log('StaffPage:', StaffPage);
	return (
		<>
			<Seo title={`${StaffPage.title} | Staff | Forell/Elsesser Engineers, Inc.`} description='This is the Staff page' />
			<Layout>
				<main>
					<strong>Staff | {StaffPage.staffSubTitle}</strong>
					<h1>{StaffPage.title}</h1>
					<img src={StaffPage.featuredImage?.node.sourceUrl} title={StaffPage.title} />
					<p>
						<strong>{StaffPage.staffInformations}</strong>
						<br />
						{StaffPage.staffEmail}
					</p>
					<div dangerouslySetInnerHTML={{ __html: StaffPage?.content }} />
					<br />
					<h2>Projects</h2>
					<ul>
						{StaffPage.projTeam?.nodes.map(item => {
							return (
								<li key={item.slug}>
									<Link href={`/projects/${item.slug}`} scroll={false}>
										{item.title}
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
		query: ALL_STAFF_PAGE,
	});

	const paths = data.staffs.nodes.map(item => ({
		params: { slug: item.slug },
	}));

	return {
		paths: paths || [],
		fallback: false, // can also be true or 'blocking'
	};
}

export async function getStaticProps({ params }) {
	const { data } = await apolloClient.query({
		query: STAFF_PAGE,
		variables: { id: params.slug },
	});

	return {
		props: {
			StaffPage: data.staff,
		},
	};
}
