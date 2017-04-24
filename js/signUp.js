		window.onload=function(){
				//signUp注册页面js
				var docW=$(document).width();//文档宽
				var docH=$('#signUp').height();//文档高
				$('.bigzhaoceng').css({'width':docW,'height':docH,'background':'rgba(0,0,0,0.3)','position':'absolute','top':'0','z-index':390000000})
					//设置遮罩层的样式
				var loading=$('#signUp .public_header_wrapper .public_header .public_nav nav .loading')
				loading.eq(0).click(function(){
					$('.bigzhaoceng .loadingbox').show()
					$('.bigzhaoceng').show();
						
				})
			//点击登陆按钮中的关闭窗口
			$('.loadingbox .close').click(function(){
				$('.bigzhaoceng').hide()
				$('.loadingbox').hide();
			})
			

		}

		

		var star;
	onload=reg
	function reg(click){
		star=true;
		var username=document.getElementsByName('phonehao')[0];
		var email=document.getElementsByName('dxyz')[0];
		var password=document.getElementsByName('password')[0];
		var repass=document.getElementsByName('regpassword')[0];
//		var oinput=document.getElementsByTagName('input');
		check(username,'请输入11位手机号',function(val){
			if(val.match(/^1[34578]\d{9}$/)){
				return true;
			}else{
				
				star=false;
				return false;
			}
			
		},'请输入可用的手机号',click);
		check(email,'请输入4位验证码',function(val){
			if(val.length==4){
				return true;
				
			}else{
				star=false;
				return false;
			}
			
		},'请输入可用的验证码',click);
		
		check(password,'请输入6位-12位之间数字与字母组合',function(val){
			if(val.match( /^[\w]{6,12}$/)&&val.length>=6&&val.length<=12){
				return true;
				
			}else{
				star=false;
				return false;
			}
			
		},'请输入6位-12位之间数字与字母组合',click);
		check(repass,'请输入密码一致',function(val){
			if(val.match( /^[\w]{6,12}$/)&&val.length>=6&&val.length<=12&&password.value==val){
				return true;
				
			}else{
				star=false;
				return false;
			}
			
		},'请输入密码一致',click);
		
		return star
	}
