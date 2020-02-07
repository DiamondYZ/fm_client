<template>
  <div class="host-info-list-container">
    <div class="header clearfix">
      <div class="title">
        <svg-icon icon-class="calendar-month" />
        农机年费表管理
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
      </div>
    </div>
    <div class="filter-container">
      <label>主机号：</label>
      <el-input v-model="searchFilter.serialNumber"
                size="small" />
      <label>车主：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />
      <label>缴费状态：</label>
      <el-radio-group v-model="searchFilter.isPaid">
        <el-radio :label="1">是</el-radio>
        <el-radio :label="0">否</el-radio>
      </el-radio-group>

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
                         prop="dateFrom"
                         label="初始安装时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="dateFrom"
                         label="账单生成时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="dateTo"
                         label="到期时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="isPaid"
                         label="缴费状态" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="address"
                         label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       title="编辑"
                       type="default">
              <svg-icon icon-class="file-edit" />
            </el-button>
            <el-button size="mini"
                       title="删除"
                       type="default">
              <svg-icon icon-class="delete" />
            </el-button>
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
          isPaid: '是'
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
          isPaid: '是'
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
          isPaid: '是'
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
          isPaid: '是'
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
          isPaid: '否'
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
          isPaid: '否'
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
          isPaid: '否'
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
          isPaid: '否'
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
          isPaid: '否'
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
          isPaid: '否'
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
          isPaid: '否'
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
          isPaid: '否'
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
          isPaid: '是'
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
          isPaid: '是'
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
          isPaid: '是'
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
          isPaid: '是'
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
          isPaid: '是'
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
    margin-bottom: 10px;
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
    .search-btn {
      margin-left: 30px;
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
