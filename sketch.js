const r = require("raylib");
const space = require("./space")

function running() {
  return !r.WindowShouldClose();
}

const windowWIDTH = 900;
const windowHEIGHT = 500;

//Scanners ----------->>
const scanWidth = 30;
const scanHeight = windowHEIGHT

let scan_1_y = 0;
let scan_1_X = 0;
const scan_1_start = 0
const scan_1_end = windowWIDTH / 2
let scan_1_at_end = false
let scan_1_color = r.WHITE

const scan_2_start = windowWIDTH / 2
let scan_2_X = scan_2_start
const scan_2_end = windowWIDTH
let scan_2_at_end = false
let scan_2_color = r.WHITE

let scan_3_X = 0
let scan_3_Y = 0
let scan_3_height = 30
const scan_3_width = windowWIDTH
let scan_3_color = r.WHITE
let check3 = false
let scan_3_end = windowHEIGHT

//Particals----------------------->>
const pt_2_X = windowWIDTH / 2;
const pt_2_width = 100;

const pt_1_x = pt_2_X / 2
const pt_1_width = 40

const pt_3_height = 30
const pt_3_Y = windowHEIGHT / 2

function setup() {
  r.InitWindow(windowWIDTH, windowHEIGHT, "Partical Detector")
  r.SetTargetFPS(60)
  r.SetTraceLogLevel(r.LOG_NONE);
}

function scanner_1() {
  scan_1_X = space.move_Detector(scan_1_X, scan_1_end, scanWidth, scan_1_at_end, scan_1_start)
  scan_1_at_end = space.check()
  scan_1_color = space.detecting_partical(scan_1_X, scanWidth, pt_1_x, pt_1_width, scan_1_color)
}

function scanner_2() {
  scan_2_X = space.move_Detector(scan_2_X, scan_2_end, scanWidth, scan_2_at_end, scan_2_start)
  scan_2_at_end = space.check()
  scan_2_color = space.detecting_partical(scan_2_X, scanWidth, pt_2_X, pt_2_width, scan_2_color)
}

function scanner_3() {
  scan_3_Y = space.move_Detector(scan_3_Y, scan_3_end, scan_3_height, check3, scan_3_X)
  check3 = space.check()
  scan_3_color = space.detecting_partical(scan_3_Y, scan_3_height, pt_3_Y, pt_3_height, scan_3_color)
}

function update() {
  scanner_1()
  scanner_2()
  scanner_3()
}
function draw_scanner() {

  r.DrawRectangle(scan_1_X, scan_1_y, scanWidth, scanHeight, scan_1_color)
  r.DrawRectangle(scan_2_X, scan_1_y, scanWidth, scanHeight, scan_2_color)
  r.DrawRectangle(scan_3_X, scan_3_Y, scan_3_width, scan_3_height, scan_3_color)

}

function draw_particals() {

  r.DrawRectangle(pt_2_X, scan_1_y, pt_2_width, windowHEIGHT, r.PINK)
  r.DrawRectangle(pt_1_x, scan_1_y, pt_1_width, windowHEIGHT, r.PINK)
  r.DrawRectangle(scan_3_X, pt_3_Y, scan_3_width, pt_3_height, r.PINK)
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