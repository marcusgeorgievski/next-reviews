import Image from "next/image";
import Link from "next/link";
import { getReviews } from "@/lib/reviews";
import ReviewSearch from "./Search";

export default async function ReviewsPage() {
	const reviews = await getReviews();

	return (
		<>
			<div className="mb-4 ">
				<h1 className="mb-2 mr-8">Reviews</h1>
				<ReviewSearch />
			</div>

			{/* List Reviews */}

			<ul className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
				{reviews.map((review) => {
					return <Card review={review} />;
				})}
			</ul>
		</>
	);
}

function Card({ review }) {
	return (
		<li
			key={review.slug}
			className="overflow-hidden bg-white border rounded shadow "
		>
			<Link href={`reviews/${review.slug}`}>
				<Image
					src={review.data.image}
					width={1000}
					height={1}
					alt=""
					className="w-full"
				/>
				<h2 className="font-semibold text-center">
					{review.data.title}
				</h2>
			</Link>
		</li>
	);
}
