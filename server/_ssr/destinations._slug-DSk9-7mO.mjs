import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations._slug-DSk9-7mO.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "container-page py-32 text-center",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: error.message
	})
}) });
//#endregion
export { SplitErrorComponent as errorComponent };
