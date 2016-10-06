//Katharine LoScalzo
//6 October 2016

//series of ellipses rotated at different angles using transform functions and a for loop

var angle;
var start;
var rotation;


function setup() {

    angle = 60;
    start = 80;
    rotation = 2;

    createCanvas(500, 500);
    background(190, 0, 80);

    for (var i = 0; i < 10; i++) {
        start = start + 70;
        rotation = rotation + 1;

        push();
        translate(start, rotation);
        fill(255);
        rotate(PI / rotation);
        ellipse(50 + (i * angle), 50 + (i * angle), 30, 60);
        pop();
    }

}
