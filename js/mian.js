$('#main .main_2 .main2_left .main2_top nav span').click(function(){
	var index=$(this).index();
	var oul=$('#main .main_2 .main2_left .main2_botton ul');
	oul.each(function(i){
		oul.eq(i).hide();
	})
	oul.eq(index).show();
})
//main3华语歌手 等国家切换
	//var count=$('#main .main_3 .main_right .main_left_top p .count');
	var box=$('#main .main_3 .main_right .main_right_botton ul');
	var main3=document.getElementById('main_3');
	var count=getclass(main3,'count')
	for(var i=0;i<count.length;i++){
		count[i].index=i;
		count[i].onmouseover=function(){
			for(var i=0;i<count.length;i++){
				box[i].style.display='none';
				count[i].style.color=''
			}
			count[this.index].style.color='#009af3'
			box[this.index].style.display='block'
		}
	}

	function getclass(parent,className){
		var obj=parent.getElementsByTagName('*');
		var result=[];
		for(var i=0;i<obj.length;i++){
			if(obj[i].className===className){
				result.push(obj[i])
			}
		}
		return result;
	}
//banner图片切换
		var banner=$('#banner');
		var bannerLi=$('#banner ul li');
		var spanRadius=$('#banner nav span')
		var a=0;
		var time=null;
		lunbo()
		function lunbo(){
			time=setInterval(function(){
				a++;
				a%=7;
				bannerLi.each(function(i){
					$(this).hide();
					spanRadius.eq(i).removeClass('banner_Active')
				})
				bannerLi.eq(a).fadeIn();
				spanRadius.eq(a).addClass('banner_Active')
//				console.log(a);
				
			},3000)
		}
	spanRadius.mouseover(function(){
		clearInterval(time);
		var index=$(this).index()	
			spanRadius.each(function(i){
				$(this).removeClass('banner_Active');
				bannerLi.eq(i).hide();
			})
			spanRadius.eq(index).addClass('banner_Active');
			bannerLi.eq(index).fadeIn(600);
			a=index
	})
	spanRadius.mouseout(function(){
		lunbo()
	})
//榜单页面：弹性伸缩
//		var remen=$('#bollboard .bollboardLeft .remen');
//		alert(remen.length)

//登录按钮
		window.onload=function(){
			
			$('.header .sign p button').eq(0).click(function(){
				$('.bigzhaoceng .loadingbox').show()
				$('.bigzhaoceng').show();
				var docW=$(document).width();
				var docH=$(document).height();
				$('.bigzhaoceng').css({'width':docW,'height':docH,'background':'rgba(0,0,0,0.3)','position':'absolute','top':'-671px','z-index':200000000})
				
			})
		}
//点击登陆按钮中的关闭窗口
		$('.loadingbox .close').click(function(){
			$('.bigzhaoceng').hide()
			$('.loadingbox').hide();
		})



