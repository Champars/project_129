bones = "";
natural = "";
rx = 0;
lx = 0;
ry = 0;
ly = 0;
lscore = 0;
rscore = 0;

function preload() {
    bones = loadSound("Bones(PaglaSongs).mp3");
    natural = loadSound("Imagine-Dragons-Natural-Official-Music-Video.mp3");
}

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log("pio");
}

function draw() {
    image(video, 0, 0, 450, 350);
    fil("orange")
    stroke("orange")
    if (rscore > 0.2) {
        circle(rx, ry, 20);
        bones.stop();
        naturall;
        document.getElementById("c").innerHTML = "Natural";
    }
    if (lscore > 0.2) {
        circle(lx, ly, 20);
        natural.stop();
        boness;
        document.getElementById("c").innerHTML = "Bones";

    }
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        rx = results[0].pose.rightWrist.x;
        ry = results[0].pose.rightWrist.y;
        lx = results[0].pose.leftWrist.x;
        ly = results[0].pose.leftWrist.y;
        lscore = results[0].pose.keypoints[9].score;
        rscore = results[0].pose.keypoints[10].score;
    }
}

function naturall() {
    natural.play();
    natural.volume(1);
    natural.rate(1);
}

function boness() {
    bones.play();
    bones.volume(1);
    bones.rate(1);
}