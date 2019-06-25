import '../css/reset.css';
import '../plug/css/swiper.min.css';
import '../webfont/iconfont.css';
import '../css/meituanIndex.css';


// 获取数据 ---》渲染页面
getData();
function getData() {
    var url = 'http://localhost:8080/api/list.json';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: addList,
        error: function () {
            alert('error');
        }
    })
};

// 添加数据
function addList(data) {
    var str = '';
    console.log(data.list);
    var dataList = data.list;
    dataList.forEach(function (ele, index) {
        console.log(ele);
        str += '<li class="foodspic">\
        <a href="http://localhost:8080/meituan-detail.html?id=' + ele.id + '" class="clearfix">\
            <img src="'+ ele.info.imgurl + '" alt=""><dl>\
                <dt>'+ ele.info.name + '</dt><dd>\
                    <p class="foodtitle">'+ ele.info.des + '</p>\
                    <p class="price"><span><strong>'+ ele.info.price + '</strong><i>元</i></span>\
                        <span>'+ ele.info.newUser + '</span><span>已售15451</span>\
                    </p></dd></dl></a></li>';
    });
    $('.guess-foodlist .list').html(str);
}

