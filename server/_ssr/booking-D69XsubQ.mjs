import { t as supabase } from "./client-D06-73M8.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as string, u as object } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { n as absoluteUrl, t as SITE_NAME } from "./site-BRP1auNI.mjs";
import { t as tour_trek_default } from "./tour-trek-DJftqUPK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-D69XsubQ.js
var SESSION_KEY = "nct-session-id";
var SOURCE_KEY = "nct-source";
function getSessionId() {
	if (typeof window === "undefined") return "";
	let id = sessionStorage.getItem(SESSION_KEY);
	if (!id) {
		id = crypto.randomUUID();
		sessionStorage.setItem(SESSION_KEY, id);
	}
	return id;
}
function deriveSource() {
	if (typeof window === "undefined") return "direct";
	const utm = new URLSearchParams(window.location.search).get("utm_source");
	if (utm) return utm;
	if (!document.referrer) return "direct";
	try {
		const host = new URL(document.referrer).hostname.replace(/^www\./, "");
		return host === window.location.hostname ? "direct" : host;
	} catch {
		return "direct";
	}
}
/** First-touch source for the current browser session — used to label bookings. */
function getBookingSource() {
	if (typeof window === "undefined") return "direct";
	let source = sessionStorage.getItem(SOURCE_KEY);
	if (!source) {
		source = deriveSource();
		sessionStorage.setItem(SOURCE_KEY, source);
	}
	return source;
}
/** Anonymous, best-effort page-view beacon. Never throws, never blocks navigation. */
function trackPageView(path) {
	if (typeof window === "undefined" || path.startsWith("/admin")) return;
	getBookingSource();
	supabase.from("page_views").insert({
		path,
		referrer: document.referrer || null,
		session_id: getSessionId()
	}).then(() => {}, () => {});
}
var $$splitComponentImporter = () => import("./booking-DgC7fhrs.mjs");
var search = object({ tour: string().optional() });
var Route = createFileRoute("/booking")({
	validateSearch: search,
	head: () => ({
		meta: [
			{ title: `Book a tour — ${SITE_NAME}` },
			{
				name: "description",
				content: "Reserve your Djibouti journey. We'll respond within 24 hours with a tailored itinerary."
			},
			{
				property: "og:title",
				content: `Book a tour — ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Reserve your Djibouti journey. We'll respond within 24 hours with a tailored itinerary."
			},
			{
				property: "og:image",
				content: absoluteUrl(tour_trek_default)
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/booking")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { getBookingSource as n, trackPageView as r, Route as t };
