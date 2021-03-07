/*
 * @Author: GengHH
 * @Date: 2021-03-02 16:47:21
 * @LastEditors: GengHH
 * @LastEditTime: 2021-03-03 09:58:08
 * @Description: 个人模块的全局个人信息
 * @FilePath: \jb2q-hrm-web\src\store\modules\person.js
 */
import { getLogonUser } from '@/api/personApi';
const state = {
  //用户token
  token: '',
  //证件号码
  zjhm: '',
  //个人标识
  pid: '',
  //用户名
  name: '',
  //用户头像
  avatar: '',
  //用户选择城市，默认江苏省
  city: '江苏省_320000',
  //用户选择地区
  region: '',
  //高校用户选择城市
  college_city: '',
  //高校用户选择地区
  college_region: '',
  //登录专区。主页：pingtai,就业淘宝：jiuyetaobao,高校毕业生专区：gaoxiao
  login_type: '',
  //登录中心:个人登录：person，单位登录：unit，高校登录：college，商户登录：merchant
  center: '',
  //登录状态:1:登录中，0：未登录
  login_status: 0,
  //登录时间，超出半个小时即登录失效
  login_time: 0
};

const mutations = {
  SET_PERSONINOF: (state, value) => {
    state.zjhm = value.logonUser.zjhm || '310111199901011234';
    state.pid = value.logonUser.pid || '123123123123';
    state.name = value.logonUser.userName || '打工人';
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_CITY: (state, city) => {
    state.city = city;
  },
  SET_REGION: (state, region) => {
    state.region = region;
  },
  SET_COLLEGE_CITY: (state, city) => {
    state.college_city = city;
  },
  SET_COLLEGE_REGION: (state, region) => {
    state.college_region = region;
  },
  SET_LOGINTYPE: (state, login_type) => {
    state.login_type = login_type;
  },
  SET_CENTER: (state, center) => {
    state.center = center;
  },
  SET_LOGINSTATUS: (state, login_status) => {
    state.login_status = login_status;
  },
  SET_LOGIN_TIME: (state, login_time) => {
    state.login_time = login_time;
  }
};
const getters = {
  username(state) {
    return state.name;
  }
  //username: state => state.name
};
const actions = {
  //用户登录
  // login({ commit }, userInfo) {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       if (userInfo.loginType.length > 0 && userInfo.center.length > 0) {
  //         let data = sessionStorage.vuex;
  //         let token;
  //         if (data && data != 'null' && data != '' && data.length > 0) {
  //           data = JSON.parse(data);
  //           if (data.webuser) {
  //             token = data.webuser.token;
  //           }
  //         } else {
  //           reject('登陆失败：未获取到sessionSrorage用户');
  //         }
  //         commit('SET_TOKEN', token);
  //         commit('SET_LOGINTYPE', userInfo.loginType);
  //         commit('SET_CENTER', userInfo.center);
  //         commit('SET_LOGINSTATUS', 1);
  //         commit('SET_LOGIN_TIME', new Date().getTime());
  //         resolve();
  //       } else {
  //         reject('登陆失败：解析loginType和center字段出错');
  //       }
  //     } catch (error) {
  //       reject('登陆失败：解析loginType和center字段出错');
  //     }
  //   });
  // },
  // //用户退出
  // logout({ commit }) {
  //   return new Promise(resolve => {
  //     commit('SET_TOKEN', '');
  //     commit('SET_LOGINTYPE', '');
  //     commit('SET_CENTER', '');
  //     commit('SET_LOGINSTATUS', 0);
  //     commit('SET_LOGIN_TIME', 0);
  //     sessionStorage.setItem('vuex', null);
  //     resolve();
  //   });
  // }

  get_personInfo({ commit }) {
    getLogonUser()
      .then(res => {
        console.log('个人登录信息', res);
        if (res.status == 200) {
          commit('SET_PERSONINOF', res.result);
        } else {
          console.log('加载个人登录信息失败：' + res.message);
        }
      })
      .catch(e => {
        console.log('加载个人登录信息出错：' + e);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};