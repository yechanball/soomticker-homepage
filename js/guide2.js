(function($) {
    //$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

function selectSubMenu(num){
    switch(num) {
        case 1:
            ($('.content-sub-menu-01')).addClass('selected-sub-menu');
            document.all.subcontent01.style.visibility="visible";
            ($('.content-sub-menu-02')).removeClass('selected-sub-menu');
            document.all.subcontent02.style.visibility="hidden";
            ($('.content-sub-menu-03')).removeClass('selected-sub-menu');
            document.all.subcontent03.style.visibility="hidden";
            ($('.content-sub-menu-04')).removeClass('selected-sub-menu');
            document.all.subcontent04.style.visibility="hidden";
            ($('.content-sub-menu-05')).removeClass('selected-sub-menu');
            document.all.subcontent05.style.visibility="hidden";
            break;
        
        case 2:
            ($('.content-sub-menu-01')).removeClass('selected-sub-menu');
            document.all.subcontent01.style.visibility="hidden";
            ($('.content-sub-menu-02')).addClass('selected-sub-menu');
            document.all.subcontent02.style.visibility="visible";
            ($('.content-sub-menu-03')).removeClass('selected-sub-menu');
            document.all.subcontent03.style.visibility="hidden";
            ($('.content-sub-menu-04')).removeClass('selected-sub-menu');
            document.all.subcontent04.style.visibility="hidden";
            ($('.content-sub-menu-05')).removeClass('selected-sub-menu');
            document.all.subcontent05.style.visibility="hidden";
            break;

        case 3:
            ($('.content-sub-menu-01')).removeClass('selected-sub-menu');
            document.all.subcontent01.style.visibility="hidden";
            ($('.content-sub-menu-02')).removeClass('selected-sub-menu');
            document.all.subcontent02.style.visibility="hidden";
            ($('.content-sub-menu-03')).addClass('selected-sub-menu');
            document.all.subcontent03.style.visibility="visible";
            ($('.content-sub-menu-04')).removeClass('selected-sub-menu');
            document.all.subcontent04.style.visibility="hidden";
            ($('.content-sub-menu-05')).removeClass('selected-sub-menu');
            document.all.subcontent05.style.visibility="hidden";
            break;

        case 4:
            ($('.content-sub-menu-01')).removeClass('selected-sub-menu');
            document.all.subcontent01.style.visibility="hidden";
            ($('.content-sub-menu-02')).removeClass('selected-sub-menu');
            document.all.subcontent02.style.visibility="hidden";
            ($('.content-sub-menu-03')).removeClass('selected-sub-menu');
            document.all.subcontent03.style.visibility="hidden";
            ($('.content-sub-menu-04')).addClass('selected-sub-menu');
            document.all.subcontent04.style.visibility="visible";
            ($('.content-sub-menu-05')).removeClass('selected-sub-menu');
            document.all.subcontent05.style.visibility="hidden";
            break;

        case 5:
            ($('.content-sub-menu-01')).removeClass('selected-sub-menu');
            document.all.subcontent01.style.visibility="hidden";
            ($('.content-sub-menu-02')).removeClass('selected-sub-menu');
            document.all.subcontent02.style.visibility="hidden";
            ($('.content-sub-menu-03')).removeClass('selected-sub-menu');
            document.all.subcontent03.style.visibility="hidden";
            ($('.content-sub-menu-04')).removeClass('selected-sub-menu');
            document.all.subcontent04.style.visibility="hidden";
            ($('.content-sub-menu-05')).addClass('selected-sub-menu');
            document.all.subcontent05.style.visibility="visible";
            break;

        default:
            alert("잘못된 값이 입력되었습니다.");
            break;
    }
}