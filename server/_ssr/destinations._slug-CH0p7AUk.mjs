import { o as destinationBySlugQuery } from "./queries-CwknXRs0.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as absoluteUrl, t as SITE_NAME } from "./site-BRP1auNI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations._slug-CH0p7AUk.js
var $$splitComponentImporter = () => import("./destinations._slug-lEUwJIB9.mjs");
var $$splitErrorComponentImporter = () => import("./destinations._slug-DSk9-7mO.mjs");
var $$splitNotFoundComponentImporter = () => import("./destinations._slug-CrPCZO_Y.mjs");
var Route = createFileRoute("/destinations/$slug")({
	loader: async ({ context, params }) => {
		const d = await context.queryClient.ensureQueryData(destinationBySlugQuery(params.slug));
		if (!d) throw notFound();
		return d;
	},
	head: ({ loaderData, params }) => ({
		meta: [
			{ title: `${loaderData?.name ?? "Destination"} — ${SITE_NAME}` },
			{
				name: "description",
				content: loaderData?.description ?? ""
			},
			{
				property: "og:title",
				content: loaderData?.name ?? ""
			},
			{
				property: "og:description",
				content: loaderData?.description ?? ""
			},
			{
				name: "twitter:title",
				content: loaderData?.name ?? ""
			},
			{
				name: "twitter:description",
				content: loaderData?.description ?? ""
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
			href: absoluteUrl(`/destinations/${params.slug}`)
		}]
	}),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
