/**
 * Created by Administrator on 2017/12/11.
 */
$(function () {
    // 左边菜单栏的高设置适应屏幕高
    function ChangeSidebarHeight() {
        var Height = $(window).outerHeight()-$('.header-left').outerHeight()-$('.sidebar-left-top').outerHeight()-40;
        var Width = $('.sidebar-left').width();
        $('.sidebar-left-content').height(Height);
        if(Width>70){
            /*$('.wrap').removeClass('page-sidebar-min');*/
            if($(window).outerWidth()<1040){
                $('.wrap').removeClass('page-sidebar-max');
            }
        }else if(Width<=70){
            if($(window).outerWidth()<1040){
                $('.wrap').removeClass('page-sidebar-min');
            }
        }
    }
    ChangeSidebarHeight();
   $(window).resize(ChangeSidebarHeight);

    //  滚动条
    $('.sidebar-left .sidebar-left-content').niceScroll({
        cursorwidth: '5px',
        cursorborder: '1px',
        railalign: 'left'
    });

    // 按钮控制左侧菜单的显示和隐藏
    var Height;
    var SidebarLeft = true;
    $('.header-right .sidebar_btn').on('click',function () {
        var Width = $('.sidebar-left').width();
        if(Width > 70){
            $('.wrap').removeClass('page-sidebar-max').addClass('page-sidebar-min');
            Height = $(window).outerHeight()-$('.header-left').outerHeight()-$('.sidebar-left-top').outerHeight()-40;
            $('.sidebar-left-content').height(Height);
        }else{
            $('.wrap').removeClass('page-sidebar-min').addClass('page-sidebar-max');
            Height = $(window).outerHeight()-$('.header-left').outerHeight()-$('.sidebar-left-top').outerHeight()-40;
            $('.sidebar-left-content').height(Height);
        }
    });
    $('.header-left_left').on('click',function () {
        if(SidebarLeft == true){
            $('.wrap').addClass('page-sidebar-header-left');
            Height = $(window).outerHeight()-$('.header-left').outerHeight()*2-$('.sidebar-left-top').outerHeight()-40;
            $('.sidebar-left-content').height(Height);
            SidebarLeft = false;
        }else{
            $('.wrap').removeClass('page-sidebar-header-left');
            Height = $(window).outerHeight()-$('.header-left').outerHeight()*2-$('.sidebar-left-top').outerHeight()-40;
            $('.sidebar-left-content').height(Height);
            SidebarLeft = true;
        }
    });

    // 左侧列表中二级菜单的展开与隐藏
    $('.sidebar-left-content>ul>li').on('click',function () {
        if(SidebarLeft == true){
            $(this).find('.ShowNext').children('i').attr('class','fa fa-angle-down');
            SidebarLeft = false;
        }else{
            $(this).find('.ShowNext').children('i').attr('class','fa fa-angle-right');
            SidebarLeft = true;
        }
        $(this).children('ul').slideToggle();
    });
});