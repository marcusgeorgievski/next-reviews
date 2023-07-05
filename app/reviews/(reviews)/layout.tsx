import { getReviews } from "@/lib/reviews";
import Link from "next/link";

export default function ReviewLayout({ children }) {
	return (
		<div className="grid gap-4 grid-cols-[200px_minmax(200px,_1fr)]">
			<aside className="p-2 border rounded border-slate-300 h-fit max-h-[300px] overflow-y-scroll sticky top-6">
				<h2 className="mb-2 font-semibold border-b border-slate-300">
					All Reviews
				</h2>
				<Sidebar />
			</aside>
			<span>{children}</span>
		</div>
	);
}

async function Sidebar() {
	const reviews = await getReviews();

	return (
		<ul className="flex flex-col font-mono ">
			{reviews.map((rev) => (
				<li
					key={rev.slug}
					className="px-1 py-1 text-sm rounded text-slate-600 hover:text-blue-600 hover:bg-blue-50"
				>
					<Link href={rev.slug} className="flex">
						{rev.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
