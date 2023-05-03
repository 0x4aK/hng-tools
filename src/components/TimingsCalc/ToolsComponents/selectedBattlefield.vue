<template>
  <div class="selected-battlefields mb-4">
    <battlefield
      v-if="secondaryBattlefieldObject"
      :battlefield="secondaryBattlefieldObject"
      viewable
      closeable
      secondary
    />
    <div
      v-if="secondaryBattlefieldObject && primaryBattlefieldObject"
      class="d-flex justify-center flex-column"
    >
      <v-icon dark>mdi-chevron-down</v-icon>
    </div>

    <battlefield
      v-if="primaryBattlefieldObject"
      :battlefield="primaryBattlefieldObject"
      viewable
      closeable
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("timings");

import Battlefield from "./Battlefield.vue";

export default {
  name: "SelectedBattlefield",
  components: { Battlefield },
  computed: {
    ...mapGetters(["primaryBattlefieldObject", "secondaryBattlefieldObject"]),
  },
};
</script>
