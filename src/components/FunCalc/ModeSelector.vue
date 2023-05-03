<template>
  <v-card class="mode-selector" min-height="138">
    <v-item-group mandatory :value="input" @change="handleChange">
      <v-container fluid class="fill-height">
        <v-row>
          <v-col v-for="(mode, id) in modes" :key="id" cols="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                class="fill-height rounded-lg"
                dark
                @click="toggle"
                :img="`/img/modes/${mode.img}.png`"
              >
                <v-fade-transition>
                  <div
                    v-if="active"
                    class="mode-active d-flex justify-center align-center fill-height text-h5"
                  />
                </v-fade-transition>
                <div class="mode-title ma-1 text-h6 text-truncate">
                  {{ mode.label }}
                </div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-card>
</template>

<script>
export default {
  props: ["input"],

  data: () => ({
    modes: {
      0: { img: "assault", label: "Assault/Skirm" },
      1: { img: "encounter", label: "Encounter" },
      2: { img: "3way", label: "3-Way Assault" },
    },
  }),

  methods: {
    handleChange(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style lang="scss">
.mode-selector {
  > div {
    height: inherit;
  }
  .col,
  .row {
    height: inherit;
  }

  .mode-title {
    position: absolute;
    bottom: 0;
    width: 95%;
  }

  .mode-active {
    inset: 0;
    background: rgba(0, 255, 0, 0.05);
  }

  .v-item--active {
    border: 3px solid rgb(0, 255, 0);
  }
}
</style>
