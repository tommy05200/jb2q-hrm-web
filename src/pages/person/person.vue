<!--
 * @Author: GengHH
 * @Date: 2020-11-30 11:50:54
 * @LastEditors: GengHH
 * @LastEditTime: 2021-02-08 16:42:35
 * @Description: file content
 * @FilePath: \jb2q-hrm-web\src\pages\person\person.vue
-->
<template>
  <div id="indexApp">
    <!-- Header -->
    <HeaderIndex :nav-list="navList"></HeaderIndex>
    <!-- <transition name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
/**
 * 公司管理系统入口界面
 */
import HeaderIndex from '@/components/index/HeaderIndex.vue';
import { testData } from '@pub/mockTestData';
export default {
  name: 'app',
  components: {
    HeaderIndex
  },
  data: () => {
    return {
      path: require('@/assets/logo.png'),
      list: testData.list,
      obj: {},
      jobActiveName: 'jobRecommended',
      corpActiveName: 'corpRecommended',
      navList: [
        {
          id: '7',
          path: '/blak1',
          nvaText: '时钟',
          icon: true,
          iconName: 'el-icon-time'
        },
        {
          id: '6',
          path: '/blak2',
          nvaText: '铃铛',
          icon: true,
          iconName: 'el-icon-bell'
        },
        { id: '5', path: '/jobFindFeedback', nvaText: '求职反馈' },
        { id: '4', path: '/personalCenter', nvaText: '个人中心' },
        { id: '3', path: '/jobSearch', nvaText: '职位搜索' },
        { id: '2', path: '/resumeMgr', nvaText: '简历管理' },
        { id: '1', path: '/', nvaText: '个人信息维护' }
      ]
    };
  },
  methods: {
    test() {
      this.axios
        .get('http://api.wpbom.com/api/neran.php')
        .then(res => {
          this.$set(this.obj, 'siet', res.data);
          console.log(this.$data);
        })
        .catch(err => {
          throw new Error('调用API失败' + err);
        });
    },
    testRoute() {}
  },
  created() {
    console.log(this.$route.path);
    // console.log(this.$data);
    // this.axios.get('/admin/index').then(res =>{
    //   this.$set(this.obj,'siet',res.data)
    // }).catch( err=>{
    //   console.log(err)
    // });
  }
};
</script>

<style lang="scss" scoped>
#indexApp {
  //font-family: "Avenir", Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  // text-align: center;
  //color: #2c3e50;
  height: 100%;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
