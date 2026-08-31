import { t as supabase } from "./client-D06-73M8.mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Receipt, J as Image, Mt as CircleX, O as Plus, T as Repeat, d as Trophy, et as FileText, f as TrendingUp, j as Percent, lt as Compass, o as UserPlus, ot as DollarSign, rt as Eye, vt as CalendarCheck, x as Share2, z as MapPin } from "../_libs/lucide-react.mjs";
import { t as Skeleton } from "./skeleton-wE5XVTSu.mjs";
import { a as Area, c as Cell, i as XAxis, l as ResponsiveContainer, n as BarChart, o as CartesianGrid, r as YAxis, s as Bar, t as AreaChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-BK_1xrN_.js
var import_jsx_runtime = require_jsx_runtime();
var STATUS_STYLES = {
	pending: "bg-gold/20 text-gold-foreground border-gold/40",
	confirmed: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
	completed: "bg-primary/10 text-primary border-primary/25",
	cancelled: "bg-destructive/10 text-destructive border-destructive/25"
};
var BAR_COLORS = [
	"var(--color-primary)",
	"var(--color-gold)",
	"#2E9CCA",
	"#F2A65A",
	"#14507A",
	"#7c9a8e"
];
var TONE_STYLES = {
	money: {
		chip: "bg-emerald-500/10",
		icon: "text-emerald-600 dark:text-emerald-400",
		accent: "bg-emerald-500"
	},
	primary: {
		chip: "bg-primary/10",
		icon: "text-primary",
		accent: "bg-primary"
	},
	traffic: {
		chip: "bg-sky-500/10",
		icon: "text-sky-600 dark:text-sky-400",
		accent: "bg-sky-500"
	},
	people: {
		chip: "bg-violet-500/10",
		icon: "text-violet-600 dark:text-violet-400",
		accent: "bg-violet-500"
	},
	warn: {
		chip: "bg-destructive/10",
		icon: "text-destructive",
		accent: "bg-destructive"
	},
	gold: {
		chip: "bg-gold/15",
		icon: "text-gold",
		accent: "bg-gold"
	}
};
var chartTooltipStyle = {
	background: "var(--color-card)",
	border: "1px solid var(--color-border)",
	borderRadius: 12,
	fontSize: 12
};
function monthKey(d) {
	return `${d.getFullYear()}-${d.getMonth()}`;
}
function Dashboard() {
	const { data, isLoading } = useQuery({
		queryKey: ["admin-stats"],
		queryFn: async () => {
			const thirtyDaysAgo = /* @__PURE__ */ new Date();
			thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
			const thirtyDaysAgoIso = thirtyDaysAgo.toISOString();
			const [toursRes, customersRes, recentRes, allBookingsRes, destinationsRes, pageViewsRes] = await Promise.all([
				supabase.from("tours").select("id, title, destination_id, cost_per_person"),
				supabase.from("profiles").select("*", {
					count: "exact",
					head: true
				}),
				supabase.from("bookings").select("id, customer_name, customer_email, status, total_price, travel_date, created_at, group_size, tour:tours(title)").order("created_at", { ascending: false }).limit(8),
				supabase.from("bookings").select("id, status, total_price, group_size, created_at, tour_id, customer_email, source"),
				supabase.from("destinations").select("id, name"),
				supabase.from("page_views").select("session_id, created_at").gte("created_at", thirtyDaysAgoIso)
			]);
			const tours = toursRes.data ?? [];
			const toursById = new Map(tours.map((t) => [t.id, t]));
			const destinations = destinationsRes.data ?? [];
			const destById = new Map(destinations.map((d) => [d.id, d.name]));
			const bookings = allBookingsRes.data ?? [];
			const nonCancelled = bookings.filter((b) => b.status !== "cancelled");
			const cancelledCount = bookings.length - nonCancelled.length;
			const revenue = nonCancelled.reduce((s, b) => s + Number(b.total_price ?? 0), 0);
			const avgBookingValue = nonCancelled.length ? revenue / nonCancelled.length : 0;
			const cancellationRate = bookings.length ? cancelledCount / bookings.length * 100 : 0;
			let profitRevenue = 0;
			let profitCost = 0;
			let profitEligible = 0;
			for (const b of nonCancelled) {
				const tour = b.tour_id ? toursById.get(b.tour_id) : null;
				if (tour?.cost_per_person != null) {
					profitEligible++;
					profitRevenue += Number(b.total_price ?? 0);
					profitCost += Number(tour.cost_per_person) * Number(b.group_size ?? 1);
				}
			}
			const profit = profitEligible > 0 ? profitRevenue - profitCost : null;
			const tourCounts = /* @__PURE__ */ new Map();
			const destCounts = /* @__PURE__ */ new Map();
			for (const b of nonCancelled) {
				if (!b.tour_id) continue;
				tourCounts.set(b.tour_id, (tourCounts.get(b.tour_id) ?? 0) + 1);
				const tour = toursById.get(b.tour_id);
				if (tour?.destination_id) destCounts.set(tour.destination_id, (destCounts.get(tour.destination_id) ?? 0) + 1);
			}
			const topTourEntry = [...tourCounts.entries()].sort((a, b) => b[1] - a[1])[0];
			const topTour = topTourEntry ? {
				name: toursById.get(topTourEntry[0])?.title ?? "—",
				count: topTourEntry[1]
			} : null;
			const topDestEntry = [...destCounts.entries()].sort((a, b) => b[1] - a[1])[0];
			const topDestination = topDestEntry ? {
				name: destById.get(topDestEntry[0]) ?? "—",
				count: topDestEntry[1]
			} : null;
			const destinationChart = [...destCounts.entries()].map(([id, count]) => ({
				name: destById.get(id) ?? "Unknown",
				bookings: count
			})).sort((a, b) => b.bookings - a.bookings).slice(0, 6);
			const byEmail = /* @__PURE__ */ new Map();
			for (const b of nonCancelled) {
				if (!b.customer_email) continue;
				byEmail.set(b.customer_email, (byEmail.get(b.customer_email) ?? 0) + 1);
			}
			const distinctCustomers = byEmail.size;
			const repeatCustomers = [...byEmail.values()].filter((c) => c > 1).length;
			const repeatRate = distinctCustomers ? repeatCustomers / distinctCustomers * 100 : 0;
			const sourceCounts = /* @__PURE__ */ new Map();
			for (const b of bookings) {
				if (!b.source) continue;
				sourceCounts.set(b.source, (sourceCounts.get(b.source) ?? 0) + 1);
			}
			const totalWithSource = [...sourceCounts.values()].reduce((s, n) => s + n, 0);
			const sourceBreakdown = [...sourceCounts.entries()].sort((a, b) => b[1] - a[1]).map(([name, count]) => ({
				name,
				count,
				pct: totalWithSource ? Math.round(count / totalWithSource * 100) : 0
			}));
			const topSource = sourceBreakdown[0] ?? null;
			const firstSeenByEmail = /* @__PURE__ */ new Map();
			for (const b of nonCancelled) {
				if (!b.customer_email) continue;
				const t = new Date(b.created_at).getTime();
				const prev = firstSeenByEmail.get(b.customer_email);
				if (prev == null || t < prev) firstSeenByEmail.set(b.customer_email, t);
			}
			const months = [];
			for (let i = 5; i >= 0; i--) {
				const d = /* @__PURE__ */ new Date();
				d.setDate(1);
				d.setMonth(d.getMonth() - i);
				const key = monthKey(d);
				const inMonth = nonCancelled.filter((b) => monthKey(new Date(b.created_at)) === key);
				const newCustomersInMonth = [...firstSeenByEmail.values()].filter((t) => monthKey(new Date(t)) === key).length;
				months.push({
					label: d.toLocaleDateString(void 0, { month: "short" }),
					revenue: inMonth.reduce((s, b) => s + Number(b.total_price ?? 0), 0),
					bookings: inMonth.length,
					newCustomers: newCustomersInMonth
				});
			}
			const pageViews = pageViewsRes.data ?? [];
			const uniqueSessions = new Set(pageViews.map((p) => p.session_id)).size;
			const bookingsLast30 = nonCancelled.filter((b) => new Date(b.created_at).getTime() >= thirtyDaysAgo.getTime()).length;
			const conversionRate = uniqueSessions > 0 ? bookingsLast30 / uniqueSessions * 100 : null;
			return {
				tours: tours.length,
				bookings: bookings.length,
				cancelledCount,
				customers: customersRes.count ?? 0,
				pending: bookings.filter((b) => b.status === "pending").length,
				revenue,
				avgBookingValue,
				cancellationRate,
				profit,
				topTour,
				topDestination,
				destinationChart,
				distinctCustomers,
				repeatCustomers,
				repeatRate,
				newCustomersThisMonth: months[months.length - 1]?.newCustomers ?? 0,
				topSource,
				sourceBreakdown,
				uniqueSessions,
				conversionRate,
				months,
				recent: recentRes.data ?? []
			};
		}
	});
	const fmt = (n) => `$${n.toLocaleString(void 0, { maximumFractionDigits: 0 })}`;
	const headlineStats = [
		{
			label: "Revenue",
			value: data ? fmt(data.revenue) : "—",
			hint: "All time, excl. cancelled",
			icon: DollarSign,
			tone: "money"
		},
		{
			label: "Total bookings",
			value: data?.bookings ?? 0,
			hint: `${data?.pending ?? 0} awaiting review`,
			icon: CalendarCheck,
			tone: "primary"
		},
		{
			label: "Profit",
			value: data?.profit != null ? fmt(data.profit) : "—",
			hint: data?.profit != null ? "Tours with cost data set" : "Add cost per person to tours to enable",
			icon: TrendingUp,
			tone: "money"
		},
		{
			label: "Conversion rate",
			value: data?.conversionRate != null ? `${data.conversionRate.toFixed(1)}%` : "—",
			hint: data?.conversionRate != null ? "Last 30 days" : "No visitor data yet",
			icon: Percent,
			tone: "traffic"
		}
	];
	const performanceStats = [
		{
			label: "Most popular destination",
			value: data?.topDestination?.name ?? "—",
			hint: data?.topDestination ? `${data.topDestination.count} bookings` : "No bookings yet",
			icon: MapPin,
			tone: "gold"
		},
		{
			label: "Most popular tour",
			value: data?.topTour?.name ?? "—",
			hint: data?.topTour ? `${data.topTour.count} bookings` : "No bookings yet",
			icon: Trophy,
			tone: "gold"
		},
		{
			label: "Average booking value",
			value: data ? fmt(data.avgBookingValue) : "—",
			hint: "Excl. cancelled",
			icon: Receipt,
			tone: "money"
		},
		{
			label: "Cancellation rate",
			value: data ? `${data.cancellationRate.toFixed(1)}%` : "—",
			hint: `${data?.cancelledCount ?? 0} cancelled`,
			icon: CircleX,
			tone: "warn"
		}
	];
	const growthStats = [
		{
			label: "Customer acquisition",
			value: data?.newCustomersThisMonth ?? 0,
			hint: "New customers this month",
			icon: UserPlus,
			tone: "people"
		},
		{
			label: "Website visitors",
			value: data && data.uniqueSessions > 0 ? data.uniqueSessions : "—",
			hint: data && data.uniqueSessions > 0 ? "Unique sessions, last 30 days" : "No visitor data yet",
			icon: Eye,
			tone: "traffic"
		},
		{
			label: "Top booking source",
			value: data?.topSource ? data.topSource.name : "—",
			hint: data?.topSource ? `${data.topSource.pct}% of sourced bookings` : "Not tracked on bookings yet",
			icon: Share2,
			tone: "traffic"
		},
		{
			label: "Repeat customers",
			value: data ? `${data.repeatRate.toFixed(0)}%` : "—",
			hint: `${data?.repeatCustomers ?? 0} of ${data?.distinctCustomers ?? 0} customers`,
			icon: Repeat,
			tone: "people"
		}
	];
	const hour = (/* @__PURE__ */ new Date()).getHours();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-5 lg:p-8 space-y-8 max-w-[1500px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2",
						children: "Overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-3xl lg:text-4xl font-semibold",
						children: [hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening", ", welcome back"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1 text-sm",
						children: "Live performance across Nature & Culture Tours."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						{
							to: "/admin/tours",
							label: "New tour",
							icon: Compass
						},
						{
							to: "/admin/destinations",
							label: "New destination",
							icon: MapPin
						},
						{
							to: "/admin/gallery",
							label: "Add photo",
							icon: Image
						},
						{
							to: "/admin/site",
							label: "Edit site copy",
							icon: FileText
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						className: "rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: s.to,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1.5" }), s.label]
						})
					}, s.to))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 xl:grid-cols-4 gap-4",
				children: headlineStats.map((s) => {
					const tone = TONE_STYLES[s.tone];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-x-0 top-0 h-1", tone.accent) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-11 w-11 shrink-0 place-items-center rounded-xl", tone.chip, tone.icon),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
								})]
							}),
							isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-4 h-9 w-28" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mt-3 font-sans text-3xl lg:text-4xl font-semibold tracking-tight tabular-nums truncate",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mt-1.5 text-xs text-muted-foreground",
								children: s.hint
							})
						]
					}, s.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium",
						children: "Performance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: performanceStats.map((s) => {
							const tone = TONE_STYLES[s.tone];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-4 shadow-soft flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", tone.chip, tone.icon),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-widest text-muted-foreground truncate",
											children: s.label
										}),
										isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-1.5 h-6 w-20" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-sans text-xl font-semibold tabular-nums truncate",
											children: s.value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground truncate",
											children: s.hint
										})
									]
								})]
							}, s.label);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium",
						children: "Growth & marketing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: growthStats.map((s) => {
							const tone = TONE_STYLES[s.tone];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-4 shadow-soft flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", tone.chip, tone.icon),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-widest text-muted-foreground truncate",
											children: s.label
										}),
										isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-1.5 h-6 w-20" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-sans text-xl font-semibold tabular-nums truncate",
											children: s.value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground truncate",
											children: s.hint
										})
									]
								})]
							}, s.label);
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-card shadow-soft p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold",
								children: "📈 Revenue"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Last 6 months, excludes cancelled"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[240px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
									data: data?.months ?? [],
									margin: {
										left: -18,
										right: 8,
										top: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "rev",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "var(--color-gold)",
												stopOpacity: .55
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "var(--color-gold)",
												stopOpacity: .02
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "label",
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: chartTooltipStyle,
											formatter: (v) => [`$${Number(v).toLocaleString()}`, "Revenue"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "revenue",
											stroke: "var(--color-gold)",
											strokeWidth: 2.5,
											fill: "url(#rev)"
										})
									]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-card shadow-soft p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold",
								children: "📊 Bookings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Last 6 months"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[240px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: data?.months ?? [],
									margin: {
										left: -18,
										right: 8,
										top: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "label",
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)",
											allowDecimals: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: chartTooltipStyle,
											formatter: (v) => [v, "Bookings"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "bookings",
											fill: "var(--color-primary)",
											radius: [
												6,
												6,
												0,
												0
											]
										})
									]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-card shadow-soft p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold",
								children: "🌍 Destinations"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Top destinations by bookings"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[240px]",
							children: data?.destinationChart.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: data.destinationChart,
									layout: "vertical",
									margin: {
										left: 8,
										right: 16,
										top: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)",
											horizontal: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											type: "number",
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)",
											allowDecimals: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											type: "category",
											dataKey: "name",
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											width: 110,
											stroke: "var(--color-muted-foreground)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: chartTooltipStyle,
											formatter: (v) => [v, "Bookings"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "bookings",
											radius: [
												0,
												6,
												6,
												0
											],
											children: data.destinationChart.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: BAR_COLORS[i % BAR_COLORS.length] }, i))
										})
									]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full grid place-items-center text-sm text-muted-foreground",
								children: "No bookings yet."
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-card shadow-soft p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold",
								children: "👥 Customers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "New customers per month"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[240px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: data?.months ?? [],
									margin: {
										left: -18,
										right: 8,
										top: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "label",
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)",
											allowDecimals: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: chartTooltipStyle,
											formatter: (v) => [v, "New customers"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "newCustomers",
											fill: "#2E9CCA",
											radius: [
												6,
												6,
												0,
												0
											]
										})
									]
								})
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "xl:col-span-2 rounded-2xl border border-border bg-card shadow-soft overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-5 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "Recent bookings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Latest 8 reservations"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							className: "rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/bookings",
								children: "View all"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/50 text-left text-[11px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-medium",
										children: "Customer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-medium",
										children: "Tour"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-medium",
										children: "Travel date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-medium",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-medium text-right",
										children: "Total"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
								isLoading && Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
									className: "border-t border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4",
										colSpan: 5,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-full" })
									})
								}, i)),
								data?.recent.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border hover:bg-muted/40 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-5 py-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: b.customer_name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: b.customer_email
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4",
											children: b.tour?.title ?? "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 whitespace-nowrap",
											children: b.travel_date
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("inline-flex rounded-full border px-2.5 py-0.5 text-xs capitalize", STATUS_STYLES[b.status] ?? "bg-muted"),
												children: b.status
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 text-right font-medium tabular-nums",
											children: b.total_price ? `$${Number(b.total_price).toLocaleString()}` : "—"
										})
									]
								}, b.id)),
								!isLoading && data?.recent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 5,
									className: "px-5 py-12 text-center text-muted-foreground",
									children: "No bookings yet."
								}) })
							] })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-card shadow-soft p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold mb-4",
						children: "Booking sources"
					}), data?.sourceBreakdown.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: data.sourceBreakdown.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium capitalize",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										s.count,
										" · ",
										s.pct,
										"%"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 rounded-full bg-muted overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-primary",
									style: { width: `${s.pct}%` }
								})
							})]
						}, s.name))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No sourced bookings yet — this fills in as new bookings come through."
					})]
				})]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
