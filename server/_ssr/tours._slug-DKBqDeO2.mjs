import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tours._slug-DKBqDeO2.js
var import_jsx_runtime = require_jsx_runtime();
function TourError({ error }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-32 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: t("tours.couldnt_load")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-2",
			children: error.message
		})]
	}) });
}
//#endregion
export { TourError as errorComponent };
