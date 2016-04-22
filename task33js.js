// JavaScript Document
var Arb={
	"direction":1,//1上，2右，3下，4左
	"x":5,
	"y":5
}
function run(text){
switch(Arb.direction)
	{
	case 1:
	if(text=="turn left")
	{document.getElementById('turn_up').id='turn_left';
	Arb.direction=4;
	break;
	}
	else if(text=="turn right")
	{document.getElementById('turn_up').id='turn_right';
	Arb.direction=2;
	break;
	}
	else if(text=="turn back")
	{
	document.getElementById('turn_up').id='turn_down';
	Arb.direction=3;
	break;
	}
	else if(text=="go")
	{
	  if(Arb.y>1){
	var top=document.getElementById('red').style.top.replace('px','')-25;
	document.getElementById('red').style.top=top+'px';
	Arb.y--;
	break;}
	 else{alert("哎哟妈呀好痛啊！！！");}
	}
	else
	{
	alert("你到底想要干嘛啦~");
	break;
	}
	break;
	
	case 2:
	if(text=="turn left")
	{document.getElementById('turn_right').id='turn_up';
	Arb.direction=1;
	break;
	}
	else if(text=="turn right")
	{document.getElementById('turn_right').id='turn_down';
	Arb.direction=3;
	break;
	}
	else if(text=="turn back")
	{
	document.getElementById('turn_right').id='turn_left';
	Arb.direction=4;
	break;
	}
	else if(text=="go")
	{
		if(Arb.x<10){
	var left=document.getElementById('red').style.left.replace('px','')-(-25);
	document.getElementById('red').style.left=left+'px';
	Arb.x++;
	break;}
	   else{alert("哎哟妈呀好痛啊！！！");}
	}
	else
	{
	alert("你到底想要干嘛啦~");
	break;
	}
	break;
	
	
	
	case 3:
	if(text=="turn left")
	{document.getElementById('turn_down').id='turn_right';
	Arb.direction=2;
	break;
	}
	else if(text=="turn right")
	{document.getElementById('turn_down').id='turn_left';
	Arb.direction=4;
	break;
	}
	else if(text=="turn back")
	{
	document.getElementById('turn_down').id='turn_up';
	Arb.direction=1;
	break;
	}
	else if(text=="go")
	{ 
	  if(Arb.y<10){
	var top=document.getElementById('red').style.top.replace('px','')-(-25);
	document.getElementById('red').style.top=top+'px';
	Arb.y++;
	break; 
	}
	   else{alert("哎哟妈呀好痛啊！！！");}
	}
	else
	{
	alert("你到底想要干嘛啦~");
	break;
	}
	break;
	
	
	
	case 4:
	if(text=="turn left")
	{document.getElementById('turn_left').id='turn_down';
	Arb.direction=3;
	break;
	}
	else if(text=="turn right")
	{document.getElementById('turn_left').id='turn_up';
	Arb.direction=1;
	break;
	}
	else if(text=="turn back")
	{
	document.getElementById('turn_left').id='turn_right';
	Arb.direction=2;
	break;
	}
	else if(text=="go")
	{
		if(Arb.x>1){
	var left=document.getElementById('red').style.left.replace('px','')-25;
	document.getElementById('red').style.left=left+'px';
	Arb.x--;
	break;}
	  else{alert("哎哟妈呀好痛啊！！！");}
	}
	else
	{
	alert("你到底想要干嘛啦~");
	break;
	}
	break;
	
	
	}
}
window.onload=function(){
	document.getElementById('button').onclick=function(){
    var text=document.getElementsByTagName('input')[0].value;
	run(text);	
    }
	document.getElementById('buttonGo').onclick=function(){
    var text="go";
	run(text);	
    }
	document.getElementById('buttonLeft').onclick=function(){
    var text="turn left";
	run(text);	
    }
	document.getElementById('buttonRight').onclick=function(){
    var text="turn right";
	run(text);	
    }
	document.getElementById('buttonBack').onclick=function(){
    var text="turn back";
	run(text);	
    }
	
	
}
