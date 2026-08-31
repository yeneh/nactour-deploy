import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as string, u as object } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { n as absoluteUrl, t as SITE_NAME } from "./site-BRP1auNI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-D9nFvzmz.js
var $$splitComponentImporter = () => import("./search-D662GyrH.mjs");
var search = object({
	q: string().optional(),
	category: string().optional(),
	destination: string().optional(),
	duration: string().optional(),
	budget: string().optional()
});
var Route = createFileRoute("/search")({
	validateSearch: search,
	head: () => ({
		meta: [{ title: `Search tours — ${SITE_NAME}` }, {
			name: "description",
			content: "Find your next Djibouti journey — matching tours, popular destinations, best-selling packages and special offers."
		}],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/search")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
