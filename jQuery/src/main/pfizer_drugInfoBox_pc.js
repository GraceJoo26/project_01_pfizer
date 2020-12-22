(function($){
    $.ajax({
        url:'../data/drug.json',
        datatype:'json',
        context:document.body
    }).done(function(data){
        var dataFile=data.sort(function(a,b){
            return b.id-a.id;
        });

        var drugPic=$('.pc_drugPic');
        var code='<li></li>';
        var li;
        var url="../img/"
        for(i=0; i<10; i++){
            drugPic.append(code);
            
            li=drugPic.find('li').eq(i);
            li.css(
                {'backgroundImage':'url(' + url + dataFile[i].picture + ')'}
                );
            console.log(i);

        }
    })
})(jQuery);