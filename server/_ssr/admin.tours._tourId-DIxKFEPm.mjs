import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D06-73M8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { _ as tourDeparturesQuery, b as tourHotelsQuery, c as driversQuery, d as hotelsQuery, h as tourByIdQuery, m as tourActivitiesQuery, n as activitiesQuery, s as destinationsQuery, u as guidesQuery, v as tourDriversQuery, w as vehiclesQuery, x as tourVehiclesQuery, y as tourGuidesQuery } from "./queries-CwknXRs0.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { O as Plus, St as ArrowUp, Tt as ArrowDown, m as Trash2, wt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as TOUR_CATEGORIES } from "./categories-CRdh_exv.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BYfOmXtJ.mjs";
import { t as ImageUpload } from "./image-upload-CwvKNVr-.mjs";
import { t as Checkbox } from "./checkbox-B1AjkRkB.mjs";
import { t as Route } from "./admin.tours._tourId-U1Z_4OAx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.tours._tourId-DIxKFEPm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TourEditor() {
	const { tourId } = Route.useParams();
	const { data: tour, isLoading } = useQuery(tourByIdQuery(tourId));
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-10 text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (!tour) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-10 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Tour not found."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/tours",
				children: "Back to tours"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-10 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					size: "icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/tours",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-1",
						children: "Tours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-semibold truncate",
						children: tour.title || "Untitled tour"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold ${tour.is_active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`,
					children: tour.is_active ? "Live" : "Draft"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "details",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "h-auto flex-wrap justify-start gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "details",
							children: "Details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "itinerary",
							children: "Itinerary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "pricing",
							children: "Pricing & Capacity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "departures",
							children: "Departures"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "team",
							children: "Team & Logistics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "activities",
							children: "Activities"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "details",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailsTab, { tour })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "itinerary",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItineraryTab, { tour })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "pricing",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingTab, { tour })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "departures",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeparturesTab, { tourId })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "team",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamTab, { tourId })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "activities",
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivitiesTab, { tourId })
				})
			]
		})]
	});
}
function DetailsTab({ tour }) {
	const qc = useQueryClient();
	const { data: destinations = [] } = useQuery(destinationsQuery());
	const save = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = {
			title: String(fd.get("title")).trim(),
			slug: String(fd.get("slug")).trim(),
			category: String(fd.get("category")),
			destination_id: fd.get("destination_id") || null,
			short_description: String(fd.get("short_description") || ""),
			description: String(fd.get("description") || ""),
			difficulty: String(fd.get("difficulty") || ""),
			duration_days: Number(fd.get("duration_days") || 1),
			image_url: String(fd.get("image_url") || ""),
			is_featured: fd.get("is_featured") === "on",
			is_active: fd.get("is_active") === "on"
		};
		const { error } = await supabase.from("tours").update(payload).eq("id", tour.id);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Details saved");
		qc.invalidateQueries({ queryKey: ["tour-by-id", tour.id] });
		qc.invalidateQueries({ queryKey: ["tours"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: save,
		className: "max-w-2xl space-y-4 rounded-2xl border border-border bg-card p-6 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "title",
						defaultValue: tour.title,
						required: true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Slug" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "slug",
						defaultValue: tour.slug,
						required: true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						name: "category",
						defaultValue: tour.category,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: TOUR_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: c.id,
							children: c.label
						}, c.id)) })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Destination" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						name: "destination_id",
						defaultValue: tour.destination_id ?? "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "None" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: d.id,
							children: d.name
						}, d.id)) })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Short description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "short_description",
					defaultValue: tour.short_description ?? ""
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					name: "description",
					rows: 5,
					defaultValue: tour.description ?? ""
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Duration (days)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "duration_days",
						type: "number",
						min: 1,
						defaultValue: tour.duration_days
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Difficulty" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "difficulty",
						defaultValue: tour.difficulty ?? ""
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				name: "image_url",
				label: "Cover image",
				folder: "tours",
				defaultValue: tour.image_url ?? ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						name: "is_featured",
						defaultChecked: tour.is_featured
					}), " Featured"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						name: "is_active",
						defaultChecked: tour.is_active
					}), " Active (live on the site)"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Save details"
			})
		]
	});
}
function ItineraryTab({ tour }) {
	const qc = useQueryClient();
	const [days, setDays] = (0, import_react.useState)(Array.isArray(tour.itinerary) ? tour.itinerary : []);
	const renumber = (list) => list.map((d, i) => ({
		...d,
		day: i + 1
	}));
	const addDay = () => setDays((d) => [...d, {
		day: d.length + 1,
		title: "",
		description: ""
	}]);
	const removeDay = (i) => setDays((d) => renumber(d.filter((_, idx) => idx !== i)));
	const move = (i, dir) => setDays((d) => {
		const j = i + dir;
		if (j < 0 || j >= d.length) return d;
		const next = [...d];
		[next[i], next[j]] = [next[j], next[i]];
		return renumber(next);
	});
	const update = (i, patch) => setDays((d) => d.map((day, idx) => idx === i ? {
		...day,
		...patch
	} : day));
	const save = async () => {
		const { error } = await supabase.from("tours").update({ itinerary: days }).eq("id", tour.id);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Itinerary saved");
		qc.invalidateQueries({ queryKey: ["tour-by-id", tour.id] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl space-y-4",
		children: [
			days.map((day, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-5 space-y-3 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg font-semibold",
							children: ["Day ", day.day]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									onClick: () => move(i, -1),
									disabled: i === 0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									onClick: () => move(i, 1),
									disabled: i === days.length - 1,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									onClick: () => removeDay(i),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Day title",
						value: day.title,
						onChange: (e) => update(i, { title: e.target.value })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						placeholder: "What happens this day",
						rows: 3,
						value: day.description,
						onChange: (e) => update(i, { description: e.target.value })
					})
				]
			}, i)),
			days.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No itinerary days yet — add the first one below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					onClick: addDay,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "Add day"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: save,
					children: "Save itinerary"
				})]
			})
		]
	});
}
function PricingTab({ tour }) {
	const qc = useQueryClient();
	const save = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = {
			price_usd: Number(fd.get("price_usd") || 0),
			price_per_person: fd.get("price_per_person") ? Number(fd.get("price_per_person")) : null,
			group_price: fd.get("group_price") ? Number(fd.get("group_price")) : null,
			cost_per_person: fd.get("cost_per_person") ? Number(fd.get("cost_per_person")) : null,
			min_travelers: Number(fd.get("min_travelers") || 1),
			max_group_size: fd.get("max_group_size") ? Number(fd.get("max_group_size")) : null,
			cancellation_policy: String(fd.get("cancellation_policy") || "") || null
		};
		const { error } = await supabase.from("tours").update(payload).eq("id", tour.id);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Pricing saved");
		qc.invalidateQueries({ queryKey: ["tour-by-id", tour.id] });
		qc.invalidateQueries({ queryKey: ["tours"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: save,
		className: "max-w-2xl space-y-4 rounded-2xl border border-border bg-card p-6 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Base price (USD)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "price_usd",
						type: "number",
						step: "0.01",
						min: 0,
						defaultValue: tour.price_usd,
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Shown site-wide — tour cards, search, and booking."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Price per person ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground font-normal",
						children: "(optional)"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "price_per_person",
						type: "number",
						step: "0.01",
						min: 0,
						defaultValue: tour.price_per_person ?? ""
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Group price ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground font-normal",
						children: "(optional)"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "group_price",
						type: "number",
						step: "0.01",
						min: 0,
						defaultValue: tour.group_price ?? ""
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Cost per person ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground font-normal",
						children: "(optional)"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "cost_per_person",
						type: "number",
						step: "0.01",
						min: 0,
						defaultValue: tour.cost_per_person ?? ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "What it actually costs you to run this tour per traveler — powers the Profit figure on the dashboard. Leave blank if unknown."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Min travelers" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "min_travelers",
						type: "number",
						min: 1,
						defaultValue: tour.min_travelers ?? 1
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Max group size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "max_group_size",
						type: "number",
						min: 1,
						defaultValue: tour.max_group_size ?? ""
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Cancellation policy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground font-normal",
						children: "(optional)"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						name: "cancellation_policy",
						rows: 4,
						defaultValue: tour.cancellation_policy ?? "",
						placeholder: "e.g. Free cancellation up to 14 days before departure. 50% refund 7–13 days before. No refund within 7 days of departure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Shown to customers on this tour's page. Leave blank to hide the section."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Save pricing"
			})
		]
	});
}
function DeparturesTab({ tourId }) {
	const qc = useQueryClient();
	const { data: departures = [] } = useQuery(tourDeparturesQuery(tourId));
	const addDeparture = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const departure_date = String(fd.get("departure_date") || "");
		const capacity = Number(fd.get("capacity") || 1);
		if (!departure_date) return;
		const { error } = await supabase.from("tour_departures").insert({
			tour_id: tourId,
			departure_date,
			capacity
		});
		if (error) {
			toast.error(error.message);
			return;
		}
		e.target.reset();
		qc.invalidateQueries({ queryKey: ["tour-departures", tourId] });
	};
	const toggleActive = async (id, isActive) => {
		await supabase.from("tour_departures").update({ is_active: !isActive }).eq("id", id);
		qc.invalidateQueries({ queryKey: ["tour-departures", tourId] });
	};
	const del = async (id) => {
		if (!confirm("Delete this departure date?")) return;
		await supabase.from("tour_departures").delete().eq("id", id);
		qc.invalidateQueries({ queryKey: ["tour-departures", tourId] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: addDeparture,
			className: "flex items-end gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Departure date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "departure_date",
						type: "date",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 w-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Capacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "capacity",
						type: "number",
						min: 1,
						defaultValue: 8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "Add"]
				})
			]
		}), departures.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No departure dates yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3",
							children: "Date"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3",
							children: "Capacity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-5 py-3" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: departures.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 font-medium",
							children: new Date(d.departure_date).toLocaleDateString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: d.capacity
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleActive(d.id, d.is_active),
								className: `text-xs px-2 py-0.5 rounded-full ${d.is_active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`,
								children: d.is_active ? "Active" : "Inactive"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => del(d.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
							})
						})
					]
				}, d.id)) })]
			})
		})]
	});
}
function AssignmentPanel({ title, roster, assigned, onToggle, emptyHref, renderMeta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg font-semibold mb-3",
			children: title
		}), roster.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted-foreground",
			children: [
				"No ",
				title.toLowerCase(),
				" yet — ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: emptyHref,
					className: "text-primary hover:underline",
					children: "add one"
				}),
				"."
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2 max-h-80 overflow-y-auto",
			children: roster.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					id: `${title}-${item.id}`,
					checked: assigned.has(item.id),
					onCheckedChange: (v) => onToggle(item.id, v === true)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: `${title}-${item.id}`,
					className: "text-sm cursor-pointer flex-1",
					children: [
						item.name,
						" ",
						renderMeta?.(item)
					]
				})]
			}, item.id))
		})]
	});
}
function TeamTab({ tourId }) {
	const qc = useQueryClient();
	const { data: guides = [] } = useQuery(guidesQuery());
	const { data: drivers = [] } = useQuery(driversQuery());
	const { data: vehicles = [] } = useQuery(vehiclesQuery());
	const { data: hotels = [] } = useQuery(hotelsQuery());
	const { data: tourGuides = [] } = useQuery(tourGuidesQuery(tourId));
	const { data: tourDrivers = [] } = useQuery(tourDriversQuery(tourId));
	const { data: tourVehicles = [] } = useQuery(tourVehiclesQuery(tourId));
	const { data: tourHotels = [] } = useQuery(tourHotelsQuery(tourId));
	const guideIds = new Set(tourGuides.map((r) => r.guide_id));
	const driverIds = new Set(tourDrivers.map((r) => r.driver_id));
	const vehicleIds = new Set(tourVehicles.map((r) => r.vehicle_id));
	const hotelIds = new Set(tourHotels.map((r) => r.hotel_id));
	const toggleGuide = async (guide_id, checked) => {
		const { error } = checked ? await supabase.from("tour_guides").insert({
			tour_id: tourId,
			guide_id
		}) : await supabase.from("tour_guides").delete().eq("tour_id", tourId).eq("guide_id", guide_id);
		if (error) {
			toast.error(error.message);
			return;
		}
		qc.invalidateQueries({ queryKey: ["tour-guides", tourId] });
	};
	const toggleDriver = async (driver_id, checked) => {
		const { error } = checked ? await supabase.from("tour_drivers").insert({
			tour_id: tourId,
			driver_id
		}) : await supabase.from("tour_drivers").delete().eq("tour_id", tourId).eq("driver_id", driver_id);
		if (error) {
			toast.error(error.message);
			return;
		}
		qc.invalidateQueries({ queryKey: ["tour-drivers", tourId] });
	};
	const toggleVehicle = async (vehicle_id, checked) => {
		const { error } = checked ? await supabase.from("tour_vehicles").insert({
			tour_id: tourId,
			vehicle_id
		}) : await supabase.from("tour_vehicles").delete().eq("tour_id", tourId).eq("vehicle_id", vehicle_id);
		if (error) {
			toast.error(error.message);
			return;
		}
		qc.invalidateQueries({ queryKey: ["tour-vehicles", tourId] });
	};
	const toggleHotel = async (hotel_id, checked) => {
		const { error } = checked ? await supabase.from("tour_hotels").insert({
			tour_id: tourId,
			hotel_id
		}) : await supabase.from("tour_hotels").delete().eq("tour_id", tourId).eq("hotel_id", hotel_id);
		if (error) {
			toast.error(error.message);
			return;
		}
		qc.invalidateQueries({ queryKey: ["tour-hotels", tourId] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssignmentPanel, {
				title: "Guides",
				roster: guides.filter((g) => g.is_active),
				assigned: guideIds,
				onToggle: toggleGuide,
				emptyHref: "/admin/guides",
				renderMeta: (g) => g.languages?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [
						"(",
						g.languages.join(", "),
						")"
					]
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssignmentPanel, {
				title: "Drivers",
				roster: drivers.filter((d) => d.is_active),
				assigned: driverIds,
				onToggle: toggleDriver,
				emptyHref: "/admin/drivers",
				renderMeta: (d) => d.license_number ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [
						"(#",
						d.license_number,
						")"
					]
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssignmentPanel, {
				title: "Vehicles",
				roster: vehicles.filter((v) => v.is_active),
				assigned: vehicleIds,
				onToggle: toggleVehicle,
				emptyHref: "/admin/vehicles",
				renderMeta: (v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [
						"(",
						v.capacity,
						" seats)"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssignmentPanel, {
				title: "Hotels",
				roster: hotels.filter((h) => h.is_active),
				assigned: hotelIds,
				onToggle: toggleHotel,
				emptyHref: "/admin/hotels",
				renderMeta: (h) => h.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [
						"(",
						h.location,
						")"
					]
				}) : null
			})
		]
	});
}
function ActivitiesTab({ tourId }) {
	const qc = useQueryClient();
	const { data: activities = [] } = useQuery(activitiesQuery());
	const { data: tourActivities = [] } = useQuery(tourActivitiesQuery(tourId));
	const byActivityId = new Map(tourActivities.map((r) => [r.activity_id, r]));
	const toggle = async (activity_id, checked) => {
		const { error } = checked ? await supabase.from("tour_activities").insert({
			tour_id: tourId,
			activity_id
		}) : await supabase.from("tour_activities").delete().eq("tour_id", tourId).eq("activity_id", activity_id);
		if (error) {
			toast.error(error.message);
			return;
		}
		qc.invalidateQueries({ queryKey: ["tour-activities", tourId] });
	};
	const toggleOptional = async (rowId, is_optional) => {
		await supabase.from("tour_activities").update({ is_optional }).eq("id", rowId);
		qc.invalidateQueries({ queryKey: ["tour-activities", tourId] });
	};
	const active = activities.filter((a) => a.is_active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-soft",
		children: active.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted-foreground",
			children: [
				"No activities yet — ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/activities",
					className: "text-primary hover:underline",
					children: "add one"
				}),
				"."
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2.5",
			children: active.map((a) => {
				const row = byActivityId.get(a.id);
				const checked = Boolean(row);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							id: `act-${a.id}`,
							checked,
							onCheckedChange: (v) => toggle(a.id, v === true)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: `act-${a.id}`,
							className: "text-sm cursor-pointer flex-1",
							children: a.name
						}),
						checked && row && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: row.is_optional,
								onChange: (e) => toggleOptional(row.id, e.target.checked)
							}), "Optional"]
						})
					]
				}, a.id);
			})
		})
	});
}
//#endregion
export { TourEditor as component };
