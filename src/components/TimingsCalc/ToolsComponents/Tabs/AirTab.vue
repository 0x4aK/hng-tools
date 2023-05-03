<template>
  <v-container>
    <selected-battlefield />

    <v-row justify="center" class="ma-1">
      <v-btn-toggle v-model="selected">
        <v-btn v-for="(unit, id) in units" :key="id" :value="id">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img
                :src="require(`@/assets/img/symbols/${unit.icon}.png`)"
                width="36"
                contain
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <span>{{ unit.name }}</span>
          </v-tooltip>
        </v-btn>
      </v-btn-toggle>
    </v-row>

    <v-row align="center">
      <v-col cols="4">
        <v-switch
          v-model="transport"
          :label="transport ? 'Transport' : 'Attack'"
          color="blue"
          hide-details
          class="mt-0 transport-switch"
        />
        <v-switch v-model="ranges" label="Ranges" hide-details />
      </v-col>

      <v-col cols="8" class="d-flex justify-center">
        <mod-selector />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("timings");

import ModSelector from "../ModSelector.vue";
import selectedBattlefield from "../selectedBattlefield.vue";

export default {
  name: "Air",

  components: { ModSelector, selectedBattlefield },

  computed: {
    selected: {
      set: function (val) {
        this.$store.commit("timings/air/SET_SELECTED_UNIT", val);
      },
      get: function () {
        return this.$store.state.timings.air.selectedUnit;
      },
    },
    ranges: {
      set: function (val) {
        this.$store.commit("timings/air/SET_DRAW_RANGES", val);
      },
      get: function () {
        return this.$store.state.timings.air.drawRanges;
      },
    },
    transport: {
      set: function (val) {
        this.$store.commit("timings/air/SET_TRANSPORT", val);
      },
      get: function () {
        return this.$store.state.timings.air.isTransport;
      },
    },
    ...mapState({ units: (state) => state.air.units }),
  },
};
</script>

<style lang="scss">
.transport-switch .v-input--selection-controls__input {
  color: red;

  .v-input--switch__track {
    color: rgba(255, 0, 0, 0.5);
  }
  .v-input--switch__thumb {
    color: red;
  }
}
</style>
