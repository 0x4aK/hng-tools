<template>
  <v-card width="360">
    <v-toolbar dense>
      <v-tabs grow v-model="mode">
        <v-tab v-for="tab in tabs" :key="tab.name">
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="mode">
      <v-tab-item v-for="tab in tabs" :key="tab.name">
        <component :is="tab" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import GroundTab from "./Tabs/GroundTab.vue";
import Air from "./Tabs/AirTab.vue";
import About from "./Tabs/AboutTab.vue";

export default {
  components: {
    GroundTab,
    Air,
    About,
  },
  data: () => ({
    tabs: [GroundTab, Air, About],
  }),
  computed: {
    mode: {
      set: function(val) {
        this.$store.commit("timings/SET_MODE", val);
      },
      get: function() {
        return this.$store.state.timings.mode;
      },
    },
  },
};
</script>

<style></style>
