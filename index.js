$('div.btn').singleTap(function () {
    var $menu = $(this).find('ul'),
        height = $menu.find('li').length * 40 + 15 + 'px',
        opacity = $menu.css('opacity');

    $('div.btn ul').css({
        'top': '0',
        'opacity': '0'
    });

    if(opacity == 0) {
        $menu.css({
            'top': '-' + height,
            'opacity': 1
        });
    }else {
        $menu.css({
            'top': 0,
            'opacity': 0
        });
    }
});

