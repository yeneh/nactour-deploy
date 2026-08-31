import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as toursQuery } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { r as categoryLabel, t as TOUR_CATEGORIES } from "./categories-CRdh_exv.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as PageHero } from "./page-hero-D4_OUjCv.mjs";
import { t as tour_trek_default } from "./tour-trek-DJftqUPK.mjs";
import { t as TourCard } from "./tour-card-C-cBR8cP.mjs";
import { t as Route } from "./tours.index-CR22WaUh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tours.index-CuGIbVrc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ToursPage() {
	const { t } = useTranslation();
	const { category: initialCategory, q } = Route.useSearch();
	const [category, setCategory] = (0, import_react.useState)(initialCategory);
	const { data: tours = [], isLoading } = useQuery(toursQuery());
	const filtered = (0, import_react.useMemo)(() => {
		let list = category ? tours.filter((t) => t.category === category) : tours;
		if (q) {
			const needle = q.toLowerCase();
			list = list.filter((t) => t.title?.toLowerCase().includes(needle) || t.description?.toLowerCase().includes(needle) || t.category?.toLowerCase().includes(needle));
		}
		return list;
	}, [
		tours,
		category,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("tours.hero_eyebrow"),
		title: t("tours.hero_title"),
		subtitle: t("tours.hero_subtitle"),
		image: tour_trek_default,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-12 lg:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2 mb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: !category ? "default" : "outline",
				className: "rounded-full",
				onClick: () => setCategory(void 0),
				children: t("tours.all")
			}), TOUR_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				variant: category === c.id ? "default" : "outline",
				className: "rounded-full",
				onClick: () => setCategory(c.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-3.5 w-3.5 mr-1.5" }), categoryLabel(c.id, t)]
			}, c.id))]
		}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
			children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 rounded-2xl bg-muted animate-pulse" }, i))
		}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t("tours.empty")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "text-primary hover:underline text-sm mt-2 inline-block",
				children: [t("tours.custom_itinerary"), " →"]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
			children: filtered.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: t }, t.id))
		})]
	})] });
}
//#endregion
export { ToursPage as component };
