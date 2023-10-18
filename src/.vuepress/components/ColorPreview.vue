<template>
  <span class="color-preview"
    ><span class="color-block" :style="{ backgroundColor: color }"></span
    >{{ color }}</span
  >
</template>

<script>
export default {
  name: 'ColorPreview',
  props: {
    color: {
      type: String,
      default: '#000000',
    },
  },
}
</script>

<style lang="scss">
.color-preview {
  margin: 0 2px 0 2px;

  .color-block {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    margin-left: 0.2em;
    margin-right: 0.5em;
    border-radius: 50%;
  }
}
</style>
