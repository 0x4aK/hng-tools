<template>
  <l-layer-group :visible="zoom >= 4">
    <l-polyline
      v-for="(line, id) in toDraw"
      :key="id"
      :lat-lngs="line.coords"
      color="#808080"
      :weight="weight"
      :interactive="false"
      pane="tilePane"
    />
  </l-layer-group>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("timings");

import { LLayerGroup, LPolyline } from "vue2-leaflet";

import { getFinalCoords } from "@/utils/supplylines";

export default {
  components: {
    LLayerGroup,
    LPolyline,
  },
  computed: {
    weight() {
      return ((this.zoom - 2) / 4) * 8;
    },
    toDraw() {
      const lines = {};

      for (const [id, aps] of Object.entries(this.supplylines)) {
        const startAp = this.accesspoints[aps[0]];
        const endAp = this.accesspoints[aps[1]];

        const start = getFinalCoords(
          this.battlefields[startAp.b],
          this.templates[startAp.t]
        );
        const end = getFinalCoords(
          this.battlefields[endAp.b],
          this.templates[endAp.t]
        );

        lines[id] = {
          coords: [start, end],
          battlefields: [startAp.b, endAp.b],
        };
      }
      return lines;
    },
    ...mapState({
      battlefields: (state) => state.battlefields || null,
      accesspoints: (state) => state.accesspoints || null,
      supplylines: (state) => state.supplylines || null,
      templates: (state) => state.templates || null,
      zoom: "zoom",
    }),
  },
};
</script>

<style></style>
