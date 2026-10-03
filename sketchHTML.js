var sketchHTML={
	storage:{
divs:[],
		rects:[],
		circles:[],
		triangles:[],
		lines:[],
		beziers:[],
text:[],
inputs:[]
	},
	white:[255,255,255],
	blue:[0,0,255],
	yellow:[255,255,0],
	green:[0,255,0],
	black:[0,0,255],
	css:{
		
		body:{
			backgroundColor:[255,255,255]
		}
	},
	body:{
	
	removeShape:function(obj){
	    var id;
	    try{
	        id=obj.id;
	    }catch(err){
	        println(err);
	    }
	    var d=sketchHTML.storage.divs;
	    
	    if(typeof(obj.id)==='undefined'){
	        println('undefined');
	        throw new Error('TYPEOF SHAPE IS UNDEFINED');
	    }
	    for(var i=0;i<d.length;i++){
	        if(d[i][0]===obj){
	            d[i][0]='';
	        }
	    }
	    d=sketchHTML.storage.rects;
	    for(var i=0;i<d.length;i++){
	        if(d[i][0]===obj){
	            d[i][0]='';
	        }
	    }
	     d=sketchHTML.storage.text;
	     println(d[0][0]);
	    for(var i=0;i<d.length;i++){
	        if(d[i][0]===obj){
	            d[i][0]='';
	        }
	    }
	}
	
	},
		getShapesByClass:function(className){
	    this.array=[];
	    var d=sketchHTML.storage.divs;
	    for(var i=0;i<d.length;i++){
	        if(d[i][0].class===className){
	            this.array.push(d[i][0]);
	        }
	    }
	    d=sketchHTML.storage.rects;
	    for(var i=0;i<d.length;i++){
	        if(d[i][0].class===className){
	            this.array.push(d[i][0]);
	        }
	    }
	    d=sketchHTML.storage.text;
	    for(var i=0;i<d.length;i++){
	        if(d[i][0].class===className){
	            this.array.push(d[i][0]);
	        }
	    }
	return this.array;
	},
	establish:function(obj){
	    if(obj.type==="input"){
	        debug(obj);
	        sketchHTML.storage.inputs.push([obj]);
	    }
		if(obj.type==="button"){
			sketchHTML.storage.rects.push([obj]);
		}
if(obj.type==="text"){
sketchHTML.storage.text.push([obj]);
}
		if(obj.type==="div"){
sketchHTML.storage.divs.push([obj]);
}
	},
	
	create:{
	    input:function(text){
	    var inpt=sketchHTML.storage.inputs;
	    return {text:text,id:'',onclick:function(){},onover:function(){cursor('pointer');},style:{color:[0,0,0],textSize:20,backgroundColor:[0,0,0],top:0,left:0,width:40,height:40,display:'block',cursor:'default'},placeholder:'type:input',type:'input',onmousedown:function(){},onmouseup:function(){},onkeydown:function(){},onkeyup:function(){},onmousepress:function(){},onkeypress:function(){},onmousleave:function(){}};
	    },
text:function(text){
var txt=sketchHTML.storage.text;
return {text:text,id:'',onclick:function(){},onover:function(){cursor('pointer');},style:{color:[0,0,0],textSize:20,backgroundColor:[0,0,0,0],top:0,left:0,width:40,height:30,display:'block',cursor:'default'},type:"text",class:'',elements:[],onmousedown:function(){},onmouseup:function(){},onkeydown:function(){},onkeyup:function(){},onmousepress:function(){},onkeypress:function(){},onmousleave:function(){},default:{onover:function(){}}};
},
		button:function(text){
			var r=sketchHTML.storage.rects;
			return {text:text,id:'',onclick:function(){},onover:function(){cursor('pointer');},style:{color:sketchHTML.black,backgroundColor:sketchHTML.white,left:0,top:0,width:10,height:5,display:'block',radius:0,textSize:20,textOffsetX:0,textOffsetY:0,cursor:'default'},type:"button",class:'',elements:[],onmousedown:function(){},onmouseup:function(){},onkeydown:function(){},onkeyup:function(){},onmousepress:function(){},onkeypress:function(){},onmouseleave:function(){}};
		},
div:function(text){
return {text:text,onclick:function(){},onover:function(){cursor('pointer');},style:{backgroundColor:[255,255,255],width:0,height:0,top:0,left:0,color:sketchHTML.black,display:'block',radius:0,textSize:20,textOffsetX:0,textOffsetY:0,cursor:'default'},type:"div",class:'',elements:[],onmousedown:function(){},onmouseup:function(){},onkeydown:function(){},onkeyup:function(){},onmousepress:function(){},onkeypress:function(){},onmouseleave:function(){}};
}

	},

	sketch:function(){
	    
var d=sketchHTML.storage.divs;
for(var i=0;i<d.length;i++){
if(typeof(d[i][0].style.backgroundColor[3])==="undefined"){
fill(d[i][0].style.backgroundColor[0],d[i][0].style.backgroundColor[1],d[i][0].style.backgroundColor[2]);
}else{
fill(d[i][0].style.backgroundColor[0],d[i][0].style.backgroundColor[1],d[i][0].style.backgroundColor[2],d[i][0].style.backgroundColor[3]);
}
if(d[i][0].style.display==="block"){
rect(d[i][0].style.left,d[i][0].style.top,d[i][0].style.width,d[i][0].style.height,d[i][0].style.radius);
}
if(typeof(d[i][0].style.color[3])==="undefined"){
fill(d[i][0].style.color[0],d[i][0].style.color[1],d[i][0].style.color[2]);
}else{
fill(d[i][0].style.color[0],d[i][0].style.color[1],d[i][0].style.color[2],d[i][0].style.color[3]);
}
if(d[i][0].style.display==="block"){
    textSize(d[i][0].style.textSize);
text(d[i][0].text,d[i][0].style.left,d[i][0].style.top,d[i][0].style.width,d[i][0].style.height);
}
}
		for(var i=0;i<sketchHTML.storage.rects.length;i++){
			var r=sketchHTML.storage.rects;	
if(typeof(r[i][0].style.backgroundColor[3])==="undefined"){		
			fill(r[i][0].style.backgroundColor[0],r[i][0].style.backgroundColor[1],r[i][0].style.backgroundColor[2]);
}else{
fill(r[i][0].style.backgroundColor[0],r[i][0].style.backgroundColor[1],r[i][0].style.backgroundColor[2],r[i][0].style.backgroundColor[3]);
}	
if(r[i][0].style.display==="block"){		
rect(r[i][0].style.left,r[i][0].style.top,r[i][0].style.width,r[i][0].style.height,r[i][0].style.radius);
}
if(typeof(r[i][0].style.color[3])==="undefined"){
			fill(r[i][0].style.color[0],r[i][0].style.color[1],r[i][0].style.color[2]);
}else{
fill(r[i][0].style.color[0],r[i][0].style.color[1],r[i][0].style.color[2],r[i][0].style.color[3]);
}
if(r[i][0].style.display==="block"){	
    textSize(r[i][0].style.textSize);
    
text(r[i][0].text,r[i][0].style.left+r[i][0].style.textOffsetX,r[i][0].style.top+r[i][0].style.textOffsetY,r[i][0].style.width,r[i][0].style.height);
			}
		}
		for(var i=0;i<sketchHTML.storage.inputs.length;i++){
		    var inp=sketchHTML.storage.inputs;var bkg=inp[i][0].style.backgroundColor;var clr=inp[i][0].style.color;
		    if(typeof(inp[i][0].style.backgroundColor[3])==='undefined'){
		        
		        fill(bkg[0],bkg[1],bkg[2]);
		    }else{
		        fill(bkg[0],bkg[1],bkg[2],bkg[3]);
		    }
		    rect(inp[i][0].style.left,inp[i][0].style.top,inp[i][0].style.width,inp[i][0].style.height);
		    if(typeof(inp[i][0].style.color[3])==='undefined'){
		     fill(clr[0],clr[1],clr[2]);
		    }else{
		        fill(clr[0],clr[1],clr[2],clr[3]);
		    }
		    if(inp[i][0].text!==""){
		    text(inp[i][0].text,inp[i][0].style.left,inp[i][0].style.top,inp[i][0].style.width,inp[i][0].style.height);
		    }else{
		        fill(100);
		        text(inp[i][0].placeholder,inp[i][0].style.left,inp[i][0].style.top);
		    }
		}
for(var i=0;i<sketchHTML.storage.text.length;i++){
var t=sketchHTML.storage.text;
if(typeof(t[i][0].style.color[0],t[i][3])==="undefined"){
fill(t[i][0].style.color[0],t[i][0].style.color[1],t[i][0].style.color[2]);
}else{
fill(t[i][0].style.color[0],t[i][0].style.color[1],t[i][0].style.color[2],t[i][0].style.color[3]);
}
if(t[i][0].style.display==="block"){
textSize(t[i][0].style.textSize);
text(t[i][0].text,t[i][0].style.left,t[i][0].style.top,t[i][0].style.width,t[i][0].style.height);
}
if(typeof(t[i][0].style.backgroundColor[3])==="undefined"){
fill(t[i][0].style.backgroundColor[0],t[i][0].style.backgroundColor[1],t[i][0].style.backgroundColor[2]);
}else{
fill(t[i][0].style.backgroundColor[0],t[i][0].style.backgroundColor[1],t[i][0].style.backgroundColor[2],t[i][0].style.backgroundColor[3]);
}
}
	},
getShapeById:function(id){
var t=sketchHTML.storage.divs;
for(var i=0;i<t.length;i++){
if(t[i][0].id===id){
return t[i][0];
}
}
var t=sketchHTML.storage.text;
for(var i=0;i<t.length;i++){
if(t[i][0].id===id){
return t[i][0];
}
}
var r=sketchHTML.storage.rects;
for(var i=0;i<r.length;i++){
if(r[i][0].id===id){
return r[i][0];
}
}
var c=sketchHTML.storage.circles;
for(var i=0;i<c.length;i++){
if(r[i][0].id===id){
return r[i][0];
}
}
}

};
//all event functions below are required for the event object functions not all js events are supported but the basics are covered
var e={offsetX:0,offsetY:0};
var mouseClicked=function(event){
e.offsetX=mouseX;
e.offsetY=mouseY;
var r=sketchHTML.storage.rects;
for(var i=0;i<r.length;i++){
if(e.offsetX>=r[i][0].style.left && e.offsetY>=r[i][0].style.top && e.offsetX<=r[i][0].style.left+r[i][0].style.width &&e.offsetY<=r[i][0].style.top+r[i][0].style.height){
try{
    if(r[i][0].style.display==='block'){
    r[i][0].onclick({target:r[i][0],event:event});
    }
}catch(err){}
}
}
var t=sketchHTML.storage.text;
for(var i=0;i<t.length;i++){
if(e.offsetX>=t[i][0].style.left && e.offsetY>=t[i][0].style.top && e.offsetX<=t[i][0].style.left+t[i][0].style.width &&e.offsetY<=t[i][0].style.top+t[i][0].style.height){
try{
    if(t[i][0].style.display==='block'){
    t[i][0].onclick({target:t[i][0],event:event});
    }
}catch(err){}
}
}
var d=sketchHTML.storage.divs;
for(var i=0;i<d.length;i++){
if(e.offsetX>=d[i][0].style.left && e.offsetY>=d[i][0].style.top && mouseX<=d[i][0].style.left+d[i][0].style.width && mouseY<=d[i][0].style.top+d[i][0].style.height){
try{
    if(d[i][0].style.display==='block'){
    d[i][0].onclick({target:d[i][0],event:event});
    }
}catch(err){}
}
}
};//mouseClicked is required to perform the click function

function mouseMoved(event){
    cursor('default');
var d=sketchHTML.storage.divs;
for(var i=0;i<d.length;i++){

try{
    if(d[i][0].style.display==='block'){
        cursor(d[i][0].style.cursor);
    d[i][0].onover({target:d[i][0],event:event});
    }
}catch(err){}

}
var d=sketchHTML.storage.rects;
var prevMouseY,prevMouseX;
prevMouseX=pmouseX;
prevMouseY=pmouseY;
//println(prevMouseX);
for(var i=0;i<d.length;i++){
    if(mouseY>d[i][0].style.top-1 && mouseY<d[i][0].style.top+1 && mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width){
        if(prevMouseX<d[i][0].style.left+2||prevMouseX>d[i][0].style.left+d[i][0].style.width+5||prevMouseY>d[i][0].style.top+5||prevMouseY<d[i][0].style.top+d[i][0].style.height+5){
        d[i][0].onmouseleave({target:d[i][0],event:event});
        }
    }
if(mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width && mouseY>d[i][0].style.top && mouseY<d[i][0].style.top+d[i][0].style.height){
try{ cursor(d[i][0].style.cursor);
    if(d[i][0].style.display==='block'){
    d[i][0].onover({target:d[i][0],event:event});
    }
}catch(err){}
}
}
var d=sketchHTML.storage.text;
for(var i=0;i<d.length;i++){
if(mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width && mouseY>d[i][0].style.top && mouseY<d[i][0].style.top+d[i][0].style.height){
try{ cursor(d[i][0].style.cursor);
    if(d[i][0].style.display==='block'){
    d[i][0].onover({target:d[i][0],event:event});
    }
}catch(err){}
}
}
}//mouseMoved is required to perform the onover functions
function mousePressed(event){
    
    var d=sketchHTML.storage.divs;
for(var i=0;i<d.length;i++){
if(mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width && mouseY>d[i][0].style.top && mouseY<d[i][0].style.top+d[i][0].style.height){
try{
    if(d[i][0].style.display==='block'){
    d[i][0].onmousedown({target:d[i][0],event:event});
    }
}catch(err){}
}
}
var d=sketchHTML.storage.rects;
for(var i=0;i<d.length;i++){
if(mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width && mouseY>d[i][0].style.top && mouseY<d[i][0].style.top+d[i][0].style.height){
try{
    if(d[i][0].style.display==='block'){
    d[i][0].onmousedown({target:d[i][0],event:event});
    }
}catch(err){}
}
}
var d=sketchHTML.storage.text;
for(var i=0;i<d.length;i++){
if(mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width && mouseY>d[i][0].style.top && mouseY<d[i][0].style.top+d[i][0].style.height){
try{
    if(d[i][0].style.display==='block'){
    d[i][0].onmousedown({target:d[i][0],event:event});
    }
}catch(err){}
}
}
}//mousePressed is required to perform the onmousedown event function
function mouseReleased(event){
    var d=sketchHTML.storage.divs;
for(var i=0;i<d.length;i++){
if(mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width && mouseY>d[i][0].style.top && mouseY<d[i][0].style.top+d[i][0].style.height){
try{
    if(d[i][0].style.display==='block'){
    d[i][0].onmouseup({target:d[i][0],event:event});
    }
}catch(err){}
}
}
var d=sketchHTML.storage.rects;
for(var i=0;i<d.length;i++){
if(mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width && mouseY>d[i][0].style.top && mouseY<d[i][0].style.top+d[i][0].style.height){
try{
    if(d[i][0].style.display==='block'){
    d[i][0].onmouseup({target:d[i][0],event:event});
    }
}catch(err){}
}
}
var d=sketchHTML.storage.text;
for(var i=0;i<d.length;i++){
if(mouseX>d[i][0].style.left && mouseX<d[i][0].style.left+d[i][0].style.width && mouseY>d[i][0].style.top && mouseY<d[i][0].style.top+d[i][0].style.height){
try{
    if(d[i][0].style.display==='block'){
    d[i][0].onmouseup({target:d[i][0],event:event});
    }
}catch(err){}
}
}
}
function keyReleased(){
    var d=sketchHTML.storage.divs;
    for(var i=0;i<d.length;i++){
        if(d[i][0].style.left>=mouseX && mouseX<=d[i][0].style.left+d[i][0].style.width && d[i][0].style.top<mouseY && mouseY<d[i][0].style.top+d[i][0].style.height){
            d[i][0].onkeyup({target:d[i][0],keyCode:keyCode,key:key.toString()});
        }
    }
    var d=sketchHTML.storage.rects;
    for(var i=0;i<d.length;i++){
        if(d[i][0].style.left<=mouseX && mouseX<=d[i][0].style.left+d[i][0].style.width && d[i][0].style.top<mouseY && mouseY<d[i][0].style.top+d[i][0].style.height){
            d[i][0].onkeyup({target:d[i][0],keyCode:keyCode,key:key.toString()});
        }
    }
    var d=sketchHTML.storage.text;
    for(var i=0;i<d.length;i++){
        if(d[i][0].style.left<=mouseX && mouseX<=d[i][0].style.left+d[i][0].style.width && d[i][0].style.top<mouseY && mouseY<d[i][0].style.top+d[i][0].style.height){
            d[i][0].onkeyup({target:d[i][0],keyCode:keyCode,key:key.toString()});
        }
    }
}
function keyTyped(){
    var d=sketchHTML.storage.inputs;
    for(var i=0;i<d.length;i++){
        if(d[i][0].style.left>=mouseX && mouseX<=d[i][0].style.left+d[i][0].style.width && d[i][0].style.top>mouseY && mouseY<d[i][0].style.top+d[i][0].style.height){
            d[i][0].onkeydown({target:d[i][0],keyCode:keyCode,key:key.toString()});
            d[i][0].text=d[i][0].text+key.toString();
            
                d[i][0].text.length=d[i][0].text.length-3;
            
            debug(keyCode);
        }
    }
    var d=sketchHTML.storage.divs;
    for(var i=0;i<d.length;i++){
        if(d[i][0].style.left<=mouseX && mouseX<=d[i][0].style.left+d[i][0].style.width && d[i][0].style.top>mouseY && mouseY<d[i][0].style.top+d[i][0].style.height){
            d[i][0].onkeydown({target:d[i][0],keyCode:keyCode,key:key.toString()});
        }
    }
    var d=sketchHTML.storage.rects;
    for(var i=0;i<d.length;i++){
        if(d[i][0].style.left>=mouseX && mouseX<=d[i][0].style.left+d[i][0].style.width && d[i][0].style.top>mouseY && mouseY<d[i][0].style.top+d[i][0].style.height){
            d[i][0].onkeydown({target:d[i][0],keyCode:keyCode,key:key.toString()});
        }
    }
    var d=sketchHTML.storage.text;
    for(var i=0;i<d.length;i++){
        if(d[i][0].style.left>=mouseX && mouseX<=d[i][0].style.left+d[i][0].style.width && d[i][0].style.top>mouseY && mouseY<d[i][0].style.top+d[i][0].style.height){
            d[i][0].onkeydown({target:d[i][0],keyCode:keyCode,key:key.toString()});
        }
    }
}
//you may delete the following code to write your own
