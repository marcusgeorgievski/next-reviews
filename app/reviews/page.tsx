import { getReviews } from "@/lib/reviews";
import Reviews from "./Reviews";

// export const revalidate = 10;

export default async function ReviewsPage() {
	const reviews = await getReviews(12);

	// console.log(reviews);

	return (
		<>
			<Reviews reviews={reviews} />
		</>
	);
}
