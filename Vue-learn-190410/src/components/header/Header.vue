<template>
  <div class="header">
    {{poiInfo.name}}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    poiInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
</style>
