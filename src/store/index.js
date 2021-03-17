/*
 * @Author: GengHH
 * @Date: 2020-12-02 10:48:20
 * @LastEditors: GengHH
 * @LastEditTime: 2021-03-17 15:15:03
 * @Description: 全局基本数据
 * @FilePath: \jb2q-hrm-web\src\store\index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import index from './modules/index';
import person from './modules/person';
import corporation from './modules/corporation';
import dictionary from './modules/dataDictionary';
import admin from './modules/admin';

/**
 * Create By GengHH On 2020/12/02
 * 初始化全局数据管理对象
 */
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    index,
    person,
    corporation,
    dictionary,
    admin
  },
  getters
});

export default store;
