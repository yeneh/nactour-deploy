import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { r as Wallet } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-B_4jaQOj.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.bookings-CLTRSoLB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUSES = [
	"pending",
	"confirmed",
	"cancelled",
	"completed"
];
function AdminBookings() {
	const qc = useQueryClient();
	const { data: bookings = [] } = useQuery({
		queryKey: ["admin-bookings"],
		queryFn: async () => {
			const { data, error } = await supabase.from("bookings").select("*, tour:tours(title)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: payments = [] } = useQuery({
		queryKey: ["admin-bookings-payments"],
		queryFn: async () => {
			const { data, error } = await supabase.from("payments").select("booking_id, amount, status");
			if (error) throw error;
			return data ?? [];
		}
	});
	const [payFor, setPayFor] = (0, import_react.useState)(null);
	const paidByBooking = /* @__PURE__ */ new Map();
	for (const p of payments) {
		if (p.status !== "paid") continue;
		paidByBooking.set(p.booking_id, (paidByBooking.get(p.booking_id) ?? 0) + Number(p.amount));
	}
	const updateStatus = async (id, status) => {
		const { error } = await supabase.from("bookings").update({ status }).eq("id", id);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Status updated");
		qc.invalidateQueries({ queryKey: ["admin-bookings"] });
	};
	const recordPayment = async (e) => {
		e.preventDefault();
		if (!payFor) return;
		const fd = new FormData(e.currentTarget);
		const amount = Number(fd.get("amount") || 0);
		const method = String(fd.get("method") || "bank_transfer");
		const paid_at = String(fd.get("paid_at") || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
		if (amount <= 0) {
			toast.error("Enter an amount");
			return;
		}
		const { error } = await supabase.from("payments").insert({
			booking_id: payFor.id,
			amount,
			method,
			status: "paid",
			provider: "manual",
			paid_at: new Date(paid_at).toISOString()
		});
		if (error) {
			toast.error(error.message);
			return;
		}
		setPayFor(null);
		qc.invalidateQueries({ queryKey: ["admin-bookings-payments"] });
		toast.success("Payment recorded");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-2",
				children: "Reservations"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold",
				children: "Bookings"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-card border border-border shadow-soft overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Customer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Tour"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Travel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Group"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Total"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Outstanding"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-6 py-3" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [bookings.map((b) => {
						const paid = paidByBooking.get(b.id) ?? 0;
						const outstanding = b.total_price != null ? Math.max(0, Number(b.total_price) - paid) : null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border align-top",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: b.customer_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: b.customer_email
										}),
										b.customer_phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: b.customer_phone
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: b.tour?.title ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: b.travel_date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: b.group_size
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: b.total_price ? `$${Number(b.total_price).toLocaleString()}` : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: outstanding != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: outstanding > 0 ? "text-primary font-medium" : "text-muted-foreground",
										children: ["$", outstanding.toLocaleString()]
									}) : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: b.status,
										onValueChange: (v) => updateStatus(b.id, v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "w-36",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: s,
											children: s
										}, s)) })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										className: "rounded-full",
										onClick: () => setPayFor({
											id: b.id,
											total: b.total_price
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-3.5 w-3.5 mr-1.5" }), " Record payment"]
									})
								})
							]
						}, b.id);
					}), bookings.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 8,
						className: "px-6 py-10 text-center text-muted-foreground",
						children: "No bookings yet."
					}) })] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!payFor,
				onOpenChange: (v) => {
					if (!v) setPayFor(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Record a payment" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: recordPayment,
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Amount ", payFor?.total != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground font-normal",
									children: [
										"(total $",
										Number(payFor.total).toLocaleString(),
										")"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "amount",
									type: "number",
									step: "0.01",
									min: .01,
									required: true,
									autoFocus: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Method" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									name: "method",
									defaultValue: "bank_transfer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "bank_transfer",
											children: "Bank transfer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "card",
											children: "Card"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "cash",
											children: "Cash"
										})
									] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date received" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "paid_at",
									type: "date",
									defaultValue: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								children: "Save payment"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { AdminBookings as component };
