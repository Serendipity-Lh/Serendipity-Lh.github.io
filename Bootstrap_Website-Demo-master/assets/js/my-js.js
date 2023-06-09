var global = 0;


// 导航栏 鼠标悬停弹出菜单
$(function () {
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });
    $(".dropdown").mouseleave(function () {
        $(this).removeClass("open");
    });
});

// 滚动视差 插件初始化
var s = skrollr.init(
);
// jquery 定位触发插件
$('#about-text').waypoint(function () {
    if (global === 0) {
        global = 1;
        $('#about-text').addClass("animated bounceInDown");
        console.log('0');
    } else {
        global = 0;
        $('#about-text').removeClass("animated bounceInDown");
        console.log('1')
    }
    // alert('123456789');
    console.log('88');
}, {offset: 300});

//logo 旋转
$('#logo-rotate-in').addClass("animated rotateIn");

// 加载header 和 footer
$(function () {
    $("#headerpage").load("header.html");
    $("#footerpage").load("footer.html");
    $("#navigation").load("navigation.html");
});

// footer固定在动态底部
// $(function () {
//     function footerPosition() {
//         $("footer").removeClass("fixed-bottom");
//         var contentHeight = document.body.scrollHeight,//网页正文全文高度
//             winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
//         if (!(contentHeight > winHeight)) {
//             //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
//             $("footer").addClass("fixed-bottom");
//             console.log('大于');
//         } else {
//             $("footer").removeClass("fixed-bottom");
//             console.log('小小于');
//
//         }
//     }
//
//     footerPosition();
//     // $(window).resize(footerPosition);
// });

$(".one-product").click(function(){
    console.log('某个产品被点击了!!!')
    window.location.href="product-detail.html";
});

$(".one-news").click(function(){
    console.log('某个新闻被点击了!!!')
    window.location.href="news-detail.html";
});

