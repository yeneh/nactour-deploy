import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { M as Pencil, O as Plus, m as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { a as DialogTrigger, i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-B_4jaQOj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.gallery-DScY37n-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminGallery() {
	const qc = useQueryClient();
	const { data: items = [] } = useQuery({
		queryKey: ["admin-gallery"],
		queryFn: async () => (await supabase.from("gallery_items").select("*").order("sort_order")).data ?? []
	});
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const save = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = {
			title: String(fd.get("title") || ""),
			caption: String(fd.get("caption") || ""),
			media_url: String(fd.get("media_url")).trim(),
			media_type: "image",
			category: String(fd.get("category") || ""),
			sort_order: Number(fd.get("sort_order") || 0)
		};
		const { error } = await (editing ? supabase.from("gallery_items").update(payload).eq("id", editing.id) : supabase.from("gallery_items").insert(payload));
		if (error) {
			toast.error(error.message);
			return;
		}
		setOpen(false);
		setEditing(null);
		qc.invalidateQueries({ queryKey: ["admin-gallery"] });
		qc.invalidateQueries({ queryKey: ["gallery"] });
	};
	const del = async (id) => {
		if (!confirm("Delete?")) return;
		await supabase.from("gallery_items").delete().eq("id", id);
		qc.invalidateQueries({ queryKey: ["admin-gallery"] });
		qc.invalidateQueries({ queryKey: ["gallery"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-2",
				children: "Photos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold",
				children: "Gallery"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: (v) => {
					setOpen(v);
					if (!v) setEditing(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditing(null),
						className: "rounded-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "Add photo"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [editing ? "Edit" : "Add", " photo"] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: save,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Image URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "media_url",
								defaultValue: editing?.media_url ?? "",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "title",
								defaultValue: editing?.title ?? ""
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Caption" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "caption",
								defaultValue: editing?.caption ?? ""
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "category",
									defaultValue: editing?.category ?? ""
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Sort order" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "sort_order",
									type: "number",
									defaultValue: editing?.sort_order ?? 0
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: editing ? "Save" : "Add"
						})
					]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
			children: items.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative group rounded-xl overflow-hidden border border-border shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: g.media_url,
					alt: g.title ?? "",
					className: "aspect-square object-cover w-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 group-focus-within:bg-black/40 transition flex items-end p-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white text-xs flex-1 truncate",
							children: g.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "secondary",
							"aria-label": `Edit ${g.title || "photo"}`,
							onClick: () => {
								setEditing(g);
								setOpen(true);
							},
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "destructive",
							"aria-label": `Delete ${g.title || "photo"}`,
							onClick: () => del(g.id),
							className: "shrink-0 ml-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						})
					]
				})]
			}, g.id))
		})]
	});
}
//#endregion
export { AdminGallery as component };
