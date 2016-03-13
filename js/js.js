$(function(){
	//购物车
	$(".gouwu").hover(function(){
      $(".gouwu a").animate({height:103},200)
	},function(){
      $(".gouwu a").animate({height:0},200)
	})

	//banner
	var banner=$(".datu")
	var img=$(".datu img")
	var btnbox=$(".btn")
	var btn=$(".btn li")
    var index=0;
	function dome(type){
    if(type=="R"){
      index++;
      if(index>=img.length){
      	index=0
      }
    }
    if(type=="L"){
    	index--;
    	if(index>=-1){
    		idnex=img.length-1
    	}
    }

    // img.hide()
    // img.eq(index).fadeIn()
    img.animate({opacity:0},200)
    img.eq(index).animate({opacity:1},200)
    btn.css({background:"rgba(0,0,0,0.4)",borderColor:"rgba(255,255,255,0.4)"})
    btn.eq(index).css({background:"rgba(255,255,255,0.4)",borderColor:"rgba(0,0,0,0.4)"})
}

var t=setInterval(function(){dome("R")},3000)

banner.hover(function(){
   clearInterval(t)
},function(){
   t=setInterval(function(){dome("R")},3000)
})

btn.click(function(){
  var index1=$(this).index()
  clearInterval(t)
  img.stop()
  img.animate({opacity:0},100)
  img.eq(index1).animate({opacity:1},500)

  btn.css({background:"rgba(0,0,0,0.4)",borderColor:"rgba(255,255,255,0.4)"})
  btn.eq(index1).css({background:"rgba(255,255,255,0.4)",borderColor:"rgba(0,0,0,0.4)"})
  
  index=index1
})


$(".zuo1").click(function(){
	dome("L")
})
$(".you1").click(function(){
	dome("R")
})


//导航栏下拉菜单
      $(".list-one").hover(function(){

      $("list-one").find(".daohangx").stop()
      $(this).find(".daohangx").slideDown();
    },function(){
      $(this).find(".daohangx").css({display:"none"});
      $(this).find(".daohangx").slideUp();
      })


    //搜索框
    $(".word").focus(function(){
      $(".sou1").animate({opacity:0},400)
      $(".sou2").animate({opacity:0},400)
      $(".sousuox").css({display:"block"})
      $(".sousuo").css({border:"1px solid #ff6700"})
      $(".sousuo-1").css({border:"1px solid #ff6700",borderLeft:"none"})
    })
    $(".word").blur(function(){
      $(".sou1").animate({opacity:1},400)
      $(".sou2").animate({opacity:1},400)
      $(".sousuox").css({display:"none"})
      $(".sousuo").css({border:"1px solid #e0e0e0"})
      $(".sousuo-1").css({border:"1px solid #e0e0e0",borderLeft:"none"})

    })

   $(".xuanxiang").hover(function(){
    var index2=$(this).index()
    $(".xuanxiang>div").eq(index2).css({display:"block"})
   },function(){
    var index2=$(this).index()
    $(".xuanxiang>div").eq(index2).css({display:"none"})
   })


//单品轮播
   var huadong=$(".huadong")
   var huadong1=$(".huadong-1")
   var danping1=$(".danping1")
   var num=0
function demo(){
  num++
  huadong1.css({color:"#757575"})
  huadong.css({color:"#b0b0b0"})
  huadong1.hover(function(){
  huadong1.css({color:"#ff6700"})
  },function(){
  huadong1.css({color:"#757575"})
  })
  huadong.hover(function(){
  huadong.css({color:"#b0b0b0"})
  },function(){
  huadong.css({color:"#b0b0b0"})
  })
    if(num>=2){
      num=0

  huadong.css({color:"#757575"})
  huadong1.css({color:"#b0b0b0"})
  huadong.hover(function(){
  huadong.css({color:"#ff6700"})
  },function(){
  huadong.css({color:"#757575"})
  })
  huadong1.hover(function(){
  huadong1.css({color:"#b0b0b0"})
  },function(){
  huadong1.css({color:"#b0b0b0"})
  })
  }
  danping1.animate({left:-1240*num},400)
}
var tt=setInterval(function(){demo()},5000)
  
$(".first").hover(function(){
  clearInterval(tt)
},function(){
  tt=setInterval(function(){demo()},5000)
})   
 
 huadong.click(function(){
    danping1.stop()
    danping1.animate({left:-1240},400)

     huadong1.css({color:"#757575"})
  huadong.css({color:"#e0e0e0"})
  huadong1.hover(function(){
  huadong1.css({color:"#ff6700"})
  },function(){
  huadong1.css({color:"#757575"})
  })
  huadong.hover(function(){
  huadong.css({color:"#e0e0e0"})
  },function(){
  huadong.css({color:"#e0e0e0"})
  })
  })
   huadong1.click(function(){
    danping1.stop()
    danping1.animate({left:0},400)

      huadong.css({color:"#757575"})
  huadong1.css({color:"#e0e0e0"})
  huadong.hover(function(){
  huadong.css({color:"#ff6700"})
  },function(){
  huadong.css({color:"#757575"})
  })
  huadong1.hover(function(){
  huadong1.css({color:"#e0e0e0"})
  },function(){
  huadong1.css({color:"#e0e0e0"})
  })
})
    


})