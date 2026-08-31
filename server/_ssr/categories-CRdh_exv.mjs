import { $ as Footprints, G as Landmark, N as PawPrint, P as Mountain, Z as HandHeart, gt as Camera, lt as Compass, p as Trees } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-CRdh_exv.js
var TOUR_CATEGORIES = [
	{
		id: "cultural",
		label: "Cultural",
		icon: Landmark,
		blurb: "Heritage, art, ceremonies."
	},
	{
		id: "historical",
		label: "Historical",
		icon: Mountain,
		blurb: "Ancient sites & civilisations."
	},
	{
		id: "nature",
		label: "Nature",
		icon: Trees,
		blurb: "Forests, lakes, waterfalls."
	},
	{
		id: "wildlife",
		label: "Wildlife Safaris",
		icon: PawPrint,
		blurb: "Big Five & beyond."
	},
	{
		id: "adventure",
		label: "Adventure",
		icon: Compass,
		blurb: "Kayaks, canopy, rappel."
	},
	{
		id: "community",
		label: "Community-Based",
		icon: HandHeart,
		blurb: "Locally-hosted, ethically run."
	},
	{
		id: "trekking",
		label: "Trekking & Hiking",
		icon: Footprints,
		blurb: "Summits and ridge trails."
	},
	{
		id: "photography",
		label: "Photography",
		icon: Camera,
		blurb: "Hides, light, workshops."
	}
];
function categoryLabel(id, t) {
	const fallback = TOUR_CATEGORIES.find((c) => c.id === id)?.label ?? id;
	return t ? t(`categories.${id}.label`, { defaultValue: fallback }) : fallback;
}
function categoryBlurb(id, t) {
	const fallback = TOUR_CATEGORIES.find((c) => c.id === id)?.blurb ?? "";
	return t ? t(`categories.${id}.blurb`, { defaultValue: fallback }) : fallback;
}
//#endregion
export { categoryBlurb as n, categoryLabel as r, TOUR_CATEGORIES as t };
