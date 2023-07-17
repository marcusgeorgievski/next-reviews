import { getReviews } from "@/lib/reviews";
import { Review } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

// export const revalidate = 10;

export default async function HomePage() {
	const item: Review[] = await getReviews(1);
	const review: Review = item[0];

	return (
		<>
			<h1>Home</h1>
			<p>Practice with app router</p>

			<ul className="flex flex-col gap-4 mt-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
				<li className="border  text-3xl text-white font-semibold rounded hover:scale-[1.01] shadow-md border-slate-100 h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
					<Link
						className="flex items-center justify-center w-full h-full "
						href={"/reviews"}
					>
						Reviews
					</Link>
				</li>

				<li className="border  text-3xl text-white font-semibold rounded hover:scale-[1.01] shadow-md border-slate-100 h-60 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
					<Link
						className="flex items-center justify-center w-full h-full text-center"
						href={"/reviews/create"}
					>
						Create a Review
					</Link>
				</li>
				<li className="border  text-3xl text-white font-semibold rounded hover:scale-[1.01] shadow-md border-slate-100 h-60 bg-gradient-to-r from-indigo-800 via-sky-800 to-emerald-800">
					<Link
						className="relative flex items-center justify-center w-full h-full"
						href={"/reviews/" + review.slug}
					>
						<Image
							src={review.image}
							width={1000}
							height={1}
							alt=""
							className="absolute object-cover w-full h-full opacity-70 aspect-video"
							priority
						/>
						<div className="z-10 flex flex-col items-center">
							<p className="text-center">Featured Review</p>
							<p className="text-base font-medium text-slate-200">
								{review.title}
							</p>
						</div>
					</Link>
				</li>
			</ul>
		</>
	);
}
