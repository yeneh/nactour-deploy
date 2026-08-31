import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as toursQuery, p as testimonialsQuery, r as bestSellingToursQuery, s as destinationsQuery, t as activeCouponsQuery } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { r as useCurrency } from "./auth-Bh2CRKjo.mjs";
import { Ct as ArrowRight, D as Quote, g as Tag, v as Star, z as MapPin } from "../_libs/lucide-react.mjs";
import { n as categoryBlurb, r as categoryLabel, t as TOUR_CATEGORIES } from "./categories-CRdh_exv.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as PageHero } from "./page-hero-D4_OUjCv.mjs";
import { t as tour_trek_default } from "./tour-trek-DJftqUPK.mjs";
import { t as TourCard } from "./tour-card-C-cBR8cP.mjs";
import { t as Route } from "./search-D9nFvzmz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-D662GyrH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function inBucket(value, bucket) {
	if (bucket.endsWith("+")) return value >= Number(bucket.slice(0, -1));
	const [min, max] = bucket.split("-").map(Number);
	return value >= min && value <= max;
}
function SectionHeading({ eyebrow, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8",
		children: [eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow mb-2",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl sm:text-3xl font-semibold",
			children: title
		})]
	});
}
function SearchPage() {
	const { t } = useTranslation();
	const { format, currency } = useCurrency();
	const { q, category, destination, duration, budget } = Route.useSearch();
	const { data: tours = [], isLoading } = useQuery(toursQuery());
	const { data: destinations = [] } = useQuery(destinationsQuery());
	const { data: testimonials = [] } = useQuery(testimonialsQuery());
	const { data: coupons = [] } = useQuery(activeCouponsQuery());
	const { data: bestSelling = [] } = useQuery(bestSellingToursQuery(6));
	const { data: featuredTours = [] } = useQuery(toursQuery({ featured: true }));
	const hasFilters = Boolean(q || category || destination || duration || budget);
	const filtered = (0, import_react.useMemo)(() => {
		if (!hasFilters) return [];
		let list = tours;
		if (category) list = list.filter((tr) => tr.category === category);
		if (destination) {
			const dest = destinations.find((d) => d.slug === destination);
			if (dest) list = list.filter((tr) => tr.destination_id === dest.id);
		}
		if (duration) list = list.filter((tr) => inBucket(Number(tr.duration_days), duration));
		if (budget) list = list.filter((tr) => inBucket(Number(tr.price_usd), budget));
		if (q) {
			const needle = q.toLowerCase();
			list = list.filter((tr) => tr.title?.toLowerCase().includes(needle) || tr.description?.toLowerCase().includes(needle) || tr.category?.toLowerCase().includes(needle));
		}
		return list;
	}, [
		hasFilters,
		tours,
		destinations,
		category,
		destination,
		duration,
		budget,
		q
	]);
	const popularDestinations = (0, import_react.useMemo)(() => {
		const counts = /* @__PURE__ */ new Map();
		for (const tr of tours) {
			if (!tr.destination_id) continue;
			counts.set(tr.destination_id, (counts.get(tr.destination_id) ?? 0) + 1);
		}
		return [...destinations].sort((a, b) => (counts.get(b.id) ?? 0) - (counts.get(a.id) ?? 0)).slice(0, 6).map((d) => ({
			...d,
			tourCount: counts.get(d.id) ?? 0
		}));
	}, [tours, destinations]);
	const bestSellingTours = (0, import_react.useMemo)(() => {
		const byId = new Map(tours.map((tr) => [tr.id, tr]));
		return bestSelling.map((b) => byId.get(b.tour_id)).filter((tr) => Boolean(tr));
	}, [tours, bestSelling]);
	const heroTitle = q ? t("search.hero_title_query", { q }) : t("search.hero_title_default");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("search.hero_eyebrow"),
		title: heroTitle,
		subtitle: t("search.hero_subtitle"),
		image: tour_trek_default,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-12 lg:py-16 space-y-20",
		children: [
			hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-2",
					children: t("search.results_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-semibold",
					children: filtered.length === 1 ? t("search.results_count", { count: filtered.length }) : t("search.results_count_plural", { count: filtered.length })
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/search",
						children: t("search.clear_search")
					})
				})]
			}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 rounded-2xl bg-muted animate-pulse" }, i))
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t("search.results_empty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: filtered.map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: tr }, tr.id))
			})] }),
			popularDestinations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("search.hero_eyebrow"),
				title: t("search.popular_destinations")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: popularDestinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/destinations/$slug",
					params: { slug: d.slug },
					className: "group rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-lift transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden bg-muted",
						children: [
							d.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.image_url,
								alt: d.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/2 card-overlay" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-3 left-3 right-3 text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] uppercase tracking-widest text-gold flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), d.region]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold leading-tight",
									children: d.name
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 text-xs text-muted-foreground",
						children: d.tourCount === 1 ? t("search.tours_count", { count: d.tourCount }) : t("search.tours_count_plural", { count: d.tourCount })
					})]
				}, d.id))
			})] }),
			featuredTours.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("search.hero_eyebrow"),
				title: t("search.recommended_tours")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: featuredTours.slice(0, 6).map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: tr }, tr.id))
			})] }),
			bestSellingTours.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("search.hero_eyebrow"),
				title: t("search.best_selling")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: bestSellingTours.map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: tr }, tr.id))
			})] }),
			coupons.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("search.hero_eyebrow"),
				title: t("search.special_offers")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: coupons.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 self-start rounded-full bg-gold/15 text-gold text-[10px] uppercase tracking-widest px-3 py-1 font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3 w-3" }),
								" ",
								c.code
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl font-semibold mt-4 text-primary",
							children: [
								c.discount_type === "percentage" ? `${c.discount_value}%` : format(Number(c.discount_value)),
								" ",
								t("search.off_label")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-2",
							children: [c.min_booking_amount > 0 ? t("search.offer_min_booking", { amount: format(Number(c.min_booking_amount)) }) : null, c.expires_at ? `${c.min_booking_amount > 0 ? " · " : ""}${t("search.offer_expires", { date: new Date(c.expires_at).toLocaleDateString(currency === "USD" ? "en-US" : void 0) })}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 self-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/booking",
								children: [
									t("search.offer_book_now"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 ml-1.5" })
								]
							})
						})
					]
				}, c.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("search.hero_eyebrow"),
				title: t("search.experiences")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: TOUR_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/tours",
					search: { category: c.id },
					className: "group rounded-2xl border border-border bg-card p-5 hover:border-gold hover:shadow-soft transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 dark:bg-primary/20 text-primary mb-4 group-hover:bg-gold group-hover:text-gold-foreground transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: categoryLabel(c.id, t)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: categoryBlurb(c.id, t)
						})
					]
				}, c.id))
			})] }),
			testimonials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("search.hero_eyebrow"),
				title: t("search.customer_reviews")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: testimonials.slice(0, 6).map((ti) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "rounded-2xl border border-border bg-card p-7 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-7 w-7 text-gold mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "text-base leading-relaxed text-foreground/90",
							children: [
								"\"",
								ti.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3 border-t border-border pt-5",
							children: [
								ti.avatar_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ti.avatar_url,
									alt: ti.author_name,
									className: "h-10 w-10 rounded-full object-cover",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: ti.author_name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: ti.author_location
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto flex text-gold",
									children: Array.from({ length: ti.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
								})
							]
						})
					]
				}, ti.id))
			})] })
		]
	})] });
}
//#endregion
export { SearchPage as component };
