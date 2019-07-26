<template>
  <div ref="myChart" class="mychart"></div>
</template>

<script>
export default {
  props: {
    chartTitle: {
      type: String,
      default: "矩状图"
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(this.$refs.myChart);
      myChart.setOption({
        title: {
          text: this.chartTitle
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>
<style lang='less' scoped>
.mychart {
  width: 100%;
  height: 300px;
}
</style>