<template>
  <div>
    <div class="change-area" v-if="isChanging">
      <div class="box">
        <label for>课程名称：</label>
        <input type="text" v-model="title"> 
      </div>
      <div class="box">
        <label for>课程价格：</label>
        <input type="text" v-model="price">
      </div>
      <button class="confirm-btn"
              @click="confirm"
      >提交修改</button>
    </div>
    <template v-else>
      <ul class="course-area" >
        <li v-for="(item,index) in courseList" 
             :key="item.name" 
              class="course">
          {{item.name}}
          {{item.price}}
          <button class="change-btn"
                  @click="change(index)"
          >点击修改</button>
        </li>
      </ul>
      <!-- <button class="change-over">已全部修改完成</button> -->
        <router-link tag="button"
        class="change-over"
        :to="{name:'learn'}"
        >
        已全部修改完成
        </router-link>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
      return {
        isChanging: false,
        title:'',
        price:0,
        index:0
      }
    },
  computed: {
    ...mapState('course',['courseList'])   //mapState用了第一个参数，意为在store.js里抽出来了一个单独的模块，除了直接找state中的数据，mapState前直接写模块名没有用，要想起作用，必须在store里这个模块下写一个命名空间namespaced，并设置为true
  },
  methods:{
      change(index){
          this.isChanging=true;
          const course=this.courseList[index];
          this.title=course.name;
          this.price=course.price;
          this.index=index;
      },
      confirm(){
          const name=this.title;
          const price=this.price;
          const index=this.index;
          this.$store.commit('course/changeCourse',{name,price,index});
          this.isChanging=false;
      }
  }
};
</script>

<style scoped>
.course-area {
  margin-bottom: 20px;
}
.course {
  max-width: 600px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.course:last-of-type {
  border: none;
}
.change-btn {
  background-color: #000;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  margin-left: 10px;
}
.change-area {
  display: inline-block;
}
.change-area .box {
  margin-bottom: 10px;
}

.change-area input {
  width: 528px;
  padding: 4px;
  border: 1px solid #e5e5e5;
}

.change-area input:hover {
  border-color: #9a9a9a;
}

.confirm-btn {
  display: block;
  margin: 0 auto;
  width: 200px;
  line-height: 30px;
  background-color: #000;
  color: #fff;
}

.change-over {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
}
</style>