class Tocka{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}



var draw = function(){
    console.log('This is working.');

    var c = document.getElementById("drawing-board");
    var ctx = c.getContext("3d");

    ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(380,320);
    ctx.lineTo(410, 350);
    ctx.closePath();
    ctx.stroke();
    console.log('Narisal trikotnik');
}; 