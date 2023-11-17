"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface MainNavProps {
	data: Category[]
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
	const pathname = usePathname();

	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`
	}))
	return (
		<div>
			{routes.map((route) => (
				<Link
					href={route.href}
					key={route.href}
					className={cn('text-sm font-medium transition-colors m-4 hover:text-black',
						route.active ? "text-black" : "text-neutral-500")}
				>
					{route.label}
				</Link>
			))}
		</div>
	)
}

export default MainNav