var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array
            ("富强", "及辞要学习", "民主", "及辞听音乐", "文明", "及辞想吃饭", "和谐", "及辞品诗词", "自由", "及辞要健康", "平等", "及辞打靶机", "公正", "及辞想睡觉", "法治", "及辞多喝水", "爱国", "及辞早点睡", "敬业", "及辞不摸鱼", "诚信", "及辞多看书", "友善", "及辞要坚持");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            // 亮色
            "color": "rgb(" + ~~(Math.floor(Math.random() * 128 + 128)) + "," + ~~(Math.floor(Math.random() * 128 + 128)) + "," + ~~(Math.floor(Math.random() * 128 + 128)) + ")"
            // 暖色
            // "color": "rgb(" + ~~(Math.floor(Math.random() * 128 + 64)) + "," + ~~(Math.floor(Math.random() * 128 + 64)) + "," + ~~(Math.floor(Math.random() * 128 + 64)) + ")"
            // 纯随机
            // "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
