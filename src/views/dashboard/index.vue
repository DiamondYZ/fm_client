<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <div class="data-source-switch">
      <div v-for="(item,index) in dataSourceList"
           :key="index"
           :class="{'chosen':item.chosen}"
           class="data-source-tab">
        <svg-icon icon-class="calendar-month-outline" />
        {{ item.name }}
      </div>
    </div>
    <div class="statistics-wrap">
      <div class="statistic-item">
        <div class="icon" style="background: #f0134d">
          <svg-icon icon-class="flag" />
        </div>
        <div class="description">
          <p class="title">当季农机台数</p>
          <p class="detail">10台</p>
        </div>
      </div>
      <div class="statistic-item">
        <div class="icon" style="background: #ff6f5e">
          <svg-icon icon-class="flag" />
        </div>
        <div class="description">
          <p class="title">当季总作业面积</p>
          <p class="detail">511亩</p>
        </div>
      </div>
      <div class="statistic-item">
        <div class="icon" style="background: #5f6caf">
          <svg-icon icon-class="flag" />
        </div>
        <div class="description">
          <p class="title">开始作业时间</p>
          <p class="detail">2019-11-03</p>
        </div>
      </div>
      <div class="statistic-item">
        <div class="icon" style="background: #40bfc1">
          <svg-icon icon-class="flag" />
        </div>
        <div class="description">
          <p class="title">作业截止时间</p>
          <p class="detail">2019-11-09</p>
        </div>
      </div>
    </div>
    <h2 class="chart-title">数据总览</h2>
    <div class="chart-section">
      <dashboard-chart />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import DashboardChart from './components/Charts'

export default {
  name: 'Dashboard',
  components: {
    DashboardChart
  },
  data() {
    return {
      dataSourceList: [
        {
          chosen: true,
          name: '托管作业',
          id: 1
        },
        {
          chosen: false,
          name: '托管耕地',
          id: 2
        },
        {
          chosen: false,
          name: '托管播种',
          id: 3
        },
        {
          chosen: false,
          name: '托管防治',
          id: 4
        },
        {
          chosen: false,
          name: '托管收获',
          id: 5
        },
        {
          chosen: false,
          name: '秸秆还田',
          id: 6
        },
        {
          chosen: false,
          name: '免耕播种',
          id: 7
        },
        {
          chosen: false,
          name: '植保作业',
          id: 8
        },
        {
          chosen: false,
          name: '收获作业',
          id: 9
        },
        {
          chosen: false,
          name: '插秧作业',
          id: 10
        },
        {
          chosen: false,
          name: '水田旋耕',
          id: 11
        },
        {
          chosen: false,
          name: '水田整地',
          id: 12
        },
        {
          chosen: false,
          name: '深翻作业',
          id: 13
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    .data-source-switch {
      .data-source-tab {
        display: inline-block;
        border: 1px solid #ccc;
        padding: 8px 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        &.chosen {
          background: #eeeeee;
        }
      }
    }
    .statistics-wrap {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
    }
    .statistic-item {
      display: inline-block;
      height: 80px;
      width: 22%;
      // border: 1px solid #eee;
      box-shadow: 1px 1px 3px #999;
      .icon {
        float: left;
        width: 80px;
        height: 100%;
        background: crimson;
        color: white;
        text-align: center;
        line-height: 80px;
        .svg-icon {
          width: 60px;
          height: 60px;
          vertical-align: middle;
        }
      }
      .description {
        float: left;
        padding: 0 20px 0 10px;
        .title, .detail {
          margin: 0;
          font-size: 16px;
          font-weight: 200;
          text-align: left;
          line-height: 2;
        }
        .detail {
          font-weight: bold;
        }
      }
    }

  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.chart-title {
  margin: 0;
  margin-top: 20px;
  padding: 20px;
  font-size: 22px;
  text-align: center;
  background: #f6f6f6;
  border-bottom: 1px solid #ddd;
}
.chart-section {
  width: 100%;
  height: 560px;
  padding: 20px;
  background: #f6f6f6;
}
</style>
