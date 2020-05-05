<template>
  <!-- 机构报表 -->
  <div>
    <div class="filter-container">
      <label>开始日期：</label>
      <el-date-picker v-model="searchFilter.dateFrom"
                      size="small"
                      type="date" />

      <label>结束日期：</label>
      <el-date-picker v-model="searchFilter.dateTo"
                      size="small"
                      type="date" />

      <el-button type="primary"
                 size="small"
                 class="search-btn">
        查询
      </el-button>
      <el-button size="small"
                 class="reset-btn"
                 @click="handlePrintReport">
        打印
      </el-button>
    </div>
    <!-- print-start -->
    <div ref="printContent"
         class="report-container print-wrap"
         size="A4">
      <div class="print-table statistics">
        <table>
          <tr>
            <th colspan="6">保护耕地情况统计</th>
          </tr>
          <tr>
            <td class="bold">地区</td>
            <td colspan="2">管理员</td>
            <td class="bold">统计时间</td>
            <td colspan="2">2019-01-01至2019-12-31</td>
          </tr>
          <tr>
            <td class="bold">作业面积统计（亩</td>
            <td>1024068.0</td>
            <td class="bold">作业里程统计（公里）</td>
            <td>293839.0</td>
            <td class="bold">农机数量统计</td>
            <td>750</td>
          </tr>
        </table>
      </div>
      <div class="print-table detail">
        <table>
          <tr>
            <th colspan="7">农机作业日报详细信息</th>
          </tr>
          <tr>
            <td>区域</td>
            <td>面积(亩)</td>
            <td>达标面积(亩)</td>
            <td>重复面积(亩)</td>
            <td>里程(公里)</td>
            <td>深度(厘米)</td>
            <td>农机数量</td>
          </tr>
          <tr v-for="(item,index) in detailList"
              :key="index">
            <td>
              <el-button size="mini"
                         type="primary">
                {{ item.zone }}
              </el-button>
            </td>
            <td>{{ item.area }}</td>
            <td>{{ item.areaStandard }}</td>
            <td>{{ item.areaRepeat }}</td>
            <td>{{ item.mileage }}</td>
            <td>{{ item.depth }}</td>
            <td>{{ item.machineNumber }}</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- print-end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchFilter: {
        dateFrom: '',
        dateTo: ''
      },
      detailList: [
        {
          zone: '全部',
          area: 110.79,
          areaStandard: 0.0,
          areaRepeat: 0.0,
          mileage: 44.64,
          depth: 0.0,
          machineNumber: 2
        },
        {
          zone: '辽宁省',
          area: 1021040.46,
          areaStandard: 890762.13,
          areaRepeat: 139.26,
          mileage: 292868.24,
          depth: 33.61,
          machineNumber: 747
        },
        {
          zone: '安徽省',
          area: 2917.18,
          areaStandard: 2460.74,
          areaRepeat: 0.0,
          mileage: 926.98,
          depth: 38.96,
          machineNumber: 1
        }
      ]
    }
  },
  methods: {
    handlePrintReport() {
      console.log(arguments)

      this.$print(this.$refs.printContent)

      return
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-container {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.report-container {
  padding: 20px;
  text-align: center;
}

@media print {
  // 强制转为黑白
  * {
    color: #000 !important;
  }
  // 避免表格内部分页打印
  tr,
  td,
  th {
    page-break-inside: avoid;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    background: white;
    // width: 100%;
    // height: 100%;
    // overflow: hidden;
    // width: 210mm;
  }
  .print-wrap[size="A4"] {
    width: 280mm;
    margin-bottom: 0.5cm;
    // display: block;
    // margin: 0 auto;
    // padding: 0;
    // box-shadow: 0;
    // background: white;
    // // height: 29.7cm;
  }
}
.print-table {
  margin: 10px 0;
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    text-align: center;
    td,
    th {
      border: 1px solid #ccc;
      line-height: 60px;
    }
    th {
      font-size: 22px;
      font-weight: bold;
      color: #317eac;
    }
    td {
      font-size: 14px;
      &.bold {
        font-weight: 500;
      }
    }
    tr:nth-child(odd) {
      background: #f9f9f9;
    }
  }
  &.detail {
    td {
      line-height: 40px;
    }
  }
}
</style>
