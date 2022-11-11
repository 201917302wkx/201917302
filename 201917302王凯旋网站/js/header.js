//技术支持湖北速建时代
//我们承接：网站开发、设计制作、商城开发、小程序开发、前端网站开发、设计、制作
//联系电话：13487170257
    $(function(){
        //超过一定高度导航添加类名
        var nav=$("header"); //得到导航对象
        var win=$(window); //得到窗口对象
        var sc=$(document);//得到document文档对象。
        win.scroll(function(){
            if(sc.scrollTop()>=100){
                nav.addClass("on");
            }else{
                nav.removeClass("on");
            }
        })

        //移动端展开nav
        $('#navToggle').on('click',function(){
            $('.m_nav1').addClass('open');
        })
        //关闭nav
        $('.m_nav1 .top .closed').on('click',function(){
            $('.m_nav1').removeClass('open');
        })

        //二级导航  移动端
        $(".m_nav1 .ul li").click(function() {
            $(this).children("div.dropdown_menu").slideToggle('slow')
            $(this).siblings('li').children('.dropdown_menu').slideUp('slow');
        });
          new WOW().init();

    })

