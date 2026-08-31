import { t as supabase } from "./client-D06-73M8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/upload-ddEtPdcV.js
var TEN_YEARS = 3600 * 24 * 365 * 10;
/** Upload a file from the user's device to the media library and return a usable URL. */
async function uploadMedia(file, folder = "uploads") {
	const ext = file.name.split(".").pop()?.toLowerCase() || "bin";
	const path = `${folder}/${crypto.randomUUID()}.${ext}`;
	const { error } = await supabase.storage.from("media").upload(path, file, {
		cacheControl: "31536000",
		upsert: false,
		contentType: file.type || void 0
	});
	if (error) throw error;
	const { data, error: signErr } = await supabase.storage.from("media").createSignedUrl(path, TEN_YEARS);
	if (signErr || !data?.signedUrl) throw signErr ?? /* @__PURE__ */ new Error("Could not create file URL");
	return data.signedUrl;
}
//#endregion
export { uploadMedia as t };
