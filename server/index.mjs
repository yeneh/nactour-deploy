globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"57-vmm2eZebJFxqteIucnAzxgZy9Gw\"",
		"mtime": "2026-08-27T09:43:14.961Z",
		"size": 87,
		"path": "../public/robots.txt"
	},
	"/assets/about-e0-ydxu5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d97-DBnw3Os2MZnhhXKg/XcKEJcrtcA\"",
		"mtime": "2026-08-31T08:57:53.652Z",
		"size": 3479,
		"path": "../public/assets/about-e0-ydxu5.js"
	},
	"/images/logo-transparent.png": {
		"type": "image/png",
		"etag": "\"13959-BqSg4J2L4F3+FgvVQFItB1Pg3sk\"",
		"mtime": "2026-08-30T14:49:26.386Z",
		"size": 80217,
		"path": "../public/images/logo-transparent.png"
	},
	"/assets/admin-BRj-wq3e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56a9-Z6Ze9Rcd5Dxv3LyGIW/lLi9UhgY\"",
		"mtime": "2026-08-31T08:57:53.654Z",
		"size": 22185,
		"path": "../public/assets/admin-BRj-wq3e.js"
	},
	"/assets/admin.account-DPZN2v2u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16f8-DS1antita1aTjG41mSpKDNsDQF4\"",
		"mtime": "2026-08-31T08:57:53.655Z",
		"size": 5880,
		"path": "../public/assets/admin.account-DPZN2v2u.js"
	},
	"/assets/admin.activities-B9BvPqUG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c2-2ub863rh4HJ85Zvhhy98AuLvcTs\"",
		"mtime": "2026-08-31T08:57:53.659Z",
		"size": 5058,
		"path": "../public/assets/admin.activities-B9BvPqUG.js"
	},
	"/assets/admin.blog-CuGTN5Lv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1367-vSXz9T8er6PBC0iBFIBH90BjBws\"",
		"mtime": "2026-08-31T08:57:53.661Z",
		"size": 4967,
		"path": "../public/assets/admin.blog-CuGTN5Lv.js"
	},
	"/assets/admin.bookings-DQfvT9Q0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"168f-bfPY7F6EqhuSnU2eRkCxbjIUPi4\"",
		"mtime": "2026-08-31T08:57:53.662Z",
		"size": 5775,
		"path": "../public/assets/admin.bookings-DQfvT9Q0.js"
	},
	"/assets/admin.coupons-DNQ9qbsE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"195c-lAzLhqZtsqlDRullBzQFiI+iVdk\"",
		"mtime": "2026-08-31T08:57:53.663Z",
		"size": 6492,
		"path": "../public/assets/admin.coupons-DNQ9qbsE.js"
	},
	"/assets/admin.crm-oX9OrZHf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-Pj6NMYC0zFstvDPFwdEXPovmz2A\"",
		"mtime": "2026-08-31T08:57:53.664Z",
		"size": 142,
		"path": "../public/assets/admin.crm-oX9OrZHf.js"
	},
	"/assets/admin.crm.index-CAQAiE56.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f9-XTnO0NMobRwM9gNhp77MZBZNEFk\"",
		"mtime": "2026-08-31T08:57:53.671Z",
		"size": 5369,
		"path": "../public/assets/admin.crm.index-CAQAiE56.js"
	},
	"/assets/admin.crm._customerId-Bjmyh9YX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48c6-UQYVFdYrGUOqsgRDkFuQT85pFXM\"",
		"mtime": "2026-08-31T08:57:53.670Z",
		"size": 18630,
		"path": "../public/assets/admin.crm._customerId-Bjmyh9YX.js"
	},
	"/assets/admin.destinations-8vlNnuvL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"167b-zWQ13eAhS6KJTNXzxxr26qJekd4\"",
		"mtime": "2026-08-31T08:57:53.672Z",
		"size": 5755,
		"path": "../public/assets/admin.destinations-8vlNnuvL.js"
	},
	"/assets/admin.drivers-BZtAfCjR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c9-eVg8M+9LFel/7DSpqzAEsS2GlYI\"",
		"mtime": "2026-08-31T08:57:53.672Z",
		"size": 5065,
		"path": "../public/assets/admin.drivers-BZtAfCjR.js"
	},
	"/assets/admin.expenses-DrTlfBuf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22d8-RwzcrRek3jfLhG/D77o+1h10XMk\"",
		"mtime": "2026-08-31T08:57:53.673Z",
		"size": 8920,
		"path": "../public/assets/admin.expenses-DrTlfBuf.js"
	},
	"/assets/admin.finance-CMi_zP34.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"213b-wdehC1QzwUqSEMW6zV7ArAiXbeg\"",
		"mtime": "2026-08-31T08:57:53.674Z",
		"size": 8507,
		"path": "../public/assets/admin.finance-CMi_zP34.js"
	},
	"/assets/admin.gallery-BhUtAZpY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1000-PWr2erFXz6zsqhGoaECZrKQSFN4\"",
		"mtime": "2026-08-31T08:57:53.674Z",
		"size": 4096,
		"path": "../public/assets/admin.gallery-BhUtAZpY.js"
	},
	"/assets/admin.guides-DMCZPj2N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14eb-4hn23G1+Gcxy2NrD+Gp0Vm5+ipo\"",
		"mtime": "2026-08-31T08:57:53.677Z",
		"size": 5355,
		"path": "../public/assets/admin.guides-DMCZPj2N.js"
	},
	"/assets/admin.hotels-BIDayUsz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1679-rTWkxMNZKCyYRUHza5lMOlFHBro\"",
		"mtime": "2026-08-31T08:57:53.678Z",
		"size": 5753,
		"path": "../public/assets/admin.hotels-BIDayUsz.js"
	},
	"/assets/admin.inquiries-B38VVsXe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6a-AtmrZoxvvCsDR/qtJqhk1um9QNw\"",
		"mtime": "2026-08-31T08:57:53.679Z",
		"size": 3178,
		"path": "../public/assets/admin.inquiries-B38VVsXe.js"
	},
	"/assets/admin.site-DAqycSBI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29e1-g6MXWlPeh1jI011ZkFV6/+wNUGs\"",
		"mtime": "2026-08-31T08:57:53.796Z",
		"size": 10721,
		"path": "../public/assets/admin.site-DAqycSBI.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"aed0-m7HgjqmOiRADOqKX8MuSWc9SUXk\"",
		"mtime": "2026-08-30T15:12:27.145Z",
		"size": 44752,
		"path": "../public/favicon.png"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"f9-ITMorDVejckaMYMNfyI/mPgb2go\"",
		"mtime": "2026-08-27T09:43:14.937Z",
		"size": 249,
		"path": "../public/favicon.svg"
	},
	"/assets/admin.index-BxkqdzJX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"618bf-Gkqc9v36wB8IsPBWT7xHU1vwD10\"",
		"mtime": "2026-08-31T08:57:53.679Z",
		"size": 399551,
		"path": "../public/assets/admin.index-BxkqdzJX.js"
	},
	"/images/logo.png": {
		"type": "image/png",
		"etag": "\"16a33-TniNlwivJP3zzXEzqlf6THIBh48\"",
		"mtime": "2026-08-30T14:45:31.221Z",
		"size": 92723,
		"path": "../public/images/logo.png"
	},
	"/assets/admin.team-z6XZYOOR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ac1-lL47qdDWrt+VrNuiamD9GyWXoJw\"",
		"mtime": "2026-08-31T08:57:53.797Z",
		"size": 15041,
		"path": "../public/assets/admin.team-z6XZYOOR.js"
	},
	"/assets/admin.testimonials-CfGs_loy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1090-BCIBNyGdDBJR+vjt7Umzg5zw79U\"",
		"mtime": "2026-08-31T08:57:53.797Z",
		"size": 4240,
		"path": "../public/assets/admin.testimonials-CfGs_loy.js"
	},
	"/assets/admin.tours-oX9OrZHf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-Pj6NMYC0zFstvDPFwdEXPovmz2A\"",
		"mtime": "2026-08-31T08:57:53.838Z",
		"size": 142,
		"path": "../public/assets/admin.tours-oX9OrZHf.js"
	},
	"/assets/admin.tours.index-Cup5igwQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b6a-bsZM3U+XGxFrobKfha4K147dOcQ\"",
		"mtime": "2026-08-31T08:57:53.869Z",
		"size": 2922,
		"path": "../public/assets/admin.tours.index-Cup5igwQ.js"
	},
	"/assets/admin.tours._tourId-CMHD2Dtd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ae2-C50dd0qPEtmjiYXYMCBxHF3imBg\"",
		"mtime": "2026-08-31T08:57:53.847Z",
		"size": 19170,
		"path": "../public/assets/admin.tours._tourId-CMHD2Dtd.js"
	},
	"/assets/admin.vehicles-DZhbRqmC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13b7-ogAHsKiG3inQznVRQMh80iQSaM4\"",
		"mtime": "2026-08-31T08:57:53.870Z",
		"size": 5047,
		"path": "../public/assets/admin.vehicles-DZhbRqmC.js"
	},
	"/assets/arrow-left-BYadb1DK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-SB6322ei5c37oSPvACjGwPHoib0\"",
		"mtime": "2026-08-31T08:57:53.877Z",
		"size": 155,
		"path": "../public/assets/arrow-left-BYadb1DK.js"
	},
	"/assets/arrow-right-CZmVOmz5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-EjWP58GyuSOSWK61aX0ag2Vjuog\"",
		"mtime": "2026-08-31T08:57:53.878Z",
		"size": 155,
		"path": "../public/assets/arrow-right-CZmVOmz5.js"
	},
	"/assets/auth-BADVYyci.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2202-6P4PfjTPi6kjgTH2H85lYVjEsiI\"",
		"mtime": "2026-08-31T08:57:53.878Z",
		"size": 8706,
		"path": "../public/assets/auth-BADVYyci.js"
	},
	"/assets/blog-oX9OrZHf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-Pj6NMYC0zFstvDPFwdEXPovmz2A\"",
		"mtime": "2026-08-31T08:57:53.879Z",
		"size": 142,
		"path": "../public/assets/blog-oX9OrZHf.js"
	},
	"/assets/blog.index-CjL3EFn_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77f-gFhOiqfQbdMFPZ2bnkR5nN2xFuM\"",
		"mtime": "2026-08-31T08:57:53.913Z",
		"size": 1919,
		"path": "../public/assets/blog.index-CjL3EFn_.js"
	},
	"/assets/blog._slug-CMu3QEdu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bd-AQkSmC41ddLlby9lG4pAn8y5obE\"",
		"mtime": "2026-08-31T08:57:53.879Z",
		"size": 957,
		"path": "../public/assets/blog._slug-CMu3QEdu.js"
	},
	"/assets/blog._slug-Dk7ry9u2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-0XKe0XCp+jxB1FDGi2z7AT6C5P4\"",
		"mtime": "2026-08-31T08:57:53.911Z",
		"size": 500,
		"path": "../public/assets/blog._slug-Dk7ry9u2.js"
	},
	"/assets/blog._slug-Pk1UfQiS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"133-0D6qdQEUYIfFhsF18GoKYHH2qhA\"",
		"mtime": "2026-08-31T08:57:53.913Z",
		"size": 307,
		"path": "../public/assets/blog._slug-Pk1UfQiS.js"
	},
	"/assets/booking-DTRz0yk5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"663bd-Y7VwW4vbt6CWwEYa8/croJN83bs\"",
		"mtime": "2026-08-31T08:57:53.961Z",
		"size": 418749,
		"path": "../public/assets/booking-DTRz0yk5.js"
	},
	"/assets/button-yTQERnO1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fc8-Xd2lvHGG2AQS4TK+EC71TAr72j8\"",
		"mtime": "2026-08-31T08:57:53.962Z",
		"size": 32712,
		"path": "../public/assets/button-yTQERnO1.js"
	},
	"/assets/calendar-Cv_8fjOw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-8982NFBc3q5vL5AFsdgBILNJxts\"",
		"mtime": "2026-08-31T08:57:53.963Z",
		"size": 247,
		"path": "../public/assets/calendar-Cv_8fjOw.js"
	},
	"/assets/categories-Beuo2FdG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a98-SzEUQ1uesRsEvfYwvp2UB8Umxr0\"",
		"mtime": "2026-08-31T08:57:53.973Z",
		"size": 2712,
		"path": "../public/assets/categories-Beuo2FdG.js"
	},
	"/assets/checkbox-CCAtJuwX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fdf-Q/qPGNDvGqpU4Lus+WW/+hTVFeY\"",
		"mtime": "2026-08-31T08:57:53.976Z",
		"size": 4063,
		"path": "../public/assets/checkbox-CCAtJuwX.js"
	},
	"/assets/chevron-down-IP4JoMLT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-I7h9P7yU4D2hpNKiGVvgw9XzVY0\"",
		"mtime": "2026-08-31T08:57:53.977Z",
		"size": 118,
		"path": "../public/assets/chevron-down-IP4JoMLT.js"
	},
	"/assets/clock-hQ9vT6p_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-TiE6li1lzOqIgWc8HJSfYqhrQgw\"",
		"mtime": "2026-08-31T08:57:53.988Z",
		"size": 159,
		"path": "../public/assets/clock-hQ9vT6p_.js"
	},
	"/assets/compass-s9PJ9c1I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f1-x8JrZSUbVCxvlXsFAj69TW1r0q4\"",
		"mtime": "2026-08-31T08:57:53.988Z",
		"size": 241,
		"path": "../public/assets/compass-s9PJ9c1I.js"
	},
	"/assets/client-0xZ5mRRx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"330c6-NbufMOl1JCwvjTAAKSON0BCmSbQ\"",
		"mtime": "2026-08-31T08:57:53.977Z",
		"size": 209094,
		"path": "../public/assets/client-0xZ5mRRx.js"
	},
	"/assets/contact-iZkGNY6t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1126-Ibj/sSOA/Sze7U891Hl5wAb+10w\"",
		"mtime": "2026-08-31T08:57:54.006Z",
		"size": 4390,
		"path": "../public/assets/contact-iZkGNY6t.js"
	},
	"/assets/destinations-oX9OrZHf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-Pj6NMYC0zFstvDPFwdEXPovmz2A\"",
		"mtime": "2026-08-31T08:57:54.030Z",
		"size": 142,
		"path": "../public/assets/destinations-oX9OrZHf.js"
	},
	"/assets/destinations.index-CT9FOIcL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79a-locBrRq17k+awkhVw5CERpF5LFE\"",
		"mtime": "2026-08-31T08:57:54.043Z",
		"size": 1946,
		"path": "../public/assets/destinations.index-CT9FOIcL.js"
	},
	"/assets/destinations._slug-B6fdyPfk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e72-itZgtrqJuXk+TCeOnjWMQFBOK7E\"",
		"mtime": "2026-08-31T08:57:54.031Z",
		"size": 3698,
		"path": "../public/assets/destinations._slug-B6fdyPfk.js"
	},
	"/assets/destinations._slug-I2rDoW-K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"257-chAhvtrBl++L0VWdfUa9fwNAKHE\"",
		"mtime": "2026-08-31T08:57:54.032Z",
		"size": 599,
		"path": "../public/assets/destinations._slug-I2rDoW-K.js"
	},
	"/assets/destinations._slug-Pk1UfQiS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"133-0D6qdQEUYIfFhsF18GoKYHH2qhA\"",
		"mtime": "2026-08-31T08:57:54.043Z",
		"size": 307,
		"path": "../public/assets/destinations._slug-Pk1UfQiS.js"
	},
	"/assets/dialog-8JR4rJtQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1845-yfO+RelCW1Fd5TxJ+KNsLkdSYWo\"",
		"mtime": "2026-08-31T08:57:54.044Z",
		"size": 6213,
		"path": "../public/assets/dialog-8JR4rJtQ.js"
	},
	"/assets/dist-B3KxzgDX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2e-qj/Jy37NK+lfTG+tdNrk0n0bsNY\"",
		"mtime": "2026-08-31T08:57:54.062Z",
		"size": 3630,
		"path": "../public/assets/dist-B3KxzgDX.js"
	},
	"/assets/dist-DlGDH2LO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56e-MADJpYkApaHxOikePRv7PvmarZU\"",
		"mtime": "2026-08-31T08:57:54.076Z",
		"size": 1390,
		"path": "../public/assets/dist-DlGDH2LO.js"
	},
	"/assets/dist-fWK7emuG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a02-wLXA725JUAwHxgGZ3cIIFqaI6KA\"",
		"mtime": "2026-08-31T08:57:54.085Z",
		"size": 27138,
		"path": "../public/assets/dist-fWK7emuG.js"
	},
	"/assets/dist-Jlc-3r6T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47b-c45K/qcVy5SSDdyjSnvDAZAD/aE\"",
		"mtime": "2026-08-31T08:57:54.077Z",
		"size": 1147,
		"path": "../public/assets/dist-Jlc-3r6T.js"
	},
	"/assets/dist-YH5QyVcw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128f-WQYDokyErMgh9Gw5mu75hbBicbI\"",
		"mtime": "2026-08-31T08:57:54.084Z",
		"size": 4751,
		"path": "../public/assets/dist-YH5QyVcw.js"
	},
	"/assets/dist-zLV-SnI3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-6ZLhXO3ieGdi04xly9kZLJsz1PM\"",
		"mtime": "2026-08-31T08:57:54.095Z",
		"size": 472,
		"path": "../public/assets/dist-zLV-SnI3.js"
	},
	"/assets/dropdown-menu-CA07_d7d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"580c-lUCfu3a7XnP4/wqGllHdeBFGbtY\"",
		"mtime": "2026-08-31T08:57:54.110Z",
		"size": 22540,
		"path": "../public/assets/dropdown-menu-CA07_d7d.js"
	},
	"/assets/es2015-D2mDwI6z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"510e-ClKQ1l3yDtjsKvMGJ1zDUcNcBbI\"",
		"mtime": "2026-08-31T08:57:54.112Z",
		"size": 20750,
		"path": "../public/assets/es2015-D2mDwI6z.js"
	},
	"/assets/file-text-8opgg5uu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"177-J7xrs60PMHmDsOokY2SBqF3j5Xg\"",
		"mtime": "2026-08-31T08:57:54.125Z",
		"size": 375,
		"path": "../public/assets/file-text-8opgg5uu.js"
	},
	"/assets/gallery-vJbwYXtL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57d-4wGvV5WnGW3Qmt5xSDJ39uzU4eQ\"",
		"mtime": "2026-08-31T08:57:54.127Z",
		"size": 1405,
		"path": "../public/assets/gallery-vJbwYXtL.js"
	},
	"/assets/hero-safari-CukeVi8T.jpg": {
		"type": "image/jpeg",
		"etag": "\"4a650-uUyxa4rPTMu8mjqIMrQnMybO3dg\"",
		"mtime": "2026-08-31T08:57:54.449Z",
		"size": 304720,
		"path": "../public/assets/hero-safari-CukeVi8T.jpg"
	},
	"/assets/html2canvas-CNjex5NH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30b99-DCS/WS9d8KLzhUe18xwA+cCd/MU\"",
		"mtime": "2026-08-31T08:57:54.152Z",
		"size": 199577,
		"path": "../public/assets/html2canvas-CNjex5NH.js"
	},
	"/assets/image-BActzvnG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ff-oE5iIyLIxDeuvZvRnavfccemhqo\"",
		"mtime": "2026-08-31T08:57:54.153Z",
		"size": 511,
		"path": "../public/assets/image-BActzvnG.js"
	},
	"/assets/image-upload-D92T1eh2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c2-OlGtK6vuTwlKiO9APcqKNFfCfrY\"",
		"mtime": "2026-08-31T08:57:54.160Z",
		"size": 1730,
		"path": "../public/assets/image-upload-D92T1eh2.js"
	},
	"/assets/index.es-n2S051Qv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24ff5-oBRcNtIfTO6EBQZ0vu3h5FxhJoY\"",
		"mtime": "2026-08-31T08:57:54.161Z",
		"size": 151541,
		"path": "../public/assets/index.es-n2S051Qv.js"
	},
	"/assets/initReactI18next-CunpV_Wf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f5-N6YSSHNz1OoqT+qI60+IlYBKRKw\"",
		"mtime": "2026-08-31T08:57:54.169Z",
		"size": 757,
		"path": "../public/assets/initReactI18next-CunpV_Wf.js"
	},
	"/assets/invariant-DEEwAagU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c-eVh/3DMi1s3cxf4N/OJar+ew1jA\"",
		"mtime": "2026-08-31T08:57:54.169Z",
		"size": 60,
		"path": "../public/assets/invariant-DEEwAagU.js"
	},
	"/assets/jsx-runtime-CaR_m4Xc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1edb-YA3tihQJPH2usBIGDc+C49NkLY4\"",
		"mtime": "2026-08-31T08:57:54.175Z",
		"size": 7899,
		"path": "../public/assets/jsx-runtime-CaR_m4Xc.js"
	},
	"/assets/index-89hDApvB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7cadf-60LMKwmwuG+ljYFG7/1TE1yHb6Y\"",
		"mtime": "2026-08-31T08:57:53.651Z",
		"size": 510687,
		"path": "../public/assets/index-89hDApvB.js"
	},
	"/assets/label-DuMF7fBZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29e-SlbvaLQtjvCPNb6MTFuKFwBfNXM\"",
		"mtime": "2026-08-31T08:57:54.176Z",
		"size": 670,
		"path": "../public/assets/label-DuMF7fBZ.js"
	},
	"/assets/landmark-BsMs5dP4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"186-v8KlAENMV6AaiqBHtPLJ/scdt9A\"",
		"mtime": "2026-08-31T08:57:54.181Z",
		"size": 390,
		"path": "../public/assets/landmark-BsMs5dP4.js"
	},
	"/assets/link-Czy-WMWi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1169-wPF5KwWRBtFTaFeQUgpXavb1Qo0\"",
		"mtime": "2026-08-31T08:57:54.183Z",
		"size": 4457,
		"path": "../public/assets/link-Czy-WMWi.js"
	},
	"/assets/mail-xH25oYJL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-pfK+6o8xlDaEwyPvgXBJ+JX5lZU\"",
		"mtime": "2026-08-31T08:57:54.184Z",
		"size": 203,
		"path": "../public/assets/mail-xH25oYJL.js"
	},
	"/assets/map-pin-DxqsL4-7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-+oZO8iil57ebnf/uh3LkfZPUgAU\"",
		"mtime": "2026-08-31T08:57:54.191Z",
		"size": 249,
		"path": "../public/assets/map-pin-DxqsL4-7.js"
	},
	"/assets/matchContext-g3Cxk6_s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba-5iHuvUBERF2VeSbnGVAsNJtt+ug\"",
		"mtime": "2026-08-31T08:57:54.193Z",
		"size": 186,
		"path": "../public/assets/matchContext-g3Cxk6_s.js"
	},
	"/assets/mountain-DKf3IyDu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e-ACHBSl7PM2gKTfVs6AFasumutfA\"",
		"mtime": "2026-08-31T08:57:54.194Z",
		"size": 126,
		"path": "../public/assets/mountain-DKf3IyDu.js"
	},
	"/assets/page-hero-D4uHo4j7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"396-Noya1dsOSVNJVwJnj+nvv4UXg+A\"",
		"mtime": "2026-08-31T08:57:54.210Z",
		"size": 918,
		"path": "../public/assets/page-hero-D4uHo4j7.js"
	},
	"/assets/pencil-C4_fiOTM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10a-dRZguPbkGchR6RfogKAE27S0ty4\"",
		"mtime": "2026-08-31T08:57:54.211Z",
		"size": 266,
		"path": "../public/assets/pencil-C4_fiOTM.js"
	},
	"/assets/plus-DJJIORkX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f-AxeSovTILJ6vLFaE8VpECSB//L8\"",
		"mtime": "2026-08-31T08:57:54.211Z",
		"size": 143,
		"path": "../public/assets/plus-DJJIORkX.js"
	},
	"/assets/purify.es-BCQjEKZz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68b4-07AIdICr4aR4syCDoLrQZEX/W/U\"",
		"mtime": "2026-08-31T08:57:54.212Z",
		"size": 26804,
		"path": "../public/assets/purify.es-BCQjEKZz.js"
	},
	"/assets/quote--ioa3elt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17b-eGMCoH2KGPeDZTZvuqYRwapWPeo\"",
		"mtime": "2026-08-31T08:57:54.218Z",
		"size": 379,
		"path": "../public/assets/quote--ioa3elt.js"
	},
	"/assets/receipt-CnuT5qLL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11a-BBnW60kecE99sWlzmG7OwQJVpLg\"",
		"mtime": "2026-08-31T08:57:54.239Z",
		"size": 282,
		"path": "../public/assets/receipt-CnuT5qLL.js"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-08-31T08:57:54.240Z",
		"size": 625,
		"path": "../public/assets/redirect-DCb_aIiF.js"
	},
	"/assets/rolldown-runtime-CNC7AqOf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36f-poL7VEo+W3rlEpE8cNtjWDVI11g\"",
		"mtime": "2026-08-31T08:57:54.241Z",
		"size": 879,
		"path": "../public/assets/rolldown-runtime-CNC7AqOf.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-08-31T08:57:54.243Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/route-oX9OrZHf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-Pj6NMYC0zFstvDPFwdEXPovmz2A\"",
		"mtime": "2026-08-31T08:57:54.251Z",
		"size": 142,
		"path": "../public/assets/route-oX9OrZHf.js"
	},
	"/assets/routes-vzxSLlrR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22578-bR5wyYnz0oEXKujs7iCSzLGidbE\"",
		"mtime": "2026-08-31T08:57:54.252Z",
		"size": 140664,
		"path": "../public/assets/routes-vzxSLlrR.js"
	},
	"/assets/search-BDbzefjD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-Vr/UuDOZHJ5KYsidNY09cdfIDqU\"",
		"mtime": "2026-08-31T08:57:54.259Z",
		"size": 164,
		"path": "../public/assets/search-BDbzefjD.js"
	},
	"/assets/search-CccVqC6r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2131-xv5I2+m8Te6AxhMNKWfHJZjZp6k\"",
		"mtime": "2026-08-31T08:57:54.260Z",
		"size": 8497,
		"path": "../public/assets/search-CccVqC6r.js"
	},
	"/assets/select-6IfxJ44I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55ec-7tGweRtlWk27ByM7/rbKkEX/Imk\"",
		"mtime": "2026-08-31T08:57:54.277Z",
		"size": 21996,
		"path": "../public/assets/select-6IfxJ44I.js"
	},
	"/assets/shield-check-B1cQffXa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-kfo96GV4m2xA5n86ACUpHwNwEQU\"",
		"mtime": "2026-08-31T08:57:54.277Z",
		"size": 310,
		"path": "../public/assets/shield-check-B1cQffXa.js"
	},
	"/assets/site-layout-BWJmiheG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d8f-5P1vsCZE3TWwQc+S2RJQr7OdlJ4\"",
		"mtime": "2026-08-31T08:57:54.279Z",
		"size": 28047,
		"path": "../public/assets/site-layout-BWJmiheG.js"
	},
	"/assets/skeleton-DpIuWYvE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b5-IeB52mTM557Uq7yHBnoKB3ZX43M\"",
		"mtime": "2026-08-31T08:57:54.295Z",
		"size": 693,
		"path": "../public/assets/skeleton-DpIuWYvE.js"
	},
	"/assets/star-3kD27Y1t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ce-E9sT4Mvgny7o1qtpo4D4gHZXD0I\"",
		"mtime": "2026-08-31T08:57:54.296Z",
		"size": 462,
		"path": "../public/assets/star-3kD27Y1t.js"
	},
	"/assets/styles-CxO6N9rr.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18c39-bkfPcItMiYQFCMQLWJNAIo1cCvs\"",
		"mtime": "2026-08-31T08:57:54.456Z",
		"size": 101433,
		"path": "../public/assets/styles-CxO6N9rr.css"
	},
	"/assets/tabs-CVJDswLw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d92-kcCme063bCuomBLGNxE/qVKmzME\"",
		"mtime": "2026-08-31T08:57:54.298Z",
		"size": 3474,
		"path": "../public/assets/tabs-CVJDswLw.js"
	},
	"/assets/tag-BZaZSPkT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c-F5lxQXgCQW+RvsMsHrWPD1x0snI\"",
		"mtime": "2026-08-31T08:57:54.350Z",
		"size": 316,
		"path": "../public/assets/tag-BZaZSPkT.js"
	},
	"/assets/textarea-fBTGnRp6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"234-+Y6WKtaABkPlQ6/Efpt4bEGLXYI\"",
		"mtime": "2026-08-31T08:57:54.380Z",
		"size": 564,
		"path": "../public/assets/textarea-fBTGnRp6.js"
	},
	"/assets/tour-adventure-D-CknOhV.jpg": {
		"type": "image/jpeg",
		"etag": "\"49199-oZjodXzTlgn6aYuUz1tFIjIPF40\"",
		"mtime": "2026-08-31T08:57:54.458Z",
		"size": 299417,
		"path": "../public/assets/tour-adventure-D-CknOhV.jpg"
	},
	"/assets/tour-card-D8ZpM7Px.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"952-BFp+vrX7z2lDfAfn8vdUjotbTPY\"",
		"mtime": "2026-08-31T08:57:54.381Z",
		"size": 2386,
		"path": "../public/assets/tour-card-D8ZpM7Px.js"
	},
	"/assets/tour-culture-DG8Z3jyB.jpg": {
		"type": "image/jpeg",
		"etag": "\"4eac4-CGLBpRl6TKGr8/YJI+F8h4btR98\"",
		"mtime": "2026-08-31T08:57:54.460Z",
		"size": 322244,
		"path": "../public/assets/tour-culture-DG8Z3jyB.jpg"
	},
	"/assets/tour-history-BaaAPCGB.jpg": {
		"type": "image/jpeg",
		"etag": "\"566e1-ui4EDVFDGWGvoTzjrfoShklYEeY\"",
		"mtime": "2026-08-31T08:57:54.476Z",
		"size": 354017,
		"path": "../public/assets/tour-history-BaaAPCGB.jpg"
	},
	"/assets/tours-oX9OrZHf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-Pj6NMYC0zFstvDPFwdEXPovmz2A\"",
		"mtime": "2026-08-31T08:57:54.400Z",
		"size": 142,
		"path": "../public/assets/tours-oX9OrZHf.js"
	},
	"/assets/tour-nature-CpOO3TRr.jpg": {
		"type": "image/jpeg",
		"etag": "\"55992-qp0NnryQ+4BvQ55Hr3qIyR3POYQ\"",
		"mtime": "2026-08-31T08:57:54.478Z",
		"size": 350610,
		"path": "../public/assets/tour-nature-CpOO3TRr.jpg"
	},
	"/assets/tours._slug-Cts770lm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"242-5IXIk7uz0xTbBO6HajqGtgbRMsQ\"",
		"mtime": "2026-08-31T08:57:54.401Z",
		"size": 578,
		"path": "../public/assets/tours._slug-Cts770lm.js"
	},
	"/assets/tours.index-DufZySgz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"83e-aXChV7DrWP2hzLW/aiYSELy6G88\"",
		"mtime": "2026-08-31T08:57:54.404Z",
		"size": 2110,
		"path": "../public/assets/tours.index-DufZySgz.js"
	},
	"/assets/tours._slug-DMqSJsfD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d7-adaz0AJGmoXE14US3aBe8op7Y38\"",
		"mtime": "2026-08-31T08:57:54.402Z",
		"size": 471,
		"path": "../public/assets/tours._slug-DMqSJsfD.js"
	},
	"/assets/tours._slug-HdWmnTOH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11f9-kc4FcELw/ogsb81++mGBjsfrNPI\"",
		"mtime": "2026-08-31T08:57:54.404Z",
		"size": 4601,
		"path": "../public/assets/tours._slug-HdWmnTOH.js"
	},
	"/assets/tour-wildlife-BUzoqr04.jpg": {
		"type": "image/jpeg",
		"etag": "\"33a79-QWPwCr+AyAznXJwC3D7FPx7p1rY\"",
		"mtime": "2026-08-31T08:57:54.486Z",
		"size": 211577,
		"path": "../public/assets/tour-wildlife-BUzoqr04.jpg"
	},
	"/assets/trash-2-Bc8eurOA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e-j3zD0c8mKobuIcc2QOTBadZgXWk\"",
		"mtime": "2026-08-31T08:57:54.412Z",
		"size": 318,
		"path": "../public/assets/trash-2-Bc8eurOA.js"
	},
	"/assets/truck-DA-opuS0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d6-xDLnRxmu4K0ogc1u27WCWvCMGvo\"",
		"mtime": "2026-08-31T08:57:54.413Z",
		"size": 726,
		"path": "../public/assets/truck-DA-opuS0.js"
	},
	"/assets/typeof-B5XbjTb1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10f-yPXEOGyFHb1Ws7OoWyWNEEBz4mQ\"",
		"mtime": "2026-08-31T08:57:54.421Z",
		"size": 271,
		"path": "../public/assets/typeof-B5XbjTb1.js"
	},
	"/assets/upload--w8ltiHE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30b-bpjpCfZoJPLg6B2uSGcu97MbopI\"",
		"mtime": "2026-08-31T08:57:54.422Z",
		"size": 779,
		"path": "../public/assets/upload--w8ltiHE.js"
	},
	"/assets/users-DjxQi3pr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128-qzZ40pTj2+W6uBYtP7xFJJR5lM8\"",
		"mtime": "2026-08-31T08:57:54.437Z",
		"size": 296,
		"path": "../public/assets/users-DjxQi3pr.js"
	},
	"/assets/useQuery-DBkPKiXW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c72-KnEplZLsEOF5nu44NPunrWRbr0Q\"",
		"mtime": "2026-08-31T08:57:54.434Z",
		"size": 23666,
		"path": "../public/assets/useQuery-DBkPKiXW.js"
	},
	"/assets/useRouter-By_Trsgu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2de-obl78iwFNMebCLddDCwc+3iY7MA\"",
		"mtime": "2026-08-31T08:57:54.435Z",
		"size": 734,
		"path": "../public/assets/useRouter-By_Trsgu.js"
	},
	"/assets/useStore-BO56d5EK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4847-/Zz6JjuOlDfiBMUQB9t2F2TlmG0\"",
		"mtime": "2026-08-31T08:57:54.436Z",
		"size": 18503,
		"path": "../public/assets/useStore-BO56d5EK.js"
	},
	"/assets/tour-trek-Dvsn6psM.jpg": {
		"type": "image/jpeg",
		"etag": "\"54c6e-pVunerMNT4ML9+46irTzABFy8Qc\"",
		"mtime": "2026-08-31T08:57:54.485Z",
		"size": 347246,
		"path": "../public/assets/tour-trek-Dvsn6psM.jpg"
	},
	"/assets/wallet-BA7q4VJM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114-qxLN/7I2jDprQVqRP1BGt2ekRX8\"",
		"mtime": "2026-08-31T08:57:54.442Z",
		"size": 276,
		"path": "../public/assets/wallet-BA7q4VJM.js"
	},
	"/assets/x-DwSa0G6p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-ZtlC6JvRBjOPCp+cWYNiBSez/Tw\"",
		"mtime": "2026-08-31T08:57:54.443Z",
		"size": 144,
		"path": "../public/assets/x-DwSa0G6p.js"
	},
	"/images/brochure/bankouale.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bd9e-kZgo3FtUyTWKLfR+Tjog/4QMZ18\"",
		"mtime": "2026-08-29T07:01:29.462Z",
		"size": 114078,
		"path": "../public/images/brochure/bankouale.jpg"
	},
	"/images/brochure/day-forest.jpg": {
		"type": "image/jpeg",
		"etag": "\"144ec-7LZMK5ar8V70xUA7t2S+auQeCiw\"",
		"mtime": "2026-08-29T07:11:21.063Z",
		"size": 83180,
		"path": "../public/images/brochure/day-forest.jpg"
	},
	"/images/brochure/as-eyla-neem-farm.jpg": {
		"type": "image/jpeg",
		"etag": "\"2de78-M6XUbpd0/vB34OHVS+1uc8qtjtA\"",
		"mtime": "2026-08-28T08:23:56.914Z",
		"size": 188024,
		"path": "../public/images/brochure/as-eyla-neem-farm.jpg"
	},
	"/images/brochure/arta-beach.jpg": {
		"type": "image/jpeg",
		"etag": "\"57024-dJsj4fF4I3HvaolvOsWBMwvweLo\"",
		"mtime": "2026-08-28T08:23:56.804Z",
		"size": 356388,
		"path": "../public/images/brochure/arta-beach.jpg"
	},
	"/images/brochure/lake-abbe.jpg": {
		"type": "image/jpeg",
		"etag": "\"3984a-pALyFLyT6IwQ3tBfeG1zT183KkU\"",
		"mtime": "2026-08-29T07:11:21.076Z",
		"size": 235594,
		"path": "../public/images/brochure/lake-abbe.jpg"
	},
	"/images/brochure/day-forest-discovery.jpg": {
		"type": "image/jpeg",
		"etag": "\"4acf5-DSaPw8Fpcx4Amg3NfZhvvpszNWE\"",
		"mtime": "2026-08-28T08:23:57.207Z",
		"size": 306421,
		"path": "../public/images/brochure/day-forest-discovery.jpg"
	},
	"/images/brochure/moucha-fishing.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a889-Y8pFHFmWXWubwlC+7RfouBRxSg4\"",
		"mtime": "2026-08-28T08:23:57.134Z",
		"size": 108681,
		"path": "../public/images/brochure/moucha-fishing.jpg"
	},
	"/images/brochure/sable-blanc.jpg": {
		"type": "image/jpeg",
		"etag": "\"27dcc-fRuDrUrltgu1r3cS6uqtrQWPJHI\"",
		"mtime": "2026-08-28T08:23:57.067Z",
		"size": 163276,
		"path": "../public/images/brochure/sable-blanc.jpg"
	},
	"/images/brochure/dittilou.jpg": {
		"type": "image/jpeg",
		"etag": "\"89f94-KIePsS9gUa4zrurshX8BPqXFwSQ\"",
		"mtime": "2026-08-28T08:23:56.982Z",
		"size": 565140,
		"path": "../public/images/brochure/dittilou.jpg"
	},
	"/images/brochure/whale-shark.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f4fe-3OH+Sak70Czj1cH11Qm6zA9pl/E\"",
		"mtime": "2026-08-29T07:34:11.621Z",
		"size": 128254,
		"path": "../public/images/brochure/whale-shark.jpg"
	},
	"/images/brochure/maskali-islands.jpg": {
		"type": "image/jpeg",
		"etag": "\"3205a-aseYEuxaUy9fZebW/lFdquCfr6g\"",
		"mtime": "2026-08-28T08:23:56.853Z",
		"size": 204890,
		"path": "../public/images/brochure/maskali-islands.jpg"
	},
	"/images/brochure/salt-caravan.jpg": {
		"type": "image/jpeg",
		"etag": "\"50723-4CGfNqEebBbrcsCDfV5J8+PG7ak\"",
		"mtime": "2026-08-29T07:06:53.270Z",
		"size": 329507,
		"path": "../public/images/brochure/salt-caravan.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_xdOmHK = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_xdOmHK
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
