import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { At as LoaderCircle, c as Upload, n as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as uploadMedia } from "./upload-ddEtPdcV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/image-upload-CwvKNVr-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Image field with device upload + manual URL. Submits the final URL as a hidden input. */
function ImageUpload({ name, label = "Image", defaultValue, folder = "uploads" }) {
	const [url, setUrl] = (0, import_react.useState)(defaultValue ?? "");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const inputRef = (0, import_react.useRef)(null);
	const onFile = async (file) => {
		if (!file) return;
		setBusy(true);
		try {
			setUrl(await uploadMedia(file, folder));
			toast.success("Image uploaded");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setBusy(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: url,
					alt: "",
					className: "h-24 w-40 object-cover rounded-md border border-border"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "icon",
					variant: "destructive",
					className: "absolute -top-2 -right-2 h-6 w-6 rounded-full",
					onClick: () => setUrl(""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: url,
					onChange: (e) => setUrl(e.target.value),
					placeholder: "Paste an image URL…",
					className: "flex-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					disabled: busy,
					onClick: () => inputRef.current?.click(),
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 hidden sm:inline",
						children: "Upload"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => onFile(e.target.files?.[0])
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name,
				value: url
			})
		]
	});
}
//#endregion
export { ImageUpload as t };
