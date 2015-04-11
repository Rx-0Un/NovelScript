/**
 * Created by Ian on 2015/4/10.
 */

function horizonAlign(selector){
    $(selector).width($(selector).parent().width())
        .css("text-align","center"); // ��Ч
    alert($(selector).width()); // û��alert
    $(selector).find("img").css("width",$(window).width()); //��Ч
}

function relativeTop(selector){
    var parent = $(window).height();
    return (parent - $(selector).height())/parent*50 + "%";
}

function verticalAlign(selector){
    $(selector).css("position","absolute")
        .css("top",relativeTop(selector));
}

function fullAlign(selector){ // rec
    horizonAlign(selector);
    verticalAlign(selector);
}
