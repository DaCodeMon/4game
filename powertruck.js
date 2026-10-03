var car={
    audio:'https://cdn.jsdelivr.net/gh/DaCodeMon/4game@carScripts/powertruck.m4a',
    maxRpm:17500,
    type:'powertruck',
    width:100,
    idle:3000,
    height:50,
    depth:200,
    topSpeed:200,
    gears:[100,13,12,12,12,12,13,13,12,11],
    accelScore:1,
    doors:2,
    door1:{
        color1:{r:50,g:50,b:50,a:255},
        color2:{r:50,g:50,b:50,a:255},
        color3:{r:50,g:50,b:50,a:255},
        color4:{r:50,g:50,b:50,a:255},

        length:50,
    },
    door2:{
        color1:{r:50,g:50,b:50,a:255},
        color2:{r:50,g:50,b:50,a:255},
        color3:{r:50,g:50,b:50,a:255},
        color4:{r:50,g:50,b:50,a:255},
        length:50
    },
    hood:{
       color1:{r:50,g:50,b:50,a:255},
        color2:{r:50,g:50,b:50,a:255},
        color3:{r:50,g:50,b:50,a:255},
        color4:{r:50,g:50,b:50,a:255},
        length:20
    },
    trunk:{
        color1:{r:50,g:50,b:50,a:255},
        color2:{r:50,g:50,b:50,a:255},
        color3:{r:50,g:50,b:50,a:255},
        color4:{r:50,g:50,b:50,a:255},
        length:20
    },
    top:{
        length:150,
        x:20,
        y:50,
         color1:{r:0,g:0,b:0,a:255},
        color2:{r:0,g:0,b:0,a:255},
        color3:{r:0,g:0,b:0,a:255},
        color4:{r:0,g:0,b:0,a:255},
    }
}
setTimeout(function(){
DCM_p5Extension.getShapeById('player1').h=20 
DCM_p5Extension.getShapeById('player1').depth=20 
DCM_p5Extension.getShapeById('player1').face.colors.row1.color1=car.hood.color1
DCM_p5Extension.getShapeById('player1').left.colors.row1.color1=car.door1.color1
DCM_p5Extension.getShapeById('player1').right.colors.row1.color1=car.door2.color1
DCM_p5Extension.getShapeById('player1').back.colors.row1.color1=car.trunk.color1
DCM_p5Extension.getShapeById('player1').top.colors.row1.color1=car.top.color1

DCM_p5Extension.getShapeById('player1').face.colors.row1.color2=car.hood.color2
DCM_p5Extension.getShapeById('player1').left.colors.row1.color2=car.door1.color2
DCM_p5Extension.getShapeById('player1').right.colors.row1.color2=car.door2.color2 
DCM_p5Extension.getShapeById('player1').back.colors.row1.color2=car.trunk.color2
DCM_p5Extension.getShapeById('player1').top.colors.row1.color2=car.top.color2

DCM_p5Extension.getShapeById('player1').face.colors.row2.color1=car.hood.color3
DCM_p5Extension.getShapeById('player1').left.colors.row2.color1=car.door1.color3
DCM_p5Extension.getShapeById('player1').right.colors.row2.color1=car.door2.color3 
DCM_p5Extension.getShapeById('player1').back.colors.row2.color1=car.trunk.color3
DCM_p5Extension.getShapeById('player1').top.colors.row2.color1=car.top.color3

DCM_p5Extension.getShapeById('player1').face.colors.row2.color2=car.hood.color4 
DCM_p5Extension.getShapeById('player1').left.colors.row2.color2=car.door1.color4
DCM_p5Extension.getShapeById('player1').right.colors.row2.color2=car.door2.color4
DCM_p5Extension.getShapeById('player1').back.colors.row2.color2=car.trunk.color4
DCM_p5Extension.getShapeById('player1').top.colors.row2.color2=car.top.color4

DCM_p5Extension.getShapeById('p1-top').z=DCM_p5Extension.getShapeById('player1').z
DCM_p5Extension.getShapeById('p1-top').h=10
DCM_p5Extension.getShapeById('p1-top').w=100
DCM_p5Extension.getShapeById('p1-top').left.colors.row2.color2=car.door1.color4
DCM_p5Extension.getShapeById('p1-top').right.colors.row2.color2=car.door2.color4
DCM_p5Extension.getShapeById('p1-top').back.colors.row2.color2=car.trunk.color4
DCM_p5Extension.getShapeById('p1-top').top.colors.row2.color2=car.top.color1
DCM_p5Extension.getShapeById('p1-top').top.colors.row1.color1=car.top.color2
DCM_p5Extension.getShapeById('p1-top').top.colors.row1.color2=car.top.color3
DCM_p5Extension.getShapeById('p1-top').top.colors.row2.color1=car.top.color4


DCM_p5Extension.getShapeById('p1-left').z=DCM_p5Extension.getShapeById('player1').z
DCM_p5Extension.getShapeById('p1-left').h=10
DCM_p5Extension.getShapeById('p1-left').w=100
DCM_p5Extension.getShapeById('p1-left').left.colors.row2.color2=car.door1.color4
DCM_p5Extension.getShapeById('p1-left').right.colors.row2.color2=car.door2.color4
DCM_p5Extension.getShapeById('p1-left').back.colors.row2.color2=car.trunk.color4
DCM_p5Extension.getShapeById('p1-left').face.colors.row2.color2=car.top.color1
DCM_p5Extension.getShapeById('p1-left').face.colors.row1.color1=car.top.color2
DCM_p5Extension.getShapeById('p1-left').face.colors.row1.color2=car.top.color3
DCM_p5Extension.getShapeById('p1-left').face.colors.row2.color1=car.top.color4
//setInterval(function(){DCM_p5Extension.redrawShape(DCM_p5Extension.getShapeById('allstruck-top'))})

},100)

setInterval(function(){
    if(player1.rpm>5000 && player1.gas){
        player1.turbo=true
    }else{
        player1.turbo=false
    }
orbitControl()
})
