const r = require("raylib");
const space = require("./space")

function running() {
  return !r.WindowShouldClose();
}

const window_WIDTH = 900;
const window_HEIGHT = 500;

//Scanners ----------->>
const scan_width = 30;
const scan_height = window_HEIGHT

let scan_1_y = 0;
let scan_1_X = 0;
const scan_1_start = 0
const scan_1_end = window_WIDTH / 2
let check = true
let scan_1_color = r.WHITE

const scan_2_start = window_WIDTH / 2
let scan_2_X = scan_2_start
const scan_2_end = window_WIDTH
let check2 = true
let scan_2_color = r.WHITE

let scan_3_X = 0
let scan_3_Y = 0
let scan_3_height = 30
const scan_3_width = window_WIDTH
let scan_3_color = r.WHITE
let check3 = true
let scan_3_end = window_HEIGHT

//Particals----------------------->>
const pt_2_X = window_WIDTH / 2;
const pt_2_width = 100;

const pt_1_x = pt_2_X / 2
const pt_1_width = 40

const pt_3_height = 30
const pt_3_Y = window_HEIGHT / 2

function setup() {
  r.InitWindow(window_WIDTH, window_HEIGHT, "Partical Detector")
  r.SetTargetFPS(60)
}

function update() {

  scan_1_X = space.move_Detector(scan_1_X, scan_1_end, scan_width, check, scan_1_start)
  check = space.check()
  scan_1_color = space.detecting_partical(scan_1_X, scan_width, pt_1_x, pt_1_width, scan_1_color)

  scan_2_X = space.move_Detector(scan_2_X, scan_2_end, scan_width, check2, scan_2_start)
  check2 = space.check()
  scan_2_color = space.detecting_partical(scan_2_X, scan_width, pt_2_X, pt_2_width, scan_2_color)

  scan_3_Y = space.move_Detector(scan_3_Y, scan_3_end, scan_3_height, check3, scan_3_X)
  check3 = space.check()
  scan_3_color = space.detecting_partical(scan_3_Y, scan_3_height, pt_3_Y, pt_3_height, scan_3_color)

}
function draw_scanner() {
  r.DrawRectangle(scan_1_X, scan_1_y, scan_width, scan_height, scan_1_color)
  r.DrawRectangle(scan_2_X, scan_1_y, scan_width, scan_height, scan_2_color)
  r.DrawRectangle(scan_3_X, scan_3_Y, scan_3_width, scan_3_height, scan_3_color)

}

function draw_particals() {
  r.DrawRectangle(pt_2_X, scan_1_y, pt_2_width, window_HEIGHT, r.SKYBLUE)
  r.DrawRectangle(pt_1_x, scan_1_y, pt_1_width, window_HEIGHT, r.SKYBLUE)
  r.DrawRectangle(scan_3_X, pt_3_Y, scan_3_width, pt_3_height, r.SKYBLUE)
}

function draw() {

  r.BeginDrawing();
  r.ClearBackground(r.BLACK)
  draw_particals()
  draw_scanner()
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