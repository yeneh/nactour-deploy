import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { I as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { P as Mountain } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { d as string, u as object } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BYfOmXtJ.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CjfQk1YC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		redirect_uri: opts?.redirect_uri,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
var credSchema = object({
	email: string().trim().email().max(200),
	password: string().min(6).max(100)
});
function AuthPage() {
	const { t } = useTranslation();
	const nav = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) nav({ to: "/admin" });
		});
	}, [nav]);
	const signIn = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = credSchema.safeParse({
			email: fd.get("email"),
			password: fd.get("password")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? t("auth.invalid_input"));
			return;
		}
		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword(parsed.data);
		setLoading(false);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success(t("auth.welcome_back"));
		nav({ to: "/admin" });
	};
	const signUp = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = credSchema.safeParse({
			email: fd.get("email"),
			password: fd.get("password")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? t("auth.invalid_input"));
			return;
		}
		setLoading(true);
		const { error } = await supabase.auth.signUp({
			...parsed.data,
			options: { emailRedirectTo: window.location.origin + "/admin" }
		});
		setLoading(false);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success(t("auth.account_created"));
		nav({ to: "/admin" });
	};
	const googleSignIn = async () => {
		setLoading(true);
		const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/admin" });
		if (result.error) {
			setLoading(false);
			toast.error(t("auth.google_failed"));
			return;
		}
		if (result.redirected) return;
		nav({ to: "/admin" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen grid lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:block relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/brochure/salt-caravan.jpg",
					alt: "Camel salt caravan crossing Lake Assal, Djibouti",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-10 left-10 right-10 text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold mb-2",
						children: "Nature & Culture Tours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: t("auth.manage_journeys")
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold",
							children: "Nature & Culture"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						defaultValue: "signin",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								className: "grid grid-cols-2 w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "signin",
									children: t("auth.sign_in")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "signup",
									children: t("auth.create_account")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "signin",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: signIn,
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "si-email",
												children: t("auth.email")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "si-email",
												name: "email",
												type: "email",
												required: true,
												maxLength: 200
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "si-password",
												children: t("auth.password")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "si-password",
												name: "password",
												type: "password",
												required: true,
												minLength: 6,
												maxLength: 100
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											disabled: loading,
											className: "w-full h-11 rounded-full",
											children: t("auth.sign_in")
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "signup",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: signUp,
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "su-email",
												children: t("auth.email")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "su-email",
												name: "email",
												type: "email",
												required: true,
												maxLength: 200
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "su-password",
												children: t("auth.password")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "su-password",
												name: "password",
												type: "password",
												required: true,
												minLength: 6,
												maxLength: 100
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											disabled: loading,
											className: "w-full h-11 rounded-full",
											children: t("auth.create_account")
										})
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-6 flex items-center gap-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" }),
							" ",
							t("auth.or"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: googleSignIn,
						disabled: loading,
						className: "w-full h-11 rounded-full",
						children: t("auth.continue_google")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground text-center mt-8",
						children: t("auth.terms_note")
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };
