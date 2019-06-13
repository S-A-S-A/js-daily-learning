<template>
  <div class="foot">
    <div class="fleft">
      <div class="imgbox">
        <img src="../assets/imags/脚标.png" alt>
      </div>
      <div class="textbox">
        <div class="left">打开</div>
        <div class="center">Dilirab</div>
        <div class="right">她在这里等着你</div>
      </div>
    </div>

    <div class="open">立即打开</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.foot {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.imgbox {
  width: 36px;
  height: 36px;
  display: inline-block;
  margin: 7px 10px 7px 0;
}
.imgbox img {
  width: 100%;
  height: 100%;
}

.textbox {
  display: inline-block;
  position: relative;
  bottom: 12px;
}
.textbox .left {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #191919;
  letter-spacing: 0;
  line-height: 13px;
  display: inline-block;
}
.textbox .center {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #fe5c33;
  letter-spacing: 0;
  line-height: 13px;
  display: inline-block;
}
.textbox .right {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #191919;
  letter-spacing: 0;
  line-height: 13px;
  display: inline-block;
}
.open {
  width: 48px;
  height: 16.5px;
  background-color: #fe5c33;
  color: #fff;
  font-size: 12px;
  letter-spacing: 0;
  display: inline-block;
  border-radius: 8px;
  padding: 7px 20px;
  margin: 10px 12px 10px auto;
}
</style>