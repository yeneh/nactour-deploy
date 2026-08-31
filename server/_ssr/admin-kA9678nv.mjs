import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { I as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useTheme } from "./theme-provider-CEYifutc.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { C as Search, E as Receipt, Et as UserRound, F as Moon, I as MessageSquareText, J as Image, Ot as PanelLeft, P as Mountain, Pt as ChartLine, V as LogOut, W as LayoutDashboard, Y as IdCard, _ as Sun, b as ShieldCheck, ct as Contact, et as FileText, g as Tag, h as Ticket, it as ExternalLink, kt as PanelLeftClose, lt as Compass, pt as ChevronRight, s as UserCog, u as Truck, v as Star, vt as CalendarCheck, xt as BookOpen, yt as Building2, z as MapPin } from "../_libs/lucide-react.mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as DropdownMenuSeparator, i as DropdownMenuLabel, n as DropdownMenuContent, o as DropdownMenuTrigger, r as DropdownMenuItem, t as DropdownMenu } from "./dropdown-menu-CDoe66ii.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-kA9678nv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
var GROUPS = [
	{
		label: "Overview",
		items: [
			{
				to: "/admin",
				label: "Dashboard",
				icon: LayoutDashboard,
				exact: true
			},
			{
				to: "/admin/account",
				label: "My account",
				icon: UserCog
			},
			{
				to: "/admin/team",
				label: "Team",
				icon: ShieldCheck
			}
		]
	},
	{
		label: "Catalogue",
		items: [
			{
				to: "/admin/tours",
				label: "Tours",
				icon: Compass
			},
			{
				to: "/admin/destinations",
				label: "Destinations",
				icon: MapPin
			},
			{
				to: "/admin/gallery",
				label: "Gallery",
				icon: Image
			}
		]
	},
	{
		label: "CRM",
		items: [{
			to: "/admin/crm",
			label: "Customers",
			icon: Contact
		}, {
			to: "/admin/inquiries",
			label: "Inquiries",
			icon: MessageSquareText
		}]
	},
	{
		label: "Operations",
		items: [
			{
				to: "/admin/guides",
				label: "Guides",
				icon: UserRound
			},
			{
				to: "/admin/drivers",
				label: "Drivers",
				icon: IdCard
			},
			{
				to: "/admin/vehicles",
				label: "Vehicles",
				icon: Truck
			},
			{
				to: "/admin/hotels",
				label: "Hotels",
				icon: Building2
			},
			{
				to: "/admin/activities",
				label: "Activities",
				icon: Ticket
			}
		]
	},
	{
		label: "Commerce",
		items: [{
			to: "/admin/bookings",
			label: "Bookings",
			icon: CalendarCheck
		}, {
			to: "/admin/coupons",
			label: "Coupons",
			icon: Tag
		}]
	},
	{
		label: "Finance",
		items: [{
			to: "/admin/finance",
			label: "Overview",
			icon: ChartLine
		}, {
			to: "/admin/expenses",
			label: "Expenses",
			icon: Receipt
		}]
	},
	{
		label: "Content",
		items: [
			{
				to: "/admin/site",
				label: "Site content",
				icon: FileText
			},
			{
				to: "/admin/blog",
				label: "Journal",
				icon: BookOpen
			},
			{
				to: "/admin/testimonials",
				label: "Testimonials",
				icon: Star
			}
		]
	}
];
var ALL_ITEMS = GROUPS.flatMap((g) => g.items);
function AdminLayout() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const nav = useNavigate();
	const { theme, toggle } = useTheme();
	const [email, setEmail] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)(null);
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(async ({ data }) => {
			if (!data.user) return;
			setEmail(data.user.email ?? "");
			const [{ data: roles }, { data: profile }] = await Promise.all([supabase.from("user_roles").select("role").eq("user_id", data.user.id), supabase.from("profiles").select("full_name").eq("id", data.user.id).maybeSingle()]);
			setRole(roles?.[0]?.role ?? "customer");
			setName(profile?.full_name ?? "");
		});
	}, []);
	const current = (0, import_react.useMemo)(() => {
		const exact = ALL_ITEMS.find((i) => i.to === pathname);
		if (exact) return exact;
		return [...ALL_ITEMS].sort((a, b) => b.to.length - a.to.length).find((i) => pathname.startsWith(i.to));
	}, [pathname]);
	const results = query.trim() ? ALL_ITEMS.filter((i) => i.label.toLowerCase().includes(query.trim().toLowerCase())) : [];
	const signOut = async () => {
		await supabase.auth.signOut();
		toast.success("Signed out");
		nav({ to: "/auth" });
	};
	const initials = (name || email || "A").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 80,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex bg-muted/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: cn("hidden md:flex shrink-0 flex-col bg-sidebar text-sidebar-foreground transition-[width] duration-300 sticky top-0 h-screen", collapsed ? "w-[76px]" : "w-64"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("flex items-center gap-2.5 px-4 h-16 border-b border-sidebar-border", collapsed && "justify-center px-0"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold text-gold-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "h-5 w-5" })
							}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-base leading-tight font-semibold truncate",
									children: "Djibouti N&C"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/60",
									children: "Control room"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto py-4 px-3 space-y-6",
						children: GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/45",
								children: group.label
							}), group.items.map((item) => {
								const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
								const Icon = item.icon;
								const link = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									className: cn("group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors", collapsed && "justify-center px-0", active ? "bg-gold text-gold-foreground shadow-[0_8px_20px_-12px_rgba(0,0,0,0.6)]" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: item.label
									})]
								}, item.to);
								return collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: link
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
									side: "right",
									children: item.label
								})] }, item.to) : link;
							})]
						}, group.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3 border-t border-sidebar-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors", collapsed && "justify-center px-0"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View website" })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0 flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-30 h-16 flex items-center gap-3 border-b border-border bg-background/85 backdrop-blur px-4 lg:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "hidden md:inline-flex rounded-xl",
								onClick: () => setCollapsed((c) => !c),
								"aria-label": "Toggle sidebar",
								children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground truncate",
										children: current?.label ?? "Dashboard"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ml-auto flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative hidden md:block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: query,
												onChange: (e) => setQuery(e.target.value),
												placeholder: "Search admin…",
												className: "w-56 lg:w-72 pl-9 rounded-full bg-muted/60 border-transparent focus-visible:bg-background"
											}),
											results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute mt-2 w-full rounded-xl border border-border bg-popover shadow-lg overflow-hidden z-40",
												children: results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: r.to,
													onClick: () => setQuery(""),
													className: "flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-4 w-4 text-muted-foreground" }), r.label]
												}, r.to))
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										className: "rounded-xl",
										onClick: toggle,
										"aria-label": "Toggle theme",
										children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "flex items-center gap-2 rounded-full border border-border bg-card pl-1 pr-3 py-1 hover:bg-muted transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
												className: "h-7 w-7",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
													className: "bg-primary text-primary-foreground text-xs",
													children: initials
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "hidden lg:block text-left leading-tight",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs font-medium truncate max-w-[140px]",
													children: name || email || "Admin"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[10px] uppercase tracking-wider text-muted-foreground",
													children: role ?? "—"
												})]
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
										align: "end",
										className: "w-56",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
												className: "truncate",
												children: email || "Signed in"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/",
													children: "View website"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/admin/account",
													children: "My account"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/admin/site",
													children: "Site content"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: signOut,
												className: "text-destructive focus:text-destructive",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 mr-2" }), " Sign out"]
											})
										]
									})] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:hidden border-b border-border bg-background overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 px-3 py-2",
							children: ALL_ITEMS.map((item) => {
								const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: cn("whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium", active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
									children: item.label
								}, item.to);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1 min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					})
				]
			})]
		})
	});
}
//#endregion
export { AdminLayout as component };
