<template>
  <v-container>
    <h5 class="text-h5 text-center">AT Timings Calc</h5>
    <div class="text-caption text-center">V {{ version }}</div>

    <p class="text-body-2 mt-3">
      New version of your favorite AT timings calc. This time more accurate and good-looking than
      the old one.
    </p>

    <v-list subheader dense>
      <v-subheader>Features</v-subheader>
      <v-list-item v-for="(feature, index) in features" :key="index">
        <v-list-item-icon class="mr-2">
          <v-icon :color="feature.color">
            {{ feature.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content class="text-body-2">
          {{ feature.text }}
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <p class="text-body-2 mt-3">
      When <span class="font-italic">insta-blocking</span>, remembe that there is around 10 second
      desync between <code>WarMap</code> and
      <code>In-game</code>
    </p>

    <div class="d-flex justify-center align-center">
      <span class="mr-4">Links:</span>
      <a href="https://discord.gg/kB6fseV" target="_blank">
        <v-avatar color="blue" size="36">
          <img src="/img/1stJ.jpg" alt="1st J" />
        </v-avatar>
      </a>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "About",

  data: () => ({
    features: [
      {
        icon: "mdi-timer-outline",
        color: "pink",
        text: "Get accurate timings between the cities",
      },
      {
        icon: "mdi-folder-star-outline",
        color: "yellow",
        text: "Includes all the ATs",
      },
      {
        icon: "mdi-airplane",
        color: "green",
        text: "See how far your planes can go",
      },
      {
        icon: "mdi-account-check-outline",
        color: "cyan",
        text: "General with logistics badge? No problem",
      },
    ],
  }),

  computed: mapState(["version"]),
};
</script>

<style></style>
