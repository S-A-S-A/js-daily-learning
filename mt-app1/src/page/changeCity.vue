<template>
  <div class="page-changeCity">
    <el-row>
        <province />
    </el-row>
    <el-row>
       <hot title="热门城市:" :list="hotList" />
    </el-row>
    <el-row>
          <hot title="最近访问:" :list="rencentList" />
    </el-row>
    <el-row>
      <categroy />
    </el-row>
  </div>
</template>

<script>
import api from '../api/index';
import Province from "../components/changeCity/province";
import Hot from "../components/changeCity/hot";
import Categroy from "../components/changeCity/categroy";
export default {
  data(){
   return{
     hotList:[],
     rencentList:[]
   }
  },
  components:{
      Province,
      Hot,
      Categroy
  },
  created(){
    api.getHotCity().then(res=>{
      this.hotList=res.data.data.map((item)=>item.name);
    });
    api.getRecentCity().then(res=>{
      this.rencentList=res.data.data.map((item)=>item.name);
    })
  }
};
</script>

<style scoped>
</style>