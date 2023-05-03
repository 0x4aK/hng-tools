<template>
  <l-layer-group>
    <l-marker
      v-for="capital in capitals"
      :key="capital.name"
      pane="shadowPane"
      :lat-lng="[capital.y, capital.x]"
      :options="{ interactive: false }"
    >
      <l-icon iconUrl="/img/capital.png" :iconSize="[64, 64]" />
    </l-marker>
  </l-layer-group>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("timings");

import { LMarker, LLayerGroup, LIcon } from "vue2-leaflet";

export default {
  components: {
    LMarker,
    LLayerGroup,
    LIcon,
  },
  computed: mapGetters(["capitals"]),
};
</script>

<style></style>
