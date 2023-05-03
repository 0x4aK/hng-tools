<template>
  <div class="timings">
    <v-fade-transition>
      <war-map v-if="downloadsDone" />
      <loading v-else title="Loading" />
    </v-fade-transition>

    <search v-if="downloadsDone" class="float-left ma-2" />
    <tool-box v-if="downloadsDone" class="float-right ma-2" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("timings");

import timings from "@/store/timings";

import Loading from "@/components/Loading.vue";
import WarMap from "@/components/TimingsCalc/WarMap.vue";
import ToolBox from "@/components/TimingsCalc/ToolsComponents/ToolBox.vue";
import Search from "@/components/TimingsCalc/ToolsComponents/Search.vue";

export default {
  name: "TimingsCalc",
  components: {
    WarMap,
    Loading,
    ToolBox,
    Search,
  },
  computed: mapState(["downloadsDone"]),

  created() {
    this.$store.registerModule("timings", timings);
    this.$store.dispatch("timings/downloadData");
  },
  beforeDestroy() {
    this.$store.unregisterModule("timings");
  },
};
</script>
