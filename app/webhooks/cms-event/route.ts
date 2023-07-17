import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { CACHE_TAG_REVIEWS } from "@/lib/reviews";

export async function POST(request: NextRequest) {
	const payload = await request.json();

	// console.log(
	// 	`\n\n\n\n\Event: ${payload.event}\nSlug: ${payload.entry.slug}`
	// );

	if (payload.model === "review") {
		revalidateTag(CACHE_TAG_REVIEWS);
	}

	return new Response(null, { status: 204 });
}
