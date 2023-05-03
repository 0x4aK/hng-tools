<template>
  <l-layer-group :visible="zoom >= 3.5">
    <l-circle
      v-for="(battlefield, id) in battlefields"
      :key="id"
      :lat-lng="[battlefield.y, battlefield.x]"
      :radius="16"
      color="#000"
      pane="markerPane"
      fillColor="#808080"
      :fillOpacity="1"
      @click="setTarget(id, 1)"
      @contextmenu="setTarget(id, 2)"
    />
  </l-layer-group>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("timings");

import { LLayerGroup, LCircle } from "vue2-leaflet";

export default {
  components: {
    LLayerGroup,
    LCircle,
  },
  computed: mapState({
    battlefields: (state) => state.battlefields || null,
    zoom: "zoom",
  }),
  methods: {
    setTarget(id, target) {
      this.$store.commit("timings/SET_SELECTED_BATTLEFIELD", { id, target });
    },
  },
};
</script>

<style></style>
