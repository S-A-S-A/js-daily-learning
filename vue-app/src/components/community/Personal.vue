<template>
<button @click="handleClick">{{loginFlag ? '退出':'登录'}}</button>

</template>

<script>
export default {
    data(){
        return{
            loginFlag:false
        }
    },
   created(){
    //    console.log(this.$route.matched[0].meta.login);
       this.loginFlag=this.$route.matched[0].meta.login;   //这个login是在router.js中的community处的meta中设的
   },
   methods:{
       handleClick(){
           this.loginFlag=!this.loginFlag;
           this.$route.matched[0].meta.login=this.loginFlag;
         
   }
}
}
</script>