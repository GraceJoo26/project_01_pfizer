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
            explain.text(dataFile[i].explain); //code 붙이고 ajax에서 json끌어 data입력하기
        };
        modalBox=modalWrap.find('.modalBox');
        closeBtn=modalWrap.find('.close');
        var n=0;
        pictureBtn.on('click', function(e){ //pictureBtn을 누르면
            e.preventDefault();
            var it=$(this);                 // 내가 누른 그 버튼 = it
            var itIndex=it.index();         //내가 누른 버튼에 대한 index 체크!
            n=itIndex;
            modalWrap.slideDown(function(){             // slideDown 함수사용 
                modalBox.eq(itIndex).siblings().hide(); //내가 누른 box이외의 형제들은 숨기고
                modalBox.eq(itIndex).fadeIn();          //내가 누른 box만 fadeIn
                modalBox.eq(itIndex).find('.close').find('a').focus();//class close 찾아서 내부에 a를 찾아서 focus하라
            });
        })


        closeBtn.on('click',function(e){ //closeBtn을 클릭하면
            e.preventDefault();          //내부 이벤트 모두 삭제하고
            modalWrap.stop().hide();     // modal감싸는 페이지를 숨기고
            modalBox.hide(function(){    //modalbox를 숨기는 함수
                pictureBtn.eq(n).focus();//pictureBtn 의 내가 누른 것에 focus 둬라
            });
        })
       
    })
})(jQuery);

