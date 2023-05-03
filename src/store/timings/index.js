import air from "./air";
import ground from "./ground";

export default {
  namespaced: true,

  state: () => ({
    zoom: null,
    downloadsDone: false,
    mode: 0,

    leaflet: null,

    primaryBattlefield: null,
    secondaryBattlefield: null,

    ingameTimer: false,
    selectedModifier: 0,
    modifiers: Object.freeze({
      1: { name: "Logistics Bronze", img: "bronze", multiplier: 0.9 },
      2: { name: "Logistics Silver", img: "silver", multiplier: 0.85 },
      3: { name: "Logistics Gold", img: "gold", multiplier: 0.8 },
    }),
  }),

  mutations: {
    SET_ZOOM: (state, payload) => {
      state.zoom = payload;
    },
    SET_MODE: (state, payload) => {
      state.mode = payload;
    },
    SET_DATA: (state, data) => {
      state[data.name] = Object.freeze(data.data);
    },
    SET_DOWNLOADS_DONE: (state, payload) => {
      state.downloadsDone = payload;
    },
    SET_SELECTED_BATTLEFIELD: (state, payload) => {
      if (payload?.target === 2) {
        if (state.primaryBattlefield && state.primaryBattlefield == payload?.id) return;

        state.secondaryBattlefield = state.secondaryBattlefield != payload?.id ? payload.id : null;
      } else {
        if (state.primaryBattlefield == payload?.id) {
          state.primaryBattlefield = null;
        } else {
          if (state.secondaryBattlefield == payload.id) state.secondaryBattlefield = null;
          state.primaryBattlefield = payload.id;
        }
      }
    },
    SET_LEAFLET: (state, payload) => {
      state.leaflet = payload;
    },
    SET_SELECTED_MODIFIER: (state, payload) => {
      state.selectedModifier = payload;
    },
    SET_INGAMETIMER: (state, payload) => {
      state.ingameTimer = payload;
    },
  },

  actions: {
    downloadData: async ({ dispatch, commit }) => {
      Promise.all(
        ["accesspoints", "battlefields", "capitals", "supplylines", "templates"].map((datapoint) =>
          dispatch("downloadDatapoint", datapoint)
        )
      ).then(() => {
        commit("SET_DOWNLOADS_DONE", true);
      });
    },

    downloadDatapoint: async ({ commit }, datapoint) => {
      const resp = await fetch(`./data/${datapoint}.json`);
      const json = await resp.json();

      commit("SET_DATA", { name: datapoint, data: json });
    },

    setView: ({ state }, coords) => {
      state.leaflet.setView([coords.y, coords.x], 6);
    },

    setViewById: ({ state }, id) => {
      const target = state.battlefields[id];
      state.leaflet.setView([target.y, target.x], 6);
    },
  },

  getters: {
    capitals: (state) => state.capitals.map((id) => state.battlefields[id]),
    primaryBattlefieldObject: (state) => state.battlefields[state.primaryBattlefield] || null,
    secondaryBattlefieldObject: (state) => state.battlefields[state.secondaryBattlefield] || null,
    selectedModifierObject: (state) => {
      return state.modifiers[Number(state.selectedModifier)] || null;
    },
    selectedBattlefieldObjects: (_state, getters) =>
      [getters.primaryBattlefieldObject, getters.secondaryBattlefieldObject].filter(
        (battlefield) => battlefield != null
      ),
  },

  modules: { air, ground },
};
