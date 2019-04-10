function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];//null表示伪类，，这里为查询计算样式，括号里第二个参数基本上全都写为null；这一句表示返回想要获取的样式的值
    }else {
        return dom.currentStyle[attr];
    }
}
function startmove(dom,data,func){
    clearInterval(dom.timer);
    var speed=null,icur=null,name=null;
    startTimer=dom.timer=setInterval(function(){
        var stop=true;
       for(var attr in data){
           if(attr=='opacity'){
               name=attr;
            icur=parseFloat(getStyle(dom,attr))*100;
        }else{
            icur=parseInt(getStyle(dom,attr));
        }
        speed=(data[attr]-icur)/7;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(attr=='opacity'){
           dom.style.opacity=(icur+speed)/100;
        }else{
            dom.style[attr]=icur+speed+'px';
        }
        if( Math.floor( Math.abs( data[attr]-icur))!=0){  
            stop=false;
        }
       }
       if(stop){
           clearInterval(dom.timer);
           if(name=='opacity'){
               dom.style.opacity=data[name];
           } 
           dom.style[attr] = data[attr];       
           func();
       }
    },30);
   }