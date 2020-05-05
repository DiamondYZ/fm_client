<template>
  <div style="width:calc(100%);height:505px;"  id="home_page_map"></div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'deviceMap',
    data () {
      return {
        series: [],
        mapChart: {},
        chinaJson: {},
        cityData: []
      }
    },
    mounted () {
      this.mapChart = echarts.init(document.getElementById('home_page_map'))
      this.chinaJson = require('@/assets/map-data/china.json')
      this.deviceMap(this.systemId)
    },
    methods: {
      deviceMap(systemId) {
        this.mapChart.clear()
        var _this = this
        let titleData = ['北京','福州','深圳']
        let series = []
        let cityData = [
          {name:'北京',value:[116.39564503787867,39.92998577808024,221]},
          {name:'福州',value:[119.33022110712668,26.04712549657293,813]},
          {name:'深圳',value:[114.0259736573215,22.546053546205247,432]},
          {name:'青岛',value:[114.52208184420766,38.048958314615454,127]},
          {name:'郑州',value:[113.64964384986449,34.756610064140254,543]}
        ]
        let totalCount = 0;
        cityData.map(function (item) {
          totalCount += item.value[2]
        })
        echarts.registerMap('china', this.chinaJson)
        this.mapChart.setOption({
          backgroundColor:'rgba(128, 128, 128, 0.1)',
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#EFEFEF',
                borderColor: '#CCC',
              },
              emphasis: {
                areaColor: '#E5E5E5'
              }
            }
          },
          grid: {
            top: '20',
            left: '2%',
            right: '2%',
            bottom: '0'
          }
        })

        cityData.map(function (item) {
          series.push({
            name: item.name,
            type: 'pie',
            radius: 6 + item.value[2] / totalCount * 15,
            center: _this.mapChart.convertToPixel('geo', [item.value[0], item.value[1]]),
            data: [
              {name: item.name, value: [item.value[2]]}
            ],
            itemStyle : {
              normal : {
                label : {
                  show : false
                },
                labelLine : {
                  show : false
                }
              },
              emphasis : {
                label : {
                  show : true,
                  position : 'center',
                  textStyle : {
                    fontSize : '13'
                  }
                }
              }
            },
            label: {
              normal: {
                formatter: function (data) {
                  var result = ''
                  result += data.name + '：' + data.value[0]
                  return result
                }
              }
            }
          })
        })

        var legend = {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: titleData,
        }
        this.mapChart.setOption({series: series})
        this.mapChart.setOption({legend: legend})
        setTimeout(() => {
          _this.mapChart.resize()
        }, 200)
      }
    }
  }
</script>
