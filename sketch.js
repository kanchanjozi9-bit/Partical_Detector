const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(WIDTH, HIGHT, "Partical Detector")
}

function update() {
  // change the state
}

function draw() {
  // draw the current state
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