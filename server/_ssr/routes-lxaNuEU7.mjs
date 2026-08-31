import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { C as useSettings, S as toursQuery, p as testimonialsQuery, s as destinationsQuery } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { I as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { r as useCurrency } from "./auth-Bh2CRKjo.mjs";
import { C as Search, Ct as ArrowRight, D as Quote, X as HeartHandshake, jt as Earth, k as Play, v as Star, y as Shield } from "../_libs/lucide-react.mjs";
import { n as categoryBlurb, r as categoryLabel, t as TOUR_CATEGORIES } from "./categories-CRdh_exv.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as TourCard } from "./tour-card-C-cBR8cP.mjs";
import { t as hero_safari_default } from "./hero-safari-f9hz8l5r.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-lxaNuEU7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TripFinder() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { data: destinations = [] } = useQuery(destinationsQuery());
	const { format } = useCurrency();
	const [category, setCategory] = (0, import_react.useState)("");
	const [destination, setDestination] = (0, import_react.useState)("");
	const [duration, setDuration] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)("");
	const onSubmit = (e) => {
		e.preventDefault();
		navigate({
			to: "/search",
			search: {
				...category && { category },
				...destination && { destination },
				...duration && { duration },
				...budget && { budget }
			}
		});
	};
	const selectCls = "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm font-medium text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "relative mx-auto -mt-16 lg:-mt-20 max-w-6xl rounded-3xl border border-border/60 bg-card/95 p-5 lg:p-7 shadow-lift backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-col gap-1 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: t("finder.eyebrow")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-semibold mt-1",
				children: t("finder.title")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground max-w-sm",
				children: t("finder.subtitle")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 lg:grid-cols-5 gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: selectCls,
					value: destination,
					onChange: (e) => setDestination(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: "",
						children: [
							t("finder.destination"),
							" — ",
							t("finder.any")
						]
					}), destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: d.slug,
						children: d.name
					}, d.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: selectCls,
					value: category,
					onChange: (e) => setCategory(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: "",
						children: [
							t("finder.activity"),
							" — ",
							t("finder.any")
						]
					}), TOUR_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: c.id,
						children: categoryLabel(c.id, t)
					}, c.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: selectCls,
					value: duration,
					onChange: (e) => setDuration(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "",
							children: [
								t("finder.duration"),
								" — ",
								t("finder.any")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "1-3",
							children: ["1–3 ", t("finder.days")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "4-7",
							children: ["4–7 ", t("finder.days")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "8-14",
							children: ["8–14 ", t("finder.days")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "15+",
							children: ["15+ ", t("finder.days")]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: selectCls,
					value: budget,
					onChange: (e) => setBudget(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "",
							children: [
								t("finder.budget"),
								" — ",
								t("finder.any")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "0-500",
							children: [
								format(0),
								" – ",
								format(500)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "500-1500",
							children: [
								format(500),
								" – ",
								format(1500)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "1500-3000",
							children: [
								format(1500),
								" – ",
								format(3e3)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "3000+",
							children: [format(3e3), "+"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					className: "h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4" }), t("finder.search")]
				})
			]
		})]
	});
}
var HERO_VIDEO_FALLBACK = "/__l5e/assets-v1/552070f6-192c-4c4b-a942-1f3beefb6c88/hero.mp4";
function HomePage() {
	const { t } = useTranslation();
	const { data: featured = [] } = useQuery(toursQuery({ featured: true }));
	const { data: destinations = [] } = useQuery(destinationsQuery());
	const { data: testimonials = [] } = useQuery(testimonialsQuery());
	const home = useSettings("home", {
		hero_eyebrow: t("hero.eyebrow"),
		hero_title: t("hero.title"),
		hero_subtitle: t("hero.subtitle"),
		hero_cta_primary: t("hero.explore"),
		hero_cta_secondary: t("hero.contact"),
		hero_video_url: HERO_VIDEO_FALLBACK,
		stats: [
			{
				value: "12+",
				label: t("sections.stat_years")
			},
			{
				value: "8",
				label: t("sections.stat_itineraries")
			},
			{
				value: "-155m",
				label: t("sections.stat_lake_depth")
			}
		]
	});
	const ratingCount = testimonials.length;
	const ratingAvg = ratingCount > 0 ? testimonials.reduce((sum, ti) => sum + ti.rating, 0) / ratingCount : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative w-full overflow-hidden min-h-[92vh] flex items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: hero_safari_default,
					className: "absolute inset-0 h-full w-full object-cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: home.hero_video_url,
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative container-page text-primary-foreground py-24 lg:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "eyebrow text-gold mb-5",
							children: home.hero_eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .1
							},
							className: "font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.02] max-w-5xl text-balance",
							children: home.hero_title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .3
							},
							className: "mt-7 max-w-2xl text-lg lg:text-xl text-primary-foreground/85 font-light",
							children: home.hero_subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .45
							},
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "rounded-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7 font-medium",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/tours",
									children: [
										home.hero_cta_primary,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 rtl:rotate-180" })
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "rounded-full h-12 px-7 bg-background/10 backdrop-blur border-primary-foreground/40 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-2 h-4 w-4" }),
										" ",
										home.hero_cta_secondary
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl",
							children: [(home.stats ?? []).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .5,
									delay: .6 + i * .08
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-3xl font-semibold text-gold",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-xs uppercase tracking-widest text-primary-foreground/70 mt-1",
									children: s.label
								})]
							}, s.label + i)), ratingAvg != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .5,
									delay: .6 + home.stats.length * .08
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "font-display text-3xl font-semibold text-gold",
									children: [ratingAvg.toFixed(1), "★"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "text-xs uppercase tracking-widest text-primary-foreground/70 mt-1",
									children: [
										t("sections.stat_rating"),
										" (",
										ratingCount,
										")"
									]
								})]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripFinder, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3",
					children: t("sections.categories_eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-semibold max-w-xl",
					children: t("sections.categories_title")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/tours",
					className: "inline-flex items-center text-sm font-medium text-primary hover:underline",
					children: [
						t("sections.browse_all"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-4 w-4" })
					]
				})]
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
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/40 py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						children: t("sections.featured_eyebrow")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl font-semibold max-w-xl",
						children: t("sections.featured_title")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/tours",
						className: "inline-flex items-center text-sm font-medium text-primary hover:underline",
						children: [
							t("sections.see_all"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-4 w-4" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: featured.slice(0, 6).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: t }, t.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3",
					children: t("sections.destinations_eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-semibold max-w-xl",
					children: t("sections.destinations_title")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/destinations",
					className: "inline-flex items-center text-sm font-medium text-primary hover:underline",
					children: [
						t("sections.browse_map"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-4 w-4" })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: destinations.filter((d) => d.is_featured).slice(0, 6).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/destinations/$slug",
					params: { slug: d.slug },
					className: "relative group h-72 rounded-2xl overflow-hidden shadow-soft",
					children: [
						d.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: d.image_url,
							alt: d.name,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 card-overlay" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 p-5 text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-gold mb-1",
								children: d.region
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: d.name
							})]
						})
					]
				}, d.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary text-primary-foreground dark:bg-sidebar dark:text-sidebar-foreground py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid lg:grid-cols-3 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold mb-3",
						children: t("sections.why_eyebrow")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl font-semibold",
						children: t("sections.why_title")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 grid sm:grid-cols-2 gap-8",
					children: [
						{
							i: Shield,
							title: t("sections.why_safety_title"),
							d: t("sections.why_safety_desc")
						},
						{
							i: HeartHandshake,
							title: t("sections.why_community_title"),
							d: t("sections.why_community_desc")
						},
						{
							i: Earth,
							title: t("sections.why_hosts_title"),
							d: t("sections.why_hosts_desc")
						},
						{
							i: Star,
							title: t("sections.why_service_title"),
							d: ratingAvg != null ? t("sections.why_service_desc", {
								rating: ratingAvg.toFixed(1),
								count: ratingCount
							}) : t("sections.why_service_desc_empty")
						}
					].map(({ i: Icon, title, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/20 text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary-foreground/75 dark:text-sidebar-foreground/75 mt-1 leading-relaxed",
							children: d
						})] })]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3",
					children: t("sections.testimonials_eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-semibold",
					children: t("sections.testimonials_title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: testimonials.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "rounded-2xl border border-border bg-card p-7 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-7 w-7 text-gold mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "text-base leading-relaxed text-foreground/90",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3 border-t border-border pt-5",
							children: [
								t.avatar_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.avatar_url,
									alt: t.author_name,
									className: "h-10 w-10 rounded-full object-cover",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t.author_name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.author_location
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto flex text-gold",
									children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
								})
							]
						})
					]
				}, t.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-sidebar text-sidebar-foreground p-10 lg:p-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-25 mix-blend-luminosity",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_safari_default,
						alt: "",
						className: "h-full w-full object-cover",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid lg:grid-cols-2 gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3",
							children: t("sections.cta_eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl lg:text-5xl font-semibold leading-tight",
							children: t("sections.cta_title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sidebar-foreground/80 max-w-md",
							children: t("sections.cta_subtitle")
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3 lg:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/booking",
								children: t("sections.cta_start_booking")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "rounded-full h-12 px-7 bg-transparent border-sidebar-foreground/40 text-sidebar-foreground hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: t("sections.cta_talk_to_us")
							})
						})]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
