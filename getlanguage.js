$(function () {
    //简体中文单击
    $("#zh-cn").click(function () {
        //清空cookie
        $.cookie('language',null);
        //设置cookie为中文
        $.cookie('language','cn',{ expires: 7 });
    })
    //英文点击
    $("#en-us").click(function () {
        //清空cookie
        $.cookie('language',null);
        //设置cookie为英文
        $.cookie('language','en',{ expires: 7 });
    })
    //繁体点击
    $("#zh-hk").click(function () {
        //清空cookie
        $.cookie('language',null);
        //设置cookie为繁体
        $.cookie('language','hk',{ expires: 7 });
    })
    //在页面加载的时候读取cookie
   var language=$.cookie('language');
   if(language!=null && language!="null"){
       swal({
           title: "提示",
           text: "系统检测您之前查看语言非当前页面语言,您之前选择的语言为: "+language+"  是否跳转至之前选择?",
           icon: "warning",
           buttons: true,
           dangerMode: true,
       })
           .then((willDelete) => {
               if (willDelete) {
                   if(language=="cn"){
                       location.href = '/';
                   } else if(language=='en'){
                       location.href = '/en-us/index.html';
                   }else if(language=='hk'){
                       location.href = '/zh-hk/index.html';
                   }
               } else {
                   $.cookie('language',null);
               }
           });
   }
})
