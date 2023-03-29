import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function MenuLink({ label, url }) {
	const path = usePathname();
	console.log('path:', path);
	const searchParams = useSearchParams();
	console.log('searchParams:', searchParams);
	const isCurrentPage = path === url ? 'active' : '';

	return (
		<Link href={url} scroll={false} prefetch={false} className={`${isCurrentPage}`}>
			{label}
		</Link>
	);
}
