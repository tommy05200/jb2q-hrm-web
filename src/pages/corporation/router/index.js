import Vue from 'vue'
import Router from 'vue-router'
import NotFoundPage from '@/views/404';
import Test from '@/components/Test'

try {
  const originalPush = Router.prototype.push;
  Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
  };
} catch (e) {
  console.log(e);
}

Vue.use(Router)

//默认空白的局部组件
// const BlankComponent = {
//   template:'<div>暂时空白</div>'
// }


export default new Router({
  mode: 'hash',
  //mode: 'history',
  //base: 'recruitment',
  routes: [
    {
      path: '/',
      name: '单位首页',
      //redirect:'/home',
      component: () => import('@/views/corporation/index'),
      children: [
        {
          path: '',
          name: '单位首页-单位管理',
          meta: {
            notNeedUser: true
          },
          components: {
            default : Test,
            corpNavMenu : () => import('@/components/corporation/CorpNavMenu'),
          }
        }
      ]
    },
    {
      path: '/jobMgr',
      name: '位置管理',
      component: () => import('@/views/corporation/jobMgr/JobSearch'),
      children: [
        {
          path: '/jobMgr/jobAdd',
          name: '发布职位',
          component: () => import('@/views/corporation/jobMgr/JobAdd')
        },
        {
          path: '/jobMgr/unpublishJobQuery',
          name: '未发布职位',
          component: () => import('@/views/corporation/jobMgr/JobQueryUnpublished')
        },
        {
          path: '/jobMgr/publishJobQuery',
          name: '已发布职位',
          component: () => import('@/views/corporation/jobMgr/JobQueryPublished')
        },
        {
          path: '/jobMgr/overdueJobQuery',
          name: '已过期职位',
          component: () => import('@/views/corporation/jobMgr/JobQueryOverdued')
        },
        {
          path: '/jobMgr/offJobQuery',
          name: '已下架职位',
          component: () => import('@/views/corporation/jobMgr/JobQueryOffline')
        },
        // {
        //   path: '/jobMgr/jobRecycle',
        //   name: '回收站',
        //   component: () => import('@/views/corporation/jobMgr/JobRecycle')
        // }
      ]
    },
    // {
    //   path: '/resumeSearch',
    //   name: '简历搜索',
    //   component: () => import('@/views/index/employmentTrainee')
    // },
    // {
    //   path: '/JobFindMgr',
    //   name: '应聘管理',
    //   component: () => import('@/views/index/recruitment')
    // },            
    // {
    //   path: '/jobFair',
    //   name: '招聘会',
    //   component: () => import('@/views/index/jobFair')
    // }, 
    {
      path: '*',
      component: NotFoundPage
    }
  ]
})
