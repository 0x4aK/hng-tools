<template>
  <v-container>
    <selected-battlefield />

    <v-row justify="center" class="ma-1">
      <v-btn-toggle v-model="selected">
        <v-btn v-for="(unit, id) in units.infantry" :key="id" :value="id">
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

    <v-row>
      <v-expansion-panels accordion flat>
        <v-expansion-panel>
          <v-expansion-panel-header>More options</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="d-flex flex-column">
              <v-btn-toggle v-model="selected">
                <v-btn v-for="(unit, id) in units.recons" :key="id" :value="id">
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

              <v-btn-toggle v-model="selected" class="mt-1">
                <v-btn v-for="(unit, id) in units.tanks" :key="id" :value="id">
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
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-row align="center">
      <v-col cols="4">
        <v-switch v-model="color" label="Line Color" color="#6b56d6" hide-details class="mt-0" />
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
  name: "Ground",

  components: { ModSelector, selectedBattlefield },

  computed: {
    color: {
      set: function (val) {
        this.$store.commit("timings/ground/SET_LINE_COLOR", val);
      },
      get: function () {
        return this.$store.state.timings.ground.lineColor;
      },
    },
    selected: {
      set: function (val) {
        this.$store.commit("timings/ground/SET_SELECTED_UNIT", val);
      },
      get: function () {
        return this.$store.state.timings.ground.selectedUnit;
      },
    },

    ...mapState({ units: (state) => state.ground.units }),
  },
};
</script>

<style></style>
