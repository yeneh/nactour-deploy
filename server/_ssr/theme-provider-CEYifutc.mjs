import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-provider-CEYifutc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" && localStorage.getItem("nct-theme");
		const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
		setThemeState(stored && ["light", "dark"].includes(stored) ? stored : prefersDark ? "dark" : "light");
	}, []);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.classList.remove("dark");
		if (theme === "dark") root.classList.add("dark");
		localStorage.setItem("nct-theme", theme);
	}, [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggle: () => setThemeState((t) => t === "light" ? "dark" : "light"),
			setTheme: setThemeState
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) return {
		theme: "light",
		toggle: () => {},
		setTheme: () => {}
	};
	return ctx;
}
//#endregion
export { useTheme as n, ThemeProvider as t };
