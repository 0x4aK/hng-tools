<template>
  <l-layer-group>
    <l-circle
      v-for="target in selected"
      :key="target.n"
      :lat-lng="[target.y, target.x]"
      :radius="24"
      color="#fff"
      :fill="false"
      :interactive="false"
    />

    <component :is="active" />
  </l-layer-group>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState } = createNamespacedHelpers("timings");

import { LLayerGroup, LCircle } from "vue2-leaflet";

import GroundOverlay from "./Overlays/GroundOverlay.vue";
import AirOverlay from "./Overlays/AirOverlay.vue";

export default {
  components: {
    LLayerGroup,
    LCircle,
    GroundOverlay,
    AirOverlay,
  },

  data: () => ({
    overlays: [GroundOverlay, AirOverlay],
  }),

  computed: {
    active() {
      return this.overlays[this.mode] || null;
    },

    ...mapState(["mode"]),
    ...mapGetters({
      selected: "selectedBattlefieldObjects",
    }),
  },
};
</script>

<style>
.leaflet-pane .leaflet-tooltip-pane div {
  pointer-events: none !important;
}
.overlay-text {
  color: #0f0;
  font-size: 26px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
