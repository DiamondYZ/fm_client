<template>
  <div class="season-report-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="机构报表" name="agent">
        <agent-report />
      </el-tab-pane>
      <el-tab-pane label="区域报表" name="area">区域报表</el-tab-pane>
      <el-tab-pane label="合作社报表" name="cooperative">合作社报表</el-tab-pane>
      <el-tab-pane label="日报表" name="day">日报表</el-tab-pane>
      <el-tab-pane label="主机季度报表" name="hostSeason">主机季度报表</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AgentReport from './components/agent'

export default {
  components: {
    AgentReport
  },
  data() {
    return {
      activeName: 'agent'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.season-report-container {
  padding: 10px;
}

</style>
