<!--
 * @Author: your name
 * @Date: 2020-12-16 10:36:27
 * @LastEditTime: 2021-01-21 17:36:26
 * @LastEditors: GengHH
 * @Description: In User Settings Edit
 * @FilePath: \jb2q-hrm-web\src\views\person\personalCenter\permissionSettings.vue
-->
<template>
  <el-row :gutter="20">
    <el-col :span="8" v-loading="loading1">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-switch v-model="allowSearchView"></el-switch>
        </div>
        <div class="text item">是否允许特定单位搜索到本人简历</div>
      </el-card>
    </el-col>
    <el-col :span="8" v-loading="loading2">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-switch v-model="allowArtificialRecoView"></el-switch>
        </div>
        <div class="text item">是否接受管理员人工推荐职位</div>
      </el-card>
    </el-col>
    <el-col :span="8" v-loading="loading3">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-switch v-model="allowAutoRecoView"></el-switch>
        </div>
        <div class="text item">是否接受系统自动推荐职位</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'permissionSettings',
  data() {
    return {
      pid: '',
      allowSearch: '0',
      allowArtificialReco: '1',
      allowAutoReco: '0',
      loading1: false,
      loading2: false,
      loading3: false
    };
  },
  computed: {
    allowSearchView: {
      get: function() {
        return !!Number(this.allowSearch);
      },
      set: function(v) {
        this.allowSearch = v ? '1' : '0';
        this.loading1 = true;
        this.setPermission(1);
      }
    },
    allowArtificialRecoView: {
      get: function() {
        return !!Number(this.allowArtificialReco);
      },
      set: function(v) {
        this.allowArtificialReco = v ? '1' : '0';
        this.loading2 = true;
        this.setPermission(2);
      }
    },
    allowAutoRecoView: {
      get: function() {
        return !!Number(this.allowAutoReco);
      },
      set: function(v) {
        this.allowAutoReco = v ? '1' : '0';
        this.loading3 = true;
        this.setPermission(3);
      }
    }
  },
  methods: {
    setPermission(index) {
      setTimeout(() => {
        switch (index) {
          case 1:
            this['loading' + index] = false;
            break;
          case 2:
            this['loading' + index] = false;
            break;
          case 3:
            this['loading' + index] = false;
            break;
        }
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 30px;
}
</style>
