const r = require("raylib");


function running() {
  return !r.WindowShouldClose();
}

const WIDTH = 900;
const HEIGHT = 500;

let Y = 0;
let X = 0;
let d_width = 100;
let d_hieght = HEIGHT

let check = true

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Partical Detector")
  r.SetTargetFPS(60)
}
function move_Detector() {
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


function update() {
  move_Detector()
}


function draw() {

  r.BeginDrawing();
  r.ClearBackground(r.BLACK)

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