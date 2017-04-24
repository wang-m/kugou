//song.html页面屏幕高度计算
window.onload=function(){
	var mymusic=document.getElementById('mymusic');
	var isong=$('#song');
	var btn=$('#song .btn span');
	var audioo=$('#song .audio');
	var txt=$('#song .text');
	var geci=$('#song .geci');
	var gcbox=$('#song .geci .gcbox');
	var songClientW=document.documentElement.clientHeight||document.body.clientHeight;
	isong.css({'height':songClientW})
//播放
		var onoff=true;
			btn[1].onclick=function(){
				if(onoff==true){
					audioo[0].play();
					$(this).css({'backgroundPosition':'-6px -66px'})
					onoff=false;
				}else{
					audioo[0].pause();
					$(this).css({'backgroundPosition':'-6px -6px'})
					onoff=true;
				}
		}
		//获取歌词
var lrc=txt[0].value;
var arrlrc=lrc.split('[');
var html='';
for(var i=0;i<arrlrc.length;i++){
	var arr=arrlrc[i].split(']');
	var time=arr[0].split('.');
	var test=arr[1];
	var timer=time[0].split(':');
	var ms=timer[0]*60+timer[1]*1;
	if(test){
		html+='<p id='+ms+'>'+test+'</p>';
	}
	var pp=isong[0].getElementsByTagName('p');
}
		
	
		gcbox[0].innerHTML=html;
		var op=$('#song .geci p');
		
		//歌词同步
		//timeUpdata当歌曲时间发生变化时触发
		var gcboxH=gcbox[0].offsetHeight;
		var num=0;
		
			
			audioo[0].addEventListener('timeupdate',function(){
				//获取当前播放的时间
				var times=parseInt(this.currentTime);
				var ztime=parseInt(this.duration)//获取总时间
				if(document.getElementById(''+times)==null){return}

		//把当前时间和p标签的id名进行对比，如果相同标签变色
				if(document.getElementById(''+times)){
					for(var i=0;i<op.length;i++){
						op[i].style.color='';
					}
				}
				
				document.getElementById(''+times).style.color='#01e5ff';
//判断成功一次num+7下次虽然curtime可能不变但是num变了 ，所以就每次只能判断
				if(pp[num+7].id==times){
					if(pp[num+7].id=='undefined'){return}
					gcbox[0].style.top=-30*num+"px";
	//				console.log(pp[num+1].id)
					num++;
				}
				if(times==ztime){
					
					gcbox.css({'top':'0'});
					this.currentTime=0
				}
				
			})

	//拖动滚动条
	//计算比例   拖动的距离/总长度-拖动头
	//时间比例=当前的时间/总时间
	var allWidth=$('.progress').width()-$('.gragprogress').width();
	audioo[0].addEventListener('timeupdate',function(){
		
		var times=parseInt(this.currentTime);//获取当前时间
		var ztime=parseInt(this.duration)//获取总时间
		var scale=times/ztime;//时间比例
		var times=times;
		var a=0;
		var b=0;
		var timefen=0;//分
		if(times>=60){
			timefen=parseInt(times/60);
			times=times%60;

		}
		$('.content_footer .tiao .songtime span').html(ww(timefen)+':'+ww(times));
		$('.tiao .songtime span').eq(1).html(time[0]);
		
		$('.gragprogress').css({'left':allWidth*scale})
		$('.progressbg').width(allWidth*scale);
	})
	//小于10前面bu0
	function ww(time1){
		return time1<10?'0'+time1:time1;
	}
		
		
		$('.gragprogress').mousedown(function(e){
			var l=e.pageX-$('.gragprogress').offset().left;
			
			$(document).mousemove(function(e){
				var _left=e.pageX-l-$('#song .songbox .content_footer .tiao').offset().left;
				if(_left<=0){
					_left=0;
				}else if(_left>=allWidth){
					_left=allWidth;
				}
				
				$('.gragprogress').css({'left':_left});
	//			var ztime=parseInt(this.duration);//获取总时间
//				var times=parseInt(this.currentTime);//获取当前时间
//				
				
				
				var scale=_left/($('.progress').width()-$('.gragprogress').width());
				
//				this.currentTime
				$('#song .audio').get(0).currentTime=scale*$('#song .audio').get(0).duration;
				console.log(scale*$('#song .audio').get(0).duration)
			})
			$(document).mouseup(function(){
				$(document).unbind('mouseup');
				$(document).unbind('mousemove');
				
			})
		})
		
//		 mymusic.addEventListener("ended", function () {
//		 	alert(1)
//		 })
}
//监听歌曲播放完成
		
		
