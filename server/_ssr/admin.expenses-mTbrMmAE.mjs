import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { c as driversQuery, u as guidesQuery } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { M as Pencil, O as Plus, m as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { a as DialogTrigger, i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-B_4jaQOj.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.expenses-mTbrMmAE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "expense",
		label: "Expense"
	},
	{
		id: "supplier_payment",
		label: "Supplier payment"
	},
	{
		id: "guide_commission",
		label: "Guide commission"
	},
	{
		id: "driver_payment",
		label: "Driver payment"
	},
	{
		id: "tax",
		label: "Tax"
	},
	{
		id: "refund",
		label: "Refund"
	}
];
var CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));
function AdminExpenses() {
	const qc = useQueryClient();
	const { data: items = [] } = useQuery({
		queryKey: ["admin-expenses"],
		queryFn: async () => {
			const { data, error } = await supabase.from("expenses").select("*").order("expense_date", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: guides = [] } = useQuery(guidesQuery());
	const { data: drivers = [] } = useQuery(driversQuery());
	const { data: bookings = [] } = useQuery({
		queryKey: ["admin-expenses-bookings"],
		queryFn: async () => {
			const { data, error } = await supabase.from("bookings").select("id, customer_name, travel_date").order("created_at", { ascending: false }).limit(200);
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: tours = [] } = useQuery({
		queryKey: ["admin-expenses-tours"],
		queryFn: async () => {
			const { data, error } = await supabase.from("tours").select("id, title").order("title");
			if (error) throw error;
			return data ?? [];
		}
	});
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [category, setCategory] = (0, import_react.useState)("expense");
	const [guideId, setGuideId] = (0, import_react.useState)("");
	const [driverId, setDriverId] = (0, import_react.useState)("");
	const [tourId, setTourId] = (0, import_react.useState)("");
	const [bookingId, setBookingId] = (0, import_react.useState)("");
	const openEdit = (e) => {
		setEditing(e);
		setCategory(e?.category ?? "expense");
		setGuideId(e?.guide_id ?? "");
		setDriverId(e?.driver_id ?? "");
		setTourId(e?.tour_id ?? "");
		setBookingId(e?.booking_id ?? "");
		setOpen(true);
	};
	const save = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = {
			category,
			amount: Number(fd.get("amount") || 0),
			currency: String(fd.get("currency") || "USD").toUpperCase(),
			description: String(fd.get("description") || "") || null,
			payee: String(fd.get("payee") || "") || null,
			guide_id: category === "guide_commission" && guideId ? guideId : null,
			driver_id: category === "driver_payment" && driverId ? driverId : null,
			tour_id: tourId || null,
			booking_id: bookingId || null,
			expense_date: String(fd.get("expense_date") || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10))
		};
		const { error } = await (editing ? supabase.from("expenses").update(payload).eq("id", editing.id) : supabase.from("expenses").insert(payload));
		if (error) {
			toast.error(error.message);
			return;
		}
		setOpen(false);
		setEditing(null);
		qc.invalidateQueries({ queryKey: ["admin-expenses"] });
		toast.success("Saved");
	};
	const del = async (id) => {
		if (!confirm("Delete this entry?")) return;
		await supabase.from("expenses").delete().eq("id", id);
		qc.invalidateQueries({ queryKey: ["admin-expenses"] });
	};
	const totalsByCategory = CATEGORIES.map((c) => ({
		...c,
		total: items.filter((i) => i.category === c.id).reduce((s, i) => s + Number(i.amount), 0)
	}));
	const guideById = new Map(guides.map((g) => [g.id, g.name]));
	const driverById = new Map(drivers.map((d) => [d.id, d.name]));
	const tourById = new Map(tours.map((t) => [t.id, t.title]));
	const bookingById = new Map(bookings.map((b) => [b.id, b.customer_name]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-2",
					children: "Finance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold",
					children: "Expenses"
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "New entry"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-lg max-h-[90vh] overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [editing ? "Edit" : "New", " entry"] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: save,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: category,
										onValueChange: setCategory,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: c.id,
											children: c.label
										}, c.id)) })]
									})]
								}),
								category === "guide_commission" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Guide" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: guideId,
										onValueChange: setGuideId,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a guide" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: guides.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: g.id,
											children: g.name
										}, g.id)) })]
									})]
								}),
								category === "driver_payment" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Driver" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: driverId,
										onValueChange: setDriverId,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a driver" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: drivers.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: d.id,
											children: d.name
										}, d.id)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											name: "amount",
											type: "number",
											step: "0.01",
											min: 0,
											defaultValue: editing?.amount ?? "",
											required: true
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Currency" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											name: "currency",
											defaultValue: editing?.currency ?? "USD",
											maxLength: 3,
											className: "uppercase"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Payee ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground font-normal",
										children: "(supplier/vendor name)"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "payee",
										defaultValue: editing?.payee ?? ""
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										name: "description",
										rows: 2,
										defaultValue: editing?.description ?? ""
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Tour ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-normal",
											children: "(optional)"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: tourId,
											onValueChange: setTourId,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "None" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: tours.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: t.id,
												children: t.title
											}, t.id)) })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Booking ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-normal",
											children: "(optional)"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: bookingId,
											onValueChange: setBookingId,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "None" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: bookings.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
												value: b.id,
												children: [
													b.customer_name,
													" · ",
													b.travel_date
												]
											}, b.id)) })]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "expense_date",
										type: "date",
										defaultValue: editing?.expense_date ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
										required: true
									})]
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-3 lg:grid-cols-6 gap-3",
				children: totalsByCategory.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-widest text-muted-foreground",
						children: c.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-xl font-semibold mt-1",
						children: ["$", c.total.toLocaleString()]
					})]
				}, c.id))
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No expenses logged yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-card border border-border shadow-soft overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Payee / linked to"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Description"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3 text-right",
								children: "Amount"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-6 py-3" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 whitespace-nowrap",
								children: e.expense_date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/10 text-primary",
									children: CATEGORY_LABEL[e.category] ?? e.category
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground",
								children: e.payee || e.guide_id && guideById.get(e.guide_id) || e.driver_id && driverById.get(e.driver_id) || e.tour_id && tourById.get(e.tour_id) || e.booking_id && bookingById.get(e.booking_id) || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground max-w-xs truncate",
								children: e.description || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-6 py-3 text-right font-medium tabular-nums",
								children: ["$", Number(e.amount).toLocaleString()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-6 py-3 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => openEdit(e),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => del(e.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
								})]
							})
						]
					}, e.id)) })]
				})
			})
		]
	});
}
//#endregion
export { AdminExpenses as component };
