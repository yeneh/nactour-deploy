import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { r as useCurrency } from "./auth-Bh2CRKjo.mjs";
import { i as Users, ut as Clock, z as MapPin } from "../_libs/lucide-react.mjs";
import { r as categoryLabel } from "./categories-CRdh_exv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tour-card-C-cBR8cP.js
var import_jsx_runtime = require_jsx_runtime();
function TourCard({ tour }) {
	const { t } = useTranslation();
	const { format } = useCurrency();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/tours/$slug",
		params: { slug: tour.slug },
		className: "group flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-lift transition-all duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-muted",
			children: [
				tour.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: tour.image_url,
					alt: tour.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/2 card-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 bg-gold text-gold-foreground text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold",
					children: categoryLabel(tour.category, t)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-3 left-3 right-3 text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold leading-tight",
						children: tour.title
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex-1 flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground line-clamp-2",
					children: tour.short_description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
								" ",
								tour.duration_days,
								" ",
								t("common.days")
							]
						}),
						tour.max_group_size ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }),
								" ",
								t("common.max_group"),
								" ",
								tour.max_group_size
							]
						}) : null,
						tour.difficulty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
								" ",
								tour.difficulty
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center justify-between pt-3 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: t("common.from")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-semibold text-primary",
						children: format(Number(tour.price_usd))
					})]
				})
			]
		})]
	});
}
//#endregion
export { TourCard as t };
