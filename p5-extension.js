var DCM_p5Extension={
storage:{
shapes:[]
},
gradientLine:function(id,x1,y1,x2,y2){
DCM_p5Extension.storage.shapes.push({
id:id,
type:'DCM_GRADIENT_LINE',
cord1:{
x:x1,
y:y1,
z:0,
colors:{
r:255,
g:0,
b:0,
a:255
}
},
cord2:{
x:x2,
y:y2,
z:0,
colors:{
r:255,
g:0,
b:0,
a:255,
}
}
})
},

cube:function(id,x,y,w,h,depth,z){
DCM_p5Extension.storage.shapes.push({id:id,x:x,y:y,w:w,h:h,z:z,depth:depth,rotation:{x:0,y:0,z:0},type:'DCM_CUBE',color:{r:255,g:0,b:0,a:255},stroke:{r:0,g:0,b:0,a:255},note:"Do not modify the shape type! By doing so you may experience unwanted callback errors!",detailX:4,detailY:4})
return "Message From DCM_p5Extension:\n To draw the cube to the canvas use 'redrawShape(shape);'\nshapeType:function name as a string"
},
sphere:function(id,x,y,r,z){
DCM_p5Extension.storage.shapes.push({id:id,x:x,y:y,r:r,z:z,color:{r:255,g:0,b:0,a:255},detailX:4,detailY:4,stroke:{r:0,g:0,b:0,a:255},note:"Do not modify the shape type! By doing so you may experience unwanted callback errors!",type:'DCM_SPHERE'})
return "Message From DCM_p5Extension:\n To draw the cube to the canvas use 'redrawShape(shape);'\nshapeType:function name as a string"
},
createCanvas:function(width,height){
createCanvas(width,height,WEBGL)
},
redrawShape:function(obj){
var c=DCM_p5Extension.storage.shapes
for(var i=0;i<c.length;i++){
if(c[i].id===obj.id){
if(c[i].type==="DCM_GRADIENT_LINE"){
push()
beginShape()
stroke(c[i].cord1.colors.r,c[i].cord1.colors.g,c[i].cord1.colors.b,c[i].cord1.colors.a)
vertex(c[i].cord1.x,c[i].cord1.y,c[i].cord1.z)
stroke(c[i].cord2.colors.r,c[i].cord2.colors.g,c[i].cord2.colors.b,c[i].cord2.colors.a)
vertex(c[i].cord2.x,c[i].cord2.y,c[i].cord2.z)
endShape()
pop()
}
if(c[i].type==='DCM_GRADIENT_SLOPE'){
push()
rotateX(c[i].rotateX)
rotateY(c[i].rotateY)
rotateZ(c[i].rotateZ)
var d=c[i].depth/2
beginShape()
fill(c[i].face.colors.point1.r,c[i].face.colors.point1.g,c[i].face.colors.point1.b,c[i].face.colors.point1.a)
vertex(c[i].x,c[i].y,c[i].z)
fill(c[i].face.colors.point2.r,c[i].face.colors.point2.g,c[i].face.colors.point2.b,c[i].face.colors.point2.a)
vertex(c[i].x+c[i].w/2,c[i].y-c[i].h,c[i].z)
fill(c[i].face.colors.point3.r,c[i].face.colors.point3.g,c[i].face.colors.point3.b,c[i].face.colors.point3.a)
vertex(c[i].x+c[i].w,c[i].y,c[i].z)
endShape()
pop()
}
if(c[i].type==='DCM_SPHERE'){
push()
rotateX(c[i].rotation.x)
rotateY(c[i].rotation.y)
rotateZ(c[i].rotation.z)
fill(c[i].color.r,c[i].color.g,c[i].color.b,c[i].color.a)
stroke(c[i].stroke.r,c[i].stroke.g,c[i].stroke.b,c[i].stroke.a)
sphere(c[i].r,c[i].detailX,c[i].detailY)
pop()
}
if(c[i].type==='DCM_GRADIENT_CUBE'){var face=c[i].face.colors
push()
beginShape()
rotateZ(c[i].rotateZ)
rotateY(c[i].rotateY)
rotateX(c[i].rotateX)
fill(face.row1.color1.r,face.row1.color1.g,face.row1.color1.b,face.row1.color1.a)
vertex(c[i].x,c[i].y,c[i].z)
fill(face.row1.color2.r,face.row2.color2.g,face.row2.color2.b,face.row2.color2.a)
vertex(c[i].x+c[i].w,c[i].y,c[i].z)
fill(face.row2.color2.r,face.row1.color2.g,face.row1.color2.b,face.row1.color2.a)
vertex(c[i].x+c[i].w,c[i].y+c[i].h,c[i].z)
fill(face.row2.color1.r,face.row2.color1.g,face.row2.color1.b,face.row2.color1.a)
vertex(c[i].x,c[i].y+c[i].h,c[i].z)
fill(face.row1.color1.r,face.row1.color1.g,face.row1.color1.b,face.row1.color1.a)
vertex(c[i].x,c[i].y,c[i].z)
endShape()
beginShape()

fill(c[i].left.colors.row1.color1.r,c[i].left.colors.row1.color1.g,c[i].left.colors.row1.color1.b,c[i].left.colors.row1.color1.a)
vertex(c[i].x,c[i].y,c[i].z)
fill(c[i].left.colors.row1.color2.r,c[i].left.colors.row2.color2.g,c[i].left.colors.row2.color2.b,c[i].left.colors.row2.color2.a)
vertex(c[i].x,c[i].y,c[i].z+c[i].depth)
fill(c[i].left.colors.row2.color2.r,c[i].left.colors.row1.color2.g,c[i].left.colors.row1.color2.b,c[i].left.colors.row1.color2.a)
vertex(c[i].x,c[i].y+c[i].h,c[i].z+c[i].depth)
fill(c[i].left.colors.row2.color1.r,c[i].left.colors.row2.color1.g,c[i].left.colors.row2.color1.b,c[i].left.colors.row2.color1.a)
vertex(c[i].x,c[i].y+c[i].h,c[i].z)
fill(c[i].left.colors.row1.color1.r,c[i].left.colors.row1.color1.g,c[i].left.colors.row1.color1.b,c[i].left.colors.row1.color1.a)
vertex(c[i].x,c[i].y,c[i].z)
endShape()
beginShape()
fill(c[i].right.colors.row1.color1.r,c[i].right.colors.row1.color1.g,c[i].right.colors.row1.color1.b,c[i].right.colors.row1.color1.a)
vertex(c[i].x+c[i].w,c[i].y,c[i].z)
fill(c[i].right.colors.row1.color2.r,c[i].right.colors.row2.color2.g,c[i].right.colors.row2.color2.b,c[i].right.colors.row2.color2.a)
vertex(c[i].x+c[i].w,c[i].y,c[i].z+c[i].depth)
fill(c[i].right.colors.row2.color2.r,c[i].right.colors.row1.color2.g,c[i].right.colors.row1.color2.b,c[i].right.colors.row1.color2.a)
vertex(c[i].x+c[i].w,c[i].y+c[i].h,c[i].z+c[i].depth)
fill(c[i].right.colors.row2.color1.r,c[i].right.colors.row2.color1.g,c[i].right.colors.row2.color1.b,c[i].right.colors.row2.color1.a)
vertex(c[i].x+c[i].w,c[i].y+c[i].h,c[i].z)
fill(c[i].right.colors.row1.color1.r,c[i].right.colors.row1.color1.g,c[i].right.colors.row1.color1.b,c[i].right.colors.row1.color1.a)
vertex(c[i].x+c[i].w,c[i].y,c[i].z)
endShape()
beginShape()
fill(c[i].back.colors.row1.color1.r,c[i].back.colors.row1.color1.g,c[i].back.colors.row1.color1.b,c[i].back.colors.row1.color1.a)
vertex(c[i].x,c[i].y,c[i].z+c[i].depth)
fill(c[i].back.colors.row1.color2.r,c[i].back.colors.row2.color2.g,c[i].back.colors.row2.color2.b,c[i].back.colors.row2.color2.a)
vertex(c[i].x+c[i].w,c[i].y,c[i].z+c[i].depth)
fill(c[i].back.colors.row2.color2.r,c[i].back.colors.row1.color2.g,c[i].back.colors.row1.color2.b,c[i].back.colors.row1.color2.a)
vertex(c[i].x+c[i].w,c[i].y+c[i].h,c[i].z+c[i].depth)
fill(c[i].back.colors.row2.color1.r,c[i].back.colors.row2.color1.g,c[i].back.colors.row2.color1.b,c[i].back.colors.row2.color1.a)
vertex(c[i].x,c[i].y+c[i].h,c[i].z+c[i].depth)
fill(c[i].back.colors.row1.color1.r,c[i].back.colors.row1.color1.g,c[i].back.colors.row1.color1.b,c[i].back.colors.row1.color1.a)
vertex(c[i].x,c[i].y,c[i].z+c[i].depth)
endShape()
beginShape()
fill(c[i].top.colors.row1.color1.r,c[i].top.colors.row1.color1.g,c[i].top.colors.row1.color1.b,c[i].top.colors.row1.color1.a)
vertex(c[i].x,c[i].y,c[i].z)
fill(c[i].top.colors.row1.color2.r,c[i].top.colors.row2.color2.g,c[i].top.colors.row2.color2.b,c[i].top.colors.row2.color2.a)
vertex(c[i].x+c[i].w,c[i].y,c[i].z)
fill(c[i].top.colors.row2.color2.r,c[i].top.colors.row1.color2.g,c[i].top.colors.row1.color2.b,c[i].top.colors.row1.color2.a)
vertex(c[i].x+c[i].w,c[i].y,c[i].z+c[i].depth)
fill(c[i].top.colors.row2.color1.r,c[i].top.colors.row2.color1.g,c[i].top.colors.row2.color1.b,c[i].top.colors.row2.color1.a)
vertex(c[i].x,c[i].y,c[i].z+c[i].depth)
fill(c[i].top.colors.row1.color1.r,c[i].top.colors.row1.color1.g,c[i].top.colors.row1.color1.b,c[i].top.colors.row1.color1.a)
vertex(c[i].x,c[i].y,c[i].z)
endShape()
beginShape()
fill(c[i].bottom.colors.row1.color1.r,c[i].bottom.colors.row1.color1.g,c[i].bottom.colors.row1.color1.b,c[i].bottom.colors.row1.color1.a)
vertex(c[i].x,c[i].y+c[i].h,c[i].z)
fill(c[i].bottom.colors.row1.color2.r,c[i].bottom.colors.row2.color2.g,c[i].bottom.colors.row2.color2.b,c[i].bottom.colors.row2.color2.a)
vertex(c[i].x+c[i].w,c[i].y+c[i].h,c[i].z)
fill(c[i].bottom.colors.row2.color2.r,c[i].bottom.colors.row1.color2.g,c[i].bottom.colors.row1.color2.b,c[i].bottom.colors.row1.color2.a)
vertex(c[i].x+c[i].w,c[i].y+c[i].h,c[i].z+c[i].depth)
fill(c[i].bottom.colors.row2.color1.r,c[i].bottom.colors.row2.color1.g,c[i].bottom.colors.row2.color1.b,c[i].bottom.colors.row2.color1.a)
vertex(c[i].x,c[i].y+c[i].h,c[i].z+c[i].depth)
fill(c[i].bottom.colors.row1.color1.r,c[i].bottom.colors.row1.color1.g,c[i].bottom.colors.row1.color1.b,c[i].bottom.colors.row1.color1.a)
vertex(c[i].x,c[i].y+c[i].h,c[i].z)
endShape()
pop()

}//gradient cube
if(c[i].type==='DCM_CUBE'){
fill(c[i].colors.r,c[i].colors.g,c[i].colors.b,c[i].colors.a)
push()
translate(c[i].x,c[i].y,c[i].z)
box(c[i].w,c[i].h,c[i].depth,c[i].detailX,c[i].detailY)
pop()
}//cube
}//if id
}//for i
},//redrawShape
getShapeById:function(id){
for(var i=0;i<DCM_p5Extension.storage.shapes.length;i++){
if(DCM_p5Extension.storage.shapes[i].id===id){
return DCM_p5Extension.storage.shapes[i]
}//if id
}//for i
},//getShapeById
experimental:{
gradientSlope:function(id,x,y,w,h,z,depth){
DCM_p5Extension.storage.shapes.push({
rotateX:0,
id:id,
rotateY:0,
rotateZ:0,
type:'DCM_GRADIENT_SLOPE',
x:x,y:y,w:w,h:h,depth:depth,z:z,
face:{
colors:{
point1:{r:255,g:0,b:0,a:255},
point2:{r:255,g:0,b:0,a:255},
point3:{r:255,g:0,b:0,a:255},
}
},//face
back:{
colors:{
point1:{r:255,g:0,b:0,a:255},
point2:{r:255,g:0,b:0,a:255},
point3:{r:255,g:0,b:0,a:255},
}
},//back
right:{
colors:{
point1:{r:255,g:0,b:0,a:255},
point2:{r:255,g:0,b:0,a:255},
point3:{r:255,g:0,b:0,a:255},
}
},//right
left:{
colors:{
point1:{r:255,g:0,b:0,a:255},
point2:{r:255,g:0,b:0,a:255},
point3:{r:255,g:0,b:0,a:255},
}
},//left
})
},

gradientCube:function(id,x,y,w,h,depth){
if(depth===0){
depth=w
}
DCM_p5Extension.storage.shapes.push( {
type:'DCM_GRADIENT_CUBE',x:x,y:y,w:w,h:h,depth:depth,
rotateX:0,
rotateY:0,
rotateZ:0,
z:0,
face:{
colors:{
row1:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 1
row2:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 2

}//colors
},//face
left:{
colorsTotal:1,
colors:{
row1:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 1
row2:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 2

}//colors
},//left
right:{
colorsTotal:1,
colors:{
row1:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 1
row2:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 2

}//colors
},//right
top:{
colorsTotal:1,
colors:{
row1:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},
},//row 1
row2:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 2

}//colors
},//face
back:{
colorsTotal:1,
colors:{
row1:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 1
row2:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 2

}//colors
},//back
bottom:{
colorsTotal:1,
colors:{
row1:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 1
row2:{
color1:{r:255,g:0,b:0,a:255},
color2:{r:255,g:0,b:0,a:255},

},//row 2

}//colors
},//bottom
id:id
})//return
}
}//experimental
}//p5e