function preload(){

}
function setup(){
video= createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose", gotResult);
}
function gotResult(results){
    if (results.length>0){
        console.log(results);
    }
}
function modelLoaded(){
    console.log("posenet is initialised");
}
function draw(){
background("#787777");
}