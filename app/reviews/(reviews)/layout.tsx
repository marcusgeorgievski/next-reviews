import { getReviews } from "@/lib/reviews";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default async function ReviewLayout({ children }) {
	const reviews = await getReviews(20);
	return (
		<div className="lg:grid lg:gap-4 lg:grid-cols-[200px_minmax(200px,_1fr)]">
			<aside className="hidden lg:block">
				<Sidebar reviews={reviews} />
			</aside>
			<span>{children}</span>
		</div>
	);
}
