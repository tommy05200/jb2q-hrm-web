<!--
 * @Author: TangQiang
 * @Date: 2020-03-04 11:50:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-05 14:40:20
 * @Description: file content
 * @FilePath: \jb2q-hrm-web\src\pages\admin\admin.vue
-->
<template>
  <div id="app" style="width:100%;height:100%">
    <el-container style="height:100%">
      <el-header height="60px" style="padding:0">
        <div id="indexHeader">
          <el-row>
            <el-col :sm="24" :md="6" :lg="8" :xl="8" class="bg-purple">
              <img src="@/assets/img/logo.png" alt="" />
              <!-- <img class="logo2" src="@/assets/img/logo2.png" alt=""> -->
              <img class="logo3" src="@/assets/img/logo3.png" alt="" />
            </el-col>
            <el-col :sm="24" :md="18" :lg="16" :xl="16" class="bg-purple">
              <div v-for="(v, k) in navList" :key="k" class="list listHover">
                <i class="nva-icon" :class="v.iconName"></i>
              </div>
              <div class="list">欢迎您！{{ userName }}</div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-container>
        <el-aside width="22%">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :unique-opened="true"
            @open="handleOpen"
            @close="handleClose"
          >
            <template v-for="(v, k) in menuList">
              <el-submenu
                v-if="v.childs && v.childs.length != 0"
                :index="v.id"
                :key="k"
              >
                <template slot="title">
                  <i :class="v.iconName"></i>
                  <span>{{ v.text }}</span>
                </template>
                <el-menu-item
                  v-for="(value, key) in v.childs"
                  :key="key"
                  :index="value.id"
                  @click="menuClick(value)"
                >
                  <i :class="value.iconName"></i>
                  <span>{{ value.text }}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="v.id" :key="k" @click="menuClick(v)">
                <i :class="v.iconName"></i>
                <span>{{ v.text }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main style="padding:5px">
            <div class="title-style">
              {{ title }}
            </div>
            <div style="padding:10px 5px">
              <keep-alive :include="['/']">
                <router-view></router-view>
              </keep-alive>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/**
 * 管理员系统入口界面
 */

import { testData } from '@pub/mockTestData';
export default {
  name: 'app',
  components: {},
  data: () => {
    return {
      userName: '超级管理员',
      title: '账号管理',
      menuList: [
        {
          id: '1',
          path: '/',
          text: '账号管理',
          iconName: 'el-icon-s-operation'
        },
        {
          id: '2',
          path: '/serviceManagement',
          text: '重点人群就业服务管理',
          iconName: 'el-icon-setting'
        },
        {
          id: '3',
          path: '',
          text: '专家管理',
          iconName: 'el-icon-setting',
          childs: [
            {
              id: '3-1',
              path: '/technocracy/management',
              text: '专家库管理',
              iconName: 'el-icon-setting'
            },
            {
              id: '3-2',
              path: '/technocracy/record',
              text: '专家结对记录',
              iconName: 'el-icon-setting'
            },
            {
              id: '3-3',
              path: '/technocracy/activity',
              text: '专家活动情况',
              iconName: 'el-icon-setting'
            },
            {
              id: '3-4',
              path: '/technocracy/summary',
              text: '专家研讨会议纪要',
              iconName: 'el-icon-setting'
            },
            {
              id: '3-5',
              path: '/technocracy/statistics',
              text: '报表统计',
              iconName: 'el-icon-setting'
            }
          ]
        },
        {
          id: '4',
          path: '/technocracy',
          text: '职业指导',
          iconName: 'el-icon-setting',
          childs: [
            {
              id: '4-1',
              path: '/profession/makeAnAppointment',
              text: '职业指导预约',
              iconName: 'el-icon-setting'
            },
            {
              id: '4-2',
              path: '/profession/audit',
              text: '职业指导预约审核',
              iconName: 'el-icon-setting'
            },
            {
              id: '4-3',
              path: '/profession/management',
              text: '特色活动管理',
              iconName: 'el-icon-setting'
            },
            {
              id: '4-4',
              path: '/profession/feedback',
              text: '职业指导回馈',
              iconName: 'el-icon-setting'
            }
          ]
        },
        {
          id: '5',
          path: '/technocracy',
          text: '单位管理',
          iconName: 'el-icon-setting',
          childs: [
            {
              id: '5-1',
              path: '/unitManagement/message',
              text: '查询单位信息',
              iconName: 'el-icon-setting'
            },
            {
              id: '5-2',
              path: '/unitManagement/recruitment',
              text: '代理招聘',
              iconName: 'el-icon-setting'
            },
            {
              id: '5-3',
              path: '/unitManagement/management',
              text: '单位账号管理',
              iconName: 'el-icon-setting'
            }
          ]
        },
        {
          id: '6',
          path: '/technocracy',
          text: '招聘会管理',
          iconName: 'el-icon-setting',
          childs: [
            {
              id: '6-1',
              path: '/recruitmentManagement/feedback',
              text: '招聘会管理报告反馈',
              iconName: 'el-icon-setting'
            },
            {
              id: '6-2',
              path: '/recruitmentManagement/management',
              text: '招聘会排片表管理',
              iconName: 'el-icon-setting'
            },
            {
              id: '6-3',
              path: '/recruitmentManagement/result',
              text: '招聘会反馈结果',
              iconName: 'el-icon-setting'
            }
          ]
        },
        {
          id: '7',
          path: '/JobEvaluationReview/JobEvaluationReview',
          text: '职位评价查看',
          iconName: 'el-icon-setting'
        },
        {
          id: '8',
          path: '/sensitiveWordManagement/sensitiveWordManagement',
          text: '敏感词管理',
          iconName: 'el-icon-setting'
        },
        {
          id: '9',
          path: '/unitResumeParameterSetting/unitResumeParameterSetting',
          text: '单位简历参数设置',
          iconName: 'el-icon-setting'
        }
      ],
      navList: [
        {
          id: '1',
          path: '/blak1',
          nvaText: '时钟',
          icon: true,
          iconName: 'el-icon-s-operation'
        },
        {
          id: '2',
          path: '/blak2',
          nvaText: '时钟',
          icon: true,
          iconName: 'el-icon-time'
        },
        {
          id: '3',
          path: '',
          nvaText: '铃铛',
          icon: true,
          iconName: 'el-icon-bell'
        }
      ]
    };
  },
  methods: {
    menuClick(e) {
      this.title = e.text;
      this.$router.push(e.path);
    },
    handleOpen() {},
    handleClose() {},
    testRoute() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.title-style {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 40px;
  border-bottom: 1px solid #e9eef3;
  text-align: left;
  padding: 0 30px;
  box-sizing: border-box;
  position: relative;
}
.title-style::before {
  content: '';
  width: 4px;
  height: 16px;
  position: absolute;
  left: 12px;
  top: 13px;
  background: $g-mian-color;
}
#indexHeader {
  position: fixed;
  height: 60px;
  width: 100%;
  padding: 0 20px;
  z-index: 999;
  background-color: $g-mian-color;
  color: $g-white-color !important;

  .el-row {
    width: 100%;
    height: 100%;
    img {
      float: left;
      width: 30px;
      height: 32px;
      position: relative;
      top: 14px;
      display: block;
    }
    img:last-child {
      width: 194px;
      height: 32px;
    }
  }
  .list {
    float: right;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
  }
  .listHover:hover {
    background-color: rgb(202, 89, 49);
    cursor: pointer;
  }
  .el-col {
    height: 100%;

    .nva-icon {
      color: #fff;
    }
  }
  ::v-deep .el-menu--horizontal {
    .el-menu-item {
      float: right;
    }
    .el-menu-item.is-active {
      border-bottom: 2px solid #ffc107;
      color: #ffc107;
    }
  }
}
</style>
