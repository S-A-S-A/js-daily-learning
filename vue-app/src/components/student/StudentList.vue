<template>
  <div>
      学生列表：
      <ul>
          <li v-for="(item,index) in student"
               :key="index+item">
               {{index}}-{{item}}
               </li>
      </ul>
  </div>

</template>

<script>
import {mapState, mapGetters} from 'vuex' 
export default {
//   props:['student-list']
data(){
    return{
        // studentList:[]
    }
},
computed:{
    ...mapState('student',['studentList']),
    // ...mapGetters(['newStudent'])//数组
    ...mapGetters('student',{
        student:'newStudent'
    })
    // newStudent(){
    //     return this.$store.getters.newStudent
    // }
},
created(){
    // console.log(this.bus.brotheradd)
    this.bus.$on('brotheradd',name=>{
        this.studentList.push(name)
    })
}
}
</script>

<style scoped>

</style>