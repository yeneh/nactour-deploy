import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as toursQuery } from "./queries-CwknXRs0.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { r as useCurrency } from "./auth-Bh2CRKjo.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { B as Mail, G as Landmark, Nt as CircleCheck, _t as Calendar, dt as Circle, st as CreditCard, tt as FileDown } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as PageHero } from "./page-hero-D4_OUjCv.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { c as _enum, d as string, u as object } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { t as number } from "../_libs/zod.mjs";
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
import { t as SITE_NAME } from "./site-BRP1auNI.mjs";
import { t as tour_trek_default } from "./tour-trek-DJftqUPK.mjs";
import { n as getBookingSource, t as Route } from "./booking-D69XsubQ.mjs";
import { t as require_jspdf_node_min } from "../_libs/jspdf.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/radix-ui__react-radio-group.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-DgC7fhrs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_jspdf_node_min = require_jspdf_node_min();
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var schema = object({
	customer_name: string().trim().min(1).max(200),
	customer_email: string().trim().email().max(200),
	customer_phone: string().trim().max(50).optional(),
	tour_id: string().uuid().optional(),
	travel_date: string().min(1),
	group_size: number().int().positive().max(99),
	special_requests: string().trim().max(2e3).optional(),
	passport_number: string().trim().max(50).optional(),
	emergency_contact_name: string().trim().max(200).optional(),
	emergency_contact_phone: string().trim().max(50).optional(),
	payment_method: _enum(["bank_transfer", "card"]),
	message: string().trim().max(2e3).optional()
});
var PAYMENT_METHOD_META = [{
	id: "card",
	labelKey: "booking.payment_card",
	descKey: "booking.payment_card_desc",
	icon: CreditCard
}, {
	id: "bank_transfer",
	labelKey: "booking.payment_bank",
	descKey: "booking.payment_bank_desc",
	icon: Landmark
}];
function BookingPage() {
	const { t } = useTranslation();
	const { currency, format } = useCurrency();
	const PAYMENT_METHODS = PAYMENT_METHOD_META.map((m) => ({
		id: m.id,
		icon: m.icon,
		label: t(m.labelKey),
		desc: t(m.descKey)
	}));
	const { tour: tourSlug } = Route.useSearch();
	const { data: tours = [] } = useQuery(toursQuery());
	const [tourId, setTourId] = (0, import_react.useState)(tours.find((t) => t.slug === tourSlug)?.id);
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("card");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [confirmation, setConfirmation] = (0, import_react.useState)(null);
	const selectedTour = tours.find((t) => t.id === tourId);
	const onSubmit = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({
			customer_name: fd.get("customer_name"),
			customer_email: fd.get("customer_email"),
			customer_phone: fd.get("customer_phone") || void 0,
			tour_id: tourId,
			travel_date: fd.get("travel_date"),
			group_size: fd.get("group_size"),
			special_requests: fd.get("special_requests") || void 0,
			passport_number: fd.get("passport_number") || void 0,
			emergency_contact_name: fd.get("emergency_contact_name") || void 0,
			emergency_contact_phone: fd.get("emergency_contact_phone") || void 0,
			payment_method: paymentMethod
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? t("booking.check_form"));
			return;
		}
		setLoading(true);
		const total_price = selectedTour ? Number(selectedTour.price_usd) * parsed.data.group_size : null;
		const { data: { user } } = await supabase.auth.getUser();
		const bookingId = crypto.randomUUID();
		const { error } = await supabase.from("bookings").insert({
			id: bookingId,
			customer_name: parsed.data.customer_name,
			customer_email: parsed.data.customer_email,
			customer_phone: parsed.data.customer_phone ?? null,
			tour_id: parsed.data.tour_id ?? null,
			travel_date: parsed.data.travel_date,
			group_size: parsed.data.group_size,
			message: parsed.data.special_requests ?? null,
			special_requests: parsed.data.special_requests ?? null,
			passport_number: parsed.data.passport_number ?? null,
			emergency_contact_name: parsed.data.emergency_contact_name ?? null,
			emergency_contact_phone: parsed.data.emergency_contact_phone ?? null,
			payment_method: parsed.data.payment_method,
			payment_status: "pending",
			total_price,
			user_id: user?.id ?? null,
			source: getBookingSource()
		});
		setLoading(false);
		if (error) {
			toast.error(error.message || t("booking.submit_error"));
			return;
		}
		setConfirmation({
			reference: `DNC-${bookingId.slice(0, 8).toUpperCase()}`,
			tour_title: selectedTour?.title ?? t("booking.custom_inquiry"),
			total: total_price,
			payment_method: PAYMENT_METHODS.find((p) => p.id === parsed.data.payment_method)?.label ?? parsed.data.payment_method,
			customer_name: parsed.data.customer_name,
			customer_email: parsed.data.customer_email,
			travel_date: parsed.data.travel_date,
			group_size: parsed.data.group_size
		});
		e.target.reset();
		toast.success(t("booking.confirmed_toast"));
	};
	const downloadInvoice = () => {
		if (!confirmation) return;
		const doc = new import_jspdf_node_min.jsPDF();
		doc.setFontSize(20);
		doc.text(SITE_NAME, 20, 22);
		doc.setFontSize(11);
		doc.setTextColor(120);
		doc.text("Booking Invoice", 20, 30);
		doc.setDrawColor(200);
		doc.line(20, 34, 190, 34);
		doc.setTextColor(0);
		doc.setFontSize(11);
		let y = 46;
		const row = (k, v) => {
			doc.text(k, 20, y);
			doc.text(v, 90, y);
			y += 8;
		};
		row("Reference:", confirmation.reference);
		row("Date:", (/* @__PURE__ */ new Date()).toLocaleDateString());
		row("Customer:", confirmation.customer_name);
		row("Email:", confirmation.customer_email);
		row("Tour:", confirmation.tour_title);
		row("Travel date:", confirmation.travel_date);
		row("Travelers:", String(confirmation.group_size));
		row("Payment method:", confirmation.payment_method);
		row("Status:", "Pending confirmation");
		y += 6;
		doc.line(20, y, 190, y);
		y += 10;
		doc.setFontSize(13);
		doc.text("Total", 20, y);
		doc.text(confirmation.total != null ? format(confirmation.total) : "On request", 90, y);
		y += 10;
		doc.setFontSize(9);
		doc.setTextColor(120);
		if (confirmation.total != null && currency !== "USD") {
			doc.text(`Shown in ${currency} for reference · billed as $${confirmation.total.toLocaleString()} USD.`, 20, y);
			y += 6;
		}
		doc.text("Thank you for booking with us. A specialist will be in touch within 24 hours.", 20, y);
		doc.text("Djibouti · nculturetours@gmail.com · +253 77 15 57 57", 20, y + 6);
		doc.save(`invoice-${confirmation.reference}.pdf`);
	};
	if (confirmation) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("booking.confirmed_hero_eyebrow"),
		title: t("booking.confirmed_hero_title"),
		subtitle: t("booking.confirmed_hero_subtitle"),
		image: tour_trek_default,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16 max-w-3xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-8 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t("booking.reference")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: confirmation.reference
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: t("booking.tour")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: confirmation.tour_title
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: t("booking.travel_date")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: confirmation.travel_date
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: t("booking.travelers")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: confirmation.group_size
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: t("booking.payment")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: confirmation.payment_method
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: t("booking.total")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-display text-2xl text-primary",
									children: confirmation.total != null ? format(confirmation.total) : t("booking.on_request")
								}),
								confirmation.total != null && currency !== "USD" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: t("booking.currency_reference_note", { usd: `$${confirmation.total.toLocaleString()}` })
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: downloadInvoice,
						className: "rounded-full bg-primary text-primary-foreground hover:bg-primary/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-4 w-4 mr-2" }),
							" ",
							t("booking.download_invoice")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-full",
						onClick: () => setConfirmation(null),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 mr-2" }),
							" ",
							t("booking.book_another")
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-start gap-2 text-xs text-muted-foreground border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						t("booking.receipt_note_prefix"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: confirmation.customer_email }),
						". ",
						t("booking.receipt_note_suffix"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: confirmation.payment_method }),
						" ",
						t("booking.receipt_note_end")
					] })]
				})
			]
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("booking.hero_eyebrow"),
		title: t("booking.hero_title"),
		subtitle: t("booking.hero_subtitle"),
		image: tour_trek_default,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-16 grid lg:grid-cols-5 gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-soft space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t("booking.select_tour") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: tourId,
						onValueChange: setTourId,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: t("booking.choose_a_tour") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: tours.map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
							value: tr.id,
							children: [
								tr.title,
								" · ",
								tr.duration_days,
								"d · ",
								format(Number(tr.price_usd))
							]
						}, tr.id)) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "customer_name",
								children: t("booking.full_name")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "customer_name",
								name: "customer_name",
								required: true,
								maxLength: 200
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "customer_email",
								children: t("booking.email")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "customer_email",
								name: "customer_email",
								type: "email",
								required: true,
								maxLength: 200
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "customer_phone",
								children: t("booking.phone")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "customer_phone",
								name: "customer_phone",
								type: "tel",
								maxLength: 50
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								htmlFor: "passport_number",
								children: [
									t("booking.passport_number"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground font-normal",
										children: t("booking.optional")
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "passport_number",
								name: "passport_number",
								maxLength: 50
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "group_size",
								children: t("booking.group_size")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "group_size",
								name: "group_size",
								type: "number",
								min: 1,
								max: 99,
								defaultValue: 2,
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "travel_date",
								children: t("booking.travel_date")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "travel_date",
								name: "travel_date",
								type: "date",
								required: true
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						children: t("booking.emergency_contact")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "emergency_contact_name",
								children: t("booking.name")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "emergency_contact_name",
								name: "emergency_contact_name",
								maxLength: 200
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "emergency_contact_phone",
								children: t("booking.phone_field")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "emergency_contact_phone",
								name: "emergency_contact_phone",
								type: "tel",
								maxLength: 50
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "special_requests",
						children: t("booking.special_requests")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "special_requests",
						name: "special_requests",
						rows: 4,
						maxLength: 2e3,
						placeholder: t("booking.special_requests_placeholder")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						children: t("booking.payment_method")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
						value: paymentMethod,
						onValueChange: (v) => setPaymentMethod(v),
						className: "grid sm:grid-cols-2 gap-3",
						children: PAYMENT_METHODS.map((m) => {
							const Icon = m.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition ${paymentMethod === m.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
									value: m.id,
									className: "mt-1"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" }),
											" ",
											m.label
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: m.desc
									})]
								})]
							}, m.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: loading,
					className: "rounded-full h-11 px-6 bg-gold text-gold-foreground hover:bg-gold/90 w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 mr-2" }), loading ? t("booking.submitting") : t("booking.confirm_booking")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: t("booking.no_card_note")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:col-span-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-7 shadow-soft sticky top-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						children: t("booking.summary")
					}),
					selectedTour ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: selectedTour.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: [
								selectedTour.duration_days,
								" ",
								t("common.days"),
								" · ",
								t("common.max_group"),
								" ",
								selectedTour.max_group_size ?? "—"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 border-t border-border pt-5 flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: t("booking.per_person")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-semibold text-primary",
								children: format(Number(selectedTour.price_usd))
							})]
						}),
						currency !== "USD" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-2",
							children: t("booking.currency_reference_note", { usd: `$${Number(selectedTour.price_usd).toLocaleString()}` })
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t("booking.select_prompt")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 text-xs text-muted-foreground space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["✓ ", t("booking.perk_confirmation")] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["✓ ", t("booking.perk_invoice")] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["✓ ", t("booking.perk_receipt")] })
						]
					})
				]
			})
		})]
	})] });
}
//#endregion
export { BookingPage as component };
