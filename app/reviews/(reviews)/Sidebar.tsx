"use client";
import { Review } from "@/lib/types";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Sidebar({ reviews }: { reviews: Review[] }) {
	const [open, setOpen] = useState(true);

	const handleSidebar = () => {
		setOpen(!open);
	};

	return (
		<nav
			/*  */
			/* fit" : "h-10" */
			className={`p-2 border rounded border-slate-300 h-fit max-h-[300px]  overflow-y-scroll sticky top-16 transition-all`}
		>
			<div
				onClick={handleSidebar}
				className={`flex items-center justify-between  font-semibold  border-slate-300 cursor-pointer ${
					!open ? "" : "border-b mb-2"
				}`}
			>
				<h2>All Reviews</h2>
				<FiChevronDown
					className={`${open && "rotate-180"} transition-all`}
				/>
			</div>
			<ul className={`flex flex-col font-mono ${!open && "hidden"} `}>
				{reviews.map((rev) => (
					<li
						key={rev.slug}
						className="px-1 py-1 text-sm rounded text-slate-600 hover:text-blue-600 hover:bg-blue-50"
					>
						<Link href={rev.slug} className="flex">
							{rev.title}
						</Link>
					</li>
				))}
			</ul>

			<style jsx>{`
				* {
					user-select: none;
				}
			`}</style>
		</nav>
	);
}
