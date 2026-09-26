const r = require("raylib")
let check_fun
function move_Detector(X, Range, d_width, check, start) {

    let Xx = X;
    let Range_fun = Range;
    let d_width_fun = d_width
    check_fun = check

    if (check_fun === true) {
        if (Xx < Range_fun - d_width_fun) {
            Xx += 3
        } else check_fun = false
    }
    if (check_fun === false) {
        if (Xx >= start) {
            Xx -= 3
        } else {
            check_fun = true
        }
    }
    return Xx

}
function check() {
    return check_fun
}
function detecting_partical(X, d_width, partical_X, patrical_width, color) {
    //step 3
    if (X + d_width >= partical_X && X <= partical_X + patrical_width) {
        color = r.RED
    } else {
        color = r.WHITE
    }
    return color
}

module.exports = {
    move_Detector, check, detecting_partical,
};