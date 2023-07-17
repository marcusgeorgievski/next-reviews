"use client";
import ShareLinkButton from "@/components/ShareLinkButton";
import { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import Toast from "@/components/Toast";

export default function CreateReview() {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("2023-07-04");
	const [body, setBody] = useState("");
	const [image, setImage] = useState("");

	const [toast, setToast] = useState(false);

	const clearState = () => {
		setTitle("");
		setDate("2023-07-04");
		setBody("");
		setImage("");
	};

	const handleSubmit = () => {
		clearState();
		setToast(true);

		setTimeout(() => {
			setToast(false);
		}, 5000);
	};

	return (
		<>
			<input
				className="mb-4 text-4xl font-bold border-b outline-none border-slate-400"
				type="text"
				placeholder="title"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<div className="flex justify-between mb-2 text-xs">
				<p className="flex items-end gap-1 font-code">
					<BsCalendar3 />
					<input
						className="border-b outline-none border-slate-400"
						type="date"
						placeholder="date"
						onChange={(e) => setDate(e.target.value)}
						value={date!}
					/>
				</p>
				<ShareLinkButton />
			</div>
			<div className="w-full px-4 border mb-6 border-slate-500 border-dotted aspect-[10/1] rounded flex items-center justify-center">
				<input
					className="border-b outline-none border-slate-400 max-w-[500px] w-full"
					type="text"
					placeholder="Image link"
					onChange={(e) => setImage(e.target.value)}
					value={image}
				/>
			</div>
			<p className="mb-2 text-sm text-slate-500">
				Write your markdown post:
			</p>
			<textarea
				value={body}
				onChange={(e) => setBody(e.target.value)}
				className="w-full p-2 font-mono text-sm border rounded outline-none resize-none h-[800px] border-slate-400"
			></textarea>
			<button
				onClick={handleSubmit}
				className="fixed right-[10%] px-4 py-2 text-sm bg-blue-600 rounded bottom-4 text-slate-100"
			>
				Submit
			</button>
			<Toast
				className={`fixed top-20 right-4 sm:right-[10%] w-fit px-2 py-2 text-left text-white bg-green-500 rounded transition-opacity ${
					toast ? "opacity-100" : "opacity-0"
				}`}
			>
				New fake post created!
			</Toast>
		</>
	);
}
