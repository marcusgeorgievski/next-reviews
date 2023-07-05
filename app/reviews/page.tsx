import { getReviews } from "@/lib/reviews";
import Reviews from "./Reviews";

export default async function ReviewsPage() {
	const reviews = await getReviews();

	return (
		<>
			<Reviews reviews={reviews} />
		</>
	);
}
