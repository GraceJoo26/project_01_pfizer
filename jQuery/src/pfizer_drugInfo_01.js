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
        var insertCode='<li><a href="#"></a></li>';
        var li;
        var i=0;
        console.log(dataFile.length);
        for(; i<=dataFile.length-1;i++){
            drugBox.append(insertCode);

            var li=drugBox.children('li');
            var url="../img/"
            li.eq(i).css({
                backgroundImage:'url('+ url + dataFile[i].picture + ')',
                backgroundPosition:'50% 50%',
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat'
            });
        }
    })
})(jQuery);