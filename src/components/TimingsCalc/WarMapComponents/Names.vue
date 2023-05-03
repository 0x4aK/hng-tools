<template>
  <div style="display:none;" />
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("timings");

import { svgOverlay } from "leaflet";

export default {
  computed: {
    mapObject() {
      const svgEl = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );

      const bounds = [
        [0, 0],
        [20000, 20000],
      ];

      svgEl.setAttribute("viewBox", bounds.flat().join(" "));
      svgEl.classList.add("names");
      svgEl.innerHTML = Object.values(this.battlefields).reduce(
        (acc, bf) =>
          acc.concat(
            `<text class="t" x="${bf.x}" y="${bf.y + 20}">${bf.n}</text>`
          ),
        ""
      );

      return svgOverlay(svgEl, bounds, { pane: "markerPane" });
    },
    ...mapState(["battlefields", "zoom", "leaflet"]),
  },

  watch: {
    zoom: {
      immediate: true,
      handler(val) {
        if (val >= 5.5) this.mapObject.addTo(this.leaflet);
        else this.mapObject.remove();
      },
    },
  },
};
</script>

<style lang="scss">
.names {
  pointer-events: none;
  .t {
    font-weight: 900;
    fill: #fff;
    stroke: #000;
    text-anchor: middle;
    stroke-width: 1px;
    font-size: 16px;
  }
}
</style>
