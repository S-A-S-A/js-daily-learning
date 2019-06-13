<template>
  <div id="app">
    <div class="wrapper">
      <div class="leftpointer">
        <img src="./assets/imags/向左箭头.png" alt>
      </div>
      <div class="header">
        <div class="hleft">
          <img src="./assets/imags/热巴.jpg" alt>
          <span class="headertext">迪丽热巴发表了微博</span>
        </div>
        <div class="headertime">1年前</div>
      </div>
      <div class="text">
        感谢前9场每一位的陪伴...
        <br>接下来 温哥华 多伦多 圣荷西 洛杉矶 新加坡 马来西亚
        <br>澳大利亚 伦敦 巴黎 香港 台湾
        <br>陆续相见 承蒙关照... ​​​​
      </div>
      <div class="hiddenscroll">
        <div class="pictures">
          <div class="picture-box"> <img src="./assets/imags/热巴 2.jpg" alt></div>
         <div class="picture-box">    <img src="./assets/imags/热巴3.jpeg" alt></div>
         <div class="picture-box"> <img src="./assets/imags/热巴4.jpg" alt></div>
         <div class="picture-box"> <img src="./assets/imags/热巴5.jpg" alt></div>
        </div>
      </div>
      <div class="review">
       <review-view></review-view>
       <footer-view></footer-view>
      </div>
    </div>
  </div>
</template>

<script>
import Review from "./components/Review.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    ReviewView:Review,
    FooterView:Footer
  }
};
</script>

<style scoped>
.wrapper {
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
}
.leftpointer {
  width: 100%;
  height: 90px;
}
.leftpointer img {
  width: 32px;
  height: 32px;
  margin-top: 29px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 57.5px;
  /* position: relative; */
}
.hleft {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 7.5px 12px 15px 0px;
}
.headertext {
  width: auto;
  height: 20px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #070707;
  letter-spacing: 0;
  line-height: 20px;
  /* vertical-align: 55px; */
}

.headertime {
  width: auto;
  height: 15px;
  font-family: PingFangSC-Regular;
  font-size: 11px;
  color: #999999;
  letter-spacing: 0;
}
.hiddenscroll{
  width:100%;
  height:111.5px ;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-top: 15px;  
}
/* ::-webkit-scrollbar{
  display: none;
  height: 0px;
} */
.pictures {
 width: 150%;
}
.hiddenscroll .picture-box{
  float: left;
  width: 111.5px;
  height: 111.5px;
  margin-right: 10px;
}
.picture-box img {
  width: 100%;
  height: 100%;
}
.review{
  margin-top: 15px;
}
</style>
