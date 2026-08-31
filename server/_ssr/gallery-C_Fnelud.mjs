import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { l as galleryQuery } from "./queries-CwknXRs0.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as PageHero } from "./page-hero-D4_OUjCv.mjs";
import { t as tour_wildlife_default } from "./tour-wildlife-CIelsqmM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-C_Fnelud.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const { t } = useTranslation();
	const { data: items = [], isPending } = useQuery(galleryQuery());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("gallery.hero_eyebrow"),
		title: t("gallery.hero_title"),
		subtitle: t("gallery.hero_subtitle"),
		image: tour_wildlife_default,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16",
		children: !isPending && items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t("gallery.empty")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/tours",
				className: "text-primary hover:underline text-sm mt-2 inline-block",
				children: [t("common.browse_tours_instead"), " →"]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]",
			children: items.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-soft group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: g.media_url,
					alt: g.title ?? "",
					loading: "lazy",
					className: "w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
				}), g.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "px-4 py-3 bg-card text-sm text-muted-foreground",
					children: g.caption
				})]
			}, g.id))
		})
	})] });
}
//#endregion
export { GalleryPage as component };
