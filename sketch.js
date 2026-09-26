const r = require("raylib");


function running() {
  return !r.WindowShouldClose();
}

const WIDTH = 900;
const HEIGHT = 500;

let Y = 0;
let X = 0;
let d_width = 50;
let d_hieght = HEIGHT

let check = true


function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Partical Detector")
  r.SetTargetFPS(60)
}

function move_Detector() {
  //step 1
  if (check === true) {
    if (X < WIDTH - d_width) {
      X += 5
    } else check = false
  }
  if (check === false) {
    if (X >= 0) {
      X -= 5
    } else {
      check = true
    }
  }
}

const Blue_x = WIDTH / 2;
const Blue_width = 100;
let color = r.WHITE

function detecting_partical() {
  if (X + d_width >= Blue_x) {
    color = r.RED
    if (X > Blue_x + Blue_width) {
      color = r.WHITE
    }
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

function draw() {

  r.BeginDrawing();
  r.ClearBackground(r.BLACK)
  drawBlue()
  r.DrawRectangle(X, Y, d_width, d_hieght, r.WHITE)

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