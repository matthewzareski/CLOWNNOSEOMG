nosex = 0;
nosey = 0;

function preload() {
nose = loadImage('https://i.postimg.cc/6q4GMyc9/clown-nose-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function draw(){
image(video, 0,0,300,300);
image(nose,nosex,nosey,30,30)
}

function take_snapshot(){
    save('UwU.png')
}

function modelLoaded(){
    console.log("model was initialised lol");
}

function gotposes(result){
if(result.length > 0){
console.log(result);
nosex = result[0].pose.nose.x -15;
nosey = result[0].pose.nose.y -15;
console.log('nose x='+result[0].pose.nose.x);
console.log('nose y='+result[0].pose.nose.y);
}
}