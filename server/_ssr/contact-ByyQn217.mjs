import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { C as useSettings } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { A as Phone, B as Mail, S as Send, z as MapPin } from "../_libs/lucide-react.mjs";
import { n as buildWhatsAppHref, t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as PageHero } from "./page-hero-D4_OUjCv.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { d as string, u as object } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { t as tour_adventure_default } from "./tour-adventure-vNsr64EF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-ByyQn217.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(1).max(200),
	email: string().trim().email().max(200),
	subject: string().trim().max(200).optional(),
	message: string().trim().min(1).max(5e3)
});
function ContactPage() {
	const { t } = useTranslation();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const c = useSettings("contact", {
		hero_eyebrow: t("contact.hero_eyebrow"),
		hero_title: t("contact.hero_title"),
		hero_subtitle: t("contact.hero_subtitle"),
		address: "Djibouti",
		phone: "+253 77 15 57 57",
		whatsapp: "+253 77 15 57 57",
		email: "nculturetours@gmail.com",
		map_embed: "https://www.openstreetmap.org/export/embed.html?bbox=43.10%2C11.55%2C43.18%2C11.62&layer=mapnik&marker=11.588,43.145"
	});
	const onSubmit = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({
			name: fd.get("name"),
			email: fd.get("email"),
			subject: fd.get("subject") || void 0,
			message: fd.get("message")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? t("contact.check_form"));
			return;
		}
		setLoading(true);
		const { error } = await supabase.from("contact_messages").insert(parsed.data);
		setLoading(false);
		if (error) {
			toast.error(t("contact.message_error"));
			return;
		}
		e.target.reset();
		toast.success(t("contact.message_sent"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: c.hero_eyebrow,
		title: c.hero_title,
		subtitle: c.hero_subtitle,
		image: tour_adventure_default,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-16 grid lg:grid-cols-5 gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-soft space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: t("contact.your_name")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							required: true,
							maxLength: 200
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: t("contact.email")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							maxLength: 200
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "subject",
						children: t("contact.subject")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "subject",
						name: "subject",
						maxLength: 200,
						placeholder: t("contact.subject_placeholder")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message",
						children: t("contact.message")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						name: "message",
						required: true,
						rows: 6,
						maxLength: 5e3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: loading,
					className: "rounded-full h-11 px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 mr-2" }), loading ? t("contact.sending") : t("contact.send_message")]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-2 space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: t("contact.visit_us")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: c.address
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: t("contact.call")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: buildWhatsAppHref(),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm text-muted-foreground hover:text-primary hover:underline",
							children: [
								c.phone,
								" (",
								t("contact.whatsapp"),
								")"
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: t("contact.email_label")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: c.email
						})] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl overflow-hidden border border-border shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map",
					src: c.map_embed,
					className: "w-full h-72 border-0",
					loading: "lazy"
				})
			})]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
