
// load pics for mobile or tablets / desktops

var picSize = "small";

/*
if ($( window ).width() > 756){    
    picSize = "medium";
}
*/

var src, lastInd, imgFile, path, filePrefix;

$(".swipe-wrap div > img").each(function(index, element){
    
    src = $(element).attr("src");

    /*
    lastInd = $(element).attr('src').lastIndexOf("/") + 1;
    imgFile = $(element).attr('src').substring(lastInd);
    imgFile = imgFile.substring(0, imgFile.length - 4);

    path = $(element).attr('src').substring(0, $(element).attr('src').lastIndexOf("/") + 1);
    filePrefix = imgFile.substring(0, imgFile.indexOf("_"));
    */
    
    path = "img/";
    filePrefix = $(element).data('picname');

    $(element).attr("src", path + filePrefix + "_" + picSize + ".jpg");
    
    openSilder(0, 1);
});



function openSilder(index, duration){    
    $('.screenshots').removeClass('close');
    $('.screenshots').addClass('open');

    //$('.screenshots .swipe-wrap').removeAttr('style');

    setTimeout(init, 1000);
    
    setTimeout(function() {
        window.SchlichtSwipe.slide(index, duration);
    }, 1050);
}

function init(){
    
    window.SchlichtSwipe = new Swipe(document.getElementById("slider"), {
      speed: 400,
      auto: 3000,
      continuous: false,
      disableScroll: true,
      stopPropagation: true
      //,
      //callback: function(index, elem) {},
      //transitionEnd: function(index, elem) {}
    });
    
    window.SchlichtSwipe.slide(0, 0);
}

function closeSlider(){
    $('.screenshots').removeClass('open');
    $('.screenshots').addClass('close');
    
    window.SchlichtSwipe.stop();
    
    $('.swipe').attr('style', 'visibility: hidden;');
    
    setTimeout(function() {
        $('.screenshots').removeClass('close');
    }, 1000);    
}

function nextSlider(){
    window.SchlichtSwipe.next();
}

function prevSlider(){
    window.SchlichtSwipe.prev();
}
