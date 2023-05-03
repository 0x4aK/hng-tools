<template>
  <div class="d-flex flex-column align-center">
    <v-btn-toggle v-model="selected" mandatory>
      <v-btn :value="0">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-btn v-for="(mod, id) in modifiers" :key="id" :value="id">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require(`@/assets/img/mods/${mod.img}.png`)"
              width="24"
              contain
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <span>{{ mod.name }}</span>
        </v-tooltip>
      </v-btn>
    </v-btn-toggle>
    <v-switch v-model="ingame" label="In-game Timer" hide-details class="mt-1" />
  </div>
</template>

<script>
export default {
  computed: {
    modifiers() {
      return this.$store.state.timings.modifiers;
    },
    selected: {
      set: function (val) {
        this.$store.commit("timings/SET_SELECTED_MODIFIER", val);
      },
      get: function () {
        return this.$store.state.timings.selectedModifier;
      },
    },
    ingame: {
      set: function (val) {
        this.$store.commit("timings/SET_INGAMETIMER", val);
      },
      get: function () {
        return this.$store.state.timings.ingameTimer;
      },
    },
  },
};
</script>

<style></style>
