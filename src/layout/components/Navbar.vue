<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="nav">
      <div class="nav-item">
        {{username}},欢迎您！
      </div>

      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <div class="block"  v-if="avatar && avatar != 'null'">
              <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">
                <img :src="avatar" style="object-fit: cover;">
              </span>
            </div>
            <div class="block" v-else>
              <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">
                <img :src="'http://tuoguan.lecyon.com/fm/static/images/user1.jpg'" style="object-fit: cover;">
              </span>
            </div>
            <i class="el-icon-caret-bottom" />
          </div>

          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
              <el-dropdown-item>使用手册</el-dropdown-item>
            </a>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
    username() {
      return localStorage.getItem('username')
    },
    avatar(){
      return localStorage.getItem('avatar')
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .nav{
    float: right;
    height: 100%;
    line-height: 40px;
    background: transparent;
    padding: 0;
    margin: 0;

    .nav-item {
      top: 5px;
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 40px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      cursor: pointer ;
      margin-right: 30px;
      width: 100%;
      height: 100%;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        width: 100%;
        height: 100%;

        .block{
          width: 100%;
          height: 100%;

          .el-avatar {
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            overflow: hidden;
            color: #fff;
            background: #c0c4cc;
            width: 40px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;

            img {
              display: block;
              height: 100%;
              vertical-align: middle;
            }
          }

          .el-avatar--circle {
            border-radius: 50%;
          }
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
