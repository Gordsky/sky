function typedword(){ $.ajax({ type:"get", url:"https://api.gqink.cn/Love/", data:{type:'json10'}, async:true, success:function(word){ var list = []; for(var i = 0 ;i < word.length ; i++){ list.push(word[i]['word']); } $("#word").typed({ strings: list, typeSpeed: 20, loop: true, backDelay: 3000, }); } }); }
<!-- 彩色标签云&博客信息 -->
let tags = document.querySelectorAll("#tag_cloud-2 a,.list-group-item .pull-right");
let colorArr = ["#428BCA", "#AEDCAE", "#ECA9A7", "#DA99FF", "#FFB380", "#D9B999"];
tags.forEach(tag => {
    tagsColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    tag.style.backgroundColor = tagsColor;
});
    // 个性化网页标题
    var OriginTitile = document.title,
    titleTime;
    document.addEventListener("visibilitychange", function() {
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