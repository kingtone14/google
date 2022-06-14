function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    
    
    rect(600, 20, 30, 450);
     rect(30, 15, 600, 30);
     rect(30, 425, 600, 30);
     rect(30, 20, 30, 450);
     circle(30, 30, 60);
    circle(610, 30, 60);
    
    circle(610, 450, 60);
    
    circle(30, 450, 60);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
  tint_color = document.getElementById("color_name").value;
}