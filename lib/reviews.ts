import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import { Review } from "@/lib/types";

// Get single review

export async function getReview(slug: string): Promise<Review> {
	const fileText = await readFile(`content/reviews/${slug}.md`, "utf8");
	const {
		content,
		data: { title, date, image, tags, note },
	} = matter(fileText);
	const body = marked(content, { headerIds: false, mangle: false });

	return {
		slug,
		body,
		title,
		date,
		image,
		tags,
		note,
	};
}

// Get all reviews

export async function getReviews(): Promise<Review[]> {
	const files = await getSlugs();
	const reviews: Review[] = [];

	for (const file of files) {
		const review = await getReview(file);
		reviews.push(review);
	}

	reviews.sort((a, b) => compareDate(a.date, b.date));
	return reviews; // sort later
}

// Get slugs

export async function getSlugs(): Promise<string[]> {
	let files: string[] = await readdir("content/reviews");
	files = files
		.filter((filename) => filename.endsWith(".md"))
		.map((filename) => filename.slice(0, -3));
	return files;
}

function compareDate(d1: string, d2: string): number {
	return new Date(d2).getTime() - new Date(d1).getTime();
}
