<template>
  <v-card>
    <v-toolbar>
      <v-text-field
        label="Search"
        v-model="input"
        clearable
        hide-details
        dense
        solo
        prepend-inner-icon="mdi-magnify"
        append-outer-icon="mdi-chevron-right"
        @click:append-outer="submit"
        @keyup.enter="submit"
      />
    </v-toolbar>

    <v-virtual-scroll
      :items="results"
      item-height="48"
      max-height="240"
      min-height="0"
      bench="5"
    >
      <template v-slot:default="{ item }">
        <v-list-item @click="search(item.id)">
          <v-list-item-avatar size="30">
            <v-avatar size="30" color="#808080">
              <img :src="`/img/maps/${id_to_name(item.m)}.png`" />
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("timings");
import { id_to_name } from "@/utils/battlefields";

export default {
  data: () => ({
    input: "",
  }),
  methods: {
    search(id) {
      this.input = "";
      if (!id) return;

      this.$store.commit("timings/SET_SELECTED_BATTLEFIELD", { id });
      this.$store.dispatch("timings/setViewById", id);
    },
    submit() {
      this.search(this.results[0]?.id);
    },
    id_to_name,
  },
  computed: {
    results() {
      if (!this.input) return [];

      const results = [];
      const input = this.input.toLowerCase();

      for (const [id, battlefield] of Object.entries(this.battlefields)) {
        if (battlefield.n.toLowerCase().startsWith(input))
          results.push({ id: id, ...battlefield });
      }

      return results;
    },
    ...mapState(["battlefields"]),
  },
};
</script>

<style></style>
