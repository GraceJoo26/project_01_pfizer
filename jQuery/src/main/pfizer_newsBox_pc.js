(function($){
    $.ajax({
        url:'../data/news&notice_main.json',
        datatype:'json',
        context:document.body
    }).done(function(data){
        var dataFile=data.sort(function(a,b){
            return b.id-a.id;
        });
        var innerCode='<dl><dt></dt><dd class="pc_theme"></dd><dd class="pc_date"></dd></dl></div>'
        var newsBox=$('.pc_news');
        var prevBtn=$('.pc_prev');
        var nextBtn=$('.pc_next');
        
        
        var url="../img/"
        var newsNewBox, dl, dt, dd, cloneLastDl, reDl, theme, date;
        
        for(i=0;i<dataFile.length; i++){
            newsNewBox = newsBox.append(innerCode);
            dl=newsBox.find('dl').eq(i);            

            theme = dl.find('.pc_theme');
            date = dl.find('.pc_date');

            
            // console.log(i)
            dl.find('dt').css({'backgroundImage':'url('+url+dataFile[i].picture+')'});
            theme.text(dataFile[i].theme);
            date.text(dataFile[i].date);
        } 
        reDl = newsBox.find('dl');
        newsBox.css({'width':reDl.length*(100/3)+'%','position':'relative', 'left':'-101%'});
        reDl.css({'width':(90/reDl.length)+'%','float':'left'});
        
        
        // newsBox내부 dl전체 복제
        /* var dlAllCopy = newsBox.contents().clone(true);
        newsBox.append(dlAllCopy); */
        
        
        cloneLastDl = dl.eq(-1).clone(true);
        newsBox.prepend(cloneLastDl);

        slideN=0;
        nextBtn.on('click',function(e){
            e.preventDefault();
            if(slideN>=dl.length-1){
                slideN=-1;
                
                newsBox.css({'marginLeft':(slideN*-100)+'%'});
                dl.css({'marginLeft':(slideN*-100)+'%'});
            }
            slideN+=1;
            newsBox.stop().animate({'marginLeft':(slideN*-100)+'%'});
            dl.stop().animate({'marginLeft':(slideN*-100)+'%'});
        });
        prevBtn.on('click',function(e){
            e.preventDefault();
            if(slideN<=-1){
                slideN=dl.length-1;

                dl.css({'marginLeft':(slideN*-100)+'%'});
                newsBox.css({'marginLeft':(slideN*-100)+'%'});
            }
            slideN-=1;
            newsBox.stop().animate({'marginLeft':(slideN*-100)+'%'});
            dl.stop().animate({'marginLeft':(slideN*-100)+'%'});
        });

          
    });
})(jQuery);
