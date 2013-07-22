$(function(){
	//tab
		$('.tab .h li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$('.tab .h li').index(this);
        $('.tab .b').eq(index).addClass('active').siblings('.b').removeClass('active');
    })
	//slider
	$('.slider .b ul').cycle({
        fx:     'scrollLeft',
        speed:  'fast',
        timeout: 3000,
        pager:  '.slider .f'
    });
	
	//传送带
	var slider1={
		show_num:1,
		width:227,
		m:$('.m4')
	}
	Slider(slider1);
	
	var slider2={
		show_num:1,
		width:227,
		m:$('.m5')
	}
	Slider(slider2);
	function Slider(s){
		s.index=0;
		s.num=s.m.find('li').length;
		s.next=s.m.find('.bc3');
		s.prev=s.m.find('.bc1');
		s.ul=s.m.find('ul');
		s.ul.width(s.width*s.num);
		s.next.click(function(){
			slider_next();
		})
		s.prev.click(function(){
			slider_prev();
		})
		function slider(){
			s.ul.animate({left:-s.width*s.index},500);
		}
		function slider_next(){
			s.index++;
			if(s.index>s.num-s.show_num){
				s.index=0;	
			}
			slider();	
		}
		function slider_prev(){
			s.index--;
			if(s.index<0){
				s.index=s.num-s.show_num;	
			}
			slider();
		}
	}
	
	//回到顶部
	$('.m11').hide()
	$(window).scroll(function(e) {
            if ($(window).scrollTop()>100){
				$(".m11").fadeIn(1500)}
				else{
					$(".m11").fadeOut(1500)}
		
        });
		$(".m11 a").click(function(e) {
            $("body, html").animate({scrollTop:0},1000);
			return false;
        });
		
		//获取图片焦点
		$('.m1 li').not('.l1').find('img').mouseenter(function(){
            var src=$(this).attr('data-src');
            $('.m1 .l1 img').attr('src',src);
        })

})

$(function(){
		//文字轮播
        var $this = $(".m7 .b");
        var scrollTimer;
        $this.hover(function(){
              clearInterval(scrollTimer);
         },function(){
           scrollTimer = setInterval(function(){
                         scrollNews( $this );
                    }, 2000 );
        }).trigger("mouseout");
});
function scrollNews(obj){
   var $self = obj.find("ul:first");
   var lineHeight = $self.find("li:first").height(); 
   $self.animate({ "margin-top" : -lineHeight +"px" },800 , function(){
         $self.css({"margin-top":"0px"}).find("li:first").appendTo($self); 
   })
}