import { StoreCore, createStore } from "@priolo/jon"
import { Theme } from "./utils"

export enum COLOR_VAR {
	GREEN,
	CYAN,
	MAGENTA,
	YELLOW,
	FUCHSIA,
}

const ThemeDefault: Theme = {
	palette: {
		var: [
			// green
			{ bg: "#BBFB35", fg: "#393939"},
			// cyan
			{ bg: "#10F3F3", fg: "#393939"},
			// magenta
			{ bg: "#C220FA", fg: "#393939"},
			// yellow
			{ bg: "#ebfb35", fg: "#393939"},
			// fuchsia
			{ bg: "#F51DDF", fg: "#393939"},

		],
		default: {
			bg: "#3E3E3E",
			bg2: "#525252",
			fg: "#DEDEDE",
		},
		actionsGroup: {
			bg: "#2e2e2e",
			fg: "#DEDEDE",
		}
	},

	texts: {
		title: {
			fontFamily: "Darker Grotesque",
			fontSize: "22px",
			fontWeight: 800,
		},
		row: {
			title: { fontSize: 14, fontWeight: 700 },
			subtitle: { opacity: .8, fontSize: 12, fontWeight: 500 },
		},
		button: { fontSize: 10, fontWeight: 800 },
		rowButton: { fontSize: 14, fontWeight: 800, fontFamily: "Darker Grotesque" },
	},

	shadows: [
		"2px 2px 2px 0px rgba(0, 0, 0, 0.40)"
	],
}

const setup = {

	state: {
		/** TEMA GLOBALE */
		theme: ThemeDefault
	},

	getters: {
	},

	actions: {

	},

	mutators: {
		setTheme: (theme: Theme) => ({ theme }),
	},
}

export type LayoutState = typeof setup.state
export type LayoutGetters = typeof setup.getters
export type LayoutActions = typeof setup.actions
export type LayoutMutators = typeof setup.mutators
export interface LayoutStore extends StoreCore<LayoutState>, LayoutGetters, LayoutActions, LayoutMutators {
	state: LayoutState
}
const store = createStore(setup) as LayoutStore
export default store

