canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_y=10;
rover_x=10;
bg_image="vallet.jpeg";
rover_image="control-car.jpeg";
function add(){
    bg_imgTag=new Image();
    bg_imgTag.onload=uploadbg;
    bg_imgTag.src=bg_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadbg(){
    ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("the rover x and y positions are x= "+rover_x+"y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("the rover x and y positions are x= "+rover_x+"y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("the rover x and y positions are x= "+rover_x+"y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("the rover x and y positions are x= "+rover_x+"y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}