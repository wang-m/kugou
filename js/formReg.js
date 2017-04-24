function gSpan(cobj){
	while(true){
		if(cobj.nextSibling.nodeName!='SPAN'){
			cobj=cobj.nextSibling;
		}else{
			return cobj=cobj.nextSibling;
		}
	}
}
function check(obj,error,func,error1,click){
	var ospan=gSpan(obj);
		obj.onfocus=function(){
			ospan.innerHTML=error;
			ospan.className='stata1';
		}
		obj.onblur=function(){
			if(func(this.value)){
				ospan.innerHTML='正确';
				ospan.className='stata4';
			}else{
				ospan.className='stata3';
				
				ospan.innerHTML=error1;
				
			}
		}
		if(click=="c"){
			obj.onblur()
		}
}