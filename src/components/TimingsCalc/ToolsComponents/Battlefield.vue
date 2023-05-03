<template>
  <v-card
    class="battlefield ma-2 d-flex align-center"
    rounded="pill"
    elevation="6"
    color="secondary"
  >
    <v-avatar size="36" color="#808080" class="mr-2">
      <img :src="`/img/maps/${id_to_name(battlefield.m)}.png`" />
    </v-avatar>

    <div class="d-block text-subtitle-1 text-truncate" style="max-width: 190px">
      {{ battlefield.n }}
    </div>

    <v-spacer />

    <div class="controls">
      <v-btn v-if="viewable" icon @click="goTo">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn v-if="closeable" icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { id_to_name } from "@/utils/battlefields";

export default {
  props: {
    battlefield: { type: Object, required: true },
    viewable: Boolean,
    closeable: Boolean,
    secondary: Boolean,
  },
  methods: {
    goTo() {
      this.$store.dispatch("timings/setView", {
        x: this.battlefield.x,
        y: this.battlefield.y,
      });
    },
    close() {
      this.$store.commit("timings/SET_SELECTED_BATTLEFIELD", {
        id: null,
        target: this.secondary ? 2 : 1,
      });
    },
    id_to_name,
  },
};
</script>

<style lang="scss">
.battlefield {
  .controls {
    button:not(:last-child) {
      margin-right: 0.3em;
    }
  }
}
</style>
