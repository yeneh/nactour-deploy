import { t as supabase } from "./client-D06-73M8.mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Receipt, G as Landmark, f as TrendingUp, g as Tag, j as Percent, l as Undo2, ot as DollarSign, r as Wallet, u as Truck, yt as Building2 } from "../_libs/lucide-react.mjs";
import { t as Skeleton } from "./skeleton-wE5XVTSu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.finance-CAt1Ndy0.js
var import_jsx_runtime = require_jsx_runtime();
var CATEGORY_LABEL = {
	expense: "Expense",
	supplier_payment: "Supplier payment",
	guide_commission: "Guide commission",
	driver_payment: "Driver payment",
	tax: "Tax",
	refund: "Refund"
};
function sumBy(items, pick) {
	return items.reduce((s, i) => s + pick(i), 0);
}
function FinanceOverview() {
	const { data, isLoading } = useQuery({
		queryKey: ["admin-finance"],
		queryFn: async () => {
			const [bookingsRes, toursRes, expensesRes, paymentsRes] = await Promise.all([
				supabase.from("bookings").select("id, status, total_price, discount_amount, group_size, tour_id, created_at"),
				supabase.from("tours").select("id, title, cost_per_person"),
				supabase.from("expenses").select("*").order("expense_date", { ascending: false }),
				supabase.from("payments").select("booking_id, amount, status")
			]);
			const bookings = bookingsRes.data ?? [];
			const tours = toursRes.data ?? [];
			const toursById = new Map(tours.map((t) => [t.id, t]));
			const expenses = expensesRes.data ?? [];
			const payments = paymentsRes.data ?? [];
			const nonCancelled = bookings.filter((b) => b.status !== "cancelled");
			const revenue = sumBy(nonCancelled, (b) => Number(b.total_price ?? 0));
			const discounts = sumBy(bookings, (b) => Number(b.discount_amount ?? 0));
			const byCategory = (cat) => sumBy(expenses.filter((e) => e.category === cat), (e) => Number(e.amount));
			const totalExpenses = sumBy(expenses, (e) => Number(e.amount));
			const supplierPayments = byCategory("supplier_payment");
			const guideCommissions = byCategory("guide_commission");
			const driverPayments = byCategory("driver_payment");
			const taxesPaid = byCategory("tax");
			const refundsIssued = byCategory("refund");
			let costOfGoods = 0;
			for (const b of nonCancelled) {
				const tour = b.tour_id ? toursById.get(b.tour_id) : null;
				if (tour?.cost_per_person != null) costOfGoods += Number(tour.cost_per_person) * Number(b.group_size ?? 1);
			}
			const netProfit = revenue - discounts - totalExpenses - costOfGoods;
			const paidByBooking = /* @__PURE__ */ new Map();
			for (const p of payments) {
				if (p.status !== "paid") continue;
				paidByBooking.set(p.booking_id, (paidByBooking.get(p.booking_id) ?? 0) + Number(p.amount));
			}
			const outstandingBalances = sumBy(nonCancelled, (b) => {
				if (b.total_price == null) return 0;
				const paid = paidByBooking.get(b.id) ?? 0;
				return Math.max(0, Number(b.total_price) - paid);
			});
			const revenueByTour = /* @__PURE__ */ new Map();
			const groupSizeByTour = /* @__PURE__ */ new Map();
			for (const b of nonCancelled) {
				if (!b.tour_id) continue;
				revenueByTour.set(b.tour_id, (revenueByTour.get(b.tour_id) ?? 0) + Number(b.total_price ?? 0));
				groupSizeByTour.set(b.tour_id, (groupSizeByTour.get(b.tour_id) ?? 0) + Number(b.group_size ?? 0));
			}
			const expensesByTour = /* @__PURE__ */ new Map();
			for (const e of expenses) {
				if (!e.tour_id) continue;
				expensesByTour.set(e.tour_id, (expensesByTour.get(e.tour_id) ?? 0) + Number(e.amount));
			}
			return {
				revenue,
				discounts,
				totalExpenses,
				supplierPayments,
				guideCommissions,
				driverPayments,
				taxesPaid,
				refundsIssued,
				netProfit,
				outstandingBalances,
				profitPerTour: [.../* @__PURE__ */ new Set([...revenueByTour.keys(), ...expensesByTour.keys()])].map((tourId) => {
					const tour = toursById.get(tourId);
					const tourRevenue = revenueByTour.get(tourId) ?? 0;
					const cost = tour?.cost_per_person != null ? Number(tour.cost_per_person) * (groupSizeByTour.get(tourId) ?? 0) : 0;
					const linkedExpenses = expensesByTour.get(tourId) ?? 0;
					const profit = tourRevenue - cost - linkedExpenses;
					return {
						tourId,
						title: tour?.title ?? "Unknown tour",
						revenue: tourRevenue,
						cost,
						hasCost: tour?.cost_per_person != null,
						expenses: linkedExpenses,
						profit,
						margin: tourRevenue > 0 ? profit / tourRevenue * 100 : null
					};
				}).sort((a, b) => b.revenue - a.revenue),
				recentExpenses: expenses.slice(0, 10)
			};
		}
	});
	const fmt = (n) => `$${n.toLocaleString(void 0, { maximumFractionDigits: 0 })}`;
	const tiles = [
		{
			label: "Revenue",
			value: data ? fmt(data.revenue) : "—",
			icon: DollarSign
		},
		{
			label: "Total expenses",
			value: data ? fmt(data.totalExpenses) : "—",
			icon: Receipt
		},
		{
			label: "Net profit",
			value: data ? fmt(data.netProfit) : "—",
			icon: TrendingUp
		},
		{
			label: "Discounts given",
			value: data ? fmt(data.discounts) : "—",
			icon: Tag
		},
		{
			label: "Refunds issued",
			value: data ? fmt(data.refundsIssued) : "—",
			icon: Undo2
		},
		{
			label: "Guide commissions",
			value: data ? fmt(data.guideCommissions) : "—",
			icon: Percent
		},
		{
			label: "Driver payments",
			value: data ? fmt(data.driverPayments) : "—",
			icon: Truck
		},
		{
			label: "Supplier payments",
			value: data ? fmt(data.supplierPayments) : "—",
			icon: Building2
		},
		{
			label: "Taxes paid",
			value: data ? fmt(data.taxesPaid) : "—",
			icon: Landmark
		},
		{
			label: "Outstanding balances",
			value: data ? fmt(data.outstandingBalances) : "—",
			icon: Wallet
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-2",
					children: "Finance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold",
					children: "Overview"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/expenses",
						children: "Manage expenses"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 xl:grid-cols-5 gap-4",
				children: tiles.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: t.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4" })
						})]
					}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-4 h-8 w-24" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl font-semibold",
						children: t.value
					})]
				}, t.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-soft overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Profit per tour"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Revenue minus cost per person (where set) minus any linked expenses"
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
									children: "Tour"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-medium text-right",
									children: "Revenue"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-medium text-right",
									children: "Cost"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-medium text-right",
									children: "Expenses"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-medium text-right",
									children: "Profit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-medium text-right",
									children: "Margin"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [data?.profitPerTour.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 font-medium",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-right tabular-nums",
									children: fmt(t.revenue)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-right tabular-nums text-muted-foreground",
									children: t.hasCost ? fmt(t.cost) : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-right tabular-nums text-muted-foreground",
									children: fmt(t.expenses)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-right tabular-nums font-medium",
									children: fmt(t.profit)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-right tabular-nums text-muted-foreground",
									children: t.margin != null ? `${t.margin.toFixed(0)}%` : "—"
								})
							]
						}, t.tourId)), !isLoading && (data?.profitPerTour.length ?? 0) === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 6,
							className: "px-5 py-10 text-center text-muted-foreground",
							children: "No bookings or expenses linked to a tour yet."
						}) })] })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-soft overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-5 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Recent expenses"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						className: "rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/expenses",
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
									children: "Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-medium",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-medium",
									children: "Description"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-medium text-right",
									children: "Amount"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [data?.recentExpenses.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 whitespace-nowrap",
									children: e.expense_date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3",
									children: CATEGORY_LABEL[e.category] ?? e.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-muted-foreground",
									children: e.description || e.payee || "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-3 text-right tabular-nums",
									children: ["$", Number(e.amount).toLocaleString()]
								})
							]
						}, e.id)), !isLoading && (data?.recentExpenses.length ?? 0) === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 4,
							className: "px-5 py-10 text-center text-muted-foreground",
							children: "No expenses logged yet."
						}) })] })]
					})
				})]
			})
		]
	});
}
//#endregion
export { FinanceOverview as component };
