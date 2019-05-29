define(function(require,exports,module){
    var m1=require('./modules/m1');
    m1.foo();
    var m4=require('./modules/m4');
    console.log(m4)
    m4.m4();
})