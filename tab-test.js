/**
 * Created by Administrator on 15-12-31.
 */

$(document).ready(function(){
    var $firstTab = $('#myTabs a:first');
    $firstTab.tab('show');
    console.log($firstTab.attr("href"));
    //$("#tabContent2").find("a[href='#tab21']").tab('show');
   // $('#myTabs a:last').tab('show');
   //$('#myTabs a:first').tab('show');
    //$('#myTabs li:eq(0) a').tab('show')

});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var $this = $(this);
    var $target = $($this.attr('href'));
    var tabUrl = $this.attr('data-tab-url');
    console.log(tabUrl);
    $target.html("");
    $target.load(tabUrl);
    //console.log($this.attr('href'));
});