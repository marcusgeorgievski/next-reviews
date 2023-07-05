"use client";
import { useState } from "react";

export default function ReviewSearch() {
	const [search, setSearch] = useState("");

	console.log(search);

	return (
		<div className="flex items-end">
			<label className="mr-2 text-sm text-slate-500">Search:</label>
			<input
				type="text"
				name="search"
				className="mr-2 text-sm border-b outline-none border-slate-300"
				placeholder="Enter a title..."
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
}
