// import { writeFile } from "fs";
import fs from "fs";
import { Review } from "@/lib/types";

export function createFile({ title, body, date, image }: Review) {
	const slug = title.replaceAll(" ", "-");

	const template = `
---
slug: ${slug}
title: ${title}
date: ${date}
image: ${image}
---

${body}
`;

	fs.writeFile(`/content/reviews/${slug}.md`, template, (err) =>
		console.log(err)
	);
}
