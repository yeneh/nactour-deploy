import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as tourBySlugQuery } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { r as useCurrency } from "./auth-Bh2CRKjo.mjs";
import { Ct as ArrowRight, P as Mountain, _t as Calendar, b as ShieldCheck, i as Users, ut as Clock, z as MapPin } from "../_libs/lucide-react.mjs";
import { r as categoryLabel } from "./categories-CRdh_exv.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as Route } from "./tours._slug-CYKIn_mr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tours._slug-B3CnUDiN.js
var import_jsx_runtime = require_jsx_runtime();
function TourDetail() {
	const { t } = useTranslation();
	const { format } = useCurrency();
	const { slug } = Route.useParams();
	const { data: tour } = useQuery(tourBySlugQuery(slug));
	if (!tour) return null;
	const dest = tour.destination;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative w-full overflow-hidden min-h-[70vh] flex items-end",
		children: [
			tour.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: tour.image_url,
				alt: tour.title,
				className: "absolute inset-0 h-full w-full object-cover",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative container-page py-16 lg:py-24 text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold mb-3",
						children: categoryLabel(tour.category, t)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl",
						children: tour.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg text-primary-foreground/85",
						children: tour.short_description
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-16 lg:py-24 grid lg:grid-cols-3 gap-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-2 space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
					children: [
						{
							i: Clock,
							l: t("tours.duration"),
							v: `${tour.duration_days} ${t("common.days")}`
						},
						{
							i: Users,
							l: t("tours.max_group"),
							v: tour.max_group_size ?? "—"
						},
						{
							i: Mountain,
							l: t("tours.difficulty"),
							v: tour.difficulty ?? "—"
						},
						{
							i: MapPin,
							l: t("tours.region"),
							v: dest?.region ?? t("tours.multiple")
						}
					].map(({ i: I, l, v }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-4 bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4 text-gold mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: l
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold mt-1",
								children: v
							})
						]
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "prose-like space-y-5 text-base leading-relaxed text-foreground/85",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: t("tours.about_journey")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-line",
						children: tour.description
					})]
				}),
				dest && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-muted/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-2",
						children: t("tours.destination")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/destinations/$slug",
						params: { slug: dest.slug },
						className: "font-display text-xl font-semibold hover:text-primary",
						children: [
							dest.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "inline h-4 w-4" })
						]
					})]
				}),
				tour.cancellation_policy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-xl font-semibold flex items-center gap-2 mb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-gold" }),
							" ",
							t("tours.cancellation_policy")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground whitespace-pre-line",
						children: tour.cancellation_policy
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:col-span-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:sticky lg:top-24 rounded-2xl border border-border bg-card p-7 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t("common.from")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-semibold text-primary",
						children: format(Number(tour.price_usd))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: t("common.all_inclusive")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "w-full mt-6 rounded-full h-12 bg-gold text-gold-foreground hover:bg-gold/90",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/booking",
							search: { tour: tour.slug },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 mr-2" }), t("tours.book_this_tour")]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "w-full mt-3 rounded-full h-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: t("tours.ask_a_question")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✓ ", t("tours.include_guides")] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✓ ", t("tours.include_fees")] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✓ ", t("tours.include_stay")] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✓ ", t("tours.include_support")] })
						]
					})
				]
			})
		})]
	})] });
}
//#endregion
export { TourDetail as component };
