"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi";

export default function Breadcrumbs() {
	// Filter to ignore nested latouts
	const segments = useSelectedLayoutSegments().filter(
		(s) => !s.startsWith("(")
	);
	// console.log(segments);

	return (
		<div className="flex">
			<span className="flex items-center">
				<Link href={"/"} className="text-xs text-slate-500">
					<HiOutlineHome />
				</Link>
				<span className="mx-1 text-xs font-bold text-slate-600">/</span>
				{/* <BiSolidChevronRight className="text-slate-800" /> */}
			</span>

			{segments.map((seg, i) => {
				const pos = segments.findIndex((s) => s === seg);
				const crumbPath = `/${segments.slice(0, pos + 1).join("/")}`;

				return (
					<span key={seg} className="flex items-center">
						<Link
							href={crumbPath}
							className="text-xs text-slate-500"
						>
							{seg}
						</Link>
						{i !== segments.length - 1 && (
							<span className="mx-1 text-xs font-bold text-slate-600">
								/
							</span>
						)}
						{/* <BiSolidChevronRight className="text-slate-800" /> */}
					</span>
				);
			})}
		</div>
	);
}
