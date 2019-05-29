define(function(require,exports,module){
    var msg='m4';
    var m2=require('./m2');   //同步加载
    console.log(m2)
       m2();
     require.async('./m3',function(val){  //异步加载  第二个参数是一个函数，函数的形参就是异步加载获得的对象
        console.log(val)
        val.m3();
     });
     function  fun(){
         console.log(this,msg);
     }
     exports.m4=fun;
})