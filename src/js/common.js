/*
    日期：2018/11/16
    作者：六十二
    页面说明：所有的js部分
*/
/* 刷新页面执行的一系列js */
$(document).ready(function(){
    $(".int_us_name").addClass("rubberBand animated");
    setTimeout(function(){
        $(".int_us_name").removeClass("rubberBand animated");
    },800);
});
/* 刷新页面执行完毕 */
/* 点击爱心特效 */
!function (e, t, a){
    function r() {
        for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }
    function n(){
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
            t && t(),
                o(e)
        }
    }
    function o(e){
        var a = t.createElement("div");
        a.className = "heart",
            s.push({
                el: a,
                x: e.clientX - 5,
                y: e.clientY - 5,
                scale: 1,
                alpha: 1,
                color: c()
            }),
            t.body.appendChild(a)
    }
    function i(e){
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    function c(){
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    }
    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
        function(e){
            setTimeout(e, 1e3 / 60)
        },
        i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
        n(),
        r()
}(window, document);
/* 点击爱心特效END */
/* 当前时间 */
function getCurDate() {
    var d = new Date();
    var week;
    switch (d.getDay()) {
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
        default:
            week = "星期天";
    }
    var years = d.getFullYear();
    var month = add_zero(d.getMonth() + 1);
    var days = add_zero(d.getDate());
    var hours = add_zero(d.getHours());
    var minutes = add_zero(d.getMinutes());
    var seconds = add_zero(d.getSeconds());
    var ndate = years + "年" + month + "月" + days + "日 " + hours + ":" + minutes + ":" + seconds + " " + week;
    var divT = document.getElementById("divT");
    divT.innerHTML = ndate;
}
function add_zero(temp) {
    if (temp < 10) return "0" + temp;
    else return temp;
}
setInterval("getCurDate()", 100);
/* 当前时间END */
/* 搜索 */
/* 搜索页面效果 */
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
        // clear and hide result container when we press close
        container.find('.result-container').fadeOut(100, function(){$(this).empty();});
    }
}
function submitFn(obj, evt){
    value = $(obj).find('.search-input').val().trim();
    _html = "你要搜索的内容是：";
    if(!value.length){
        _html = "搜索内容不能为空哦！";
    }
    else{
        _html += "<b>" + value + "</b>";
    }
    $(obj).find('.result-container').html('<span>' + _html + '</span>');
    $(obj).find('.result-container').fadeIn(100);
    evt.preventDefault();
}
/* 搜索点击显示 */
$(".search_open").click(function(){
    $(".search").show().animate({
        opacity: 1
    },500)
})
$(".search-wrapper").click(function(){
    $(".search_img").animate({
        top: "0px",
        opacity: 1
    },500)
})

$(".close").click(function(){
    $(".search_img").animate({
        top: "-200px",
        opacity: 0
    },500)
    $(".search").animate({
        opacity: 0
    },500);
    setTimeout(function(){
        $(".search").hide()
    },500)
})
/* 变色 */
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
function generateMixed(n) {
    var res = "";
    for(var i = 0; i < n ; i ++) {
        var id = Math.ceil(Math.random()*16);
        res += chars[id];
    }
    return res;
}
$("#sj_color li a").each(function(){
    var num = generateMixed(6);
    $(this).css({
        borderColor: "#" + num,
        color: "#" + num
    })
})
/* 搜索END */
/* 切换壁纸 */
$(".link_fir").click(function(){
    $(".replback").show().animate({
        opacity: 1,
        top: "50px"
    },800);
});
$(".close-search").click(function(){
    $(".replback").animate({
        opacity: 0,
        top: "0px"
    },800);
    setTimeout(function(){
        $(".replback").hide()
    },800)
})
$(".close-search").mouseover(function(){
    $(".close-top").css({
        "-webkit-transform":"translate(0,5px) rotate(405deg)",
        "transform":"translate(0,5px) rotate(405deg)"
    })
    $(".close-bottom").css({
        "-webkit-transform":"translate(0,-5px) rotate(-45deg)",
        "transform":"translate(0,-5px) rotate(-45deg)"
    })
}).mouseout(function(){
    $(".close-top").css({
        "-webkit-transform":"translate(0,5px) rotate(225deg)",
        "transform":"translate(0,5px) rotate(225deg)"
    })
    $(".close-bottom").css({
        "-webkit-transform":"translate(0,-5px) rotate(135deg)",
        "transform":"translate(0,-5px) rotate(135deg)"
    })
})
$(".replace_bd_li").click(function(){
    $(this).addClass("replback_span_active");
    $(".replace_li").removeClass("replback_span_active");
    $(".replace_bd").show().stop().animate({
        opacity: 1
    },800);
    $(".replace").hide().stop().animate({
        opacity: 0
    },800);
});
$(".replace_li").click(function(){
    $(this).addClass("replback_span_active");
    $(".replace_bd_li").removeClass("replback_span_active");
    $(".replace_bd").hide().stop().animate({
        opacity: 0
    },800);
    $(".replace").show().stop().animate({
        opacity: 1
    },800);
});
$(".replace_bd ul li img").click(function () {
    var replacebLI = $(this).parent().index();
    var replacebImg = $(".replace_bd ul li img").eq(replacebLI).attr("src");
    document.body.style.background = "url('" + replacebImg + "') no-repeat center top";
    document.body.style.backgroundSize = "cover";
});
$(".replace ul li img").click(function () {
    var replaceLI = $(this).parent().index();
    var replaceImg = $(".replace ul li img").eq(replaceLI).attr("src");
    document.body.style.background = "url('" + replaceImg + "') no-repeat center top";
    document.body.style.backgroundSize = "cover";
});
/* 切换壁纸END */
/* 线上图片分页 */
//每页显示的数目
$(document).ready(function(){
    //每页显示的数目
    var show_per_page = 15;
    //获取content对象里面，数据的数量
    var number_of_items = $('.replace .replace_ul').children().size();
    //计算页面显示的数量
    var number_of_pages = Math.ceil(number_of_items/show_per_page);
    //隐藏域默认值
    $('.current_page').val(0);
    $('.show_per_page').val(show_per_page);
    var navigation_html = '<a class="previous_link" href="javascript:previous();">上一页</a>';
    var current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
        current_link++;
    }
    navigation_html += '<a class="next_link" href="javascript:next();">下一页</a>';
    $('.page_navigation').html(navigation_html);
    $('.page_navigation .page_link:first').addClass('active_page');
    //隐藏该对象下面的所有子元素
    $('.replace ul').children().css('display','none');
    //显示第n（show_per_page）元素
    $('.replace ul').children().slice(0,show_per_page).css('display','block');
});
//上一页
function previous(){
    new_page = parseInt($('.current_page').val()) - 1;
    if($('.active_page').prev('.page_link').length==true){
        go_to_page(new_page);
    }
}
//下一页
function next(){
    new_page = parseInt($('.current_page').val()) + 1;
    if($('.active_page').next('.page_link').length==true){
        go_to_page(new_page);
    }
}
//跳转某一页
function go_to_page(page_num){
    var show_per_page = parseInt($('.show_per_page').val());
    start_from = page_num * show_per_page;
    end_on = start_from + show_per_page;
    $('.replace ul').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
    $('.current_page').val(page_num);
}
/* 线上图片分页结束 */