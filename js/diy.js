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
