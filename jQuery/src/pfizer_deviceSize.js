var deviceSize=function(){
    var  resultDevice;
    (function($){
        var deviceType=[
            {type:'mobile',size:1054},
            {type:'pc',size:1440},
            {type:'pcfull'}
        ];
        var win=$(window);
        var beforeWinW=win.outerWidth(true);
        var deviceCheck=function(winW){
            var myType;
            for(var i=0; i<deviceType.length; i+=1){
                if(winW<=deviceType[i].size){
                    myType=deviceType[i].type;
                    break;
                }else{
                    myType=deviceType[deviceType.length-1].type;
                }
            }
            return myType;
        }

        var winSize=deviceCheck(beforeWinW);
        resultDevice=winSize;


        win.on('resize',function(){
            var reWinW=win.outerWidth(true);
            var afterWinSize=deviceCheck(reWinW);
            if(winSize !==afterWinSize){
                window.location.reload();
            }
        });
        return resultDevice;

    })(jQuery);
    return resultDevice;
}