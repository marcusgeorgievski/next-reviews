# `/app` Phase 2

## strapi

```
http://localhost:3000/admin
http://localhost:3000/api/reviews
http://localhost:3000/api/reviews?populate=*
```

## qs library

```js
import qs from "qs";

const url =
	"http://localhost:1337/api/reviews" +
	"?" +
	qs.stringify(
		{
			fields: ["slug", "title", "subtitle", "publishedAt", "body"],
			populate: { image: { fields: ["url"] } },
		},
		{ encodeValuesOnly: true }
	);

const response = await fetch(url);
const data = await response.json();
```

```shell
❯ npm i -D eslint eslint-config-next
```

## Image

`Browser - Next.js Server - Strapi server`

-   next.js will optimize the image, convert it to webp, and cache it

```jsx
<Image
	src={image}
	width={1100}
	height={320}
	alt=""
	className="w-full mx-auto mb-6 rounded"
	priority
/>
```

Can set priority conditionally too

```jsx
priority = { condition };
```

## Fetch Cache and Revalidation

`HIT` - data was already cached
`MISS` -

`sharp` package recommended for image optimization

**Options**

```js
export const dynamicParams = false; // true by default
```

```js
export const dynamic = ...;
```

-   `auto` : cache as must as possible
-   `force-dynamic` : disables cache, force dynamic rendering
    -   SSR at runtime, completely dynamic
    -   `generateStaticParams()` not needed
    -   will not effect other routes/compoents, set same option to enable
    -   slower

**Fetch**

```ts
fetch("utl://api...", { next: { revalidate: 20 } });
```

## Error

```tsx
import { notFound } from "next/navigation";

notFound();
```

## Webhooks!

**On-Demand Revalidation**

-   tags, `revalidateTag(tag)`
