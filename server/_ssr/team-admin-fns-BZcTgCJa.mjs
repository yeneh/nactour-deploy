import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-9EjmF9OT.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-DZO41X7i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-admin-fns-BZcTgCJa.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var STAFF_ROLES = /* @__PURE__ */ new Set([
	"super_admin",
	"admin",
	"editor",
	"tour_manager",
	"content_manager",
	"booking_manager",
	"finance_manager"
]);
var createTeamMemberFn_createServerFn_handler = createServerRpc({
	id: "776d6763544a07c893c747692cac1a580099681bc1768a75cb8301c08c10f312",
	name: "createTeamMemberFn",
	filename: "src/lib/team-admin-fns.ts"
}, (opts) => createTeamMemberFn.__executeServer(opts));
var createTeamMemberFn = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((data) => data).handler(createTeamMemberFn_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	if (!STAFF_ROLES.has(data.role)) throw new Error("Invalid role.");
	const { data: callerRoles } = await supabase.from("user_roles").select("role").eq("user_id", userId);
	if (!(callerRoles ?? []).some((r) => r.role === "admin" || r.role === "super_admin")) throw new Error("Only Admins and Super Admins can create team members.");
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { data: created, error: createError } = await supabaseAdmin.auth.admin.createUser({
		email: data.email,
		password: data.password,
		email_confirm: true,
		user_metadata: data.fullName ? { full_name: data.fullName } : void 0
	});
	if (createError || !created.user) throw new Error(createError?.message ?? "Failed to create user");
	const { error: roleError } = await supabaseAdmin.from("user_roles").insert({
		user_id: created.user.id,
		role: data.role
	});
	if (roleError) throw new Error(roleError.message);
	return { id: created.user.id };
});
//#endregion
export { createTeamMemberFn_createServerFn_handler };
