import { t as supabase } from "./client-D06-73M8.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queries-CwknXRs0.js
var toursQuery = (opts) => ({
	queryKey: ["tours", opts ?? {}],
	queryFn: async () => {
		let q = supabase.from("tours").select("*").eq("is_active", true).order("created_at", { ascending: false });
		if (opts?.category) q = q.eq("category", opts.category);
		if (opts?.featured) q = q.eq("is_featured", true);
		const { data, error } = await q;
		if (error) throw error;
		return data ?? [];
	}
});
var tourBySlugQuery = (slug) => ({
	queryKey: ["tour", slug],
	queryFn: async () => {
		const { data, error } = await supabase.from("tours").select("*, destination:destinations(*)").eq("slug", slug).maybeSingle();
		if (error) throw error;
		return data;
	}
});
var destinationsQuery = () => ({
	queryKey: ["destinations"],
	queryFn: async () => {
		const { data, error } = await supabase.from("destinations").select("*").order("name");
		if (error) throw error;
		return data ?? [];
	}
});
var destinationBySlugQuery = (slug) => ({
	queryKey: ["destination", slug],
	queryFn: async () => {
		const { data, error } = await supabase.from("destinations").select("*").eq("slug", slug).maybeSingle();
		if (error) throw error;
		return data;
	}
});
var testimonialsQuery = () => ({
	queryKey: ["testimonials"],
	queryFn: async () => {
		const { data, error } = await supabase.from("testimonials").select("*").eq("is_published", true).order("created_at", { ascending: false });
		if (error) throw error;
		return data ?? [];
	}
});
var galleryQuery = () => ({
	queryKey: ["gallery"],
	queryFn: async () => {
		const { data, error } = await supabase.from("gallery_items").select("*").order("sort_order");
		if (error) throw error;
		return data ?? [];
	}
});
var blogQuery = (opts) => ({
	queryKey: ["blog", opts ?? {}],
	queryFn: async () => {
		let q = supabase.from("blog_posts").select("*").order("published_at", {
			ascending: false,
			nullsFirst: false
		});
		if (opts?.onlyPublished !== false) q = q.eq("published", true);
		const { data, error } = await q;
		if (error) throw error;
		return data ?? [];
	}
});
var blogBySlugQuery = (slug) => ({
	queryKey: ["blog", slug],
	queryFn: async () => {
		const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
		if (error) throw error;
		return data;
	}
});
var activeCouponsQuery = () => ({
	queryKey: ["active-coupons"],
	queryFn: async () => {
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const { data, error } = await supabase.from("coupons").select("*").eq("is_active", true).or(`starts_at.is.null,starts_at.lte.${now}`).or(`expires_at.is.null,expires_at.gte.${now}`).order("created_at", { ascending: false });
		if (error) throw error;
		return data ?? [];
	}
});
var bestSellingToursQuery = (limitCount = 6) => ({
	queryKey: ["best-selling-tours", limitCount],
	queryFn: async () => {
		const { data, error } = await supabase.rpc("get_best_selling_tours", { limit_count: limitCount });
		if (error) throw error;
		return data ?? [];
	}
});
var tourByIdQuery = (tourId) => ({
	queryKey: ["tour-by-id", tourId],
	queryFn: async () => {
		const { data, error } = await supabase.from("tours").select("*").eq("id", tourId).maybeSingle();
		if (error) throw error;
		return data;
	}
});
var guidesQuery = () => ({
	queryKey: ["guides"],
	queryFn: async () => {
		const { data, error } = await supabase.from("guides").select("*").order("name");
		if (error) throw error;
		return data ?? [];
	}
});
var vehiclesQuery = () => ({
	queryKey: ["vehicles"],
	queryFn: async () => {
		const { data, error } = await supabase.from("vehicles").select("*").order("name");
		if (error) throw error;
		return data ?? [];
	}
});
var hotelsQuery = () => ({
	queryKey: ["hotels"],
	queryFn: async () => {
		const { data, error } = await supabase.from("hotels").select("*").order("name");
		if (error) throw error;
		return data ?? [];
	}
});
var activitiesQuery = () => ({
	queryKey: ["activities"],
	queryFn: async () => {
		const { data, error } = await supabase.from("activities").select("*").order("name");
		if (error) throw error;
		return data ?? [];
	}
});
var driversQuery = () => ({
	queryKey: ["drivers"],
	queryFn: async () => {
		const { data, error } = await supabase.from("drivers").select("*").order("name");
		if (error) throw error;
		return data ?? [];
	}
});
var tourDriversQuery = (tourId) => ({
	queryKey: ["tour-drivers", tourId],
	queryFn: async () => {
		const { data, error } = await supabase.from("tour_drivers").select("*").eq("tour_id", tourId);
		if (error) throw error;
		return data ?? [];
	}
});
var tourGuidesQuery = (tourId) => ({
	queryKey: ["tour-guides", tourId],
	queryFn: async () => {
		const { data, error } = await supabase.from("tour_guides").select("*").eq("tour_id", tourId);
		if (error) throw error;
		return data ?? [];
	}
});
var tourVehiclesQuery = (tourId) => ({
	queryKey: ["tour-vehicles", tourId],
	queryFn: async () => {
		const { data, error } = await supabase.from("tour_vehicles").select("*").eq("tour_id", tourId);
		if (error) throw error;
		return data ?? [];
	}
});
var tourHotelsQuery = (tourId) => ({
	queryKey: ["tour-hotels", tourId],
	queryFn: async () => {
		const { data, error } = await supabase.from("tour_hotels").select("*").eq("tour_id", tourId);
		if (error) throw error;
		return data ?? [];
	}
});
var tourActivitiesQuery = (tourId) => ({
	queryKey: ["tour-activities", tourId],
	queryFn: async () => {
		const { data, error } = await supabase.from("tour_activities").select("*").eq("tour_id", tourId);
		if (error) throw error;
		return data ?? [];
	}
});
var tourDeparturesQuery = (tourId) => ({
	queryKey: ["tour-departures", tourId],
	queryFn: async () => {
		const { data, error } = await supabase.from("tour_departures").select("*").eq("tour_id", tourId).order("departure_date");
		if (error) throw error;
		return data ?? [];
	}
});
var siteSettingsQuery = () => ({
	queryKey: ["site_settings"],
	queryFn: async () => {
		const { data, error } = await supabase.from("site_settings").select("key,value");
		if (error) throw error;
		const map = {};
		for (const r of data ?? []) map[r.key] = r.value ?? {};
		return map;
	}
});
function useSettings(key, defaults) {
	const { data } = useQuery(siteSettingsQuery());
	return {
		...defaults,
		...data?.[key] ?? {}
	};
}
//#endregion
export { useSettings as C, toursQuery as S, tourDeparturesQuery as _, blogQuery as a, tourHotelsQuery as b, driversQuery as c, hotelsQuery as d, siteSettingsQuery as f, tourBySlugQuery as g, tourByIdQuery as h, blogBySlugQuery as i, galleryQuery as l, tourActivitiesQuery as m, activitiesQuery as n, destinationBySlugQuery as o, testimonialsQuery as p, bestSellingToursQuery as r, destinationsQuery as s, activeCouponsQuery as t, guidesQuery as u, tourDriversQuery as v, vehiclesQuery as w, tourVehiclesQuery as x, tourGuidesQuery as y };
