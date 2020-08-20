<template>
  <v-chart :options="setData" />
</template>

<style lang="less">
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  min-height: 400px;
}
</style>

<script>
import ECharts from "vue-echarts";
import "echarts";

export default {
  components: {
    "v-chart": ECharts,
  },
  props: {
    setData: {
      type: Object,
      // default: {
      //   xAxis: {
      //     type: "category",
      //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      //   },
      //   yAxis: {
      //     type: "value",
      //   },
      //   series: [
      //     {
      //       data: [120, 200, 150, 80, 70, 110, 130],
      //       type: "bar",
      //     },
      //   ],
      // },
    },
  },
  data() {
    return {};
  },
};
</script>
