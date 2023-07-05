"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Review } from "@/lib/types";

export default function Reviews({ reviews }: { reviews: Review[] }) {
	const [search, setSearch] = useState("");
	return (
		<>
			<div className="mb-4 ">
				<h1 className="mb-2 mr-8">Reviews</h1>
				<ReviewSearch search={search} setSearch={setSearch} />
			</div>

			{/* List Reviews */}

			<ul className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
				{reviews
					.filter((review) => {
						if (search !== "")
							return review.title
								.toLowerCase()
								.includes(search.toLowerCase());
						return review.title;
					})
					.map((review) => {
						return <Card key={review.slug} review={review} />;
					})}
			</ul>
		</>
	);
}

export function ReviewSearch({ search, setSearch }) {
	const handleKey = (e: any) => {
		if (e.key === "Enter") setSearch("");
	};
	return (
		<div className="flex items-end">
			<label className="mr-2 text-sm text-slate-500">Search:</label>
			<input
				type="text"
				name="search"
				value={search}
				className="mr-2 text-sm border-b outline-none border-slate-300"
				placeholder="Enter a title..."
				onChange={(e) => setSearch(e.target.value)}
				onKeyPress={(e) => handleKey(e)}
			/>
			<div className="text-[10px] text-slate-400">
				<span className="px-1 py-[2px] font-mono border rounded bg-slate-100 text-slate-500 border-slate-400 mr-1">
					Enter
				</span>
				clear
			</div>
		</div>
	);
}

function Card({ review }: { review: Review }) {
	return (
		<li
			key={review.slug}
			className="overflow-hidden bg-white border rounded shadow hover:scale-[1.01] transition-all"
		>
			<Link href={`reviews/${review.slug}`}>
				<Image
					src={review.image}
					width={1000}
					height={1}
					alt=""
					className="w-full"
				/>
				<div className="flex items-center justify-between p-2">
					<h2 className="text-lg font-bold">{review.title}</h2>
					<p className="text-xs text-slate-500">{review.date}</p>
				</div>
			</Link>
		</li>
	);
}
