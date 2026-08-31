import { t as tour_culture_default } from "./tour-culture-CDLBqZdb.mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { C as useSettings } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { U as Leaf, i as Users, lt as Compass } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./site-layout-rQjoVkyg.mjs";
import { t as PageHero } from "./page-hero-D4_OUjCv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-LtNBBevW.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t } = useTranslation();
	const a = useSettings("about", {
		hero_eyebrow: t("about.hero_eyebrow"),
		hero_title: t("about.hero_title"),
		hero_subtitle: t("about.hero_subtitle"),
		story_eyebrow: t("about.story_eyebrow"),
		story_title: t("about.story_title"),
		story_paragraphs: [],
		mission: "",
		vision: "",
		values: "",
		team: []
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: a.hero_eyebrow,
			title: a.hero_title,
			subtitle: a.hero_subtitle,
			image: tour_culture_default,
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20 grid lg:grid-cols-2 gap-16 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: a.story_eyebrow
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl font-semibold leading-tight",
				children: a.story_title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5 text-base leading-relaxed text-foreground/85",
				children: (a.story_paragraphs ?? []).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid lg:grid-cols-3 gap-8",
				children: [
					{
						i: Compass,
						label: t("about.mission_label"),
						d: a.mission
					},
					{
						i: Leaf,
						label: t("about.vision_label"),
						d: a.vision
					},
					{
						i: Users,
						label: t("about.values_label"),
						d: a.values
					}
				].map(({ i: I, label, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card p-8 border border-border shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-7 w-7 text-gold mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground leading-relaxed",
							children: d
						})
					]
				}, label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3 text-center",
					children: t("about.team_eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-semibold text-center mb-12",
					children: t("about.team_title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: (a.team ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.img,
								alt: m.name,
								className: "mx-auto h-44 w-44 rounded-full object-cover shadow-soft",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-semibold",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: m.role
							})
						]
					}, m.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-primary text-primary-foreground p-10 lg:p-16 flex flex-wrap justify-between items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-semibold",
					children: t("about.cta_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-primary-foreground/80",
					children: t("about.cta_subtitle")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "rounded-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/booking",
						children: t("about.cta_button")
					})
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
