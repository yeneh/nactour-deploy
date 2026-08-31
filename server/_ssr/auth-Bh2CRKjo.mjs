import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { r as formatCurrency, t as CURRENCIES } from "./currency-CTbvXQUp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Bh2CRKjo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LOCALE_BY_LANG = {
	en: "en-US",
	fr: "fr-FR",
	ar: "ar"
};
var CurrencyContext = (0, import_react.createContext)(void 0);
function CurrencyProvider({ children }) {
	const { i18n } = useTranslation();
	const [currency, setCurrencyState] = (0, import_react.useState)("USD");
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" && localStorage.getItem("nct-currency");
		if (stored && CURRENCIES.some((c) => c.code === stored)) setCurrencyState(stored);
	}, []);
	const setCurrency = (c) => {
		setCurrencyState(c);
		localStorage.setItem("nct-currency", c);
	};
	const locale = LOCALE_BY_LANG[i18n.language] ?? "en-US";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyContext.Provider, {
		value: {
			currency,
			setCurrency,
			format: (amountUsd) => formatCurrency(amountUsd, currency, locale)
		},
		children
	});
}
function useCurrency() {
	const ctx = (0, import_react.useContext)(CurrencyContext);
	if (!ctx) return {
		currency: "USD",
		setCurrency: () => {},
		format: (amountUsd) => formatCurrency(amountUsd, "USD")
	};
	return ctx;
}
var STAFF_ROLES = /* @__PURE__ */ new Set([
	"admin",
	"super_admin",
	"editor",
	"tour_manager",
	"booking_manager",
	"content_manager",
	"finance_manager"
]);
function isStaffRole(role) {
	return STAFF_ROLES.has(role);
}
function useCurrentUser() {
	const qc = useQueryClient();
	const [userId, setUserId] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => setUserId(data.session?.user.id ?? null));
		const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
			setUserId(session?.user.id ?? null);
			qc.invalidateQueries({ queryKey: ["current-user-roles"] });
		});
		return () => sub.subscription.unsubscribe();
	}, [qc]);
	const { data: roles = [] } = useQuery({
		queryKey: ["current-user-roles", userId],
		queryFn: async () => {
			if (!userId) return [];
			const { data } = await supabase.from("user_roles").select("role").eq("user_id", userId);
			return (data ?? []).map((r) => r.role);
		},
		enabled: userId !== void 0
	});
	return {
		userId: userId ?? null,
		isSignedIn: !!userId,
		roles,
		isStaff: roles.some(isStaffRole)
	};
}
//#endregion
export { useCurrentUser as i, isStaffRole as n, useCurrency as r, CurrencyProvider as t };
