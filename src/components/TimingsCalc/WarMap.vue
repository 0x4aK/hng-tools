<template>
  <l-map
    ref="map"
    style="position: fixed; inset: 0; background: #121212"
    :minZoom="1"
    :maxZoom="6"
    :zoom="3"
    :options="{
      attributionControl: false,
      zoomControl: false,
      zoomSnap: 0.25,
      preferCanvas: true,
      doubleClickZoom: false,
    }"
    :center="[5276.89111328125, 7737.8759765625]"
    :maxBounds="bounds.pad(0.1)"
    :crs="crs"
    @update:zoom="setZoom"
    @ready="setLeaflet"
  >
    <l-tile-layer url="/warmap/zoom{z}/{y}/{x}.jpg" :options="{ bounds, tile: tileTransform }" />

    <component v-for="(drawable, index) in drawables" :key="index" :is="drawable" />
  </l-map>
</template>

<script>
import { mapActions } from "vuex";
import { Util, CRS, Transformation, latLngBounds } from "leaflet";

import { LMap, LTileLayer } from "vue2-leaflet";

import Capitals from "./WarMapComponents/Capitals.vue";
import Battlefields from "./WarMapComponents/Battlefields.vue";
import Supplylines from "./WarMapComponents/Supplylines.vue";
import Overlay from "./WarMapComponents/Overlay.vue";
import Names from "./WarMapComponents/Names.vue";

export default {
  components: {
    LMap,
    LTileLayer,
    Capitals,
    Battlefields,
    Supplylines,
    Names,
    Overlay,
  },

  data: () => ({
    bounds: latLngBounds([
      [0, 0],
      [16384, 16384],
    ]),
    crs: Util.extend(CRS.Simple, {
      transformation: new Transformation(0.015625, 0, 0.015625, 0),
    }),
    drawables: [Overlay, Battlefields, Supplylines, Capitals, Names],
  }),

  methods: {
    setZoom() {
      this.$store.commit("timings/SET_ZOOM", this.$refs.map.mapObject.getZoom());
    },
    setLeaflet() {
      this.$store.commit("timings/SET_LEAFLET", this.$refs.map.mapObject);
    },
    ...mapActions("timings", ["setViewById"]),
  },

  mounted() {
    this.setZoom();
  },
};
</script>

<style></style>
