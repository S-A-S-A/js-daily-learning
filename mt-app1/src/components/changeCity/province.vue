<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
       @change="changeProvince"
       className="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
       className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <!-- remoteMethod表示输入时会进行一个远程的搜索 
         loading表示加载中
      -->
      
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select";
import api from '../../api/index'
export default {
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList:["成都","绵阳","梓潼"],
      searchWord:"",
      loading:false,
      cityDisabled:true
    };
  },
  created(){
    api.getProvince().then(res=>{
      this.provinceList=res.data.data.map((item)=>{
        item.name=item.provinceName
        return item;
        })
    })
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item){
      this.province=item.name;
      this.cityDisabled=false;
      this.cityList=item.cityInfoList;
    },
     changeCity(item){
      this.city=item.name;
      this.$store.dispatch('setPosition',item);
      this.$router.push({name:'index'})
    },
    remoteMethod(val){
       //请求后端接口：val为输入的值，这里拿到后发给后台，后端再返回给我们列表
    }

  }
};
</script>

<style lang="scss">
@import "../../assets/css/changecity/iselect.scss";
</style>