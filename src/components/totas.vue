<template>
  <div class="wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">
    <i :class="iconState ?'success':'wrong'"></i>
    {{text}}
  </div>
</template>

<script>
  export default {
    name: 'totas'
  }
</script>

<style scoped>
  .wrap{
    position: fixed;
    left: 50%;
    top:10%;
    background:rgba(255,255,255,1);
    border-radius:4px;
    height: 50px;
    transform: translate(-50%,-50%);
    color:#fff;
    font-size: 0.1rem;
    text-align: center;
    padding: 0 20px;
    font-size:18px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(0,0,0,0.35);
    line-height:50px;

  }
  .fadein {
    animation: animate_in 0.5s;
  }
  .fadeout {
    animation: animate_out 0.5s;
    opacity: 0;
  }
  @keyframes animate_in {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes animate_out {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  .success{
    width: 20px;
    height: 20px;
    display: block;
    background: url('../../static/icon/success.png')no-repeat;
    background-size: 20px;
    margin: -8px auto;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }
  .wrong{
    width: 20px;
    height: 20px;
    display: block;
    background: url('../../static/icon/error.png')no-repeat;
    background-size:  20px 20px;
    margin: -8px auto;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }
</style>
