"use client";
import { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";

export default function ShareLinkButton() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		// Copy to clickboard
		navigator.clipboard.writeText(window.location.href);
		setClicked(true);

		// Return to original text state
		setTimeout(() => {
			setClicked(false);
		}, 1500);
	};

	return (
		<button
			onClick={handleClick}
			className="flex items-center gap-[2px]  pl-1 pr-2 py-1 text-xs text-blue-500 border border-blue-200 rounded bg-blue-100/40 hover:bg-blue-100"
		>
			<BsLink45Deg className="text-base" />
			{clicked ? "Copied!" : "Copy link"}
		</button>
	);
}
