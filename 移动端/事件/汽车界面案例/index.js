// 滑屏导航
(function () {
    const nav_scroll = document.querySelector('.nav .nav_scroll');
    swiper({
        wrap: nav_scroll,
        dir: 'x',
        backOut: 'none',
        scrollBar: false
    });
})();

//折叠导航
(function(){
    const more = document.querySelector('.nav_scroll .more'),
    nav_content = document.querySelector('.nav .nav_content');

    let shrink = true;   //是否折叠

    more.addEventListener('touchend', () => {
        let child = more.children[0],
            rotateValue = shrink ? 180 : 0,   //小三角旋转的角度
            heightValue = shrink ? 280 : 0;   //内容区域的高度

        css(child, { rotate: rotateValue });

        tweenMove({
            el: nav_content,
            type: 'linear',
            to:{
                height: heightValue
            },
            time:200,
            callBack() {
                shrink = !shrink;

            }
        })

    })

})();

// 轮播图
(function(){
    const banner=document.querySelector('.banner'),
    banner_wrap=document.querySelector('.banner_wrap'),
    banner_circles=document.querySelectorAll('.banner_circle span'),
    imgWidth=banner.offsetWidth;

    let startPoint={},
        distance={},
        cn=0,    //图片的索引值
        ln=0,    //小圆点的索引值
        timer;

        banner_wrap.innerHTML+=banner_wrap.innerHTML;
        swiper({
            wrap:banner,
            dir:'x',
            scrollBar:false,
            backOut:'none',
            start(e){
               //用户按下时轮播图应停止自动播放
                clearInterval(timer)
               startPoint={
                   x:e.changedTouches[0].pageX,
                   y:e.changedTouches[0].pageY,
                   
               }

               if(cn==0){
                   cn=banner_wrap.children.length/2;
               }
               if(cn==banner_wrap.children.length-1){               
                  cn=banner_wrap.children.length/2-1;             
               }

               css(banner_wrap,{translateX:-cn*imgWidth});
            },
            
            end(e){
               //轮播图抬起的时候是不需要缓冲的
               cancelAnimationFrame(banner_wrap);          //取消缓冲   

               distance={
                x:e.changedTouches[0].pageX-startPoint.x,
                y:e.changedTouches[0].pageY-startPoint.y,
               }

               let backWidth=imgWidth/8;
               if(Math.abs(distance.x)>backWidth){
                   cn-=distance.x/Math.abs(distance.x);    //目的是为了获得一个正负号
               }

               tweenMove({
                   el:banner_wrap,
                   type:'linear',
                   to:{
                       translateX:-cn*imgWidth
                   },
                   time:200

               });

               banner_circles[ln].className='';
               banner_circles[cn%(banner_wrap.children.length/2)].className='active';
               ln=cn%(banner_wrap.children.length/2);

               //手指抬起时轮播图自动播放应继续
               autoPlay();
            }
        });

        const picmove=()=>{     //设置轮播图自动播放
            cn++;         
            tweenMove({
                el:banner_wrap,
                type:'linear',
                to:{
                    translateX:-cn*imgWidth
                },
                time:200,
                callBack(){
                    if(cn==banner_wrap.children.length-1){               
                        cn=banner_wrap.children.length/2-1;             
                     }
      
                     css(banner_wrap,{translateX:-cn*imgWidth});
                     
                     banner_circles[ln].className='';
                     banner_circles[cn%(banner_wrap.children.length/2)].className='active';
                     ln=cn%(banner_wrap.children.length/2);
                }


            });
        }

        function autoPlay(){         //开始轮播图的自动播放函数
            clearInterval(timer);
            timer=setInterval(()=>{
                picmove();
            },2000)
        }

        autoPlay()
})();

// 整个页面的滑动
(function(){
    const wrap=document.querySelector('.wrap'),
         header=document.querySelector('.scroll .header'),
         nav=document.querySelector('.scroll .nav'),
         navTop=nav.getBoundingClientRect().top;   //getBoundingClientRect()获取某元素位置距离
         
         swiper({
             wrap:wrap,
            move(){
                const scrollY=css(wrap.children[0],'translateY');
      
                if(scrollY<-navTop){      //这个条件成立的时候说明用户拖动的距离已经把导航拖出去了
                    css(header,{translateY:-(scrollY+navTop)})           //页面向上滑动时，本身scrollY代表的值就是负的，此处滑动距离前加个负号，总体符号为正，header相对wrap向下滑动,加上一个navTop表示导航部分向下滑动了wrap向上滑动的距离+navTop的大小，所以header中logo栏（navTop的距离）一下的部分固定住了
                    
                }else{
                    css(header,{translateY:0})    
                }

                // 往下拉的时候始终让头部定在上面
                if(scrollY>0){
                    css(header,{translateY:-(scrollY)})   //页面向下拉时，scrollY大于0，要想让头部固定，header必须相对向上走同样的距离，向下拉时-(scrollY)符号表现出为正
                }
            }
         })
})()