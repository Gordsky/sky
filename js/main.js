//一言打字
//**********//
function typedword() {
    $.ajax({
        type: "get",
        url: "https://api.gqink.cn/Love/",
        data: {
            type: 'json10'
        },
        async: true,
        success: function(word) {
            var list = [];
            for (var i = 0; i < word.length; i++) {
                list.push(word[i]['word']);
            }
            $("#word").typed({
                strings: list,
                typeSpeed: 20,
                loop: true,
                backDelay: 3000,
            });
        }
    });
}
// 个性化网页标题
//**********//
var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        document.title = "你别走吖 Σ(っ °Д °;)っ";
        clearTimeout(titleTime)
    } else {
        document.title = "你可算回来了 (｡•ˇ‸ˇ•｡) " + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
});
//标签云
//**********//
let tags = document.querySelectorAll("#tag_cloud-2 a,.list-group-item .pull-right");
let colorArr = ["#428BCA", "#AEDCAE", "#ECA9A7", "#DA99FF", "#FFB380", "#D9B999"];
tags.forEach(tag = >{
    tagsColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    tag.style.backgroundColor = tagsColor
});
//js判断网站访问来源
//**********//
window.onload = function() {
    var a = document.createElement("a");
    a.href = document.referrer
    var so = a.hostname;
    var name = a.hostname.split(".")[1];
    switch (name) {
    case 'bing':
        so = '必应搜索'
        break;
    case 'baidu':
        so = '百度搜索'
        break;
    case 'so':
        so = '360搜索'
        break;
    case 'google':
        so = '谷歌搜索'
        break;
    case 'sm':
        so = '神马搜索'
        break;
    case 'sogou':
        so = '搜狗搜索'
        break;
    default:
        so = a.hostname
    }
    var msg = '欢迎来自' + so + '朋友！';
    $.message({
        title: '来源提醒',
        message: msg,
        type: 'success'
    })
};