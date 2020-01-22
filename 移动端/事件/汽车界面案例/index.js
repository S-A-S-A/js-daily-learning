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
(function () {
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
            to: {
                height: heightValue
            },
            time: 200,
            callBack() {
                shrink = !shrink;

            }
        })

    })

})();

// 轮播图
(function () {
    const banner = document.querySelector('.banner'),
        banner_wrap = document.querySelector('.banner_wrap'),
        banner_circles = document.querySelectorAll('.banner_circle span'),
        imgWidth = banner.offsetWidth;

    let startPoint = {},
        distance = {},
        cn = 0,    //图片的索引值
        ln = 0,    //小圆点的索引值
        timer;

    banner_wrap.innerHTML += banner_wrap.innerHTML;
    swiper({
        wrap: banner,
        dir: 'x',
        scrollBar: false,
        backOut: 'none',
        start(e) {
            //用户按下时轮播图应停止自动播放
            clearInterval(timer)
            startPoint = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,

            }

            if (cn == 0) {
                cn = banner_wrap.children.length / 2;
            }
            if (cn == banner_wrap.children.length - 1) {
                cn = banner_wrap.children.length / 2 - 1;
            }

            css(banner_wrap, { translateX: -cn * imgWidth });
        },

        end(e) {
            //轮播图抬起的时候是不需要缓冲的
            cancelAnimationFrame(banner_wrap);          //取消缓冲   

            distance = {
                x: e.changedTouches[0].pageX - startPoint.x,
                y: e.changedTouches[0].pageY - startPoint.y,
            }

            let backWidth = imgWidth / 8;
            if (Math.abs(distance.x) > backWidth) {
                cn -= distance.x / Math.abs(distance.x);    //目的是为了获得一个正负号
            }

            tweenMove({
                el: banner_wrap,
                type: 'linear',
                to: {
                    translateX: -cn * imgWidth
                },
                time: 200

            });

            banner_circles[ln].className = '';
            banner_circles[cn % (banner_wrap.children.length / 2)].className = 'active';
            ln = cn % (banner_wrap.children.length / 2);

            //手指抬起时轮播图自动播放应继续
            autoPlay();
        }
    });

    const picmove = () => {     //设置轮播图自动播放
        cn++;
        tweenMove({
            el: banner_wrap,
            type: 'linear',
            to: {
                translateX: -cn * imgWidth
            },
            time: 200,
            callBack() {
                if (cn == banner_wrap.children.length - 1) {
                    cn = banner_wrap.children.length / 2 - 1;
                }

                css(banner_wrap, { translateX: -cn * imgWidth });

                banner_circles[ln].className = '';
                banner_circles[cn % (banner_wrap.children.length / 2)].className = 'active';
                ln = cn % (banner_wrap.children.length / 2);
            }


        });
    }

    function autoPlay() {         //开始轮播图的自动播放函数
        clearInterval(timer);
        timer = setInterval(() => {
            picmove();
        }, 2000)
    }

    autoPlay()
})();

// 整个页面的滑动
(function () {
    const wrap = document.querySelector('.wrap'),
        header = document.querySelector('.scroll .header'),
        nav = document.querySelector('.scroll .nav'),
        navTop = nav.getBoundingClientRect().top,   //getBoundingClientRect()获取某元素位置距离
        refresh = document.querySelector('.scroll .refresh'),
        articleList = document.querySelector('.articleWrap .list'),
        updateTip = document.querySelector('articleWrap .updateTip');

    let isRefresh = false;//是否要刷新内容

    swiper({
        wrap: wrap,
        move() {
            const scrollY = css(wrap.children[0], 'translateY');

            if (scrollY < -navTop) {      //这个条件成立的时候说明用户拖动的距离已经把导航拖出去了
                css(header, { translateY: -(scrollY + navTop) })           //页面向上滑动时，本身scrollY代表的值就是负的，此处滑动距离前加个负号，总体符号为正，header相对wrap向下滑动,加上一个navTop表示导航部分向下滑动了wrap向上滑动的距离+navTop的大小，所以header中logo栏（navTop的距离）一下的部分固定住了

            } else {
                css(header, { translateY: 0 })
            }

            // 往下拉的时候始终让头部定在上面
            if (scrollY > 0) {
                css(header, { translateY: -(scrollY) })   //页面向下拉时，scrollY大于0，要想让头部固定，header必须相对向上走同样的距离，向下拉时-(scrollY)符号表现出为正
            }

            // 在手指滑动的时候需要去改变刷新内容的文字
            if (scrollY > 80) {
                refresh.innerHTML = '松开更新内容';
                isRefresh = true;
            } else {
                refresh.innerHTML = '下拉更新内容';
                isRefresh = false;
            }

        },
        //toTop(){}滚动到页面头部的回调函数
        toTop() {
            if (isRefresh) {   //此条件满足说明可以刷新数据
              getData('refresh',()=>{
                  css(updateTip,{opacity:1});
                  setTimeout(()=>{
                      css({opacity:0})
                  },1500)
              })
            }
        },
        toEnd() {
            getData('add')
        }
    })

    /*
     type：决定这个数据是用来刷新还是增加的，add=>增加， refresh=>刷新
     callBack:数据请求成功后的回调函数
    */
    function getData(type, callBack) {   //用来请求数据
        jsonp({
            url: 'https://data.autohome.com.cn/rcm/automobile/lands',
            data: {
                uid: 0,
                number: 10
            },
            callBack: "_callback",
            succ(data) {
                //console.log(data);
                createDom(data.result.list, type);
                callBack && callBack();
            }
        });
    }

    /*
      data:请求过来的数据
      type：是刷新还是增加
    */
    function createDom(data, type) {   //用来根据拿到的数据创建dom结构
        let html = '';
        for (let i = 0; i < data.length; i++) {
            if (data[i].graphic_img_list3) {   //表示这条数据有三张图片
                let imgArr = data[i].graphic_img_list3.split('㊣');	//把字符串分成三个图片

                html += `<article>
                    <a href="#">
                        <div class="content">
                            <dl>
                                <dt>
                                    <h3>${data[i].title}</h3>
                                </dt>

                                <dd><img src="${imgArr[0]}" alt=""></dd>
                                <dd><img src="${imgArr[1]}" alt=""></dd>
                                <dd><img src="${imgArr[2]} alt=""></dd>

                            </dl>

                            <div class="author">
                            ${data[i].authorname} 观看 ${data[i].viewcount}
                            </div>
                        </div>
                        <div class="img"></div>
                    </a>
                </article>`
            } else {
                html += `<article>
                     <a href="#">
                         <div class="text">
                             <h3>${data[i].title}</h3>
                             <div class="author">
                             ${data[i].authorname} 观看 ${data[i].viewcount}
                             </div>
                         </div>
                         <div class="img">
                         <img src="${data[i].imgurl}" alt="">
                         </div>
                     </a>
                 </article>`
            }
        }
        if(type=='add'){   //要增加数据
          articleList.innerHTML+=html
        }else if(type=='refresh'){
            articleList.innerHTML=html

        }
    }

    getData('add');    //页面一加载请求一次数据
})()