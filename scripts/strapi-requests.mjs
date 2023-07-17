import { writeFileSync } from "fs";
import qs from "qs";

// const url =
// 	"http://localhost:1337/api/reviews" +
// 	"?" +
// 	qs.stringify(
// 		{
// 			fields: ["slug", "title", "subtitle", "publishedAt", "body"],
// 			populate: { image: { fields: ["url"] } },
// 			pagination: {
// 				pageSize: 6,
// 			},
// 			sort: ["publishedAt:desc"], //desc = descending
// 		},
// 		{ encodeValuesOnly: true }
// 	);

// const res = await fetch(url);
// const body = await res.json();

// console.log(url);
// console.log(body);

// const formatted = JSON.stringify(body, null, 2);
// const file = "scripts/response.json";

// writeFileSync(file, formatted, "utf8");

// const url =
// 	"http://localhost:1337/api/reviews" +
// 	"?" +
// 	qs.stringify(
// 		{
// 			filters: { slug: { $eq: "hades-2018" } },
// 			fields: ["slug", "title", "subtitle", "publishedAt", "body"],
// 			populate: { image: { fields: ["url"] } },
// 			pagination: {
// 				pageSize: 1,
// 				widthCount: false,
// 			},
// 		},
// 		{ encodeValuesOnly: true }
// 	);

// const res = await fetch(url);
// const { data } = await res.json();
// const { attributes } = data[0];

// console.log(attributes.title);

const url =
	"http://localhost:1337/api/reviews" +
	"?" +
	qs.stringify(
		{
			fields: ["slug"],
		},
		{ encodeValuesOnly: true }
	);

const res = await fetch(url);
const body = await res.json();

const { attributes } = body.data[0];

console.log(url);
console.log(attributes);

const formatted = JSON.stringify(body, null, 2);
const file = "scripts/response.json";

writeFileSync(file, formatted, "utf8");
