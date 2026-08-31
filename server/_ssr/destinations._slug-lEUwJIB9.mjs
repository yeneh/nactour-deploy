import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as toursQuery, o as destinationBySlugQuery } from "./queries-CwknXRs0.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { Dt as Sparkles, z as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as Route } from "./destinations._slug-CH0p7AUk.mjs";
import { t as TourCard } from "./tour-card-C-cBR8cP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations._slug-lEUwJIB9.js
var import_jsx_runtime = require_jsx_runtime();
function DestinationDetail() {
	const { t } = useTranslation();
	const { slug } = Route.useParams();
	const { data: d } = useQuery(destinationBySlugQuery(slug));
	const { data: tours = [] } = useQuery(toursQuery());
	if (!d) return null;
	const related = tours.filter((t) => t.destination_id === d.id);
	const mapSrc = d.latitude && d.longitude ? `https://www.openstreetmap.org/export/embed.html?bbox=${Number(d.longitude) - 1.5},${Number(d.latitude) - 1},${Number(d.longitude) + 1.5},${Number(d.latitude) + 1}&layer=mapnik&marker=${d.latitude},${d.longitude}` : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative w-full overflow-hidden min-h-[60vh] flex items-end",
		children: [
			d.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: d.image_url,
				alt: d.name,
				className: "absolute inset-0 h-full w-full object-cover",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative container-page py-16 text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-gold mb-3 inline-flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
							" ",
							d.region
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl",
						children: d.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lg text-primary-foreground/85",
						children: d.description
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-16 grid lg:grid-cols-3 gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-2 space-y-8",
			children: [
				d.content && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: String(d.content).split(/\n{2,}/).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-muted-foreground whitespace-pre-line",
						children: p
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold mb-4",
					children: t("destinations.highlights")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid sm:grid-cols-2 gap-3",
					children: d.highlights?.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 rounded-xl border border-border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: h
						})]
					}, h))
				})] }),
				related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl font-semibold mb-4",
					children: [
						t("destinations.tours_in"),
						" ",
						d.name
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-5",
					children: related.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: t }, t.id))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:col-span-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl overflow-hidden border border-border shadow-soft bg-card",
				children: [mapSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: `Map of ${d.name}`,
					src: mapSrc,
					className: "w-full h-72 border-0",
					loading: "lazy"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72 grid place-items-center text-sm text-muted-foreground",
					children: t("destinations.map_unavailable")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: t("destinations.coordinates")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono",
						children: [
							d.latitude,
							", ",
							d.longitude
						]
					})]
				})]
			})
		})]
	})] });
}
//#endregion
export { DestinationDetail as component };
