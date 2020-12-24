(function($){
    $.ajax({
        url:'../data/pic&explain.json',
        datatype:'json',
        context: document.body
    }).done(function(data){
        var dataFile=data.sort(function(a,b){
            return b.id-a.id;
        });

        var code='<div class="modalBox"><div class="modalArea"><div class="close"><a href="#">+<span class="hidden>팝업창 닫기</span</a></div><div class="big_img"></div><div class="narr"><dl class="narr_theme"><dt class="theme"></dt><dd class="explain"></dd></dl></div></div></div>'
        var pictureBoxWrap=$('.picture_area');
        var dl=pictureBoxWrap.find('dl');
        var pictureBtn=pictureBoxWrap.children('a');
        
        var modalWrap=$('.modalWrap');
        var i=0;
        var modalWrap, modalWrap,modalBox,modalArea,closeBtn,bigImg,narrBox,theme,explain;
        var url="../img/";

        for(; i<=dataFile.length-1;i++){
            modalWrap.append(code);
            modalBox=modalWrap.find('.modalBox').eq(i);
            modalArea=modalBox.find('.modalArea');
            closeBtn=modalBox.find('.close');
            bigImg=modalBox.find('.big_img');
            narrBox=modalBox.find('.narr');
            theme=modalBox.find('.theme');
            explain=modalBox.find('.explain');
            bigImg.css({backgroundImage:'url('+url+dataFile[i].picture+')'});
            theme.text(dataFile[i].title);
            explain.text(dataFile[i].explain);
        };
        modalBox=modalWrap.find('.modalBox');
        closeBtn=modalWrap.find('.close');
        var n=0;
        pictureBtn.on('click', function(e){
            e.preventDefault();
            var it=$(this);
            var itIndex=it.index();
            n=itIndex;
            modalWrap.slideDown(function(){
                modalBox.eq(itIndex).siblings().hide();
                modalBox.eq(itIndex).fadeIn();
                modalBox.eq(itIndex).find('.close').find('a').focus();
            });
        })


        closeBtn.on('click',function(e){
            e.preventDefault();
            modalWrap.stop().hide();
            modalBox.hide(function(){
                pictureBtn.eq(n).focus();
            });
        })
       
    })
})(jQuery);

