import { o as __toESM } from "../_runtime.mjs";
import { t as tour_culture_default } from "./tour-culture-CDLBqZdb.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { L as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, k as redirect, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as ThemeProvider } from "./theme-provider-CEYifutc.mjs";
import { n as isStaffRole, t as CurrencyProvider } from "./auth-Bh2CRKjo.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as createTanStackMcpHandler, d as string, i as createTanStackListToolsHandler, l as boolean, n as defineTool, o as createTanStackOAuthProtectedResourceMetadataHandler, r as createTanStackInvokeToolHandler, t as defineMcp } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { t as Route$40 } from "./admin.crm._customerId-DTTlq7mu.mjs";
import { t as Route$41 } from "./admin.tours._tourId-U1Z_4OAx.mjs";
import { n as absoluteUrl, t as SITE_NAME } from "./site-BRP1auNI.mjs";
import { t as Route$42 } from "./blog._slug-KoJigAek.mjs";
import { t as tour_history_default } from "./tour-history-DXzdWMej.mjs";
import { r as trackPageView, t as Route$43 } from "./booking-D69XsubQ.mjs";
import { t as tour_adventure_default } from "./tour-adventure-vNsr64EF.mjs";
import { t as Route$44 } from "./destinations._slug-CH0p7AUk.mjs";
import { t as tour_nature_default } from "./tour-nature-l6TcKERM.mjs";
import { t as tour_wildlife_default } from "./tour-wildlife-CIelsqmM.mjs";
import { t as hero_safari_default } from "./hero-safari-f9hz8l5r.mjs";
import { t as Route$45 } from "./search-D9nFvzmz.mjs";
import { t as Route$46 } from "./tours.index-CR22WaUh.mjs";
import { t as Route$47 } from "./tours._slug-CYKIn_mr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Df9-cpBE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CxO6N9rr.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: t("notFound.eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-display font-semibold",
					children: t("notFound.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: t("notFound.description")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("notFound.back_home")
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const { t } = useTranslation();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: t("errorPage.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("errorPage.description")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("errorPage.try_again")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: t("errorPage.go_home")
					})]
				})
			]
		})
	});
}
var Route$39 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${SITE_NAME} — Authentic Djibouti Journeys` },
			{
				name: "description",
				content: "Curated cultural, wildlife, trekking and photography tours across Djibouti. Locally-led, ethically run, beautifully designed."
			},
			{
				name: "author",
				content: SITE_NAME
			},
			{
				name: "theme-color",
				content: "#E8791E"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:title",
				content: `${SITE_NAME} — Authentic Djibouti Journeys`
			},
			{
				property: "og:description",
				content: "Curated cultural, wildlife, trekking and photography tours across Djibouti."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: absoluteUrl(hero_safari_default)
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: `${SITE_NAME} — Authentic Djibouti Journeys`
			},
			{
				name: "twitter:description",
				content: "Curated cultural, wildlife, trekking and photography tours across Djibouti."
			},
			{
				name: "twitter:image",
				content: absoluteUrl(hero_safari_default)
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Cairo:wght@400;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "TravelAgency",
				name: SITE_NAME,
				description: "Locally-led cultural, wildlife, trekking and photography tours across Djibouti.",
				url: absoluteUrl("/"),
				image: absoluteUrl(hero_safari_default),
				areaServed: "Djibouti"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function PageViewTracker() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const lastPath = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (lastPath.current === pathname) return;
		lastPath.current = pathname;
		trackPageView(pathname);
	}, [pathname]);
	return null;
}
function RootComponent() {
	const { queryClient } = Route$39.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CurrencyProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageViewTracker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-right",
				richColors: true
			})
		] }) })
	});
}
var $$splitComponentImporter$33 = () => import("./tours-DylRhYpY.mjs");
var Route$38 = createFileRoute("/tours")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var Route$37 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		{
			path: "/",
			priority: "1.0"
		},
		{
			path: "/tours",
			priority: "0.9"
		},
		{
			path: "/destinations",
			priority: "0.9"
		},
		{
			path: "/gallery",
			priority: "0.6"
		},
		{
			path: "/blog",
			priority: "0.6"
		},
		{
			path: "/about",
			priority: "0.5"
		},
		{
			path: "/contact",
			priority: "0.5"
		},
		{
			path: "/booking",
			priority: "0.7"
		}
	];
	const { data: tours } = await supabase.from("tours").select("slug").eq("is_active", true);
	const { data: destinations } = await supabase.from("destinations").select("slug");
	const { data: posts } = await supabase.from("blog_posts").select("slug").eq("published", true);
	const dynamic = [
		...(tours ?? []).map((t) => ({
			path: `/tours/${t.slug}`,
			priority: "0.8"
		})),
		...(destinations ?? []).map((d) => ({
			path: `/destinations/${d.slug}`,
			priority: "0.8"
		})),
		...(posts ?? []).map((p) => ({
			path: `/blog/${p.slug}`,
			priority: "0.5"
		}))
	];
	const lastmod = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...staticPaths, ...dynamic].map(({ path, priority }) => `  <url><loc>${absoluteUrl(path)}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
function getSupabase() {
	const url = process.env.SUPABASE_URL;
	const key = process.env.SUPABASE_PUBLISHABLE_KEY;
	if (!url || !key) throw new Error("Supabase env not configured");
	return createClient(url, key, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} });
}
var mcp_default = defineMcp({
	name: "djibouti-nature-cultural-tours",
	title: "Nature & Culture Tours",
	version: "0.1.0",
	instructions: "Read-only tools to browse tours, destinations, and blog posts from Nature & Culture Tours. Use `list_tours` to browse available trips, `get_tour` for a single tour's details, `list_destinations` for regions covered, and `list_blog_posts` for travel stories.",
	tools: [
		defineTool({
			name: "list_tours",
			title: "List tours",
			description: "List active Djibouti tours offered by the agency, with title, slug, price, duration, and category.",
			inputSchema: {
				category: string().optional().describe("Optional category filter (e.g. nature, cultural)."),
				featured: boolean().optional().describe("If true, only return featured tours.")
			},
			annotations: {
				readOnlyHint: true,
				idempotentHint: true,
				openWorldHint: false
			},
			handler: async ({ category, featured }) => {
				let q = getSupabase().from("tours").select("id,slug,title,summary,category,duration_days,price_usd,max_group_size,is_featured").eq("is_active", true);
				if (category) q = q.eq("category", category);
				if (featured) q = q.eq("is_featured", true);
				const { data, error } = await q;
				if (error) return {
					content: [{
						type: "text",
						text: error.message
					}],
					isError: true
				};
				return {
					content: [{
						type: "text",
						text: JSON.stringify(data, null, 2)
					}],
					structuredContent: { tours: data ?? [] }
				};
			}
		}),
		defineTool({
			name: "get_tour",
			title: "Get tour details",
			description: "Fetch full details for a single tour by its slug, including itinerary and destination.",
			inputSchema: { slug: string().min(1).describe("Tour slug, e.g. 'lake-assal-expedition'.") },
			annotations: {
				readOnlyHint: true,
				idempotentHint: true,
				openWorldHint: false
			},
			handler: async ({ slug }) => {
				const { data, error } = await getSupabase().from("tours").select("*, destination:destinations(*)").eq("slug", slug).maybeSingle();
				if (error) return {
					content: [{
						type: "text",
						text: error.message
					}],
					isError: true
				};
				if (!data) return {
					content: [{
						type: "text",
						text: `No tour found with slug '${slug}'.`
					}],
					isError: true
				};
				return {
					content: [{
						type: "text",
						text: JSON.stringify(data, null, 2)
					}],
					structuredContent: { tour: data }
				};
			}
		}),
		defineTool({
			name: "list_destinations",
			title: "List destinations",
			description: "List all Djibouti destinations covered by the agency.",
			inputSchema: {},
			annotations: {
				readOnlyHint: true,
				idempotentHint: true,
				openWorldHint: false
			},
			handler: async () => {
				const { data, error } = await getSupabase().from("destinations").select("*").order("name");
				if (error) return {
					content: [{
						type: "text",
						text: error.message
					}],
					isError: true
				};
				return {
					content: [{
						type: "text",
						text: JSON.stringify(data, null, 2)
					}],
					structuredContent: { destinations: data ?? [] }
				};
			}
		}),
		defineTool({
			name: "list_blog_posts",
			title: "List blog posts",
			description: "List published blog posts covering Djibouti travel stories and tips.",
			inputSchema: {},
			annotations: {
				readOnlyHint: true,
				idempotentHint: true,
				openWorldHint: false
			},
			handler: async () => {
				const { data, error } = await getSupabase().from("blog_posts").select("id,slug,title,excerpt,published_at,author").eq("published", true).order("published_at", {
					ascending: false,
					nullsFirst: false
				});
				if (error) return {
					content: [{
						type: "text",
						text: error.message
					}],
					isError: true
				};
				return {
					content: [{
						type: "text",
						text: JSON.stringify(data, null, 2)
					}],
					structuredContent: { posts: data ?? [] }
				};
			}
		})
	]
});
var Route$36 = createFileRoute("/mcp")({ server: { handlers: { ANY: createTanStackMcpHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var $$splitComponentImporter$32 = () => import("./gallery-C_Fnelud.mjs");
var Route$35 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: `Gallery — ${SITE_NAME}` },
			{
				name: "description",
				content: "Moments from the trail — wildlife, culture, landscapes."
			},
			{
				property: "og:title",
				content: `Gallery — ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Photography from our journeys."
			},
			{
				property: "og:image",
				content: absoluteUrl(tour_wildlife_default)
			},
			{
				name: "twitter:title",
				content: `Gallery — ${SITE_NAME}`
			},
			{
				name: "twitter:description",
				content: "Photography from our journeys."
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/gallery")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./destinations-D8TPoq4x.mjs");
var Route$34 = createFileRoute("/destinations")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
var $$splitComponentImporter$30 = () => import("./contact-ByyQn217.mjs");
var Route$33 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: `Contact — ${SITE_NAME}` },
			{
				name: "description",
				content: "Get in touch with our team to plan your next journey."
			},
			{
				property: "og:title",
				content: `Contact us — ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Reach out to our team."
			},
			{
				property: "og:image",
				content: absoluteUrl(tour_adventure_default)
			},
			{
				name: "twitter:title",
				content: `Contact us — ${SITE_NAME}`
			},
			{
				name: "twitter:description",
				content: "Reach out to our team."
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/contact")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./blog-GHsbigBI.mjs");
var Route$32 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
var $$splitComponentImporter$28 = () => import("./auth-CjfQk1YC.mjs");
var Route$31 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign in — Nature & Culture Tours" }, {
		name: "description",
		content: "Access your bookings and admin tools."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./about-LtNBBevW.mjs");
var Route$30 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: `About — ${SITE_NAME}` },
			{
				name: "description",
				content: `The Djibouti-based guides, naturalists and community coordinators behind ${SITE_NAME}.`
			},
			{
				property: "og:title",
				content: `About — ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Locally-led, ethically run journeys across Djibouti."
			},
			{
				property: "og:image",
				content: absoluteUrl(tour_culture_default)
			},
			{
				name: "twitter:title",
				content: `About — ${SITE_NAME}`
			},
			{
				name: "twitter:description",
				content: "Locally-led, ethically run journeys across Djibouti."
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/about")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./route-Di7iQBCH.mjs");
var Route$29 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		const { data: roles, error: rolesError } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id);
		if (rolesError) {
			toast.error("Couldn't verify your account access — please try again.");
			throw redirect({ to: "/" });
		}
		if (!(roles ?? []).some((r) => isStaffRole(r.role))) {
			toast.error("Your account doesn't have access to the admin area.");
			throw redirect({ to: "/" });
		}
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./routes-lxaNuEU7.mjs");
var Route$28 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: `${SITE_NAME} — Discover the Untamed Beauty` },
		{
			name: "description",
			content: "Locally-led cultural, wildlife, trekking and photography tours across Djibouti — Lake Assal, Lake Abbé, the Goda Mountains, whale sharks of Tadjoura and more."
		},
		{
			property: "og:title",
			content: SITE_NAME
		},
		{
			property: "og:description",
			content: "Extraordinary nature and cultural experiences in Djibouti — curated by local guides."
		},
		{
			property: "og:image",
			content: absoluteUrl(hero_safari_default)
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./destinations.index-CCtvEoq0.mjs");
var Route$27 = createFileRoute("/destinations/")({
	head: () => ({
		meta: [
			{ title: `Destinations — ${SITE_NAME}` },
			{
				name: "description",
				content: "Iconic destinations across Djibouti — Lake Assal, Lake Abbé, the Goda Mountains, Tadjoura and Moucha Island."
			},
			{
				property: "og:title",
				content: `Destinations — ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Where we travel across Djibouti."
			},
			{
				property: "og:image",
				content: absoluteUrl(tour_nature_default)
			},
			{
				name: "twitter:title",
				content: `Destinations — ${SITE_NAME}`
			},
			{
				name: "twitter:description",
				content: "Where we travel across Djibouti."
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/destinations")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./blog.index-yseD7aLL.mjs");
var Route$26 = createFileRoute("/blog/")({
	head: () => ({
		meta: [
			{ title: `Journal — ${SITE_NAME}` },
			{
				name: "description",
				content: "Travel tips, conservation, culture and gear notes from our guides."
			},
			{
				property: "og:title",
				content: `Journal — ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Stories from the trail."
			},
			{
				property: "og:image",
				content: absoluteUrl(tour_history_default)
			},
			{
				name: "twitter:title",
				content: `Journal — ${SITE_NAME}`
			},
			{
				name: "twitter:description",
				content: "Stories from the trail."
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/blog")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./admin-kA9678nv.mjs");
var Route$25 = createFileRoute("/_authenticated/admin")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var Route$24 = createFileRoute("/.well-known/oauth-protected-resource")({ server: { handlers: { ANY: createTanStackOAuthProtectedResourceMetadataHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var Route$23 = createFileRoute("/.mcp/list-tools")({ server: { handlers: { ANY: createTanStackListToolsHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var $$splitComponentImporter$21 = () => import("./admin.index-BK_1xrN_.mjs");
var Route$22 = createFileRoute("/_authenticated/admin/")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./admin.vehicles-Bx7MZlwA.mjs");
var Route$21 = createFileRoute("/_authenticated/admin/vehicles")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./admin.tours-DeSUdcQa.mjs");
var Route$20 = createFileRoute("/_authenticated/admin/tours")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./admin.testimonials-CMLtwPLY.mjs");
var Route$19 = createFileRoute("/_authenticated/admin/testimonials")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./admin.team-FnBUUEJv.mjs");
var Route$18 = createFileRoute("/_authenticated/admin/team")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./admin.site-C3VUjMLU.mjs");
var Route$17 = createFileRoute("/_authenticated/admin/site")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./admin.inquiries-DlX-mSwu.mjs");
var Route$16 = createFileRoute("/_authenticated/admin/inquiries")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./admin.hotels-Cw_mgyVJ.mjs");
var Route$15 = createFileRoute("/_authenticated/admin/hotels")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./admin.guides-SV1auE6F.mjs");
var Route$14 = createFileRoute("/_authenticated/admin/guides")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./admin.gallery-DScY37n-.mjs");
var Route$13 = createFileRoute("/_authenticated/admin/gallery")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./admin.finance-CAt1Ndy0.mjs");
var Route$12 = createFileRoute("/_authenticated/admin/finance")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./admin.expenses-mTbrMmAE.mjs");
var Route$11 = createFileRoute("/_authenticated/admin/expenses")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./admin.drivers-Bs7Olnj8.mjs");
var Route$10 = createFileRoute("/_authenticated/admin/drivers")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./admin.destinations-BgbVET6n.mjs");
var Route$9 = createFileRoute("/_authenticated/admin/destinations")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./admin.crm-9dxpfzWF.mjs");
var Route$8 = createFileRoute("/_authenticated/admin/crm")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./admin.coupons-iRciG30O.mjs");
var Route$7 = createFileRoute("/_authenticated/admin/coupons")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.bookings-CLTRSoLB.mjs");
var Route$6 = createFileRoute("/_authenticated/admin/bookings")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.blog-DKS_dnDg.mjs");
var Route$5 = createFileRoute("/_authenticated/admin/blog")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.activities-DNiwqdbO.mjs");
var Route$4 = createFileRoute("/_authenticated/admin/activities")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.account-BwqYPDy1.mjs");
var Route$3 = createFileRoute("/_authenticated/admin/account")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var Route$2 = createFileRoute("/.mcp/invoke-tool/$tool")({ server: { handlers: { ANY: createTanStackInvokeToolHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var $$splitComponentImporter$1 = () => import("./admin.tours.index-CYq7sgip.mjs");
var Route$1 = createFileRoute("/_authenticated/admin/tours/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.crm.index-C3GAOFyN.mjs");
var Route = createFileRoute("/_authenticated/admin/crm/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var ToursRoute = Route$38.update({
	id: "/tours",
	path: "/tours",
	getParentRoute: () => Route$39
});
var SitemapDotxmlRoute = Route$37.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$39
});
var SearchRoute = Route$45.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$39
});
var McpRoute = Route$36.update({
	id: "/mcp",
	path: "/mcp",
	getParentRoute: () => Route$39
});
var GalleryRoute = Route$35.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$39
});
var DestinationsRoute = Route$34.update({
	id: "/destinations",
	path: "/destinations",
	getParentRoute: () => Route$39
});
var ContactRoute = Route$33.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$39
});
var BookingRoute = Route$43.update({
	id: "/booking",
	path: "/booking",
	getParentRoute: () => Route$39
});
var BlogRoute = Route$32.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$39
});
var AuthRoute = Route$31.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$39
});
var AboutRoute = Route$30.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$39
});
var AuthenticatedRouteRoute = Route$29.update({
	id: "/_authenticated",
	getParentRoute: () => Route$39
});
var IndexRoute = Route$28.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$39
});
var ToursIndexRoute = Route$46.update({
	id: "/",
	path: "/",
	getParentRoute: () => ToursRoute
});
var DestinationsIndexRoute = Route$27.update({
	id: "/",
	path: "/",
	getParentRoute: () => DestinationsRoute
});
var BlogIndexRoute = Route$26.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var ToursSlugRoute = Route$47.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ToursRoute
});
var DestinationsSlugRoute = Route$44.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => DestinationsRoute
});
var BlogSlugRoute = Route$42.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var AuthenticatedAdminRoute = Route$25.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var Char91DotwellKnownChar93OauthProtectedResourceRoute = Route$24.update({
	id: "/.well-known/oauth-protected-resource",
	path: "/.well-known/oauth-protected-resource",
	getParentRoute: () => Route$39
});
var Char91DotmcpChar93ListToolsRoute = Route$23.update({
	id: "/.mcp/list-tools",
	path: "/.mcp/list-tools",
	getParentRoute: () => Route$39
});
var AuthenticatedAdminIndexRoute = Route$22.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminVehiclesRoute = Route$21.update({
	id: "/vehicles",
	path: "/vehicles",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminToursRoute = Route$20.update({
	id: "/tours",
	path: "/tours",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminTestimonialsRoute = Route$19.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminTeamRoute = Route$18.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminSiteRoute = Route$17.update({
	id: "/site",
	path: "/site",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminInquiriesRoute = Route$16.update({
	id: "/inquiries",
	path: "/inquiries",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminHotelsRoute = Route$15.update({
	id: "/hotels",
	path: "/hotels",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminGuidesRoute = Route$14.update({
	id: "/guides",
	path: "/guides",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminGalleryRoute = Route$13.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminFinanceRoute = Route$12.update({
	id: "/finance",
	path: "/finance",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminExpensesRoute = Route$11.update({
	id: "/expenses",
	path: "/expenses",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminDriversRoute = Route$10.update({
	id: "/drivers",
	path: "/drivers",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminDestinationsRoute = Route$9.update({
	id: "/destinations",
	path: "/destinations",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminCrmRoute = Route$8.update({
	id: "/crm",
	path: "/crm",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminCouponsRoute = Route$7.update({
	id: "/coupons",
	path: "/coupons",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminBookingsRoute = Route$6.update({
	id: "/bookings",
	path: "/bookings",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminBlogRoute = Route$5.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminActivitiesRoute = Route$4.update({
	id: "/activities",
	path: "/activities",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminAccountRoute = Route$3.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => AuthenticatedAdminRoute
});
var Char91DotmcpChar93InvokeToolToolRoute = Route$2.update({
	id: "/.mcp/invoke-tool/$tool",
	path: "/.mcp/invoke-tool/$tool",
	getParentRoute: () => Route$39
});
var AuthenticatedAdminToursIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAdminToursRoute
});
var AuthenticatedAdminCrmIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAdminCrmRoute
});
var AuthenticatedAdminToursTourIdRoute = Route$41.update({
	id: "/$tourId",
	path: "/$tourId",
	getParentRoute: () => AuthenticatedAdminToursRoute
});
var AuthenticatedAdminCrmRouteChildren = {
	AuthenticatedAdminCrmCustomerIdRoute: Route$40.update({
		id: "/$customerId",
		path: "/$customerId",
		getParentRoute: () => AuthenticatedAdminCrmRoute
	}),
	AuthenticatedAdminCrmIndexRoute
};
var AuthenticatedAdminCrmRouteWithChildren = AuthenticatedAdminCrmRoute._addFileChildren(AuthenticatedAdminCrmRouteChildren);
var AuthenticatedAdminToursRouteChildren = {
	AuthenticatedAdminToursTourIdRoute,
	AuthenticatedAdminToursIndexRoute
};
var AuthenticatedAdminRouteChildren = {
	AuthenticatedAdminAccountRoute,
	AuthenticatedAdminActivitiesRoute,
	AuthenticatedAdminBlogRoute,
	AuthenticatedAdminBookingsRoute,
	AuthenticatedAdminCouponsRoute,
	AuthenticatedAdminCrmRoute: AuthenticatedAdminCrmRouteWithChildren,
	AuthenticatedAdminDestinationsRoute,
	AuthenticatedAdminDriversRoute,
	AuthenticatedAdminExpensesRoute,
	AuthenticatedAdminFinanceRoute,
	AuthenticatedAdminGalleryRoute,
	AuthenticatedAdminGuidesRoute,
	AuthenticatedAdminHotelsRoute,
	AuthenticatedAdminInquiriesRoute,
	AuthenticatedAdminSiteRoute,
	AuthenticatedAdminTeamRoute,
	AuthenticatedAdminTestimonialsRoute,
	AuthenticatedAdminToursRoute: AuthenticatedAdminToursRoute._addFileChildren(AuthenticatedAdminToursRouteChildren),
	AuthenticatedAdminVehiclesRoute,
	AuthenticatedAdminIndexRoute
};
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: AuthenticatedAdminRoute._addFileChildren(AuthenticatedAdminRouteChildren) };
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var BlogRouteChildren = {
	BlogSlugRoute,
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var DestinationsRouteChildren = {
	DestinationsSlugRoute,
	DestinationsIndexRoute
};
var DestinationsRouteWithChildren = DestinationsRoute._addFileChildren(DestinationsRouteChildren);
var ToursRouteChildren = {
	ToursSlugRoute,
	ToursIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AboutRoute,
	AuthRoute,
	BlogRoute: BlogRouteWithChildren,
	BookingRoute,
	ContactRoute,
	DestinationsRoute: DestinationsRouteWithChildren,
	GalleryRoute,
	McpRoute,
	SearchRoute,
	SitemapDotxmlRoute,
	ToursRoute: ToursRoute._addFileChildren(ToursRouteChildren),
	Char91DotmcpChar93ListToolsRoute,
	Char91DotwellKnownChar93OauthProtectedResourceRoute,
	Char91DotmcpChar93InvokeToolToolRoute
};
var routeTree = Route$39._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
