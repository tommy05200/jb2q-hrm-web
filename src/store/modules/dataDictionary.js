/*
 * @Author: GengHH
 * @Date: 2020-11-05 11:38:28
 * @LastEditors: GengHH
 * @LastEditTime: 2021-03-22 16:06:15
 * @Description: 全局公用的字典表
 * @FilePath: \jb2q-hrm-web\src\store\modules\dataDictionary.js
 */
// import {
//   queryDataDictionary,
//   queryProvinceAreas,
//   queryIndustry,
//   queryOccupation
// } from '@/api/api';
// import { retCode_Success } from '@/config/systemSettings';
import { queryDicData } from '@/api/common';
const state = {
  //数据地点
  matterDictionary: [],
  //全省区县数据字典
  provinceAreas: [],
  //行业数据字典
  industry: [],
  //职业数据字典
  occupation: [],
  //是 or 否
  YESNO: [],
  //区县
  GGJBXX_QX: [],
  //单位性质
  RECRUIT_CORP_NATURE: [],
  //行业分类
  RECRUIT_INDUSTRY_TYPE: [],
  //特定人群
  RECRUIT_SPECIAL_PEOPLE: [],
  //工作性质
  RECRUIT_WORK_NATURE: [],
  //工作班时
  RECRUIT_WORK_HOUR: [],
  //工作年限
  RECRUIT_WORK_YEAR: [],
  //工资支付方式
  RECRUIT_SALARY_PAY_TYPE: [],
  //招聘类型
  RECRUIT_TYPE: [],
  //审核状态
  RECRUIT_VERIFY_STATUS: [],
  //发布状态
  RECRUIT_RELEASE_STATUS: [],
  //通知类型
  RECRUIT_NOTICE_TYPE: [],
  //登录人类型
  RECRUIT_LOGIN_TYPE: [],
  //屏蔽类型
  RECRUIT_SHIELD_TYPE: [],
  //语种
  RECRUIT_LANGUAGE_TYPE: [],
  //语种
  RECRUIT_LANGUAGE_LEVEL: [],
  //职业一级分类
  RECRUIT_POSITION_F_TYPE: [],
  //职业二级分类
  RECRUIT_POSITION_S_TYPE: [],
  //反馈来源
  RECRUIT_FEEDBACK_SOURCE: [],
  //应聘反馈状态
  RECRUIT_FEEDBACK_STATUS: [],
  //学历
  RECRUIT_EDU: [],
  //应聘来源
  RECRUIT_APPLYFOR_SOURCE: [],
  //用户角色
  RECRUIT_USER_ROLE: [],
  //重点人员类型
  RECRUIT_POINT_TYPE: [],
  //专家状态
  RECRUIT_EXPERT_STATUS: [],
  //专家活动类型
  RECRUIT_ACT_TYPE: [],
  //专家活动日期类型
  RECRUIT_ACT_DATE_TYPE: [],
  //职业指导类型
  RECRUIT_GUIDE_TYPE: [],
  //特色活动类型
  RECRUIT_SPECIAL_ACTIVITY_TYPE: [],
  //实施举措类型
  RECRUIT_IMPLE_ACT_TYPE: [],
  //就业类型
  RECRUIT_EMPLOY_TYPE: [],
  //单位状态
  RECRUIT_CORP_STATUS: [],
  //招聘会类型
  RECRUIT_MEET_TYPE: [],
  //应聘类型
  RECRUIT_APPLYFOR_TYPE: [],
  //推荐类型
  RECRUIT_REC_TYPE: [],
  //页面按钮所属类型
  RECRUIT_BTN_TYPE: [],
  //敏感词类型
  RECRUIT_SEN_TYPE: [],
  //敏感词匹配规则
  RECRUIT_MATCH_RULE: [],
  //敏感词替换规则
  RECRUIT_REPLACE_RULE: [],
  //管理员发布内容详情类型
  RECRUIT_RELEASE_DETAIL_TYPE: [],
  //街镇
  GGJBXX_STREET: []
};
const getters = {
  yesno: state => state.YESNO,
  ggjbxx_qx: state => state.GGJBXX_QX,
  recruit_position_f_type: state => state.RECRUIT_POSITION_F_TYPE,
  recruit_position_s_type: state => state.RECRUIT_POSITION_S_TYPE,
  recruit_edu: state => state.RECRUIT_EDU,
  ggjbxx_street: state => state.GGJBXX_STREET,
  recruit_language_type: state => state.RECRUIT_LANGUAGE_TYPE,
  recruit_language_level: state => state.RECRUIT_LANGUAGE_LEVEL,
  recruit_work_nature: state => state.RECRUIT_WORK_NATURE,
  recruit_industry_type: state => state.RECRUIT_INDUSTRY_TYPE
};

const mutations = {
  set_YESNO: (state, dictionary) => {
    state.YESNO = dictionary;
  },

  set_GGJBXX_QX: (state, dictionary) => {
    state.GGJBXX_QX = dictionary;
  },

  set_RECRUIT_POSITION_F_TYPE: (state, dictionary) => {
    state.RECRUIT_POSITION_F_TYPE = dictionary;
  },

  set_RECRUIT_POSITION_S_TYPE: (state, dictionary) => {
    state.RECRUIT_POSITION_S_TYPE = dictionary;
  },

  set_RECRUIT_EDU: (state, dictionary) => {
    state.RECRUIT_EDU = dictionary;
  },

  set_GGJBXX_STREET: (state, dictionary) => {
    state.GGJBXX_STREET = dictionary;
  },

  set_RECRUIT_LANGUAGE_TYPE: (state, dictionary) => {
    state.RECRUIT_LANGUAGE_TYPE = dictionary;
  },
  set_RECRUIT_LANGUAGE_LEVEL: (state, dictionary) => {
    state.RECRUIT_LANGUAGE_LEVEL = dictionary;
  },
  set_RECRUIT_WORK_NATURE: (state, dictionary) => {
    state.RECRUIT_WORK_NATURE = dictionary;
  },
  set_RECRUIT_INDUSTRY_TYPE: (state, dictionary) => {
    state.RECRUIT_INDUSTRY_TYPE = dictionary;
  }
};

const actions = {
  init_Dictionary({ commit }, dicTpye) {
    queryDicData(JSON.parse(JSON.stringify({ code: dicTpye })))
      .then(res => {
        console.log('获取的字典表', res);
        if (res.status == 200) {
          commit(
            'set_' + dicTpye,
            res.result.data && typeof res.result.data === 'string'
              ? JSON.parse(res.result.data)
              : res.result.data
          );
        } else {
          console.log('加载数据字典时出错：' + res.message);
        }
      })
      .catch(e => {
        console.log('加载数据字典时出错：' + e);
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
