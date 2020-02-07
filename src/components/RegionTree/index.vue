<template>
  <div>
    <el-input v-model="filterText"
              size="small"
              placeholder="输入关键字进行过滤" />

    <el-tree ref="tree"
             class="filter-tree"
             :data="regionTree"
             :props="treeProps"
             :filter-node-method="filterRegion"
             @node-click="sendNode" />
  </div>
</template>

<script>
//! 后期数据改为异步数据，本地暂不添加三级地区数据，编译太卡
import { province } from '@/plugins/china-regions/province'
import { city } from '@/plugins/china-regions/city'
// import county from '@/plugins/china-regions/county'

export default {
  data() {
    return {
      regionTree: [],
      treeProps: {
        label: 'name'
      },
      filterText: ''
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  mounted() {
    this.buildRegionTree()
  },
  methods: {
    filterRegion(value, data) {
      if (!value) return true
      return (data.name.indexOf(value) !== -1 ||
              (data.province && data.province.indexOf(value) !== -1))
    },
    sendNode(Node) {
      console.log(arguments)
      this.$emit('region-pick', { region: Node })
    },
    buildRegionTree() {
      const _this = this

      _this.regionTree = province
      _this.regionTree.forEach(e => {
        const curProvinceCities = city[e.id]
        // curProvinceCities.forEach(e => {
        //   e.children = county[e.id]
        // })
        e.children = curProvinceCities
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
