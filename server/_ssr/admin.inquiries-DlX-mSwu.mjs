import { t as supabase } from "./client-D06-73M8.mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { I as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.inquiries-DlX-mSwu.js
var import_jsx_runtime = require_jsx_runtime();
function AdminInquiries() {
	const qc = useQueryClient();
	const nav = useNavigate();
	const { data: messages = [] } = useQuery({
		queryKey: ["admin-inquiries"],
		queryFn: async () => {
			const { data, error } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const toggleRead = async (id, isRead) => {
		await supabase.from("contact_messages").update({ is_read: !isRead }).eq("id", id);
		qc.invalidateQueries({ queryKey: ["admin-inquiries"] });
	};
	const viewCustomer = async (email, name) => {
		const { data: existing } = await supabase.from("customers").select("id").eq("email", email).maybeSingle();
		if (existing) {
			nav({
				to: "/admin/crm/$customerId",
				params: { customerId: existing.id }
			});
			return;
		}
		const { data, error } = await supabase.from("customers").insert({
			email,
			full_name: name
		}).select("id").single();
		if (error) {
			toast.error(error.message);
			return;
		}
		nav({
			to: "/admin/crm/$customerId",
			params: { customerId: data.id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow mb-2",
			children: "CRM"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-semibold",
			children: "Inquiries"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl bg-card border border-border shadow-soft overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "From"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "Subject"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "Received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-3",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-6 py-3" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: `border-t border-border align-top ${m.is_read ? "" : "bg-primary/5"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-6 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: m.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: m.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3",
							children: m.subject || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3 text-muted-foreground max-w-sm truncate",
							children: m.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3 whitespace-nowrap text-muted-foreground",
							children: new Date(m.created_at).toLocaleDateString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleRead(m.id, m.is_read),
								className: `text-xs px-2 py-0.5 rounded-full ${m.is_read ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"}`,
								children: m.is_read ? "Read" : "Unread"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-3 text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => viewCustomer(m.email, m.name),
								children: ["View customer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 ml-1.5" })]
							})
						})
					]
				}, m.id)), messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-6 py-10 text-center text-muted-foreground",
					children: "No inquiries yet."
				}) })] })]
			})
		})]
	});
}
//#endregion
export { AdminInquiries as component };
