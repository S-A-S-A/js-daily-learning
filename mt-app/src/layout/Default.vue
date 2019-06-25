<template>
<div class="page-default">
    <el-container>
  <el-header>
    <my-header></my-header>
  </el-header>
  <el-main>
      <div class="test">
        <ul class="nav">
          <li>
               <router-link to="/">1</router-link>
          </li>
          <li>
               <router-link to="/">2</router-link>
          </li>
          <li>
               <router-link to="/">3</router-link>
          </li>
        </ul>
      </div>
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
</div>

</template>

<script>
import MyHeader from '../components/header/Index'
export default {
   components:{
     MyHeader
   }
}
</script>
<style  scoped>
   @import '../assets/css/test.scss';

</style>

