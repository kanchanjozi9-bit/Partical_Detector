const r = require("raylib");
const space = require("./space");
const d1 = require("./d1");
const d2 = require("./d2");
const d3 = require("./d3");
function running() {
    return !r.WindowShouldClose();
}

const windowWIDTH = 900;
const windowHEIGHT = 500;

//Particals----------------------->>
const pt_2_x = windowWIDTH / 2;
const pt_2_width = 100;

const pt_1_x = pt_2_x / 2;
const pt_1_width = 40;

const pt_3_height = 30;
const pt_3_Y = windowHEIGHT / 2;

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWIDTH, windowHEIGHT, "Partical Detector");
    r.SetTargetFPS(60);

    d1.scanner_height = r.GetScreenHeight();
    d1.scanner_end = r.GetScreenWidth() / 2 - d1.scannerWidth;

    d2.scanner_start = r.GetScreenWidth() / 2;
    d2.scanner_X = r.GetScreenWidth() / 2;
    d2.scanner_end = r.GetScreenWidth() - d2.scannerWidth;
    d2.scanner_height = r.GetScreenHeight();

    d3.scannerWidth = r.GetScreenWidth();
    d3.scanner_end = r.GetScreenHeight() - d3.scanner_height;
}

function update() {
    d1.velocity = space.updateVelocity(
        d1.velocity,
        d1.scanner_X,
        d1.scanner_start,
        d1.scanner_end,
    );
    d1.scanner_X = d1.scanner_X + d1.velocity;
    d1.scanner_color = space.detecting_partical(
        d1.scanner_X,
        d1.scannerWidth,
        pt_1_x,
        pt_1_width,
        d1.scanner_color,
    );

    d2.velocity = space.updateVelocity(
        d2.velocity,
        d2.scanner_X,
        d2.scanner_start,
        d2.scanner_end,
    );
    d2.scanner_X = d2.scanner_X + d2.velocity;
    d2.scanner_color = space.detecting_partical(
        d2.scanner_X,
        d2.scannerWidth,
        pt_2_x,
        pt_2_width,
        d2.scanner_color,
    );

    d3.velocity = space.updateVelocity(
        d3.velocity,
        d3.scanner_Y,
        d3.scanner_start,
        d3.scanner_end,
    );
    d3.scanner_Y = d3.scanner_Y + d3.velocity;
    d3.scanner_color = space.detecting_partical(
        d3.scanner_Y,
        d3.scanner_height,
        pt_3_Y,
        pt_3_height,
        d3.scanner_color,
    );
}
function draw_scanner() {
    r.DrawRectangle(
        d1.scanner_X,
        d1.scanner_Y,
        d1.scannerWidth,
        d1.scanner_height,
        d1.scanner_color,
    );

    r.DrawRectangle(
        d2.scanner_X,
        d2.scanner_Y,
        d2.scannerWidth,
        d2.scanner_height,
        d2.scanner_color,
    );

    r.DrawRectangle(
        d3.scanner_X,
        d3.scanner_Y,
        d3.scannerWidth,
        d3.scanner_height,
        d3.scanner_color,
    );
}

function draw_particals() {
    r.DrawRectangle(pt_1_x, d1.scanner_Y, pt_1_width, windowHEIGHT, r.PINK);
    r.DrawRectangle(pt_2_x, d2.scanner_Y, pt_2_width, windowHEIGHT, r.PINK);
    r.DrawRectangle(d3.scanner_X, pt_3_Y, d3.scannerWidth, pt_3_height, r.PINK);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    draw_particals();
    draw_scanner();
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
