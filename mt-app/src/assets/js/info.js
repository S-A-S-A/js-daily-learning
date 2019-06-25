import '../css/reset.css';
import '../webfont/iconfont.css';
import '../css/meituanDetail.css';

//根据点击哪一条 -获取到数据-》 渲染dom结构 


// 获取当前商品ID
function getId() {
    var arr = window.location.search.slice('1').split('&');
    var id;
    arr.forEach(function (ele, index) {
        if (ele.indexOf('id') !== -1) {
            id = ele.slice(3);
        }
    })
    return id;
}

getData();
// 获取数据
function getData() {
    var url = 'http://localhost:8080/api/list.json';
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: getList,
        error: function () {
            alert('获取商品详情失败');
        }
    })
}

// 根据id筛选数据
function getList(data) {
    var list = data.list;
    var idNum = getId();
    var len = list.length;
    for (var i = 0; i < len; i++) {
        if (list[i].id == idNum) {
            console.log(list[i]);
            addDom(list[i]);
            return;
        }
    }
}

// 渲染结构
function addDom(dataList) {
    var info = dataList.info;
    var str = '';
    $('.bigimg').find('img').attr('src', info.imgurl);
    $('.bigimg').find('.name').text(info.name);
    $('.bigimg').find('.des').text(info.des);
    $('.price-box').find('strong').text(info.price);
    $('.seller').find('h4').text(info.receive);
    $('.seller').find('p').text(info.adderess);
    var comment = dataList.info.comment;
    comment.forEach(function (ele, index) {
        str += '<li class="item-evaluate"><div class="foot-user clearfix">\
            <img src="'+ ele.pic + '" alt=""><div class="user-strart">\
                <h5>'+ ele.user + '</h5></div><p class="evaluate-date">2016-10-15</p>\
        </div><div class="evaluate-content"><p>'+ ele.content + '</p>\
            <p><span><img src="'+ ele.img + '" alt=""></span>\
            </p></div><div class="locale">\
            <a href="###">'+ info.receive + '</a></div></li>';
    })
    $('.food-evaluate').find('ul').html(str);
}


{/* <li class="item-evaluate">
					<div class="foot-user clearfix">
						<img src="img/header.png" alt="">
						<div class="user-strart">
							<h5>美团用户110</h5>
						</div>
						<p class="evaluate-date">2016-10-15</p>
					</div>
					<div class="evaluate-content">
						<p>味道还不错。当闻到味道时感觉会特别腻，吃的时候还不错。 #榴莲泡芙# #酥皮香草泡芙# #可可香草泡芙# #可可抹茶泡芙#</p>
						<p>
							<span><img src="img/6959.jpg" alt=""></span>
						</p>
					</div>
					<div class="locale">
						<a href="###">西树泡芙（地王广场店）</a>
					</div>
				</li>  */}