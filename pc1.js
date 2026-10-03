var car={
audio:"https://cdn.jsdelivr.net/gh/DaCodeMon/4game@main/pc1.m4a",
    maxRpm:12000,
    idle:500,
        type:'pc1',
        width:100,
        height:50,
        depth:200,
        topSpeed:200,
        gears:[10,10,9,8,7,7,3,1],
        accelScore:0,
        doors:2,
        door1:{
         color:'red',
            length:50,
        },
        door2:{
            color:'red',
            length:50
        },
        hood:{
            color:'red',
            length:20
        },
        trunk:{
            color:'red',
            length:20
        },
        top:{
            length:100,
            x:20,
            y:50
        }
    }
    
    DCM_p5Extension.experimental.gradientCube('car-top',-200,200,50,5,50)
    DCM_p5Extension.getShapeById('car-top').z=3.25 
    var nc_top=DCM_p5Extension.getShapeById('car-top')
var colors_top=nc_top.face.colors 
colors_top.row1.color1={r:0,g:0,b:255}

