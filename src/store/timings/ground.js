const searchUnits = (units, key) => {
  for (const obj of Object.values(units)) {
    if (obj[key]) return obj[key];
  }
};

export default {
  namespaced: true,

  state: () => ({
    units: Object.freeze({
      infantry: {
        1: { name: "Guard", icon: "guard", speed: 0.48 },
        2: { name: "Infantry", icon: "infantry", speed: 0.6 },
        3: { name: "Bikes", icon: "bikes", speed: 1.8 },
        4: { name: "Cars", icon: "cars", speed: 1.56 },
        5: { name: "APCs", icon: "apcs", speed: 1.44 },
      },
      recons: {
        6: { name: "Recon", icon: "recons", speed: 0.72 },
        7: { name: "Recon bikes", icon: "motorecons", speed: 1.98 },
        8: { name: "Recon tanks", icon: "tankrecons", speed: 1.68 },
      },
      tanks: {
        9: { name: "Light", icon: "light", speed: 0.96 },
        10: { name: "Medium", icon: "medium", speed: 0.54 },
        11: { name: "Heavy", icon: "heavy", speed: 0.45 },
        12: { name: "Tank Destroyers", icon: "td", speed: 0.72 },
        13: { name: "Heavy TD", icon: "heavytd", speed: 0.45 },
      },
    }),

    lineColor: true,
    selectedUnit: null,
  }),

  mutations: {
    SET_LINE_COLOR: (state, payload) => {
      state.lineColor = payload;
    },
    SET_SELECTED_UNIT: (state, payload) => {
      state.selectedUnit = payload;
    },
  },

  getters: {
    selectedUnitObject: (state) => {
      if (!state.selectedUnit) return null;

      return searchUnits(state.units, Number(state.selectedUnit)) || null;
    },
  },
};
