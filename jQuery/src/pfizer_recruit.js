//jQ importModule//
(function($){
    var nowW = deviceSize();
    var deviceType = ['mobile','pc','pcfull'];
    var url  = "./main/"
    var url_01="./recruit/"
    var body=$(body);
    var headBox=$('#headBox');
    var wayBox=$('#wayBox');
    var afterBox=$('#afterBox');
    var applyBox=$('#applyBox');
    var footBox=$('#footBox');


    var importMobile=function(){
        body.append(
            '<script src="../js/src/main/pfizer_headBox_mobile.js"></script>',
            '<script src="../jQuery/src/recruit/pfizer_recruitBox_pc.js"></script>',
            '<script src="../js/src/main/pfizer_footBox_mobile.js"></script>'
        );
    };

    var importPc=function(){
        body.append(
            '<script src="../jQuery/src/main/pfizer_headBox_pc.js"></script>',
            '<script src="../jQuery/src/recruit/pfizer_recruitBox_pc.js"></script>',
            '<script src="../jQuery/src/main/pfizer_footBox_pc.js"></script>'
        )};
        if(nowW===deviceType[0]){
            headBox.load(url+'pfizer_headBox_mobile.html');
            wayBox.load(url_01+'pfizer_wayBox_pc.html');
            afterBox.load(url_01+'pfizer_afterBox_pc.html');
            applyBox.load(url_01+'pfizer_applyBox_pc.html');
            footBox.load(url+'pfizer_footBox_mobile.html',function(){
                importMobile();
            });
            
        }else {
            headBox.load(url+'pfizer_headBox_pc.html');
            wayBox.load(url_01+'pfizer_wayBox_pc.html');
            afterBox.load(url_01+'pfizer_afterBox_pc.html');
            applyBox.load(url_01+'pfizer_applyBox_pc.html');
            footBox.load(url+"pfizer_footBox_pc.html",function(){
                importPc();
            });
        }
})(jQuery);