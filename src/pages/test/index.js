import Head from '../../components/Head';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';

import axios from 'axios';
import { useQuery } from 'react-query';

export default function Test() {
	console.log('load test');

	const apiAxios = axios.create({
		baseURL: 'https://rickandmortyapi.com/',
	});

	const {
		data: characters,
		isFetching,
		error,
	} = useQuery(
		'charactersKey',
		async () => {
			const response = await apiAxios.get('api/character');
			return response.data;
		},
		{
			staleTime: 1000 * 60,
		}
	);
	const characterResults = characters?.results;

	return (
		<>
			<Head title='Contact Us | Forell/Elsesser Engineers, Inc.' description='This is the Contact Us page' />

			<Layout>
				<main>
					<div>
						<h1>Test</h1>

						<>{error && <p>Oops... Something went wrong.</p>}</>
						<>{isFetching && <p>Loading...</p>}</>
						<ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '3rem 2rem', listStyle: 'none' }}>
							{characterResults?.map(character => {
								return (
									<li key={character.name}>
										<p>
											<img src={character.image} alt={character.name} />
										</p>
										<strong>{character.name}</strong>
										<p>
											<span>{character.species} / </span>
											<span>{character.gender}</span>
										</p>
									</li>
								);
							})}
						</ul>

						<p>
							Duis consectetur, ante at facilisis mattis, risus neque interdum purus, nec imperdiet eros mi vitae dolor. Nam quis velit eget ex hendrerit mattis. Praesent
							sagittis metus nec sem pharetra convallis. Donec laoreet at justo nec mollis. Duis suscipit nibh non velit semper, vel convallis purus posuere. Donec vel
							condimentum metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, libero vitae eleifend bibendum, orci nisi elementum purus, quis
							rhoncus lorem lorem eu elit. Quisque sodales pharetra dolor, nec tempor dolor fermentum in. Fusce fringilla vehicula orci ac luctus. Curabitur mattis leo eget
							pellentesque tempor. Etiam vitae felis sit amet tortor placerat sollicitudin. Duis posuere vitae turpis mattis ultrices. In dictum viverra scelerisque.
						</p>
						<p>
							Vivamus laoreet enim eu nunc dignissim iaculis non eget enim. Curabitur dui sapien, scelerisque vitae turpis vitae, commodo consectetur erat. Phasellus eget
							sapien sodales dolor consectetur imperdiet. Morbi magna orci, venenatis a erat eu, hendrerit auctor nulla. Proin volutpat eros ac orci tempus, sit amet luctus
							dui cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vehicula, nisl id ultrices varius, lorem nibh tempus arcu, vitae
							ullamcorper ex sapien vel ex. Fusce condimentum lobortis velit nec suscipit. Integer nisi sem, mattis id dignissim nec, elementum vitae dolor. Quisque sagittis
							semper libero, a pellentesque sapien molestie sit amet. Donec quis sapien nulla. Sed lacinia erat ex, ac consectetur arcu iaculis quis. Quisque maximus eros ac
							lacus feugiat finibus eu eget massa. Nam eu mi commodo, condimentum arcu eu, rutrum mauris. Praesent pellentesque cursus efficitur. Nullam diam justo, pharetra
							tincidunt purus nec, malesuada blandit mauris.
						</p>
					</div>
				</main>
				<Footer />
			</Layout>
		</>
	);
}
