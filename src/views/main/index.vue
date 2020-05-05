<template>
  <!-- 首页内容聚合展示 -->
  <div class="hexagon-page-container">
    <h3 class="title">农机管理平台</h3>
    <div class="hexagon-container ">
      <div v-for="(item,index) in hexagonList"
           :key="index"
           class="hexagon-item"
           @click="goPage(item)">
        <div class="hex-item thick">
          <div class="border" />
          <div class="border" />
          <div class="border" />
        </div>
        <div class="hex-item thin">
          <div class="border" />
          <div class="border" />
          <div class="border" />
        </div>
        <div class="hex-content">
          <div class="link-name">
            <p>
              <svg-icon class="link-icon"
                        :icon-class="item.icon" />
            </p>
            <span class="link-title">
              {{ item.title }}
            </span>
          </div>
          <svg-icon class="hexagon-back"
                    icon-class="hexagon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hexagonList: [
        {
          icon: 'monitor-dashboard',
          title: '仪表盘',
          path: '/dash'
        },
        {
          icon: 'truck-fast-outline',
          title: '保护耕地作业',
          path: '/data/deep-work/season-statistic-data'
        },
        {
          icon: 'truck',
          title: '深翻作业',
          path: '/info/host/host-info/list'
        },
        {
          icon: 'office-building',
          title: '机构管理',
          path: '/info/agent/agent-manage'
        },
        {
          icon: 'account-badge-horizontal',
          title: '用户管理',
          path: '/info/user/co-admin'
        },
        {
          icon: 'settings-transfer',
          title: '产品运维',
          path: '/product/name'
        },
        {
          icon: 'scale-balance',
          title: '市场运营',
          path: '/market/annual-fee'
        }
      ]
    }
  },
  methods: {
    goPage(item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.hexagon-page-container {
  @include clearfix;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(14, 17, 24, 0.97);
  .title {
    font-size: 32px;
    letter-spacing: 6px;
    text-align: center;
    margin: 8% auto 60px;
    color: white;
  }
  .hexagon-container {
    width: 800px;
    margin: 0 auto;
    text-align: center;
  }
}
.hexagon-item {
  width: 200px;
  height: 200px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  .hex-item {
    width: 90px;
    height: 200px;
    margin-left: 55px;
    position: absolute;
    top: 0;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    &.thin {
      .border {
        top: 10%;
        left: 10%;
        height: 80%;
        width: 80%;
        &::before,
        &::after {
          height: 2px;
        }
      }
    }
    .border {
      position: absolute;
      top: 5%;
      width: 100%;
      height: 90%;
      &::before,
      &::after {
        display: block;
        position: absolute;
        background-color: #1e2530;
        height: 4px;
        width: 100%;
        content: "";
        left: 50%;
        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      &:before {
        top: 0;
      }
      &:after {
        bottom: 0;
      }
      &:nth-child(1) {
        transform: rotate(30deg);
      }
      &:nth-child(2) {
        transform: rotate(90deg);
      }
      &:nth-child(3) {
        transform: rotate(150deg);
      }
    }
  }

  .link-name {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 11;
    .link-icon {
      width: 40px;
      height: 40px;
    }
  }
  .hexagon-back {
    width: 200px;
    height: 200px;
    fill: #1e2530;
    z-index: 0;
  }

  &:hover {
    .hex-item {
      transform: scale(1.2);
      .border {
        &::before,
        &::after {
          background-color: red;
        }
      }
    }
    .hexagon-back {
      transform: scale(1.1);
    }
    .link-title {
      animation: focus-in-contract 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    }
    .link-icon {
      fill: red;
    }
  }
}
@keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }

  to {
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
</style>
