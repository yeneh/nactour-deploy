import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations._slug-CrPCZO_Y.js
var import_jsx_runtime = require_jsx_runtime();
function DestinationNotFound() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-32 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: t("destinations.not_found")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/destinations",
				children: t("destinations.all_destinations")
			})
		})]
	}) });
}
//#endregion
export { DestinationNotFound as notFoundComponent };
