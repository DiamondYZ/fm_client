<template>
  <div :id="id"
       :class="className"
       :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'

import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null,
      dataLabel: ['黑龙江', '北京', '四川', '新疆', '福建'],
      dataList: [
        {
          name: '目标',
          type: 'bar',
          itemStyle: {
            color: '#c7f0db'
          },
          data: [18203, 23489, 29034, 104970, 131744]
        },
        {
          name: '实际',
          type: 'bar',
          itemStyle: {
            color: '#52de97'
          },
          data: [19325, 23438, 31000, 121594, 134141]
        }
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        title: {
          text: '作业面积统计',
          subtext: '面积（亩）'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['目标', '实际']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: this.dataLabel
        },
        series: this.dataList
      })
    }
  }
}
</script>
