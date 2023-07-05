import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<h1>Home</h1>
			<p>
				Practice with app router -&gt;{" "}
				<Link className="font-bold text-blue-600" href={"/reviews"}>
					Go here
				</Link>
			</p>
		</>
	);
}
