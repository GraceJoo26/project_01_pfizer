//jQ importModule//
(function($){
    var nowW = deviceSize();
    var deviceType = ['mobile','pc','pcfull'];
    var url  = "./main/"
    var url_01="./social_contribution/"
    var body=$(body);
    var headBox=$('#headBox');
    var pictureBox=$('#pictureBox');
    var footBox=$('#footBox');


    var importMobile=function(){
        body.append(
            '<script src="../js/src/main/pfizer_headBox_mobile.js"></script>',
            '<script src="../js/src/main/pfizer_footBox_mobile.js"></script>'
        );
    };

    var importPc=function(){
        body.append(
            '<script src="../jQuery/src/main/pfizer_headBox_pc.js"></script>',
            '<script src="../jQuery/src/socialContribution/pfizer_socialContributionBox_pc.js"></script>',
            '<script src="../jQuery/src/main/pfizer_footBox_pc.js"></script>'
        )};
        if(nowW===deviceType[0]){
            headBox.load(url+'pfizer_headBox_mobile.html');
            pictureBox.load(url_01+'pfizer_socialBox_pc.html');
            footBox.load(url+'pfizer_footBox_mobile.html',function(){
                importMobile();
            });
            
        }else {
            headBox.load(url+'pfizer_headBox_pc.html');
            pictureBox.load(url_01+'pfizer_socialBox_pc.html');
            footBox.load(url+"pfizer_footBox_pc.html",function(){
                importPc();
            });
        }
})(jQuery);