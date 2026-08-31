import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as LANGUAGES, t as CURRENCIES } from "./currency-CTbvXQUp.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { O as Plus, at as Download, et as FileText, m as Trash2, wt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
import { t as Route } from "./admin.crm._customerId-DTTlq7mu.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BYfOmXtJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.crm._customerId-CmDylJSc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function customerQuery(id) {
	return {
		queryKey: ["customer", id],
		queryFn: async () => {
			const { data, error } = await supabase.from("customers").select("*").eq("id", id).maybeSingle();
			if (error) throw error;
			return data;
		}
	};
}
function CustomerProfile() {
	const { customerId } = Route.useParams();
	const { data: customer, isLoading } = useQuery(customerQuery(customerId));
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-10 text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (!customer) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-10 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Customer not found."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/crm",
				children: "Back to customers"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				size: "icon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/crm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-1",
					children: "Customers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold truncate",
					children: customer.full_name || customer.email
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "contact",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "h-auto flex-wrap justify-start gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "contact",
							children: "Contact & Preferences"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "bookings",
							children: "Bookings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "inquiries",
							children: "Inquiries"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "communication",
							children: "Communication"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "payments",
							children: "Payments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "reviews",
							children: "Reviews"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "documents",
							children: "Documents"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "contact",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactTab, { customer })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "bookings",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingsTab, { email: customer.email })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "inquiries",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiriesTab, { email: customer.email })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "communication",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunicationTab, { customerId: customer.id })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "payments",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentsTab, { email: customer.email })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "reviews",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsTab, { email: customer.email })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "documents",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsTab, { customerId: customer.id })
				})
			]
		})]
	});
}
function ContactTab({ customer }) {
	const qc = useQueryClient();
	const [language, setLanguage] = (0, import_react.useState)(customer.preferred_language ?? "");
	const [currency, setCurrency] = (0, import_react.useState)(customer.preferred_currency ?? "");
	const save = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = {
			full_name: String(fd.get("full_name") || "") || null,
			email: String(fd.get("email") || "").trim(),
			phone: String(fd.get("phone") || "") || null,
			nationality: String(fd.get("nationality") || "") || null,
			country: String(fd.get("country") || "") || null,
			preferred_language: language || null,
			preferred_currency: currency || null,
			dietary_notes: String(fd.get("dietary_notes") || "") || null,
			marketing_opt_in: fd.get("marketing_opt_in") === "on",
			tags: String(fd.get("tags") || "").split(",").map((s) => s.trim()).filter(Boolean),
			notes: String(fd.get("notes") || "") || null
		};
		const { error } = await supabase.from("customers").update(payload).eq("id", customer.id);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Saved");
		qc.invalidateQueries({ queryKey: ["customer", customer.id] });
		qc.invalidateQueries({ queryKey: ["admin-crm-list"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: save,
		className: "max-w-2xl space-y-4 rounded-2xl border border-border bg-card p-6 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "full_name",
						defaultValue: customer.full_name ?? ""
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "email",
						type: "email",
						defaultValue: customer.email,
						required: true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "phone",
						defaultValue: customer.phone ?? ""
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Nationality" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "nationality",
						defaultValue: customer.nationality ?? ""
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Country" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "country",
						defaultValue: customer.country ?? ""
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Preferred language" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: language,
						onValueChange: setLanguage,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "None" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: l.code,
							children: l.label
						}, l.code)) })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Preferred currency" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: currency,
						onValueChange: setCurrency,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "None" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CURRENCIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: c.code,
							children: c.label
						}, c.code)) })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Tags ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground font-normal",
						children: "(comma separated)"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "tags",
						defaultValue: customer.tags.join(", "),
						placeholder: "VIP, repeat"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Dietary notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					name: "dietary_notes",
					rows: 2,
					defaultValue: customer.dietary_notes ?? ""
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Internal notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					name: "notes",
					rows: 3,
					defaultValue: customer.notes ?? ""
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					name: "marketing_opt_in",
					defaultChecked: customer.marketing_opt_in
				}), " Opted in to marketing"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Save"
			})
		]
	});
}
function BookingsTab({ email }) {
	const { data: bookings = [] } = useQuery({
		queryKey: ["customer-bookings", email],
		queryFn: async () => {
			const { data, error } = await supabase.from("bookings").select("*, tour:tours(title)").eq("customer_email", email).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: payments = [] } = useQuery({
		queryKey: ["customer-bookings-payments", email],
		queryFn: async () => {
			const ids = bookings.map((b) => b.id);
			if (ids.length === 0) return [];
			const { data, error } = await supabase.from("payments").select("booking_id, amount, status").in("booking_id", ids);
			if (error) throw error;
			return data ?? [];
		},
		enabled: bookings.length > 0
	});
	const paidByBooking = /* @__PURE__ */ new Map();
	for (const p of payments) {
		if (p.status !== "paid") continue;
		paidByBooking.set(p.booking_id, (paidByBooking.get(p.booking_id) ?? 0) + Number(p.amount));
	}
	if (bookings.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "No bookings yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-border bg-card shadow-soft overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3",
						children: "Tour"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3",
						children: "Travel date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3",
						children: "Total"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3",
						children: "Outstanding"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3",
						children: "Status"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: bookings.map((b) => {
				const outstanding = b.total_price != null ? Math.max(0, Number(b.total_price) - (paidByBooking.get(b.id) ?? 0)) : null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 font-medium",
							children: b.tour?.title ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: b.travel_date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: b.total_price ? `$${Number(b.total_price).toLocaleString()}` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: outstanding != null ? `$${outstanding.toLocaleString()}` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 capitalize",
							children: b.status
						})
					]
				}, b.id);
			}) })]
		})
	});
}
function InquiriesTab({ email }) {
	const { data: messages = [] } = useQuery({
		queryKey: ["customer-inquiries", email],
		queryFn: async () => {
			const { data, error } = await supabase.from("contact_messages").select("*").eq("email", email).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	if (messages.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "No inquiries yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3 max-w-2xl",
		children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: m.subject || "(no subject)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: new Date(m.created_at).toLocaleDateString()
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mt-2 whitespace-pre-line",
				children: m.message
			})]
		}, m.id))
	});
}
var CHANNELS = [
	{
		id: "email",
		label: "Email"
	},
	{
		id: "phone",
		label: "Phone"
	},
	{
		id: "whatsapp",
		label: "WhatsApp"
	},
	{
		id: "in_person",
		label: "In person"
	},
	{
		id: "note",
		label: "Note"
	}
];
function CommunicationTab({ customerId }) {
	const qc = useQueryClient();
	const { data: log = [] } = useQuery({
		queryKey: ["customer-communications", customerId],
		queryFn: async () => {
			const { data, error } = await supabase.from("customer_communications").select("*").eq("customer_id", customerId).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const [channel, setChannel] = (0, import_react.useState)("note");
	const [direction, setDirection] = (0, import_react.useState)("outbound");
	const add = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const { data: { user } } = await supabase.auth.getUser();
		const { error } = await supabase.from("customer_communications").insert({
			customer_id: customerId,
			channel,
			direction,
			subject: String(fd.get("subject") || "") || null,
			body: String(fd.get("body") || "") || null,
			created_by: user?.id ?? null
		});
		if (error) {
			toast.error(error.message);
			return;
		}
		e.target.reset();
		qc.invalidateQueries({ queryKey: ["customer-communications", customerId] });
		toast.success("Logged");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: add,
			className: "rounded-2xl border border-border bg-card p-5 shadow-soft space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Channel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: channel,
							onValueChange: setChannel,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CHANNELS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: c.id,
								children: c.label
							}, c.id)) })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Direction" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: direction,
							onValueChange: setDirection,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "outbound",
								children: "Outbound (we contacted them)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "inbound",
								children: "Inbound (they contacted us)"
							})] })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Subject" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { name: "subject" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						name: "body",
						rows: 3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "Log interaction"]
				})
			]
		}), log.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No interactions logged yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: log.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "uppercase tracking-widest",
							children: [
								CHANNELS.find((ch) => ch.id === c.channel)?.label ?? c.channel,
								" · ",
								c.direction
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(c.created_at).toLocaleString() })]
					}),
					c.subject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium mt-1",
						children: c.subject
					}),
					c.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1 whitespace-pre-line",
						children: c.body
					})
				]
			}, c.id))
		})]
	});
}
function PaymentsTab({ email }) {
	const { data: payments = [] } = useQuery({
		queryKey: ["customer-payments", email],
		queryFn: async () => {
			const { data: bookings } = await supabase.from("bookings").select("id").eq("customer_email", email);
			const ids = (bookings ?? []).map((b) => b.id);
			if (ids.length === 0) return [];
			const { data, error } = await supabase.from("payments").select("*").in("booking_id", ids).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	if (payments.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "No payments recorded yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-border bg-card shadow-soft overflow-hidden max-w-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3",
						children: "Date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3",
						children: "Method"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3",
						children: "Status"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3 text-right",
						children: "Amount"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: payments.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-5 py-3",
						children: p.paid_at ? new Date(p.paid_at).toLocaleDateString() : new Date(p.created_at).toLocaleDateString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-5 py-3 capitalize",
						children: p.method
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-5 py-3 capitalize",
						children: p.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "px-5 py-3 text-right",
						children: ["$", Number(p.amount).toLocaleString()]
					})
				]
			}, p.id)) })]
		})
	});
}
function ReviewsTab({ email }) {
	const { data: reviews = [] } = useQuery({
		queryKey: ["customer-reviews", email],
		queryFn: async () => {
			const { data: bookings } = await supabase.from("bookings").select("id").eq("customer_email", email);
			const ids = (bookings ?? []).map((b) => b.id);
			if (ids.length === 0) return [];
			const { data, error } = await supabase.from("reviews").select("*, tour:tours(title)").in("booking_id", ids).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	if (reviews.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "No reviews yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3 max-w-2xl",
		children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium",
						children: [
							r.tour?.title ?? "—",
							" · ",
							r.rating,
							"★"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: new Date(r.created_at).toLocaleDateString()
					})]
				}),
				r.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium mt-1",
					children: r.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: r.comment
				})
			]
		}, r.id))
	});
}
var DOC_TYPES = [
	{
		id: "passport",
		label: "Passport"
	},
	{
		id: "visa",
		label: "Visa"
	},
	{
		id: "waiver",
		label: "Waiver"
	},
	{
		id: "invoice",
		label: "Invoice"
	},
	{
		id: "other",
		label: "Other"
	}
];
function DocumentsTab({ customerId }) {
	const qc = useQueryClient();
	const { data: docs = [] } = useQuery({
		queryKey: ["customer-documents", customerId],
		queryFn: async () => {
			const { data, error } = await supabase.from("customer_documents").select("*").eq("customer_id", customerId).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const [docType, setDocType] = (0, import_react.useState)("other");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const upload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setUploading(true);
		try {
			const ext = file.name.split(".").pop()?.toLowerCase() || "bin";
			const path = `${customerId}/${crypto.randomUUID()}.${ext}`;
			const { error: uploadErr } = await supabase.storage.from("customer-documents").upload(path, file, { contentType: file.type || void 0 });
			if (uploadErr) throw uploadErr;
			const { data: { user } } = await supabase.auth.getUser();
			const { error } = await supabase.from("customer_documents").insert({
				customer_id: customerId,
				file_path: path,
				file_name: file.name,
				doc_type: docType,
				uploaded_by: user?.id ?? null
			});
			if (error) throw error;
			qc.invalidateQueries({ queryKey: ["customer-documents", customerId] });
			toast.success("Uploaded");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setUploading(false);
			e.target.value = "";
		}
	};
	const view = async (path) => {
		const { data, error } = await supabase.storage.from("customer-documents").createSignedUrl(path, 300);
		if (error || !data?.signedUrl) {
			toast.error("Could not open document");
			return;
		}
		window.open(data.signedUrl, "_blank", "noopener,noreferrer");
	};
	const del = async (id, path) => {
		if (!confirm("Delete this document?")) return;
		await supabase.storage.from("customer-documents").remove([path]);
		await supabase.from("customer_documents").delete().eq("id", id);
		qc.invalidateQueries({ queryKey: ["customer-documents", customerId] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-5 shadow-soft flex items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 w-48",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Document type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: docType,
					onValueChange: setDocType,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DOC_TYPES.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: d.id,
						children: d.label
					}, d.id)) })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "File" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					onChange: upload,
					disabled: uploading,
					className: "text-sm"
				})]
			})]
		}), docs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No documents uploaded yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl border border-border bg-card shadow-soft overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3",
							children: "File"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3",
							children: "Type"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3",
							children: "Uploaded"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-5 py-3" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5 text-muted-foreground" }), d.file_name]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 capitalize",
							children: d.doc_type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 text-muted-foreground",
							children: new Date(d.created_at).toLocaleDateString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-5 py-3 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => view(d.file_path),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => del(d.id, d.file_path),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
							})]
						})
					]
				}, d.id)) })]
			})
		})]
	});
}
//#endregion
export { CustomerProfile as component };
