import loadsh from 'lodash-es';
var sum =function(){
    console.log('sum');
}

var isArray=function(arg){
    console.log(loadsh.isArray(arg));
}
export {
    sum,
    isArray
}