import Image from "next/image";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";
import { BsCalendar3 } from "react-icons/bs";

export async function generateStaticParams() {
	const slugs = await getSlugs();

	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
	const review = await getReview(slug);
	return {
		title: review.data.title,
	};
}

export default async function ReviewPage({ params: { slug } }) {
	const { body, data } = await getReview(slug);

	return (
		<>
			<h1>{data.title}</h1>
			<div className="flex justify-between mb-2 text-xs">
				<p className="flex items-end gap-1 font-code">
					<BsCalendar3 /> {data.date}
				</p>
				<ShareLinkButton />
			</div>
			<Image
				src={data.image}
				width={1100}
				height={320}
				alt=""
				className="w-full mx-auto mb-6 rounded"
			/>

			<article
				className="prose max-w-none prose-slate"
				dangerouslySetInnerHTML={{ __html: body }}
			/>
		</>
	);
}
