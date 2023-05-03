<template>
  <v-card :color="color" :disabled="disabled">
    <v-app-bar dense>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <div class="d-flex">
      <div v-for="(fields, name) in divideToColumns" :key="name" class="px-2 flex-grow-1">
        <div v-for="field in fields" :key="field.label" class="d-flex ma-1 align-center">
          <v-avatar class="mr-2" size="36">
            <v-img :src="require(`@/assets/img/unit/${field.icon}.png`)" />
          </v-avatar>

          <number-field v-model.number="field.value" :label="field.label" />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import NumberField from "./NumberField.vue";

export default {
  components: { NumberField },
  props: {
    title: String,
    category: Object,
    maxFields: Number,
    color: String,
    disabled: Boolean,
  },

  computed: {
    divideToColumns() {
      const results = {};

      for (const [index, [fieldName, field]] of Object.entries(this.category).entries()) {
        const spotIndex = Math.floor(index / this.maxFields) || 0;

        if (!results[spotIndex]) results[spotIndex] = {};
        results[spotIndex][fieldName] = field;
      }
      return results;
    },
  },
};
</script>

<style></style>
