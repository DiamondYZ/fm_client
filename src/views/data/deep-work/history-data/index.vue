<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="history-data" type="success">
      <router-view />
    </el-alert>

    this is hist-data
    <region-tree @region-pick="handleRegionPick" />

  </div>
</template>

<script>
import RegionTree from '@/components/RegionTree/index'
export default {
  components: {
    RegionTree
  },
  methods: {
    handleRegionPick(data) {
      console.warn(data.region)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
