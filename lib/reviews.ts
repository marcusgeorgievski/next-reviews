import { marked } from "marked";
import { Review } from "@/lib/types";
import qs from "qs";

export const CMS_URL = "http://localhost:1337";
export const CACHE_TAG_REVIEWS = "reviews";

// Get single review

export async function getReview(slug: string): Promise<Review | null> {
	const { data } = await fetchReviews({
		filters: { slug: { $eq: slug } },
		fields: ["slug", "title", "subtitle", "publishedAt", "body"],
		populate: { image: { fields: ["url"] } },
		pagination: {
			pageSize: 1,
			widthCount: false,
		},
	});

	if (data.length === 0) {
		return null;
	}

	const item = data[0];

	return {
		...reviewData(item),
		body: marked(item.attributes.body, { headerIds: false, mangle: false }),
		subtitle: item.attributes.subtitle,
	};
}

// Get all reviews

export async function getReviews(pageSize: number): Promise<Review[]> {
	const { data } = await fetchReviews({
		fields: ["slug", "title", "subtitle", "publishedAt"],
		populate: { image: { fields: ["url"] } },
		pagination: {
			pageSize,
		},
		sort: ["publishedAt:desc"], //desc = descending
	});

	return data.map(reviewData);
}

async function fetchReviews(options: any) {
	const url =
		`${CMS_URL}/api/reviews?` +
		qs.stringify(options, { encodeValuesOnly: true });

	const response = await fetch(url, { next: { tags: [CACHE_TAG_REVIEWS] } }); // , { next: { revalidate: 20 } }

	if (!response.ok) {
		throw new Error(`CMS returned ${response.status} for ${url}`);
	}

	return await response.json();
}

function reviewData(item: any): Review {
	const { attributes } = item;
	return {
		slug: attributes.slug,
		title: attributes.title,
		subtitle: attributes.subtitle,
		date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
		image: CMS_URL + attributes.image.data.attributes.url,
	};
}

// Get slugs

export async function getSlugs() {
	const { data } = await fetchReviews({
		fields: ["slug"],
		sort: ["publishedAt:desc"],
		pagination: { pageSize: 100 }, // will SSG first 100 only
	});

	return data.map((item) => item.attributes.slug);
}
// ----------------------------------------------------------------------------
// Old Local File Handling
// ----------------------------------------------------------------------------

// import matter from "gray-matter";
// import { readFile, readdir } from "fs/promises";

// export async function getSlugs(): Promise<string[]> {
// 	let files: string[] = await readdir("content/reviews");
// 	files = files
// 		.filter((filename) => filename.endsWith(".md"))
// 		.map((filename) => filename.slice(0, -3));
// 	return files;
// }

// function compareDate(d1: string, d2: string): number {
// 	return new Date(d2).getTime() - new Date(d1).getTime();
// }

// export async function getReview(slug: string): Promise<Review> {
// 	const fileText = await readFile(`content/reviews/${slug}.md`, "utf8");
// 	const {
// 		content,
// 		data: { title, date, image, tags, note },
// 	} = matter(fileText);
// 	const body = marked(content, { headerIds: false, mangle: false });

// 	return {
// 		slug,
// 		body,
// 		title,
// 		date,
// 		image,
// 		tags,
// 		note,
// 	};
// }

// export async function getReviews(): Promise<Review[]> {
// 	const files = await getSlugs();
// 	const reviews: Review[] = [];

// 	for (const file of files) {
// 		const review = await getReview(file);
// 		reviews.push(review);
// 	}

// 	reviews.sort((a, b) => compareDate(a.date, b.date));
// 	return reviews; // sort later
// }
