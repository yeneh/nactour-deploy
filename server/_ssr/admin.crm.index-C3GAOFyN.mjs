import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { I as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { C as Search, O as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { a as DialogTrigger, i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-B_4jaQOj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.crm.index-C3GAOFyN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCrmList() {
	const qc = useQueryClient();
	const nav = useNavigate();
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const { data, isLoading } = useQuery({
		queryKey: ["admin-crm-list"],
		queryFn: async () => {
			const [customersRes, bookingsRes, messagesRes, commsRes] = await Promise.all([
				supabase.from("customers").select("*").order("created_at", { ascending: false }),
				supabase.from("bookings").select("customer_email, status, total_price, created_at"),
				supabase.from("contact_messages").select("email, created_at"),
				supabase.from("customer_communications").select("customer_id, created_at")
			]);
			const customers = customersRes.data ?? [];
			const bookings = bookingsRes.data ?? [];
			const messages = messagesRes.data ?? [];
			const comms = commsRes.data ?? [];
			return customers.map((c) => {
				const theirBookings = bookings.filter((b) => b.customer_email === c.email);
				const spent = theirBookings.filter((b) => b.status !== "cancelled").reduce((s, b) => s + Number(b.total_price ?? 0), 0);
				const lastContact = [
					theirBookings.reduce((acc, b) => !acc || b.created_at > acc ? b.created_at : acc, null),
					messages.filter((m) => m.email === c.email).reduce((acc, m) => !acc || m.created_at > acc ? m.created_at : acc, null),
					comms.filter((k) => k.customer_id === c.id).reduce((acc, k) => !acc || k.created_at > acc ? k.created_at : acc, null)
				].filter(Boolean).sort().at(-1) ?? null;
				return {
					...c,
					bookingCount: theirBookings.length,
					spent,
					lastContact
				};
			});
		}
	});
	const rows = (data ?? []).filter((c) => {
		if (!query.trim()) return true;
		const q = query.toLowerCase();
		return c.email.toLowerCase().includes(q) || (c.full_name ?? "").toLowerCase().includes(q);
	});
	const createCustomer = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const email = String(fd.get("email") || "").trim();
		if (!email) return;
		const { data: created, error } = await supabase.from("customers").insert({
			email,
			full_name: String(fd.get("full_name") || "") || null,
			phone: String(fd.get("phone") || "") || null
		}).select("id").single();
		if (error) {
			toast.error(error.message);
			return;
		}
		setOpen(false);
		qc.invalidateQueries({ queryKey: ["admin-crm-list"] });
		nav({
			to: "/admin/crm/$customerId",
			params: { customerId: created.id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-2",
					children: "CRM"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold",
					children: "Customers"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "New customer"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New customer" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: createCustomer,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "email",
										type: "email",
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { name: "full_name" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { name: "phone" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full",
									children: "Create"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search by name or email…",
					className: "pl-9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-card border border-border shadow-soft overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Bookings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Total spent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Tags"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Last contact"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [rows.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border hover:bg-muted/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin/crm/$customerId",
									params: { customerId: c.id },
									className: "font-medium hover:text-primary",
									children: c.full_name || "—"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground",
								children: c.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3",
								children: c.bookingCount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-6 py-3",
								children: ["$", c.spent.toLocaleString()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1",
									children: c.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-muted text-muted-foreground",
										children: t
									}, t))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground whitespace-nowrap",
								children: c.lastContact ? new Date(c.lastContact).toLocaleDateString() : "—"
							})
						]
					}, c.id)), !isLoading && rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "px-6 py-10 text-center text-muted-foreground",
						children: "No customers yet."
					}) })] })]
				})
			})
		]
	});
}
//#endregion
export { AdminCrmList as component };
