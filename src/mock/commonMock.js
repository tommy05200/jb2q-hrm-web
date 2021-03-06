/* eslint-disable no-undef */
/*
 * @Author: GengHH
 * @Date: 2021-01-05 13:39:44
 * @LastEditors: GengHH
 * @LastEditTime: 2021-03-01 15:28:45
 * @Description: mock拦截公共调用的接口，模拟数据
 * @FilePath: \jb2q-hrm-web\src\mock\commonMock.js
 */

import Mock from 'mockjs';
import dic from './dataDictionary';
import config from '../config/mock.conf';

const basePath = config.commonBasePath;
//获取区县字典表
Mock.mock(basePath + '/common/dic/getQx', 'get', {
  dicData: dic.GGJBXX_QX
});
//获取工作性质字典表
Mock.mock(basePath + '/common/dic/getGzxz', 'get', {
  dicData: dic.RECRUIT_WORK_NATURE
});
//语种字典表
Mock.mock(basePath + '/common/dic/getLanguageType', 'get', {
  dicData: dic.RECRUIT_LANGUAGE_TYPE
});
//语言等级
Mock.mock(basePath + '/common/dic/getLanguageLevel', 'get', {
  dicData: dic.RECRUIT_LANGUAGE_LEVEL
});
//学历
Mock.mock(basePath + '/common/dic/getRecruitEdu', 'get', {
  dicData: dic.RECRUIT_EDU
});
export default Mock;
