<template>
  <div :class="['infobox', type]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "infobox",
  props: {
    type: {
      type: String,
      default: "info",
    }
  },
};
</script>

<style>
/** 信息框 **/
.infobox {
  color: rgba(0, 0, 0, 0.7);
  margin: 1.5625em 0;
  padding: 0.6rem;
  overflow: hidden;
  font-size: 1em;
  page-break-inside: avoid;
  border-left: 0.3rem solid #00b8d4;
  border-radius: 0.3rem;
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.05),
    0 0 0.05rem rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
}

.dark-theme .infobox {
  background: #151515;
  color: #dfdfdf;
}

.infobox .title {
  position: relative;
  margin: -0.6rem -0.6rem 0.8em -0.6rem !important;
  padding: 0.4rem 0.6rem 0.4rem 2.5rem;
  font-weight: 700;
  background-color: rgba(66, 185, 131, 0.1);
}

.infobox .title::before {
  position: absolute;
  top: 0.9rem;
  left: 1rem;
  width: 12px;
  height: 12px;
  background-color: #42b983;
  border-radius: 50%;
  content: " ";
}

.infobox > .title,
.infobox.todo > .title {
  background-color: rgba(0, 184, 212, 0.1);
}

.infobox.warning > .title,
.infobox.attention > .title,
.infobox.caution > .title {
  background-color: rgba(255, 145, 0, 0.1);
}

.infobox.failure > .title,
.infobox.missing > .title,
.infobox.fail > .title,
.infobox.error > .title {
  background-color: rgba(255, 82, 82, 0.1);
}

.infobox.info,
.infobox.todo {
  border-color: #00b8d4;
}

.infobox.success,
.infobox.done {
  border-color: #05ad38;
}

.infobox.warning,
.infobox.attention,
.infobox.caution {
  border-color: #ff9100;
}

.infobox.failure,
.infobox.missing,
.infobox.fail,
.infobox.error {
  border-color: #ff5252;
}

.infobox.infobox > .title::before,
.infobox.todo > .title::before {
  background-color: #00b8d4;
  border-radius: 50%;
}

.infobox.success > .title::before,
.infobox.done > .title::before {
  background-color: #05ad38;
  border-radius: 50%;
}

.infobox.warning > .title::before,
.infobox.attention > .title::before,
.infobox.caution > .title::before {
  background-color: #ff9100;
  border-radius: 50%;
}

.infobox.failure > .title::before,
.infobox.missing > .title::before,
.infobox.fail > .title::before,
.infobox.error > .title::before {
  background-color: #ff5252;
  border-radius: 50%;
}

.infobox > :last-child {
  margin-bottom: 0 !important;
}
</style>
