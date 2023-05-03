<template>
  <v-navigation-drawer app permanent mini-variant>
    <v-list nav dense>
      <v-list-item v-for="route in navRoutes" :key="route.name" link :to="route.path">
        <v-list-item-icon>
          <v-icon>{{ route.meta.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ route.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { routes } from "@/router";

export default {
  computed: {
    navRoutes() {
      return routes.filter((route) => !route.meta?.hidden);
    },
  },
};
</script>

<style></style>
