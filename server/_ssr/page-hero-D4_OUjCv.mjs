import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-D4_OUjCv.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle, image, children, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `relative w-full overflow-hidden ${compact ? "min-h-[42vh]" : "min-h-[60vh]"} flex items-end`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative container-page py-16 lg:py-24 text-primary-foreground",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold mb-3",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-3xl",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base sm:text-lg text-primary-foreground/85 leading-relaxed",
						children: subtitle
					}),
					children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7",
						children
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
