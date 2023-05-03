<template>
  <div class="progress-bar">
    <div
      v-for="(bar, key) in bars"
      :key="key"
      :style="{
        width: bar.width ? `${bar.width}px` : `${(bar.value / max) * 100}%`,
        backgroundColor: bar.color,
        boxShadow: bar.value ? `0 0 5px 2px ${bar.color}70` : '',
      }"
    />
    <div class="half" :style="{ backgroundColor: halfColor }" />
  </div>
</template>

<script>
export default {
  props: {
    max: Number,
    bars: Array[Object],
    halfColor: String,
  },
};
</script>

<style lang="scss">
.progress-bar {
  white-space: nowrap;
  overflow: hidden;
  padding: 0.5em 0;
  line-height: 0;
  height: 8px;
  box-sizing: content-box;
  position: relative;

  div {
    height: 100%;
    display: inline-block;

    transition: width 0.5s ease, background-color 0.2s ease;
  }

  .half {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 2px;
  }
}
</style>
