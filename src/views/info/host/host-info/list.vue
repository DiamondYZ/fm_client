<template>
  <div class="host-info-list-container">
    <div class="header clearfix">
      <div class="title">
        <svg-icon icon-class="calendar-month" />
        农机当季作业详情表管理
      </div>
      <div class="button-group">
        <el-button type="info"
                   size="small"
                   class="hide-filter-btn">
          <svg-icon icon-class="filter" />
          隐藏
        </el-button>
        <el-button type="info"
                   size="small"
                   class="hide-filter-btn">
          <svg-icon icon-class="plus" />
          <router-link to="/info/host/host-info/add">新增</router-link>
        </el-button>
        <el-dropdown size="small"
                     trigger="click"
                     type="info">
          <el-button type="info"
                     size="small">
            <svg-icon icon-class="menu-open" />
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <svg-icon icon-class="application-import" />导入
            </el-dropdown-item>
            <el-dropdown-item>
              <svg-icon icon-class="application-export" />导出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="filter-container">
      <label>主机号：</label>
      <el-input v-model="searchFilter.serialNumber"
                size="small" />
      <label>车主：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />
      <label>电话：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />
      <label>作业类型：</label>
      <el-input :disabled="true"
                size="small"
                placeholder="深松作业" />
      <label>区域：</label>
      <el-cascader v-model="searchFilter.region"
                   size="small"
                   :options="regionTree"
                   clearable
                   :props="regionProps" />
      <label>合作社：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />

      <el-button type="primary"
                 size="small"
                 class="search-btn">
        查询
      </el-button>
      <el-button size="small"
                 class="reset-btn">
        重置
      </el-button>
    </div>
    <div class="table-container">
      <el-table :data="tableData"
                height="660"
                border
                stripe
                style="width: 100%">
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="hostNumber"
                         label="主机号" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="carOwner"
                         label="车主" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="ownerPhone"
                         label="车主电话" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="area"
                         label="作业面积(亩)" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="mileage"
                         label="里程(公里)" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="averageDepth"
                         label="平均深度(厘米)" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="dateFrom"
                         label="开始时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="dateTo"
                         label="结束时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="workType"
                         label="作业类型" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="address"
                         label="地址">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="primary"
                       @click="handleShowMapDetail(scope.$index, scope.row)">地图详情</el-button>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination clearfix">
      <el-pagination :page-size="20"
                     layout="total, prev, pager, next, jumper"
                     :total="400"
                     @current-change="handleCurrentChange" />
    </div>

  </div>
</template>

<script>
import { province } from '@/plugins/china-regions/province'
import { city } from '@/plugins/china-regions/city'
export default {
  components: {},
  data() {
    return {
      searchFilter: {
        serialNumber: '',
        hostNumber: '',
        workType: '',
        dateFrom: '',
        dateTo: '',
        region: []
      },
      regionProps: {
        label: 'name',
        value: 'id'
      },
      regionTree: [],
      tableData: [
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        },
        {
          dateFrom: '2016-05-03 15:41:25',
          dateTo: '2016-05-03 15:41:25',
          hostNumber: 'GWA204192592',
          carOwner: '王小虎',
          ownerPhone: '12345678954',
          area: '26.47',
          mileage: '10.56',
          averageDepth: '21',
          workType: '深松作业'
        }
      ]
    }
  },
  mounted() {
    this.buildRegionTree()
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleShowMapDetail(index, rowItem) {
      console.log(index, rowItem)
    },
    buildRegionTree() {
      const _this = this

      _this.regionTree = province
      _this.regionTree.forEach(e => {
        const curProvinceCities = city[e.id]
        e.children = curProvinceCities
      })
    }
  }
}
</script>

 <style lang="scss" scoped>
.host-info-list-container {
  padding: 10px;
  .header {
    border-bottom: 1px solid #eee;
    .title {
      float: left;
      line-height: 40px;
    }
    .button-group {
      float: right;
    }
  }
  .filter-container {
    margin: 10px 0;
    label {
      font-size: 14px;
      font-weight: normal;
      margin-left: 10px;
      &:first-of-type {
        margin-left: 0;
      }
    }
    .el-input {
      width: 120px;
      margin-bottom: 10px;
      &.el-date-editor {
        width: 200px;
      }
    }
  }
  .pagination {
    padding: 20px 0 10px;
    .el-pagination {
      float: right;
    }
  }
}
</style>
