# `/app` Phase 1

## Setup

Create `package.json`

```json
{
	"name": "reviews",
	"private": true
}
```

Install dependencies

```shell
npm i next react react-dom
```

Create a `.gitignore`

```
/.next/
/node_modules/
```

Start the server

```shell
npx next dev
```

Add customs script in `package.json`

```json
{
    ...
    "script": {
        "dev": "next dev"
    }
}
```

TypeScript config files will be created if `npx run dev` is ran with `.tsx` files present

`root` / `segment` / `leaflet`

## Rendering

**Prerendering**

-   Faster page load
-   SEO friendly, can analyze dynamic content better
-   Supports non-js clients, will not hydrate

**Server Components**

-   Next js renders react components in the server (by default) and returns resulting HTML to browser
-   No JS sent to browser
-   Cannot use client side functionality (`useEffect`, `onClick`, `window` ...)

**Prefetching**

`<a>`

-   On click, crowser makes request to load new page
-   On another click, browser will unload current page and make another request for new page
-   **Multi page application**, every link/path loads a different page

`<Link>`

-   Browser will still make request for full HTML
-   **Prefetching:** When a user hovers over a `<Link>`, browser makes a new request
    -   Not loading new HTML, just fetching [data]
-   Replaces on existing page without loading separate HTML document from server
-   Client side navigation?

-   Open site `->` load/fetch starting page `->` prefetch `<Link>` data `>` update page with prefetched data

## Styling

```shell
npm i tailwindcss postcss autoprefixer
npx tailwindcss init --postcss
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Chrome console `Filter`:

```
-preload
```

## Import Alias

`tsconfig.json`

```json
{
	"compilerOptions": {
		"paths": {
			"@/*": ["./*"]
		},
        ...
	}
}
```

## Image Card

```jsx
<Image
    src={}
    width={}
    height={}
    alt={}
>
```

## Fonts

### Google

`app/fonts.ts`

```ts
import { Inter } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});
```

**To use with tailwind**

```jsx
// layout.tsx

<html className={`${inter.variable}`}>...</html>
```

```js
...
theme: {
	extend: {
		fontFamily: {
            // sans, mono, serif are default ones
            // can overwrite them!
			sans: ["var(--font-inter)"]; // Can give key any name, tailwind will autocomplete
		}
	}
}
...
```

## Metadata

```ts
export const metadata = {
    title:
    descriptions:

    // How website is seen on links on other sites
    openGraph: {
        ...
    }
}
```

-   `opengraph-image`

**Template Metadata**

```ts
export const metadata = {
    title:
    descriptions:

    // Current page's title inserted into `%s`, this is useful to use in layouts
    template: {
        default: 'Home',
        title: '%s - hi!'
    }
}
```

**Dynamic Metadata**

```ts
export async function generateMetadata({ params: { slug } }) {
	const review = await getReview(slug);
	return {
		title: review.data.title,
	};
}
```

**Dynamic Robots File**

`app/robots.js`

```
...
```

## Notes

-   Client components can only contain other client components
