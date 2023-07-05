import Link from "next/link";

export default function Nav() {
	return (
		<nav className="px-2 py-1 border-b border-blue-200 bg-blue-50">
			<div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-2 py-1">
				<h2 className="text-3xl font-semibold text-blue-800 ">
					Review Site
				</h2>
				<ul className="flex gap-4">
					<li className="font-bold text-slate-800">
						<Link href="/">Home</Link>
					</li>
					<li className="font-bold text-slate-800">
						<Link href="/reviews">Reviews</Link>
					</li>
					<li className="font-bold text-slate-800">
						<Link href="/about" prefetch={false}>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
