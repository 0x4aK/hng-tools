export default {
  namespaced: true,

  state: () => ({
    units: Object.freeze({
      1: {
        name: "Recon planes",
        icon: "reconplanes",
        speed: 3.0,
        attack: 550,
        transport: 1850,
      },
      2: {
        name: "Fighters",
        icon: "mediumplanes",
        speed: 5.2,
        attack: 950,
        transport: 2850,
      },
      3: {
        name: "Heavy planes",
        icon: "heavyplanes",
        speed: 5.6,
        attack: 1650,
        transport: 3450,
      }, //thx fatal-is
      4: {
        name: "Small para",
        icon: "smallpara",
        speed: 3.0,
        attack: 1950,
        transport: 3800,
      },
      5: {
        name: "Big para",
        icon: "bigpara",
        speed: 2.7,
        attack: 1850,
        transport: 3600,
      }, //thx Vareno
    }),

    selectedUnit: null,

    drawRanges: false,
    isTransport: false,
  }),

  mutations: {
    SET_SELECTED_UNIT: (state, payload) => {
      state.selectedUnit = payload;
    },
    SET_DRAW_RANGES: (state, payload) => {
      state.drawRanges = payload;
    },
    SET_TRANSPORT: (state, payload) => {
      state.isTransport = payload;
    },
  },

  getters: {
    selectedUnitObject: (state) => {
      return state.units[Number(state.selectedUnit)] || null;
    },
    airfields: (_state, _getters, rootState) => {
      return Object.fromEntries(
        Object.entries(rootState.timings.battlefields).filter(
          // eslint-disable-next-line no-unused-vars
          ([key, value]) => [3, 4].includes(value["m"])
        )
      );
    },
  },
};
