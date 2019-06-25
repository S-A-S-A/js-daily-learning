<template>
  <div class="header">
    <el-row>
        <!-- 不写内容一般用单标签形式 -->
      <top-bar/>
    </el-row>
    <el-row>
      <search-bar/>
    </el-row>
  </div>
</template>

<script>
import topBar from "./TopBar";
import searchBar from "./SearchBar";
export default {
  components: {
    topBar,
    searchBar
  }
};
</script>

<style scoped>
</style>