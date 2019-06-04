import './index.css';
//1、单纯想拿到date.json的数据
// var json =require('./date.json');
// console.log(json);


//利用ajax
import $ from 'jquery';
$.ajax({
    url:'http://localhost:9091/date.json',
    success:function(date){
        console.log(date);
    },
    error:function(){
        console.log('error')
    }
})
if(module.hot){
    console.log('wokule');
    module.hot.accept();
}