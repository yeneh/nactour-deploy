import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { i as blogBySlugQuery } from "./queries-CwknXRs0.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as Route } from "./blog._slug-KoJigAek.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CMnPZdFd.js
var import_jsx_runtime = require_jsx_runtime();
function PostPage() {
	const { slug } = Route.useParams();
	const { data: p } = useQuery(blogBySlugQuery(slug));
	if (!p) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container-page py-16 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4",
				children: "Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl sm:text-5xl font-semibold leading-tight",
				children: p.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 text-sm text-muted-foreground",
				children: [p.author, p.published_at && ` · ${new Date(p.published_at).toLocaleDateString()}`]
			}),
			p.cover_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.cover_image,
				alt: p.title,
				className: "mt-8 w-full rounded-2xl shadow-soft",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-lg leading-relaxed text-foreground/85 whitespace-pre-line",
				children: p.content
			})
		]
	}) });
}
//#endregion
export { PostPage as component };
