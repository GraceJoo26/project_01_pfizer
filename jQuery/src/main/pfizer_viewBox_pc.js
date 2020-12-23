(function($){
    var win=$(window);

    var indicator=$('.indicator');
    var indiLi=indicator.children('li');
    
    

    var page=$('.page');
    var offsetAr=[ ];
  
    var i=0;
    for(; i<page.length; i++){
        offsetAr[i] = page.eq(i).offset().top;
    }
    
    
    var mn=0;
    var permission=true;
    var time= 0;
    $('html, body').animate({scrollTop:offsetAr[0]});
    
    var it, indi, indiLi;
    
    //indicator class넣기
    indiLi.children('a').on('focus click', function(e){
        e.preventDefault();
        console.log( e.type );
            it=$(this);
            indi = it.parent('li').index();
            // console.log(indi);
    });

    win.on('mousewheel DOMMouseScroll',function(e){

        // console.log( e.originalEvent );
        var delta;
        var evt = e.originalEvent;
        // firefox에서는 wheelDeltaY값이 없음 -> detail에서 값이 나옴
        if(!evt.wheelDeltaY){
            delta = evt.detail * -40;
        }else{
            delta = evt.wheelDeltaY;
        }
        // console.log(delta);

        if(permission){
            permission=false;
            // 마우스휠 아래로 내렸을 경우
           //console.log('!!!')
            if(mn < offsetAr.length && delta < 0){
                mn += 1;
                indiLi.eq(mn).addClass('on');
                indiLi.eq(mn).siblings().removeClass('on');
                $('html, body').animate({scrollTop:offsetAr[mn]});
            }else if(mn > 0 && delta > 0){
                mn -= 1;
                console.log('mn:', mn);
                indiLi.eq(mn).addClass('on');
                indiLi.eq(mn).siblings().removeClass('on');
                $('html, body').animate({scrollTop:offsetAr[mn]});
            }
            setTimeout(function(){
                permission=true;
            },time);
            
        //     mn+=1;
        }
        
    });
    
    // wrap.on('mousewheel DOMMouseScroll', function(e){
    //     if(permission){
    //         permission=false;
    //         if(mn<offset[3]){
    //             mn=3;
    //             $('html, body').animate({scrollTop:-offset[mn]});
    //         }
    //         setTimeout(function(){
    //             permission=true;
    //         },time);
    //         mn-=1;
    //     }
    // })
    


    })(jQuery);