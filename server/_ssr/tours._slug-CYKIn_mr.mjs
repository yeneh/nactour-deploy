import { g as tourBySlugQuery } from "./queries-CwknXRs0.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as absoluteUrl, t as SITE_NAME } from "./site-BRP1auNI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tours._slug-CYKIn_mr.js
var $$splitComponentImporter = () => import("./tours._slug-B3CnUDiN.mjs");
var $$splitNotFoundComponentImporter = () => import("./tours._slug-DEbIbROg.mjs");
var $$splitErrorComponentImporter = () => import("./tours._slug-DKBqDeO2.mjs");
var Route = createFileRoute("/tours/$slug")({
	loader: async ({ context, params }) => {
		const data = await context.queryClient.ensureQueryData(tourBySlugQuery(params.slug));
		if (!data) throw notFound();
		return data;
	},
	head: ({ loaderData, params }) => ({
		meta: [
			{ title: `${loaderData?.title ?? "Tour"} — ${SITE_NAME}` },
			{
				name: "description",
				content: loaderData?.short_description ?? ""
			},
			{
				property: "og:title",
				content: loaderData?.title ?? ""
			},
			{
				property: "og:description",
				content: loaderData?.short_description ?? ""
			},
			{
				name: "twitter:title",
				content: loaderData?.title ?? ""
			},
			{
				name: "twitter:description",
				content: loaderData?.short_description ?? ""
			},
			...loaderData?.image_url ? [{
				property: "og:image",
				content: loaderData.image_url
			}, {
				name: "twitter:image",
				content: loaderData.image_url
			}] : []
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl(`/tours/${params.slug}`)
		}],
		scripts: loaderData ? [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "TouristTrip",
				name: loaderData.title,
				description: loaderData.short_description,
				image: loaderData.image_url ?? void 0,
				provider: {
					"@type": "TravelAgency",
					name: SITE_NAME
				},
				offers: {
					"@type": "Offer",
					price: loaderData.price_usd,
					priceCurrency: "USD",
					availability: "https://schema.org/InStock",
					url: absoluteUrl(`/tours/${params.slug}`)
				}
			})
		}] : []
	}),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
