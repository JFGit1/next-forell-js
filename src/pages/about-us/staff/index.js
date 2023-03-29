import Seo from '../../../components/Seo';
import Layout from '../../../components/Layout';
import { Footer } from '../../../components/Footer';

import apolloClient from '../../../services/apollo-client';
import { ALL_STAFF_LIST } from '../../../services/graphql/queries';
import Link from 'next/link';

export default function Staff({ staffList }) {
	console.log('staffList:', staffList);

	return (
		<>
			<Seo title={`Staff | Forell/Elsesser Engineers, Inc.`} description='This is the Projects page' />
			<Layout>
				<main>
					<h1>Staff</h1>

					{staffList?.map(item => {
						return (
							<div key={item.slug}>
								<h2>{item.name}</h2>
								<ul
									key={`list-${item.slug}`}
									style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(3, 1fr)',
										gap: '1rem',
										margin: '0 0 3rem 0',
										padding: '0',
										listStyle: 'none',
									}}>
									{item?.staffs?.nodes.map(subItem => {
										return (
											<li key={subItem.slug}>
												<Link prefetch={false} href={`/about-us/staff/${subItem.slug}`} scroll={false}>
													<img src={subItem.featuredImage?.node.sourceUrl} title={subItem.title} />
													<strong>{subItem.title}</strong>
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</main>
				<Footer />
			</Layout>
		</>
	);
}

export async function getStaticProps(context) {
	const { data } = await apolloClient.query({
		query: ALL_STAFF_LIST,
	});

	return {
		props: {
			staffList: data.staffCategories.nodes,
		},
	};
}
