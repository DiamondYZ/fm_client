<template>
  <div style="width:100%;font-size: 12px">
    <template v-for="item in cityData">
      <el-row style="margin-top:12px;margin-bottom:12px">
        <el-col span="12" style="padding-left:12px">{{item.name}}</el-col>
        <el-col span="12" style="padding--left:12px">{{item.value}}</el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
      ElCol,
      ElRow},
    name: 'deviceTable',
    data () {
      return {
        cityData: [
          {name: '北京', value: 250},
          {name: '福州', value: 138},
          {name: '青岛', value: 45},
          {name: '郑州', value: 34},
          {name: '深圳', value: 47}
        ]
      }
    },
    mounted () {
    },
    methods: {
      tableRowStyle({ row, rowIndex }) {
        return 'background-color: red;opacity:1; color:white;border-bottom:0px'
      },
      headerRowStyle({ row, column, rowIndex, columnIndex }) {
        return 'background-color: red; opacity:1; color:white;border-bottom:0px'
      },
    }
  }

</script>
