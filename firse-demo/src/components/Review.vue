<template>
  <div>
    <div class="wordwrapper">
      <div class="word">评论</div>
    </div>

    <div class="reviewmodule"></div>
    <ul>
      <li v-for="item in reviewList" :key="item.reviewId" class="box">
        <div class="imgbox">
          <img :src="item.reviewImg">
        </div>
        <div class="textbox">
          <p class="reviewId">{{item.reviewId}}</p>
          <p class="reviewContent">{{item.reviewContent}}</p>
          <p class="reviewTime">{{item.reviewTime}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewList: [
        {
          reviewImg: require("../assets/imags/千玺1.jpg"), //本地资源引入必须用require，不然会被当成字符串解析，网络资源不需要用require
          reviewId: "路上飞鸟",
          reviewContent: "太厉害了，太漂亮了",
          reviewTime: "5小时前"
        },
        {
          reviewImg: require("../assets/imags/千玺2.png"),
          reviewId: "路人甲",
          reviewContent: "太美了!",
          reviewTime: "5小时前"
        },
        {
          reviewImg: require("../assets/imags/千玺3.png"),
          reviewId: "路人乙",
          reviewContent: "美美美!!!!",
          reviewTime: "5小时前"
        }
      ]
    };
  }
};
</script>

<style scoped>
.wordwrapper {
  width: 100%;
  height: 40px;
}
.word {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #191919;
  letter-spacing: 0;
  margin-top: 9px;
  margin-bottom: 8.5px;
  position: relative;
}
.word::before {
  content: " ";
  display: block;
  width: 14px;
  height: 3px;
  border-radius: 2px;
  background: #191919;
  position: absolute;
  top: 26.5px;
  left: 8.5px;
}
.word::after {
  content: "200";
  display: block;
  width: 20px;
  height: 15px;
  font-family: PingFangSC-Regular;
  font-size: 11px;
  color: #b2b2b2;
  letter-spacing: 0;
  position: absolute;
  bottom: 8px;
  left: 33.5px;
}
.box {
  width: 100%;
  height: 87.5px;
  margin-top: 20px;
  /* position: relative; */
}
.imgbox {
  width: 36px;
  height: 36px;
  margin-right: 15px;
  display: inline-block;
  position: relative;
  top: -33px;
}
.imgbox img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.textbox {
  width: 291px;
  height: 100%;
  display: inline-block;
  border-bottom: 0.5px solid #ebebeb;

}
.reviewId {
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #999999;
  letter-spacing: 0;
  margin-bottom: 5px;
}
.reviewContent {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #070707;
  letter-spacing: 0;
  margin-bottom: 13px;
}
.reviewTime {
  font-family: PingFangSC-Regular;
  font-size: 11px;
  color: #b2b2b2;
  letter-spacing: 0;
  line-height: 11px;
}
</style>