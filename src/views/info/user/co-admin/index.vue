<template>
  <div class="host-info-list-container">
    <div class="header clearfix">
      <div class="title">
        <svg-icon icon-class="account" />
        用户管理-合作社管理员
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
      <label>账号：</label>
      <el-input v-model="searchFilter.serialNumber"
                size="small" />
      <label>姓名：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />
      <label>手机：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />
      <label>状态：</label>
      <el-select v-model="searchFilter.state"
                 size="small">
        <el-option v-for="item in stateOption"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value" />
      </el-select>

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
                border
                stripe
                style="width: 100%">
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="account"
                         label="登录账号" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="name"
                         label="姓名" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="agent"
                         label="归属机构" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="phone"
                         label="手机号码" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="updateTime"
                         label="更新时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="state"
                         label="状态" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="address"
                         label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       title="编辑"
                       type="default"
                       @click="handleEditItem(scope.$index, scope.row)">
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
    <!-- <div class="pagination clearfix">
      <el-pagination :page-size="20"
                     layout="total, prev, pager, next, jumper"
                     :total="400"
                     @current-change="handleCurrentChange" />
    </div> -->

  </div>
</template>

<script>
import { province } from '@/plugins/china-regions/province'
import { city } from '@/plugins/china-regions/city'
export default {
  components: {},
  data() {
    return {
      stateOption: [
        {
          value: '0',
          label: '正常'
        },
        {
          value: '1',
          label: '停用'
        }
      ],
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
          updateTime: '2019-12-03 15:41:25',
          account: '13591285008',
          name: '13591285008',
          phone: '13591285008',
          agent: '为民农机专业合作社',
          state: '正常'
        },
        {
          updateTime: '2019-12-03 15:41:25',
          account: '13384210867',
          name: '杜文志',
          phone: '13384210867',
          agent: '文志农机专业合作社',
          state: '正常'
        },
        {
          updateTime: '2019-12-03 15:41:25',
          account: '13591941108',
          name: '郑广杰',
          phone: '13591941108',
          agent: '正大合作社',
          state: '正常'
        },
        {
          updateTime: '2019-12-03 15:41:25',
          account: '13591285008',
          name: '13591285008',
          phone: '13591285008',
          agent: '为民农机专业合作社',
          state: '正常'
        },
        {
          updateTime: '2019-12-03 15:41:25',
          account: '13842163432',
          name: '席绍春',
          phone: '13842163432',
          agent: '朝阳市双塔区英皓农机专业合作社',
          state: '正常'
        },
        {
          updateTime: '2019-12-03 15:41:25',
          account: '13942162435',
          name: '张文海',
          phone: '13942162435',
          agent: '文海农机专业合作社',
          state: '正常'
        },
        {
          updateTime: '2019-12-03 15:41:25',
          account: '13904916482',
          name: '13904916482',
          phone: '',
          agent: '北票市五谷丰登农机专业合作社',
          state: '正常'
        },
        {
          updateTime: '2019-12-03 15:41:25',
          account: 'hschenghe',
          name: '黑山县诚合农机专业合作社',
          phone: '',
          agent: '黑山县诚合农机专业合作社',
          state: '正常'
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
