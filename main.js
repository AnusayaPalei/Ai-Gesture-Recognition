function setup(){
  canvas= createCanvas(500,500);
  canvas.position(800,170);

  video = createCapture(VIDEO);
  video.position(200,140);
  video.size(500,500);

  poseNet=ml5.poseNet(video, modelloaded);
  poseNet.on('pose',gotposes);
}

function draw(){
  background("#682031");
  fill("red");
  stroke("black");
  square(noseX,noseY,difference);
  document.getElementById("square_side").innerHTML="Width and Height of The Square is= " +difference;
}

function modelloaded(){
  console.log("PoseNet is intialized");
}

noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function gotposes(results){
  if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + noseX);
    console.log("noseY= " + noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    console.log("leftWristX= " + leftWristX);
    console.log("rightWristX= " + rightWristX);
    difference=floor(leftWristX - rightWristX);
  }
}