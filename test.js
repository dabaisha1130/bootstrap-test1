/**
 * Created by Administrator on 15-12-31.
 */

    function showPage(tabId, url){
        //var loadimg="./img/load2.gif"; // 加载时的loading图片
        $('#tabContent2 a[href="#'+tabId+'"]').tab('show');
        if($('#'+tabId).html().length < 20){
            // 当tab页面内容小于20个字节时ajax加载新页面
            //$('#'+tabId).html('<br>'+loadimg+' 页面加载中，请稍后...');
            // 设置页面加载时的loading图片<br>
            $('#'+tabId).load(url); // ajax加载页面
        }
    }

