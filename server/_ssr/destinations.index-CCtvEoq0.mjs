import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as destinationsQuery } from "./queries-CwknXRs0.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { z as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as PageHero } from "./page-hero-D4_OUjCv.mjs";
import { t as tour_nature_default } from "./tour-nature-l6TcKERM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations.index-CCtvEoq0.js
var import_jsx_runtime = require_jsx_runtime();
function DestinationsPage() {
	const { t } = useTranslation();
	const { data: destinations = [], isPending } = useQuery(destinationsQuery());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("destinations.hero_eyebrow"),
		title: t("destinations.hero_title"),
		subtitle: t("destinations.hero_subtitle"),
		image: tour_nature_default,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16 lg:py-24",
		children: !isPending && destinations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t("destinations.empty")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/tours",
				className: "text-primary hover:underline text-sm mt-2 inline-block",
				children: [t("common.browse_tours_instead"), " →"]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/destinations/$slug",
				params: { slug: d.slug },
				className: "group relative h-80 rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all",
				children: [
					d.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d.image_url,
						alt: d.name,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 card-overlay" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-0 left-0 right-0 p-6 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-widest text-gold mb-1 inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
									" ",
									d.region
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: d.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-primary-foreground/80 line-clamp-2",
								children: d.description
							})
						]
					})
				]
			}, d.id))
		})
	})] });
}
//#endregion
export { DestinationsPage as component };
