//jQ importModule//
(function($){
    var nowW = deviceSize();
    var deviceType = ['mobile','pc','pcfull'];
    var url  = "./main/"
    var body=$(body);
    var headBox=$('#headBox');
    var viewBox=$('#viewBox');
    var newsBox=$('#newsBox');
    var youtubeBox=$('#youtubeBox');
    var drugInfoBox=$('#drugInfoBox');
    var footBox=$('#footBox');


    var importMobile=function(){
        body.append(
            '<script src="../js/src/main/pfizer_headBox_mobile.js"></script>',
            '<script src="../js/src/main/pfizer_viewBox_mobile.js"></script>',
            '<script src="../js/src/main/pfizer_newsBox_mobile.js"></script>',
            '<script src="../js/src/main/pfizer_youtubeBox_mobile.js"></script>',
            '<script src="../js/src/main/pfizer_drugInfoBox_mobile.js"></script>',
            '<script src="../js/src/main/pfizer_footBox_mobile.js"></script>'
        );
    };

    var importPc=function(){
        body.append(
            '<script src="../jQuery/src/main/pfizer_headBox_pc.js"></script>',
            '<script src="../jQuery/src/main/pfizer_viewBox_pc.js"></script>',
            '<script src="../jQuery/src/main/pfizer_newsBox_pc.js"></script>',
            '<script src="../jQuery/src/main/pfizer_youtubeBox_pc.js"></script>',
            '<script src="../jQuery/src/main/pfizer_drugInfoBox_pc.js"></script>',
            '<script src="../jQuery/src/main/pfizer_footBox_pc.js"></script>'
        )};
        if(nowW===deviceType[0]){
            headBox.load(url+'pfizer_headBox_mobile.html');
            viewBox.load(url+'pfizer_viewBox_mobile.html');
            newsBox.load(url+'pfizer_newsBox_mobile.html');
            youtubeBox.load(url+'pfizer_youtubeBox_mobile.html');
            drugInfoBox.load(url+'pfizer_drugInfoBox_mobile.html');
            footBox.load(url+'pfizer_footBox_mobile.html',function(){
                importMobile();
            });
            
        }else {
            headBox.load(url+'pfizer_headBox_pc.html');
            viewBox.load(url+'pfizer_viewBox_pc.html');
            newsBox.load(url+'pfizer_newsBox_pc.html');
            youtubeBox.load(url+'pfizer_youtubeBox_pc.html');
            drugInfoBox.load(url+'pfizer_drugInfoBox_pc.html');
            footBox.load(url+"pfizer_footBox_pc.html",function(){
                importPc();
            });
        }
})(jQuery);