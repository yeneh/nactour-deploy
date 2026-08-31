//#region node_modules/.nitro/vite/services/ssr/assets/site-BRP1auNI.js
var SITE_NAME = "Nature & Culture Tours";
var SITE_URL = "https://nactour.com".trim().replace(/\/$/, "");
function absoluteUrl(path) {
	if (!SITE_URL) return path;
	return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
//#endregion
export { absoluteUrl as n, SITE_NAME as t };
