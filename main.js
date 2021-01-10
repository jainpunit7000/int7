$(document).ready(function(){
    var buyed = false ;
    $(".item1").click(() => {
        console.log("overlay activated") ;
        $(".youtube").attr("src","https://www.youtube.com/embed/wMd1HY-HDdA") ;
        $(".overlay").css({
            'display' : "block"
        })
    });
    $(".item2").click(() => {
        if( !buyed ){
            $(".payment").css({
                'display' : "block"
            })
            return ;
        }
        console.log("overlay activated") ;
        $(".youtube").attr("src","https://www.youtube.com/embed/urXcXYgMzqI") ;
        $(".overlay").css({
            'display' : "block"
        })
    });
    $(".item3").click(() => {
        console.log("overlay activated") ;
        $(".youtube").attr("src","https://www.youtube.com/embed/QpkDGtQIi4w") ;
        $(".overlay").css({
            'display' : "block"
        })
    });
    $(".item4").click(() => {
        if( !buyed ){
            $(".payment").css({
                'display' : "block"
            })
            return ;
        }
        console.log("overlay activated") ;
        $(".youtube").attr("src","https://www.youtube.com/embed/CVsdXKO9xlk") ;
        $(".overlay").css({
            'display' : "block"
        })
    });
    $(".item5").click(() => {
        if( !buyed ){
            $(".payment").css({
                'display' : "block"
            })
            return ;
        }
        console.log("overlay activated") ;
        $(".youtube").attr("src","https://www.youtube.com/embed/8NyQKYaQu5o") ;
        $(".overlay").css({
            'display' : "block"
        })
    });
    $(".overlay").click(() => {
        $(".overlay").css({
            'display' : "none"
        })
        $('.youtube').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
          });
        $(".youtube").attr("src","https://www.youtube.com/embed/a7fzkdfvsvwqLozwA") ;
    })
    $(".buy").click(()=>{
        $(".payment").css({
            'display' : "block"
        })
    })
    $(".pay").click(()=>{
        buyed=true ;
        $(".lock-data").css({
            display:"none" 
        });
        $(".buy").css({
            display:"none" 
        })
        // $(".item2 .item4 .item5").removeClass("lock") ;
        $("div").removeClass("lock") ;
        $(".payment").css({
            'display' : "none"
        })
    })
    $(".cancel").click(() => {
        $(".payment").css({
            'display' : "none"
        })
    })
});