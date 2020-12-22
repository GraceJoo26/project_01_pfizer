//jQ importModule//
(function($){
    var nowW = deviceSize();
    var deviceType = ['mobile','pc','pcfull'];
    var url  = "./main/"
    var url_01="./drugInfo/"
    var body=$(body);
    var headBox=$('#headBox');
    var drugBox=$('#drugBox');
    var footBox=$('#footBox');


    var importMobile=function(){
        body.append(
            '<script src="../js/src/main/pfizer_headBox_mobile.js"></script>',
            '<script src="../jQuery/src/drugInfo/pfizer_drugBox_pc.js"></script>',
            '<script src="../js/src/main/pfizer_footBox_mobile.js"></script>'
        );
    };

    var importPc=function(){
        body.append(
            '<script src="../jQuery/src/main/pfizer_headBox_pc.js"></script>',
            '<script src="../jQuery/src/drugInfo/pfizer_drugBox_pc.js"></script>',
            '<script src="../jQuery/src/main/pfizer_footBox_pc.js"></script>'
        )};
        if(nowW===deviceType[0]){
            headBox.load(url+'pfizer_headBox_mobile.html');
            drugBox.load(url_01+'pfizer_drugInfo_pc.html');
            footBox.load(url+'pfizer_footBox_mobile.html',function(){
                importMobile();
            });
            
        }else {
            headBox.load(url+'pfizer_headBox_pc.html');
            drugBox.load(url_01+'pfizer_drugInfo_pc.html');
            footBox.load(url+"pfizer_footBox_pc.html",function(){
                importPc();
            });
        }
})(jQuery);