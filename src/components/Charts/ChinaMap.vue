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
      dataList: [
        // value 字端必须，否则图例无法联动
        { name: '黑龙江', value: 123, area: 121, machineNum: 111 },
        { name: '北京', value: 12221, area: 121, machineNum: 111 },
        { name: '四川', value: 33121, area: 121, machineNum: 1112 },
        { name: '新疆', value: 82121, area: 121, machineNum: 111 },
        { name: '福建', value: 61231, area: 121, machineNum: 111 }
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
      // for ref：  https://www.cnblogs.com/demodashi/p/10492708.html
      this.chart.setOption({
        title: {
          text: '区域面积统计',
          subtext: '各地区面积数据'
        },
        tooltip: {
          formatter: function(params, ticket, callback) {
            return (
              params.name + '-数据统计' +
              '<br />' +
              '作业面积' +
              '：' +
              (params.data ? params.data.area || 0 : 0) +
              '亩' +
              '<br />' +
              '作业农机台数' +
              '：' +
              (params.data ? params.data.machineNum || 0 : 0) +
              '台'
            )
          }
        },
        visualMap: {
          min: 0,
          max: 100000,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],
          inRange: {
            color: ['#12cad6', '#52de97', '#fddb3a', '#e32249']
          },
          show: true
        },
        geo: {
          map: 'china',
          roam: false,
          zoom: 1.23,
          label: {
            normal: {
              show: true,
              fontSize: '10',
              color: 'rgba(0,0,0,0.7)'
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: '#F3B329',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'map',
            geoIndex: 0,
            data: this.dataList
          }
        ]
      })
    }
  }
}
</script>
