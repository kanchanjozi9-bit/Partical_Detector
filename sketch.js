const r = require("raylib");


function running() {
  return !r.WindowShouldClose();
}

const WIDTH = 900;
const HEIGHT = 500;

let Y = 0;
let X = 0;
let d_width = 30;
let d_hieght = HEIGHT

let check = true
const Blue_x = WIDTH / 2;
const Blue_width = 100;
let color = r.WHITE

const Blue_2_x = Blue_x / 2
const Blue_2_width = 40

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Partical Detector")
  r.SetTargetFPS(60)
}

function move_Detector() {
  //step 1
  if (check === true) {
    if (X < WIDTH - d_width) {
      X += 3
    } else check = false
  }
  if (check === false) {
    if (X >= 0) {
      X -= 3
    } else {
      check = true
    }
  }
}



function detecting_partical() {
  //step 3
  if (X + d_width >= Blue_x && X <= Blue_width + Blue_x || X + d_width >= Blue_2_x && X <= Blue_2_width + Blue_2_x) {
    color = r.RED
  } else {
    color = r.WHITE
  }

}


function update() {
  move_Detector()
  detecting_partical()
}


function drawBlue() {
  //step2
  r.DrawRectangle(Blue_x, 0, Blue_width, HEIGHT, r.SKYBLUE)
}

function drawBlue_2() {
  //step4
  r.DrawRectangle(Blue_2_x, 0, Blue_2_width, HEIGHT, r.SKYBLUE)
}

function draw() {

  r.BeginDrawing();
  r.ClearBackground(r.BLACK)
  drawBlue()
  drawBlue_2()
  r.DrawRectangle(X, Y, d_width, d_hieght, color)
  r.DrawRectangle(X, Y, d_width, d_hieght, color)

  r.EndDrawing();


}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};