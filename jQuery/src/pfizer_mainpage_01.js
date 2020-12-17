//marcChagallmain_01.js
//jQ import module

/* (function(){
    var nowW=deviceSize();
    var deviceType=['mobile','laptop'];
    var url="./pfizer_mainpage/";
    var body = $('body');
    var headBox=$('#headBox');

   

    var importMobile=function(){
        setTimeout(function(){
            body.append('<script src="../jQuery/src/main/chagall_headBox_mobile.js"></script>'+
                        '<script src="../jQuery/src/main/chagall_viewBox_mobile.js"></script>'+
                        '<script src="../jQuery/src/main/chagall_footBox_mobile.js"></script>');
        }, 100);
       
    };
   

    var importLaptop = function(){
       
        setTimeout(function(){
        body.append('<script src="../jQuery/src/main/chagall_viewBox_laptop.js"></script>'+
                   '<script src="../jQuery/src/main/chagall_footBox_laptop.js"></script>');
    },100);
};




    if(nowW===deviceType[0]){
        headBox.load(url+'chagall_main_headBox_mobile.html');
        viewBox.load(url+'chagall_main_viewBox_mobile.html');
        footBox.load(url+'chagall_main_footBox_mobile.html', function(){
            importMobile();
        });

    }else if(nowW===deviceType[1]){
        viewBox.load(url+'chagall_main_viewBox_laptop.html');
        footBox.load(url+'chagall_main_footBox_laptop.html', function(){
            importLaptop();
        });

    }
})(jQuery); */