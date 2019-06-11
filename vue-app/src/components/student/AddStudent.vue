<template>
<div>
    添加学生：
    <input type="text" v-model="name">
    <button @click="changeStudent({name,number:1})">确认添加</button>
</div>

</template>

<script>
import {mapState, mapActions} from 'vuex' //mapState有返回值，返回值是一个对象，有很多key，value，value是函数

export default {
data(){
    return{
        name:''
    }
},
methods:{
    ...mapActions('student',['changeStudent'])    //下面的简略写法，主要是要导入，还有上面click对应执行的函数要改，传的参数也不能忘记
    // add(){
    //     // this.$emit('fatheradd',this.name)
    //     // this.bus.$emit('brotheradd',this.name)
    //     // this.$store.state.studentList.push(this.name);
    //     // this.$store.commit('changeStudent',this.name);//用commit来触发store.js中mutations中的changeStudent函数。若传的是对象，这里也需写成对象形式{name：this.name,number:1}
    //     this.$store.dispatch('changeStudent',{name:this.name,number:1});//用dispatch来触发store.js中actions中的changeStudent函数。若传的是对象，这里也需写成对象形式{name：this.name,number:1}
    // }
},
}
</script>

<style scoped>
  button{
      margin: 20px;
      line-height: 25px;
      width: 80px;
  }
</style>