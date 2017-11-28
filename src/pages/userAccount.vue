<style scoped>
  /**
  * Created by web17code
  */
  .content1 {
    margin-top: 0.7rem;
    height: 9.5rem;
    border-bottom: 1px solid #2c3e50;
  }
  .accountTitle{
    padding:0 1rem;
    overflow: hidden;
    height:2.5rem;
    line-height: 2.5rem;
  }
  .accountTitle .accountTitle1,.accountTitle .accountTitle2{
    float: left;
  }
  .accountTitle .accountTitle3{
    float: right;
  }
  .accountTitle .accountTitle1{
    font-size:1.1rem;
    font-weight: bold;
  }
  .accountTitle .accountTitle2{
    height: 1.6rem;
    line-height:1.6rem;
    margin-top: 0.45rem;
    font-size:0.875rem;
    padding: 0rem 0.5rem;
    border:1px solid #2c3e50;
    border-radius: 0.3rem;
    margin-left: 1rem;
  }
  .accountTitle .accountTitle3{
    font-size:1rem;
  }
  .accountTitle .material-icons{
    height: 2.5rem;
    line-height:2.5rem;
    float: right;
  }
  .content1 .accountNum{
  line-height:7rem;
  font-size: 2.5rem;
  font-weight: bold;
  color:#FFCC00;
  }
  .content2{
    overflow: hidden;
    height: 5rem;
    border-bottom: 1px solid #2c3e50;
    background-color: #f2f2f2;
  }
  .content2 .account_inout{
    float: left;
    width: 50%;
    display: block;
    border-right:1px solid #2c3e50;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    height: 3.5rem;
    margin-top: 0.75rem;
  }
  .content2 .account_inout:last-child{
    border:none;
  }
  .content2 .account_inout .account_inout1{
    display: block;
    height:1.5rem;
    line-height: 1.5rem;
  }
  .content2 .account_inout .account_inout2{
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
    height:2rem;
    line-height: 2rem;
  }
</style>

<template>
  <div>

    <!--标题头部-->
    <mu-appbar title="Title" class="titleHeader">
      <img class="titleHeaderAvatar"
           src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1741535271,3873548840&fm=27&gp=0.jpg" alt="头像"
           slot="left">
      <p slot="default" style="font-size: 1.3rem;line-height: 1;">个人资产</p>
      <p slot="right" style="font-size: 1rem;">排行榜</p>
    </mu-appbar>

    <!--内容区-->
    <div class="content1">
      <div class="accountTitle">
        <p class="accountTitle1">总资产</p>
        <p class="accountTitle2">明细</p>
        <mu-icon value="navigate_next"/>
        <p class="accountTitle3">总资产趋势图</p>

      </div>
      <div class="accountNum">267.25</div>
    </div>
    <div class="content2">
      <p class="account_inout">
        <span class="account_inout1">收入</span>
        <span class="account_inout2">150</span>
      </p>
      <p class="account_inout">
        <span class="account_inout1">支出</span>
        <span class="account_inout2">117.25</span>
      </p>
    </div>
    <!--标题头-->
    <!--<div class="titleHeader cf17">
      <img class="titleHeaderAvatar" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1741535271,3873548840&fm=27&gp=0.jpg" alt="">
      <div class="titleHeaderTxt">个人资产</div>
      <div class="titleHeaderDetail">明细</div>
    </div>-->
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    props: {},
    methods: {},
    created: function () {
    },
    mounted: function () {
    },
    components: {}
  }
</script>
