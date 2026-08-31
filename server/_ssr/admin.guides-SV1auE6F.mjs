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
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { a as DialogTrigger, i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-B_4jaQOj.mjs";
import { t as ImageUpload } from "./image-upload-CwvKNVr-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.guides-SV1auE6F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminGuides() {
	const qc = useQueryClient();
	const { data: items = [] } = useQuery({
		queryKey: ["admin-guides"],
		queryFn: async () => {
			const { data, error } = await supabase.from("guides").select("*").order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const save = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = {
			name: String(fd.get("name")).trim(),
			photo_url: String(fd.get("photo_url") || "") || null,
			bio: String(fd.get("bio") || "") || null,
			languages: String(fd.get("languages") || "").split(",").map((s) => s.trim()).filter(Boolean),
			phone: String(fd.get("phone") || "") || null,
			email: String(fd.get("email") || "") || null,
			is_active: fd.get("is_active") === "on"
		};
		const { error } = await (editing ? supabase.from("guides").update(payload).eq("id", editing.id) : supabase.from("guides").insert(payload));
		if (error) {
			toast.error(error.message);
			return;
		}
		setOpen(false);
		setEditing(null);
		qc.invalidateQueries({ queryKey: ["admin-guides"] });
		qc.invalidateQueries({ queryKey: ["guides"] });
		toast.success("Saved");
	};
	const del = async (id) => {
		if (!confirm("Delete this guide?")) return;
		await supabase.from("guides").delete().eq("id", id);
		qc.invalidateQueries({ queryKey: ["admin-guides"] });
		qc.invalidateQueries({ queryKey: ["guides"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-2",
				children: "Operations"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold",
				children: "Guides"
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "New guide"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [editing ? "Edit" : "New", " guide"] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: save,
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "name",
									defaultValue: editing?.name,
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
								name: "photo_url",
								label: "Photo",
								folder: "guides",
								defaultValue: editing?.photo_url ?? ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Bio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									name: "bio",
									rows: 3,
									defaultValue: editing?.bio ?? ""
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Languages (comma separated)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "languages",
									defaultValue: editing?.languages?.join(", ") ?? "",
									placeholder: "English, French, Afar"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "phone",
										defaultValue: editing?.phone ?? ""
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "email",
										type: "email",
										defaultValue: editing?.email ?? ""
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "is_active",
									defaultChecked: editing?.is_active ?? true
								}), " Active"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								children: "Save"
							})
						]
					})]
				})]
			})]
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No guides yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl bg-card border border-border shadow-soft overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-6 py-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "Languages"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-6 py-3" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3",
							children: g.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: g.photo_url,
								alt: g.name,
								className: "h-9 w-9 rounded-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-9 w-9 rounded-full bg-muted block" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3 font-medium",
							children: g.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3 text-muted-foreground",
							children: g.languages.join(", ") || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3 text-muted-foreground",
							children: g.phone || g.email || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3",
							children: g.is_active ? "Active" : "Inactive"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-6 py-3 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => {
									setEditing(g);
									setOpen(true);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => del(g.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
							})]
						})
					]
				}, g.id)) })]
			})
		})]
	});
}
//#endregion
export { AdminGuides as component };
