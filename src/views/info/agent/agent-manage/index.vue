<template>
  <div class="host-info-list-container">
    <div class="header clearfix">
      <div class="title">
        <svg-icon icon-class="newspaper" />
        机构管理
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
      <label>机构代码：</label>
      <el-input v-model="searchFilter.serialNumber"
                size="small" />
      <label>机构名称：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />
      <label>机构全称：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />
      <label>机构类型：</label>
      <el-select v-model="searchFilter.agentType"
                 size="small">
        <el-option v-for="item in agentTypeOption"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value" />
      </el-select>
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
                height="660"
                border
                stripe
                row-key="id"
                :tree-props="{children: 'children'}"
                style="width: 100%">
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="name"
                         label="机构名称" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="fullName"
                         label="机构全称" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="serial"
                         label="排序号" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="type"
                         label="机构类型" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="updateTime"
                         label="更新时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="remark"
                         label="备注信息" />
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
      agentTypeOption: [
        {
          value: '0',
          label: '省份'
        },
        {
          value: '1',
          label: '市级'
        },
        {
          value: '2',
          label: '其他'
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
      tableData: []
    }
  },
  mounted() {
    this.buildTableData()
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleEditItem(index, rowItem) {
      console.log(index, rowItem)
    },
    buildTableData() {
      const _this = this

      _this.tableData = province
      _this.tableData.forEach(e => {
        e.fullName = e.name
        e.serial = e.id
        e.type = '省份'
        e.updateTime = '2019-08-15 13:53'
        e.remark = ' '
        e.state = Math.ceil(Math.random() * 10) >= 5 ? '正常' : '停用'
        const curProvinceCities = city[e.id]
        curProvinceCities.forEach(item => {
          item.fullName = item.name
          item.serial = item.id
          item.type = '市级'
          item.updateTime = '2020-01-15 13:53'
          item.remark = ' '
          item.state = Math.ceil(Math.random() * 10) >= 5 ? '正常' : '停用'
        })
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
