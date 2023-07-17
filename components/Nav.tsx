import Link from "next/link";

export default function Nav() {
	return (
		<nav className="sticky top-0 z-50 px-2 py-1 border-b border-blue-100/20 bg-blue-50/70 backdrop-blur-sm">
			<div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-2 py-1">
				<h2 className="text-3xl font-semibold text-black ">
					Review Site
				</h2>
				<ul className="flex gap-4">
					<li className="font-bold text-slate-900">
						<Link href="/">Home</Link>
					</li>
					<li className="font-bold text-slate-900">
						<Link href="/reviews">Reviews</Link>
					</li>
					<li className="font-bold text-slate-900">
						<Link href="/reviews/create">Create</Link>
					</li>
					<li className="font-bold text-slate-900">
						<Link href="/about" prefetch={false}>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
