

// ピックアップ求人情報の横スライドショー
$('.pickup').slick({
	autoplay: true,
	dots: false,			//丸いページナビボタンを非表示
	arrows: true,			//左右の矢印
	prevArrow: '<div class="slick-prev"></div>',	//「前に戻る」矢印のclassを追加
	nextArrow: '<div class="slick-next"></div>',	//「次へ進む」矢印のclassを追加
	autoplaySpeed: 4000,	//切り替えのスピード。デフォルトは3000。
	pauseOnHover: false,	//マウスオン時にスライドショーをストップする
	slidesToShow: 3,		//画面内に表示させる枚数。
	slidesToScroll: 2,		//１回でスライド移動する枚数。2枚ずつ移動。

	responsive: [
	{
	breakpoint: 900, //ブレークポイント。900px未満。
	settings: {
	slidesToShow:2	//画面内に表示させる数。3枚。
	}
	},{
	breakpoint: 480, //ブレークポイント。480px未満。
	settings: {
	slidesToShow: 1	//画面内に表示させる数。1枚。
	}
	}
	]
});