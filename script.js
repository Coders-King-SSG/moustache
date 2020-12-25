var beard_x;
var beard_y;

function preload() {
    flw_img = loadImage('https://media-public.canva.com/MAANdS10lGQ/1/thumbnail.png');
}

function setup() {
    var canvas = createCanvas(640, 400);
    canvas.position(380, 150);
    video = createCapture(VIDEO);
    video.size(640, 400);
    video.hide();
    var posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function saveimg() {
    var vl = prompt('What file name do you want to save in?');
    if (vl!=null) {
        save(vl+'.png');
    }
}

function draw() {
    image(video, 0, 0, 640, 400);
    image(flw_img, beard_x, beard_y, 75, 25);
}

function gotPoses(results) {
    console.log(results);
    if (results.length > 0) {
        console.log(results);
        beard_x = results[0].pose.nose.x - 35;
        beard_y = results[0].pose.nose.y +10;
    }
}

function modelLoaded() {
    console.log('PoseNet Loaded!')
}

