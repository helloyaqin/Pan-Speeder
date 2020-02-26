// ==UserScript==
// @name         Pan Speeder_test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  百度网盘视频倍速播放
// @author       Yaqin
// @match        *://pan.baidu.com/play/video*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(){
       var fasten_video = "<div class = \"g-button\" id=fasten_video>"
       fasten_video += "<span class=\"g-button-right\">"
       fasten_video += "<span class=\"text\" style=\"width: auto;\">点击加速"
       fasten_video += "</span>"
       fasten_video += "</span>"
       fasten_video += "</div>"
       var range = "<input type=\"range\" min=\"0.25\" max=\"3\" step=\"0.25\" value=\"1\" id=\"fasten_range\">"
       $(".video-toolbar-buttonbox").append(fasten_video)
       $(".video-toolbar-buttonbox").append(range)
       //
       //点击加速1.25
       //优点：适配网盘样式 缺点：只能固定倍速
       //虽然我网课的话1.25刚刚好w
       $("#fasten_video").click(function() {
           videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.25)
       });
       //
       //
       //获取进度条值并加速
       //优点：可任意调节0.25-3倍速 缺点：需要补充样式，为完善
       $("#fasten_range").change(function(){
           //alert("!!!!")
           var x = $(this).val();
           videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(x);
       });
       //
       //
       //
       //删除右上角安装客户端广告
       //调整样式用，尚未想好滚动条的置放位置，故不使用
       //$(".video-title-right").remove();
       //var add_title_right =
	})
})();