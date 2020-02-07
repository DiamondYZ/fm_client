<template>
  <div class="chart-container">
    <div class="left-chart">
      <map-chart id="chinaMapChart" height="100%" width="100%" />
    </div>
    <div class="right-chart">
      <bar-chart id="areaBarChart" height="100%" width="100%" />
    </div>
  </div>
</template>

<script>
import MapChart from '@/components/Charts/ChinaMap'
import BarChart from '@/components/Charts/BarChart'

export default {
  name: 'Charts',
  components: { MapChart, BarChart }
}
</script>

<style lang='scss' scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 100%;
  .left-chart,
  .right-chart {
    position: relative;
    width: 48%;
    height: 100%;
  }
  .left-chart {
    float: left;
  }
  .right-chart {
    float: right;
  }
}
</style>
