import Link from 'next/link';

import { HeaderWrapper } from './styles.js';

export function Header() {
	return (
		<HeaderWrapper>
			<div className='headerContent'>
				<h1>
					<Link href='/' scroll={false}>
						Forell|Elsesser
					</Link>
				</h1>
				<nav className='navMenu'>
					<ul>
						<li>
							<Link href='/' scroll={false}>
								Home
							</Link>
						</li>
						<li>
							<Link href='/about-us' scroll={false}>
								About Us
							</Link>
						</li>
						<li>
							<Link href='/about-us/staff' scroll={false}>
								Staff
							</Link>
						</li>
						<li>
							<Link href='/projects' scroll={false}>
								Projects
							</Link>
						</li>
						<li>
							<Link href='/contact-us' scroll={false}>
								Contact Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</HeaderWrapper>
	);
}
