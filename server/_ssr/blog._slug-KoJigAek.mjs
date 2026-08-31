import { i as blogBySlugQuery } from "./queries-CwknXRs0.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as absoluteUrl, t as SITE_NAME } from "./site-BRP1auNI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-KoJigAek.js
var $$splitComponentImporter = () => import("./blog._slug-CMnPZdFd.mjs");
var $$splitErrorComponentImporter = () => import("./blog._slug-D2sug5uk.mjs");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-Dk872eJd.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: async ({ context, params }) => {
		const p = await context.queryClient.ensureQueryData(blogBySlugQuery(params.slug));
		if (!p || !p.published) throw notFound();
		return p;
	},
	head: ({ loaderData, params }) => ({
		meta: [
			{ title: `${loaderData?.title ?? "Article"} — Journal — ${SITE_NAME}` },
			{
				name: "description",
				content: loaderData?.excerpt ?? ""
			},
			{
				property: "og:title",
				content: loaderData?.title ?? ""
			},
			{
				property: "og:description",
				content: loaderData?.excerpt ?? ""
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:title",
				content: loaderData?.title ?? ""
			},
			{
				name: "twitter:description",
				content: loaderData?.excerpt ?? ""
			},
			...loaderData?.cover_image ? [{
				property: "og:image",
				content: loaderData.cover_image
			}, {
				name: "twitter:image",
				content: loaderData.cover_image
			}] : []
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl(`/blog/${params.slug}`)
		}],
		scripts: loaderData ? [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				headline: loaderData.title,
				description: loaderData.excerpt ?? void 0,
				image: loaderData.cover_image ?? void 0,
				author: loaderData.author ? {
					"@type": "Person",
					name: loaderData.author
				} : void 0,
				datePublished: loaderData.published_at ?? void 0,
				publisher: {
					"@type": "TravelAgency",
					name: SITE_NAME
				}
			})
		}] : []
	}),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
