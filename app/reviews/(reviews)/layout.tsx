import { getReviews } from "@/lib/reviews";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default async function ReviewLayout({ children }) {
	const reviews = await getReviews(20);
	return (
		<div className="sm:grid sm:gap-4 sm:grid-cols-[200px_minmax(200px,_1fr)]">
			<aside className="hidden sm:block">
				<Sidebar reviews={reviews} />
			</aside>
			<span>{children}</span>
		</div>
	);
}
