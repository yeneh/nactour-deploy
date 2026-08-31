import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { B as Mail, K as KeyRound, a as User } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { d as string, u as object } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.account-BwqYPDy1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emailSchema = object({
	newEmail: string().trim().email().max(200),
	currentPassword: string().min(1, "Enter your current password")
});
var passwordSchema = object({
	currentPassword: string().min(1, "Enter your current password"),
	newPassword: string().min(8, "New password must be at least 8 characters"),
	confirmPassword: string().min(1, "Confirm your new password")
}).refine((v) => v.newPassword === v.confirmPassword, {
	message: "Passwords don't match",
	path: ["confirmPassword"]
});
async function reauthenticate(email, currentPassword) {
	const { error } = await supabase.auth.signInWithPassword({
		email,
		password: currentPassword
	});
	return error;
}
function AdminAccount() {
	const [userId, setUserId] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [nameBusy, setNameBusy] = (0, import_react.useState)(false);
	const [emailBusy, setEmailBusy] = (0, import_react.useState)(false);
	const [passwordBusy, setPasswordBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(async ({ data }) => {
			if (!data.user) return;
			setUserId(data.user.id);
			setEmail(data.user.email ?? "");
			const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", data.user.id).maybeSingle();
			setFullName(profile?.full_name ?? "");
		});
	}, []);
	const onChangeName = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const newName = String(fd.get("fullName") || "").trim();
		setNameBusy(true);
		try {
			const { error } = await supabase.from("profiles").update({ full_name: newName || null }).eq("id", userId);
			if (error) {
				toast.error(error.message);
				return;
			}
			setFullName(newName);
			toast.success("Name updated");
		} finally {
			setNameBusy(false);
		}
	};
	const onChangeEmail = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = emailSchema.safeParse({
			newEmail: fd.get("newEmail"),
			currentPassword: fd.get("currentPassword")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0].message);
			return;
		}
		setEmailBusy(true);
		try {
			if (await reauthenticate(email, parsed.data.currentPassword)) {
				toast.error("Current password is incorrect");
				return;
			}
			const { error } = await supabase.auth.updateUser({ email: parsed.data.newEmail });
			if (error) {
				toast.error(error.message);
				return;
			}
			toast.success("Check your new email address for a confirmation link to finish the change.");
			e.currentTarget.reset();
		} finally {
			setEmailBusy(false);
		}
	};
	const onChangePassword = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = passwordSchema.safeParse({
			currentPassword: fd.get("currentPassword"),
			newPassword: fd.get("newPassword"),
			confirmPassword: fd.get("confirmPassword")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0].message);
			return;
		}
		setPasswordBusy(true);
		try {
			if (await reauthenticate(email, parsed.data.currentPassword)) {
				toast.error("Current password is incorrect");
				return;
			}
			const { error } = await supabase.auth.updateUser({ password: parsed.data.newPassword });
			if (error) {
				toast.error(error.message);
				return;
			}
			toast.success("Password updated");
			e.currentTarget.reset();
		} finally {
			setPasswordBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6 max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-2",
					children: "Account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold",
					children: "My account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: ["Signed in as ", email || "…"]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border shadow-soft p-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "Display name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground -mt-2",
						children: "Shown in the admin sidebar and the Users & roles list."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: onChangeName,
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "fullName",
								defaultValue: fullName,
								placeholder: "Your name",
								maxLength: 200
							}, fullName)]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: nameBusy,
							children: nameBusy ? "Saving…" : "Save name"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border shadow-soft p-6 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Change login email"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onChangeEmail,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "New email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "newEmail",
								type: "email",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Current password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "currentPassword",
								type: "password",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: emailBusy,
							children: emailBusy ? "Updating…" : "Update email"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border shadow-soft p-6 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Change password"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onChangePassword,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Current password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "currentPassword",
								type: "password",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "New password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "newPassword",
								type: "password",
								required: true,
								minLength: 8
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Confirm new password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "confirmPassword",
								type: "password",
								required: true,
								minLength: 8
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: passwordBusy,
							children: passwordBusy ? "Updating…" : "Update password"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { AdminAccount as component };
