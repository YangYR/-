$(function(){
    var wWindow=$(window).width();
    var hWindow=$(window).height();
    $(".main").width(wWindow-180);
    $('.menu').height(hWindow+20);
    $('.main-content-wrap').height(hWindow-75);
    //切换菜单
    $('.toggle-menu').click(function(){
        if($('.left-show').length > 0){
            $('.menu').stop(true,true).animate({
                "width":"80px"
            },500).addClass('small-menu');
            //菜单折叠后 点击图标
            $(".small-menu .nav-name").find("a").click(function(){
                var href=$(this).parent().next(".sub-nav").find("li:first-child a").attr("href");
                window.location=href;
            });
            $('.main').stop(true,true).animate({
                "width":wWindow-80+"px",
                "left":"80px"
            },500);
            $(".toggle-menu").removeClass("left-show").addClass('right-show');
            
        }
        //向左缩小
        else {
            $('.menu').stop(true, true).animate({
                "width": "180px"
            }, 500).removeClass('small-menu');
            $('.main').stop(true, true).animate({
                "width": wWindow - 180 + "px",
                "left": "180px"
            }, 500);
            $(".toggle-menu").removeClass("right-show").addClass('left-show');
            //向右展开
        }


    });
    //----------------------------------------------

    //菜单折叠
    $('.nav-name a').click(function(){
        $(this).parent().parent().siblings(".nav-control").removeClass('active');
        $(this).parent().parent().siblings(".nav-control").find(".nav-name i").removeClass("icon-shangjiantou");
            //初始化
        $(this).parent().parent().toggleClass("active");
        $(this).find("i").toggleClass("icon-shangjiantou","icon-jiantou");
    });
    //----------------------------------------------
    //表单编辑
    $('.default-show').bind("click",function(){
        $(".active-show").hide();
        $(".default-show").show();
        $(this).hide();
        $(this).next(".active-show").show();
        $(this).next(".active-show").find('input').focus();
    });
    $('.active-show input').blur(function(){
        if($.trim($(this).val()) == ""){
            $(this).parent().parent().hide();
            $(this).parent().parent().prev(".default-show").show();
        }

    });
    //----------------------------------------------
    //checkbox
    $('tbody .check-box').click(function(){
        $(this).toggleClass("checked");
    });
    $('thead .check-box').click(function(){
        $(this).toggleClass("checked");
        if($(this).hasClass('checked')){
            $(this).closest("table").find("tbody .check-box").addClass("checked");
        }
        else{
            $(this).closest("table").find("tbody .check-box").removeClass("checked");
        }
      });
    //登录checkbox
    $('.login-div .check-box').click(function(){
        $(this).toggleClass("checked");
    });
    //----------------------------------------------
    //自定义下拉函数
    function xiaLa() {
    $('.result').bind("click",function(){
        event.stopPropagation();
        $(".select-list-more").hide();
        if(  $(this).next('.select-list').css('display')=="block"){
            $(".select-list").css("display","none");
        }
        else{
            $(".select-list").css("display","none");
            $(this).next('.select-list').css('display',"block");
        }
        // $(this).next('.select-list').toggle();
    });
    $('.select-list li').click(function(){
        event.stopPropagation();
        var $value=$(this).text();
        $(this).parent().parent().parent().find(".result span").text($value);
        $('.select-list').hide();
    });
    $(document).click(function (event) {
        $('.select-list').hide();
    });
    }
    xiaLa();
    //----------------------------------------------
    //导入，上传
    $('.view-source').click(function(){
        $('.hide-file').click();
    });
    $('.hide-file').change(function(){
        $('.choose-result').text($(this).val())
    });
    //----------------------------------------------
    //delete
    $('.delete').click(function(){
        $(this).parent().remove();
    });
    //----------------------------------------------
    //新增select
    $(".add-form .del-btn").click(function(){
        $(this).parent().remove();
    });
    $('.add-form .add-btn').click(function(){
        var html='<div class="add-control clearfix"><input type="text" placeholder=""> <a class="del-btn"><i class="iconfont icon-iconfontcha"></i></a> </div>'
        $(".add-form").prepend(html);
        $(".add-form .del-btn").click(function(){
            $(this).parent().remove();
        });
    });
    //----------------------------------------------
    //set-btn
    $('.set-btn .set-a').click(function(){
        $('.add-select').toggle();
    });
    $(".set-btn .close").click(function(){
        $('.add-select').hide()
    });
    //----------------------------------------------
    //新增角色
    $(".add-tr-btn button").click(function(){
        quanXian();
        xiaLa();
        var html='<tr class="add-tr"><td>1</td><td><input type="text" placeholder="新增"></td><td><input type="text" placeholder="备注"></td><td><div class="select-more"><div class="result-more"><span>全部菜单</span><i class="iconfont icon-jiantou"></i></div><div class="select-list-more"><ul><li class="total-control clearfix checked"><span>全部菜单</span><a class="check-box-small"></a></li><li class=""><dl class="active"><dt class="clearfix select"><span><i></i> 运营管理</span><a class="check-box-small"></a></dt><dd class="clearfix select"><span>未完成的订单</span><a class="check-box-small"></a></dd><dd class="clearfix"><span>已完成的订单</span><a class="check-box-small"></a></dd><dd class="clearfix"><span>已取消的订单</span><a class="check-box-small"></a></dd></dl></li><li class=""><dl><dt class="clearfix"><span><i></i>网点管理</span><a class="check-box-small"></a></dt><dd class="clearfix"><span>店小二管理</span><a class="check-box-small"></a></dd><dd class="clearfix"><span>代收网点管理</span><a class="check-box-small"></a></dd></dl></li><li class=""><dl><dt class="clearfix"><span><i></i>客户管理</span><a class="check-box-small"></a></dt><dd class="clearfix"><span>客户列表</span><a class="check-box-small"></a></dd></dl></li><li class=""><dl><dt class="clearfix"><span><i></i>报表查询</span><a class="check-box-small"></a></dt><dd class="clearfix"><span>营业部报表</span><a class="check-box-small"></a></dd><dd class="clearfix"><span>代收网点报表</span><a class="check-box-small"></a></dd></dl></li><li class=""><dl><dt class="clearfix"><span><i></i>系统设置</span><a class="check-box-small"></a></dt><dd class="clearfix"><span>角色管理</span><a class="check-box-small"></a></dd><dd class="clearfix"><span>菜单管理</span><a class="check-box-small"></a></dd></dl></li></ul></div></div></td><td><div class="select"><div class="result"><span>全部内容</span><i class="iconfont icon-jiantou"></i></div><div class="select-list"><ul><li>快运本部</li><li>华东分部</li><li>华北分部</li></ul></div></div></td><td><a class="delete-tr"><img src="images/laji.png" alt=""></a></td></tr>';
         $(".add-person").append(html);
        $(".delete-tr").click(function(){
            $(this).parent().parent().remove();
        });
        quanXian();
        xiaLa();
    });
    //----------------------------------------------
    //权限管理 下拉功能
    function quanXian() {
    //权限管理
    $(".select-more .result-more").click(function(){
        event.stopPropagation();
        $(".select-list").hide();
        if(  $(this).next(".select-list-more").css('display')=="block"){
            $(".select-list-more").css("display","none");
        }
        else{
            $(".select-list-more").css("display","none");
            $(this).next(".select-list-more").css('display',"block");
        }
        // $(this).next(".select-list-more").toggle()
    });

    //返回result-more的值
    function returnResult(){
        $(".select-list-more").each(function(){
            var value=0;
            var dateValue="";
            var aDd=$(this).find("dd.select");
            if($(this).find(".total-control").hasClass("checked")){
                value=$(this).find(".total-control span").text();
                dateValue=value;
            }
            else if(!$(this).find(".total-control").hasClass("checked")&&aDd.length==0){
                value="请选择权限";
                dateValue="";
            }
            else{
                value=$(aDd[0]).find("span").text()+"...";
                for(var i=0;i<aDd.length;i++){
                    if(i==0){
                        dateValue=$(aDd[0]).find("span").text();
                    }
                    else{
                        dateValue=dateValue+","+$(aDd[i]).find("span").text();
                    }
                }
            }
            $(this).parent().find(".result-more span").text(value);
            $(this).parent().find(".result-more span").attr("data-value",dateValue)
        })
    }
    //点击dt控制全部dd
    $("dl dt span").click(function(){
        event.stopPropagation();
        $(this).parent().parent().toggleClass("active");
    });
    $("dl dt a").click(function(){
        event.stopPropagation();
        $(this).parent().parent().parent().parent().find(".total-control").removeClass("checked");
        if($(this).parent().hasClass("select")){
            $(this).parent().parent().find("dd").removeClass("select");
        }
        else{
            $(this).parent().parent().find("dd").addClass("select");
        }
        $(this).parent().toggleClass("select");
        returnResult();
    });
    //点击dd 控制自己以及取消dt的选中状态

    $("dl dd").click(function(){
        event.stopPropagation();
        $(this).parent().parent().parent().find(".total-control").removeClass("checked");
      $(this).toggleClass("select");
        $(this).parent().find("dt").removeClass("select");
        returnResult();
    });
    $(".total-control a").click(function(){
        event.stopPropagation();
        $(this).parent().toggleClass("checked");
        if($(this).parent().hasClass("checked")){
            $(this).parent().parent().find("dt,dd").addClass("select");
        }
        else{
            $(this).parent().parent().find("dt,dd").removeClass("select");
        }
        returnResult();
    });
//点击隐藏
    $(document).click(function (event) {
        $('.select-list-more').hide();
        returnResult();
    });
    };
    quanXian();
});
