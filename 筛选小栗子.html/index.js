var personArr=[
    {name:'王港',src:'./img/热巴1.jpg',des:'颈椎不好',sex:'m',age:18},
    {name:'刘莹',src:'./img/热巴2.jpg',des:'我是谁',sex:'f',age:23},
    {name:'王秀莹',src:'./img/热巴3.jpg',des:'我很好看',sex:'f',age:25},
    {name:'刘金雷',src:'./img/热巴4.jpg',des:'你没有见过的陌生的脸',sex:'m',age:15},
    {name:'刘飞翔',src:'./img/热巴5.jpg',des:'瓜皮刘',sex:'m',age:20}
];
var ul=document.getElementsByTagName('ul')[0];
var input=document.getElementsByTagName('input')[0];
      
//数据渲染页面
function RenderPage(data){
    //遍历
    var htmlStr=' ';
    ul.innerHTML=' ';
    data.forEach(function(ele,index,self){
       htmlStr=htmlStr+'<li><img src="'+ele.src+'"></img><p class="name">'+ele.name+'</p><p class="des">'+ele.des+'</p></li>'
    });
    ul.innerHTML=htmlStr;
}

RenderPage(personArr);
//防抖
function debounce(handler,delay){
  var timer=null;
  return function(){
      var self=this;          //此处的this指的是oninput里的this，因为oninput调用了debounce
      var arg=arguments;
      clearTimeout(timer);    //此处为防抖重要步骤，即第一次输入的值将会在800毫秒后再执行，如果在800ms内再次输入第二个值，此时还未执行第一次值的输出，就已经清除了执行第一次值输出的定时器
      timer=setTimeout(function(){
          handler.apply(self,arg);     //此处的self不能直接用this，此处直接用this代表的是function里的this，我们需要用到的是指向执行了debounce的oninput的this
      },delay);                       //另指向oninput的this里没有方法，调用handler函数来实现自己的目的，arg是传入handler的实参，这里的arguments指的是oninput里的输入值thi.value
    }
}
//添加行为
function deal(){
    state.filterText=this.value;
    //根据过滤条件，过滤之后的数组
    // var newArr= filterArrByText(personArr,filterText);
    // var newArr2=filterArrBySex(newArr,filterSex);
    RenderPage(lastPerArr());
    console.log(this.value);
}
input.oninput=debounce(deal,800);
//根据文本过滤数据的函数 纯函数
function filterArrByText(data,text){
    if(!text){
        return data;
    }else{
         var newArr=data.filter(function(ele,index){
            return  ele.name.indexOf(text)!=-1;                          //str.indexof('abc'):表示str这个字符串里面是否有abc这个组成，有的话返回相对应得位置，，没有得话，返回-1
        });
        return newArr;
    }
}
var btnArr=[].slice.call(document.getElementsByClassName('btn'),0);//类数组用slice截取后返回一个数组
var lastActiveBtn=btnArr[2];
btnArr.forEach(function(ele,index,self){
     ele.onclick=function(){
         changeActive(this);        //这里的this都指的是btnArr。谁调用，this指向谁，此处btnArr调用
         state.filterSex=this.getAttribute('sex');
        //  var newArr= filterArrBySex(personArr,filterSex);
        //  var newArr2= filterArrByText(newArr,filterText);
         RenderPage(lastPerArr());
     }
});
function changeActive(curActiveBtn){
    curActiveBtn.className='btn active';
    lastActiveBtn.className='btn';
    lastActiveBtn=curActiveBtn;
}
//根据性别过滤
function filterArrBySex(data,sex){
   if(sex=='a'){
     return data;
   }else{
       return data.filter(function(ele,index,self){
             return ele.sex==sex;
       });
   }
}
var state={
filterText:'',     //表示一开始的时候的状态，空串代表不根据人的名字来进行过滤
filterSex:'a'   //表示一开始的时候的状态，此时处于所有性别的人都选中的状态
}
//公共函数筛选
function addfn(obj,arr){
    return function(){
        var lastarr=arr;
        for(var prop in obj){
            lastarr=obj[prop](lastarr,state[prop]);
        }
        return lastarr;
    }
}

var lastPerArr=addfn({filterText:filterArrByText,filterSex:filterArrBySex},personArr);