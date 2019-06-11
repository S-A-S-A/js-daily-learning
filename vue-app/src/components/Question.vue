<template>

<div>
     问题:{{question}}
</div>
   

</template>

<script>
export default {
   created(){
        const questionId=this.$route.params.id;
        const index =this.questionList.findIndex(item=>item.questionId==questionId);//findIndex：如果传入的questionList的item中的questionId和我们获取到的此处的$route里的params的id值一样，则返回item此时的索引值index,找不到则返回-1
        
        if(index==-1){
           //跳转  调用router的一些方法:go()，0不动，-1返回上一个页面，-2返回上个页面的上一个页面
           //                         replace()，用括号里的路径代替当前路径 
          //   this.$router.go(-1);
             this.$router.replace('/err.html');
        //   this.$router.push({name:'err'});   //push 相当于往页面序列中添加了一个页面，此处返回时，返回到if条件判断处继续执行，所以此处一直无法回退，跟此处写法有关
        }else{
           this.question=this.questionList[index].title;
        }
 },
   data(){
        return {
             question:'',
              questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
   }
}
</script>

<style scoped>

</style>