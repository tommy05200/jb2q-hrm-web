/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*
 * @Author: GengHH
 * @Date: 2021-01-05 13:39:44
 * @LastEditors: GengHH
 * @LastEditTime: 2021-04-16 13:55:02
 * @Description: file content
 * @FilePath: \jb2q-hrm-web\src\mock\corporation\index.js
 */

import Mock from 'mockjs';
import config from '../../config/mock.conf';
import '../commonMock';

const basePath = config.corpBasePath;
/**
 * 通用的测试通过返回的结果
 */
const successData = {
  status: 200,
  message: '',
  result: {}
};

/**
 * 查询单位的基本信息
 * @param {*} pid
 */
const getCorpbaseInfo = pid => {
  console.log('options', pid);
  return {
    status: 200,
    message: '',
    result: {
      data: {
        cid: '201002025628331',
        tyshxym: '91310107667812584X',
        corpName: '上海新移力自动化科技有限公司',
        establishDate: '20171130',
        businessRange:
          '自动化设备开发、制造（限分支）、销售、技术服务。 【依法须经批准的项目，经相关部门批准后方可开展经营活动】',
        unitResidence: '上海市普陀区中江路889号804室',
        industryType: '02',
        tranBaseSymbol: '0',
        humanResourceReg: '0',
        keypointCorp: '0',
        specialCorp: '0',
        entrustStatus: '0',
        entrustValid: '2020-12-08 15:57:25',
        frozen: '0',
        districtCode: '01',
        introduce:
          '自动化设备开发、制造（限分支）、销售、技术服务。 【依法须经批准的项目，经相关部门批准后方可开展经营活动】',
        contactAddress: '中江路889号804室',
        contactPhone: '13764565977',
        specific: '1',
        corpNature: '02',
        //statusId: '1',
        recruitChargeName: 'test',
        recruitChargePhone: '13322114512',
        recruitStaffName1: '刘德坡',
        recruitStaffPhone1: '13764565977',
        recruitStaffName2: '刘德坡',
        recruitStaffPhone2: '13764565977',
        logo: '',
        publicityMovie: '',
        statusId: '1',
        resumeSearch: '1',
        searchTotal: 30,
        resumeDownload: '1',
        downloadTotal: '',
        resumeFavor: '1',
        favorTotal: 50,
        indexRec: '0',
        viewTotal: 100,
        updateOperator: '0000309307',
        updateTime: '2021-04-01 13:37:08'
      }
    }
  };
};

// Mock.mock(RegExp('/person/info/loadPersonInfo' + '.*'), 'get', function(
//   options
// ) {
//   return getCorpbaseInfo(options);
// });
Mock.mock(basePath + '/loginController/logout', 'post', function(options) {
  return successData;
});
Mock.mock(basePath + '/loginController/getLogonUser', 'post', function(
  options
) {
  return {
    status: 200,
    message: '',
    result: {
      logonUser: {
        userId: '',
        userIdStr: '0000785243',
        userName: 'srg',
        loginName: '6030@XY91310000631291289X',
        userType: '01',
        organId: '',
        organIdStr: '200008010546251',
        organName: '上海市数字证书认证中心有限公司',
        organType: '',
        domainId: 1,
        domainIdStr: '',
        domainName: '',
        roleKey: 'SC:R:1_c81e728d9d4c2f636f067f89cc14862c',
        userKey:
          '384e86e36b7a8fb4d3e700c2a177e39ceba04f93d9d5684c3dd569074a2d7c17',
        expire: -1,
        extInfo: {
          sessionId: 'bd369ffc-96c1-11eb-af7f-005056896dc3',
          logid: '',
          userType: '01',
          userId: '0000785243',
          userName: 'srg',
          userPhone: '11111111111',
          loginName: '6030@XY91310000631291289X',
          userKey: '111111111111111111',
          organId: '200008010546251',
          organCode: '00051499',
          organName: '上海市数字证书认证中心有限公司',
          organType: '159',
          organStatus: '',
          deptId: '',
          deptCode: '',
          deptType: '40',
          deptName: '上海市数字证书认证中心有限公司',
          districtCode: '09',
          districtName: '虹口',
          streetCode: '',
          streetName: '',
          communityCode: '',
          communityName: '',
          loginCaType: '01',
          cookieToken: '',
          pid: '',
          deviceSN: '',
          sfbz: '200008010546251',
          passBySb: true,
          yxbz: '1',
          sbdwmc: '',
          tyshxym: ''
        },
        areaInfo: {
          areaCode: '09',
          areaCode1: '',
          areaCode2: '200008010546251',
          areaCode3: '',
          areaCode4: '',
          areaCode5: '',
          areaCode6: '',
          areaName: '虹口',
          areaName1: '',
          areaName2: '上海市数字证书认证中心有限公司',
          areaName3: '',
          areaName4: '',
          areaName5: '',
          areaName6: ''
        },
        roles: [
          {
            roleId: '2',
            roleName: '普通角色'
          }
        ],
        readOnly: false,
        userIdKey: '0000785243',
        domainIdKey: '1',
        organIdKey: '200008010546251'
      }
    }
  };
});

//检验该单位是不是首次进入系统
Mock.mock(
  RegExp(basePath + '/person/info/checkCorpInit' + '.*'),
  'get',
  function(options) {
    return {
      status: 200,
      message: '',
      result: {
        data: {
          cid: '',
          zjlxId: '',
          zjhm: '',
          xm: '',
          sexId: '',
          birthDate: '',
          contactPhone: '',
          livingArea: '',
          livingStreet: '',
          livingAddress: '',
          houseArea: '',
          houseStreet: '',
          employStatus: '',
          eduId: '',
          type: '',
          isInit: '0'
        }
      }
    };
  }
);
//获取单位基本信息
Mock.mock(RegExp(basePath + '/corp/info/loadCorpInfo' + '.*'), 'get', function(
  options
) {
  return getCorpbaseInfo(options);
});
//修改单位基本信息
Mock.mock(basePath + '/corp/info/saveCorpInfo', 'post', function(options) {
  return successData;
});
//变更转移区申请
Mock.mock(basePath + '/corp/info/updateDistrictCode', 'put', function(options) {
  return successData;
});
//保存或者发布职位信息
Mock.mock(basePath + '/corp/position/saveposition', 'post', function(options) {
  return successData;
});

export default Mock;
