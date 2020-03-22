<template>
  <el-row class="tac" height="800px;">
    <el-col :span="24">
      <el-menu
        class="el-menu-vertical-demo"
        router
        unique-opened
        @open="handleOpen"
        @close="handleClose"
        :default-active="activeIndex"
        :default-openeds="openeds"
        background-color="rgba(255, 255, 255, 1)"
        text-color="rgba(25, 25, 25, 1)"
        active-text-color="#FFFFFF">
        <el-submenu v-for="item in menu" :index="item.id" :key="item.id" >
          <template slot="title">
            <i :class="item.icon"></i>
            <span v-text="item.name"></span>
          </template>
          <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
            <el-menu-item :index="sub.componentName" v-text="sub.name" :route="sub.value">
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
  .over-hide {
    overflow: hidden;
  }
</style>

<script>
  import menu from '@/config/menu-config'
  export default {
    data () {
      return {
        menu: menu,
        activeIndex:'reportList',
        openeds: ['0'],
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        //console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        //console.log(key, keyPath)
      }
    }
  }
</script>
<style >
  .tac .el-submenu{
    width: 200px;
  }
  .tac .el-submenu__title{
      /* width: 200px; */
      font-size: 20px;
      font-family: PingFang SC;
      font-weight:bold;
      color:rgba(25,25,25,0.85);
  }
  .tac .el-submenu .el-menu-item{
      font-size: 18px;
      font-size: 18px;
      min-width: 180px;
      width: 150px;
      margin: 0 auto;
      border-bottom: 1px solid rgba(0,0,0,0.1);
/* opacity:0.1; */
  }
   .tac .el-menu-item-group__title{
     padding: 0;
  }
  .tac .el-menu-item.is-active{
     background: #f39800 !important;
         border-radius: 5px;
    /* height: 40px; */
  }
   .mid-Showicon{
    background-repeat: no-repeat;
    background-position: center;
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    background-image: url("../../static/icon/reportManage.png");
    background-size: 20px;

  }
</style>
