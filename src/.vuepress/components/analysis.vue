<template>
<div class="analysis-container">
  <h2>AJAX状态</h2>
  <div>请求状态：
    <status :status="loading" />
  </div>
  <h2>ECharts测试</h2>
  <div>
    <echarts :setData="charts" />
  </div>
  <h2>列表测试</h2>
  <div>
    <table style="width: 100%;">
      <tr>
        <th>日期</th>
        <th>次数</th>
      </tr>
      <tr v-for="(item, index) in analysis" :key="index">
        <th>{{ item.date.replace(/(.+)-(.+)-(.+)/gi, "$1年$2月$3日") }}</th>
        <td>{{ item.times }}</td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
// const jqeury = require("jquery");
const axios = require("axios");

export default {
  data() {
    var instance = this;
    return {
      loading: "progress",
      analysis: this.getData(),
      charts: {
        title: {
          text: "InPageEdit累计使用趋势",
          subtext: "数据读取中……",
        },
        tooltip: {
          trigger: "axis",
          // axisPointer: {
          //   type: 'cross'
          // }
        },
        dataZoom: [{
            show: true,
            realtime: true,
          },
          {
            type: "inside",
            realtime: true,
          },
        ],
        legend: {
          data: ["使用次数"],
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: {
              readOnly: true,
            },
            magicType: {
              type: ["line", "bar"],
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          data: ["加载中"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} 次",
          },
          axisPointer: {
            snap: true,
          },
        },
        series: [{
          name: "使用次数",
          type: "line",
          data: [0],
        }, ],
      },
    };
  },
  methods: {
    async getData() {
      // var res = await axios.get("https://api.wjghj.cn/inpageedit/query/wiki", {
      //   params: {
      //     sortby: "_total",
      //     sortorder: -1,
      //   },
      // });
      var res = await axios.get(
        "https://doc.wjghj.cn/inpageedit-v2/analysis/api/index.php?action=query&type=date&limit=max&from=0"
      );
      var data = res.data;

      this.loading = "done";
      this.analysis = res.data.query;

      /** 每日趋势 **/
      var dateList = [],
        dateTimes = [],
        dateTotalTimes = [];
      for (let i = 0; i < data.query.length; i++) {
        dateList.push(data.query[i]["date"]);
        dateTimes.push(data.query[i]["times"]);

        var total = Number(data.query[i]["times"]);
        if (i > 0) {
          total += Number(dateTotalTimes[i - 1]);
        }
        dateTotalTimes.push(total);
      }
      // var dateOption = {
      //   title: {
      //     subtext: "数据更新于: " + new Date().toString(),
      //   },
      //   xAxis: {
      //     data: dateList,
      //   },
      //   series: [
      //     {
      //       data: dateTimes,
      //     },
      //   ],
      // };
      var dateOption = {
        title: {
          text: "InPageEdit累计使用趋势",
          subtext: "数据更新于: " + new Date().toString(),
        },
        tooltip: {
          trigger: "axis",
          // axisPointer: {
          //   type: 'cross'
          // }
        },
        dataZoom: [{
            show: true,
            realtime: true,
          },
          {
            type: "inside",
            realtime: true,
          },
        ],
        legend: {
          data: ["使用次数"],
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: {
              readOnly: true,
            },
            magicType: {
              type: ["line", "bar"],
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          data: dateList,
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} 次",
          },
          axisPointer: {
            snap: true,
          },
        },
        series: [{
          name: "使用次数",
          type: "line",
          data: dateTimes,
        }, ],
      };
      this.charts = dateOption;
    },
  },
};
</script>
