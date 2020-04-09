<template>
  <div class="season-data-container">
    <div class="header clearfix">
      <div class="title">
        <svg-icon icon-class="calendar-month" />
        深松当季作业统计
      </div>
      <el-button type="info"
                 size="mini"
                 class="hide-filter-btn">
        <svg-icon icon-class="filter" />
        隐藏
      </el-button>
    </div>
    <div class="filter-container">
      <label>作业序列号：</label>
      <el-input v-model="searchFilter.serialNumber"
                size="mini" />
      <label>主机号：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="mini" />
      <label>作业开始时间：</label>
      <el-date-picker v-model="searchFilter.dateFrom"
                      size="mini"
                      type="datetime" />

      <label>作业结束时间：</label>
      <el-date-picker v-model="searchFilter.dateTo"
                      size="mini"
                      type="datetime" />

      <el-button type="primary"
                 size="mini"
                 class="search-btn">
        查询
      </el-button>
      <el-button size="mini"
                 class="reset-btn">
        重置
      </el-button>
    </div>
    <div class="table-container">
      <el-table :data="tableData"
                v-loading = "isLoading"
                height="660"
                border
                stripe
                style="width: 100%">
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="lineNumber"
                         label="行号" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="carId"
                         label="农机号" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="carOwner"
                         label="车主" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="carOwnerPhone"
                         label="车主电话" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="workLandarea"
                         label="作业面积(亩)" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="depth"
                         label="平均深度(厘米)" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="beginDate"
                         label="开始时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="endDate"
                         label="结束时间" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="type"
                         label="作业类型" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="operation"
                         label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="primary"
                       @click="handleShowMapDetail(scope.$index, scope.row)">地图详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination clearfix">
      <el-pagination :page-size="page.pageSize"
                     :current-page="page.pageNo"
                     layout="total, prev, pager, next, jumper"
                     :total="page.total"
                     @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script>
import {getList} from '@/api/deep-work'
import {getStatisticList} from '@/api/deep-work'
import { getToken } from '@/utils/auth'

export default {
  data() {
    return {
      searchFilter: {
        serialNumber: '',
        carId: '',
        type: '',
        beginDate: '',
        endDate: ''
      },
      page:{
        pageSize: 10,
        total: 0,
        pageNo: 1
      },
      isLoading: false,
      tableData: [
        {
          "lineNumber": 1,
          "carId": "GWA204192294",
          "carOwner": "明金亮",
          "carOwnerPhone": "15940642108",
          "type": "31",
          "depth": "35.09",
          "passRate": "0.92",
          "workLandarea": "10782.39",
          "submitLandarea": null,
          "qualifiedLandarea": "9964.48",
          "distance": "2843.18",
          "overlapRate": null,
          "repeatRate": null,
          "missRate": null,
          "beginDate": "2019-10-05",
          "endDate": "2020-04-05",
          "totalFlow": "0.0",
          "seed": "0.0",
          "seedPerMu": "0.0",
          "userCode": null
        }
      ]
    }
  },
  mounted() {
    this.pageQuery();
  },
  methods: {
    pageQuery(){
      let _this = this
      let param = {}
      this.isLoading = true
      param.pageNum = this.page.pageNo;
      param.pageSize = this.page.pageSize;
      param.userToken = getToken()
      param.entity = {type:31}
      param.orders = [{asc:false,column:null}]
      getStatisticList(param).then(res => {
        //console.log(JSON.stringify(res))
        //_this.tableData = data
        _this.tableData = []
        if(res.code == 200){
          this.page.total = res.data.total
          this.page.pageNo = res.data.current
          let _this = this
          res.data.records.map(function(temp){
            // let item = {}
            // item.carId = temp.carId
            // item.depth = temp.depth
            // item.passRate = temp.passRate
            // item.workLandarea = temp.workLandarea
            // item.distance = temp.distance
            // item.owner = temp.owner
            // item.ownerPhone = temp.ownerPhone
            _this.tableData.push(temp)
          })
        }else{
          this.$message({
            duration: 3000,
            content: res.errorMessage
          });
        }
        console.log(JSON.stringify(this.tableData))
        this.isLoading = false
      })
    },
    handleCurrentChange(val) {
      this.page.pageNo = val
      this.pageQuery()
    },
    handleShowMapDetail(index, rowItem) {
      console.log(index, rowItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.season-data-container {
  padding: 10px;
  .header {
    border-bottom: 1px solid #eee;
    .title {
      float: left;
      line-height: 40px;
    }
    .hide-filter-btn {
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
