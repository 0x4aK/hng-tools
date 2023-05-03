<template>
  <v-container class="home fill-height justify-center">
    <v-card
      class="route ma-2"
      v-for="route in homeRoutes"
      :key="route.name"
      :to="route.path"
      width="360px"
      height="268px"
      :img="`/img/tools/${route.name.toLowerCase()}.png`"
    >
      <div class="route-title pa-2 text-h5">{{ route.name }}</div>
    </v-card>
  </v-container>
</template>

<script>
import { routes } from "@/router";

export default {
  name: "Home",

  computed: {
    homeRoutes() {
      return routes.filter((route) => route.meta?.showInHome);
    },
  },
};
</script>

<style lang="scss">
.route {
  .route-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }
}
</style>
