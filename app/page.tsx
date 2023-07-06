import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<h1>Home</h1>
			<p>Practice with app router</p>

			<ul className="flex flex-col gap-4 mt-4 sm:grid sm:grid-cols-3">
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
						className="flex items-center justify-center w-full h-full "
						href={"/reviews/create"}
					>
						Reviews
					</Link>
				</li>
				<li className="border  text-3xl text-white font-semibold rounded hover:scale-[1.01] shadow-md border-slate-100 h-60 bg-gradient-to-r from-blue-500/40  via-indigo-500/40 to-purple-500/40">
					<Link
						className="flex items-center justify-center w-full h-full "
						href={"/"}
					>
						Reviews
					</Link>
				</li>
			</ul>
		</>
	);
}
