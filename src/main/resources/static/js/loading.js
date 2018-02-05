$(function () {
    $("#global").mLoading("show");
    $("#global .CloseSpan").click(function () {
        $("#global").mLoading("hide");
    });
    $("#partial").mLoading(option);
    $("#partial .CloseSpan").click(function () {
        $("#partial").mLoading("hide");
    });
});

//加载等待时参数
var option={
    text:"加载中...",//加载显示的文字
    iconTag:"img",//图片
    //图片路径
    html:false,
    mask:true//是否显示遮罩（半透明背景）
}