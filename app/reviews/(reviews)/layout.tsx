import { getReviews } from "@/lib/reviews";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default async function ReviewLayout({ children }) {
	const reviews = await getReviews();
	return (
		<div className="grid gap-4 grid-cols-[200px_minmax(200px,_1fr)]">
			<aside>
				<Sidebar reviews={reviews} />
			</aside>
			<span>{children}</span>
		</div>
	);
}
