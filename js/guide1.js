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
            
            if(($(window)).width() > 768) {
                document.all.subcontent01.style.height="auto";
                document.all.subcontent02.style.height="1px";
                document.all.subcontent03.style.height="1px";
                document.all.subcontent04.style.height="1px";
            }
            ($(window)).resize(function() {
                if(($(window)).width() > 768) {
                    document.all.subcontent01.style.height="auto";
                    document.all.subcontent02.style.height="1px";
                    document.all.subcontent03.style.height="1px";
                    document.all.subcontent04.style.height="1px";
                }
                else{
                    document.all.subcontent01.style.height="75%";
                    document.all.subcontent02.style.height="75%";
                    document.all.subcontent03.style.height="75%";
                    document.all.subcontent04.style.height="75%";
                }
            });
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

            if(($(window)).width() > 768) {
                document.all.subcontent01.style.height="1px";
                document.all.subcontent02.style.height="auto";
                document.all.subcontent03.style.height="1px";
                document.all.subcontent04.style.height="1px";
            }
            ($(window)).resize(function() {
                if(($(window)).width() > 768) {
                    document.all.subcontent01.style.height="1px";
                    document.all.subcontent02.style.height="auto";
                    document.all.subcontent03.style.height="1px";
                    document.all.subcontent04.style.height="1px";
                }
                else{
                    document.all.subcontent01.style.height="75%";
                    document.all.subcontent02.style.height="75%";
                    document.all.subcontent03.style.height="75%";
                    document.all.subcontent04.style.height="75%";
                }
            });
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

            if(($(window)).width() > 768) {
                document.all.subcontent01.style.height="1px";
                document.all.subcontent02.style.height="1px";
                document.all.subcontent03.style.height="auto";
                document.all.subcontent04.style.height="1px";
            }
            ($(window)).resize(function() {
                if(($(window)).width() > 768) {
                    document.all.subcontent01.style.height="1px";
                    document.all.subcontent02.style.height="1px";
                    document.all.subcontent03.style.height="auto";
                    document.all.subcontent04.style.height="1px";
                }
                else{
                    document.all.subcontent01.style.height="75%";
                    document.all.subcontent02.style.height="75%";
                    document.all.subcontent03.style.height="75%";
                    document.all.subcontent04.style.height="75%";
                }
            });
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

            if(($(window)).width() > 768) { 
                document.all.subcontent01.style.height="1px";
                document.all.subcontent02.style.height="1px";
                document.all.subcontent03.style.height="1px";
                document.all.subcontent04.style.height="auto";
            }
            ($(window)).resize(function() {
                if(($(window)).width() > 768) {
                    document.all.subcontent01.style.height="1px";
                    document.all.subcontent02.style.height="1px";
                    document.all.subcontent03.style.height="1px";
                    document.all.subcontent04.style.height="auto";
                }
                else{
                    document.all.subcontent01.style.height="75%";
                    document.all.subcontent02.style.height="75%";
                    document.all.subcontent03.style.height="75%";
                    document.all.subcontent04.style.height="75%";
                }
            });
            break;

        default:
            alert("잘못된 값이 입력되었습니다.");
            break;
    }
}