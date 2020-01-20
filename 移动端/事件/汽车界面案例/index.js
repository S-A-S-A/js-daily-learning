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