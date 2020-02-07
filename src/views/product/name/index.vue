<template>
  <div class="host-info-list-container">
    <div class="header clearfix">
      <div class="title">
        <svg-icon icon-class="calendar-month" />
        区域产品名称定制管理
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
      <label>地区编号：</label>
      <el-input v-model="searchFilter.serialNumber"
                size="small" />
      <label>地区名称：</label>
      <el-input v-model="searchFilter.hostNumber"
                size="small" />
      <label>个性化产品名称</label>
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
                         prop="areaSerial"
                         label="地区编号" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="areaName"
                         label="地区名称" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="areaImg"
                         label="地区背景图片" />
        <el-table-column align="center"
                         show-overflow-tooltip
                         prop="areaProductName"
                         label="地区个性化产品名称" />
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
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
        },
        {
          areaSerial: '211200',
          areaName: '朝阳市',
          areaImg: '/fm/userfiles/fileupload/201905/1130389410505789440.jpg',
          areaProductName: '朝阳市农机作业监管平台'
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
