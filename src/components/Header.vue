<template>
  <el-row>
    <el-col :span="24">
    <div class="head-wrap">
      <div class="index-logo"></div>
      <div class="index-title">魅萌科技后台管理系统</div>
      <div class="index-user">{{userName}}</div>
      <div class="index-out" @click="centerDialogVisible = true"></div>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        :close-on-click-modal="false"
        width="280px"
        center>
        <span style="text-align: center">确定退出登录？</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="loginOut">确 定</el-button>
          <el-button @click="centerDialogVisible = false">取 消</el-button>
         </span>
      </el-dialog >
    </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        userName:"",
        centerDialogVisible: false
      }
    },
    mounted () {
      if(this.$cookies.isKey(this.$appConfig.userCookiesKey)){
        this.userName = '你好，'+ this.$appConfig.userInfo.username
      }
    },
    methods:{
      loginOut(){
        this.$loading()

        this.centerDialogVisible = false
        let self = this

        self.$loading("","close")
        self.$message({
          message: "退出登录成功",
          type: 'success'
        })
        if(self.$cookies.isKey(self.$appConfig.userCookiesKey)){
          self.$cookies.remove(self.$appConfig.userCookiesKey);
          setTimeout(function(){
            self.$router.go(0);
          },300)
        }else {
          setTimeout(function(){
            self.$router.go(0);
          },300)
        }

      }
    }
  }
</script>
<style scoped>
  .head-wrap {
    position: relative;
  }
  .index-logo,.index-title{
    display: inline-block;
  }
  .index-logo,.index-out{
    background-repeat: no-repeat;
    background-position: center;
  }
  .index-logo{
    width: 50px;
    height: 50px;
    background-image: url("./../../static/login/mmLogo.png");
    background-size: 50px;
    margin-top: 3px;
    margin-left: 10px;
    border-radius: 50%;
  }
  .index-title,.index-out,.index-user{
    position: absolute;
    font-weight:bold;
    color:rgba(255,255,255,1);
  }
  .index-title{
    height: 18px;
    line-height: 18px;
    font-size:24px;
    top: 19px;
    left: 70px;
  }
  .index-user{
    height: 14px;
    font-size: 16px;
    line-height: 14px;
    top: 21px;
    right: 50px;
  }
  .index-out{
    width: 40px;
    height: 40px;
    background-image: url("./../../static/icon/loginOut.png");
    background-size: 40px;
    right: 0px;
    top: 12px;
    cursor: pointer;
  }
</style>
<style>
  .head-wrap .el-dialog__header{
    padding: 0 !important;
  }
  .head-wrap .el-dialog__headerbtn{
    font-size: 24px !important;
  }
  .head-wrap .el-dialog--center .el-dialog__body{
    padding: 0 21px !important;
  }
  .head-wrap  .el-dialog{
    border-radius: 5px;
  }
  .head-wrap .el-dialog--center .el-dialog__body{
    text-align: center;
  }
/*
  .head-wrap .el-button--small, .el-button--small.is-round, .el-button--default:hover {
     width: 74.16px !important;
  }*/
  .head-wrap .el-dialog__footer{
    padding-top: 0 !important;
  }
  .head-wrap .el-button--primary{
    border:0px !important;
  }
  .head-wrap .el-dialog__headerbtn {
    top: 6px !important;
    right: 8px !important;
  }
  .head-wrap .el-dialog__title{
    font-size: 12px !important;
    font-weight:bold;
  }
  .head-wrap .el-button+.el-button {
    margin-left: 40px !important;
  }
   .head-wrap .el-button--default,.head-wrap .el-button--default:hover {


    border-color: rgba(239, 75, 75, 1)!important;
    color: rgba(239, 75, 75, 1)!important;
    background-color: #fff!important;
  }
  .head-wrap .el-button--primary,.head-wrap .el-button--primary:hover {
      color: #FFF!important;
      background-color: rgba(239, 75, 75, 1)!important;
      border:0px !important;
  }
</style>
