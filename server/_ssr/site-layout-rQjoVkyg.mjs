import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { C as useSettings, S as toursQuery, s as destinationsQuery } from "./queries-CwknXRs0.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { I as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { n as LANGUAGES, t as CURRENCIES } from "./currency-CTbvXQUp.mjs";
import { n as useTheme } from "./theme-provider-CEYifutc.mjs";
import { i as useCurrentUser, r as useCurrency } from "./auth-Bh2CRKjo.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { A as Phone, B as Mail, C as Search, Ct as ArrowRight, F as Moon, H as LogIn, L as MessageCircle, P as Mountain, Q as Globe, R as Menu, S as Send, W as LayoutDashboard, _ as Sun, bt as Bot, mt as ChevronDown, n as X, nt as Facebook, q as Instagram, t as Youtube, z as MapPin } from "../_libs/lucide-react.mjs";
import { t as TOUR_CATEGORIES } from "./categories-CRdh_exv.mjs";
import { n as DropdownMenuContent, o as DropdownMenuTrigger, r as DropdownMenuItem, t as DropdownMenu } from "./dropdown-menu-CDoe66ii.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-rQjoVkyg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LanguageSwitcher({ className }) {
	const { i18n } = useTranslation();
	const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = current.code;
		document.documentElement.dir = current.dir;
	}, [current]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			"aria-label": "Language",
			className: cn("rounded-full h-9 w-auto px-2.5 gap-1.5 text-xs font-semibold", className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-[18px] w-[18px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "uppercase",
				children: current.code
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		align: "end",
		className: "min-w-[10rem]",
		children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
			onClick: () => i18n.changeLanguage(l.code),
			className: l.code === current.code ? "font-semibold text-primary" : "",
			children: l.label
		}, l.code))
	})] });
}
function CurrencySwitcher({ className }) {
	const { currency, setCurrency } = useCurrency();
	const current = CURRENCIES.find((c) => c.code === currency) ?? CURRENCIES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			"aria-label": "Currency",
			className: cn("rounded-full h-9 w-auto px-2.5 gap-1.5 text-xs font-semibold", className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current.symbol }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "uppercase",
				children: current.code
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		align: "end",
		className: "min-w-[12rem]",
		children: CURRENCIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onClick: () => setCurrency(c.code),
			className: c.code === current.code ? "font-semibold text-primary" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-8 shrink-0",
					children: c.symbol
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1",
					children: c.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: c.code
				})
			]
		}, c.code))
	})] });
}
var NAV_ITEMS = [
	{
		to: "/tours",
		key: "tours"
	},
	{
		to: "/destinations",
		key: "destinations",
		hasDropdown: true
	},
	{
		to: "/gallery",
		key: "gallery"
	},
	{
		to: "/blog",
		key: "journal"
	},
	{
		to: "/about",
		key: "about"
	},
	{
		to: "/contact",
		key: "contact"
	}
];
var THEME_ICON = {
	light: Sun,
	dark: Moon
};
function SiteHeader() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const NAV = NAV_ITEMS.map((n) => ({
		...n,
		label: t(`nav.${n.key}`)
	}));
	const { theme, setTheme } = useTheme();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [searchQ, setSearchQ] = (0, import_react.useState)("");
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const mobileMenuRef = (0, import_react.useRef)(null);
	const mobileMenuFirstLinkRef = (0, import_react.useRef)(null);
	const header = useSettings("header", {
		show_search: true,
		logo_url: ""
	});
	const { data: destinations = [] } = useQuery(destinationsQuery());
	const { isStaff, isSignedIn } = useCurrentUser();
	const { format } = useCurrency();
	const ThemeIcon = THEME_ICON[theme] ?? Sun;
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setSearchOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		mobileMenuFirstLinkRef.current?.focus();
		const onKeyDown = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [open]);
	const onSearch = (e) => {
		e.preventDefault();
		const q = searchQ.trim();
		if (!q) return;
		navigate({
			to: "/search",
			search: { q }
		});
		setSearchOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid grid-cols-[1fr_auto_1fr] items-center h-20 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-3 shrink-0 group justify-self-start",
						children: header.logo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: header.logo_url,
							alt: "Nature & Culture Tours",
							className: "h-12 w-auto object-contain"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-none bg-primary text-primary-foreground font-display text-xl leading-none",
							children: "D"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex flex-col leading-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg lg:text-xl font-medium tracking-tight",
								children: [
									"Nature & ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "Culture"
									}),
									" Tours"
								]
							})
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden xl:block justify-self-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex items-center gap-4",
							children: NAV.map((item) => {
								const active = pathname.startsWith(item.to);
								const isDrop = "hasDropdown" in item && item.hasDropdown;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: cn("relative flex items-center", isDrop && "group"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: item.to,
										className: cn("text-[11px] uppercase tracking-[0.22em] font-medium inline-flex items-center gap-1.5 py-2 border-b-2 transition-colors", active ? "text-primary border-gold" : "text-foreground/75 hover:text-primary border-transparent"),
										children: [item.label, isDrop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 opacity-70 group-hover:rotate-180 transition-transform" })]
									}), isDrop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "w-[460px] max-w-[92vw] border border-border bg-popover shadow-lift",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between px-5 py-3 border-b border-border",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "eyebrow text-primary",
													children: "Djibouti by region"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/destinations",
													className: "text-[10px] uppercase tracking-[0.2em] text-gold hover:underline",
													children: "View all"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "max-h-[70vh] overflow-y-auto divide-y divide-border",
												children: destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/destinations/$slug",
													params: { slug: d.slug },
													className: "flex items-center gap-4 px-5 py-3 hover:bg-muted/60 transition-colors group/item",
													children: [
														d.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: d.image_url,
															alt: d.name,
															loading: "lazy",
															className: "h-12 w-16 object-cover flex-shrink-0"
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-12 w-16 bg-muted flex-shrink-0" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "min-w-0 flex-1",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block text-[9px] uppercase tracking-[0.2em] text-gold",
																	children: d.region
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block font-display text-base leading-tight group-hover/item:text-primary transition-colors",
																	children: d.name
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block text-xs text-muted-foreground line-clamp-1",
																	children: d.description
																})
															]
														}),
														d.starting_price_usd != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] whitespace-nowrap text-foreground",
															children: format(Number(d.starting_price_usd))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition" })
													]
												}) }, d.id))
											})]
										})
									})]
								}, item.to);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-0.5 shrink-0 justify-self-end",
						children: [
							header.show_search !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Search",
								onClick: () => setSearchOpen((v) => !v),
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-[18px] w-[18px]" })
							}),
							isStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Admin dashboard",
								className: "rounded-full",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-[18px] w-[18px]" })
								})
							}),
							!isSignedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t("auth.sign_in"),
								className: "rounded-full",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/auth",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-[18px] w-[18px]" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencySwitcher, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
								onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeIcon, { className: "h-[18px] w-[18px]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "hidden sm:inline-flex ml-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-[11px] uppercase tracking-[0.22em] h-10 px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/booking",
									children: t("nav.book")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "xl:hidden",
								onClick: () => setOpen((v) => !v),
								"aria-label": "Menu",
								"aria-expanded": open,
								"aria-controls": "mobile-nav-menu",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			}),
			searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onSearch,
					className: "container-page py-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: searchQ,
						onChange: (e) => setSearchQ(e.target.value),
						placeholder: "Search tours, destinations…",
						className: "flex-1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "rounded-none uppercase tracking-[0.2em] text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 mr-1.5" }), " Search"]
					})]
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav-menu",
				ref: mobileMenuRef,
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Site menu",
				className: "xl:hidden border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page py-4 flex flex-col gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							ref: mobileMenuFirstLinkRef,
							to: "/",
							className: "px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted",
							children: t("nav.home")
						}),
						NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted",
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 border-t border-border pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-3 py-1 eyebrow text-muted-foreground",
								children: "Destinations"
							}), destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/destinations/$slug",
								params: { slug: d.slug },
								className: "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted",
								children: [d.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.image_url,
									alt: d.name,
									loading: "lazy",
									className: "h-9 w-12 object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: d.name
								})]
							}, d.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencySwitcher, { className: "border border-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, { className: "border border-border" })]
						}),
						!isSignedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth",
							className: "mt-3 px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted inline-flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" }),
								" ",
								t("auth.sign_in")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-2 rounded-none uppercase tracking-[0.2em] text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/booking",
								children: t("nav.book")
							})
						})
					]
				})
			})
		]
	});
}
function SiteFooter() {
	const { t } = useTranslation();
	const f = useSettings("footer", {
		tagline: "Locally-led journeys across Djibouti — built around the salt lakes, rift volcanoes, whale sharks of Tadjoura, and the Afar and Issa communities who call these landscapes home.",
		brand_name: "Nature & Culture Tours",
		copyright: "Nature & Culture Tours. All rights reserved.",
		byline: "Crafted with care for travelers who go deeper.",
		instagram_url: "#",
		facebook_url: "#",
		youtube_url: "#"
	});
	const c = useSettings("contact", {
		address: "Djibouti",
		phone: "+253 77 15 57 57",
		email: "nculturetours@gmail.com"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 bg-sidebar text-sidebar-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16 grid gap-10 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 lg:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-semibold",
								children: f.brand_name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-sidebar-foreground/70 leading-relaxed",
							children: f.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: f.instagram_url,
									"aria-label": "Instagram",
									className: "grid h-9 w-9 place-items-center rounded-full bg-sidebar-accent hover:bg-gold hover:text-gold-foreground transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: f.facebook_url,
									"aria-label": "Facebook",
									className: "grid h-9 w-9 place-items-center rounded-full bg-sidebar-accent hover:bg-gold hover:text-gold-foreground transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: f.youtube_url,
									"aria-label": "YouTube",
									className: "grid h-9 w-9 place-items-center rounded-full bg-sidebar-accent hover:bg-gold hover:text-gold-foreground transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-4 w-4" })
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-base font-semibold mb-4",
					children: t("footer.explore")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-sidebar-foreground/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tours",
							className: "hover:text-gold",
							children: t("nav.tours")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/destinations",
							className: "hover:text-gold",
							children: t("nav.destinations")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: "hover:text-gold",
							children: t("nav.gallery")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "hover:text-gold",
							children: t("nav.journal")
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-base font-semibold mb-4",
					children: t("footer.company")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-sidebar-foreground/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-gold",
							children: t("footer.about_us")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-gold",
							children: t("nav.contact")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/booking",
							className: "hover:text-gold",
							children: t("nav.book")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							className: "hover:text-gold",
							children: t("footer.sign_in")
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-base font-semibold mb-4",
					children: t("footer.reach_us")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-sidebar-foreground/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }),
								" ",
								c.address
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }),
								" ",
								c.phone
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }),
								" ",
								c.email
							]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-sidebar-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-sidebar-foreground/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					f.copyright
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: f.byline })]
			})
		})]
	});
}
var WHATSAPP_NUMBER = "25377155757";
function buildWhatsAppHref(message = "Hello! I'd like to know more about your Djibouti tours.") {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: buildWhatsAppHref(),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" })]
	});
}
var WELCOME_MESSAGE = {
	id: "welcome",
	role: "bot",
	text: "Hello! I'm the Nature & Culture Tours assistant. Ask me about tours, destinations, pricing, or how to book — or tap a suggestion below."
};
var QUICK_REPLIES = [
	"See our tours",
	"Where do you travel?",
	"How do I book?",
	"What do tours cost?"
];
var CATEGORY_SYNONYMS = {
	wildlife: [
		"safari",
		"animal",
		"animals"
	],
	nature: ["waterfall", "forest"],
	trekking: [
		"hike",
		"hiking",
		"summit",
		"ridge"
	],
	photography: [
		"photo",
		"photos",
		"camera"
	],
	community: ["homestay", "village"],
	adventure: ["adrenaline", "extreme"],
	cultural: [
		"heritage",
		"tradition",
		"traditions"
	],
	historical: [
		"colonial",
		"history",
		"ancient"
	]
};
var GENERIC_WORDS = /* @__PURE__ */ new Set([
	"and",
	"the",
	"of",
	"in",
	"on",
	"at",
	"for",
	"day",
	"days"
]);
function money(n, format) {
	const num = Number(n);
	return Number.isFinite(num) ? format(num) : null;
}
function significantKeywords(name) {
	return name.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 2 && !GENERIC_WORDS.has(w));
}
function findByKeywords(text, items) {
	let best = null;
	let bestScore = 0;
	for (const item of items) {
		const words = significantKeywords(item.title ?? item.name ?? "");
		if (!words.length) continue;
		const threshold = Math.min(2, words.length);
		const score = words.filter((w) => text.includes(w)).length;
		if (score >= threshold && score > bestScore) {
			bestScore = score;
			best = item;
		}
	}
	return best;
}
function priceRange(tours) {
	const prices = tours.map((t) => Number(t.price_usd)).filter((n) => Number.isFinite(n));
	if (!prices.length) return null;
	return {
		min: Math.min(...prices),
		max: Math.max(...prices)
	};
}
function durationRange(tours) {
	const days = tours.map((t) => Number(t.duration_days)).filter((n) => Number.isFinite(n));
	if (!days.length) return null;
	return {
		min: Math.min(...days),
		max: Math.max(...days)
	};
}
function getBotReply(raw, ctx) {
	const text = raw.toLowerCase().trim();
	const tourMatch = findByKeywords(text, ctx.tours);
	if (tourMatch) {
		const price = money(tourMatch.price_usd, ctx.format);
		const desc = (tourMatch.short_description ?? "a signature journey").replace(/\.+$/, "");
		return {
			text: `${tourMatch.title} — ${desc}. It runs ${tourMatch.duration_days} days${price ? ` from ${price} per person` : ""}.`,
			links: [{
				kind: "tour",
				label: `View ${tourMatch.title}`,
				slug: tourMatch.slug
			}]
		};
	}
	const destMatch = findByKeywords(text, ctx.destinations);
	if (destMatch) return {
		text: `${destMatch.name} is in ${destMatch.region ? `the ${destMatch.region}` : "Djibouti"}. ${destMatch.description ?? ""}`.trim(),
		links: [{
			kind: "destination",
			label: `Explore ${destMatch.name}`,
			slug: destMatch.slug
		}]
	};
	const cat = TOUR_CATEGORIES.find((c) => text.includes(c.id) || text.includes(c.label.toLowerCase()) || (CATEGORY_SYNONYMS[c.id] ?? []).some((s) => text.includes(s)));
	if (cat) {
		const matches = ctx.tours.filter((t) => t.category === cat.id).slice(0, 3);
		if (matches.length) {
			const list = matches.map((t) => `• ${t.title} — ${t.duration_days} days${money(t.price_usd, ctx.format) ? `, from ${money(t.price_usd, ctx.format)}` : ""}`).join("\n");
			return {
				text: `Here are our ${cat.label.toLowerCase()} tours:\n${list}`,
				links: [{
					kind: "tours-category",
					label: `See all ${cat.label} tours`,
					category: cat.id
				}]
			};
		}
		return {
			text: `We don't have ${cat.label.toLowerCase()} tours live right now — ask us and we'll craft one for you.`,
			links: [{
				kind: "page",
				label: "Contact us",
				to: "/contact"
			}]
		};
	}
	if (/\b(book|reserve|reservation)\b/.test(text)) return {
		text: "Booking is easy: pick a tour, choose your travel dates and group size on our Booking page, and we'll confirm within 24 hours. We accept card payments or bank transfer.",
		links: [{
			kind: "page",
			label: "Start a booking",
			to: "/booking"
		}]
	};
	if (/\b(pay|payment|bank transfer|credit card)\b/.test(text)) return {
		text: "We accept Visa/Mastercard and bank transfer (wire/SWIFT). Payment instructions are sent after you submit a booking request.",
		links: [{
			kind: "page",
			label: "Book now",
			to: "/booking"
		}]
	};
	if (/\b(price|cost|how much|budget|expensive|cheap)\b/.test(text)) {
		const range = priceRange(ctx.tours);
		return {
			text: range ? `Our tours range from ${money(range.min, ctx.format)} to ${money(range.max, ctx.format)} per person, all-inclusive.` : "Pricing varies by tour — browse our tours page for current rates.",
			links: [{
				kind: "page",
				label: "Browse tours",
				to: "/tours"
			}]
		};
	}
	if (/\b(how long|duration|days|length of)\b/.test(text)) {
		const range = durationRange(ctx.tours);
		return {
			text: range ? `Most journeys run ${range.min}–${range.max} days, depending on the itinerary.` : "Tour lengths vary — check each tour page for exact duration.",
			links: [{
				kind: "page",
				label: "Browse tours",
				to: "/tours"
			}]
		};
	}
	if (/\b(tours?|trips?|itinerary|itineraries|journeys?)\b/.test(text)) {
		const list = ctx.tours.slice(0, 3).map((t) => `• ${t.title} — ${t.duration_days} days${money(t.price_usd, ctx.format) ? `, from ${money(t.price_usd, ctx.format)}` : ""}`).join("\n");
		return {
			text: list ? `Here are a few of our tours:\n${list}` : "Browse all our tours on the Tours page.",
			links: [{
				kind: "page",
				label: "Browse all tours",
				to: "/tours"
			}]
		};
	}
	if (/\b(destination|where.*(go|travel)|places|region)\b/.test(text)) {
		const names = ctx.destinations.slice(0, 6).map((d) => d.name).join(", ");
		return {
			text: names ? `We travel across Djibouti, including ${names}.` : "We travel across Djibouti's iconic landscapes.",
			links: [{
				kind: "page",
				label: "See all destinations",
				to: "/destinations"
			}]
		};
	}
	if (/\b(safe|safety|security|risk)\b/.test(text)) return { text: "Safety comes first: every itinerary includes certified guides, satellite communications, and evacuation cover." };
	if (/\b(guide|local host|community)\b/.test(text)) return { text: "Every guide is from the region they lead, and up to 15% of each tour fee flows back to host communities and conservancies." };
	if (/\b(contact|email|phone|call|address|reach you)\b/.test(text)) return {
		text: `You can reach us at ${ctx.contact.email} or ${ctx.contact.phone}. We're based at ${ctx.contact.address}.`,
		links: [{
			kind: "page",
			label: "Contact page",
			to: "/contact"
		}]
	};
	if (/\b(human|agent|real person|whatsapp)\b/.test(text)) return {
		text: "Happy to connect you with our team directly on WhatsApp — tap below.",
		links: [{
			kind: "whatsapp",
			label: "Chat on WhatsApp"
		}]
	};
	if (/^(hi|hello|hey|good (morning|afternoon|evening)|salut|bonjour)\b/.test(text)) return { text: "Hello! Ask me about tours, destinations, pricing, or how to book — or tap a suggestion below." };
	return {
		text: "I'm not sure I caught that. Try asking about tours, destinations, pricing, or booking — or reach our team directly.",
		links: [{
			kind: "whatsapp",
			label: "Talk to us on WhatsApp"
		}, {
			kind: "page",
			label: "Contact page",
			to: "/contact"
		}]
	};
}
function QuickLinkButton({ link }) {
	const className = "inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline";
	switch (link.kind) {
		case "tour": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/tours/$slug",
			params: { slug: link.slug },
			className,
			children: [
				link.label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })
			]
		});
		case "destination": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/destinations/$slug",
			params: { slug: link.slug },
			className,
			children: [
				link.label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })
			]
		});
		case "tours-category": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/tours",
			search: { category: link.category },
			className,
			children: [
				link.label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })
			]
		});
		case "page": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: link.to,
			className,
			children: [
				link.label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })
			]
		});
		case "whatsapp": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: buildWhatsAppHref(),
			target: "_blank",
			rel: "noopener noreferrer",
			className,
			children: [
				link.label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })
			]
		});
	}
}
function ChatWidget() {
	const { data: tours = [] } = useQuery(toursQuery());
	const { data: destinations = [] } = useQuery(destinationsQuery());
	const { format } = useCurrency();
	const contact = useSettings("contact", {
		address: "Djibouti",
		phone: "+253 77 15 57 57",
		email: "nculturetours@gmail.com"
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	const [showGreeting, setShowGreeting] = (0, import_react.useState)(true);
	const [input, setInput] = (0, import_react.useState)("");
	const [messages, setMessages] = (0, import_react.useState)([WELCOME_MESSAGE]);
	const idRef = (0, import_react.useRef)(0);
	const scrollRef = (0, import_react.useRef)(null);
	const panelRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const launcherRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		inputRef.current?.focus();
		const onKeyDown = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		const onPointerDown = (e) => {
			const target = e.target;
			if (panelRef.current?.contains(target) || launcherRef.current?.contains(target)) return;
			setOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("mousedown", onPointerDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("mousedown", onPointerDown);
		};
	}, [open]);
	const send = (raw) => {
		const text = raw.trim();
		if (!text) return;
		idRef.current += 1;
		const userMsg = {
			id: `u${idRef.current}`,
			role: "user",
			text
		};
		const reply = getBotReply(text, {
			tours,
			destinations,
			contact,
			format
		});
		idRef.current += 1;
		const botMsg = {
			id: `b${idRef.current}`,
			role: "bot",
			text: reply.text,
			links: reply.links
		};
		setMessages((m) => [
			...m,
			userMsg,
			botMsg
		]);
		setInput("");
	};
	const onSubmit = (e) => {
		e.preventDefault();
		send(input);
	};
	const onInputKeyDown = (e) => {
		if (e.key === "Escape") setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-24 right-5 z-50 flex items-end gap-3",
		children: [!open && showGreeting && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-[220px] rounded-2xl border border-border bg-card px-4 py-3 text-sm leading-snug shadow-lift animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setShowGreeting(false),
				"aria-label": "Dismiss",
				className: "absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-muted text-muted-foreground shadow-soft hover:bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
			}), "Need help planning your Djibouti trip? Ask me about tours, prices, or booking."]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			ref: launcherRef,
			type: "button",
			onClick: () => {
				setOpen((v) => !v);
				setShowGreeting(false);
			},
			"aria-label": open ? "Close chat" : "Open chat",
			"aria-expanded": open,
			"aria-controls": "chat-widget-panel",
			className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-110 hover:bg-primary p-0",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-6 w-6" })
		})]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "chat-widget-panel",
		ref: panelRef,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Chat with Nature & Culture Tours",
		className: "fixed bottom-[152px] right-5 z-50 flex h-[65vh] max-h-[520px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-popover shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/20 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold leading-tight",
						children: "Nature & Culture Tours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-primary-foreground/70",
						children: "Usually replies instantly"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "flex-1 space-y-3 overflow-y-auto p-4",
				children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex", m.role === "user" ? "justify-end" : "justify-start"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line", m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.text }), m.links && m.links.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-col items-start gap-1.5 border-t border-border/50 pt-2",
							children: m.links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLinkButton, { link: l }, i))
						})]
					})
				}, m.id))
			}),
			messages.length <= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5 border-t border-border px-3 py-2.5",
				children: QUICK_REPLIES.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => send(q),
					className: "rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-gold hover:text-primary",
					children: q
				}, q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "flex items-center gap-2 border-t border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					ref: inputRef,
					value: input,
					onChange: (e) => setInput(e.target.value),
					onKeyDown: onInputKeyDown,
					placeholder: "Ask about tours, prices, booking…",
					"aria-label": "Message",
					className: "flex-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					"aria-label": "Send message",
					className: "shrink-0 rounded-full bg-gold text-gold-foreground hover:bg-gold/90",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
				})]
			})
		]
	})] });
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {})
		]
	});
}
//#endregion
export { buildWhatsAppHref as n, SiteLayout as t };
