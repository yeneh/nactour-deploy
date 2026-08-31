import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as blogQuery } from "./queries-CwknXRs0.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as PageHero } from "./page-hero-D4_OUjCv.mjs";
import { t as tour_history_default } from "./tour-history-DXzdWMej.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-yseD7aLL.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	const { t } = useTranslation();
	const { data: posts = [], isPending } = useQuery(blogQuery());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("blog.hero_eyebrow"),
		title: t("blog.hero_title"),
		subtitle: t("blog.hero_subtitle"),
		image: tour_history_default,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16",
		children: !isPending && posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t("blog.empty")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/tours",
				className: "text-primary hover:underline text-sm mt-2 inline-block",
				children: [t("common.browse_tours_instead"), " →"]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog/$slug",
				params: { slug: p.slug },
				className: "group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-lift transition-all",
				children: [p.cover_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[16/10] overflow-hidden bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.cover_image,
						alt: p.title,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground mb-2 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.author }), p.published_at && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", new Date(p.published_at).toLocaleDateString()] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold leading-tight group-hover:text-primary",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground line-clamp-3",
							children: p.excerpt
						})
					]
				})]
			}, p.id))
		})
	})] });
}
//#endregion
export { BlogPage as component };
