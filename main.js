noseX = 0;
noseY = 0;
diffrence = 0;
leftWristX = 0;
rightWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(250,262.5);

    canvas = createCanvas(550,550);
    canvas.position(800,262);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#5DA0C5');
    fill('#FFB928');
    text("Barry Bee Benson",noseX,noseY);
    textSize(30);
}

function modelLoaded(){
    console.log('Posenet is Loaded!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = "+ noseX+ "Nose Y = "+ noseY);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX+ "rightWristX = "+ rightWristX+ "diffrence = "+ diffrence);
    }
}