<template>
  <span class="color-preview"
    ><span class="color-block" :style="{ backgroundColor: color }"></span
    >{{ color }}</span
  >
</template>

<script>
export default {
  name: "ColorPreview",
  props: {
    color: {
      type: String,
      default: "#000000",
    },
  },
};
</script>

<style lang="less">
.color-preview {
  margin: 0 2px 0 2px;

  .color-block {
    display: inline-block;
    width: 12px;
    height: 12px;
    box-shadow: 0 0 0 1px #aaaaaa;
    margin-right: 4px;
  }
}
</style>
