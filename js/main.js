

//ハンバーガーメニューがham(X印)を持つかどうかにより、メニューを表示するか、見えなくするか。
function db() {
		if($('#menubar_hdr').hasClass('ham')) {
			$('#menubar').addClass('db');
		} else {
			$('#menubar').removeClass('db');
		}
}


//ドロップダウンの親liタグ
$(function() {
    $('#menubar a[href=""]').click(function() {
		return false;
    });
});


// 汎用開閉処理
$(function() {
	$('.openclose').next().hide();
	$('.openclose').click(function() {
		$(this).next().slideToggle();
		$('.openclose').not(this).next().slideUp();
	});
});


//pagetop
$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
        $(scroll).hide();
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $(scroll).fadeIn().addClass(scrollShow);
            } else {
                $(scroll).fadeOut().removeClass(scrollShow);
            }
        });
});


//スムーススクロール
$(window).on('load', function() {
	var hash = location.hash;
	if(hash) {
		$('body,html').scrollTop(0);
		setTimeout(function() {
			var target = $(hash);
			var scroll = target.offset().top - 50;
			$('body,html').animate({scrollTop:scroll},500);
		}, 100);
	}
});
$(window).on('load', function() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top - 50;
            $('body,html').animate({scrollTop:target},500);
            return false;
    });
});


//h2の中に下線用のスタイルを作る
$(function() {
	$('main h2').wrapInner('<span class="uline">');
});


// 同一ページへのリンクの場合に開閉メニューを閉じる処理
$(function() {
	$('#menubar a[href^="#"]').click(function() {
		$('#menubar').addClass('close');
		$('#menubar').removeClass('db');
		$('#menubar_hdr').removeClass('ham');
	});
});


//タイマー
$(function() {
	var timer = false;
	$(window).resize(function() {
		if(timer !== false){
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
		}, 500);
	});
});


//メニュー切り替え処理
$(window).on("load resize", function() {
	setTimeout(function(){

		var winW = window.innerWidth;
		var winBP = 900;	//ブレイクポイント

			//小さな端末用
			if(winW < winBP) {
				$('#menubar').removeClass('pc');
				$('#menubar').addClass('sh');
				db();
				
			//大きな端末用
			} else {
				$('#menubar').removeClass('sh db');
				$('#menubar').addClass('pc');
			}

	}, 100);
});


//ハンバーガーメニューをクリックした際の処理
$(function() {
	$('#menubar_hdr').click(function() {
		$('#menubar_hdr').toggleClass('ham');
		db();
	});
});


//ドロップダウンメニューの処理
$(function(){

	$('#menubar li:has(ul)').addClass('ddmenu_parent');
	$('.ddmenu_parent > a').addClass('ddmenu');

		//タッチデバイス用
		$('.ddmenu').on('touchstart', function() {
			$(this).next('ul').stop().slideToggle();
			$('.ddmenu').not(this).next('ul').slideUp();
			return false;
		});

		//PC用
		$('.ddmenu_parent').hover(function() {
			$(this).children('ul').stop().slideToggle();
		});

});
