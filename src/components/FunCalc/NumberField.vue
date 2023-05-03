<template>
  <v-text-field
    class="number-field"
    :value="value"
    :label="label"
    type="number"
    min="0"
    @input="handleInput"
    @mouseover.capture="handleMouseOver"
    @mouseleave.capture="handleMouseLeave"
  >
    <div slot="append-outer" class="d-flex">
      <v-btn icon @click="handleButtons(-1)" small>
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn icon @click="handleButtons(1)" small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </v-text-field>
</template>

<script>
export default {
  props: ["value", "label"],
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    handleButtons(dir) {
      this.$emit("input", Math.max(0, this.value + dir));
    },
    handleMouseOver(e) {
      e.target.focus();
    },
    handleMouseLeave(e) {
      e.target.blur();
    },
  },
};
</script>

<style lang="scss">
.number-field {
  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      appearance: textfield;
    }
  }
}
</style>
