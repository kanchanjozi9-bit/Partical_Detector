const r = require("raylib");
const space = require("./space")

function running() {
  return !r.WindowShouldClose();
}

const WIDTH = 900;
const HEIGHT = 500;

let Y = 0;
let X = 0;

const start_1_scn = 0
const start_2_scn = WIDTH / 2

const Range1 = WIDTH / 2
const Range2 = WIDTH

let X2 = Range1
let check2 = true
let check = true

const d_width = 30;
const d_hieght = HEIGHT


const Blue_x = WIDTH / 2;
const Blue_width = 100;

let color = r.WHITE
let color2 = r.WHITE

const Blue_2_x = Blue_x / 2
const Blue_2_width = 40

let XV = 0
let YV = 0

let height = 30
const width = WIDTH

let color3 = r.WHITE
let check3 = true

let Range3 = HEIGHT
const part_height = 30
const partY = HEIGHT / 2

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Partical Detector")
  r.SetTargetFPS(60)
}

function update() {

  X = space.move_Detector(X, Range1, d_width, check, start_1_scn)
  check = space.check()
  color = space.detecting_partical(X, d_width, Blue_2_x, Blue_2_width, color)

  X2 = space.move_Detector(X2, Range2, d_width, check2, start_2_scn)
  check2 = space.check()
  color2 = space.detecting_partical(X2, d_width, Blue_x, Blue_width, color2)

  YV = space.move_Detector(YV, Range3, height, check3, XV)
  check3 = space.check()
  color3 = space.detecting_partical(YV, height, partY, part_height, color3)

}


function drawBlue() {
  //step2
  r.DrawRectangle(Blue_x, 0, Blue_width, HEIGHT, r.SKYBLUE)
}

function drawBlue_2() {
  //step4
  r.DrawRectangle(Blue_2_x, 0, Blue_2_width, HEIGHT, r.SKYBLUE)
}

function drawV_part() {
  r.DrawRectangle(0, partY, width, part_height, r.SKYBLUE)
}

function draw() {

  r.BeginDrawing();
  r.ClearBackground(r.BLACK)

  drawBlue()
  drawBlue_2()
  drawV_part()
  r.DrawRectangle(X, Y, d_width, d_hieght, color)
  r.DrawRectangle(X2, Y, d_width, d_hieght, color2)

  r.DrawRectangle(XV, YV, width, height, color3)

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