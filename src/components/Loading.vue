<template>
  <div
    class="loading fullscreen d-flex flex-column justify-center align-center"
  >
    <div class="text-h4">{{ $props.title }}</div>
    <img src="/img/loading.png" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading {
  z-index: 100;
  user-select: none;

  img {
    animation: spin 2s infinite ease-in-out;
    filter: invert(1);
  }
}
</style>
