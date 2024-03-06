// ----メインスライドショー----
$(function() {
    // 現在の時間を取得
    var now = new Date();
    var hours = now.getHours();

    // 適切なスライドのインデックスを決定
    var startIndex;
    if (hours >= 0 && hours < 6) { // 0:00~6:00
        startIndex = 3; // main4.jpg
    } else if (hours >= 6 && hours < 12) { // 6:00~12:00
        startIndex = 0; // main1.jpg
    } else if (hours >= 12 && hours < 18) { // 12:00~18:00
        startIndex = 1; // main2.jpg
    } else { // 18:00~24:00
        startIndex = 2; // main3.jpg
    }

    // 指定されたスライドから開始
    $(".slideshow-zoom li").hide().removeClass("zoom"); // すべてのスライドを非表示にしてzoomクラスを削除
    $(".slideshow-zoom li").eq(startIndex).css({"position": "relative", "opacity": 1}).addClass("zoom").show(); // 開始インデックスのスライドを表示

    // スライドショーのロジック
    setInterval(function() {
        var $active = $(".slideshow-zoom li.zoom");
        var $next = $active.next("li").length ? $active.next("li") : $(".slideshow-zoom li:first");

        // 現在のスライドから.zoomクラスを削除し、フェードアウトして非表示にする
        $active.removeClass("zoom").fadeOut(2000, function() {
            // フェードアウト完了後、次のスライドに.zoomクラスを追加し、フェードインする
            $next.addClass("zoom").fadeIn(2000);
        });
    }, 6000);
});


//-----ハンバーガー------
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//風景美術館---
function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){
		var elemPos = $(this).offset().top-50;//要素より、50px上の
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

// イベントスライドショー
$('.slider').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: false,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
            slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1枚見せる
            slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        }
    }
]
});

