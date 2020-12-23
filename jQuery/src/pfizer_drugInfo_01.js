(function($){
    $.ajax({
        url:'../data/drug.json',
        datatype:'json',
        context: document.body
    }).done(function(data){
        var dataFile=data.sort(function(a,b){
            return b.id-a.id;
        });
        var drugBox=$('.drugBox');
        var insertCode='<li><a href="#"><div class="picture"></div><dl><dt></dt><dd></dd></dl></a></li>';
        var pictureBox;
        var i=0;
        var  it;
        var dl,dt,dd;
        var a=drugBox.find('a');
       
        for(; i<=dataFile.length-1;i++){
            var url="../img/"
            drugBox.append(insertCode);
            it=$(this);
            dt=drugBox.find('dt');
            dd=drugBox.find('dd');
            pictureBox=drugBox.find('.picture');
                dt.eq(i).text(dataFile[i].name);
                dd.eq(i).text(dataFile[i].ingredient);
                pictureBox.eq(i).css({
                backgroundImage:'url('+ url + dataFile[i].picture + ')',
                backgroundPosition:'50% 50%',
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat'
            });
             
        }
      drugBox.find('a').on('mouseenter focus',function(e){
          e.preventDefault();
          $(this).find('dl').stop().show();
        
      });
      drugBox.find('a').on('mouseleave blur', function(){
        $(this).find('dl').stop().hide();
      })

       
    })
    })(jQuery);