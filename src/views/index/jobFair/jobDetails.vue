<template>
  <div id="jobSearchView" class="content-box">
    <!--S 职位详情上半部分 -->
    <div class="infor-job">
      <div class="middle-box">
        <el-row>
          <el-col :span="19">
            <div class="job-title">
              IOS开发工程师 <i class="bl-bg i-style font-size16">见习</i>
              <span class="font-size24 font-or">12k-15k</span>
            </div>
            <div class="sixteen-opacity mat-15">
              <span>上海静安</span>
              <el-divider direction="vertical"></el-divider>
              <span>本科</span>
              <el-divider direction="vertical"></el-divider>
              <span>全职</span>
              <el-divider direction="vertical"></el-divider>
              <span>经验1~2年</span>
              <el-divider direction="vertical"></el-divider>
              <span>招聘8人</span>
            </div>
            <p class="sixteen-opacity mat-30">
              万达信息股份有限公司
              <img
                src="../../../assets/images/ico_rz.png"
                alt=""
                class="ico_rz"
              />
            </p>
            <p class="four-opacity mat-15">更新于 2020-11-06</p>
          </el-col>
          <el-col :span="5" class="padd-l">
            <el-button type="primary" class="white-btn mat-15"
              ><i class="el-icon-star-off"></i> 收藏</el-button
            >
            <el-button type="primary" class="release-btn mat-15">
              <i class="el-icon-position"></i>投简历</el-button
            >
            <div class="font12">
              <el-link :underline="false"
                ><img
                  class="ico_rz"
                  src="../../../assets/images/ico-01.png"
                  alt=""
                />完善在线简历</el-link
              >
              <el-link :underline="false"
                ><img
                  class="ico_rz"
                  src="../../../assets/images/ico-02.png"
                  alt=""
                />上传附件简历</el-link
              >
            </div>
            <p class="four-opacity mat-50">发布机构:上海某某职业代理有限公司</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--E  职位详情上半部分-->
    <el-row id="jobSearchBox">
      <el-col :span="19" class="middle-box padd-lr bor-r">
        <div class="title-border">职位描述</div>
        <p class="mat-15 little-tit">岗位职责：</p>
        <p class="little-tit">
          1、负责公司房产的营销推广，并做好相应的渠道开拓，并维护好渠道及客户关系；
        </p>
        <p class="little-tit">
          2、负责区域市场开拓、巡访责任范围内的区域市场，寻求市场及项目开发机会。
        </p>
        <p class="little-tit">3、开发商的约见、接洽、商务谈判</p>
        <p class="little-tit">
          4、根据开发商合作意向程度，有重点地选择开发商进行接洽和谈判事宜，争取合作机会。
        </p>
        <p class="little-tit">
          5、巩固已开发项目的同时维护原有项目使工作有延续性。
        </p>
        <p class="little-tit">
          6、根据本区域市场状况及具体个案，确定目标项目进行接洽。
        </p>
        <p class="little-tit">任职要求：</p>
        <p class="little-tit">1.有房产相关经验（有车者优先）</p>
        <p class="little-tit">2.责任心强，业绩能力突出，致力于从事销售工作；</p>
        <p class="little-tit">
          3.具有良好的沟通能力，责任心强，能承受工作压力以及团队合作精神；
        </p>
        <p class="little-tit">
          4.处理突发事件应变能力强，客户管理能力强，执行力强。
        </p>
        <p class="little-tit">待遇：</p>
        <p class="little-tit">底薪5k+业绩提成+满勤+公司福利 做六休一</p>
        <p class="little-tit">固定团建，弹性工作</p>
        <div class="title-border mat-15">公司介绍</div>
        <div class="little-tit  mat-15">
          <p class="introduce little-tit">
            金仕达科技有限公司是一家专业的房地产服务机构,公司成立以来,在同行和客户中赢得了良好的口碑。
            经过公司同仁共同努力和社会各界的鼎力支持，我们的规模逐渐壮大。
            公司拥有一流的销售团队、良好的渠道关系，致力于为客户提供一手房代理、二手房交易、
            以及房地产相关咨询等专业、完美、全面的不...金仕达科技有限公司是一家专业的房地产服务机构,公司成立以来,在同行和客户中赢得了良好的口碑。
            经过公司同仁共同努力和社会各界的鼎力支持，我们的规模逐渐壮大。
            公司拥有一流的销售团队、良好的渠道关系，致力于为客户提供一手房代理、二手房交易
          </p>
          <span class="look-all"
            >查看全部<i class="el-icon-arrow-down"></i
          ></span>
        </div>
        <div class="title-border mat-30">工作地址</div>
        <div class="map-box">
          <img src="../../../assets/images/map.png" alt="" />
        </div>
        <div class="title-border mat-15">
          看过该职位的人还看了
          <span class="fr fourteen-opacity">更多职位 > </span>
        </div>
        <el-row>
          <el-col :span="8">
            <div class="img-div clearfix">
              <img class="fl" src="../../../assets/images/img1.png" alt="" />
              <div class="job-right fl">
                <p class="font-sixteen">营销代表</p>
                <p class="font-eighteen font-or">8k-10k</p>
                <p class="four-opacity">希达软件</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="clearfix img-div">
              <img class="fl" src="../../../assets/images/img2.png" alt="" />
              <div class="job-right fl">
                <p class="font-sixteen">招聘专员</p>
                <p class="font-eighteen font-or">6k-8k</p>
                <p class="four-opacity">迈恒房地产</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="clearfix img-div">
              <img class="fl" src="../../../assets/images/img3.png" alt="" />
              <div class="job-right fl">
                <p class="font-sixteen">销售代表</p>
                <p class="font-eighteen font-or">5k-8k</p>
                <p class="four-opacity">金仕达科技</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5" class="padd-l ">
        <p class="sixteen-opacity">职位发布者</p>
        <div class="header-box clearfix">
          <img
            src="../../../assets/images/header.png"
            class="head-img"
            alt=""
          />
          <div class="fl mat-15 right-div ">
            <p class="sixteen-opacity">
              王琳 <span class="dqzx-span">当前在线</span>
            </p>
            <el-button type="primary" class="gray-btn or-br mat-15"
              ><i class="el-icon-chat-dot-round"></i> 立即沟通</el-button
            >
          </div>
        </div>
        <div class="mat-30 clearfix">
          <img
            class="fl ico_rz logos"
            src="../../../assets/images/logos.png"
            alt=""
          />
          <p class="font-sixteen font-or name-p">万达信息股份有限公司</p>
        </div>
        <div class="module1">
          <p class="four-opacity">
            <img src="../../../assets/images/ico01.png" alt="" /> 互联网
          </p>
          <p class="four-opacity">
            <img src="../../../assets/images/ico02.png" alt="" /> 上市
          </p>
          <p class="four-opacity">
            <img src="../../../assets/images/ico03.png" alt="" /> 1000-9999人
          </p>
          <p class="four-opacity">
            <img src="../../../assets/images/ico04.png" alt="" />
            https://www.jinshida.com/
          </p>
        </div>
        <div class="module2 mat-30">
          <p class="fourteen-opacity">
            相似职位 <span class="more fr four-opacity">更多</span>
          </p>
          <div class="module-li">
            <p class="fourteen-opacity">
              U3D游戏客户端主程 <span class="font-or">10-11k</span>
            </p>
            <p class="four-opacity">重庆聚心动 · 重庆</p>
          </div>
          <div class="module-li">
            <p class="fourteen-opacity">
              U3D游戏客户端主程 <span class="font-or">10-11k</span>
            </p>
            <p class="four-opacity">重庆聚心动 · 重庆</p>
          </div>
          <div class="module-li">
            <p class="fourteen-opacity">
              U3D游戏客户端主程 <span class="font-or">10-11k</span>
            </p>
            <p class="four-opacity">重庆聚心动 · 重庆</p>
          </div>
          <div class="module-li">
            <p class="fourteen-opacity">
              U3D游戏客户端主程 <span class="font-or">10-11k</span>
            </p>
            <p class="four-opacity">重庆聚心动 · 重庆</p>
          </div>
          <div class="module-li">
            <p class="fourteen-opacity">
              U3D游戏客户端主程 <span class="font-or">10-11k</span>
            </p>
            <p class="four-opacity">重庆聚心动 · 重庆</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'JobSearchIndex',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#jobSearchView {
  width: 90%;
  min-height: 100%;
  //max-height:1000px;
  margin: 0 auto 150px;
  background: #ffffff;
  //color: #000;
  //padding: 0;
  padding-bottom: 20px;
  .infor-job {
    background: #ffffff;
    padding: 20px 30px;
  }
  .middle-box {
    margin: 0 auto;
    //width: 1136px;
    position: relative;
    .job-title {
      font-size: 32px;
      color: #333;
      margin-top: 20px;
    }
    .font12 .el-link {
      margin-right: 5px;
    }
    .font12 img {
      position: relative;
      top: 3px;
      margin-right: 3px;
    }
    .ico_rz {
      display: inline-block;
    }
  }
  #jobSearchBox {
    padding-top: 20px;
    border-top: 1px dotted #dfdfdf;
    .title-border {
      font-size: 18px;
      color: #000;
      height: 26px;
      position: relative;
    }
    .little-tit {
      font-size: 14px;
      color: #656565;
      line-height: 30px;
    }
    .look-all {
      font-size: 14px;
      color: #1660c6;
      float: right;
    }
    .title-border {
      font-size: 18px;
      color: #000;
      height: 26px;
      position: relative;
      &::before {
        content: '';
        width: 35px;
        height: 4px;
        background: #fc7a43;
        position: absolute;
        left: 0;
        top: 22px;
        border-radius: 4px;
      }
    }
    .map-box img {
      width: 100%;
    }
    .img-div {
      border: 1px solid #ebebeb;
      margin-right: 15px;
      padding: 14px;
      box-sizing: border-box;
      margin-top: 25px;
      border-radius: 4px;
      img {
        display: inline-block;
      }
      .job-right {
        display: inline-block;
        margin-left: 15px;
        p {
          line-height: 30px;
        }
      }
    }
  }

  .header-box {
    margin-top: 20px;
    .head-img {
      width: 71px;
      height: 71px;
      border-radius: 50%;
      display: block;
      float: left;
    }
    .right-div {
      display: inline-block;
      margin-left: 15px;
      .sixteen-opacity {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
      }
      .or-br {
        border-color: #fc6f3d !important;
      }

      .gray-btn,
      .gray-btn:hover {
        color: #fc6f3d;
        background-color: transparent;
        border-color: #d1d1d1;
        padding: 3px 10px;
        border-radius: 20px;
      }
    }
  }
  .logos {
    width: 82px;
    height: 82px;
    border-radius: 14px;
    margin-right: 16px;
  }
  .name-p {
    line-height: 25px;
    padding-top: 10px;
  }

  .module1 {
    margin-top: 30px;
    p {
      line-height: 30px;
    }
    img {
      display: inline-block;
      position: relative;
      top: 3px;
      margin-right: 5px;
    }
  }
  .module2 {
    .fourteen-opacity {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }
    .module-li {
      margin-top: 20px;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 10px;
      p {
        line-height: 30px;
      }
    }
    .more {
      margin-right: 30px;
    }
  }
  .mat-15 {
    margin-top: 15px;
  }
  .mat-30 {
    margin-top: 30px;
  }
  .white-btn {
    color: #fc6f3d;
    background-color: #fff;
    border-color: #ff9954;
  }
  .release-btn {
    background-color: #fc7a43;
    font-size: 14px;
    color: #fff;
    border-color: #fc7a43;
  }
  .font12 {
    font-size: 12px;
    color: #656565;
    margin-top: 15px;
  }
  .mat-50 {
    margin-top: 50px;
  }
  .padd-l {
    padding-left: 30px;
  }
  .bor-r {
    border-right: 1px solid #eaeaea;
  }

  .padd-lr {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
