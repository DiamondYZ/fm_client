<template>
  <div class="route-content-container host-info-add-container">
    <div class="header clearfix">
      <div class="title">
        <svg-icon icon-class="calendar-month" />
        新增农机基本信息表
      </div>
    </div>
    <div class="form-container">
      <el-form ref="addHostInfoForm"
               label-width="120px"
               size="small">
        <div class="sec-title">基本信息</div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="主机号"
                          prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="作业类型"
                          prop="name2">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="车主"
                          prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话"
                          prop="name2">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="宽幅"
                          prop="name">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <div class="sec-title">区域信息</div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="省份"
                          prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="市级"
                          prop="name2">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="区县"
                          prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="乡镇"
                          prop="name2">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <div class="sec-title">合作社信息</div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="合作社所属区域"
                          prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="合作社"
                          prop="name2">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <div class="sec-title">其他机构信息</div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="公司"
                          prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="机构1"
                          prop="name2">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="机构2"
                          prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="机构3"
                          prop="name2">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item class="form-button-group">
          <el-button type="primary" size="medium">保存</el-button>
          <el-button size="medium" @click="resetForm('addHostInfoForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.host-info-add-container {
  .form-container {
    padding: 20px 0;
    .sec-title {
      font-size: 16px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      color: #103091;
      padding-left: 10px;
      margin-bottom: 30px;
    }
    .el-row {
      padding: 0 60px;
      margin-bottom: 10px;
      .el-col {
        padding-right: 40px;
      }
    }
    .form-button-group {
      margin-top: 30px;
      text-align: center;
      //$$ 使用深度选择器解决el组件内部样式无法改动的问题
      & /deep/ .el-form-item__content {
        margin-left: 0 !important;
      }
      .el-button+.el-button {
        margin-left: 30px;
      }
    }
  }
}
</style>
