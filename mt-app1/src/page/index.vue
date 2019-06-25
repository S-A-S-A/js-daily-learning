<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu></m-menu>
      </el-col>
      <el-col :span="19">
        <m-life></m-life>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="recomment"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "../components/index/menu";
import MLife from "../components/index/life";
import Container from "../components/index/container";
export default {
  data() {
    return {
      iStyle: {
        class:'istyle',
        title: "有格调",
        list: [
          {
            text: "全部",
            type: "all"
          },
          {
            text: "约会聚餐",
            type: "food"
          },
          {
            text: "丽人SPA",
            type: "spa"
          },
          {
            text: "电影演出",
            type: "movie"
          },
          {
            text: "品质出游",
            type: "travel"
          }
        ]
      },
      recomment: {
        class:'youhui',
        title: "狠优惠",
        list: [
          {
            text: "全部",
            type: "all"
          },
          {
            text: "美食",
            type: "food"
          },
          {
            text: "休闲",
            type: "xiuxian"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MLife,
    Container
  }
};
</script>

<style lang="scss">
@import "../assets/css/index/index.scss";
</style>