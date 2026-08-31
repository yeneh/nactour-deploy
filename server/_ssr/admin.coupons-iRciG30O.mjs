import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { M as Pencil, O as Plus, g as Tag, m as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { a as DialogTrigger, i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-B_4jaQOj.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.coupons-iRciG30O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCoupons() {
	const qc = useQueryClient();
	const { data: items = [] } = useQuery({
		queryKey: ["admin-coupons"],
		queryFn: async () => {
			const { data, error } = await supabase.from("coupons").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [discountType, setDiscountType] = (0, import_react.useState)("percentage");
	const save = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = {
			code: String(fd.get("code")).trim().toUpperCase(),
			discount_type: discountType,
			discount_value: Number(fd.get("discount_value") || 0),
			starts_at: fd.get("starts_at") ? new Date(String(fd.get("starts_at"))).toISOString() : null,
			expires_at: fd.get("expires_at") ? new Date(String(fd.get("expires_at"))).toISOString() : null,
			min_booking_amount: Number(fd.get("min_booking_amount") || 0),
			max_usage: fd.get("max_usage") ? Number(fd.get("max_usage")) : null,
			is_active: fd.get("is_active") === "on"
		};
		const { error } = await (editing ? supabase.from("coupons").update(payload).eq("id", editing.id) : supabase.from("coupons").insert(payload));
		if (error) {
			toast.error(error.message);
			return;
		}
		setOpen(false);
		setEditing(null);
		qc.invalidateQueries({ queryKey: ["admin-coupons"] });
		qc.invalidateQueries({ queryKey: ["active-coupons"] });
		toast.success("Saved");
	};
	const del = async (id) => {
		if (!confirm("Delete this coupon?")) return;
		await supabase.from("coupons").delete().eq("id", id);
		qc.invalidateQueries({ queryKey: ["admin-coupons"] });
		qc.invalidateQueries({ queryKey: ["active-coupons"] });
	};
	const openEdit = (c) => {
		setEditing(c);
		setDiscountType(c?.discount_type ?? "percentage");
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-2",
				children: "Promotions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold",
				children: "Coupons"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: (v) => {
					setOpen(v);
					if (!v) setEditing(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => openEdit(null),
						className: "rounded-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "New coupon"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [editing ? "Edit" : "New", " coupon"] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: save,
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "code",
										defaultValue: editing?.code,
										required: true,
										className: "uppercase"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Discount type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: discountType,
										onValueChange: (v) => setDiscountType(v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "percentage",
											children: "Percentage (%)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "fixed",
											children: "Fixed amount (USD)"
										})] })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: discountType === "percentage" ? "Discount %" : "Discount (USD)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "discount_value",
										type: "number",
										step: "0.01",
										min: 0,
										defaultValue: editing?.discount_value ?? 10,
										required: true
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Min. booking (USD)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "min_booking_amount",
										type: "number",
										step: "0.01",
										min: 0,
										defaultValue: editing?.min_booking_amount ?? 0
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Starts" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "starts_at",
										type: "date",
										defaultValue: editing?.starts_at?.slice(0, 10) ?? ""
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Expires" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "expires_at",
										type: "date",
										defaultValue: editing?.expires_at?.slice(0, 10) ?? ""
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Max uses ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground font-normal",
									children: "(optional)"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "max_usage",
									type: "number",
									min: 1,
									defaultValue: editing?.max_usage ?? ""
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "is_active",
									defaultChecked: editing?.is_active ?? true
								}), " Active — visible on the site's \"Special offers\""]
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
			children: "No coupons yet. Real, active coupons created here appear in the site's \"Special offers\" section — nothing is shown until you add one."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
			children: items.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card border border-border p-5 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 font-mono text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5 text-gold" }), c.code]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${c.is_active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`,
							children: c.is_active ? "Active" : "Inactive"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-display font-semibold mt-2",
						children: c.discount_type === "percentage" ? `${c.discount_value}% off` : `$${c.discount_value} off`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: [c.min_booking_amount > 0 ? `Min. booking $${c.min_booking_amount}` : "No minimum", c.expires_at ? ` · Expires ${new Date(c.expires_at).toLocaleDateString()}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Used ",
							c.usage_count,
							" time",
							c.usage_count === 1 ? "" : "s",
							c.max_usage ? ` / ${c.max_usage}` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => openEdit(c),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => del(c.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
						})]
					})
				]
			}, c.id))
		})]
	});
}
//#endregion
export { AdminCoupons as component };
