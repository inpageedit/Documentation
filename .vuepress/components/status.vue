<template>
  <span
    :class="['status-tag', status]"
    :style="{ backgroundColor: color }"
    ><slot>{{ status }}</slot></span
  >
</template>

<script>
export default {
  name: "status-tag",
  props: {
    status: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="less">
.status-tag {
  padding: 2px 6px;
  margin: auto 2px;
  user-select: none;
  cursor: default;
  text-transform: uppercase;
  border-radius: 2px;
  background: #888888;
  color: #ffffff;
}

.status-tag.new,
.status-tag.ok,
.status-tag.success,
.status-tag.stable,
.status-tag.done {
  background: #6cc569;
}

.status-tag.test,
.status-tag.updated,
.status-tag.dev {
  background: #6bbfe9;
}

.status-tag.fixed {
  background: #cc69e0;
}

.status-tag.deleted,
.status-tag.error,
.status-tag.fail {
  background: #c22525;
}

.status-tag.warning,
.status-tag.progress {
  background: #ff9100;
}

/** GitHub Labels **/
.status-tag.level-1 {
  background: #ff0000;
}

.status-tag.level-2 {
  background: #ff9040;
}

.status-tag.level-3 {
  background: #6eba03;
}

.status-tag.level-4 {
  background: #dff49a;
  color: #252525;
}

.status-tag.review {
  background: #d4c5f9;
  color: #252525;
}
</style>
