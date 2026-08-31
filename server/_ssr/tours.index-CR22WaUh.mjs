import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as string, u as object } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { n as absoluteUrl, t as SITE_NAME } from "./site-BRP1auNI.mjs";
import { t as tour_trek_default } from "./tour-trek-DJftqUPK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tours.index-CR22WaUh.js
var $$splitComponentImporter = () => import("./tours.index-CuGIbVrc.mjs");
var search = object({
	category: string().optional(),
	q: string().optional()
});
var Route = createFileRoute("/tours/")({
	validateSearch: search,
	head: () => ({
		meta: [
			{ title: `Tours — ${SITE_NAME}` },
			{
				name: "description",
				content: "Browse 8 categories of expertly-led tours: wildlife, cultural, trekking, photography, community and more."
			},
			{
				property: "og:title",
				content: `All tours — ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Curated journeys across Djibouti."
			},
			{
				property: "og:image",
				content: absoluteUrl(tour_trek_default)
			},
			{
				name: "twitter:title",
				content: `All tours — ${SITE_NAME}`
			},
			{
				name: "twitter:description",
				content: "Curated journeys across Djibouti."
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/tours")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
