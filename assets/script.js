//logoの表示
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');
    $("#splash_logo").delay(1200).fadeOut('slow');
});
  

// ----メインスライドショー----
$(function() {
    var now = new Date();
    var hours = now.getHours();
    var startIndex;
    if (hours >= 0 && hours < 6) {
        startIndex = 3;
    } else if (hours >= 6 && hours < 12) { 
        startIndex = 0; 
    } else if (hours >= 12 && hours < 18) { 
        startIndex = 1; 
    } else { 
        startIndex = 2; 
    }

    $(".slideshow-zoom li").hide().removeClass("zoom"); 
    $(".slideshow-zoom li").eq(startIndex).css({"position": "relative", "opacity": 1}).addClass("zoom").show(); 

    setInterval(function() {
        var $active = $(".slideshow-zoom li.zoom");
        var $next = $active.next("li").length ? $active.next("li") : $(".slideshow-zoom li:first");
        $active.removeClass("zoom").fadeOut(2000, function() {
            $next.addClass("zoom").fadeIn(2000);
        });
    }, 6000);
});


//-----ハンバーガー------
$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});

//風景美術館---
function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');
		}else{
		$(this).removeClass('blur');
		}
		});
}

$(window).scroll(function () {
	BlurTextAnimeControl();
});


//---宿1---
$(function() {
   $(window).on('scroll', function() {
        let rm1 = $('.room1').offset().top;
        let wh = $(window).height();
        if (rm1 <= $(window).scrollTop() + wh) {
            $('.room1').addClass('fade-in-right');
        }
   })
})
//---宿2---
$(function() {
   $(window).on('scroll', function() {
        let rm2 = $('.room2').offset().top;
        let wh = $(window).height();
        if (rm2 <= $(window).scrollTop() + wh) {
            $('.room2').addClass('fade-in-left');
        }
   })
})
//----食1---
$(function() {
   $(window).on('scroll', function() {
        let fd1 = $('.food1').offset().top;
        let wh = $(window).height();
        if (fd1 <= $(window).scrollTop() + wh) {
            $('.food1').addClass('fade-in-left');
        }
   })
})
//----食2----
$(function() {
   $(window).on('scroll', function() {
        let fd2 = $('.food2').offset().top;
        let wh = $(window).height();
        if (fd2 <= $(window).scrollTop() + wh) {
            $('.food2').addClass('fade-in-right');
        }
   })
})
//----食3---
$(function() {
   $(window).on('scroll', function() {
        let fd3 = $('.food3').offset().top;
        let wh = $(window).height();
        if (fd3 <= $(window).scrollTop() + wh) {
            $('.food3').addClass('fade-in-bottom');
        }
   })
})
//----祝1---
$(function() {
   $(window).on('scroll', function() {
        let wd1 = $('.wedding1').offset().top;
        let wh = $(window).height();
        if (wd1 <= $(window).scrollTop() + wh) {
            $('.wedding1').addClass('fade-in-right');
        }
   })
})
//----祝2---
$(function() {
   $(window).on('scroll', function() {
        let wd2 = $('.wedding2').offset().top;
        let wh = $(window).height();
        if (wd2 <= $(window).scrollTop() + wh) {
            $('.wedding2').addClass('fade-in-bottom');
        }
   })
})
//----美1---
$(function() {
   $(window).on('scroll', function() {
        let bt1 = $('.beauty1').offset().top;
        let wh = $(window).height();
        if (bt1 <= $(window).scrollTop() + wh) {
            $('.beauty1').addClass('fade-in-left');
        }
   })
})
//----美2---
$(function() {
   $(window).on('scroll', function() {
        let bt2 = $('.beauty2').offset().top;
        let wh = $(window).height();
        if (bt2 <= $(window).scrollTop() + wh) {
            $('.beauty2').addClass('fade-in-right');
        }
   })
})

