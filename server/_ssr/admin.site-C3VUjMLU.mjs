import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { f as siteSettingsQuery } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { At as LoaderCircle, c as Upload, n as X, w as Save } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BYfOmXtJ.mjs";
import { t as uploadMedia } from "./upload-ddEtPdcV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.site-C3VUjMLU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	"home",
	"about",
	"contact",
	"header",
	"footer"
];
function AdminSitePage() {
	const qc = useQueryClient();
	const { data } = useQuery(siteSettingsQuery());
	const [drafts, setDrafts] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		if (!data) return;
		const next = {};
		for (const k of SECTIONS) next[k] = JSON.stringify(data[k] ?? {}, null, 2);
		setDrafts((prev) => ({
			...next,
			...prev
		}));
	}, [data]);
	const save = async (key) => {
		let parsed;
		try {
			parsed = JSON.parse(drafts[key] ?? "{}");
		} catch (e) {
			toast.error("Invalid JSON: " + e.message);
			return;
		}
		const { error } = await supabase.from("site_settings").upsert({
			key,
			value: parsed
		});
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success(`${key} saved`);
		qc.invalidateQueries({ queryKey: ["site_settings"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8 max-w-5xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold",
				children: "Site content"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1",
				children: "Edit the public website: Home hero & stats, About story & team, Contact info, Footer."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "home",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, { children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
				value: s,
				className: "capitalize",
				children: s
			}, s)) }), SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
				value: s,
				className: "mt-6 space-y-4",
				children: [
					s === "contact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactEditor, {
						value: safeParse(drafts[s]),
						onChange: (v) => setDrafts((p) => ({
							...p,
							[s]: JSON.stringify(v, null, 2)
						}))
					}) : s === "footer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterEditor, {
						value: safeParse(drafts[s]),
						onChange: (v) => setDrafts((p) => ({
							...p,
							[s]: JSON.stringify(v, null, 2)
						}))
					}) : s === "header" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderEditor, {
						value: safeParse(drafts[s]),
						onChange: (v) => setDrafts((p) => ({
							...p,
							[s]: JSON.stringify(v, null, 2)
						}))
					}) : s === "about" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamEditor, {
						value: safeParse(drafts[s]).team ?? [],
						onChange: (team) => {
							const current = safeParse(drafts[s]);
							setDrafts((p) => ({
								...p,
								[s]: JSON.stringify({
									...current,
									team
								}, null, 2)
							}));
						}
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Advanced — raw JSON"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: s === "home" || s === "about" ? 22 : 10,
								className: "font-mono text-xs mt-2",
								value: drafts[s] ?? "",
								onChange: (e) => setDrafts((p) => ({
									...p,
									[s]: e.target.value
								}))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-2",
								children: [
									"Edit any field directly.",
									" ",
									s === "home" && "Includes: hero_eyebrow, hero_title, hero_subtitle, hero_video_url, hero_cta_primary/secondary, stats[].",
									" ",
									s === "about" && "Includes: hero_*, story_*, mission, vision, values, team[]."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => save(s),
						className: "rounded-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4 mr-2" }),
							" Save ",
							s
						]
					})
				]
			}, s))]
		})]
	});
}
function safeParse(json) {
	try {
		return JSON.parse(json ?? "{}");
	} catch {
		return {};
	}
}
function Field({ label, value, onChange, textarea }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
			rows: 3,
			value: value ?? "",
			onChange: (e) => onChange(e.target.value)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value: value ?? "",
			onChange: (e) => onChange(e.target.value)
		})]
	});
}
function ContactEditor({ value, onChange }) {
	const set = (k, v) => onChange({
		...value,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 grid sm:grid-cols-2 gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Hero eyebrow",
				value: value.hero_eyebrow,
				onChange: (v) => set("hero_eyebrow", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Hero title",
				value: value.hero_title,
				onChange: (v) => set("hero_title", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Hero subtitle",
					value: value.hero_subtitle,
					onChange: (v) => set("hero_subtitle", v),
					textarea: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Address",
				value: value.address,
				onChange: (v) => set("address", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone",
				value: value.phone,
				onChange: (v) => set("phone", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "WhatsApp",
				value: value.whatsapp,
				onChange: (v) => set("whatsapp", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				value: value.email,
				onChange: (v) => set("email", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Map embed URL",
					value: value.map_embed,
					onChange: (v) => set("map_embed", v)
				})
			})
		]
	});
}
function FooterEditor({ value, onChange }) {
	const set = (k, v) => onChange({
		...value,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 grid sm:grid-cols-2 gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Brand name",
				value: value.brand_name,
				onChange: (v) => set("brand_name", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Copyright",
				value: value.copyright,
				onChange: (v) => set("copyright", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Tagline",
					value: value.tagline,
					onChange: (v) => set("tagline", v),
					textarea: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Byline",
				value: value.byline,
				onChange: (v) => set("byline", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Instagram URL",
				value: value.instagram_url,
				onChange: (v) => set("instagram_url", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Facebook URL",
				value: value.facebook_url,
				onChange: (v) => set("facebook_url", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "YouTube URL",
				value: value.youtube_url,
				onChange: (v) => set("youtube_url", v)
			})
		]
	});
}
function LogoField({ label, value, onChange }) {
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const onFile = async (file) => {
		if (!file) return;
		setBusy(true);
		try {
			onChange(await uploadMedia(file, "branding"));
			toast.success("Logo uploaded");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setBusy(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2 sm:col-span-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: value,
					alt: "Logo preview",
					className: "h-16 w-40 object-contain rounded-md border border-border bg-muted/40 p-2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "icon",
					variant: "destructive",
					className: "absolute -top-2 -right-2 h-6 w-6 rounded-full",
					onClick: () => onChange(""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: value ?? "",
					onChange: (e) => onChange(e.target.value),
					placeholder: "Paste a logo URL…",
					className: "flex-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					disabled: busy,
					onClick: () => inputRef.current?.click(),
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 hidden sm:inline",
						children: "Upload"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => onFile(e.target.files?.[0])
			})
		]
	});
}
function TeamMemberPhoto({ value, onChange }) {
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const onFile = async (file) => {
		if (!file) return;
		setBusy(true);
		try {
			onChange(await uploadMedia(file, "team"));
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setBusy(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative shrink-0",
		children: [
			value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: value,
				alt: "",
				className: "h-20 w-20 rounded-full object-cover border border-border"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-20 w-20 rounded-full bg-muted grid place-items-center text-[10px] text-muted-foreground text-center px-2",
				children: "No photo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "icon",
				variant: "default",
				disabled: busy,
				onClick: () => inputRef.current?.click(),
				className: "absolute -bottom-1 -right-1 h-7 w-7 rounded-full",
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => onFile(e.target.files?.[0])
			})
		]
	});
}
function TeamEditor({ value, onChange }) {
	const members = value ?? [];
	const update = (i, patch) => {
		onChange(members.map((m, idx) => idx === i ? {
			...m,
			...patch
		} : m));
	};
	const remove = (i) => {
		if (!confirm(`Remove ${members[i]?.name || "this team member"}?`)) return;
		onChange(members.filter((_, idx) => idx !== i));
	};
	const add = () => onChange([...members, {
		name: "",
		role: "",
		img: ""
	}]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: "Team members (shown on the About page)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "sm",
				variant: "outline",
				onClick: add,
				children: "+ Add team member"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid sm:grid-cols-2 gap-4",
			children: [members.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 rounded-xl border border-border p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamMemberPhoto, {
					value: m.img,
					onChange: (v) => update(i, { img: v })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Name",
							value: m.name,
							onChange: (e) => update(i, { name: e.target.value })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Role / title",
							value: m.role,
							onChange: (e) => update(i, { role: e.target.value })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							className: "text-destructive hover:text-destructive",
							onClick: () => remove(i),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 mr-1" }), " Remove"]
						})
					]
				})]
			}, i)), members.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground sm:col-span-2",
				children: "No team members yet."
			})]
		})]
	});
}
function HeaderEditor({ value, onChange }) {
	const set = (k, v) => onChange({
		...value,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 grid sm:grid-cols-2 gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoField, {
				label: "Site logo (upload from device or paste URL)",
				value: value.logo_url,
				onChange: (v) => set("logo_url", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Brand name",
				value: value.brand_name,
				onChange: (v) => set("brand_name", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Brand accent word (italic)",
				value: value.brand_accent,
				onChange: (v) => set("brand_accent", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Logo height in px (e.g. 44)",
				value: value.logo_height,
				onChange: (v) => set("logo_height", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Show brand text with logo (true/false)",
				value: String(value.show_brand_text ?? "true"),
				onChange: (v) => set("show_brand_text", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone number",
				value: value.phone,
				onChange: (v) => set("phone", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone label",
				value: value.phone_label,
				onChange: (v) => set("phone_label", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Catalog label",
				value: value.catalog_label,
				onChange: (v) => set("catalog_label", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Catalog URL",
				value: value.catalog_url,
				onChange: (v) => set("catalog_url", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Destinations dropdown label",
				value: value.destinations_label,
				onChange: (v) => set("destinations_label", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Newsletter title",
				value: value.newsletter_title,
				onChange: (v) => set("newsletter_title", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Newsletter placeholder",
				value: value.newsletter_placeholder,
				onChange: (v) => set("newsletter_placeholder", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Newsletter button",
				value: value.newsletter_cta,
				onChange: (v) => set("newsletter_cta", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Show search (true/false)",
				value: String(value.show_search ?? "true"),
				onChange: (v) => set("show_search", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Show phone (true/false)",
				value: String(value.show_phone ?? "true"),
				onChange: (v) => set("show_phone", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Show newsletter (true/false)",
				value: String(value.show_newsletter ?? "true"),
				onChange: (v) => set("show_newsletter", v)
			})
		]
	});
}
//#endregion
export { AdminSitePage as component };
