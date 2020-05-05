<template>
  <div class="mainPage">
    <el-row>
      <el-col :md="24" :lg="7">
        <el-row style="margin:10px">
          <el-col :span="24">
            <div>
              <header class="ui-sortable-handle">
                <i class="el-icon-tickets" style="padding-left:6px;float:left;margin-top:12px"></i>
                <h3 style="margin-left:10px;margin-top:0px;float:left;font-weight: 400;font-size:14px">作业合格率</h3>
              </header>
              <div id="machineStatus" class="widget-body">
              </div>
            </div>
          </el-col>

          <el-col :span="24" style="margin-top:10px">
            <div>
              <header class="ui-sortable-handle">
                <i class="el-icon-tickets" style="padding-left:6px;float:left;margin-top:12px"></i>
                <h3 style="margin-left:10px;margin-top:0px;float:left;font-weight: 400;font-size:14px">预警农机</h3>
              </header>
              <div id="alarm" class="widget-body">
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="24" :lg="10">
        <el-row style="margin:10px">
          <el-col :span="24">
            <header class="ui-sortable-handle">
              <i class="el-icon-tickets" style="padding-left:6px;float:left;margin-top:12px"></i>
              <h3 style="margin-left:10px;margin-top:0px;float:left;font-weight: 400;font-size:14px">设备分布</h3>
            </header>
            <div id="deviceDistribute" class="widget-body" style="min-height: 518px;">
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="24" :lg="7"><div>44</div></el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'Dashboard',
    data() {
      return {
        chinaJson: {},
        machineStatusChart: null,
        alarmCharts:null,
        deviceMapChart: null,
        mapdata:[
          [114.1562575158893,32.46465301141383,10],[104.05363000809393,30.539840736893947,10],[104.05363000809393,30.539840736893947,10]
        ]
      }
    },
    mounted() {
      this.chinaJson = require('@/assets/map-data/china.json')
      this.mapdata = require('@/assets/map-data/data.json')
      this.initMachineStatusChart()
      this.initAlarmCharts()
      this.initDeviceMap()
    },
    methods: {
      initMachineStatusChart(){
        this.machineStatusChart = echarts.init(document.getElementById("machineStatus"))
        let areaData = {passArea:102,totalArea:130}
        let serData = []
        serData.push({name:'合格',value:areaData.passArea})
        serData.push({name:'不合格',value:areaData.totalArea - areaData.passArea})

        this.machineStatusChart.setOption({
          color:['#4472C5','#ED7C30','#80FF80','#FF8096','#800080'],
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 10,
            data: ['不合格', '合格'],
            textStyle:{
              color: '#ffffff'//字体颜色
            },
          },
          series: [
            {
              name: '农机状态',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: false,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: serData
            }
          ]
        })
        let _this = this
        window.addEventListener('resize', function () {
          _this.machineStatusChart.resize()
        })
      },
      initAlarmCharts(){
        this.alarmCharts = echarts.init(document.getElementById("alarm"))
        this.alarmCharts.setOption({
          color:['#313e74'],
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
              }
            },
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                type: 'solid',
                color:'#fff',
                width:'2'
              }
            },
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }]
        })
        let _this = this
        window.addEventListener('resize', function () {
          _this.alarmCharts.resize()
        })
      },
      initDeviceMap(){
        this.deviceMapChart = echarts.init(document.getElementById("deviceDistribute"))
        echarts.registerMap('china', this.chinaJson)
        this.deviceMapChart.setOption ({
          title: {
            show: false
          },
          visualMap: {
            bottom: 30,
            left:20,
            type: 'continuous',
            min: 0,
            max: 30,
            text:['High','Low'],
            realtime: false,
            calculable : true,
            color: ['#d94e5d', '#eac736', '#acb8ba'],
            //color: [ '#537b8b','#81a5b3','#c4c4c4'],
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: false,
            itemStyle: {
              normal: {
                color: '#c4c4c4',
                borderColor: '#324565'
              },
              emphasis: {
                color: '#82a5b4'
              }
            }
          },
          grid: {
            top: '20',
            left: '2%',
            right: '2%',
            bottom: '0'
          },
          series: [
            {
              name: '设备接入数',
              type: 'heatmap',
              coordinateSystem: 'geo',
              data: this.mapdata.data,
              pointSize: 6,
              blurSize:6,
            }
          ]
        })
        let _this = this
        window.addEventListener('resize', function () {
          _this.deviceMapChart.resize()
        })
      }
    }
  }
</script>
<style>
  .mainPage{
    background: url(/img/glass.jpg) no-repeat center top fixed;
    background-size: auto;
    background-size: cover;
    color: #fff;
    min-height: calc(100vh - 50px);
    position: relative;
  }
  .ui-sortable-handle{
    background: rgba(0,0,0,.5);
    height: 40px;
    padding: 0;
    line-height: 40px;
    box-shadow: none;
  }
  .widget-body{
    min-height: 230px;
    position: relative;
    padding: 0 !important;
    background: rgba(0,0,0,.18) !important;
    border-color: rgba(0,0,0,.13) !important;
  }
</style>
