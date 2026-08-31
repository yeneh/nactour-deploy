import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { M as Pencil, O as Plus, m as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { a as DialogTrigger, i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-B_4jaQOj.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-9EjmF9OT.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CICrEMaT.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-DZO41X7i.mjs";
import { t as Checkbox } from "./checkbox-B1AjkRkB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.team-FnBUUEJv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var createTeamMemberFn = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((data) => data).handler(createSsrRpc("776d6763544a07c893c747692cac1a580099681bc1768a75cb8301c08c10f312"));
var ROLES = [
	{
		id: "super_admin",
		label: "Super Admin",
		description: "Highest access level — same permissions as Admin. Reserved for owners/founders."
	},
	{
		id: "admin",
		label: "Admin",
		description: "Full access to everything: content, bookings, finance, and staff roles."
	},
	{
		id: "editor",
		label: "Editor",
		description: "Manages content and bookings — no access to finance data or staff roles."
	},
	{
		id: "tour_manager",
		label: "Tour Manager",
		description: "Manages tours, destinations, guides, vehicles, hotels, activities, and site content. (Same access as Content Manager.)"
	},
	{
		id: "content_manager",
		label: "Content Manager",
		description: "Manages tours, destinations, guides, vehicles, hotels, activities, and site content. (Same access as Tour Manager.)"
	},
	{
		id: "booking_manager",
		label: "Booking Manager",
		description: "Manages bookings and the customer CRM — no access to finance or catalogue content."
	},
	{
		id: "finance_manager",
		label: "Finance Manager",
		description: "Manages coupons, expenses, and payments — the money side of the business."
	}
];
var ROLE_LABEL = Object.fromEntries(ROLES.map((r) => [r.id, r.label]));
var ELEVATED_ROLES = ["admin", "super_admin"];
function generatePassword() {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%";
	return Array.from({ length: 16 }, () => chars[Math.floor(Math.random() * 61)]).join("");
}
function AdminTeam() {
	const qc = useQueryClient();
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [password, setPassword] = (0, import_react.useState)(generatePassword);
	const [newRole, setNewRole] = (0, import_react.useState)("");
	const { data: profiles = [] } = useQuery({
		queryKey: ["admin-team"],
		queryFn: async () => {
			const { data: profs } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
			const { data: roles } = await supabase.from("user_roles").select("user_id, role");
			const map = /* @__PURE__ */ new Map();
			(roles ?? []).forEach((r) => {
				const list = map.get(r.user_id) ?? [];
				list.push(r.role);
				map.set(r.user_id, list);
			});
			return (profs ?? []).map((p) => ({
				...p,
				roles: map.get(p.id) ?? []
			})).filter((p) => p.roles.some((r) => r !== "customer"));
		}
	});
	const refresh = () => qc.invalidateQueries({ queryKey: ["admin-team"] });
	const [editingProfile, setEditingProfile] = (0, import_react.useState)(null);
	const [editName, setEditName] = (0, import_react.useState)("");
	const [editRoles, setEditRoles] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [savingEdit, setSavingEdit] = (0, import_react.useState)(false);
	const [deletingProfile, setDeletingProfile] = (0, import_react.useState)(null);
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	const openEdit = (p) => {
		setEditingProfile(p);
		setEditName(p.full_name ?? "");
		setEditRoles(new Set(p.roles.filter((r) => r !== "customer")));
	};
	const toggleEditRole = (role) => {
		setEditRoles((prev) => {
			const next = new Set(prev);
			if (next.has(role)) next.delete(role);
			else next.add(role);
			return next;
		});
	};
	const wouldRemoveLastElevated = (targetId, rolesAfter) => {
		if ([...rolesAfter].some((r) => ELEVATED_ROLES.includes(r))) return false;
		return !profiles.some((p) => p.id !== targetId && p.roles.some((r) => ELEVATED_ROLES.includes(r)));
	};
	const saveEdit = async () => {
		if (!editingProfile) return;
		const before = new Set(editingProfile.roles.filter((r) => r !== "customer"));
		const toAdd = [...editRoles].filter((r) => !before.has(r));
		const toRemove = [...before].filter((r) => !editRoles.has(r));
		if (wouldRemoveLastElevated(editingProfile.id, editRoles)) {
			toast.error("Can't remove the last Admin/Super Admin — grant one of those roles to someone else first.");
			return;
		}
		setSavingEdit(true);
		try {
			if (editName.trim() !== (editingProfile.full_name ?? "")) {
				const { error } = await supabase.from("profiles").update({ full_name: editName.trim() || null }).eq("id", editingProfile.id);
				if (error) throw error;
			}
			if (toAdd.length > 0) {
				const { error } = await supabase.from("user_roles").insert(toAdd.map((role) => ({
					user_id: editingProfile.id,
					role
				})));
				if (error) throw error;
			}
			if (toRemove.length > 0) {
				const { error } = await supabase.from("user_roles").delete().eq("user_id", editingProfile.id).in("role", toRemove);
				if (error) throw error;
			}
			toast.success("Team member updated");
			setEditingProfile(null);
			refresh();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to update team member");
		} finally {
			setSavingEdit(false);
		}
	};
	const confirmDelete = async () => {
		if (!deletingProfile) return;
		const rolesToRemove = deletingProfile.roles.filter((r) => r !== "customer");
		if (wouldRemoveLastElevated(deletingProfile.id, [])) {
			toast.error("Can't remove the last Admin/Super Admin — grant one of those roles to someone else first.");
			return;
		}
		setDeleting(true);
		try {
			const { error } = await supabase.from("user_roles").delete().eq("user_id", deletingProfile.id).in("role", rolesToRemove);
			if (error) throw error;
			toast.success("Removed from the team");
			setDeletingProfile(null);
			refresh();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to remove team member");
		} finally {
			setDeleting(false);
		}
	};
	const createMember = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const email = String(fd.get("email") || "").trim();
		const fullName = String(fd.get("fullName") || "").trim();
		if (!email || !password || !newRole) {
			toast.error("Email, password, and role are required.");
			return;
		}
		setCreating(true);
		try {
			await createTeamMemberFn({ data: {
				email,
				password,
				role: newRole,
				fullName: fullName || void 0
			} });
			toast.success(`${email} was added to the team`);
			setCreateOpen(false);
			setPassword(generatePassword());
			setNewRole("");
			refresh();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to create team member");
		} finally {
			setCreating(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-2",
					children: "Your team"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold",
					children: "Team"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open: createOpen,
					onOpenChange: setCreateOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "Create team member"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create team member" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: createMember,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "fullName",
										placeholder: "Jane Doe"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "email",
										type: "email",
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Password" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: password,
												onChange: (e) => setPassword(e.target.value),
												required: true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "button",
												variant: "outline",
												onClick: () => setPassword(generatePassword()),
												children: "Regenerate"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Share this password with them directly — it won't be shown again."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: newRole,
										onValueChange: setNewRole,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose a role" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: r.id,
											children: r.label
										}, r.id)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: creating,
									className: "w-full rounded-full",
									children: creating ? "Creating…" : "Create team member"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted-foreground mb-3",
					children: "What each role can do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3",
					children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-muted/40 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: r.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: r.description
						})]
					}, r.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-card border border-border shadow-soft overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Roles"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3",
								children: "Joined"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3 text-right",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 font-medium",
								children: p.full_name ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3",
								children: p.phone ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-center gap-1.5",
									children: p.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-muted",
										children: ROLE_LABEL[r] ?? r
									}, r))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground",
								children: new Date(p.created_at).toLocaleDateString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-end gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										size: "icon",
										variant: "outline",
										className: "h-8 w-8 rounded-full",
										"aria-label": `Edit ${p.full_name ?? "team member"}`,
										onClick: () => openEdit(p),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										size: "icon",
										variant: "outline",
										className: "h-8 w-8 rounded-full text-destructive hover:bg-destructive hover:text-destructive-foreground",
										"aria-label": `Remove ${p.full_name ?? "team member"} from the team`,
										onClick: () => setDeletingProfile(p),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
									})]
								})
							})
						]
					}, p.id)), profiles.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 5,
						className: "px-6 py-10 text-center text-muted-foreground",
						children: "No team members yet."
					}) })] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!editingProfile,
				onOpenChange: (v) => !v && setEditingProfile(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit team member" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: editName,
									onChange: (e) => setEditName(e.target.value),
									placeholder: "Jane Doe"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Roles" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-2",
									children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											checked: editRoles.has(r.id),
											onCheckedChange: () => toggleEditRole(r.id)
										}), r.label]
									}, r.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: saveEdit,
								disabled: savingEdit,
								className: "w-full rounded-full",
								children: savingEdit ? "Saving…" : "Save changes"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!deletingProfile,
				onOpenChange: (v) => !v && setDeletingProfile(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Remove from the team?" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"This removes all staff roles from",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: deletingProfile?.full_name || "this person"
								}),
								". Their account stays intact — they just lose admin access. You can add them back later."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setDeletingProfile(null),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "destructive",
								disabled: deleting,
								onClick: confirmDelete,
								children: deleting ? "Removing…" : "Remove from team"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AdminTeam as component };
