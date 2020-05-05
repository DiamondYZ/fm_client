<template>
  <div class="season-data-container">
    <div class="header clearfix">
      <div class="title">
        <svg-icon icon-class="calendar-month" />
        农机当季作业表管理
      </div>
      <el-button type="info"
                 size="small"
                 class="hide-filter-btn">
        <svg-icon icon-class="filter" />
        隐藏
      </el-button>
    </div>

    <div class="filter-container">
      <label>主机号：</label>
      <el-input v-model="searchFilter.carId"
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
                         label="作业面积（亩）" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="repeatArea"
                         label="重复面积（亩）" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="qualifiedLandarea"
                         label="达标面积（亩）" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="depth"
                         label="平均深度（厘米）" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="overlapRate"
                         label="覆盖率" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="seed"
                         label="播种数" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="typeDict"
                         label="耕种类型" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="workDate"
                         label="作业日期" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="operation"
                         label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="primary" @click="handleShowDetail(scope.$index, scope.row)">日报表</el-button>
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

  import {getList} from '@/api/report'
  import { getToken } from '@/utils/auth'

  export default {
    data() {
      return {
        searchFilter: {
          serialNumber: '',
          beginDate: '',
          endDate: ''
        },
        page:{
          pageSize: 10,
          total: 0,
          pageNo: 1
        },
        isLoading: false,
        tableData: []
      }
    },
    mounted() {
      this.pageQuery()
    },
    methods: {
      handleShowDetail(index, rowItem){
        window.open("http://tuoguan.lecyon.com/fm/a/data/report/dayReport/data?type=34&carId=" + rowItem.carId + "&workDate=" + rowItem.workDate,"_blank");
      },
      handleCurrentChange(val) {
        this.page.pageNo = val
        this.pageQuery()
      },
      pageQuery() {
        let _this = this
        let param = {}
        this.isLoading = true
        param.pageNum = this.page.pageNo;
        param.pageSize = this.page.pageSize;
        param.userToken = getToken()
        param.entity = {type:34,carId:this.searchFilter.carId}
        param.orders = [{asc:false,column:null}]
        getList(param).then(res => {
          _this.tableData = []
          console.log(JSON.stringify(res))
          if(res.code == 200){
            this.page.total = parseInt(res.data.total)
            this.page.pageNo = parseInt(res.data.current)
            let _this = this
            res.data.records.map(function(temp){
              _this.tableData.push(temp)
            })
          }else{
            this.$message({
              duration: 3000,
              content: res.errorMessage
            });
          }
          this.isLoading = false
        })
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
