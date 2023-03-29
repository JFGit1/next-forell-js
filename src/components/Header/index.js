import Link from 'next/link';
import { MenuLink } from '../MenuLink/index.js';

import { HeaderWrapper } from './styles.js';

export function Header() {
	return (
		<HeaderWrapper>
			<div className='headerContent'>
				<h1>
					<Link href='/' scroll={false} prefetch={false}>
						Forell|Elsesser
					</Link>
				</h1>
				<nav className='navMenu'>
					<ul>
						<li>
							<MenuLink label='Home' url='/' />
						</li>
						<li>
							<MenuLink label='About Us' url='/about-us' />
						</li>
						<li>
							<MenuLink label='Staff' url='/about-us/staff' />
						</li>
						<li>
							<MenuLink label='Projects' url='/projects' />
						</li>
						<li>
							<MenuLink label='Contact Us' url='/contact-us' />
						</li>
					</ul>
				</nav>
			</div>
		</HeaderWrapper>
	);
}
